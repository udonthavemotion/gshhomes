# Detailed Color Palette Specifications

## Current Green (Default)

### Primary Colors
```css
--color-primary: #059669        /* Sage Green */
--color-primary-dark: #047857   /* Dark Sage */
--color-primary-light: #10B981  /* Light Sage */
--color-accent: #f59e0b         /* Amber */
--color-cta: #059669            /* Same as primary */
```

### Use Cases
- Primary: Navigation, badges, pills, section accents
- CTA: All call-to-action buttons
- Accent: Secondary buttons, highlights

---

## Option 1: Corporate Trust

### Primary Colors
```css
--color-primary: #0A2A43        /* Deep Navy */
--color-primary-dark: #071D2F   /* Darker Navy */
--color-primary-light: #1A4B6B  /* Lighter Navy */
--color-accent: #4A90E2         /* Bright Blue */
--color-cta: #C62828            /* Muted Red */
--color-cta-dark: #A01E1E       /* Dark Red */
```

### Hex Values
| Color Name | Hex Code | RGB | Use Case |
|------------|----------|-----|----------|
| Deep Navy | #0A2A43 | rgb(10, 42, 67) | Headers, footer, nav background |
| Darker Navy | #071D2F | rgb(7, 29, 47) | Hover states, shadows |
| Lighter Navy | #1A4B6B | rgb(26, 75, 107) | Borders, dividers |
| Bright Blue | #4A90E2 | rgb(74, 144, 226) | Icons, badges, links |
| Muted Red | #C62828 | rgb(198, 40, 40) | Primary CTA buttons |
| Dark Red | #A01E1E | rgb(160, 30, 30) | CTA hover states |

### Neutrals
```css
--trust-gray: #F5F7FA          /* Light background */
--trust-text: #4A4A4A          /* Body text */
--trust-border: #E1E5EA        /* Borders, dividers */
```

### Personality
- **Authoritative:** 9/10
- **Approachable:** 5/10
- **Modern:** 7/10
- **Premium:** 9/10

---

## Option 2: Gulf Coast Modern (Recommended)

### Primary Colors
```css
--color-primary: #1E3A5F        /* Soft Navy */
--color-primary-dark: #142840   /* Dark Navy */
--color-primary-light: #2D5380  /* Light Navy */
--color-accent: #4A90E2         /* Bright Blue */
--color-cta: #D32F2F            /* Energetic Red */
--color-cta-dark: #B02626       /* Dark Red */
```

### Hex Values
| Color Name | Hex Code | RGB | Use Case |
|------------|----------|-----|----------|
| Soft Navy | #1E3A5F | rgb(30, 58, 95) | Headers, nav, structure |
| Dark Navy | #142840 | rgb(20, 40, 64) | Footer, hover states |
| Light Navy | #2D5380 | rgb(45, 83, 128) | Accent elements |
| Bright Blue | #4A90E2 | rgb(74, 144, 226) | Icons, links, badges |
| Energetic Red | #D32F2F | rgb(211, 47, 47) | Primary CTAs |
| Dark Red | #B02626 | rgb(176, 38, 38) | CTA hover states |

### Neutrals
```css
--gulf-gray: #F8F9FA           /* Light background */
--gulf-text: #3C4858           /* Body text (warmer) */
--gulf-border: #DDE2E8         /* Borders, dividers */
```

### Personality
- **Authoritative:** 7/10
- **Approachable:** 9/10
- **Modern:** 9/10
- **Premium:** 7/10

---

## Option 3: American Classic

### Primary Colors
```css
--color-primary: #003B6F        /* Rich Navy */
--color-primary-dark: #002647   /* Deep Navy */
--color-primary-light: #005499  /* Bright Navy */
--color-accent: #0066CC         /* True Blue */
--color-cta: #B71C1C            /* Deep Red */
--color-cta-dark: #8B1414       /* Dark Red */
```

### Hex Values
| Color Name | Hex Code | RGB | Use Case |
|------------|----------|-----|----------|
| Rich Navy | #003B6F | rgb(0, 59, 111) | Primary structure |
| Deep Navy | #002647 | rgb(0, 38, 71) | Dark backgrounds |
| Bright Navy | #005499 | rgb(0, 84, 153) | Highlights |
| True Blue | #0066CC | rgb(0, 102, 204) | Links, icons |
| Deep Red | #B71C1C | rgb(183, 28, 28) | Primary CTAs |
| Dark Red | #8B1414 | rgb(139, 20, 20) | CTA hovers |

### Neutrals
```css
--classic-cream: #FAFAF9        /* Warm white background */
--classic-text: #2C2C2C         /* Dark text */
--classic-border: #E8E8E6       /* Subtle borders */
```

### Personality
- **Authoritative:** 10/10
- **Approachable:** 6/10
- **Modern:** 6/10
- **Premium:** 9/10

---

## Option 4: Coastal Premium

### Primary Colors
```css
--color-primary: #2C5F8D        /* Coastal Blue */
--color-primary-dark: #1E4161   /* Deep Blue */
--color-primary-light: #4080B8  /* Sky Blue */
--color-accent: #546E7A         /* Gray-Blue */
--color-cta: #C1272D            /* Balanced Red */
--color-cta-dark: #9A1F24       /* Dark Red */
```

### Hex Values
| Color Name | Hex Code | RGB | Use Case |
|------------|----------|-----|----------|
| Coastal Blue | #2C5F8D | rgb(44, 95, 141) | Primary structure |
| Deep Blue | #1E4161 | rgb(30, 65, 97) | Dark elements |
| Sky Blue | #4080B8 | rgb(64, 128, 184) | Accents, highlights |
| Gray-Blue | #546E7A | rgb(84, 110, 122) | Secondary elements |
| Balanced Red | #C1272D | rgb(193, 39, 45) | Primary CTAs |
| Dark Red | #9A1F24 | rgb(154, 31, 36) | CTA hovers |

### Neutrals
```css
--coastal-gray: #F6F8FA         /* Cool white background */
--coastal-text: #37474F         /* Slate text */
--coastal-border: #CFD8DC       /* Cool borders */
```

### Personality
- **Authoritative:** 6/10
- **Approachable:** 8/10
- **Modern:** 10/10
- **Premium:** 8/10

---

## Gradient Formulas

Each theme includes custom gradients for smooth transitions:

### Primary Gradients
```css
/* Corporate Trust */
linear-gradient(135deg, #0A2A43 0%, #071D2F 50%, #04121C 100%)

/* Gulf Coast Modern */
linear-gradient(135deg, #1E3A5F 0%, #142840 50%, #0D1A2B 100%)

/* American Classic */
linear-gradient(135deg, #003B6F 0%, #002647 50%, #001729 100%)

/* Coastal Premium */
linear-gradient(135deg, #2C5F8D 0%, #1E4161 50%, #142D43 100%)
```

### Glow Effects (Radial Gradients)
Used for award sections, special highlights:
```css
/* Corporate Trust */
radial-gradient(ellipse at top, rgba(10,42,67,0.15) 0%, transparent 50%)

/* Gulf Coast Modern */
radial-gradient(ellipse at top, rgba(30,58,95,0.15) 0%, transparent 50%)

/* American Classic */
radial-gradient(ellipse at top, rgba(0,59,111,0.15) 0%, transparent 50%)

/* Coastal Premium */
radial-gradient(ellipse at top, rgba(44,95,141,0.15) 0%, transparent 50%)
```

---

## Shadow Specifications

### Button Shadows (CTA)
```css
/* Small (default) */
--shadow-primary-sm: 0 4px 14px rgba([primary-rgb], 0.4)

/* Large (hover) */
--shadow-primary-lg: 0 6px 20px rgba([primary-rgb], 0.5)
```

### Card Shadows
```css
--shadow-card: 0 4px 20px rgba(0,0,0,0.08)
--shadow-card-hover: 0 20px 40px rgba(0,0,0,0.15)
```

### Glow Effect
```css
--shadow-glow: 0 0 40px rgba([primary-rgb], 0.3)
```

---

## Implementation Notes

### CSS Variables Structure
All themes use the same variable names for consistency:
- `--color-primary` - Main structural color
- `--color-cta` - Call-to-action buttons
- `--color-accent` - Icons, badges, highlights

This allows instant theme switching without component changes.

### Browser Support
- Modern browsers: Full support
- IE11: Fallback to green (CSS variables not supported)
- Safari: Full support (9.1+)
- Firefox: Full support (31+)
- Chrome: Full support (49+)

### Performance
- No runtime JavaScript color computation
- Pure CSS variable swapping
- Zero performance impact
- Instant theme switching

