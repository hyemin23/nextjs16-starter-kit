#!/usr/bin/env bash
# PreToolUse hook: git commit 전 lint + build 검증
# exit 0 = 허용, exit 2 = 차단

set -euo pipefail

# 프로젝트 디렉토리 (Claude 환경변수 또는 스크립트 위치 기준)
CLAUDE_PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"

# stdin에서 JSON 읽기
INPUT=$(cat)

# tool_input.command에서 실제 명령어 추출
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# git commit 명령이 아니면 통과
if ! echo "$COMMAND" | grep -q "git commit"; then
  exit 0
fi

# git commit --amend도 검증 대상
echo "🔍 커밋 전 코드 품질 검증을 시작합니다..." >&2

# lint 검증
echo "📋 lint 검증 중..." >&2
if ! npm run lint --prefix "$CLAUDE_PROJECT_DIR" 2>&1; then
  echo "❌ lint 검증 실패! 커밋이 차단되었습니다." >&2
  echo "lint 오류를 수정한 후 다시 시도해주세요." >&2
  exit 2
fi
echo "✅ lint 검증 통과" >&2

# build 검증
echo "🔨 build 검증 중..." >&2
if ! npm run build --prefix "$CLAUDE_PROJECT_DIR" 2>&1; then
  echo "❌ build 검증 실패! 커밋이 차단되었습니다." >&2
  echo "빌드 오류를 수정한 후 다시 시도해주세요." >&2
  exit 2
fi
echo "✅ build 검증 통과" >&2

echo "🎉 모든 검증 통과! 커밋을 진행합니다." >&2
exit 0
