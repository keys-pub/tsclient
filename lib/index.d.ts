import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
declare class Client {
    appDir: string;
    port: number;
    authToken: string;
    keysClient?: ServiceClient;
    fido2Client?: ServiceClient;
    constructor(appDir: string, port: number);
    setAuthToken(authToken: string): void;
    close(): void;
    keys(): ServiceClient | undefined;
    auth(): ServiceClient | undefined;
    rpc(name: string): ServiceClient | undefined;
    private creds;
    private newClient;
}
export { Client };
