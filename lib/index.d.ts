import * as grpc from '@grpc/grpc-js';
import { ClientDuplexStream } from '@grpc/grpc-js/build/src/call';
import { appDir, certPath } from './env';
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import { KeysService, RPCError } from './keys.service';
import { FIDO2Service } from './fido2.service';
declare class Credentials {
    token: string;
    certPath: string;
    constructor(certPath: string);
    grpc(): grpc.ChannelCredentials;
}
declare const keysService: (addr: string, creds: Credentials) => KeysService;
declare const fido2Service: (addr: string, creds: Credentials) => FIDO2Service;
export { Credentials, keysService, fido2Service, KeysService, FIDO2Service, ServiceClient, ClientDuplexStream, RPCError, appDir, certPath, };
