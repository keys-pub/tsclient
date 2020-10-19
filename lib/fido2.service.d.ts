/// <reference types="node" />
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import { EventEmitter } from 'events';
import * as fido2 from './fido2.d';
export declare type RPCError = {
    name: string;
    message: string;
    code: number;
    details: string;
};
export declare class FIDO2Service extends EventEmitter {
    service: ServiceClient;
    constructor(service: ServiceClient);
    emitError(err: RPCError): void;
    Devices(req: fido2.DevicesRequest): Promise<fido2.DevicesResponse>;
    DeviceInfo(req: fido2.DeviceInfoRequest): Promise<fido2.DeviceInfoResponse>;
    DeviceType(req: fido2.DeviceTypeRequest): Promise<fido2.DeviceTypeResponse>;
    MakeCredential(req: fido2.MakeCredentialRequest): Promise<fido2.MakeCredentialResponse>;
    SetPIN(req: fido2.SetPINRequest): Promise<fido2.SetPINResponse>;
    Reset(req: fido2.ResetRequest): Promise<fido2.ResetResponse>;
    RetryCount(req: fido2.RetryCountRequest): Promise<fido2.RetryCountResponse>;
    Assertion(req: fido2.AssertionRequest): Promise<fido2.AssertionResponse>;
    CredentialsInfo(req: fido2.CredentialsInfoRequest): Promise<fido2.CredentialsInfoResponse>;
    Credentials(req: fido2.CredentialsRequest): Promise<fido2.CredentialsResponse>;
    RelyingParties(req: fido2.RelyingPartiesRequest): Promise<fido2.RelyingPartiesResponse>;
    GenerateHMACSecret(req: fido2.GenerateHMACSecretRequest): Promise<fido2.GenerateHMACSecretResponse>;
    HMACSecret(req: fido2.HMACSecretRequest): Promise<fido2.HMACSecretResponse>;
}
