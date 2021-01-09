export declare enum EncryptMode {
    DEFAULT_ENCRYPT = "DEFAULT_ENCRYPT",
    SALTPACK_ENCRYPT = "SALTPACK_ENCRYPT",
    SALTPACK_SIGNCRYPT = "SALTPACK_SIGNCRYPT"
}
export declare enum AuthStatus {
    AUTH_UNKNOWN = "AUTH_UNKNOWN",
    AUTH_SETUP_NEEDED = "AUTH_SETUP_NEEDED",
    AUTH_UNLOCKED = "AUTH_UNLOCKED",
    AUTH_LOCKED = "AUTH_LOCKED"
}
export declare enum AuthType {
    UNKNOWN_AUTH = "UNKNOWN_AUTH",
    PASSWORD_AUTH = "PASSWORD_AUTH",
    PAPER_KEY_AUTH = "PAPER_KEY_AUTH",
    FIDO2_HMAC_SECRET_AUTH = "FIDO2_HMAC_SECRET_AUTH"
}
export declare enum ExportType {
    DEFAULT_EXPORT_TYPE = "DEFAULT_EXPORT_TYPE",
    SSH_EXPORT_TYPE = "SSH_EXPORT_TYPE"
}
export declare enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum SecretType {
    UNKNOWN_SECRET_TYPE = "UNKNOWN_SECRET_TYPE",
    PASSWORD_SECRET = "PASSWORD_SECRET",
    CONTACT_SECRET = "CONTACT_SECRET",
    CARD_SECRET = "CARD_SECRET",
    NOTE_SECRET = "NOTE_SECRET"
}
export declare enum Encoding {
    HEX = "HEX",
    BASE62 = "BASE62",
    BASE58 = "BASE58",
    BASE32 = "BASE32",
    BASE16 = "BASE16",
    BASE64 = "BASE64",
    SALTPACK = "SALTPACK",
    BIP39 = "BIP39"
}
export declare enum UserStatus {
    USER_UNKNOWN = "USER_UNKNOWN",
    USER_OK = "USER_OK",
    USER_RESOURCE_NOT_FOUND = "USER_RESOURCE_NOT_FOUND",
    USER_CONTENT_NOT_FOUND = "USER_CONTENT_NOT_FOUND",
    USER_CONTENT_INVALID = "USER_CONTENT_INVALID",
    USER_CONN_FAILURE = "USER_CONN_FAILURE",
    USER_FAILURE = "USER_FAILURE"
}
export declare enum MessageStatus {
    MESSAGE_SENT = "MESSAGE_SENT",
    MESSAGE_PENDING = "MESSAGE_PENDING",
    MESSAGE_ERROR = "MESSAGE_ERROR"
}
export declare enum WormholeStatus {
    WORMHOLE_DEFAULT = "WORMHOLE_DEFAULT",
    WORMHOLE_STARTING = "WORMHOLE_STARTING",
    WORMHOLE_OFFERING = "WORMHOLE_OFFERING",
    WORMHOLE_ANSWERING = "WORMHOLE_ANSWERING",
    WORMHOLE_HANDSHAKE = "WORMHOLE_HANDSHAKE",
    WORMHOLE_CONNECTED = "WORMHOLE_CONNECTED",
    WORMHOLE_CLOSED = "WORMHOLE_CLOSED"
}
export declare enum WormholeMessageStatus {
    WORMHOLE_MESSAGE_SENT = "WORMHOLE_MESSAGE_SENT",
    WORMHOLE_MESSAGE_PENDING = "WORMHOLE_MESSAGE_PENDING",
    WORMHOLE_MESSAGE_ACK = "WORMHOLE_MESSAGE_ACK"
}
export interface SignRequest {
    data?: Uint8Array;
    signer?: string;
    armored?: boolean;
    detached?: boolean;
}
export interface SignResponse {
    data?: Uint8Array;
    kid?: string;
}
export interface SignFileInput {
    in?: string;
    out?: string;
    signer?: string;
    armored?: boolean;
    detached?: boolean;
}
export interface SignFileOutput {
    kid?: string;
    out?: string;
    bytes?: number;
    total?: number;
}
export interface VerifyRequest {
    data?: Uint8Array;
}
export interface VerifyResponse {
    data?: Uint8Array;
    signer?: Key;
}
export interface VerifyDetachedRequest {
    data?: Uint8Array;
    sig?: Uint8Array;
}
export interface VerifyDetachedResponse {
    signer?: Key;
}
export interface VerifyInput {
    data?: Uint8Array;
}
export interface VerifyOutput {
    data?: Uint8Array;
    signer?: Key;
}
export interface VerifyFileInput {
    in?: string;
    out?: string;
}
export interface VerifyFileOutput {
    signer?: Key;
    out?: string;
}
export interface VerifyDetachedFileInput {
    in?: string;
    sig?: Uint8Array;
}
export interface VerifyDetachedInput {
    data?: Uint8Array;
    sig?: Uint8Array;
}
export interface Statement {
    sig?: Uint8Array;
    data?: Uint8Array;
    kid?: string;
    seq?: number;
    prev?: Uint8Array;
    revoke?: number;
    timestamp?: number;
    type?: string;
}
export interface SigchainRequest {
    kid?: string;
}
export interface SigchainResponse {
    key?: Key;
    statements?: Array<Statement>;
}
export interface StatementRequest {
    kid?: string;
    seq?: number;
}
export interface StatementResponse {
    statement?: Statement;
}
export interface StatementCreateRequest {
    data?: Uint8Array;
    kid?: string;
    local?: boolean;
}
export interface StatementCreateResponse {
    statement?: Statement;
}
export interface StatementRevokeRequest {
    seq?: number;
    kid?: string;
    local?: boolean;
}
export interface StatementRevokeResponse {
    statement?: Statement;
}
export interface SignInput {
    data?: Uint8Array;
    in?: string;
    out?: string;
    signer?: string;
    armored?: boolean;
    detached?: boolean;
}
export interface SignOutput {
    data?: Uint8Array;
    kid?: string;
}
export interface EncryptOptions {
    armored?: boolean;
    mode?: EncryptMode;
    noSenderRecipient?: boolean;
    noSign?: boolean;
}
export interface EncryptRequest {
    data?: Uint8Array;
    recipients?: Array<string>;
    sender?: string;
    options?: EncryptOptions;
}
export interface EncryptResponse {
    data?: Uint8Array;
    info?: string;
}
export interface EncryptFileInput {
    in?: string;
    out?: string;
    recipients?: Array<string>;
    sender?: string;
    options?: EncryptOptions;
}
export interface EncryptFileOutput {
    out?: string;
    bytes?: number;
    total?: number;
}
export interface EncryptInput {
    data?: Uint8Array;
    recipients?: Array<string>;
    sender?: string;
    options?: EncryptOptions;
}
export interface EncryptOutput {
    data?: Uint8Array;
}
export interface DecryptRequest {
    data?: Uint8Array;
}
export interface DecryptResponse {
    data?: Uint8Array;
    sender?: Key;
    mode?: EncryptMode;
}
export interface DecryptFileInput {
    in?: string;
    out?: string;
}
export interface DecryptFileOutput {
    sender?: Key;
    out?: string;
    bytes?: number;
    total?: number;
    mode?: EncryptMode;
}
export interface DecryptInput {
    data?: Uint8Array;
}
export interface DecryptOutput {
    data?: Uint8Array;
    sender?: Key;
    mode?: EncryptMode;
}
export interface RuntimeStatusRequest {
}
export interface RuntimeStatusResponse {
    version?: string;
    appName?: string;
    exe?: string;
    authStatus?: AuthStatus;
    sync?: boolean;
    fido2?: boolean;
}
export interface AuthSetupRequest {
    secret?: string;
    type?: AuthType;
    device?: string;
}
export interface AuthSetupResponse {
}
export interface AuthVaultRequest {
    phrase?: string;
}
export interface AuthVaultResponse {
}
export interface AuthUnlockRequest {
    secret?: string;
    type?: AuthType;
    client?: string;
}
export interface AuthUnlockResponse {
    authToken?: string;
}
export interface AuthProvisionRequest {
    secret?: string;
    type?: AuthType;
    device?: string;
    generate?: boolean;
}
export interface AuthProvisionResponse {
    provision?: AuthProvision;
}
export interface AuthDeprovisionRequest {
    id?: string;
}
export interface AuthDeprovisionResponse {
}
export interface AuthPasswordChangeRequest {
    old?: string;
    new?: string;
}
export interface AuthPasswordChangeResponse {
}
export interface AuthProvision {
    id?: string;
    type?: AuthType;
    createdAt?: number;
    aaguid?: string;
    noPin?: boolean;
}
export interface AuthProvisionsRequest {
}
export interface AuthProvisionsResponse {
    provisions?: Array<AuthProvision>;
}
export interface AuthLockRequest {
}
export interface AuthLockResponse {
}
export interface AuthResetRequest {
    appName?: string;
}
export interface AuthResetResponse {
}
export interface AuthRecoverRequest {
    paperKey?: string;
    newPassword?: string;
}
export interface AuthRecoverResponse {
    authToken?: string;
}
export interface KeyGenerateRequest {
    type?: string;
}
export interface KeyGenerateResponse {
    kid?: string;
}
export interface UserServiceRequest {
    kid?: string;
    service?: string;
}
export interface UserServiceResponse {
    service?: string;
}
export interface UserSignRequest {
    kid?: string;
    service?: string;
    name?: string;
}
export interface UserSignResponse {
    message?: string;
    name?: string;
}
export interface UserAddRequest {
    kid?: string;
    service?: string;
    name?: string;
    url?: string;
    local?: boolean;
}
export interface UserAddResponse {
    user?: User;
    statement?: Statement;
}
export interface KeyExportRequest {
    kid?: string;
    password?: string;
    type?: ExportType;
    public?: boolean;
    noPassword?: boolean;
}
export interface KeyExportResponse {
    export?: Uint8Array;
}
export interface KeyImportRequest {
    in?: Uint8Array;
    password?: string;
    update?: boolean;
}
export interface KeyImportResponse {
    kid?: string;
}
export interface KeyRemoveRequest {
    kid?: string;
}
export interface KeyRemoveResponse {
}
export interface Key {
    id?: string;
    type?: string;
    isPrivate?: boolean;
    user?: User;
    saved?: boolean;
    sigchainLength?: number;
    sigchainUpdatedAt?: number;
}
export interface KeyRequest {
    key?: string;
    search?: boolean;
    update?: boolean;
}
export interface KeyResponse {
    key?: Key;
}
export interface KeysRequest {
    query?: string;
    types?: Array<string>;
    sortField?: string;
    sortDirection?: SortDirection;
}
export interface KeysResponse {
    keys?: Array<Key>;
    sortField?: string;
    sortDirection?: SortDirection;
}
export interface Secret {
    id?: string;
    name?: string;
    type?: SecretType;
    username?: string;
    password?: string;
    url?: string;
    notes?: string;
    createdAt?: number;
    updatedAt?: number;
}
export interface SecretRequest {
    id?: string;
}
export interface SecretResponse {
    secret?: Secret;
}
export interface SecretSaveRequest {
    secret?: Secret;
}
export interface SecretSaveResponse {
    secret?: Secret;
}
export interface SecretRemoveRequest {
    id?: string;
}
export interface SecretRemoveResponse {
}
export interface SecretsRequest {
    query?: string;
    sortField?: string;
    sortDirection?: SortDirection;
}
export interface SecretsResponse {
    secrets?: Array<Secret>;
    sortField?: string;
    sortDirection?: SortDirection;
}
export interface RandRequest {
    numBytes?: number;
    encoding?: Encoding;
    noPadding?: boolean;
    lowercase?: boolean;
}
export interface RandResponse {
    data?: string;
}
export interface RandPasswordRequest {
    length?: number;
}
export interface RandPasswordResponse {
    password?: string;
}
export interface PullRequest {
    key?: string;
}
export interface PullResponse {
    kids?: Array<string>;
}
export interface PushRequest {
    key?: string;
    remoteCheck?: boolean;
}
export interface PushResponse {
    kid?: string;
    urls?: Array<string>;
}
export interface Collection {
    path?: string;
}
export interface CollectionsRequest {
    parent?: string;
    db?: string;
}
export interface CollectionsResponse {
    collections?: Array<Collection>;
}
export interface Document {
    path?: string;
    value?: string;
    createdAt?: number;
    updatedAt?: number;
}
export interface DocumentsRequest {
    prefix?: string;
    db?: string;
}
export interface DocumentsResponse {
    documents?: Array<Document>;
}
export interface DocumentDeleteRequest {
    path?: string;
    db?: string;
}
export interface DocumentDeleteResponse {
}
export interface User {
    id?: string;
    name?: string;
    kid?: string;
    seq?: number;
    service?: string;
    url?: string;
    status?: UserStatus;
    verifiedAt?: number;
    timestamp?: number;
    proxied?: boolean;
    err?: string;
}
export interface UserRequest {
    kid?: string;
    local?: boolean;
}
export interface UserResponse {
    user?: User;
}
export interface UserSearchRequest {
    query?: string;
    limit?: number;
    local?: boolean;
}
export interface UserSearchResponse {
    users?: Array<User>;
}
export interface SearchRequest {
    query?: string;
}
export interface SearchResponse {
    keys?: Array<Key>;
}
export interface VaultSyncRequest {
}
export interface VaultSyncResponse {
}
export interface VaultUnsyncRequest {
}
export interface VaultUnsyncResponse {
}
export interface VaultAuthRequest {
}
export interface VaultAuthResponse {
    phrase?: string;
}
export interface VaultStatusRequest {
}
export interface VaultStatusResponse {
    kid?: string;
    syncedAt?: number;
}
export interface VaultUpdateRequest {
}
export interface VaultUpdateResponse {
}
export interface Message {
    id?: string;
    sender?: Key;
    text?: Array<string>;
    status?: MessageStatus;
    createdAt?: number;
}
export interface MessagePrepareRequest {
    sender?: string;
    channel?: string;
    text?: string;
}
export interface MessagePrepareResponse {
    message?: Message;
}
export interface MessageCreateRequest {
    sender?: string;
    channel?: string;
    id?: string;
    text?: string;
}
export interface MessageCreateResponse {
    message?: Message;
}
export interface MessagesRequest {
    channel?: string;
    update?: boolean;
}
export interface MessagesResponse {
    messages?: Array<Message>;
}
export interface RelayRequest {
    keys?: Array<string>;
    user?: string;
}
export interface RelayOutput {
    channel?: string;
    user?: string;
    index?: number;
}
export interface Channel {
    id?: string;
    name?: string;
    snippet?: string;
    updatedAt?: number;
    index?: number;
    readIndex?: number;
}
export interface ChannelsRequest {
    user?: string;
}
export interface ChannelsResponse {
    channels?: Array<Channel>;
}
export interface ChannelCreateRequest {
    name?: string;
    user?: string;
}
export interface ChannelCreateResponse {
    channel?: Channel;
}
export interface ChannelLeaveRequest {
    channel?: string;
}
export interface ChannelLeaveResponse {
}
export interface ChannelReadRequest {
    channel?: string;
    index?: number;
}
export interface ChannelReadResponse {
}
export interface ChannelInviteRequest {
    channel?: string;
    recipients?: Array<string>;
    sender?: string;
}
export interface ChannelInviteResponse {
    message?: Message;
}
export interface Follow {
    recipient?: string;
    sender?: string;
}
export interface FollowRequest {
    recipient?: string;
    sender?: string;
}
export interface FollowResponse {
    follow?: Follow;
}
export interface FollowsRequest {
    recipient?: string;
    update?: boolean;
}
export interface FollowsResponse {
    follows?: Array<Follow>;
}
export interface AdminSignURLRequest {
    signer?: string;
    method?: string;
    url?: string;
}
export interface AdminSignURLResponse {
    auth?: string;
    url?: string;
    curl?: string;
}
export interface AdminCheckRequest {
    signer?: string;
    check?: string;
}
export interface AdminCheckResponse {
}
export interface Config_App {
    location?: string;
    history?: Array<string>;
    navMinimized?: boolean;
}
export interface Config_Encrypt {
    recipients?: Array<string>;
    sender?: string;
    noSenderRecipient?: boolean;
    noSign?: boolean;
}
export interface Config_Sign {
    signer?: string;
}
export interface Config {
    app?: Config_App;
    encrypt?: Config_Encrypt;
    sign?: Config_Sign;
}
export interface ConfigGetRequest {
    name?: string;
}
export interface ConfigGetResponse {
    config?: Config;
}
export interface ConfigSetRequest {
    name?: string;
    config?: Config;
}
export interface ConfigSetResponse {
}
export interface WormholeInput {
    sender?: string;
    recipient?: string;
    invite?: string;
    id?: string;
    text?: string;
}
export interface WormholeMessage {
    id?: string;
    sender?: Key;
    recipient?: Key;
    status?: WormholeMessageStatus;
    text?: string;
    createdAt?: number;
}
export interface WormholeOutput {
    message?: WormholeMessage;
    status?: WormholeStatus;
}
export interface RPCService {
    KeyGenerate: (r: KeyGenerateRequest) => KeyGenerateResponse;
    Keys: (r: KeysRequest) => KeysResponse;
    Key: (r: KeyRequest) => KeyResponse;
    KeyImport: (r: KeyImportRequest) => KeyImportResponse;
    KeyExport: (r: KeyExportRequest) => KeyExportResponse;
    KeyRemove: (r: KeyRemoveRequest) => KeyRemoveResponse;
    Sign: (r: SignRequest) => SignResponse;
    SignFile: (r: () => {
        value: SignFileInput;
        done: boolean;
    }, cb: (a: {
        value: SignFileOutput;
        done: boolean;
    }) => void) => void;
    SignStream: (r: () => {
        value: SignInput;
        done: boolean;
    }, cb: (a: {
        value: SignOutput;
        done: boolean;
    }) => void) => void;
    Verify: (r: VerifyRequest) => VerifyResponse;
    VerifyFile: (r: () => {
        value: VerifyFileInput;
        done: boolean;
    }, cb: (a: {
        value: VerifyFileOutput;
        done: boolean;
    }) => void) => void;
    VerifyStream: (r: () => {
        value: VerifyInput;
        done: boolean;
    }, cb: (a: {
        value: VerifyOutput;
        done: boolean;
    }) => void) => void;
    VerifyDetached: (r: VerifyDetachedRequest) => VerifyDetachedResponse;
    VerifyDetachedFile: (r: () => {
        value: VerifyDetachedFileInput;
        done: boolean;
    }) => VerifyDetachedResponse;
    VerifyDetachedStream: (r: () => {
        value: VerifyDetachedInput;
        done: boolean;
    }) => VerifyDetachedResponse;
    Encrypt: (r: EncryptRequest) => EncryptResponse;
    EncryptStream: (r: () => {
        value: EncryptInput;
        done: boolean;
    }, cb: (a: {
        value: EncryptOutput;
        done: boolean;
    }) => void) => void;
    EncryptFile: (r: () => {
        value: EncryptFileInput;
        done: boolean;
    }, cb: (a: {
        value: EncryptFileOutput;
        done: boolean;
    }) => void) => void;
    Decrypt: (r: DecryptRequest) => DecryptResponse;
    DecryptStream: (r: () => {
        value: DecryptInput;
        done: boolean;
    }, cb: (a: {
        value: DecryptOutput;
        done: boolean;
    }) => void) => void;
    DecryptFile: (r: () => {
        value: DecryptFileInput;
        done: boolean;
    }, cb: (a: {
        value: DecryptFileOutput;
        done: boolean;
    }) => void) => void;
    Sigchain: (r: SigchainRequest) => SigchainResponse;
    Statement: (r: StatementRequest) => StatementResponse;
    StatementCreate: (r: StatementCreateRequest) => StatementCreateResponse;
    StatementRevoke: (r: StatementRevokeRequest) => StatementRevokeResponse;
    User: (r: UserRequest) => UserResponse;
    UserSearch: (r: UserSearchRequest) => UserSearchResponse;
    UserService: (r: UserServiceRequest) => UserServiceResponse;
    UserSign: (r: UserSignRequest) => UserSignResponse;
    UserAdd: (r: UserAddRequest) => UserAddResponse;
    Search: (r: SearchRequest) => SearchResponse;
    Secret: (r: SecretRequest) => SecretResponse;
    SecretSave: (r: SecretSaveRequest) => SecretSaveResponse;
    SecretRemove: (r: SecretRemoveRequest) => SecretRemoveResponse;
    Secrets: (r: SecretsRequest) => SecretsResponse;
    Pull: (r: PullRequest) => PullResponse;
    Push: (r: PushRequest) => PushResponse;
    Wormhole: (r: () => {
        value: WormholeInput;
        done: boolean;
    }, cb: (a: {
        value: WormholeOutput;
        done: boolean;
    }) => void) => void;
    AuthSetup: (r: AuthSetupRequest) => AuthSetupResponse;
    AuthVault: (r: AuthVaultRequest) => AuthVaultResponse;
    AuthUnlock: (r: AuthUnlockRequest) => AuthUnlockResponse;
    AuthLock: (r: AuthLockRequest) => AuthLockResponse;
    AuthReset: (r: AuthResetRequest) => AuthResetResponse;
    AuthRecover: (r: AuthRecoverRequest) => AuthRecoverResponse;
    RuntimeStatus: (r: RuntimeStatusRequest) => RuntimeStatusResponse;
    Rand: (r: RandRequest) => RandResponse;
    RandPassword: (r: RandPasswordRequest) => RandPasswordResponse;
    AuthProvision: (r: AuthProvisionRequest) => AuthProvisionResponse;
    AuthDeprovision: (r: AuthDeprovisionRequest) => AuthDeprovisionResponse;
    AuthProvisions: (r: AuthProvisionsRequest) => AuthProvisionsResponse;
    AuthPasswordChange: (r: AuthPasswordChangeRequest) => AuthPasswordChangeResponse;
    VaultAuth: (r: VaultAuthRequest) => VaultAuthResponse;
    VaultSync: (r: VaultSyncRequest) => VaultSyncResponse;
    VaultUnsync: (r: VaultUnsyncRequest) => VaultUnsyncResponse;
    VaultStatus: (r: VaultStatusRequest) => VaultStatusResponse;
    VaultUpdate: (r: VaultUpdateRequest) => VaultUpdateResponse;
    Collections: (r: CollectionsRequest) => CollectionsResponse;
    Documents: (r: DocumentsRequest) => DocumentsResponse;
    DocumentDelete: (r: DocumentDeleteRequest) => DocumentDeleteResponse;
    ConfigGet: (r: ConfigGetRequest) => ConfigGetResponse;
    ConfigSet: (r: ConfigSetRequest) => ConfigSetResponse;
    AdminSignURL: (r: AdminSignURLRequest) => AdminSignURLResponse;
    AdminCheck: (r: AdminCheckRequest) => AdminCheckResponse;
    Channels: (r: ChannelsRequest) => ChannelsResponse;
    ChannelCreate: (r: ChannelCreateRequest) => ChannelCreateResponse;
    ChannelInvite: (r: ChannelInviteRequest) => ChannelInviteResponse;
    ChannelLeave: (r: ChannelLeaveRequest) => ChannelLeaveResponse;
    ChannelRead: (r: ChannelReadRequest) => ChannelReadResponse;
    Follow: (r: FollowRequest) => FollowResponse;
    Follows: (r: FollowsRequest) => FollowsResponse;
    MessagePrepare: (r: MessagePrepareRequest) => MessagePrepareResponse;
    MessageCreate: (r: MessageCreateRequest) => MessageCreateResponse;
    Messages: (r: MessagesRequest) => MessagesResponse;
    Relay: (r: RelayRequest, cb: (a: {
        value: RelayOutput;
        done: boolean;
    }) => void) => void;
}
