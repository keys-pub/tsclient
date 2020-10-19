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
exports.certPath = exports.appDir = exports.getAppName = exports.defaultAppName = void 0;
const os = __importStar(require("os"));
const getenv = __importStar(require("getenv"));
const path = __importStar(require("path"));
exports.defaultAppName = 'Keys';
exports.getAppName = () => {
    return getenv.string('KEYS_APP', exports.defaultAppName);
};
const platform = () => {
    let platform = os.platform();
    if (process.env.KEYS_PLATFORM) {
        platform = process.env.KEYS_PLATFORM;
    }
    return platform;
};
exports.appDir = () => {
    const appName = exports.getAppName();
    let supportDir;
    const plt = platform();
    switch (plt) {
        case 'linux':
            if (process.env.XDG_DATA_HOME) {
                supportDir = process.env.XDG_DATA_HOME;
            }
            else {
                const homeDir = os.homedir();
                supportDir = path.join(homeDir, '.local', 'share');
            }
            break;
        case 'win32':
            if (process.env.LOCALAPPDATA) {
                supportDir = process.env.LOCALAPPDATA;
            }
            else {
                const homeDir = os.homedir();
                supportDir = path.join(homeDir, 'AppData', 'Roaming');
            }
            break;
        case 'darwin':
            const homeDir = os.homedir();
            supportDir = path.join(homeDir, 'Library', 'Application Support');
            break;
        default:
            throw new Error('unsupported platform ' + plt);
    }
    return path.join(supportDir, appName);
};
exports.certPath = () => {
    return path.join(exports.appDir(), 'ca.pem');
};
