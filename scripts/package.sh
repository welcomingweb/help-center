#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

SRC_ENV=".env"

if [ ! -f "$SRC_ENV" ]; then
  echo "Error: $SRC_ENV not found in $ROOT" >&2
  exit 1
fi

echo "==> Cleaning previous build output"
rm -rf .next build

echo "==> Building"
npm run build

echo "==> Preparing build/"
mkdir -p build

echo "==> Copying artifacts"
cp -r .next build/
cp -r public build/
cp next.config.mjs package.json package-lock.json pm2.json build/
cp "$SRC_ENV" build/.env

echo "==> Creating tarball"
tar -czf build/welcomingweb-help.tar.gz -C build \
  .next public next.config.mjs package.json package-lock.json pm2.json .env

SIZE="$(ls -lh build/welcomingweb-help.tar.gz | awk '{print $5}')"
echo "==> Done: build/welcomingweb-help.tar.gz ($SIZE)"
