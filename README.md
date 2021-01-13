# tsclient

```shell
yarn add @keys-pub/tsclient
```

```typescript
import {Credentials, rpcService, RPCService, certPath, RPCError} from '@keys-pub/tsclient'

export const creds: Credentials = new Credentials(certPath('MyApp'))
export const rpc: RPCService = rpcService('localhost:22405', creds)

// Authenticate with service
const auth = await rpc.authUnlock({
  secret: 'mypassword',
  type: AuthType.PASSWORD_AUTH,
  client: 'myapp',
})
// Set auth token from unlock on the service auth
creds.token = auth.authToken

// Search
const search = await rpc.search({})
console.log('Search:', search)
```

## Publishing

```shell
npm login
npm publish --access public
```
