"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.certPath = exports.appDir = exports.FIDO2Service = exports.KeysService = exports.fido2Service = exports.keysService = exports.Credentials = void 0;
const grpc = __importStar(require("@grpc/grpc-js"));
const fs = __importStar(require("fs"));
const keys_proto_1 = __importDefault(require("./keys.proto"));
const fido2_proto_1 = __importDefault(require("./fido2.proto"));
// TODO: Ask @grpc/proto-loader to export createPackageDefinition
const proto_loader_1 = require("./proto-loader");
const env_1 = require("./env");
Object.defineProperty(exports, "appDir", { enumerable: true, get: function () { return env_1.appDir; } });
Object.defineProperty(exports, "certPath", { enumerable: true, get: function () { return env_1.certPath; } });
const keys_service_1 = require("./keys.service");
Object.defineProperty(exports, "KeysService", { enumerable: true, get: function () { return keys_service_1.KeysService; } });
const fido2_service_1 = require("./fido2.service");
Object.defineProperty(exports, "FIDO2Service", { enumerable: true, get: function () { return fido2_service_1.FIDO2Service; } });
class Credentials {
    constructor(certPath) {
        this.token = '';
        this.certPath = certPath;
    }
    grpc() {
        const cert = fs.readFileSync(this.certPath, 'ascii');
        const grpcAuth = (options, cb) => {
            const metadata = new grpc.Metadata();
            metadata.set('authorization', this.token);
            cb(null, metadata);
        };
        const callCreds = grpc.credentials.createFromMetadataGenerator(grpcAuth);
        const sslCreds = grpc.credentials.createSsl(Buffer.from(cert, 'ascii'));
        const creds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds);
        return creds;
    }
}
exports.Credentials = Credentials;
const newClient = (packageDefinition, packageName, serviceName) => {
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
    if (!protoDescriptor[packageName]) {
        throw new Error('proto descriptor should have package ' + packageName);
    }
    const services = protoDescriptor[packageName];
    const serviceCls = services[serviceName];
    if (typeof serviceCls !== 'function') {
        throw new Error('proto descriptor missing ' + serviceName);
    }
    return serviceCls;
};
const keysService = (addr, creds) => {
    const packageDefinition = proto_loader_1.createPackageDefinition(keys_proto_1.default, {
        arrays: true,
        enums: String,
        defaults: true,
    });
    const client = () => {
        const serviceCls = newClient(packageDefinition, 'keys', 'Keys');
        return new serviceCls(addr, creds.grpc());
    };
    return new keys_service_1.KeysService(client);
};
exports.keysService = keysService;
const fido2Service = (addr, creds) => {
    const packageDefinition = proto_loader_1.createPackageDefinition(fido2_proto_1.default, {
        arrays: true,
        enums: String,
        defaults: true,
    });
    const client = () => {
        const serviceCls = newClient(packageDefinition, 'fido2', 'FIDO2');
        return new serviceCls(addr, creds.grpc());
    };
    return new fido2_service_1.FIDO2Service(client);
};
exports.fido2Service = fido2Service;
//# sourceMappingURL=index.js.map