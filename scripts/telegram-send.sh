#!/usr/bin/env bash
set -euo pipefail
ENV_FILE="${TELEGRAM_ENV_FILE:-$HOME/.config/opti-ai-daily/telegram.env}"
# shellcheck disable=SC1090
source "$ENV_FILE"
TEXT=${1:-}
if [[ -z "$TEXT" && ! -t 0 ]]; then TEXT=$(cat); fi
if [[ -z "${TEXT}" ]]; then echo "usage: telegram-send.sh 'message'" >&2; exit 1; fi
PARSE_MODE=${TELEGRAM_PARSE_MODE:-HTML}
curl -sS -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
  --data-urlencode "chat_id=${TELEGRAM_CHAT_ID}" \
  --data-urlencode "text=${TEXT}" \
  --data-urlencode "parse_mode=${PARSE_MODE}" \
  --data-urlencode "disable_web_page_preview=false"
echo
