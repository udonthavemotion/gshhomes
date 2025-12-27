#!/bin/bash

# Video Re-encoding Script for 1080p HD Desktop Videos
# This script re-encodes 720p videos to 1080p for desktop viewing
# Excludes homepage-hero.mp4 as specified

set -e

# Color codes for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

SOURCE_DIR="public/assets/video/videosworking"
DEST_DIR="public/assets/video/responsive/desktop"

# Array of videos to re-encode (excluding homepage-hero.mp4)
VIDEOS=(
  "doublewide-hero.mp4"
  "singewidehomepage.mp4"
  "modularhomes.mp4"
  "land.mp4"
  "hero.mp4"
  "1204.mp4"
  "manufactures.mp4"
  "finance.mp4"
  "deal.mp4"
)

echo -e "${YELLOW}======================================${NC}"
echo -e "${YELLOW}1080p Video Re-encoding Script${NC}"
echo -e "${YELLOW}======================================${NC}"
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo -e "${YELLOW}ERROR: ffmpeg is not installed${NC}"
    echo "Please install ffmpeg:"
    echo "  - Windows: Download from https://ffmpeg.org/download.html"
    echo "  - Mac: brew install ffmpeg"
    echo "  - Linux: sudo apt-get install ffmpeg"
    exit 1
fi

echo -e "${GREEN}ffmpeg found: $(ffmpeg -version | head -n1)${NC}"
echo ""

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Track total size
TOTAL_ORIGINAL=0
TOTAL_NEW=0

echo -e "${YELLOW}Starting re-encoding process...${NC}"
echo ""

# Re-encode each video
for VIDEO in "${VIDEOS[@]}"; do
    INPUT="$SOURCE_DIR/$VIDEO"
    OUTPUT="$DEST_DIR/$VIDEO"

    if [ ! -f "$INPUT" ]; then
        echo -e "${YELLOW}WARNING: $INPUT not found, skipping...${NC}"
        continue
    fi

    echo -e "${GREEN}Processing: $VIDEO${NC}"

    # Get original file size
    ORIG_SIZE=$(stat -f%z "$INPUT" 2>/dev/null || stat -c%s "$INPUT" 2>/dev/null)
    ORIG_SIZE_MB=$((ORIG_SIZE / 1024 / 1024))

    echo "  Original: ${ORIG_SIZE_MB} MB (720p)"
    echo "  Re-encoding to 1080p HD..."

    # Re-encode to 1080p with high quality settings
    ffmpeg -i "$INPUT" \
      -vf "scale=1920:1080:force_original_aspect_ratio=decrease" \
      -c:v libx264 -crf 23 -preset slow \
      -movflags +faststart -c:a aac -b:a 192k \
      "$OUTPUT" -y \
      -loglevel warning -stats

    # Get new file size
    NEW_SIZE=$(stat -f%z "$OUTPUT" 2>/dev/null || stat -c%s "$OUTPUT" 2>/dev/null)
    NEW_SIZE_MB=$((NEW_SIZE / 1024 / 1024))

    echo "  Output: ${NEW_SIZE_MB} MB (1080p)"
    echo "  Size increase: +$((NEW_SIZE_MB - ORIG_SIZE_MB)) MB"
    echo ""

    TOTAL_ORIGINAL=$((TOTAL_ORIGINAL + ORIG_SIZE))
    TOTAL_NEW=$((TOTAL_NEW + NEW_SIZE))
done

# Summary
echo -e "${YELLOW}======================================${NC}"
echo -e "${GREEN}Re-encoding Complete!${NC}"
echo -e "${YELLOW}======================================${NC}"
echo ""
echo "Summary:"
echo "  Videos processed: ${#VIDEOS[@]}"
echo "  Total original size (720p): $((TOTAL_ORIGINAL / 1024 / 1024)) MB"
echo "  Total new size (1080p): $((TOTAL_NEW / 1024 / 1024)) MB"
echo "  Total increase: +$((TOTAL_NEW / 1024 / 1024 - TOTAL_ORIGINAL / 1024 / 1024)) MB"
echo ""
echo -e "${GREEN}1080p HD videos are ready in: $DEST_DIR${NC}"
echo ""
echo "Next steps:"
echo "  1. Update React components to use responsive video sources"
echo "  2. Test on desktop and mobile devices"
echo "  3. Run: npm run build"
echo ""
