# Quick Inventory Commands

**Copy-paste these commands for common inventory tasks.**

---

## 📝 Natural Language Commands

Just tell the AI what you want in plain English:

### Adding Homes

```
"Add The Bayou from the Sunshine Homes folder to inventory"

"Add all homes from the Champion folder"

"Use the inventory agent to add these new homes: The Delta, The Swamp, The Marsh"
```

### Removing Homes

```
"Remove The Bobby Jo, The Carondelet, and The Bexar from single-wide inventory"

"Archive The Robertson - it's sold"

"Remove all Champion homes from inventory"

"The Ivy Dream is discontinued, remove it"
```

### Updating Homes

```
"Update The Robertson price to $62,900"

"Change The Baby Boujee description to emphasize luxury finishes"

"Add 5 new photos to The Dogwood gallery"

"Mark The Granite Ridge as featured"

"Update all Sunshine Homes prices - increase by 5%"
```

### Bulk Operations

```
"Add all homes from the Southern folder"

"Remove all homes marked as sold"

"Update availability status for all in-stock homes"

"Show me all homes under $60,000"
```

---

## 🎯 What the AI Will Do

### When You Say "Remove X, Y, Z from inventory":

1. ✅ **Find the homes** in `data/homes.ts`
2. ✅ **Remove entries** from the data file
3. ✅ **Fix syntax** (commas, formatting)
4. ✅ **Test build** to ensure no errors
5. ✅ **Refresh dev server** for preview
6. ✅ **Show you the changes** before committing
7. ✅ **Suggest git commit** message

**You just review and approve!**

---

## 🔄 Complete Workflows

### New Home from Start to Finish

**You do:**
1. Create folder: `public/assets/images/single wide homes/[Manufacturer]/[Home Name]/`
2. Upload photos to folder
3. Create `Info.txt` with specs

**AI does:**
```
"Add [Home Name] from the [Manufacturer] folder"
```
→ Reads Info.txt, generates copy, adds to website, tests, shows preview

---

### Sold Home (Complete Removal)

**You say:**
```
"The Robertson is sold - archive it from inventory"
```

**AI does:**
1. Removes from `data/homes.ts`
2. (Optional) Moves folder to archive
3. Tests build
4. Shows updated catalog
5. Generates commit message

**You do:**
- Review changes
- Approve commit
- Push to production

---

### Price Update

**You say:**
```
"Update The Dogwood price to $55,900 and add a LIMITED TIME SPECIAL badge"
```

**AI does:**
1. Updates price field
2. Adds feature: "LIMITED TIME SPECIAL"
3. Tests build
4. Shows preview
5. Ready to commit

---

### Seasonal Inventory Refresh

**You say:**
```
"Remove these discontinued models: [list]
Add these new models from folders: [list]
Update these prices: [list]"
```

**AI does:**
- Processes all changes in one operation
- Tests everything together
- Single commit for the entire update

---

## 💡 Pro Tips

### Be Specific About What You Want

❌ **Vague:**
```
"Update the home"
```

✅ **Clear:**
```
"Update The Robertson price to $59,900 and mark it as featured"
```

---

### Group Related Changes

❌ **Multiple requests:**
```
"Remove The Bobby Jo"
"Remove The Bexar"
"Remove The Carondelet"
```

✅ **Single request:**
```
"Remove The Bobby Jo, The Bexar, and The Carondelet from inventory"
```

---

### Reference the Inventory Agent for Complex Tasks

```
"Use the inventory agent to help me reorganize the Sunshine Homes lineup"

"Use the inventory agent to audit all pricing and suggest updates"

"Use the inventory agent to add all homes from the Champion and Franklin folders"
```

---

## 🎯 Examples by Scenario

### Scenario: Monthly Price Update

**You receive new pricing from manufacturer:**

```
"Update all Franklin Homes prices:
- The Robertson: $65,900 → $62,900
- The Bexar: $64,500 → $61,500
Also mark The Robertson as featured with a SPECIAL PRICING badge"
```

**AI handles everything in one shot.**

---

### Scenario: New Shipment Arrives

**5 new homes in stock:**

```
"Add all homes from the Southern folder - they just arrived and are ready to tour"
```

**AI processes all 5 homes with "In-Stock Ready to Tour" messaging.**

---

### Scenario: Model Discontinued

**Manufacturer discontinues a model:**

```
"The Ivy Dream is discontinued by Sunshine Homes - archive it and update the website"
```

**AI removes from active inventory and preserves photos/data in archive.**

---

### Scenario: Special Promotion

**Weekend sale on select homes:**

```
"Add WEEKEND SPECIAL to features for: The Robertson, The Baby Boujee, The Dogwood
Update their descriptions to mention limited-time pricing"
```

**AI updates all three homes consistently.**

---

## 📋 Quick Reference Table

| Task | Command Example | Time |
|------|----------------|------|
| Add 1 home | "Add The Bayou from Sunshine folder" | 2 min |
| Add multiple | "Add all homes from Champion folder" | 5 min |
| Remove 1 home | "Remove The Robertson from inventory" | 1 min |
| Remove multiple | "Remove Bobby Jo, Bexar, Carondelet" | 2 min |
| Update price | "Update The Dogwood price to $55,900" | 1 min |
| Update description | "Rewrite The Lodge description - emphasize cozy comfort" | 2 min |
| Add photos | "Add 10 new photos to The Granite Ridge gallery" | 3 min |
| Mark featured | "Mark The Baby Boujee as featured" | 1 min |
| Bulk price update | "Increase all Sunshine prices by 5%" | 3 min |
| Archive sold home | "The Robertson sold - archive it" | 2 min |

**Total time savings:** ~90% compared to manual editing

---

## 🤖 AI Capabilities

### The Inventory Agent Can:

✅ Read your folder structures automatically
✅ Extract data from Info.txt files
✅ Find cover photos and gallery images
✅ Generate professional dealer marketing copy
✅ Calculate square footage from dimensions
✅ Map manufacturers to correct values
✅ Build proper data entries with all fields
✅ Test builds and catch errors
✅ Update existing homes intelligently
✅ Remove homes cleanly (syntax-safe)
✅ Suggest git commit messages
✅ Preview changes before committing

### The AI Cannot:

❌ Upload photos to folders (you do this)
❌ Create Info.txt files (you do this)
❌ Make final git commits (you approve first)
❌ Deploy to production without confirmation

---

## 🚦 Workflow Checklist

### Before You Ask the AI:

- [ ] Photos are uploaded to correct folder
- [ ] Info.txt exists with accurate specs
- [ ] Folder names are clear and descriptive

### After AI Completes:

- [ ] Review changes in dev server preview
- [ ] Check specs are accurate
- [ ] Verify images load correctly
- [ ] Approve git commit
- [ ] Push to production

---

## 🎓 Training Tips

### Week 1: Learn the Basics
- Add 1-2 homes using AI
- Remove 1 home using AI
- Update 1 price using AI

### Week 2: Batch Operations
- Add 5+ homes at once
- Update multiple prices
- Remove multiple homes

### Week 3: Advanced
- Full monthly inventory refresh
- Seasonal promotions across multiple homes
- Archive old inventory systematically

**Goal:** After Week 3, you should be able to manage your entire inventory in under 30 minutes per month.

---

## 📞 Support

**Questions? Just ask:**

```
"How do I [task]?"
"What's the best way to [goal]?"
"Use the inventory agent to help me [problem]"
```

The AI has full context on your system, folder structure, and best practices.

---

*Last updated: 12/26/2024*
