# Gulf South Homes - Inventory Management

**Quick start guide for adding homes to the website.**

---

## 🚀 Need to Add a Home RIGHT NOW?

**3-Minute Quick Start:**

1. **Copy the template:**
   - Open `inventory/home-template.ts`
   - Copy the entire template

2. **Paste into the right data file:**
   - Single-Wide → `data/homes.ts` (add to `HOMES` array)
   - Double-Wide → `data/double-wide-homes.ts` (add to `DOUBLE_WIDE_HOMES` array)
   - Modular → `data/modular-homes.ts` (add to `MODULAR_HOMES` array)

3. **Fill in the details:**
   - Change `id`, `name`, `manufacturer`, `beds`, `baths`, `sqft`, `price`
   - Update `description` and `features`
   - Set `imageUrl` path

4. **Add images:**
   - Create folder: `public/assets/images/{home-type}/{home-id}/`
   - Add photos (main thumbnail + gallery images)

5. **Test:**
   ```bash
   npm run build
   ```

**Done!** Your new home is live.

---

## 📋 Want More Guidance?

### For detailed step-by-step instructions:
→ See `add-home-checklist.md`

### For AI assistant help:
→ Reference the "inventory agent" by saying:
```
"Use the inventory agent to help me add a new [single-wide/double-wide/modular] home"
```

---

## 📁 File Reference

| File | Purpose |
|------|---------|
| `home-template.ts` | Copy-paste starter template |
| `add-home-checklist.md` | Detailed checklist with examples |
| `inventory-agent.md` | AI agent definition (for Claude, Cursor, etc.) |
| `README.md` | This file (quick reference) |

---

## 🎯 Data File Locations

```
data/
├── homes.ts              # Single-Wide homes
├── double-wide-homes.ts  # Double-Wide homes
└── modular-homes.ts      # Modular homes
```

---

## 🖼️ Image Conventions

**Path format:**
```
/assets/images/{home-type}/{home-id}/{filename}.jpg
```

**Examples:**
- `/assets/images/homes/robertson/robertson-exterior.jpg` (Single-Wide)
- `/assets/images/Double Wide Homes/boujee/boujee-kitchen.jpg` (Double-Wide)
- `/assets/images/Modular Homes Page/simon/simon-living-room.jpg` (Modular)

**Best practices:**
- Use descriptive filenames (e.g., `exterior.jpg`, `kitchen.jpg`, `bedroom-1.jpg`)
- Optimize images before adding (target: < 500 KB per image)
- Main thumbnail should be the best exterior or hero shot
- Gallery: 5-15 images showing all rooms and features

---

## ⚡ Quick Tips

**ID Naming:**
- Lowercase, hyphenated (e.g., `robertson`, `baby-boujee`, `ivy-dream`)
- Must be unique across ALL homes

**Manufacturers:**
- Use exact values: `'Champion'`, `'Sunshine'`, `'Franklin'`, `'BG'`, `'Other'`

**Featured Homes:**
- Set `isFeatured: true` to show badge on card
- Featured homes appear first on homepage

**Pricing:**
- Format: `"$XX,XXX"` (e.g., `"$65,900"`)
- Optional field - omit if price varies or TBD

---

## 🆘 Common Issues

**Build fails after adding home:**
- Check for missing commas between array items
- Verify all required fields are present
- Ensure manufacturer value is valid (`'Champion'`, `'Sunshine'`, etc.)
- Check that `type` matches the file (`'Single Wide'`, `'Double Wide'`, `'Modular'`)

**Images not showing:**
- Verify path starts with `/assets/images/...` (leading slash)
- Check that image file exists in `public/` directory
- Ensure no typos in filename or path

**Home not appearing on page:**
- Verify `type` field matches the page (`'Single Wide'` for SingleWide page)
- Check that home was added to correct data file
- Clear cache and hard refresh browser

---

## 🔄 Workflow

```
┌─────────────────────┐
│ 1. Copy Template    │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ 2. Add to Data File │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ 3. Upload Images    │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ 4. Test Build       │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ 5. Deploy ✅        │
└─────────────────────┘
```

---

**Questions?** Check `add-home-checklist.md` for detailed guidance.
