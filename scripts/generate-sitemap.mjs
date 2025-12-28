/**
 * Dynamic Sitemap Generator for Gulf South Homes
 *
 * This script generates a comprehensive sitemap.xml that includes:
 * - All main category pages (single-wide, double-wide, modular, etc.)
 * - All individual home detail pages (40+ homes)
 * - All manufacturer pages
 *
 * Run during build: npm run generate-sitemap
 * Direct run: node scripts/generate-sitemap.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE_URL = 'https://gulfsouthhomesinc.com'
const currentDate = new Date().toISOString().split('T')[0]

// Static pages configuration
const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'homes-for-sale', priority: '0.9', changefreq: 'daily' },
  { path: 'single-wide-mobile-homes', priority: '0.9', changefreq: 'daily' },
  { path: 'double-wide-mobile-homes', priority: '0.9', changefreq: 'daily' },
  { path: 'modular-homes-for-sale', priority: '0.9', changefreq: 'daily' },
  { path: 'manufactured-home-manufacturers', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact-gulf-south-homes', priority: '0.8', changefreq: 'monthly' },
  { path: 'about-gulf-south-homes', priority: '0.8', changefreq: 'monthly' },
  { path: 'mobile-home-financing', priority: '0.8', changefreq: 'monthly' },
  { path: 'land-and-home-packages', priority: '0.8', changefreq: 'monthly' },
  { path: 'la-restore-grants', priority: '0.8', changefreq: 'monthly' },
  { path: 'mobile-home-insurance', priority: '0.7', changefreq: 'monthly' },
  { path: 'warranty-service-department', priority: '0.7', changefreq: 'monthly' },
  { path: 'buying-process', priority: '0.8', changefreq: 'monthly' },
  { path: 'what-we-offer', priority: '0.7', changefreq: 'monthly' },
  { path: 'mobile-home-deals', priority: '0.7', changefreq: 'weekly' },
  { path: 'mobile-home-parts-store', priority: '0.7', changefreq: 'monthly' },
  { path: 'privacy-policy', priority: '0.5', changefreq: 'yearly' },
]

/**
 * Extract homes from TypeScript data file
 */
function extractHomes() {
  const dataPath = path.resolve(__dirname, '../data/homes.ts')
  const dataContent = fs.readFileSync(dataPath, 'utf-8')
  const homes = []

  // Find all home objects: { id: 'xxx', name: 'yyy', manufacturer: 'zzz', type: 'aaa'
  const homePattern = /{\s*id:\s*['"]([^'"]+)['"]\s*,[\s\S]*?name:\s*['"]([^'"]+)['"]\s*,[\s\S]*?manufacturer:\s*['"]([^'"]+)['"]\s*,[\s\S]*?type:\s*['"]([^'"]+)['"]/g

  let match
  while ((match = homePattern.exec(dataContent)) !== null) {
    homes.push({
      id: match[1],
      name: match[2],
      manufacturer: match[3],
      type: match[4],
    })
  }

  return homes
}

/**
 * Sanitize home names for URLs
 */
function sanitizeUrlPath(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Generate URL entries for individual homes
 */
function generateHomeUrls(homes) {
  const homeUrls = []

  homes.forEach(home => {
    // Single-wide homes
    if (home.type === 'Single Wide') {
      homeUrls.push({
        path: `single-wide-mobile-homes/${home.id}`,
        priority: '0.6',
        lastmod: currentDate,
        changefreq: 'monthly',
      })
    }

    // Double-wide homes
    if (home.type === 'Double Wide') {
      homeUrls.push({
        path: `double-wide-mobile-homes/${home.id}`,
        priority: '0.6',
        lastmod: currentDate,
        changefreq: 'monthly',
      })
    }

    // Modular homes
    if (home.type === 'Modular') {
      homeUrls.push({
        path: `modular-homes-for-sale/${home.id}`,
        priority: '0.6',
        lastmod: currentDate,
        changefreq: 'monthly',
      })
    }
  })

  return homeUrls
}

/**
 * Generate manufacturer pages
 */
function generateManufacturerUrls(homes) {
  const manufacturers = new Set(homes.map(h => h.manufacturer))
  const mfgUrls = []

  manufacturers.forEach(mfg => {
    mfgUrls.push({
      path: `manufactured-home-manufacturers/${sanitizeUrlPath(mfg)}`,
      priority: '0.5',
      lastmod: currentDate,
      changefreq: 'monthly',
    })
  })

  return mfgUrls
}

/**
 * Format a URL entry for the sitemap XML
 */
function formatUrlEntry(path, lastmod, priority, changefreq = 'monthly') {
  const loc = path.startsWith('http') ? path : `${BASE_URL}/${path}`

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

/**
 * Main sitemap generation function
 */
function generateSitemap() {
  try {
    // Extract homes from data file
    const homes = extractHomes()
    console.log(`📦 Found ${homes.length} homes in inventory`)

    // Generate all URL entries
    const homeUrls = generateHomeUrls(homes)
    console.log(`🏠 Generated ${homeUrls.length} home detail pages`)

    const mfgUrls = generateManufacturerUrls(homes)
    console.log(`🏭 Generated ${mfgUrls.length} manufacturer pages`)

    // Combine all URLs (static pages + dynamic pages)
    const allUrls = [
      ...staticPages,
      ...homeUrls,
      ...mfgUrls,
    ]

    // Generate XML entries
    const xmlEntries = allUrls.map(url =>
      formatUrlEntry(
        url.path,
        url.lastmod || currentDate,
        url.priority,
        url.changefreq || 'monthly'
      )
    ).join('\n')

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${xmlEntries}

</urlset>
`

    // Write sitemap to public directory
    const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml')
    fs.writeFileSync(sitemapPath, sitemap)

    console.log(`\n✅ Sitemap generated successfully!`)
    console.log(`📊 Total URLs: ${allUrls.length}`)
    console.log(`📁 Location: public/sitemap.xml`)
    console.log(`\n📋 Breakdown:`)
    console.log(`   - Static pages: ${staticPages.length}`)
    console.log(`   - Home detail pages: ${homeUrls.length}`)
    console.log(`   - Manufacturer pages: ${mfgUrls.length}`)

  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

// Run the generator
generateSitemap()
