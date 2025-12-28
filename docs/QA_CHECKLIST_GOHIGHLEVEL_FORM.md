# GoHighLevel Form Embed - QA Checklist

## Overview
This checklist ensures the GoHighLevel inline form embed is working correctly on the three featured home detail pages.

## Featured Homes with Form Embed
1. **The Robertson** - `/catalog/robertson`
2. **The Ivy Dream** - `/catalog/ivy-dream`
3. **The Pearl** - `/catalog/pearl`

---

## Desktop Testing (1920x1080 and 1366x768)

### Form Display
- [ ] Form iframe loads without errors
- [ ] Form is visible in the sidebar (right column)
- [ ] Form container has proper height (min-height: 1268px)
- [ ] No horizontal scrollbar appears
- [ ] Form inputs are fully visible and accessible
- [ ] Sticky positioning works (form stays visible when scrolling)
- [ ] Border radius (8px) displays correctly on iframe

### Functionality
- [ ] All form fields are interactive
- [ ] Form can be filled out completely
- [ ] Form submission works (test with real data)
- [ ] Success/error messages display properly
- [ ] Phone number link below form is clickable

### Visual Design
- [ ] Form matches existing design system
- [ ] No color/shadow/animation additions (per requirements)
- [ ] Spacing and padding are consistent
- [ ] Text is readable and properly sized

---

## Mobile Testing (iOS Safari & Chrome)

### iPhone (375x667 and 414x896)
- [ ] Form loads on The Robertson page
- [ ] Form loads on The Ivy Dream page
- [ ] Form loads on The Pearl page
- [ ] Form is not sticky on mobile (flows naturally)
- [ ] All form fields are accessible
- [ ] Keyboard doesn't obscure input fields
- [ ] Form submission works on iOS Safari
- [ ] Form submission works on iOS Chrome
- [ ] No horizontal scrolling
- [ ] Touch targets are large enough (min 44x44px)

### Android Chrome
- [ ] Form loads correctly
- [ ] All fields are interactive
- [ ] Form submission works
- [ ] No layout issues or overflow

---

## Browser Compatibility

### Chrome (Latest)
- [ ] Form loads and displays correctly
- [ ] Form submission works
- [ ] No console errors

### Firefox (Latest)
- [ ] Form loads and displays correctly
- [ ] Form submission works
- [ ] No console errors

### Safari (Latest)
- [ ] Form loads and displays correctly
- [ ] Form submission works
- [ ] No console errors

### Edge (Latest)
- [ ] Form loads and displays correctly
- [ ] Form submission works
- [ ] No console errors

---

## Technical Validation

### Scripts
- [ ] form_embed.js loads successfully (check Network tab)
- [ ] No duplicate script loading
- [ ] Script loads only once globally (check index.html)
- [ ] No JavaScript errors in console

### Security
- [ ] No mixed-content warnings (HTTP vs HTTPS)
- [ ] No CSP (Content Security Policy) errors
- [ ] iframe sandbox attributes (if any) don't block functionality
- [ ] SSL certificate is valid on crm.gshforms.com

### Performance
- [ ] Form loads within 2 seconds
- [ ] No significant impact on page load time
- [ ] Iframe doesn't cause layout shift (CLS)
- [ ] Page remains responsive while form loads

---

## Form Data Validation

### Required Fields
- [ ] Form validates required fields
- [ ] Error messages display for empty required fields
- [ ] Email validation works correctly
- [ ] Phone number validation works correctly

### Submission
- [ ] Test submission with valid data
- [ ] Confirmation message appears after successful submission
- [ ] Data is received in GoHighLevel CRM (verify with client)
- [ ] Form clears or shows appropriate state after submission

---

## Edge Cases

### Navigation
- [ ] Form state persists when returning to page via browser back button
- [ ] Form resets properly when navigating between different home pages
- [ ] No memory leaks when navigating away from pages with form

### Slow Network
- [ ] Form shows loading state on slow 3G connection
- [ ] Form eventually loads on poor network
- [ ] Graceful fallback if form fails to load

### Accessibility
- [ ] Form is keyboard navigable (Tab through fields)
- [ ] Screen reader announces form fields properly
- [ ] Focus states are visible
- [ ] Labels are properly associated with inputs

---

## Issues Found

### Critical (Blocks Release)
- None

### High (Should Fix Before Release)
- None

### Medium (Fix Soon)
- None

### Low (Nice to Have)
- None

---

## Sign-Off

- [ ] Desktop testing complete
- [ ] Mobile testing complete (iOS)
- [ ] Mobile testing complete (Android)
- [ ] Browser compatibility verified
- [ ] Technical validation passed
- [ ] Form data validation confirmed
- [ ] Client/stakeholder approval received

**Tested By:** ___________________
**Date:** ___________________
**Approved By:** ___________________
**Date:** ___________________
