# Gulf South Homes - Project Constitution

This document defines the foundational principles, standards, and anti-patterns for the Gulf South Homes website. All AI agents and contributors should adhere to these guidelines.

---

## Core Principles

### 1. Performance First

- Ship minimal JavaScript; avoid unnecessary dependencies
- Lazy-load images and routes where possible
- Prefetch/prerender critical routes
- Compress assets; use WebP for images where supported
- Maintain Lighthouse-minded development (target 90+ scores)
- Address CLS (Cumulative Layout Shift) immediately
- Test on both mobile and desktop before completion

### 2. Code Quality Standards

- **TypeScript strict mode** - no `any` types without justification
- **React 19** best practices - functional components, hooks
- **Tailwind CSS** for styling - use existing design tokens
- **Component composition** over inheritance
- Follow existing naming conventions in the codebase
- Keep components focused and single-purpose

### 3. User Experience

- Buyer-focused navigation following natural decision path:
  `Browse Homes → Understand Affordability → Learn the Process`
- Mobile-first responsive design
- Fast page loads (target < 3 seconds on 3G)
- Accessible UI components (WCAG 2.1 AA)
- Clear call-to-actions on every page

### 4. Development Workflow

- Document **WHY + HOW** at the bottom of each response/commit
- Use spec-kit for complex features (`specs/` directory)
- Use shadcn agents for UI component work
- Clean console, no build errors before completion
- Test links and functionality before declaring done

---

## Tech Stack Standards

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | React | 19.x |
| Language | TypeScript | 5.8.x |
| Build Tool | Vite | 6.x |
| Styling | Tailwind CSS | 3.4.x |
| Routing | React Router | 7.x |
| UI Components | shadcn/ui | Latest |
| Icons | Lucide React | 0.555.x |
| Deployment | Vercel | Zero-config |
| CRM/Forms | GoHighLevel | - |

---

## Design System

### Colors (Tailwind)

- **Primary:** `emerald-600` / `primary` (brand green)
- **Backgrounds:** `stone-50`, `stone-900` (light/dark sections)
- **Text:** `stone-800` (body), `stone-600` (secondary)
- **Accents:** `blue-600`, `amber-600`, `violet-600` (feature categories)

### Typography

- **Headlines:** Outfit (font-display)
- **Body:** Plus Jakarta Sans (font-sans)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

- Use Tailwind spacing scale consistently
- Section padding: `py-20 sm:py-28`
- Container: `container` utility class
- Card padding: `p-6 lg:p-8`

### Components

- Prefer shadcn/ui components for new UI
- Follow existing component patterns in `components/`
- Use Lucide React icons exclusively
- Maintain consistent hover/focus states

---

## GoHighLevel Integration

### Form Embeds

- Load `form_embed.js` script **once globally** in `index.html`
- Use iframe embed method for all lead capture forms
- Set proper container heights matching `data-height` attribute
- Form IDs are managed in GoHighLevel dashboard

### Webhook Field Mappings

- Use full path syntax: `{{inboundWebhookRequest.fieldName}}`
- NOT shorthand `{{fieldName}}` (causes "object, object" display issues)

### Chat Widget

- Widget loaded globally in `index.html`
- Widget ID: `6940899ff258cf30de629683`

---

## Vercel Deployment

### Critical: Rewrite Pattern

Use Vercel's native catch-all pattern. **DO NOT** use complex regex.

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

### Static Assets

Vercel automatically serves static files (images, videos, CSS, JS) before applying rewrites. No explicit exclusions needed.

---

## Anti-Patterns (AVOID)

### Over-Engineering

- ❌ Premature optimization
- ❌ Unnecessary abstractions for one-time operations
- ❌ Designing for hypothetical future requirements
- ❌ Framework lock-in patterns

### UI/UX

- ❌ New colors outside the design system
- ❌ Generic "AI slop" aesthetics (Inter font, purple gradients)
- ❌ Adding features beyond what was asked
- ❌ Breaking existing component patterns

### Code

- ❌ `any` types without justification
- ❌ Inline styles when Tailwind classes exist
- ❌ Duplicate code instead of composition
- ❌ Missing error handling at system boundaries

### Process

- ❌ Claiming completion without testing
- ❌ Leaving console errors unaddressed
- ❌ Making changes without understanding existing code
- ❌ Ignoring mobile testing

---

## Quality Gates

Before any feature is considered complete:

1. ✅ Build passes (`npm run build`)
2. ✅ Links work (internal and external)
3. ✅ Console is clean (no errors or warnings)
4. ✅ CLS/JS errors addressed
5. ✅ Mobile + Desktop checked
6. ✅ Forms submit to GoHighLevel successfully
7. ✅ Documentation updated (if applicable)

---

## File Structure

```
gsouthomes-main/
├── components/          # Reusable React components
├── data/               # Static data (homes, manufacturers)
├── hooks/              # Custom React hooks
├── pages/              # Route page components
├── public/             # Static assets (images, videos)
├── memory/             # Spec-kit: project constitution
├── specs/              # Spec-kit: feature specifications
├── templates/          # Spec-kit: document templates
├── shadcn agents/      # Agent definitions for UI work
├── App.tsx             # Root component with routing
├── constants.ts        # Company info, testimonials
├── types.ts            # TypeScript type definitions
└── CLAUDE.md           # AI agent context file
```

---

*Last updated: December 2024*


