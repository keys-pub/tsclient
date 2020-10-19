# tsclient

```shell
yarn add @keys-pub/tsclient
```

```typescript
import {Auth, credentials, createKeysClient, KeysService, certPath, RPCError} from '@keys-pub/tsclient'

export const auth: Auth = new Auth()
export const keys: KeysService = createKeysClient('localhost:22405', credentials(certPath(), auth))

// Authenticate with service
const authUnlock = await keys.AuthUnlock({
  secret: 'mypassword',
  type: AuthType.PASSWORD_AUTH,
  client: 'myapp',
})
// Set auth token from unlock on the service auth
auth.token = authUnlock.authToken

// Search
const search = await keys.Search({})
console.log('Search:', search)
```
