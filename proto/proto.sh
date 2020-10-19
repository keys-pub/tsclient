#!/usr/bin/env bash

set -e -u -o pipefail # Fail on error

dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd "$dir"

bin="$dir/../node_modules/.bin"

# $bin/pbjs -t static-module --es6 -w es6 -o ../lib/keys.js keys.proto 
# $bin/pbts -o ../lib/keys.d.ts ../lib/keys.js

# $bin/pbjs -t static-module --es6 -w es6 -o ../lib/fido2.js fido2.proto 
# $bin/pbts -o ../lib/fido2.d.ts ../lib/fido2.js

$bin/pbjs -t json-module --es6 -w es6 -o ../src/keys.proto.js keys.proto 
$bin/pbjs -t json-module --es6 -w es6 -o ../src/fido2.proto.js fido2.proto

protoc_include="-I . \
  -I `go list -m -f {{.Dir}} github.com/alta/protopatch` \
  -I `go list -m -f {{.Dir}} google.golang.org/protobuf`"

echo "protoc-gen-tstypes"
if [ ! -x "$(command -v protoc-gen-tstypes)" ]; then
    echo "Installing github.com/tmc/grpcutil/protoc-gen-tstypes"
    go install github.com/tmc/grpcutil/protoc-gen-tstypes
fi

tstypes_path=`go env GOPATH`/bin/protoc-gen-tstypes
protoc \
  $protoc_include \
  --plugin="protoc-gen-tstypes=${tstypes_path}" \
  --tstypes_out=../src \
  --tstypes_opt=declare_namespace=false,outpattern="{{.BaseName}}.ts" \
  keys.proto fido2.proto

echo "protoc-gen-tsrpc"
if [ ! -x "$(command -v protoc-gen-tsrpc)" ]; then
    echo "Installing github.com/keys-pub/protoc-gen-tsrpc"
    go install github.com/keys-pub/protoc-gen-tsrpc
fi
tsrpc_path=`go env GOPATH`/bin/protoc-gen-tsrpc
protoc \
  $protoc_include \
  --plugin="protoc-gen-tsrpc=${tsrpc_path}" \
  --tsrpc_out=../src \
  keys.proto
protoc \
  $protoc_include \
  --plugin="protoc-gen-tsrpc=${tsrpc_path}" \
  --tsrpc_out=../src \
  fido2.proto