import * as grpc from '@grpc/grpc-js'

import * as fs from 'fs'

import keysProto from './keys.proto'
import fido2Proto from './fido2.proto'

// TODO: Ask @grpc/proto-loader to export createPackageDefinition
import {createPackageDefinition} from './proto-loader'

import {ClientReadableStream, ClientDuplexStream} from '@grpc/grpc-js/build/src/call'
import {appDir, certPath} from './env'

import {
  ServiceClient,
  ServiceClientConstructor,
  GrpcObject,
  ServiceDefinition,
  PackageDefinition,
} from '@grpc/grpc-js/build/src/make-client'

import {rpc, Message, Method, Root, RPCImpl, RPCImplCallback} from 'protobufjs'

import {KeysService, RPCError} from './keys.service'
import {FIDO2Service} from './fido2.service'

class Credentials {
  token: string
  certPath: string

  constructor(certPath: string) {
    this.token = ''
    this.certPath = certPath
  }

  grpc(): grpc.ChannelCredentials {
    const cert = fs.readFileSync(this.certPath, 'ascii')

    const grpcAuth = (
      options: CallMetadataOptions,
      cb: (err: Error | null, metadata?: grpc.Metadata) => void
    ) => {
      const metadata = new grpc.Metadata()
      metadata.set('authorization', this.token)
      cb(null, metadata)
    }

    const callCreds = grpc.credentials.createFromMetadataGenerator(grpcAuth)
    const sslCreds = grpc.credentials.createSsl(Buffer.from(cert, 'ascii'))
    const creds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds)
    return creds
  }
}

type CallMetadataOptions = {service_url: string}

const newClient = (
  packageDefinition: PackageDefinition,
  packageName: string,
  serviceName: string
): ServiceClientConstructor => {
  const protoDescriptor: GrpcObject = grpc.loadPackageDefinition(packageDefinition)

  if (!protoDescriptor[packageName]) {
    throw new Error('proto descriptor should have package ' + packageName)
  }
  const services = protoDescriptor[packageName] as GrpcObject
  const serviceCls: ServiceClientConstructor = services[serviceName] as ServiceClientConstructor
  if (typeof serviceCls !== 'function') {
    throw new Error('proto descriptor missing ' + serviceName)
  }
  return serviceCls
}

const keysService = (addr: string, creds: Credentials): KeysService => {
  const packageDefinition: PackageDefinition = createPackageDefinition(keysProto as Root, {
    arrays: true,
    enums: String,
    defaults: true,
  })
  const client = (): ServiceClient => {
    const serviceCls = newClient(packageDefinition, 'keys', 'Keys')
    return new serviceCls(addr, creds.grpc())
  }
  return new KeysService(client)
}

const fido2Service = (addr: string, creds: Credentials): FIDO2Service => {
  const packageDefinition: PackageDefinition = createPackageDefinition(fido2Proto as Root, {
    arrays: true,
    enums: String,
    defaults: true,
  })
  const client = (): ServiceClient => {
    const serviceCls = newClient(packageDefinition, 'fido2', 'FIDO2')
    return new serviceCls(addr, creds.grpc())
  }
  return new FIDO2Service(client)
}

export {
  Credentials,
  keysService,
  fido2Service,
  KeysService,
  FIDO2Service,
  ServiceClient,
  ClientDuplexStream,
  ClientReadableStream,
  RPCError,
  appDir,
  certPath,
}
