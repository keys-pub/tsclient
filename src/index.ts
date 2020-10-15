import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'

import {
  ServiceClient,
  ServiceClientConstructor,
  GrpcObject,
  ServiceDefinition,
} from '@grpc/grpc-js/build/src/make-client'

import * as fs from 'fs'
import * as path from 'path'

type CallMetadataOptions = {service_url: string}

class Client {
  appDir: string
  port: number
  authToken: string
  keysClient?: ServiceClient
  fido2Client?: ServiceClient

  constructor(appDir: string, port: number) {
    this.appDir = appDir
    this.port = port
    this.authToken = ''
  }

  setAuthToken(authToken: string) {
    this.authToken = authToken
  }

  close() {
    if (this.keysClient) {
      this.keysClient.close()
      this.keysClient = undefined
    }
    if (this.fido2Client) {
      this.fido2Client.close()
      this.fido2Client = undefined
    }
  }

  keys(): ServiceClient | undefined {
    if (!this.keysClient) {
      this.keysClient = this.newClient(path.join('keys.pub', __dirname, 'keys.proto'), 'service', 'Keys')
    }
    return this.keysClient
  }

  auth(): ServiceClient | undefined {
    if (!this.fido2Client) {
      this.fido2Client = this.newClient(path.join('keys.pub', __dirname, 'fido2.proto'), 'fido2', 'Auth')
    }
    return this.fido2Client
  }

  rpc(name: string): ServiceClient | undefined {
    switch (name) {
      case 'Keys':
        return this.keys()
      case 'Auth':
        return this.auth()
    }
    return undefined
  }

  private creds(): any {
    const certPath = path.join(this.appDir, 'ca.pem')
    console.log('Loading cert', certPath)
    const cert = fs.readFileSync(certPath, 'ascii')
    // console.log('Using cert:', cert)

    const auth = (
      options: CallMetadataOptions,
      cb: (err: Error | null, metadata?: grpc.Metadata) => void
    ) => {
      const metadata = new grpc.Metadata()
      metadata.set('authorization', this.authToken)
      cb(null, metadata)
    }

    const callCreds = grpc.credentials.createFromMetadataGenerator(auth)
    const sslCreds = grpc.credentials.createSsl(Buffer.from(cert, 'ascii'))
    const creds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds)
    return creds
  }

  private newClient(protoPath: string, packageName: string, serviceName: string): ServiceClient {
    // console.log('Proto path:', protoPath)
    // console.log('Proto path (resolved):', path.resolve(protoPath))
    const packageDefinition = protoLoader.loadSync(protoPath, {arrays: true, enums: String, defaults: true})
    const protoDescriptor: GrpcObject = grpc.loadPackageDefinition(packageDefinition)
    if (!protoDescriptor[packageName]) {
      throw new Error('proto descriptor should have package ' + packageName)
    }

    const services = protoDescriptor[packageName] as GrpcObject

    const serviceCls: ServiceClientConstructor = services[serviceName] as ServiceClientConstructor
    if (typeof serviceCls !== 'function') {
      throw new Error('proto descriptor missing ' + serviceName)
    }

    // console.log('Using client on port', this.port)
    const cl = new serviceCls('localhost:' + this.port, this.creds())
    return cl
  }
}

export {Client}
