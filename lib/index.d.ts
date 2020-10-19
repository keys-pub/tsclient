import * as grpc from '@grpc/grpc-js';
import { ClientDuplexStream } from '@grpc/grpc-js/build/src/call';
import { appDir, certPath } from './env';
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import { KeysService, RPCError } from './keys.service';
import { FIDO2Service } from './fido2.service';
declare class Auth {
    token: string;
    constructor();
}
export declare const credentials: (certPath: string, auth: Auth) => grpc.ChannelCredentials;
declare const createKeysClient: (addr: string, credentials: grpc.ChannelCredentials) => KeysService;
declare const createFIDO2Client: (addr: string, credentials: grpc.ChannelCredentials) => FIDO2Service;
export { Auth, createKeysClient, createFIDO2Client, KeysService, FIDO2Service, ServiceClient, ClientDuplexStream, RPCError, appDir, certPath, };
