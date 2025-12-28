# Gulf South Homes Inc.

Modern website for Gulf South Homes Inc. - Louisiana's trusted manufactured and modular home dealer since 1995.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment (Vercel)

This project is configured for zero-config Vercel deployment:

1. Connect this repo to Vercel
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Install Command: `npm install`

### Environment Variables

None required for basic deployment.

### ⚠️ CRITICAL: Vercel Rewrite Pattern Fix

**IMPORTANT:** The `vercel.json` rewrite pattern is configured correctly. **DO NOT CHANGE IT** unless you know what you're doing.

#### The Problem
Vercel does **NOT** support complex regex patterns like negative lookaheads in rewrite rules. If you see this error:
```
Rewrite at index 0 has invalid `source` pattern "/((?!.*\.(mp4|jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot|css|js)$).*)"
```

#### The Solution
Use Vercel's native catch-all pattern: `/:path*`

**✅ CORRECT (Current):**
```json
{
  "rewrites": [
    {
      "source": "/:path*",
      "destination": "/index.html"
    }
  ]
}
```

**❌ WRONG (Will break deployment):**
```json
{
  "rewrites": [
    {
      "source": "/((?!.*\\.(mp4|jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot|css|js)$).*)",
      "destination": "/index.html"
    }
  ]
}
```

#### Why This Works
- `/:path*` is Vercel's official catch-all pattern
- Vercel **automatically** serves static files (images, videos, CSS, JS) before applying rewrites
- No need to explicitly exclude file extensions - Vercel handles it
- Perfect for React Router SPAs - all routes go to `/index.html` except actual files

#### Video Assets
Large video files (>50MB) may trigger GitHub warnings, but Vercel deployment works fine. The `vercel.json` headers ensure proper video streaming with:
- `Content-Type: video/mp4`
- `Accept-Ranges: bytes` (for video seeking)
- Long cache headers for performance

**Never change the rewrite pattern unless you're absolutely certain. This configuration works.**

## Project Structure

```
├── components/     # Reusable UI components
├── pages/          # Page components
├── data/           # Home inventory data
├── public/         # Static assets (images, videos)
├── src/            # Global styles
└── index.html      # Entry point
```

## Pages

- `/` - Homepage with video hero
- `/catalog` - All homes catalog with filters
- `/single-wide` - Single-wide homes
- `/land-home` - Land & Home packages
- `/about` - About the company
- `/services` - Parts & service info
- `/contact` - Contact form
- `/catalog/:id` - Individual home details

## License

Private - Gulf South Homes Inc.
