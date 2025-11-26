# Movember Personal Donation Page - Design Doc

**URL:** movember-tyr.netlify.app  
**Movember Profile:** uk.movember.com/mospace/15524001

---

## Overview

Single-page site encouraging donations to Tyr's Movember campaign. Moustache-themed but generic enough to reuse for future charity events (jiu jitsu, cycling challenges, etc.).

---

## Tech Stack

- **Framework:** React (Vite)
- **Hosting:** Netlify
- **Backend:** Netlify Function to scrape live donation total

---

## Page Structure

### 1. Hero
- Headline: "Tyr's Movember"
- Moustache graphic/icon
- Tagline: "Help support men's health"

### 2. Photos
Three images displayed in row or staggered grid:
- Spin bike group shot
- Tyr + brother from last year
- Results board (68km in 3 hours)

### 3. Live Counter
- "£X raised so far"
- Fetched from Movember profile via Netlify Function
- Subtle animation on update (optional)

### 4. Call to Action
- Large donate button
- Links to: https://uk.movember.com/mospace/15524001
- Animated arrows pointing to button

### 5. Footer
- "Part of UoL Tri Team"
- Movember logo

---

## Visual Direction

- **Vibe:** Fun, cheery, playful - not corporate
- **Motifs:** Moustache flourishes, whisker shapes as decorative elements
- **Palette:** Bright/warm colours, not strictly Movember branding
- **Typography:** Friendly, readable

---

## Scope

- **Timeline:** 5-10 hours
- **Pages:** Single page, no routing
- **Responsive:** Mobile-first

---

## Assets Needed

- [ ] 3 photos (spin bike, brother, results board)
- [ ] Moustache icon/graphic
- [ ] Movember logo (from official site)