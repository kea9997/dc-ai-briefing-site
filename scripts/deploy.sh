#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
rm -rf /tmp/opti-ai-daily-pages
mkdir -p /tmp/opti-ai-daily-pages
cp -a dist/. /tmp/opti-ai-daily-pages/
cd /tmp/opti-ai-daily-pages
touch .nojekyll
test -f CNAME || echo 'ai.optiwork.co.kr' > CNAME
git init -b gh-pages
git add -A
git -c user.email="kea9997@users.noreply.github.com" -c user.name="kea9997" commit -m "Deploy Opti AI Daily"
git remote add origin https://github.com/kea9997/dc-ai-briefing-site.git
git push -f origin gh-pages
echo "Deployed to gh-pages"
