/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  keys: {
    options: {
      go_package: ".;service"
    },
    nested: {
      Keys: {
        methods: {
          KeyGenerate: {
            requestType: "KeyGenerateRequest",
            responseType: "KeyGenerateResponse"
          },
          Keys: {
            requestType: "KeysRequest",
            responseType: "KeysResponse"
          },
          Key: {
            requestType: "KeyRequest",
            responseType: "KeyResponse"
          },
          KeyImport: {
            requestType: "KeyImportRequest",
            responseType: "KeyImportResponse"
          },
          KeyExport: {
            requestType: "KeyExportRequest",
            responseType: "KeyExportResponse"
          },
          KeyRemove: {
            requestType: "KeyRemoveRequest",
            responseType: "KeyRemoveResponse"
          },
          Sign: {
            requestType: "SignRequest",
            responseType: "SignResponse"
          },
          SignFile: {
            requestType: "SignFileInput",
            requestStream: true,
            responseType: "SignFileOutput",
            responseStream: true
          },
          SignStream: {
            requestType: "SignInput",
            requestStream: true,
            responseType: "SignOutput",
            responseStream: true
          },
          Verify: {
            requestType: "VerifyRequest",
            responseType: "VerifyResponse"
          },
          VerifyFile: {
            requestType: "VerifyFileInput",
            requestStream: true,
            responseType: "VerifyFileOutput",
            responseStream: true
          },
          VerifyStream: {
            requestType: "VerifyInput",
            requestStream: true,
            responseType: "VerifyOutput",
            responseStream: true
          },
          VerifyDetached: {
            requestType: "VerifyDetachedRequest",
            responseType: "VerifyDetachedResponse"
          },
          VerifyDetachedFile: {
            requestType: "VerifyDetachedFileInput",
            requestStream: true,
            responseType: "VerifyDetachedResponse"
          },
          VerifyDetachedStream: {
            requestType: "VerifyDetachedInput",
            requestStream: true,
            responseType: "VerifyDetachedResponse"
          },
          Encrypt: {
            requestType: "EncryptRequest",
            responseType: "EncryptResponse"
          },
          EncryptStream: {
            requestType: "EncryptInput",
            requestStream: true,
            responseType: "EncryptOutput",
            responseStream: true
          },
          EncryptFile: {
            requestType: "EncryptFileInput",
            requestStream: true,
            responseType: "EncryptFileOutput",
            responseStream: true
          },
          Decrypt: {
            requestType: "DecryptRequest",
            responseType: "DecryptResponse"
          },
          DecryptStream: {
            requestType: "DecryptInput",
            requestStream: true,
            responseType: "DecryptOutput",
            responseStream: true
          },
          DecryptFile: {
            requestType: "DecryptFileInput",
            requestStream: true,
            responseType: "DecryptFileOutput",
            responseStream: true
          },
          Sigchain: {
            requestType: "SigchainRequest",
            responseType: "SigchainResponse"
          },
          Statement: {
            requestType: "StatementRequest",
            responseType: "StatementResponse"
          },
          StatementCreate: {
            requestType: "StatementCreateRequest",
            responseType: "StatementCreateResponse"
          },
          StatementRevoke: {
            requestType: "StatementRevokeRequest",
            responseType: "StatementRevokeResponse"
          },
          User: {
            requestType: "UserRequest",
            responseType: "UserResponse"
          },
          UserSearch: {
            requestType: "UserSearchRequest",
            responseType: "UserSearchResponse"
          },
          UserService: {
            requestType: "UserServiceRequest",
            responseType: "UserServiceResponse"
          },
          UserSign: {
            requestType: "UserSignRequest",
            responseType: "UserSignResponse"
          },
          UserAdd: {
            requestType: "UserAddRequest",
            responseType: "UserAddResponse"
          },
          Search: {
            requestType: "SearchRequest",
            responseType: "SearchResponse"
          },
          Secret: {
            requestType: "SecretRequest",
            responseType: "SecretResponse"
          },
          SecretSave: {
            requestType: "SecretSaveRequest",
            responseType: "SecretSaveResponse"
          },
          SecretRemove: {
            requestType: "SecretRemoveRequest",
            responseType: "SecretRemoveResponse"
          },
          Secrets: {
            requestType: "SecretsRequest",
            responseType: "SecretsResponse"
          },
          Pull: {
            requestType: "PullRequest",
            responseType: "PullResponse"
          },
          Push: {
            requestType: "PushRequest",
            responseType: "PushResponse"
          },
          Wormhole: {
            requestType: "WormholeInput",
            requestStream: true,
            responseType: "WormholeOutput",
            responseStream: true
          },
          AuthSetup: {
            requestType: "AuthSetupRequest",
            responseType: "AuthSetupResponse"
          },
          AuthVault: {
            requestType: "AuthVaultRequest",
            responseType: "AuthVaultResponse"
          },
          AuthUnlock: {
            requestType: "AuthUnlockRequest",
            responseType: "AuthUnlockResponse"
          },
          AuthLock: {
            requestType: "AuthLockRequest",
            responseType: "AuthLockResponse"
          },
          AuthReset: {
            requestType: "AuthResetRequest",
            responseType: "AuthResetResponse"
          },
          AuthRecover: {
            requestType: "AuthRecoverRequest",
            responseType: "AuthRecoverResponse"
          },
          RuntimeStatus: {
            requestType: "RuntimeStatusRequest",
            responseType: "RuntimeStatusResponse"
          },
          Rand: {
            requestType: "RandRequest",
            responseType: "RandResponse"
          },
          RandPassword: {
            requestType: "RandPasswordRequest",
            responseType: "RandPasswordResponse"
          },
          AuthProvision: {
            requestType: "AuthProvisionRequest",
            responseType: "AuthProvisionResponse"
          },
          AuthDeprovision: {
            requestType: "AuthDeprovisionRequest",
            responseType: "AuthDeprovisionResponse"
          },
          AuthProvisions: {
            requestType: "AuthProvisionsRequest",
            responseType: "AuthProvisionsResponse"
          },
          AuthPasswordChange: {
            requestType: "AuthPasswordChangeRequest",
            responseType: "AuthPasswordChangeResponse"
          },
          VaultAuth: {
            requestType: "VaultAuthRequest",
            responseType: "VaultAuthResponse"
          },
          VaultSync: {
            requestType: "VaultSyncRequest",
            responseType: "VaultSyncResponse"
          },
          VaultUnsync: {
            requestType: "VaultUnsyncRequest",
            responseType: "VaultUnsyncResponse"
          },
          VaultStatus: {
            requestType: "VaultStatusRequest",
            responseType: "VaultStatusResponse"
          },
          VaultUpdate: {
            requestType: "VaultUpdateRequest",
            responseType: "VaultUpdateResponse"
          },
          Collections: {
            requestType: "CollectionsRequest",
            responseType: "CollectionsResponse"
          },
          Documents: {
            requestType: "DocumentsRequest",
            responseType: "DocumentsResponse"
          },
          DocumentDelete: {
            requestType: "DocumentDeleteRequest",
            responseType: "DocumentDeleteResponse"
          },
          ConfigGet: {
            requestType: "ConfigGetRequest",
            responseType: "ConfigGetResponse"
          },
          ConfigSet: {
            requestType: "ConfigSetRequest",
            responseType: "ConfigSetResponse"
          },
          Channels: {
            requestType: "ChannelsRequest",
            responseType: "ChannelsResponse"
          },
          ChannelCreate: {
            requestType: "ChannelCreateRequest",
            responseType: "ChannelCreateResponse"
          },
          ChannelInvitesCreate: {
            requestType: "ChannelInvitesCreateRequest",
            responseType: "ChannelInvitesCreateResponse"
          },
          ChannelInviteAccept: {
            requestType: "ChannelInviteAcceptRequest",
            responseType: "ChannelInviteAcceptResponse"
          },
          MessagePrepare: {
            requestType: "MessagePrepareRequest",
            responseType: "MessagePrepareResponse"
          },
          MessageCreate: {
            requestType: "MessageCreateRequest",
            responseType: "MessageCreateResponse"
          },
          Messages: {
            requestType: "MessagesRequest",
            responseType: "MessagesResponse"
          },
          AdminSignURL: {
            requestType: "AdminSignURLRequest",
            responseType: "AdminSignURLResponse"
          },
          AdminCheck: {
            requestType: "AdminCheckRequest",
            responseType: "AdminCheckResponse"
          },
          Relay: {
            requestType: "RelayInput",
            requestStream: true,
            responseType: "RelayOutput",
            responseStream: true
          }
        }
      },
      SignRequest: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          signer: {
            type: "string",
            id: 5
          },
          armored: {
            type: "bool",
            id: 10
          },
          detached: {
            type: "bool",
            id: 11
          }
        }
      },
      SignResponse: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          kid: {
            type: "string",
            id: 2,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      SignFileInput: {
        fields: {
          "in": {
            type: "string",
            id: 1
          },
          out: {
            type: "string",
            id: 2
          },
          signer: {
            type: "string",
            id: 5
          },
          armored: {
            type: "bool",
            id: 10
          },
          detached: {
            type: "bool",
            id: 11
          }
        }
      },
      SignFileOutput: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          out: {
            type: "string",
            id: 2
          },
          bytes: {
            type: "int32",
            id: 10
          },
          total: {
            type: "int32",
            id: 11
          }
        }
      },
      VerifyRequest: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          }
        }
      },
      VerifyResponse: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          signer: {
            type: "Key",
            id: 2
          }
        }
      },
      VerifyDetachedRequest: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          sig: {
            type: "bytes",
            id: 2
          }
        }
      },
      VerifyDetachedResponse: {
        fields: {
          signer: {
            type: "Key",
            id: 1
          }
        }
      },
      VerifyInput: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          }
        }
      },
      VerifyOutput: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          signer: {
            type: "Key",
            id: 2
          }
        }
      },
      VerifyFileInput: {
        fields: {
          "in": {
            type: "string",
            id: 1
          },
          out: {
            type: "string",
            id: 2
          }
        }
      },
      VerifyFileOutput: {
        fields: {
          signer: {
            type: "Key",
            id: 1
          },
          out: {
            type: "string",
            id: 2
          }
        }
      },
      VerifyDetachedFileInput: {
        fields: {
          "in": {
            type: "string",
            id: 1
          },
          sig: {
            type: "bytes",
            id: 2
          }
        }
      },
      VerifyDetachedInput: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          sig: {
            type: "bytes",
            id: 2
          }
        }
      },
      Statement: {
        fields: {
          sig: {
            type: "bytes",
            id: 1
          },
          data: {
            type: "bytes",
            id: 2
          },
          kid: {
            type: "string",
            id: 3,
            options: {
              "(go.field).name": "KID"
            }
          },
          seq: {
            type: "int32",
            id: 4
          },
          prev: {
            type: "bytes",
            id: 5
          },
          revoke: {
            type: "int32",
            id: 6
          },
          timestamp: {
            type: "int64",
            id: 7
          },
          type: {
            type: "string",
            id: 8
          }
        }
      },
      SigchainRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      SigchainResponse: {
        fields: {
          key: {
            type: "Key",
            id: 1
          },
          statements: {
            rule: "repeated",
            type: "Statement",
            id: 2
          }
        }
      },
      StatementRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          seq: {
            type: "int32",
            id: 2
          }
        }
      },
      StatementResponse: {
        fields: {
          statement: {
            type: "Statement",
            id: 1
          }
        }
      },
      StatementCreateRequest: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          kid: {
            type: "string",
            id: 2,
            options: {
              "(go.field).name": "KID"
            }
          },
          local: {
            type: "bool",
            id: 5
          }
        }
      },
      StatementCreateResponse: {
        fields: {
          statement: {
            type: "Statement",
            id: 1
          }
        }
      },
      StatementRevokeRequest: {
        fields: {
          seq: {
            type: "int32",
            id: 1
          },
          kid: {
            type: "string",
            id: 2,
            options: {
              "(go.field).name": "KID"
            }
          },
          local: {
            type: "bool",
            id: 5
          }
        }
      },
      StatementRevokeResponse: {
        fields: {
          statement: {
            type: "Statement",
            id: 1
          }
        }
      },
      SignInput: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          "in": {
            type: "string",
            id: 2
          },
          out: {
            type: "string",
            id: 3
          },
          signer: {
            type: "string",
            id: 5
          },
          armored: {
            type: "bool",
            id: 10
          },
          detached: {
            type: "bool",
            id: 11
          }
        }
      },
      SignOutput: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          kid: {
            type: "string",
            id: 2,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      EncryptMode: {
        options: {
          "(go.enum).name": "EncryptMode"
        },
        values: {
          DEFAULT_ENCRYPT: 0,
          SALTPACK_ENCRYPT: 1,
          SALTPACK_SIGNCRYPT: 3
        }
      },
      EncryptOptions: {
        fields: {
          armored: {
            type: "bool",
            id: 1
          },
          mode: {
            type: "EncryptMode",
            id: 2
          },
          noSenderRecipient: {
            type: "bool",
            id: 3
          },
          noSign: {
            type: "bool",
            id: 4
          }
        }
      },
      EncryptRequest: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          recipients: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          sender: {
            type: "string",
            id: 4
          },
          options: {
            type: "EncryptOptions",
            id: 10
          }
        }
      },
      EncryptResponse: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          info: {
            type: "string",
            id: 2
          }
        }
      },
      EncryptFileInput: {
        fields: {
          "in": {
            type: "string",
            id: 1
          },
          out: {
            type: "string",
            id: 2
          },
          recipients: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          sender: {
            type: "string",
            id: 4
          },
          options: {
            type: "EncryptOptions",
            id: 10
          }
        }
      },
      EncryptFileOutput: {
        fields: {
          out: {
            type: "string",
            id: 2
          },
          bytes: {
            type: "int32",
            id: 10
          },
          total: {
            type: "int32",
            id: 11
          }
        }
      },
      EncryptInput: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          recipients: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          sender: {
            type: "string",
            id: 4
          },
          options: {
            type: "EncryptOptions",
            id: 10
          }
        }
      },
      EncryptOutput: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          }
        }
      },
      DecryptRequest: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          }
        }
      },
      DecryptResponse: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          sender: {
            type: "Key",
            id: 2
          },
          mode: {
            type: "EncryptMode",
            id: 5
          }
        }
      },
      DecryptFileInput: {
        fields: {
          "in": {
            type: "string",
            id: 1
          },
          out: {
            type: "string",
            id: 2
          }
        }
      },
      DecryptFileOutput: {
        fields: {
          sender: {
            type: "Key",
            id: 1
          },
          out: {
            type: "string",
            id: 2
          },
          bytes: {
            type: "int32",
            id: 10
          },
          total: {
            type: "int32",
            id: 11
          },
          mode: {
            type: "EncryptMode",
            id: 5
          }
        }
      },
      DecryptInput: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          }
        }
      },
      DecryptOutput: {
        fields: {
          data: {
            type: "bytes",
            id: 1
          },
          sender: {
            type: "Key",
            id: 2
          },
          mode: {
            type: "EncryptMode",
            id: 5
          }
        }
      },
      RuntimeStatusRequest: {
        fields: {}
      },
      RuntimeStatusResponse: {
        fields: {
          version: {
            type: "string",
            id: 1
          },
          appName: {
            type: "string",
            id: 2
          },
          exe: {
            type: "string",
            id: 4
          },
          authStatus: {
            type: "AuthStatus",
            id: 5
          },
          sync: {
            type: "bool",
            id: 6
          },
          fido2: {
            type: "bool",
            id: 20,
            options: {
              "(go.field).name": "FIDO2"
            }
          }
        }
      },
      AuthStatus: {
        options: {
          "(go.enum).name": "AuthStatus"
        },
        values: {
          AUTH_UNKNOWN: 0,
          AUTH_SETUP_NEEDED: 1,
          AUTH_UNLOCKED: 2,
          AUTH_LOCKED: 3
        }
      },
      AuthType: {
        options: {
          "(go.enum).name": "AuthType"
        },
        values: {
          UNKNOWN_AUTH: 0,
          PASSWORD_AUTH: 10,
          PAPER_KEY_AUTH: 11,
          FIDO2_HMAC_SECRET_AUTH: 20
        }
      },
      AuthSetupRequest: {
        fields: {
          secret: {
            type: "string",
            id: 1
          },
          type: {
            type: "AuthType",
            id: 2
          },
          device: {
            type: "string",
            id: 5
          }
        }
      },
      AuthSetupResponse: {
        fields: {}
      },
      AuthVaultRequest: {
        fields: {
          phrase: {
            type: "string",
            id: 1
          }
        }
      },
      AuthVaultResponse: {
        fields: {}
      },
      AuthUnlockRequest: {
        fields: {
          secret: {
            type: "string",
            id: 1
          },
          type: {
            type: "AuthType",
            id: 2
          },
          client: {
            type: "string",
            id: 6
          }
        }
      },
      AuthUnlockResponse: {
        fields: {
          authToken: {
            type: "string",
            id: 1
          }
        }
      },
      AuthProvisionRequest: {
        fields: {
          secret: {
            type: "string",
            id: 1
          },
          type: {
            type: "AuthType",
            id: 2
          },
          device: {
            type: "string",
            id: 5
          },
          generate: {
            type: "bool",
            id: 7
          }
        }
      },
      AuthProvisionResponse: {
        fields: {
          provision: {
            type: "AuthProvision",
            id: 1
          }
        }
      },
      AuthDeprovisionRequest: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          }
        }
      },
      AuthDeprovisionResponse: {
        fields: {}
      },
      AuthPasswordChangeRequest: {
        fields: {
          old: {
            type: "string",
            id: 1
          },
          "new": {
            type: "string",
            id: 2
          }
        }
      },
      AuthPasswordChangeResponse: {
        fields: {}
      },
      AuthProvision: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          },
          type: {
            type: "AuthType",
            id: 2
          },
          createdAt: {
            type: "int64",
            id: 3
          },
          aaguid: {
            type: "string",
            id: 100,
            options: {
              "(go.field).name": "AAGUID"
            }
          },
          noPin: {
            type: "bool",
            id: 101
          }
        }
      },
      AuthProvisionsRequest: {
        fields: {}
      },
      AuthProvisionsResponse: {
        fields: {
          provisions: {
            rule: "repeated",
            type: "AuthProvision",
            id: 1
          }
        }
      },
      AuthLockRequest: {
        fields: {}
      },
      AuthLockResponse: {
        fields: {}
      },
      AuthResetRequest: {
        fields: {
          appName: {
            type: "string",
            id: 1
          }
        }
      },
      AuthResetResponse: {
        fields: {}
      },
      AuthRecoverRequest: {
        fields: {
          paperKey: {
            type: "string",
            id: 1
          },
          newPassword: {
            type: "string",
            id: 2
          }
        }
      },
      AuthRecoverResponse: {
        fields: {
          authToken: {
            type: "string",
            id: 1
          }
        }
      },
      KeyGenerateRequest: {
        fields: {
          type: {
            type: "string",
            id: 1
          }
        }
      },
      KeyGenerateResponse: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      UserServiceRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          service: {
            type: "string",
            id: 2
          }
        }
      },
      UserServiceResponse: {
        fields: {
          service: {
            type: "string",
            id: 1
          }
        }
      },
      UserSignRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          service: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          }
        }
      },
      UserSignResponse: {
        fields: {
          message: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      UserAddRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          service: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          url: {
            type: "string",
            id: 4,
            options: {
              "(go.field).name": "URL"
            }
          },
          local: {
            type: "bool",
            id: 5
          }
        }
      },
      UserAddResponse: {
        fields: {
          user: {
            type: "User",
            id: 1
          },
          statement: {
            type: "Statement",
            id: 2
          }
        }
      },
      ExportType: {
        options: {
          "(go.enum).name": "ExportType"
        },
        values: {
          DEFAULT_EXPORT_TYPE: 0,
          SALTPACK_EXPORT_TYPE: 1,
          SSH_EXPORT_TYPE: 2
        }
      },
      KeyExportRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          password: {
            type: "string",
            id: 2
          },
          type: {
            type: "ExportType",
            id: 3
          },
          "public": {
            type: "bool",
            id: 4
          },
          noPassword: {
            type: "bool",
            id: 5
          }
        }
      },
      KeyExportResponse: {
        fields: {
          "export": {
            type: "bytes",
            id: 1
          }
        }
      },
      KeyImportRequest: {
        fields: {
          "in": {
            type: "bytes",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          }
        }
      },
      KeyImportResponse: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      KeyRemoveRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      KeyRemoveResponse: {
        fields: {}
      },
      Key: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          },
          type: {
            type: "string",
            id: 3
          },
          user: {
            type: "User",
            id: 6
          },
          saved: {
            type: "bool",
            id: 10
          },
          sigchainLength: {
            type: "int32",
            id: 40
          },
          sigchainUpdatedAt: {
            type: "int64",
            id: 41
          }
        }
      },
      KeyRequest: {
        fields: {
          key: {
            type: "string",
            id: 1
          },
          search: {
            type: "bool",
            id: 4
          },
          update: {
            type: "bool",
            id: 5
          }
        }
      },
      KeyResponse: {
        fields: {
          key: {
            type: "Key",
            id: 1
          }
        }
      },
      SortDirection: {
        options: {
          "(go.enum).name": "SortDirection"
        },
        values: {
          ASC: 0,
          DESC: 1
        }
      },
      KeysRequest: {
        fields: {
          query: {
            type: "string",
            id: 1
          },
          types: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          sortField: {
            type: "string",
            id: 10
          },
          sortDirection: {
            type: "SortDirection",
            id: 11
          }
        }
      },
      KeysResponse: {
        fields: {
          keys: {
            rule: "repeated",
            type: "Key",
            id: 1
          },
          sortField: {
            type: "string",
            id: 10
          },
          sortDirection: {
            type: "SortDirection",
            id: 11
          }
        }
      },
      SecretType: {
        options: {
          "(go.enum).name": "SecretType"
        },
        values: {
          UNKNOWN_SECRET_TYPE: 0,
          PASSWORD_SECRET: 10,
          CONTACT_SECRET: 11,
          CARD_SECRET: 12,
          NOTE_SECRET: 13
        }
      },
      Secret: {
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
          },
          type: {
            type: "SecretType",
            id: 3
          },
          username: {
            type: "string",
            id: 10
          },
          password: {
            type: "string",
            id: 11
          },
          url: {
            type: "string",
            id: 20,
            options: {
              "(go.field).name": "URL"
            }
          },
          notes: {
            type: "string",
            id: 30
          },
          createdAt: {
            type: "int64",
            id: 100
          },
          updatedAt: {
            type: "int64",
            id: 101
          }
        }
      },
      SecretRequest: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          }
        }
      },
      SecretResponse: {
        fields: {
          secret: {
            type: "Secret",
            id: 1
          }
        }
      },
      SecretSaveRequest: {
        fields: {
          secret: {
            type: "Secret",
            id: 1
          }
        }
      },
      SecretSaveResponse: {
        fields: {
          secret: {
            type: "Secret",
            id: 1
          }
        }
      },
      SecretRemoveRequest: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          }
        }
      },
      SecretRemoveResponse: {
        fields: {}
      },
      SecretsRequest: {
        fields: {
          query: {
            type: "string",
            id: 1
          },
          sortField: {
            type: "string",
            id: 10
          },
          sortDirection: {
            type: "SortDirection",
            id: 11
          }
        }
      },
      SecretsResponse: {
        fields: {
          secrets: {
            rule: "repeated",
            type: "Secret",
            id: 1
          },
          sortField: {
            type: "string",
            id: 10
          },
          sortDirection: {
            type: "SortDirection",
            id: 11
          }
        }
      },
      Encoding: {
        options: {
          "(go.enum).name": "Encoding"
        },
        values: {
          HEX: 0,
          BASE62: 1,
          BASE58: 2,
          BASE32: 3,
          BASE16: 4,
          BASE64: 5,
          SALTPACK: 6,
          BIP39: 7
        }
      },
      RandRequest: {
        fields: {
          numBytes: {
            type: "int32",
            id: 1
          },
          encoding: {
            type: "Encoding",
            id: 2
          },
          noPadding: {
            type: "bool",
            id: 10
          },
          lowercase: {
            type: "bool",
            id: 11
          }
        }
      },
      RandResponse: {
        fields: {
          data: {
            type: "string",
            id: 1
          }
        }
      },
      RandPasswordRequest: {
        fields: {
          length: {
            type: "int32",
            id: 1
          }
        }
      },
      RandPasswordResponse: {
        fields: {
          password: {
            type: "string",
            id: 1
          }
        }
      },
      PullRequest: {
        fields: {
          key: {
            type: "string",
            id: 1
          }
        }
      },
      PullResponse: {
        fields: {
          kids: {
            rule: "repeated",
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KIDs"
            }
          }
        }
      },
      PushRequest: {
        fields: {
          key: {
            type: "string",
            id: 1
          },
          remoteCheck: {
            type: "bool",
            id: 2
          }
        }
      },
      PushResponse: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          urls: {
            rule: "repeated",
            type: "string",
            id: 2,
            options: {
              "(go.field).name": "URLs"
            }
          }
        }
      },
      Collection: {
        fields: {
          path: {
            type: "string",
            id: 1
          }
        }
      },
      CollectionsRequest: {
        fields: {
          parent: {
            type: "string",
            id: 1
          },
          db: {
            type: "string",
            id: 5,
            options: {
              "(go.field).name": "DB"
            }
          }
        }
      },
      CollectionsResponse: {
        fields: {
          collections: {
            rule: "repeated",
            type: "Collection",
            id: 1
          }
        }
      },
      Document: {
        fields: {
          path: {
            type: "string",
            id: 1
          },
          value: {
            type: "string",
            id: 2
          },
          createdAt: {
            type: "int64",
            id: 10
          },
          updatedAt: {
            type: "int64",
            id: 11
          }
        }
      },
      DocumentsRequest: {
        fields: {
          prefix: {
            type: "string",
            id: 1
          },
          db: {
            type: "string",
            id: 5,
            options: {
              "(go.field).name": "DB"
            }
          }
        }
      },
      DocumentsResponse: {
        fields: {
          documents: {
            rule: "repeated",
            type: "Document",
            id: 1
          }
        }
      },
      DocumentDeleteRequest: {
        fields: {
          path: {
            type: "string",
            id: 1
          },
          db: {
            type: "string",
            id: 5,
            options: {
              "(go.field).name": "DB"
            }
          }
        }
      },
      DocumentDeleteResponse: {
        fields: {}
      },
      UserStatus: {
        options: {
          "(go.enum).name": "UserStatus"
        },
        values: {
          USER_UNKNOWN: 0,
          USER_OK: 1,
          USER_RESOURCE_NOT_FOUND: 20,
          USER_CONTENT_NOT_FOUND: 30,
          USER_CONTENT_INVALID: 31,
          USER_CONN_FAILURE: 40,
          USER_FAILURE: 50
        }
      },
      User: {
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
          },
          kid: {
            type: "string",
            id: 3,
            options: {
              "(go.field).name": "KID"
            }
          },
          seq: {
            type: "int32",
            id: 4
          },
          service: {
            type: "string",
            id: 5
          },
          url: {
            type: "string",
            id: 6,
            options: {
              "(go.field).name": "URL"
            }
          },
          status: {
            type: "UserStatus",
            id: 10
          },
          verifiedAt: {
            type: "int64",
            id: 11
          },
          timestamp: {
            type: "int64",
            id: 12
          },
          err: {
            type: "string",
            id: 20
          }
        }
      },
      UserRequest: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          local: {
            type: "bool",
            id: 4
          }
        }
      },
      UserResponse: {
        fields: {
          user: {
            type: "User",
            id: 1
          }
        }
      },
      UserSearchRequest: {
        fields: {
          query: {
            type: "string",
            id: 1
          },
          limit: {
            type: "int32",
            id: 3
          },
          local: {
            type: "bool",
            id: 4
          }
        }
      },
      UserSearchResponse: {
        fields: {
          users: {
            rule: "repeated",
            type: "User",
            id: 1
          }
        }
      },
      SearchRequest: {
        fields: {
          query: {
            type: "string",
            id: 1
          }
        }
      },
      SearchResponse: {
        fields: {
          keys: {
            rule: "repeated",
            type: "Key",
            id: 1
          }
        }
      },
      VaultSyncRequest: {
        fields: {}
      },
      VaultSyncResponse: {
        fields: {}
      },
      VaultUnsyncRequest: {
        fields: {}
      },
      VaultUnsyncResponse: {
        fields: {}
      },
      VaultAuthRequest: {
        fields: {}
      },
      VaultAuthResponse: {
        fields: {
          phrase: {
            type: "string",
            id: 1
          }
        }
      },
      VaultStatusRequest: {
        fields: {}
      },
      VaultStatusResponse: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          },
          syncedAt: {
            type: "int64",
            id: 2
          }
        }
      },
      VaultUpdateRequest: {
        fields: {}
      },
      VaultUpdateResponse: {
        fields: {}
      },
      ContentType: {
        options: {
          "(go.enum).name": "ContentType"
        },
        values: {
          BINARY_CONTENT: 0,
          UTF8_CONTENT: 1
        }
      },
      Message: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          },
          sender: {
            type: "Key",
            id: 2
          },
          text: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          createdAt: {
            type: "int64",
            id: 21
          }
        }
      },
      MessagePrepareRequest: {
        fields: {
          sender: {
            type: "string",
            id: 1
          },
          channel: {
            type: "string",
            id: 2
          },
          text: {
            type: "string",
            id: 11
          }
        }
      },
      MessagePrepareResponse: {
        fields: {
          message: {
            type: "Message",
            id: 1
          }
        }
      },
      MessageCreateRequest: {
        fields: {
          sender: {
            type: "string",
            id: 1
          },
          channel: {
            type: "string",
            id: 2
          },
          text: {
            type: "string",
            id: 11
          }
        }
      },
      MessageCreateResponse: {
        fields: {
          message: {
            type: "Message",
            id: 1
          }
        }
      },
      MessagesRequest: {
        fields: {
          channel: {
            type: "string",
            id: 1
          },
          member: {
            type: "string",
            id: 2
          }
        }
      },
      MessagesResponse: {
        fields: {
          messages: {
            rule: "repeated",
            type: "Message",
            id: 1
          }
        }
      },
      Channel: {
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
          },
          snippet: {
            type: "string",
            id: 3
          },
          updatedAt: {
            type: "int64",
            id: 4
          }
        }
      },
      ChannelsRequest: {
        fields: {
          inbox: {
            type: "string",
            id: 1
          }
        }
      },
      ChannelsResponse: {
        fields: {
          channels: {
            rule: "repeated",
            type: "Channel",
            id: 1
          }
        }
      },
      ChannelCreateRequest: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          inbox: {
            type: "string",
            id: 2
          }
        }
      },
      ChannelCreateResponse: {
        fields: {
          channel: {
            type: "Channel",
            id: 1
          }
        }
      },
      ChannelInvitesCreateRequest: {
        fields: {
          channel: {
            type: "string",
            id: 1
          },
          sender: {
            type: "string",
            id: 2
          },
          recipients: {
            rule: "repeated",
            type: "string",
            id: 3
          }
        }
      },
      ChannelInvitesCreateResponse: {
        fields: {}
      },
      ChannelInviteAcceptRequest: {
        fields: {
          channel: {
            type: "string",
            id: 1
          },
          inbox: {
            type: "string",
            id: 2
          }
        }
      },
      ChannelInviteAcceptResponse: {
        fields: {}
      },
      AdminSignURLRequest: {
        fields: {
          signer: {
            type: "string",
            id: 1
          },
          method: {
            type: "string",
            id: 2
          },
          url: {
            type: "string",
            id: 3,
            options: {
              "(go.field).name": "URL"
            }
          }
        }
      },
      AdminSignURLResponse: {
        fields: {
          auth: {
            type: "string",
            id: 1
          },
          url: {
            type: "string",
            id: 2,
            options: {
              "(go.field).name": "URL"
            }
          },
          curl: {
            type: "string",
            id: 3,
            options: {
              "(go.field).name": "CURL"
            }
          }
        }
      },
      AdminCheckRequest: {
        fields: {
          signer: {
            type: "string",
            id: 1
          },
          check: {
            type: "string",
            id: 2
          }
        }
      },
      AdminCheckResponse: {
        fields: {}
      },
      Config: {
        fields: {
          app: {
            type: "App",
            id: 1
          },
          encrypt: {
            type: "Encrypt",
            id: 10
          },
          sign: {
            type: "Sign",
            id: 11
          }
        },
        nested: {
          App: {
            fields: {
              location: {
                type: "string",
                id: 1
              },
              history: {
                rule: "repeated",
                type: "string",
                id: 2
              },
              navMinimized: {
                type: "bool",
                id: 100
              }
            }
          },
          Encrypt: {
            fields: {
              recipients: {
                rule: "repeated",
                type: "string",
                id: 1
              },
              sender: {
                type: "string",
                id: 2
              },
              noSenderRecipient: {
                type: "bool",
                id: 3
              },
              noSign: {
                type: "bool",
                id: 4
              }
            }
          },
          Sign: {
            fields: {
              signer: {
                type: "string",
                id: 1
              }
            }
          }
        }
      },
      ConfigGetRequest: {
        fields: {
          name: {
            type: "string",
            id: 1
          }
        }
      },
      ConfigGetResponse: {
        fields: {
          config: {
            type: "Config",
            id: 1
          }
        }
      },
      ConfigSetRequest: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          config: {
            type: "Config",
            id: 2
          }
        }
      },
      ConfigSetResponse: {
        fields: {}
      },
      RelayInput: {
        fields: {}
      },
      RelayOutput: {
        fields: {
          kid: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "KID"
            }
          }
        }
      },
      WormholeInput: {
        fields: {
          sender: {
            type: "string",
            id: 1
          },
          recipient: {
            type: "string",
            id: 2
          },
          invite: {
            type: "string",
            id: 3
          },
          id: {
            type: "string",
            id: 10,
            options: {
              "(go.field).name": "ID"
            }
          },
          text: {
            type: "string",
            id: 11
          }
        }
      },
      WormholeStatus: {
        options: {
          "(go.enum).name": "WormholeStatus"
        },
        values: {
          WORMHOLE_DEFAULT: 0,
          WORMHOLE_STARTING: 10,
          WORMHOLE_OFFERING: 20,
          WORMHOLE_ANSWERING: 21,
          WORMHOLE_HANDSHAKE: 40,
          WORMHOLE_CONNECTED: 100,
          WORMHOLE_CLOSED: 200
        }
      },
      WormholeMessage: {
        fields: {
          id: {
            type: "string",
            id: 1,
            options: {
              "(go.field).name": "ID"
            }
          },
          sender: {
            type: "Key",
            id: 2
          },
          recipient: {
            type: "Key",
            id: 3
          },
          type: {
            type: "WormholeMessageType",
            id: 5
          },
          text: {
            type: "string",
            id: 10
          },
          createdAt: {
            type: "int64",
            id: 21
          }
        }
      },
      WormholeOutput: {
        fields: {
          message: {
            type: "WormholeMessage",
            id: 1
          },
          status: {
            type: "WormholeStatus",
            id: 2
          }
        }
      },
      WormholeMessageType: {
        options: {
          "(go.enum).name": "WormholeMessageType"
        },
        values: {
          WORMHOLE_MESSAGE_SENT: 0,
          WORMHOLE_MESSAGE_PENDING: 1,
          WORMHOLE_MESSAGE_ACK: 2
        }
      }
    }
  }
});

export { $root as default };
