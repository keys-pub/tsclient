import * as grpc from '@grpc/grpc-js'

import * as fs from 'fs'

import keysProto from './keys.proto'
import fido2Proto from './fido2.proto'

// TODO: Ask @grpc/proto-loader to export createPackageDefinition
import {createPackageDefinition} from './proto-loader'

import {ClientDuplexStream} from '@grpc/grpc-js/build/src/call'
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

class Auth {
  token: string

  constructor() {
    this.token = ''
  }
}

type CallMetadataOptions = {service_url: string}

export const credentials = (certPath: string, auth: Auth): grpc.ChannelCredentials => {
  const cert = fs.readFileSync(certPath, 'ascii')

  const grpcAuth = (
    options: CallMetadataOptions,
    cb: (err: Error | null, metadata?: grpc.Metadata) => void
  ) => {
    const metadata = new grpc.Metadata()
    metadata.set('authorization', auth.token)
    cb(null, metadata)
  }

  const callCreds = grpc.credentials.createFromMetadataGenerator(grpcAuth)
  const sslCreds = grpc.credentials.createSsl(Buffer.from(cert, 'ascii'))
  const creds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds)
  return creds
}

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

const createKeysClient = (addr: string, credentials: grpc.ChannelCredentials): KeysService => {
  const packageDefinition: PackageDefinition = createPackageDefinition(keysProto as Root, {
    arrays: true,
    enums: String,
    defaults: true,
  })
  const serviceCls = newClient(packageDefinition, 'keys', 'Keys')
  const cl = new serviceCls(addr, credentials)
  return new KeysService(cl)
}

const createFIDO2Client = (addr: string, credentials: grpc.ChannelCredentials): FIDO2Service => {
  const packageDefinition: PackageDefinition = createPackageDefinition(fido2Proto as Root, {
    arrays: true,
    enums: String,
    defaults: true,
  })
  const serviceCls = newClient(packageDefinition, 'fido2', 'FIDO2')
  const cl = new serviceCls(addr, credentials)
  return new FIDO2Service(cl)
}

export {
  Auth,
  createKeysClient,
  createFIDO2Client,
  KeysService,
  FIDO2Service,
  ServiceClient,
  ClientDuplexStream,
  RPCError,
  appDir,
  certPath,
}
