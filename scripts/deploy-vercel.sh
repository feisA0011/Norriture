#!/usr/bin/env bash
set -euo pipefail

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI is not installed. Install it with: npm i -g vercel"
  exit 1
fi

echo "==> Ensuring project is linked to Vercel"
if [ ! -d ".vercel" ]; then
  vercel link --yes
fi

echo "==> Pulling production environment/project settings"
vercel pull --yes --environment=production

echo "==> Building locally with Vercel settings"
vercel build

echo "==> Deploying prebuilt output to production"
vercel deploy --prebuilt --prod
