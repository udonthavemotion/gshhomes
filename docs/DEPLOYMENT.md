# Deployment Guide

This document outlines the deployment process for Gulf South Homes website to Vercel.

---

## Prerequisites

- Node.js 18+ installed
- npm 9+ installed
- Vercel CLI (optional, for local preview)
- Git repository connected to Vercel

---

## Environment Variables

**CURRENTLY NONE REQUIRED**

The website currently has **zero environment variable dependencies**. All configuration is hardcoded in source files:

- GoHighLevel form IDs are in component code
- CRM domain is hardcoded
- Chat widget ID is in `index.html`
- All asset paths are relative (public assets)

### Future Environment Variables

If environment variables are added in the future, they should be configured in:

1. **Local Development:** `.env` file (gitignored)
2. **Vercel Production:** Vercel Dashboard → Project Settings → Environment Variables

**Recommended future env vars:**
```bash
# GoHighLevel Integration
GHL_CONTACT_FORM_ID=ZRYIIk3TWJ6OI96TkkBg
GHL_HOME_INQUIRY_FORM_ID=9bhfQTzobvZQx4nLQjRc
GHL_CRM_DOMAIN=crm.gshforms.com
GHL_CHAT_WIDGET_ID=6940899ff258cf30de629683

# Analytics (when implemented)
GA_TRACKING_ID=
FACEBOOK_PIXEL_ID=

# Deployment
VERCEL_URL=  # Auto-injected by Vercel
```

---

## Build Configuration

### Vercel Project Settings

**Framework Preset:** Vite

**Build Configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Build Process

Vite builds the application by:

1. Transpiling TypeScript to JavaScript
2. Bundling React components
3. Optimizing and code-splitting
4. Processing Tailwind CSS
5. Copying public assets to `dist/`
6. Generating production-ready static files

**Build Output:**
- `dist/index.html` - Entry point
- `dist/assets/` - JavaScript, CSS bundles
- `dist/assets/video/` - Hero videos
- `dist/assets/images/` - Home photos, brand assets
- `dist/Modular Homes Page/` - Modular home photos
- All other public assets

---

## Local Testing (Pre-Deployment)

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
- Opens on `http://localhost:3000`
- Hot module replacement enabled
- Use for development and testing

### Production Build
```bash
npm run build
```
**Expected output:**
- Build completes in ~10-30 seconds
- No errors or warnings
- Output directory: `dist/`

**Check for issues:**
- Bundle size warnings (acceptable if <1MB total)
- TypeScript errors (must be zero)
- Asset reference errors (must be zero)

### Preview Production Build
```bash
npm run preview
```
- Serves production build locally
- Opens on `http://localhost:4173`
- **Test before deploying:**
  - Homepage loads with hero video
  - All navigation links work
  - Contact form loads (GoHighLevel iframe)
  - Home inquiry forms load
  - Chat widget appears
  - No console errors

---

## Deployment to Vercel

### Automatic Deployment (Git Push)

**Production Branch:** `main`

When you push to `main`:
1. Vercel automatically detects the push
2. Runs `npm install`
3. Runs `npm run build`
4. Deploys to production URL: `https://gulfsouthhomesinc.com`
5. Sends deployment notification

**Deployment Status:**
- Check Vercel dashboard for build logs
- Deployment typically completes in 2-3 minutes

### Manual Deployment (Vercel CLI)

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Post-Deployment Checklist

After each deployment, verify:

### Critical Functionality
- [ ] Homepage loads without errors
- [ ] Hero video plays on homepage
- [ ] All navigation links work (test at least 5 pages)
- [ ] Contact form loads and submits (test with fake data)
- [ ] Home inquiry form loads (test on any home detail page)
- [ ] Chat widget appears in bottom-right corner
- [ ] Inventory pages load with photos (Single-Wide, Double-Wide, Modular)

### Performance
- [ ] Lighthouse score: Performance >90, Accessibility >90
- [ ] No 404 errors in browser console (DevTools → Network)
- [ ] Videos load without blocking page render
- [ ] Page loads in <3 seconds on fast 4G

### SEO
- [ ] All pages have proper `<title>` tags (check 3 pages)
- [ ] OG images display correctly (test with Facebook Debugger or Twitter Card Validator)
- [ ] Robots.txt accessible: `https://gulfsouthhomesinc.com/robots.txt`
- [ ] Sitemap accessible: `https://gulfsouthhomesinc.com/sitemap.xml`

### Mobile Responsive
- [ ] Test on real mobile device OR Chrome DevTools mobile view
- [ ] Navigation menu works on mobile
- [ ] Forms are usable on mobile (fields not cut off)
- [ ] Videos don't autoplay on mobile (preload=metadata)

---

## Rollback Procedure

If a deployment breaks the site:

### Option 1: Instant Rollback (Vercel Dashboard)
1. Go to Vercel Dashboard → Deployments
2. Find the last working deployment (marked with ✓)
3. Click "..." → "Promote to Production"
4. Site reverts to previous version immediately

### Option 2: Git Revert (Requires New Deployment)
```bash
# Find the commit hash of the last working version
git log --oneline

# Revert to that commit
git reset --hard <commit-hash>

# Force push to trigger new deployment
git push origin main --force
```

**WARNING:** Force push overwrites history. Only use if Option 1 doesn't work.

---

## Troubleshooting

### Build Fails on Vercel

**Check build logs in Vercel dashboard:**

1. **TypeScript errors:**
   - Fix locally first: `npm run build`
   - Ensure no `any` types or missing imports

2. **Missing dependencies:**
   - Verify `package.json` includes all imports
   - Run `npm install` locally to test

3. **Out of memory:**
   - Increase Node memory: Add to `package.json` scripts:
     ```json
     "build": "NODE_OPTIONS='--max-old-space-size=4096' vite build"
     ```

### Site Loads But Forms Don't Work

**Check GoHighLevel scripts:**
1. Open browser DevTools → Console
2. Look for errors from `crm.gshforms.com` or `leadconnectorhq.com`
3. Verify scripts in `index.html` are loading (Network tab)
4. If blocked: Check Vercel headers config, CSP, or CORS

**Verify form IDs:**
- Contact Form: `ZRYIIk3TWJ6OI96TkkBg`
- Home Inquiry: `9bhfQTzobvZQx4nLQjRc`
- CRM Domain: `crm.gshforms.com`

### Videos Not Loading

**Check file paths:**
- All videos must be in `public/assets/video/videosworking/`
- Paths in code must start with `/assets/video/videosworking/`
- Case-sensitive on Vercel (Linux servers)

**Verify video files exist in build:**
```bash
npm run build
ls -la dist/assets/video/videosworking/
```

### 404 Errors on Routes

**Vercel routing issue:**
- Verify `vercel.json` includes catch-all rewrite:
  ```json
  {
    "rewrites": [{ "source": "/:path*", "destination": "/index.html" }]
  }
  ```

### Chat Widget Not Appearing

**Script loading issue:**
1. Check `index.html` for chat widget script
2. Verify widget ID: `6940899ff258cf30de629683`
3. Open Network tab and search for `leadconnectorhq.com`
4. If blocked: Ad blockers or privacy extensions may interfere

---

## Vercel Configuration File

The `vercel.json` file in the root directory configures:

- Routing rules (SPA catch-all)
- Header policies (security, caching)
- Rewrites and redirects

**Current configuration:**
```json
{
  "rewrites": [{ "source": "/:path*", "destination": "/index.html" }]
}
```

**Do not modify unless:**
- Adding custom headers
- Implementing redirects (e.g., www → non-www)
- Adding API routes

---

## Performance Optimization

### Current Optimizations
- Videos optimized to 720p, H.264, CRF 28
- Lazy loading for images below fold
- Intersection Observer for scroll animations
- Preload critical CSS and fonts
- DNS prefetch for external domains

### Future Optimizations
- Implement route-based code splitting
- Add image lazy loading library (e.g., `react-lazy-load-image-component`)
- Consider CDN for video assets (Cloudflare, AWS S3)
- Implement service worker for offline functionality

---

## Monitoring & Analytics

### Currently Not Implemented

**Recommended future additions:**
1. **Google Analytics 4** - Traffic and user behavior
2. **Sentry** - Error tracking and monitoring
3. **Vercel Analytics** - Core Web Vitals tracking
4. **Hotjar** - User session recordings (for UX improvements)

---

## Support Contacts

**Vercel Support:**
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs

**GoHighLevel Support:**
- Dashboard: https://crm.gshforms.com
- Support: Contact GoHighLevel account owner

**Development Team:**
- Repository: https://github.com/[your-repo]
- Issues: Create GitHub issue for bug reports

---

**Last Updated:** 2025-12-27
**Maintained By:** Development Team
**Deployment Platform:** Vercel
