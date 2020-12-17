# tsclient

```shell
yarn add @keys-pub/tsclient
```

```typescript
import {Credentials, keysService, KeysService, certPath, RPCError} from '@keys-pub/tsclient'

export const creds: Credentials = new Credentials(certPath())
export const keys: KeysService = keysService('localhost:22405', creds)

// Authenticate with service
const auth = await keys.authUnlock({
  secret: 'mypassword',
  type: AuthType.PASSWORD_AUTH,
  client: 'myapp',
})
// Set auth token from unlock on the service auth
creds.token = auth.authToken

// Search
const search = await keys.search({})
console.log('Search:', search)
```

## Publishing

```shell
npm login
npm publish --access public
```
