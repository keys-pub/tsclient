export declare enum DeviceType {
    UNKNOWN_DEVICE = "UNKNOWN_DEVICE",
    U2F_DEVICE = "U2F_DEVICE",
    FIDO2_DEVICE = "FIDO2_DEVICE"
}
export declare enum OptionValue {
    DEFAULT_OPTION = "DEFAULT_OPTION",
    TRUE = "TRUE",
    FALSE = "FALSE"
}
export interface Device {
    path?: string;
    productId?: number;
    vendorId?: number;
    manufacturer?: string;
    product?: string;
}
export interface Option {
    name?: string;
    value?: OptionValue;
}
export interface DeviceInfo {
    versions?: Array<string>;
    extensions?: Array<string>;
    aaguid?: string;
    options?: Array<Option>;
}
export interface RelyingParty {
    id?: string;
    name?: string;
}
export interface User {
    id?: Uint8Array;
    name?: string;
    displayName?: string;
    icon?: string;
}
export interface Attestation {
    clientDataHash?: Uint8Array;
    authData?: Uint8Array;
    credentialId?: Uint8Array;
    credentialType?: string;
    pubKey?: Uint8Array;
    cert?: Uint8Array;
    sig?: Uint8Array;
    format?: string;
}
export interface Credential {
    id?: Uint8Array;
    type?: string;
    rp?: RelyingParty;
    user?: User;
}
export interface Assertion {
    authData?: Uint8Array;
    sig?: Uint8Array;
    hmacSecret?: Uint8Array;
}
export interface CredentialsInfo {
    rkExisting?: number;
    rkRemaining?: number;
}
export interface DevicesRequest {
}
export interface DevicesResponse {
    devices?: Array<Device>;
}
export interface DeviceTypeRequest {
    device?: string;
}
export interface DeviceTypeResponse {
    type?: DeviceType;
}
export interface DeviceInfoRequest {
    device?: string;
}
export interface DeviceInfoResponse {
    info?: DeviceInfo;
}
export interface MakeCredentialRequest {
    device?: string;
    clientDataHash?: Uint8Array;
    rp?: RelyingParty;
    user?: User;
    type?: string;
    pin?: string;
    extensions?: Array<string>;
    rk?: string;
    uv?: string;
}
export interface MakeCredentialResponse {
    attestation?: Attestation;
}
export interface SetPINRequest {
    device?: string;
    pin?: string;
    oldPin?: string;
}
export interface SetPINResponse {
}
export interface ResetRequest {
    device?: string;
}
export interface ResetResponse {
}
export interface RetryCountRequest {
    device?: string;
}
export interface RetryCountResponse {
    count?: number;
}
export interface AssertionRequest {
    device?: string;
    rpId?: string;
    clientDataHash?: Uint8Array;
    credentialIds?: Array<Uint8Array>;
    pin?: string;
    extensions?: Array<string>;
    uv?: string;
    up?: string;
    hmacSalt?: Uint8Array;
}
export interface AssertionResponse {
    assertion?: Assertion;
}
export interface CredentialsInfoRequest {
    device?: string;
    pin?: string;
}
export interface CredentialsInfoResponse {
    info?: CredentialsInfo;
}
export interface CredentialsRequest {
    device?: string;
    rpId?: string;
    pin?: string;
}
export interface CredentialsResponse {
    credentials?: Array<Credential>;
}
export interface RelyingPartiesRequest {
    device?: string;
    pin?: string;
}
export interface RelyingPartiesResponse {
    parties?: Array<RelyingParty>;
}
export interface GenerateHMACSecretRequest {
    device?: string;
    pin?: string;
    clientDataHash?: Uint8Array;
    rp?: RelyingParty;
    user?: User;
    rk?: OptionValue;
}
export interface GenerateHMACSecretResponse {
    credentialId?: Uint8Array;
}
export interface HMACSecretRequest {
    device?: string;
    pin?: string;
    rpId?: string;
    clientDataHash?: Uint8Array;
    credentialIds?: Array<Uint8Array>;
    salt?: Uint8Array;
}
export interface HMACSecretResponse {
    hmacSecret?: Uint8Array;
}
export interface FIDO2Service {
    Devices: (r: DevicesRequest) => DevicesResponse;
    DeviceInfo: (r: DeviceInfoRequest) => DeviceInfoResponse;
    DeviceType: (r: DeviceTypeRequest) => DeviceTypeResponse;
    MakeCredential: (r: MakeCredentialRequest) => MakeCredentialResponse;
    SetPIN: (r: SetPINRequest) => SetPINResponse;
    Reset: (r: ResetRequest) => ResetResponse;
    RetryCount: (r: RetryCountRequest) => RetryCountResponse;
    Assertion: (r: AssertionRequest) => AssertionResponse;
    CredentialsInfo: (r: CredentialsInfoRequest) => CredentialsInfoResponse;
    Credentials: (r: CredentialsRequest) => CredentialsResponse;
    RelyingParties: (r: RelyingPartiesRequest) => RelyingPartiesResponse;
    GenerateHMACSecret: (r: GenerateHMACSecretRequest) => GenerateHMACSecretResponse;
    HMACSecret: (r: HMACSecretRequest) => HMACSecretResponse;
}
