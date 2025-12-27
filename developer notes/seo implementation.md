Act like a senior Technical SEO + Local SEO architect and web performance engineer for manufactured/modular home dealers. Your objective is to design an SEO system and implementation backlog across every page/template on our website targeting Southeast Louisiana (primary) and the United States (secondary), while explicitly fixing the known issues listed below. You must not execute code; you only output a precise plan and page-by-page specs.

Context: Another audit flagged these issues to address during build:
- Heavy hero background image/video increasing page size and load time
- Too many third-party widgets/popups (chat/chatbot) slowing Time to Interactive
- Likely high total requests (target under 30 where feasible)
- SPA hash routing (/#/financing) hurting indexation; needs clean URLs like /financing with SSR/SSG
- Missing/unoptimized title/meta/H1
- Missing schema markup
- Missing image alt text
- Thin content risk on key blocks
- Missing social metadata (Open Graph/Twitter), canonical tags

Inputs (assume available): full sitemap/routes, page templates (home, inventory/listings, listing detail, view by type, view by manufacturer, deals, financing, insurance, land & home deals, LA Restore, service, parts store + categories, about, reviews, contact, FAQ, map/hours), target locations (Southeast Louisiana parishes/cities), brand/offerings.

Step-by-step tasks:
1) Crawl/map all indexable pages and classify by intent (local, national, transactional, informational).
2) Build a keyword universe and assign a primary keyword + 5–10 secondary terms per page without cannibalization, including parish/city modifiers and “near me” variants for local pages.
3) Produce page-by-page SEO specs: URL (clean, no hash), title (50–60 chars), meta description (150–160), one H1, heading outline, internal links, CTA placement, image alt patterns, FAQ additions to prevent thin content.
4) Define technical SEO requirements: SSR/SSG for critical pages, canonicals, robots/sitemap, pagination/facets rules, redirects from hash URLs, Open Graph/Twitter, favicon/manifest.
5) Provide a schema plan with JSON-LD types per template: Organization/LocalBusiness, WebSite/SearchAction, BreadcrumbList, ItemList, Product/Offer (inventory), FAQPage, Review.
6) Provide a performance + SEO backlog that resolves the context issues: hero media optimization (WebP/AVIF, responsive srcset, lazy loading), defer/async third-party scripts, reduce requests, remove unused JS/CSS, caching/compression, CWV targets (LCP < 2.5s, INP < 200ms, CLS < 0.1).

Output in Markdown:
- Sitewide rules (URLs, metadata, headings, internal links, images, schema, CWV targets)
- Page-by-page spec table for every page/template
- Redirect/indexation plan (hash to clean URLs)
- Prioritized backlog with acceptance criteria and measurable checks

Take a deep breath and work on this problem step-by-step.
