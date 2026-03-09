#!/bin/bash
# IndexNow URL Submission — gregkowalczyk.com
# Submits all sitemap URLs to IndexNow (covers Bing, Yandex, Seznam, Naver, etc.)
# Run after every deployment: ./submit-indexnow.sh

set -e

KEY="77f49282952bf08f701f590b3ae93537"
HOST="www.gregkowalczyk.com"
KEY_LOCATION="https://${HOST}/${KEY}.txt"
SITEMAP_URL="https://${HOST}/sitemap-0.xml"

echo "=== IndexNow Submission — gregkowalczyk.com ==="
echo "Fetching sitemap from ${SITEMAP_URL}..."

# Fetch sitemap and extract all <loc> URLs
URLS=$(curl -s "$SITEMAP_URL" | python3 -c "
import sys, re
content = sys.stdin.read()
urls = re.findall(r'<loc>([^<]+)</loc>', content)
print('\n'.join(urls))
")

if [ -z "$URLS" ]; then
  echo "ERROR: No URLs found in sitemap. Check that the site is live."
  exit 1
fi

URL_COUNT=$(echo "$URLS" | wc -l | tr -d ' ')
echo "Found ${URL_COUNT} URLs to submit."

# Build JSON array of URLs
URL_JSON=$(echo "$URLS" | python3 -c "
import sys, json
urls = [line.strip() for line in sys.stdin if line.strip()]
print(json.dumps(urls))
")

# Build full payload
PAYLOAD=$(python3 -c "
import json
payload = {
    'host': '${HOST}',
    'key': '${KEY}',
    'keyLocation': '${KEY_LOCATION}',
    'urlList': ${URL_JSON}
}
print(json.dumps(payload, indent=2))
")

echo ""
echo "Submitting to IndexNow..."

RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$PAYLOAD")

HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -1)

echo ""
if [ "$HTTP_CODE" == "200" ] || [ "$HTTP_CODE" == "202" ]; then
  echo "✅ Success! ${URL_COUNT} URLs submitted. HTTP ${HTTP_CODE}"
  echo "   Covered: Bing, Yandex, Seznam, Naver, and all IndexNow partners"
elif [ "$HTTP_CODE" == "422" ]; then
  echo "⚠️  HTTP 422 — URLs already submitted recently (not an error, just up-to-date)"
else
  echo "❌ Error: HTTP ${HTTP_CODE}"
  echo "   Response: ${BODY}"
  exit 1
fi

echo ""
echo "URLs submitted:"
echo "$URLS" | while read url; do echo "  • $url"; done
echo ""
echo "Done. Verify at: https://www.bing.com/webmasters/home"
