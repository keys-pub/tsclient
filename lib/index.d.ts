import * as grpc from '@grpc/grpc-js';
import { ClientReadableStream, ClientDuplexStream } from '@grpc/grpc-js/build/src/call';
import { appDir, certPath } from './env';
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import { RPCService, RPCError } from './rpc.service';
import { FIDO2Service } from './fido2.service';
declare class Credentials {
    token: string;
    certPath: string;
    constructor(certPath: string);
    grpc(): grpc.ChannelCredentials;
}
declare const rpcService: (addr: string, creds: Credentials) => RPCService;
declare const fido2Service: (addr: string, creds: Credentials) => FIDO2Service;
export { Credentials, rpcService, fido2Service, RPCService, FIDO2Service, ServiceClient, ClientDuplexStream, ClientReadableStream, RPCError, appDir, certPath, };
