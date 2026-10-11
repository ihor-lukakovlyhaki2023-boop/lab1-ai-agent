#!/usr/bin/env bash
set -e
echo "=== Running CI on Unix-like system ==="
npm ci || npm install
npm run build
npm test
echo "=== CI script finished successfully ==="
