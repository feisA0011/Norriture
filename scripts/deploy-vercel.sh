#!/usr/bin/env bash
set -euo pipefail

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI is not installed. Install it with: npm i -g vercel"
  exit 1
fi

echo "Deploying Norriture to Vercel production..."
vercel --prod
