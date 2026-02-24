#!/usr/bin/env bash
# Claude Code Hook → Slack 알림 스크립트
# stdin으로 hook input JSON을 받아 Slack Incoming Webhook으로 전송

set -euo pipefail

# 환경변수 확인
if [ -z "${SLACK_WEBHOOK_URL:-}" ]; then
  exit 0
fi

# stdin에서 hook JSON 읽기
INPUT=$(cat)

EVENT=$(echo "$INPUT" | jq -r '.hook_event_name // empty')
PROJECT=$(basename "${CLAUDE_PROJECT_DIR:-unknown}")

if [ "$EVENT" = "Notification" ]; then
  TITLE=$(echo "$INPUT" | jq -r '.title // "알림"')
  MESSAGE=$(echo "$INPUT" | jq -r '.message // ""')
  PAYLOAD=$(jq -n \
    --arg text "🔐 *[$PROJECT]* 권한 요청\n${TITLE}: ${MESSAGE}" \
    '{text: $text}')

elif [ "$EVENT" = "Stop" ]; then
  RAW=$(echo "$INPUT" | jq -r '.last_assistant_message // "작업 완료"')
  # 100자 제한
  SUMMARY="${RAW:0:100}"
  if [ ${#RAW} -gt 100 ]; then
    SUMMARY="${SUMMARY}..."
  fi
  PAYLOAD=$(jq -n \
    --arg text "✅ *[$PROJECT]* 작업 완료\n${SUMMARY}" \
    '{text: $text}')

else
  exit 0
fi

curl -s -o /dev/null -X POST \
  -H 'Content-type: application/json' \
  --data "$PAYLOAD" \
  "$SLACK_WEBHOOK_URL"
