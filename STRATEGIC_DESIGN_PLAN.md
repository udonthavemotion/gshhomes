# GULF SOUTH HOMES - STRATEGIC SECTION REFACTOR PLAN
## Brand Storytelling + Video Integration Strategy

**Date:** December 27, 2024
**Focus:** Refactor highlighted sections to enhance brand storytelling while avoiding forced design
**Approach:** Replace gradient/stone backgrounds with intentional video integration

---

## PART 1: BRAND STORYTELLING FRAMEWORK

### Core Brand Narrative Arc

Gulf South Homes tells a story across the customer journey. Each section should serve a specific narrative function:

```
DISCOVERY → EXPLORATION → INSPIRATION → TRUST → ACTION
```

**Phase 1: DISCOVERY**
- User arrives, learns company exists
- Messaging: "Modern, established, local"
- Visual: Hero videos showcase movement/dynamism
- Current: Home hero ✅ Strong

**Phase 2: EXPLORATION**
- User browses home types, filters options
- Messaging: "We have variety, inventory, expertise"
- Visual: Product grids, detailed specs, abundance
- Current: Product pages ✅ Strong

**Phase 3: INSPIRATION**
- User sees themselves in customer stories, sees beautiful homes in action
- Messaging: "Real families, real transformations, real results"
- Visual: Project galleries, testimonials with authentic imagery
- Current: About.tsx PROJECT GALLERY ⚠️ Needs video context

**Phase 4: TRUST**
- User reads about company, team, expertise, financing options
- Messaging: "30+ years, family-owned, local community anchors"
- Visual: Team imagery, trust badges, processes, expertise demonstrations
- Current: About team section ✅ Strong | Financing ⚠️ Could be stronger

**Phase 5: ACTION**
- User knows next steps, ready to engage
- Messaging: "Easy, guided, supported"
- Visual: Clear CTAs, contact info, reassuring tone
- Current: All CTA sections ✅ Present but distributed

---

### Brand Storytelling Principles

1. **Authenticity Over Aesthetics**
   - Every video/image should support the story, not just fill space
   - If a section doesn't genuinely benefit from video, don't force it
   - Test: "Would a customer remove this if they had the choice?"

2. **Progression & Pacing**
   - Videos create visual "moments" that break up dense text
   - Don't place videos in consecutive sections (creates monotony)
   - Alternate: Video section → Text/Grid section → Video section

3. **Context Preservation**
   - Each section must maintain its primary function
   - Video enhances, not distracts from main message
   - Test: Can someone understand the message with audio off?

4. **Emotional Resonance**
   - Show movement, activity, life happening
   - Avoid static/passive footage
   - Connect video content to section message

---

## PART 2: VIDEO USAGE ARCHITECTURE

### Strategic Video Hierarchy

**Tier 1: HERO Videos** (Page entry point, establishes tone)
- Purpose: First impression, movement, professionalism
- Current: All major pages have hero videos ✅
- Characteristics: 2-4 seconds visible before scroll, overlay with text, sets page mood

**Tier 2: CONTEXT Videos** (Support section purpose, show action)
- Purpose: Demonstrate processes, show real activity, build credibility
- Current: Not systematically used
- Characteristics: Section background, 1-2 minutes looped, subtle overlay to preserve text contrast
- Examples: "How it works" steps, project gallery context, financing process

**Tier 3: ANCHOR Videos** (Break up content, re-establish visual interest)
- Purpose: Prevent "content fatigue" on long pages, create pause points
- Current: Footer is the only mid-page anchor video
- Characteristics: Full-width, ~30-50vh height, positioned between major content sections

### Video Placement Rules (Avoid Monotony)

```
Page Structure Template:
├── Hero Video (Tier 1)
├── Content Section (text/grid/cards)
├── Context Video (Tier 2) - OPTIONAL if content supports it
├── Content Section (text/grid/cards)
├── Anchor Video (Tier 3) - OPTIONAL, creates pause point
├── Content Section (text/grid/cards)
├── CTA Section (can use Tier 2 or Tier 3 video OR solid color gradient)
└── Footer (Tier 1 - Video Anchor)

CRITICAL RULE: Last visible section before footer should NOT be video
Reason: Footer already has video. Consecutive videos feel redundant.
Solution: Place anchor videos in middle sections, use solid color/gradient for penultimate section
```

### Available Video Content Classification

**Manufactured Home Lifestyle Videos** (Work contexts, delivery, setup, families in homes)
- `homepage-hero.mp4` - General brand energy, family lifestyle
- `doublewide-hero.mp4` - Spacious home living
- `singewidehomepage.mp4` - Efficient single-wide living
- `modularhomes.mp4` - Modern modular living

**Process/Activity Videos** (Work in action, expertise, service)
- `1204.mp4` - Could be about/construction/assembly
- `manufactures.mp4` - Manufacturing/production floor activity
- `land.mp4` - Land preparation, placement, development

**Financial/Professional Videos**
- `finance.mp4` - Abstract, financial (good for financing/insurance pages)
- `hero headerpartstore.mp4` - Parts/service context

**Award/Credibility Videos**
- `footer.mp4` - Awards, credentials, trust signals

---

## PART 3: SECTION-BY-SECTION REFACTOR PLAN

### 1. HOME PAGE - "Customer Stories" Section
**Current State:** Dark stone-900 background, 3-column testimonial grid, amber star ratings, avatar circles
**Problem:** Heavy dark background after colorful hero carousel section creates visual fatigue

**Strategy:** Context Video with Brand Activity Footage
**Why:** Testimonials are about RESULTS. Show homes being lived in, deliveries happening, real activity.

**Design Approach:**
```
├─ Background: Video with subtle overlay (40% opacity primary color)
├─ Video: Use homepage-hero.mp4 OR create looped "customer moment" compilation
├─ Content: Keep testimonial structure, add white text drop shadows
├─ Layout: 2-column (tablet up), 1-column (mobile) for readability over video
├─ Overlay Strategy: Solid primary color bar (40% opacity) on entire section
│   ensures text contrast regardless of video content underneath
```

**Before/After:**
```
BEFORE: Gray stone-900 background → feels heavy/formal
AFTER:  Video background + overlay → feels active/alive, but professional
```

---

### 2. ABOUT PAGE - "PROJECT GALLERY" Section
**Current State:** Stone-900 gradient background, masonry grid with hover overlays, 3D perspective effect
**Problem:** Background doesn't support the "celebration of work" message; feels like context is missing

**Strategy:** Contextual Project Documentation Video
**Why:** Gallery celebrates what they BUILD. Videos of those projects being built/delivered/lived-in create narrative connection.

**Design Approach:**
```
├─ Background: Subtle video layer (15-20% opacity, very muted)
│   Purpose: Suggest "behind-the-scenes" without competing with gallery images
├─ Video: landandhomepackage.mp4 OR custom compilation of site preparation
├─ Masonry Grid: Keep existing hover effects, increase contrast with lighter text shadows
├─ Overlay Adjustment: Remove dark gradient, use transparent black (20%) instead
├─ Section Context: Add small badge: "See how we build it" above gallery
│   Links gallery to video/process narrative
```

**Before/After:**
```
BEFORE: Solid dark background → generic gallery container feel
AFTER:  Subtle video + masonry gallery → "Here's what happens behind the scenes"
```

---

### 3. ABOUT PAGE - "Ready to Start Your Journey" CTA
**Current State:** Gradient background (primary → emerald-700), centered text, white buttons
**Problem:** CTA section feels isolated; doesn't connect back to earlier brand storytelling

**Strategy:** Intentional Solid Color (DO NOT FORCE VIDEO)
**Why:** This is a critical conversion moment. Video background would distract from CTA clarity. Keep emerald gradient.

**Decision:** KEEP CURRENT DESIGN
**Rationale:**
- CTA sections need maximum focus on button/action
- Color gradient provides subtle visual interest without distraction
- Follows footer pattern: don't put video right before footer (another video)

---

### 4. SINGLE-WIDE PAGE - "Found the Perfect Home?" CTA
**Current State:** Gradient background (primary → emerald-700), centered content, large phone number, buttons
**Problem:** Same as About CTA - doesn't feel connected to earlier page content

**Strategy:** Keep Gradient + Add Pre-CTA Content Video
**Why:** The section itself shouldn't change. Instead, add a contextual section BEFORE it.

**New Section (Insert Before Current CTA):**
```
Section: "Single-Wide Living in Action"
├─ Background: Video (singewidehomepage.mp4 with 30% overlay)
├─ Content: 2-3 short benefit callouts with icons
├─ Purpose: Show why single-wide homes matter, connect to CTA that follows
├─ Height: 40vh, scrollable context
└─ Transition: Smooth gradient fade into CTA section below

Then CTA section remains unchanged but now feels contextually placed
```

---

### 5. MODULAR PAGE - "Visit Us" Section
**Current State:** Dark stone-900 background, 3-column info grid (address, phone, hours), minimal visual interest
**Problem:** Buried at end of page, feels like administrative detail rather than invitation

**Strategy:** Intentional Location Change + Video Context
**Why:** "Visit us" messaging is emotional/invitational. Should feel welcoming, not relegated.

**Design Approach:**
```
Option A: Move Earlier (Recommended)
├─ Relocate section to mid-page (after home grid, before footer area)
├─ Add: Background video showing physical showroom (if available)
├─ OR: Use land.mp4 with showroom ambiance overlay
├─ Add Small Badge: "Visit Our Showroom"
├─ Keep Info Grid, add: "Monday-Friday: 9am-6pm | Sat: 10am-4pm" more prominent
└─ Result: Feels like an invitation point in customer journey, not an afterthought

Option B: Keep Position, Enhance Context
├─ Keep at bottom but add section BEFORE it: "Why Visit In Person"
├─ Show benefits: See multiple homes, test layouts, talk to experts
├─ That section uses modularhomes.mp4 in background
└─ Then "Visit Us" section becomes natural next step
```

**Recommendation:** Option A (move earlier) feels more authentic

---

### 6. FINANCING PAGE - "Ready to Start Your Journey?" Section
**Current State:** Video hero (finance.mp4), gradient overlay, inline content box, expandable cards below
**Problem:** Strong hero, but middle section with expandable cards on plain background feels disconnected

**Strategy:** Add Mid-Page Context Video
**Why:** Financing is process-oriented. Show the process in action.

**Design Approach:**
```
Current Strong Points:
├─ Hero video ✅
├─ Expandable card interface ✅
├─ Logo carousel (lenders) ✅

Missing Element:
├─ Process visualization between cards and lenders
├─ Add: "Why Choose Our Financing" section with finance.mp4 background
├─ OR: Add section: "The Process" with step-by-step cards over video background
├─ Purpose: Connect abstract concept (financing) to concrete process/results
```

---

### 7. LANDAHOME PAGE - Overall Structure
**Current State:** Video hero (land.mp4), benefits grid, timeline, content sections, white background for most content
**Problem:** White background sections feel disconnected from video hero's energy

**Strategy:** Add Strategic Mid-Page Video
**Why:** Land packages are complex. Need visual moments to explain process.

**Design Approach:**
```
Current Flow:
├─ Hero (video) ✅
├─ "What is a Land Package" (white bg) ⚠️
├─ Benefits Grid (white bg) ⚠️
├─ Process Timeline (white bg) ⚠️
├─ "Already Have Land" (white bg) ⚠️
└─ CTA (gradient bg)

Improved Flow:
├─ Hero (video) ✅
├─ "What is a Land Package" (white bg) ✅
├─ Benefits Grid (white bg) ✅
├─ ANCHOR VIDEO: "See a Land Package in Action" (land.mp4 with context overlay)
├─ Process Timeline (white bg) ✅
├─ "Already Have Land" (white bg) ✅
└─ CTA (gradient bg) ✅

Result: Video breaks up white bg sections, adds visual interest without forced design
```

---

### 8. INSURANCE PAGE - Structure
**Current State:** Video hero (finance.mp4), benefit grid, coverage boxes, Louisiana-specific section, all on standard backgrounds
**Problem:** finance.mp4 (generic financial content) doesn't support insurance narrative

**Strategy:** Stronger Contextualization (Don't Force New Video)
**Why:** Insurance is reassurance/protection. Current video doesn't communicate this.

**Design Approach:**
```
Option A: Reframe Existing Video
├─ Change overlay: Use indigo-600/70% (matches page brand color) instead of standard primary
├─ Add text overlay: "Protect Your Investment"
├─ This makes finance.mp4 feel more insurance-relevant

Option B: Replace with Better Context (If Available)
├─ If you have home interior/family footage, use that instead
├─ Message: "Your home is your family's sanctuary"
├─ Insurance becomes protection of that, not just financial product

Recommendation: Option A for immediate improvement, note for future video content
```

---

### 9. HOW IT WORKS PAGE - Step-by-Step Section
**Current State:** Alternating layout, white background, step cards with icons, timeline
**Problem:** Process explanation is abstract; feels like documentation rather than guided journey

**Strategy:** Subtle Video Context (Don't Overshadow)
**Why:** How-it-works needs clarity above all else. Video should support, not distract.

**Design Approach:**
```
├─ Keep white background for maximum text clarity
├─ Add subtle, looped video as section background (15% opacity max)
├─ Video: land.mp4 showing actual delivery/setup process
├─ Overlay: White/transparent, keeps all text readable
├─ Purpose: Subtle visual reinforcement of "this actually happens"
├─ Result: Stays process-focused, gets visual support
```

---

### 10. PARTS PAGE - Current Strong Points
**Current State:** Video hero, category grid, professional installation section (with CTA), trust banner, all well-designed
**Problem:** Professional installation section has primary gradient but feels adjacent to main narrative

**Strategy:** Strengthen "Professional Installation" Context
**Why:** This is value-add service that differentiates Gulf South Homes.

**Design Approach:**
```
Current "Professional Installation" Section:
├─ Gradient background (primary)
├─ Centered text + CTA

Enhanced Design:
├─ Add: Video background showing installation in action (30% overlay)
├─ Video: Use manufacturing/setup footage (manufactures.mp4 or 1204.mp4)
├─ Keep: Gradient overlay on top of video for color consistency
├─ Result: Shows service happening, then CTA to contact about it
├─ Outcome: Feels like genuine service offering, not just text
```

---

## PART 4: STRATEGIC VIDEO PLACEMENT MAP

### Video Saturation by Page (How Many Video Sections?)

```
CURRENT STATE:
Home          → 1 hero video only ⚠️
About         → 1 hero video only ⚠️
Single-Wide   → 1 hero video only ⚠️
Modular       → 1 hero video only ⚠️
Financing     → 1 hero video ✅
LandHome      → 1 hero video ✅
Insurance     → 1 hero video (generic) ⚠️
HowItWorks    → 1 hero video ✅
Parts         → 1 hero video ✅
Catalog       → 1 hero video ✅

Average: 1 video per page
Problem: Pages over 3000px feel visually repetitive after hero

RECOMMENDED STATE:
Home          → 1 hero + 1 context (customer stories) = 2 videos
About         → 1 hero + 1 context (gallery) = 2 videos
Single-Wide   → 1 hero + 1 pre-CTA context = 2 videos
Modular       → 1 hero + 1 relocated context = 2 videos
Financing     → 1 hero + 1 mid-page context = 2 videos
LandHome      → 1 hero + 1 anchor (mid-page) = 2 videos
Insurance     → 1 hero (reframed) = 1 video ✅
HowItWorks    → 1 hero + 1 subtle context = 2 videos
Parts         → 1 hero + 1 service context = 2 videos
Catalog       → 1 hero ✅ (filter-heavy page, keep focused)

New Average: 1.8 videos per page
Benefit: Breaks up monotony, supports storytelling, maintains performance

RULE: No page exceeds 3 videos (diminishing returns on engagement)
RULE: No 2 videos within 500px of each other (visual fatigue)
RULE: Last visible section before footer is NOT video (avoid redundancy with footer video)
```

---

## PART 5: IMPLEMENTATION PRIORITY & ROADMAP

### Phase 1: High-Impact, Low-Risk (Week 1)
These improve storytelling significantly without major structural changes:

**1. Home Page - Customer Stories Section**
- Change: Replace stone-900 background with video overlay + white text
- File: `pages/Home.tsx` - Testimonials section
- Risk: Low (component structure stays same)
- Impact: High (visible section, improved visual interest)

**2. Financing Page - Recontextualize finance.mp4**
- Change: Overlay color from primary to indigo-based (insurance context)
- File: `pages/Financing.tsx` - Hero section
- Risk: Very Low (CSS overlay change only)
- Impact: Medium (reinforces page brand color)

**3. Parts Page - Add Video to Professional Installation**
- Change: Background from solid gradient to gradient + video with overlay
- File: `pages/Parts.tsx` - Professional Installation section
- Risk: Low (additive change, keep text readable)
- Impact: Medium (supports value narrative)

**Effort:** 3-4 hours | Deployment: Single commit

---

### Phase 2: Medium-Impact, Medium-Complexity (Week 2)
These add narrative value but require section reorganization:

**1. About Page - Project Gallery Subtle Video**
- Change: Add background video layer, adjust overlay opacity
- File: `pages/About.tsx` - Gallery section
- Complexity: Medium (need to test video doesn't distract from images)
- Risk: Medium (must preserve masonry UX and hover effects)
- Impact: High (celebrates project work with context)

**2. LandHome Page - Add Mid-Page Anchor Video**
- Change: Insert new section between benefits & timeline
- File: `pages/LandHome.tsx` - New section before timeline
- Complexity: Medium (new component, content writing needed)
- Risk: Medium (page length increases, test scroll performance)
- Impact: High (processes become visual, not just text)

**3. Single-Wide Page - Add Pre-CTA Context Section**
- Change: Insert "Single-Wide Living in Action" before existing CTA
- File: `pages/SingleWide.tsx` - New section before CTA
- Complexity: Low (reusable component pattern)
- Risk: Low (doesn't affect existing CTA)
- Impact: Medium (contextualizes CTA, improves conversion intent)

**Effort:** 6-8 hours | Deployment: 2-3 commits

---

### Phase 3: Strategic Reorganization (Week 3)
These improve UX significantly but involve moving content:

**1. Modular Page - Relocate "Visit Us" Section**
- Change: Move from bottom to mid-page, add video context
- File: `pages/Modular.tsx` - Restructure sections
- Complexity: High (affects page flow, test on all devices)
- Risk: Medium (page navigation changes, verify all links/transitions)
- Impact: High (creates natural invitation point in customer journey)

**2. HowItWorks Page - Add Subtle Video Context**
- Change: Add background video (low opacity) behind step cards
- File: `pages/HowItWorks.tsx` - Container styling
- Complexity: Low (CSS layer, keep high opacity background for readability)
- Risk: Low (purely additive)
- Impact: Medium (process becomes tactile, not abstract)

**Effort:** 4-6 hours | Deployment: 1-2 commits

---

### Phase 4: Performance & Polish (Week 4)
Optimize videos, test on mobile, ensure consistent experience:

**1. Mobile Video Optimization**
- Verify all videos have responsive versions in `public/assets/video/responsive/`
- Test video autoplay on iOS Safari (challenging, may need fallback)
- Monitor Core Web Vitals after video additions

**2. Performance Audit**
- Check bundle size impact (videos should be external, not bundled)
- Verify lazy-loading on below-fold sections
- Test page load times on 3G connection

**3. Browser/Device Testing**
- iOS Safari: video autoplay restrictions (preload="metadata" should work)
- Android Chrome: test on 3 different devices (varying performance)
- Desktop Firefox: verify video playback and overlay opacity

**Effort:** 3-4 hours | Deployment: Verification only, no new code

---

## PART 6: VIDEO CONTENT RECOMMENDATIONS

### Gaps Identified

**1. Manufacturing/Process Videos**
- Current: manufactures.mp4 exists
- Gap: No clear footage of homes being built, assembled, delivered
- Recommendation: Plan short video shoot at facility showing:
  - Assembly line (floor, walls, roof)
  - Quality inspection
  - Delivery truck loading
  - Use case: All service/process pages, establishes credibility

**2. Family/Lifestyle Videos**
- Current: homepage-hero.mp4 shows families
- Gap: No specific single-wide lifestyle content
- Recommendation: Short video showing:
  - Single-wide interior (spacious, modern)
  - Family activities in single-wide
  - Use case: Single-wide specific pages, makes product relatable

**3. Customer Testimonial Videos**
- Current: Text testimonials only
- Gap: No video testimonials
- Recommendation: Film 3-5 customers on home tour:
  - "Here's our new home"
  - "Here's why we chose Gulf South Homes"
  - Duration: 15-30 seconds each
  - Use case: About page gallery, testimonial section
  - Impact: Massive credibility boost, authentic voices

**4. Land Package Process Video**
- Current: landandhomepackage.mp4 exists (name suggests relevance)
- Gap: Unclear if content matches land package page narrative
- Action: Review content, potentially reuse or plan new shoot

---

## PART 7: BRAND AUTHENTICITY CHECKLIST

Before implementing any video background section, ask:

```
□ Does this video directly support the section's message?
  (Not just "looks nice" or "fills space")

□ Can the section's content be easily read with video background?
  (Sufficient contrast, text shadows, overlay opacity)

□ Would removing the video significantly weaken the section?
  (If no → don't add it, section is fine as-is)

□ Does this video appear on multiple pages or just this one?
  (Repetition is okay if contextually appropriate, not redundant)

□ Is there another white/light background section within 500px?
  (Ensures visual rhythm, not monotonous solid backgrounds)

□ Does this place video 2+ sections before footer?
  (Avoids consecutive video fatigue before footer video)

□ Is this section a primary conversion point (CTA/form)?
  (If yes → consider if video distracts from action, keep gradient instead)

□ Does the customer journey progress naturally to this section?
  (Video should reinforce where they are in the story, not feel random)
```

---

## PART 8: DESIGN SYSTEM UPDATES NEEDED

### New CSS Classes to Standardize Video Overlays

```css
/* Video Background Overlay Patterns */
.video-bg-light-overlay {
  @apply bg-black/30; /* For light-colored video content */
}

.video-bg-dark-overlay {
  @apply bg-black/40; /* For mixed video content */
}

.video-bg-brand-overlay {
  @apply bg-primary/40; /* For brand-colored overlay */
}

.video-bg-inverted {
  @apply bg-white/20; /* For very dark video content */
}

/* Video text contrast helper */
.video-bg-text {
  @apply drop-shadow-md; /* Minimum text contrast on video bg */
}

.video-bg-text-large {
  @apply drop-shadow-lg; /* Enhanced contrast for headings */
}
```

### Updates to Component Library

1. **VideoBackground Component**
   - Accept video source, overlay opacity, overlay color
   - Manage preload, autoplay, loop, muted attributes
   - Responsive video switching (desktop/mobile variants)
   - Fallback background color if video fails to load

2. **SectionContainer Component Enhancement**
   - Add `videoSrc` prop
   - Add `overlayType` prop (light/dark/brand/inverted)
   - Apply text contrast helpers automatically

---

## PART 9: TESTING REQUIREMENTS

### Mobile Testing Checklist
- [ ] iOS Safari: Videos autoplay with sound muted (iOS restricts autoplay)
- [ ] iOS Safari: Video preload="metadata" reduces initial load
- [ ] Android Chrome: Test on 3G network, verify smooth playback
- [ ] Text readability: Check contrast on all video backgrounds
- [ ] Touch targets: Verify all buttons/CTAs meet 44px minimum

### Desktop Testing Checklist
- [ ] Video loop timing (ensure seamless loops, no "jump" at end)
- [ ] Video opacity consistency across sections
- [ ] Overlay color doesn't bleed into text
- [ ] Hover states visible over video backgrounds
- [ ] Form inputs readable on video sections

### Performance Testing Checklist
- [ ] Core Web Vitals: LCP, INP, CLS remain under thresholds
- [ ] Video lazy-loading: Verify below-fold videos don't auto-load
- [ ] Bundle size: No increase in main.js (videos are external)
- [ ] Page load time: Test on simulated 3G

---

## SUMMARY: IMPLEMENTATION APPROACH

### What Makes This Plan Authentic (Not Forced)

1. **Narrative-First:** Videos added because they support storytelling, not because sections need decoration
2. **Audience-Centric:** Changes answer customer questions at each stage of journey
3. **Performance-Conscious:** No page exceeds optimal video saturation
4. **Contrast-Aware:** Video placement avoids monotonous dark backgrounds
5. **Accessibility-First:** Text remains readable on all video backgrounds
6. **Conservative:** CTA sections remain clear, conversion-focused

### What to Avoid

- ❌ Videos that distract from core content
- ❌ Consecutive video sections (visual fatigue)
- ❌ Videos on pages under 1500px height (feels unnecessary)
- ❌ Video + gradient background (layering complexity)
- ❌ Generic background videos (must support specific message)
- ❌ Videos on mobile with autoplay (performance, battery impact)

### Success Metrics

After implementation, measure:
1. **Engagement:** Scroll depth (do people scroll further past video sections?)
2. **Clarity:** Form submission rate (do CTAs remain clear?)
3. **Performance:** Core Web Vitals stability (no regression)
4. **Feedback:** Customer comments on design refresh (qualitative)

---

## NEXT STEPS

1. **Review & Approval:** Stakeholder review of this plan (30 min)
2. **Video Content Audit:** Verify all videos match their intended narrative contexts (1 hour)
3. **Phase 1 Implementation:** Home, Financing, Parts pages (3-4 hours)
4. **Mobile Testing:** Full device testing on Phase 1 (2 hours)
5. **Phase 1 Deployment:** Commit and deploy (30 min)
6. **Iterate:** Gather feedback, adjust overlays/placement if needed (ongoing)

