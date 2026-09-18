#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
WORKDIR=$(mktemp -d)
trap 'rm -rf "$WORKDIR"' EXIT
git clone --depth 20 --branch gh-pages "https://github.com/kea9997/dc-ai-briefing-site.git" "$WORKDIR"
# replace tree
find "$WORKDIR" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a dist/. "$WORKDIR/"
touch "$WORKDIR/.nojekyll"
echo 'ai.optiwork.co.kr' > "$WORKDIR/CNAME"
cd "$WORKDIR"
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy"
  exit 0
fi
git -c user.email="kea9997@users.noreply.github.com" -c user.name="kea9997" commit -m "Deploy Opti AI Daily"
git push origin gh-pages
echo "Deployed to gh-pages"
