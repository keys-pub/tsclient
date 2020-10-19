"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageType = exports.ContentType = exports.WormholeStatus = exports.UserStatus = exports.Encoding = exports.SecretType = exports.SortDirection = exports.KeyType = exports.ExportType = exports.AuthType = exports.AuthStatus = exports.EncryptMode = void 0;
var EncryptMode;
(function (EncryptMode) {
    EncryptMode["DEFAULT_ENCRYPT"] = "DEFAULT_ENCRYPT";
    EncryptMode["SALTPACK_ENCRYPT"] = "SALTPACK_ENCRYPT";
    EncryptMode["SALTPACK_SIGNCRYPT"] = "SALTPACK_SIGNCRYPT";
})(EncryptMode = exports.EncryptMode || (exports.EncryptMode = {}));
var AuthStatus;
(function (AuthStatus) {
    AuthStatus["AUTH_UNKNOWN"] = "AUTH_UNKNOWN";
    AuthStatus["AUTH_SETUP_NEEDED"] = "AUTH_SETUP_NEEDED";
    AuthStatus["AUTH_UNLOCKED"] = "AUTH_UNLOCKED";
    AuthStatus["AUTH_LOCKED"] = "AUTH_LOCKED";
})(AuthStatus = exports.AuthStatus || (exports.AuthStatus = {}));
var AuthType;
(function (AuthType) {
    AuthType["UNKNOWN_AUTH"] = "UNKNOWN_AUTH";
    AuthType["PASSWORD_AUTH"] = "PASSWORD_AUTH";
    AuthType["PAPER_KEY_AUTH"] = "PAPER_KEY_AUTH";
    AuthType["FIDO2_HMAC_SECRET_AUTH"] = "FIDO2_HMAC_SECRET_AUTH";
})(AuthType = exports.AuthType || (exports.AuthType = {}));
var ExportType;
(function (ExportType) {
    ExportType["DEFAULT_EXPORT_TYPE"] = "DEFAULT_EXPORT_TYPE";
    ExportType["SALTPACK_EXPORT_TYPE"] = "SALTPACK_EXPORT_TYPE";
    ExportType["SSH_EXPORT_TYPE"] = "SSH_EXPORT_TYPE";
})(ExportType = exports.ExportType || (exports.ExportType = {}));
var KeyType;
(function (KeyType) {
    KeyType["UNKNOWN_KEY_TYPE"] = "UNKNOWN_KEY_TYPE";
    KeyType["EDX25519"] = "EDX25519";
    KeyType["EDX25519_PUBLIC"] = "EDX25519_PUBLIC";
    KeyType["X25519"] = "X25519";
    KeyType["X25519_PUBLIC"] = "X25519_PUBLIC";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "ASC";
    SortDirection["DESC"] = "DESC";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
var SecretType;
(function (SecretType) {
    SecretType["UNKNOWN_SECRET_TYPE"] = "UNKNOWN_SECRET_TYPE";
    SecretType["PASSWORD_SECRET"] = "PASSWORD_SECRET";
    SecretType["CONTACT_SECRET"] = "CONTACT_SECRET";
    SecretType["CARD_SECRET"] = "CARD_SECRET";
    SecretType["NOTE_SECRET"] = "NOTE_SECRET";
})(SecretType = exports.SecretType || (exports.SecretType = {}));
var Encoding;
(function (Encoding) {
    Encoding["HEX"] = "HEX";
    Encoding["BASE62"] = "BASE62";
    Encoding["BASE58"] = "BASE58";
    Encoding["BASE32"] = "BASE32";
    Encoding["BASE16"] = "BASE16";
    Encoding["BASE64"] = "BASE64";
    Encoding["SALTPACK"] = "SALTPACK";
    Encoding["BIP39"] = "BIP39";
})(Encoding = exports.Encoding || (exports.Encoding = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["USER_UNKNOWN"] = "USER_UNKNOWN";
    UserStatus["USER_OK"] = "USER_OK";
    UserStatus["USER_RESOURCE_NOT_FOUND"] = "USER_RESOURCE_NOT_FOUND";
    UserStatus["USER_CONTENT_NOT_FOUND"] = "USER_CONTENT_NOT_FOUND";
    UserStatus["USER_CONTENT_INVALID"] = "USER_CONTENT_INVALID";
    UserStatus["USER_CONN_FAILURE"] = "USER_CONN_FAILURE";
    UserStatus["USER_FAILURE"] = "USER_FAILURE";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var WormholeStatus;
(function (WormholeStatus) {
    WormholeStatus["WORMHOLE_DEFAULT"] = "WORMHOLE_DEFAULT";
    WormholeStatus["WORMHOLE_STARTING"] = "WORMHOLE_STARTING";
    WormholeStatus["WORMHOLE_OFFERING"] = "WORMHOLE_OFFERING";
    WormholeStatus["WORMHOLE_ANSWERING"] = "WORMHOLE_ANSWERING";
    WormholeStatus["WORMHOLE_HANDSHAKE"] = "WORMHOLE_HANDSHAKE";
    WormholeStatus["WORMHOLE_CONNECTED"] = "WORMHOLE_CONNECTED";
    WormholeStatus["WORMHOLE_CLOSED"] = "WORMHOLE_CLOSED";
})(WormholeStatus = exports.WormholeStatus || (exports.WormholeStatus = {}));
var ContentType;
(function (ContentType) {
    ContentType["BINARY_CONTENT"] = "BINARY_CONTENT";
    ContentType["UTF8_CONTENT"] = "UTF8_CONTENT";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var MessageType;
(function (MessageType) {
    MessageType["MESSAGE_SENT"] = "MESSAGE_SENT";
    MessageType["MESSAGE_PENDING"] = "MESSAGE_PENDING";
    MessageType["MESSAGE_ACK"] = "MESSAGE_ACK";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
