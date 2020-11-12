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
exports.default = void 0;
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
const $protobuf = __importStar(require("protobufjs/light"));
const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
    .addJSON({
    fido2: {
        options: {
            go_package: ".;fido2"
        },
        nested: {
            FIDO2: {
                methods: {
                    Devices: {
                        requestType: "DevicesRequest",
                        responseType: "DevicesResponse"
                    },
                    DeviceInfo: {
                        requestType: "DeviceInfoRequest",
                        responseType: "DeviceInfoResponse"
                    },
                    DeviceType: {
                        requestType: "DeviceTypeRequest",
                        responseType: "DeviceTypeResponse"
                    },
                    MakeCredential: {
                        requestType: "MakeCredentialRequest",
                        responseType: "MakeCredentialResponse"
                    },
                    SetPIN: {
                        requestType: "SetPINRequest",
                        responseType: "SetPINResponse"
                    },
                    Reset: {
                        requestType: "ResetRequest",
                        responseType: "ResetResponse"
                    },
                    RetryCount: {
                        requestType: "RetryCountRequest",
                        responseType: "RetryCountResponse"
                    },
                    Assertion: {
                        requestType: "AssertionRequest",
                        responseType: "AssertionResponse"
                    },
                    CredentialsInfo: {
                        requestType: "CredentialsInfoRequest",
                        responseType: "CredentialsInfoResponse"
                    },
                    Credentials: {
                        requestType: "CredentialsRequest",
                        responseType: "CredentialsResponse"
                    },
                    RelyingParties: {
                        requestType: "RelyingPartiesRequest",
                        responseType: "RelyingPartiesResponse"
                    },
                    GenerateHMACSecret: {
                        requestType: "GenerateHMACSecretRequest",
                        responseType: "GenerateHMACSecretResponse"
                    },
                    HMACSecret: {
                        requestType: "HMACSecretRequest",
                        responseType: "HMACSecretResponse"
                    }
                }
            },
            Device: {
                fields: {
                    path: {
                        type: "string",
                        id: 1
                    },
                    productId: {
                        type: "int32",
                        id: 2,
                        options: {
                            "(go.field).name": "ProductID"
                        }
                    },
                    vendorId: {
                        type: "int32",
                        id: 3,
                        options: {
                            "(go.field).name": "VendorID"
                        }
                    },
                    manufacturer: {
                        type: "string",
                        id: 4
                    },
                    product: {
                        type: "string",
                        id: 5
                    }
                }
            },
            Option: {
                fields: {
                    name: {
                        type: "string",
                        id: 1
                    },
                    value: {
                        type: "OptionValue",
                        id: 2
                    }
                }
            },
            DeviceInfo: {
                fields: {
                    versions: {
                        rule: "repeated",
                        type: "string",
                        id: 1
                    },
                    extensions: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                    },
                    aaguid: {
                        type: "string",
                        id: 3,
                        options: {
                            "(go.field).name": "AAGUID"
                        }
                    },
                    options: {
                        rule: "repeated",
                        type: "Option",
                        id: 4
                    }
                }
            },
            RelyingParty: {
                fields: {
                    id: {
                        type: "string",
                        id: 1,
                        options: {
                            "(go.field).name": "ID"
                        }
                    },
                    name: {
                        type: "string",
                        id: 2
                    }
                }
            },
            DeviceType: {
                options: {
                    "(go.enum).name": "DeviceType"
                },
                values: {
                    UNKNOWN_DEVICE: 0,
                    U2F_DEVICE: 1,
                    FIDO2_DEVICE: 2
                }
            },
            User: {
                fields: {
                    id: {
                        type: "bytes",
                        id: 1,
                        options: {
                            "(go.field).name": "ID"
                        }
                    },
                    name: {
                        type: "string",
                        id: 2
                    },
                    displayName: {
                        type: "string",
                        id: 3
                    },
                    icon: {
                        type: "string",
                        id: 4
                    }
                }
            },
            Attestation: {
                fields: {
                    clientDataHash: {
                        type: "bytes",
                        id: 1
                    },
                    authData: {
                        type: "bytes",
                        id: 2
                    },
                    credentialId: {
                        type: "bytes",
                        id: 3,
                        options: {
                            "(go.field).name": "CredentialID"
                        }
                    },
                    credentialType: {
                        type: "string",
                        id: 4
                    },
                    pubKey: {
                        type: "bytes",
                        id: 5
                    },
                    cert: {
                        type: "bytes",
                        id: 6
                    },
                    sig: {
                        type: "bytes",
                        id: 7
                    },
                    format: {
                        type: "string",
                        id: 8
                    }
                }
            },
            Credential: {
                fields: {
                    id: {
                        type: "bytes",
                        id: 1,
                        options: {
                            "(go.field).name": "ID"
                        }
                    },
                    type: {
                        type: "string",
                        id: 2
                    },
                    rp: {
                        type: "RelyingParty",
                        id: 10,
                        options: {
                            "(go.field).name": "RP"
                        }
                    },
                    user: {
                        type: "User",
                        id: 11
                    }
                }
            },
            Assertion: {
                fields: {
                    authData: {
                        type: "bytes",
                        id: 1
                    },
                    sig: {
                        type: "bytes",
                        id: 2
                    },
                    hmacSecret: {
                        type: "bytes",
                        id: 3,
                        options: {
                            "(go.field).name": "HMACSecret"
                        }
                    }
                }
            },
            CredentialsInfo: {
                fields: {
                    rkExisting: {
                        type: "int32",
                        id: 1,
                        options: {
                            "(go.field).name": "RKExisting"
                        }
                    },
                    rkRemaining: {
                        type: "int32",
                        id: 2,
                        options: {
                            "(go.field).name": "RKRemaining"
                        }
                    }
                }
            },
            DevicesRequest: {
                fields: {}
            },
            DevicesResponse: {
                fields: {
                    devices: {
                        rule: "repeated",
                        type: "Device",
                        id: 1
                    }
                }
            },
            DeviceTypeRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    }
                }
            },
            DeviceTypeResponse: {
                fields: {
                    type: {
                        type: "DeviceType",
                        id: 1
                    }
                }
            },
            DeviceInfoRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    }
                }
            },
            DeviceInfoResponse: {
                fields: {
                    info: {
                        type: "DeviceInfo",
                        id: 1
                    }
                }
            },
            MakeCredentialRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    },
                    clientDataHash: {
                        type: "bytes",
                        id: 2
                    },
                    rp: {
                        type: "RelyingParty",
                        id: 3,
                        options: {
                            "(go.field).name": "RP"
                        }
                    },
                    user: {
                        type: "User",
                        id: 4
                    },
                    type: {
                        type: "string",
                        id: 5
                    },
                    pin: {
                        type: "string",
                        id: 6,
                        options: {
                            "(go.field).name": "PIN"
                        }
                    },
                    extensions: {
                        rule: "repeated",
                        type: "string",
                        id: 100
                    },
                    rk: {
                        type: "string",
                        id: 101,
                        options: {
                            "(go.field).name": "RK"
                        }
                    },
                    uv: {
                        type: "string",
                        id: 102,
                        options: {
                            "(go.field).name": "UV"
                        }
                    }
                }
            },
            MakeCredentialResponse: {
                fields: {
                    attestation: {
                        type: "Attestation",
                        id: 1
                    }
                }
            },
            SetPINRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    },
                    pin: {
                        type: "string",
                        id: 2,
                        options: {
                            "(go.field).name": "PIN"
                        }
                    },
                    oldPin: {
                        type: "string",
                        id: 3,
                        options: {
                            "(go.field).name": "OldPIN"
                        }
                    }
                }
            },
            SetPINResponse: {
                fields: {}
            },
            ResetRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    }
                }
            },
            ResetResponse: {
                fields: {}
            },
            RetryCountRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    }
                }
            },
            RetryCountResponse: {
                fields: {
                    count: {
                        type: "int32",
                        id: 1
                    }
                }
            },
            AssertionRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    },
                    rpId: {
                        type: "string",
                        id: 2,
                        options: {
                            "(go.field).name": "RPID"
                        }
                    },
                    clientDataHash: {
                        type: "bytes",
                        id: 3
                    },
                    credentialId: {
                        type: "bytes",
                        id: 4,
                        options: {
                            "(go.field).name": "CredentialID"
                        }
                    },
                    pin: {
                        type: "string",
                        id: 5,
                        options: {
                            "(go.field).name": "PIN"
                        }
                    },
                    extensions: {
                        rule: "repeated",
                        type: "string",
                        id: 100
                    },
                    uv: {
                        type: "string",
                        id: 101,
                        options: {
                            "(go.field).name": "UV"
                        }
                    },
                    up: {
                        type: "string",
                        id: 102,
                        options: {
                            "(go.field).name": "UP"
                        }
                    },
                    hmacSalt: {
                        type: "bytes",
                        id: 103,
                        options: {
                            "(go.field).name": "HMACSalt"
                        }
                    }
                }
            },
            AssertionResponse: {
                fields: {
                    assertion: {
                        type: "Assertion",
                        id: 1
                    }
                }
            },
            CredentialsInfoRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    },
                    pin: {
                        type: "string",
                        id: 2,
                        options: {
                            "(go.field).name": "PIN"
                        }
                    }
                }
            },
            CredentialsInfoResponse: {
                fields: {
                    info: {
                        type: "CredentialsInfo",
                        id: 1
                    }
                }
            },
            CredentialsRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    },
                    rpId: {
                        type: "string",
                        id: 2,
                        options: {
                            "(go.field).name": "RPID"
                        }
                    },
                    pin: {
                        type: "string",
                        id: 3,
                        options: {
                            "(go.field).name": "PIN"
                        }
                    }
                }
            },
            CredentialsResponse: {
                fields: {
                    credentials: {
                        rule: "repeated",
                        type: "Credential",
                        id: 1
                    }
                }
            },
            RelyingPartiesRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    },
                    pin: {
                        type: "string",
                        id: 2,
                        options: {
                            "(go.field).name": "PIN"
                        }
                    }
                }
            },
            RelyingPartiesResponse: {
                fields: {
                    parties: {
                        rule: "repeated",
                        type: "RelyingParty",
                        id: 1
                    }
                }
            },
            OptionValue: {
                options: {
                    "(go.enum).name": "OptionValue"
                },
                values: {
                    DEFAULT_OPTION: 0,
                    TRUE: 1,
                    FALSE: 2
                }
            },
            GenerateHMACSecretRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    },
                    pin: {
                        type: "string",
                        id: 2,
                        options: {
                            "(go.field).name": "PIN"
                        }
                    },
                    clientDataHash: {
                        type: "bytes",
                        id: 10
                    },
                    rp: {
                        type: "RelyingParty",
                        id: 11,
                        options: {
                            "(go.field).name": "RP"
                        }
                    },
                    user: {
                        type: "User",
                        id: 12
                    },
                    rk: {
                        type: "OptionValue",
                        id: 20,
                        options: {
                            "(go.field).name": "RK"
                        }
                    }
                }
            },
            GenerateHMACSecretResponse: {
                fields: {
                    credentialId: {
                        type: "bytes",
                        id: 2,
                        options: {
                            "(go.field).name": "CredentialID"
                        }
                    }
                }
            },
            HMACSecretRequest: {
                fields: {
                    device: {
                        type: "string",
                        id: 1
                    },
                    pin: {
                        type: "string",
                        id: 2,
                        options: {
                            "(go.field).name": "PIN"
                        }
                    },
                    rpId: {
                        type: "string",
                        id: 10,
                        options: {
                            "(go.field).name": "RPID"
                        }
                    },
                    clientDataHash: {
                        type: "bytes",
                        id: 11
                    },
                    credentialId: {
                        type: "bytes",
                        id: 12,
                        options: {
                            "(go.field).name": "CredentialID"
                        }
                    },
                    salt: {
                        type: "bytes",
                        id: 13
                    }
                }
            },
            HMACSecretResponse: {
                fields: {
                    hmacSecret: {
                        type: "bytes",
                        id: 1,
                        options: {
                            "(go.field).name": "HMACSecret"
                        }
                    }
                }
            }
        }
    }
});
exports.default = $root;
//# sourceMappingURL=fido2.proto.js.map