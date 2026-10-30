# YorkU ACE Design System

YorkU ACE is the York University chapter of **ACE Canada**, the national student organization that runs accounting case competitions, conferences and professional-development programming for accounting students across Canadian campuses. This design system is the shared visual language for YorkU ACE's own materials: the chapter website, event pages, social graphics, sponsorship decks and recruitment collateral.

> **A note on sourcing.** The two reference sites — acecanada-nationals.ca and the @yorkuace Instagram — were not reachable from the environment this system was first built in, so the exact palette below is built from the colour relationship as described rather than pulled pixel-for-pixel from either site: **ACE Canada uses red and white; YorkU ACE uses dark blue and light blue.** Swap in the official hex values from the national and chapter brand kits as soon as they're available, and treat everything here as the structure to pour them into, not the final word on the exact shade.

A hosted, browsable version of this same system (with live component previews) also exists as a private Claude Artifact.

## How the two brands relate

YorkU ACE is a chapter *of* ACE Canada, not a separate brand. In practice that means:

- **Default to the chapter colours** (`brand-primary` dark blue, `brand-secondary` light blue) for everything YorkU ACE publishes day to day — event pages, the chapter site, general social posts.
- **Reach for `national-accent`** (ACE Canada red) only when a piece of content is explicitly tied to the national organization: a logo lockup next to the ACE Canada mark, a national case-competition promo, a joint sponsorship page. It's a flag, not a general-purpose accent — using it everywhere would make the chapter's own identity disappear into the national one.
- Never recolour the ACE Canada logo itself. Place it at a comfortable distance from chapter-blue elements with clear space, the way any chapter mark sits next to its parent org's.

## Using this in a page

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@600&display=swap">
<link rel="stylesheet" href="design-system/tokens/tokens.css">
<link rel="stylesheet" href="design-system/components/components.css">
```

Set `data-theme="dark"` on `<html>` to opt into the dark palette; omit it to follow the system theme.

## Colour

| Token | Role |
|---|---|
| `surface-page` / `surface-card` / `surface-sunken` | Backgrounds, from page to card to recessed (table stripes, inputs). |
| `ink` / `ink-muted` | Primary and secondary text. |
| `border` | Dividers and outlines. |
| `brand-primary` | The chapter's dark blue. Headers, nav, links, primary buttons — the colour YorkU ACE is recognized by. |
| `brand-primary-ink` | Text/icons on top of `brand-primary` fills. |
| `brand-secondary` | The chapter's light blue. Secondary actions, highlights, and brand-primary's pair wherever two blues read better than one. |
| `brand-secondary-tint` | A soft wash of the light blue — hover states, default badges, selected rows. |
| `national-accent` | ACE Canada red. Reserved for national-affiliated moments only (see above). |
| `national-accent-ink` | Text/icons on `national-accent` fills. |
| `success` / `warning` / `danger` | Status colour, kept apart in hue (green / amber / warm-orange) from both blues and the national red so status never reads as branding. |

Every token carries a light and dark value — see `tokens/tokens.json` for exact hex. Text-on-surface pairings were checked for at least 4.5:1 contrast in both themes.

## Typography

Three families, three jobs:

- **Archivo** (`display`) — headlines and section titles. Confident and slightly condensed; it's the voice of the chapter name and event titles.
- **Inter** (`sans`) — everything you read in paragraphs: body copy, form labels, nav.
- **IBM Plex Mono** (`mono`) — numbers that matter: membership counts, case-competition placements, sponsorship totals, dates in a schedule. Accounting is a numbers discipline; the mono face is the one deliberate nod to that, used sparingly and only for figures, never for prose.

Type styles (`.h1`–`.h4`, `.body`, `.body-sm`, `.caption`, `.stat`, `.label`) are defined in `tokens/tokens.css`, with sizes and weights sourced from `tokens/tokens.json`.

## Spacing and radius

An 8px-rooted scale (`--space-1` through `--space-8`) keeps rhythm consistent from icon gaps up to page sections. Radius is tiered: `--radius-sm` for inputs and chips, `--radius-md` for buttons, `--radius-lg` for cards and images, `--radius-pill` for badges and pill buttons — sharper on small controls, softer on large surfaces.

## Components

- **Button** (`.yu-btn`) — primary / secondary / national-accent variants. One primary action per screen.
- **Badge** (`.yu-badge`) — status and affiliation tags (event type, "ACE Canada National Event").
- **StatTile** (`.yu-stat`) — a headline figure in `mono`, for the numbers that show up on a recruitment page or sponsorship deck.

See `components/*.md` for when to use which variant. Open `demo/index.html` in a browser for a live look at all three with a light/dark toggle.

## Do / Don't

- **Do** lead with the dark blue; let the light blue do secondary work; keep the red for the national flag.
- **Do** put mono figures wherever a reader should scan a number quickly (attendee counts, placements, dollar amounts).
- **Don't** tint the ACE Canada red — it's a flag colour, not a palette to shade from.
- **Don't** mix more than two type families on one surface; keep mono to numerals.
- **Don't** drop a logo onto a background that doesn't give it the contrast its own brand guidelines call for.

## Assets

No logo or photography assets are included yet — add the official YorkU ACE and ACE Canada marks (SVG preferred) under `assets/logos/` as soon as they're available, rather than redrawing them from memory.
