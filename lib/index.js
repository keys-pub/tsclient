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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var grpc = __importStar(require("@grpc/grpc-js"));
var protoLoader = __importStar(require("@grpc/proto-loader"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var Client = /** @class */ (function () {
    function Client(appDir, port) {
        this.appDir = appDir;
        this.port = port;
        this.authToken = '';
    }
    Client.prototype.setAuthToken = function (authToken) {
        this.authToken = authToken;
    };
    Client.prototype.close = function () {
        if (this.keysClient) {
            this.keysClient.close();
            this.keysClient = undefined;
        }
        if (this.fido2Client) {
            this.fido2Client.close();
            this.fido2Client = undefined;
        }
    };
    Client.prototype.keys = function () {
        if (!this.keysClient) {
            this.keysClient = this.newClient(path.join('keys.pub', __dirname, 'keys.proto'), 'service', 'Keys');
        }
        return this.keysClient;
    };
    Client.prototype.auth = function () {
        if (!this.fido2Client) {
            this.fido2Client = this.newClient(path.join('keys.pub', __dirname, 'fido2.proto'), 'fido2', 'Auth');
        }
        return this.fido2Client;
    };
    Client.prototype.rpc = function (name) {
        switch (name) {
            case 'Keys':
                return this.keys();
            case 'Auth':
                return this.auth();
        }
        return undefined;
    };
    Client.prototype.creds = function () {
        var _this = this;
        var certPath = path.join(this.appDir, 'ca.pem');
        console.log('Loading cert', certPath);
        var cert = fs.readFileSync(certPath, 'ascii');
        // console.log('Using cert:', cert)
        var auth = function (options, cb) {
            var metadata = new grpc.Metadata();
            metadata.set('authorization', _this.authToken);
            cb(null, metadata);
        };
        var callCreds = grpc.credentials.createFromMetadataGenerator(auth);
        var sslCreds = grpc.credentials.createSsl(Buffer.from(cert, 'ascii'));
        var creds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds);
        return creds;
    };
    Client.prototype.newClient = function (protoPath, packageName, serviceName) {
        // console.log('Proto path:', protoPath)
        // console.log('Proto path (resolved):', path.resolve(protoPath))
        var packageDefinition = protoLoader.loadSync(protoPath, { arrays: true, enums: String, defaults: true });
        var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        if (!protoDescriptor[packageName]) {
            throw new Error('proto descriptor should have package ' + packageName);
        }
        var services = protoDescriptor[packageName];
        var serviceCls = services[serviceName];
        if (typeof serviceCls !== 'function') {
            throw new Error('proto descriptor missing ' + serviceName);
        }
        // console.log('Using client on port', this.port)
        var cl = new serviceCls('localhost:' + this.port, this.creds());
        return cl;
    };
    return Client;
}());
exports.Client = Client;
