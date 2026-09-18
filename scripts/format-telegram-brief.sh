#!/usr/bin/env bash
# Usage:
#   format-telegram-brief.sh YYYY-MM-DD "초보1" "초보2" "초보3" "고급1" "고급2" "고급3"
#   format-telegram-brief.sh YYYY-MM-DD --keys-file path/to/keys.txt
# keys file: 6 non-empty lines (beginner x3, advanced x3)
set -euo pipefail
DATE=${1:?date}
shift || true

B1=""; B2=""; B3=""; A1=""; A2=""; A3=""
if [[ "${1:-}" == "--keys-file" ]]; then
  KEYS_FILE=${2:?keys file}
  mapfile -t KEYS < <(grep -v '^[[:space:]]*$' "$KEYS_FILE" | head -6)
  B1=${KEYS[0]:-}; B2=${KEYS[1]:-}; B3=${KEYS[2]:-}
  A1=${KEYS[3]:-}; A2=${KEYS[4]:-}; A3=${KEYS[5]:-}
else
  B1=${1:-}; B2=${2:-}; B3=${3:-}
  A1=${4:-}; A2=${5:-}; A3=${6:-}
fi

SCHEME=${SITE_URL_SCHEME:-https}
SITE_HOME="${SCHEME}://ai.optiwork.co.kr"
SITE_BEGINNER="${SITE_HOME}/posts/${DATE}/beginner/"
SITE_ADVANCED="${SITE_HOME}/posts/${DATE}/advanced/"

cat <<MSG
📰 <b>옵티 AI 데일리</b> · ${DATE}

<b>초보 핵심</b>
• ${B1}
• ${B2}
• ${B3}

<b>고급 핵심</b>
• ${A1}
• ${A2}
• ${A3}

────────
🌐 국내·해외 AI 커뮤니티 데일리 브리핑 by Optiwork
초보: ${SITE_BEGINNER}
고급: ${SITE_ADVANCED}

채널 구독: https://t.me/opti_ai_daily
MSG
