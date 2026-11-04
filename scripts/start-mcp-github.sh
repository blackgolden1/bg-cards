#!/bin/bash
set -e

cd "$(dirname "$0")/.."

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GITHUB_TOKEN no está definido en .env" >&2
  exit 1
fi

exec npx -y @modelcontextprotocol/server-github
