#!/usr/bin/env bash
set -euo pipefail

if ! command -v git >/dev/null 2>&1; then
  echo "git is required to run merge conflict checks."
  exit 1
fi

if git grep -nE '^(<<<<<<< |=======|>>>>>>> )' -- . >/tmp/merge_conflicts.out 2>/dev/null; then
  echo "❌ Merge conflict markers found. Resolve these before deploy:"
  cat /tmp/merge_conflicts.out
  exit 1
fi

echo "✅ No merge conflict markers found in tracked files."
