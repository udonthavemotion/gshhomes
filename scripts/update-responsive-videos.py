#!/usr/bin/env python3
"""
Update React components with responsive video sources.
Converts single <source> tags to responsive dual-source pattern.
"""

import re
import os
from pathlib import Path

# Define the video mappings for each page
VIDEO_UPDATES = {
    'pages/DoubleWide.tsx': {
        'old_pattern': r'<source src="/assets/video/videosworking/doublewide-hero\.mp4" type="video/mp4" />',
        'video_name': 'doublewide-hero.mp4'
    },
    'pages/SingleWide.tsx': {
        'old_pattern': r'<source src="/assets/video/videosworking/singewidehomepage\.mp4" type="video/mp4" />',
        'video_name': 'singewidehomepage.mp4'
    },
    'pages/Modular.tsx': {
        'old_pattern': r'<source src="/assets/video/videosworking/modularhomes\.mp4" type="video/mp4" />',
        'video_name': 'modularhomes.mp4'
    },
    'pages/Contact.tsx': {
        'old_pattern': r'<source src="/assets/images/awards/contact\.mp4" type="video/mp4" />',
        'video_name': 'land.mp4'  # Using land.mp4 as per requirements
    },
    'pages/LandHome.tsx': {
        'old_pattern': r'<source src="/assets/video/videosworking/land\.mp4" type="video/mp4" />',
        'video_name': 'land.mp4'
    },
    'pages/Catalog.tsx': {
        'old_pattern': r'<source src="/assets/video/videosworking/hero\.mp4" type="video/mp4" />',
        'video_name': 'hero.mp4'
    },
    'pages/About.tsx': {
        'old_pattern': r'<source src="/assets/images/awards/about page\.mp4" type="video/mp4" />',
        'video_name': '1204.mp4'  # Using 1204.mp4 as per requirements
    },
    'pages/Manufacturers.tsx': {
        'old_pattern': r'<source src="/assets/images/awards/manufactures\.mp4" type="video/mp4" />',
        'video_name': 'manufactures.mp4'
    },
    'pages/Insurance.tsx': {
        'old_pattern': r'<source src="/assets/video/videosworking/finance\.mp4" type="video/mp4" />',
        'video_name': 'finance.mp4'
    },
    'pages/Deals.tsx': {
        'old_pattern': r'<source src="/assets/video/videosworking/deal\.mp4" type="video/mp4" />',
        'video_name': 'deal.mp4'
    },
}

def get_responsive_video_template(video_name):
    """Generate responsive video source template"""
    return f'''{{/* Desktop/Tablet: 1080p HD (≥769px) */}}
          <source
            src="/assets/video/responsive/desktop/{video_name}"
            type="video/mp4"
            media="(min-width: 769px)"
          />

          {{/* Mobile: 720p optimized (≤768px) */}}
          <source
            src="/assets/video/responsive/mobile/{video_name}"
            type="video/mp4"
          />

          Your browser does not support video playback.'''

def update_file(file_path, old_pattern, video_name):
    """Update a single file with responsive video sources"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if pattern exists
        if not re.search(old_pattern, content):
            print(f"  WARNING:  Pattern not found in {file_path}")
            return False

        # Replace with responsive template
        new_content = re.sub(
            old_pattern,
            get_responsive_video_template(video_name),
            content
        )

        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"  SUCCESS: Updated {file_path}")
        return True

    except Exception as e:
        print(f"  ERROR: Error updating {file_path}: {e}")
        return False

def main():
    """Main execution"""
    print("=" * 50)
    print("Responsive Video Update Script")
    print("=" * 50)
    print()

    # Change to project root
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    os.chdir(project_root)

    print(f"Working directory: {os.getcwd()}")
    print()

    updated_count = 0
    failed_count = 0

    for file_path, config in VIDEO_UPDATES.items():
        print(f"Processing: {file_path}")

        if not os.path.exists(file_path):
            print(f"  WARNING:  File not found: {file_path}")
            failed_count += 1
            continue

        # Create backup
        backup_path = f"{file_path}.backup"
        if not os.path.exists(backup_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  💾 Backup created: {backup_path}")

        # Update file
        if update_file(file_path, config['old_pattern'], config['video_name']):
            updated_count += 1
        else:
            failed_count += 1

        print()

    print("=" * 50)
    print("Summary")
    print("=" * 50)
    print(f"Successfully updated: {updated_count}")
    print(f"Failed or skipped: {failed_count}")
    print()

    if updated_count > 0:
        print("SUCCESS: Next steps:")
        print("  1. Run the video re-encoding script:")
        print("     bash scripts/reencode-videos-1080p.sh")
        print("     OR")
        print("     scripts\\reencode-videos-1080p.bat")
        print("  2. Test the pages in browser")
        print("  3. Run: npm run build")

    return 0 if failed_count == 0 else 1

if __name__ == '__main__':
    exit(main())
