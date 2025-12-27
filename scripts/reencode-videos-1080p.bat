@echo off
REM Video Re-encoding Script for 1080p HD Desktop Videos (Windows)
REM This script re-encodes 720p videos to 1080p for desktop viewing
REM Excludes homepage-hero.mp4 as specified

setlocal enabledelayedexpansion

echo ======================================
echo 1080p Video Re-encoding Script
echo ======================================
echo.

REM Check if ffmpeg is installed
where ffmpeg >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: ffmpeg is not installed
    echo Please download from https://ffmpeg.org/download.html
    echo After installation, add ffmpeg to your PATH
    pause
    exit /b 1
)

echo ffmpeg found!
echo.

set SOURCE_DIR=public\assets\video\videosworking
set DEST_DIR=public\assets\video\responsive\desktop

REM Create destination directory
if not exist "%DEST_DIR%" mkdir "%DEST_DIR%"

REM List of videos to re-encode
set VIDEOS=doublewide-hero.mp4 singewidehomepage.mp4 modularhomes.mp4 land.mp4 hero.mp4 1204.mp4 manufactures.mp4 finance.mp4 deal.mp4

echo Starting re-encoding process...
echo.

for %%V in (%VIDEOS%) do (
    set INPUT=%SOURCE_DIR%\%%V
    set OUTPUT=%DEST_DIR%\%%V

    if exist "!INPUT!" (
        echo Processing: %%V
        echo   Re-encoding to 1080p HD...

        ffmpeg -i "!INPUT!" ^
          -vf "scale=1920:1080:force_original_aspect_ratio=decrease" ^
          -c:v libx264 -crf 23 -preset slow ^
          -movflags +faststart -c:a aac -b:a 192k ^
          "!OUTPUT!" -y ^
          -loglevel warning -stats

        echo   Complete: %%V
        echo.
    ) else (
        echo WARNING: !INPUT! not found, skipping...
        echo.
    )
)

echo ======================================
echo Re-encoding Complete!
echo ======================================
echo.
echo 1080p HD videos are ready in: %DEST_DIR%
echo.
echo Next steps:
echo   1. Update React components to use responsive video sources
echo   2. Test on desktop and mobile devices
echo   3. Run: npm run build
echo.
pause
