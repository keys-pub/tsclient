// Code generated by protoc-gen-tsrpc DO NOT EDIT.
// InputID: 2c5317c90471dee9f8a60cb47b72d171f45d63e0

import {ServiceClient} from '@grpc/grpc-js/build/src/make-client'
import {ClientDuplexStream} from '@grpc/grpc-js/build/src/call'
import * as grpc from '@grpc/grpc-js'
import {EventEmitter} from 'events'
import * as fido2 from './fido2.d'

export type RPCError = {
  name: string
  message: string
  code: number
  details: string
}

export class FIDO2Service extends EventEmitter {
  service: ServiceClient
  
  constructor(service: ServiceClient) {
    super()
    this.service = service
  }

  emitError(err: RPCError) {
    switch (err.code) {
    case grpc.status.PERMISSION_DENIED:
    case grpc.status.UNAUTHENTICATED:
      this.emit('unauthenticated', err)
      break
    case grpc.status.UNAVAILABLE:
      this.emit('unavailable', err)
      break
    default:
      this.emit('error', err)
      break
    }
  }

  Devices(req: fido2.DevicesRequest): Promise<fido2.DevicesResponse> {
    return new Promise<fido2.DevicesResponse>((resolve, reject) => {
      this.service.Devices(req, (err: RPCError, resp: fido2.DevicesResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  DeviceInfo(req: fido2.DeviceInfoRequest): Promise<fido2.DeviceInfoResponse> {
    return new Promise<fido2.DeviceInfoResponse>((resolve, reject) => {
      this.service.DeviceInfo(req, (err: RPCError, resp: fido2.DeviceInfoResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  DeviceType(req: fido2.DeviceTypeRequest): Promise<fido2.DeviceTypeResponse> {
    return new Promise<fido2.DeviceTypeResponse>((resolve, reject) => {
      this.service.DeviceType(req, (err: RPCError, resp: fido2.DeviceTypeResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  MakeCredential(req: fido2.MakeCredentialRequest): Promise<fido2.MakeCredentialResponse> {
    return new Promise<fido2.MakeCredentialResponse>((resolve, reject) => {
      this.service.MakeCredential(req, (err: RPCError, resp: fido2.MakeCredentialResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  SetPIN(req: fido2.SetPINRequest): Promise<fido2.SetPINResponse> {
    return new Promise<fido2.SetPINResponse>((resolve, reject) => {
      this.service.SetPIN(req, (err: RPCError, resp: fido2.SetPINResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  Reset(req: fido2.ResetRequest): Promise<fido2.ResetResponse> {
    return new Promise<fido2.ResetResponse>((resolve, reject) => {
      this.service.Reset(req, (err: RPCError, resp: fido2.ResetResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  RetryCount(req: fido2.RetryCountRequest): Promise<fido2.RetryCountResponse> {
    return new Promise<fido2.RetryCountResponse>((resolve, reject) => {
      this.service.RetryCount(req, (err: RPCError, resp: fido2.RetryCountResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  Assertion(req: fido2.AssertionRequest): Promise<fido2.AssertionResponse> {
    return new Promise<fido2.AssertionResponse>((resolve, reject) => {
      this.service.Assertion(req, (err: RPCError, resp: fido2.AssertionResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  CredentialsInfo(req: fido2.CredentialsInfoRequest): Promise<fido2.CredentialsInfoResponse> {
    return new Promise<fido2.CredentialsInfoResponse>((resolve, reject) => {
      this.service.CredentialsInfo(req, (err: RPCError, resp: fido2.CredentialsInfoResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  Credentials(req: fido2.CredentialsRequest): Promise<fido2.CredentialsResponse> {
    return new Promise<fido2.CredentialsResponse>((resolve, reject) => {
      this.service.Credentials(req, (err: RPCError, resp: fido2.CredentialsResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  RelyingParties(req: fido2.RelyingPartiesRequest): Promise<fido2.RelyingPartiesResponse> {
    return new Promise<fido2.RelyingPartiesResponse>((resolve, reject) => {
      this.service.RelyingParties(req, (err: RPCError, resp: fido2.RelyingPartiesResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  GenerateHMACSecret(req: fido2.GenerateHMACSecretRequest): Promise<fido2.GenerateHMACSecretResponse> {
    return new Promise<fido2.GenerateHMACSecretResponse>((resolve, reject) => {
      this.service.GenerateHMACSecret(req, (err: RPCError, resp: fido2.GenerateHMACSecretResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }

  HMACSecret(req: fido2.HMACSecretRequest): Promise<fido2.HMACSecretResponse> {
    return new Promise<fido2.HMACSecretResponse>((resolve, reject) => {
      this.service.HMACSecret(req, (err: RPCError, resp: fido2.HMACSecretResponse) => {
        if (err) {
		  reject(err)
		  this.emitError(err)
          return
        }
        resolve(resp)
      })		
    })
  }
}
