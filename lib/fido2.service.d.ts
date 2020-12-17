/// <reference types="node" />
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import { EventEmitter } from 'events';
import * as fido2 from './fido2';
import { Logger } from 'ts-log';
export declare type RPCError = {
    name: string;
    message: string;
    code: number;
    details: string;
};
export declare class FIDO2Service extends EventEmitter {
    serviceFn: () => ServiceClient;
    client?: ServiceClient;
    log: Logger;
    constructor(serviceFn: () => ServiceClient);
    service(): ServiceClient;
    emitError(err: RPCError): void;
    devices(req: fido2.DevicesRequest): Promise<fido2.DevicesResponse>;
    deviceInfo(req: fido2.DeviceInfoRequest): Promise<fido2.DeviceInfoResponse>;
    deviceType(req: fido2.DeviceTypeRequest): Promise<fido2.DeviceTypeResponse>;
    makeCredential(req: fido2.MakeCredentialRequest): Promise<fido2.MakeCredentialResponse>;
    setPIN(req: fido2.SetPINRequest): Promise<fido2.SetPINResponse>;
    reset(req: fido2.ResetRequest): Promise<fido2.ResetResponse>;
    retryCount(req: fido2.RetryCountRequest): Promise<fido2.RetryCountResponse>;
    assertion(req: fido2.AssertionRequest): Promise<fido2.AssertionResponse>;
    credentialsInfo(req: fido2.CredentialsInfoRequest): Promise<fido2.CredentialsInfoResponse>;
    credentials(req: fido2.CredentialsRequest): Promise<fido2.CredentialsResponse>;
    relyingParties(req: fido2.RelyingPartiesRequest): Promise<fido2.RelyingPartiesResponse>;
    generateHMACSecret(req: fido2.GenerateHMACSecretRequest): Promise<fido2.GenerateHMACSecretResponse>;
    hmacSecret(req: fido2.HMACSecretRequest): Promise<fido2.HMACSecretResponse>;
}
