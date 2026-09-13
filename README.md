# Handoff: CPA Schulich Student Association Website

## Overview
An 8-page marketing/informational site for the CPA Schulich Student Association (a student club at York University's Schulich School of Business). Covers Home, About, Executive Team, Events, Membership, Resources, and a dedicated informational page about CPA Ontario's Post-Secondary Ambassador Program (PSAP). Visual style is adapted from a reverse-engineered CPA Ontario design language (navy/lime, pill buttons, circle motif).

## About the Design Files
The `.dc.html` files in this bundle are **design references built in a prototyping tool** (data-bound HTML templates with inline styles) — not production code to copy directly. Treat them as high-fidelity visual/content specs. The task is to **recreate these designs in the target codebase's actual stack** (React, Vue, plain static site, etc. — whichever the project uses, or the best fit if none exists yet), using that stack's normal component and styling conventions. Do not attempt to run the `.dc.html` files as-is in production; they depend on a proprietary template runtime (`support.js`) that only exists in the design tool.

Each `.dc.html` has three logical parts inside it: a `<x-dc>...</x-dc>` template block (the markup/content), a `<script data-dc-script>` block (a small JS class supplying dynamic data via a `renderVals()`-style method — treat these as the page's data model), and boilerplate wiring you can ignore. `<sc-for list="{{items}}" as="x">` blocks are simple list loops — recreate as a `.map()`/`v-for`/`*ngFor` equivalent. `<dc-import name="Header">` / `<dc-import name="Footer">` mean "mount the Header/Footer component here" with the given props — recreate as normal shared components/partials.

## Fidelity
**High-fidelity (hifi).** Colors, type, spacing, and copy are final/production-ready (copy is placeholder-flagged where explicitly noted below). Recreate pixel-close using the values in the Design Tokens section.

## Site Structure & Shared Components

### Header (`Header.dc.html`)
Shared on every page. White background, bottom hairline border (`#D0D7DD`, 1px).
- Layout: flex row, `max-width: 1170px` centered, `padding: 18px 50px`, `justify-content: space-between`, wraps on narrow screens.
- Logo: text "CPA SSA", 22px, weight 800, color `#002453`, letter-spacing -0.6px, links to Home.
- Nav: 7 items — Home, About, Team, Events, PSAP, Membership, Resources. Each pill: `padding: 8px 14px`, `border-radius: 999px`, `font-weight: 700`, `font-size: 15px`. Inactive: text `#003DA6`, transparent background. **Active page**: text `#002453`, background `#E0FE69` (lime). Active state is driven by an `activePage` prop passed into Header from each page.
- "Join" button (right): pill, background `#002453`, text white, `padding: 10px 24px`, `font-size: 13px`, uppercase, letter-spacing 0.05em, 2px border `#002453`. On hover: inverts to white background, `#002453` text/border. Links to Membership.

### Footer (`Footer.dc.html`)
Shared on every page.
- Upper band: background `#002453`, `padding: 56px 50px 40px`. Flex row (wraps): brand blurb (white "CPA SSA" title + light-blue-gray `#B9C4D6` description, max-width 320px) + two link columns ("Explore": About/Team/Events/Membership/Resources; "Connect": email + Instagram + LinkedIn placeholders). Column headers use cyan `#7BF3FF`, 12px, uppercase, weight 700. Links are white, 14px, weight 400.
- Lower band: background `#F8F8F8`, centered copyright text, `#6F6F6F`, 13px, weight 300: "© 2026 CPA Schulich Student Association. All rights reserved."

## Screens / Views

### 1. Home (`Home.dc.html`)
- **Hero**: navy (`#002453`) background section, `padding: 100px 50px 120px`. A real photo (`assets/home-hero.avif`) is positioned absolute right, 56% width, `object-fit: cover`, with a left-to-right fade mask and a navy gradient overlay so text stays legible on the left. Content (max-width 1170, centered): small cyan eyebrow label "SCHULICH SCHOOL OF BUSINESS" (13px, uppercase, letter-spacing 0.1em), H1 "Your community for accounting and CPA-track students." (white, 56px, weight 800, letter-spacing -1.4px, max-width 640px), supporting paragraph (light blue-gray `#C7D3E6`, 18px, weight 300, max-width 520px), then two CTA buttons: primary pill "Become a Member" (lime bg, navy text) → Membership page; secondary outline pill "See Events" (transparent, white text, 2px white/50%-opacity border) → Events page.
- **Get Involved strip**: solid dark charcoal (`#3D4344`) background, `padding: 64px 50px`. Centered white H2 "Get Involved". Below: 4-column responsive grid, each item a colored circle (56px, flat color) above a bold white label, linking out: Events (cyan `#7BF3FF`), Membership (lime `#E0FE69`), Resources (green `#0D7341`), Team (purple `#6D3885`).
- **Promo tiles**: white background section, `padding: 88px 50px`, 3-column responsive grid (min 320px). Each tile: real photo top (180px tall, `object-fit: cover`), navy caption bar below with white bold title + a bordered chevron "›" box. Tiles: "Who We Are" (`assets/promo-about.avif`) → About; "Upcoming Events" (`assets/promo-events.avif`) → Events; "CPA Ontario's PSAP" (`assets/psap-hero.avif`) → PSAP.
- **Why join / CTA**: light gray (`#F3F3F3`) background, `padding: 88px 50px`, 2-column grid (1.1fr / 0.9fr). Left: H2 "Why join?" (navy blue `#003DA6`, 32px) + 4-item checklist (navy `#003DA6` dot bullets + `#3D4344` body text). Right: navy card (`#002453`, 16px radius, 40px padding) with white heading "Ready to get involved?", light-blue body text, lime "Join Now" pill button → Membership.

### 2. About (`About.dc.html`)
- Breadcrumb "Home / About" (`#6F6F6F`, 13px) + H1 "About Us" (`#003DA6`, 44px, weight 800).
- **Our Mission**: 2-column grid — left: mission paragraph (16px, weight 300, `#3D4344`); right: navy stat card ("SINCE" cyan label, "Est. at Schulich" white 34px heading, light-blue subtext).
- **What We Do**: light gray (`#F3F3F3`) band, centered H2, 3-column grid of pillars (Professional Development / Networking / Community), each with a 48px colored circle icon (navy/green/purple) + bold navy title + gray body text.
- **Who We Serve**: solid navy (`#002453`) band, centered white H2, row of 4 rounded pill chips (First-Year Students `#003DA6`, Upper-Year Students `#0D7341`, CPA PEP Candidates `#6D3885`, Alumni `#002453`), white bold text on each.

### 3. Executive Team (`Team.dc.html`)
- Breadcrumb + H1 "Meet the Team" + intro line.
- Grid (min 220px columns) of 8 member cards. Each: circular photo slot (88px — currently an empty user-fillable placeholder, no real photos supplied yet), bold navy name (17px), uppercase blue role label (12px, letter-spacing 0.05em), gray blurb (14px, weight 300).
- **Placeholder note**: names/roles/blurbs (Jordan Lee – President, Priya Anand – VP Finance, etc.) are invented placeholders — replace with the real exec roster before shipping.

### 4. Events (`Events.dc.html`)
- Breadcrumb + H1 "Events" + intro line.
- Grid (min 300px columns) of 6 event cards, bordered (`#D0D7DD` 1px, 12px radius, 28px padding). Each: small colored accent bar (4px tall, category color), title + date badge (navy pill, top-right) in a flex row, uppercase colored category tag, gray description, bold blue "Learn More ›" link (currently `#` — no real destination wired).
- **Placeholder note**: the 6 events (CPA PEP Info Session, Resume Workshop, Meet the Firms Night, Case Competition, Alumni Panel, Year-End Social) and their dates are illustrative — replace with the real event calendar.

### 5. Membership (`Membership.dc.html`)
- Breadcrumb + H1 "Membership".
- 2-column layout: **left sidebar** (260px) — anchor-link nav (Overview/Benefits/How to Join/FAQ, active item gets lime pill background) + a pinned navy contact box ("Questions?" + lime "Email Us" button, `mailto:cpassa@schulich.yorku.ca` — placeholder address).
- **Right content column**, four `id`-anchored sections: Overview (paragraph + lime "Join Now" button), Benefits (2-column checklist, green dot bullets), How to Join (3 numbered steps, navy circle badges), FAQ (3 Q&A pairs, bold navy question + gray answer).

### 6. Resources (`Resources.dc.html`)
- Breadcrumb + H1 "Resources".
- Same sidebar+content layout as Membership: left sidebar lists 5 categories (active = lime pill) + pinned navy "Need help?" contact box; right column lists 5 resource cards (bordered rows) each with a colored category tag, bold navy title, gray description, and a "View ›" link (currently `#`).

### 7. PSAP — informational page (`PSAP.dc.html`)
Explains CPA Ontario's real Post-Secondary Ambassador Program and links out to CPA Ontario's own registration portal; this is presented as a resource page, not a CPA SSA program.
- **Hero**: full-bleed real photo (`assets/psap-hero.avif`) with a navy gradient overlay, cyan eyebrow "CPA ONTARIO PROGRAM", white H1 "Your CPA Career Starts Long Before Graduation", two paragraphs, and two CTAs: lime "Join PSAP ›" linking to the **real external URL** `https://myportal.cpaontario.ca/s/lt-event?id=a1UMm000005Bl5ZMAS`, and an in-page anchor "See What's Coming Up" → `#events`.
- **What Is PSAP?**: intro paragraphs + 3-card info row (Who It's For / Cost / Where It Happens) on light gray cards.
- **Why Students Join**: dark charcoal (`#3D4344`) band, 5-item bold-lead-in list with lime dot bullets.
- **The PSAP Journey**: two narrative paragraphs + a lime-left-border callout box flagged "Student Voices — Coming Soon" (placeholder for real Schulich-student testimonials).
- **Three Ways PSAP Shows Up**: light gray band, 3 photo cards (Inspire/Develop/Connect), each with a real photo (`assets/psap-inspire.avif`, `psap-develop.avif`, `psap-connect.avif`) and description.
- **PSAP Events Calendar** (`id="events"`): 9-card grid, one per real PSAP event type (Info Sessions, Chartered for Success, Fall Case Competition, Discovery Days, Network with Confidence, PSAP Prestige, Firms Day, CareerFest, PSAP Skills Modules).
- **Board of Ambassadors**: navy band explaining the leadership track, a callout noting "Schulich currently has two students on the PSAP Board of Ambassadors," and 2 empty circular photo placeholders (real ambassador names/photos intentionally omitted — need to be supplied by the club, not invented).
- **How to Join**: 4 numbered steps referencing the same external portal URL.
- **Upcoming Info Sessions**: a labelled-as-"example block" grid table of 6 dated rows (Sept–Dec 2026) with a note pointing to CPA Ontario's live info-session page (`https://www.cpaontario.ca/become-a-cpa/post-secondary-student/information-session`) as the source of truth — this table will go stale and should ideally just link out instead of being hand-maintained.
- **FAQ**: 5 Q&A pairs.
- **Closing CTA**: navy band, centered, lime button linking to the same external portal URL.

## Interactions & Behavior
- All navigation is plain page-to-page links (`<a href="X.dc.html">` → recreate as normal router links, e.g. `/about`, `/team`, etc.)
- Header "Join" button and most CTA buttons: simple background/text color swap on hover (see Header hover spec above). No JS-driven interactivity beyond that — this is a static content site.
- Membership/Resources sidebars use in-page anchor links (`#overview`, `#benefits`, etc.) — plain scroll-to-anchor, no active-state-on-scroll JS implemented.
- No forms, no client-side validation, no async data fetching — all content is static/hardcoded per page.

## State Management
None. All pages are static. The only "dynamic" data is per-page arrays of plain objects (events, team members, FAQs, etc.) defined inline in each page's script block — recreate as static data files/constants or CMS content.

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| Navy dark | `#002453` | Primary background (hero sections, footer, cards), headings on light bg |
| Blue | `#003DA6` | Secondary headings, links, inactive nav text |
| Lime (accent) | `#E0FE69` | Primary CTA buttons, active nav highlight — use sparingly, one per screen |
| Green | `#0D7341` | Supporting accent (icons, tags, bullets) |
| Cyan | `#7BF3FF` | Small decorative accents, footer column labels, eyebrow text on navy |
| Purple | `#6D3885` | Supporting accent (icons, tags) |
| Pink/red | `#A12B4E` | One event/resource tag accent |
| Body text | `#3D4344` | Default body copy; also used as a solid dark section background |
| Border | `#D0D7DD` | Hairline borders/dividers |
| Light bg | `#F3F3F3` | Light neutral section background |
| Footer band | `#F8F8F8` | Footer bottom strip |
| Muted text | `#6F6F6F` | Breadcrumbs, secondary/disabled text (use this over lighter `#898989` — it fails AA contrast on white) |

### Typography
- Font: **Plus Jakarta Sans** (loaded via Google Fonts), fallback Arial/Helvetica/sans-serif.
- Body copy: 15–16px, weight 300 (light).
- Headings: weight 700–800, tight letter-spacing at large sizes (H1 ~44–56px uses -1 to -1.4px letter-spacing).
- Buttons/labels: uppercase, weight 700, letter-spacing ~0.05em.
- Eyebrow/section labels: 12–13px, uppercase, weight 700, letter-spacing 0.08–0.1em.

### Layout & Spacing
- Max content width: **1170px**, centered, `padding: 0 50px` on desktop.
- Section vertical padding: 72–96px on desktop.
- Border radius: buttons/pills `999px`; cards `12px`; large feature cards `16px`.

## Assets
All real photos are licensed/owned by the user (uploaded from a "PSAP Pics" folder) and live in `assets/`:
- `home-hero.avif` — Home hero background photo
- `promo-about.avif`, `promo-events.avif` — Home promo tile photos
- `psap-hero.avif` — PSAP page hero + Home promo tile photo
- `psap-inspire.avif`, `psap-develop.avif`, `psap-connect.avif` — PSAP "Three Ways" card photos

**Not yet supplied (currently empty placeholders in the design):** Executive Team member photos (8), PSAP Board of Ambassadors photos (2). These use a drag-and-drop placeholder component (`image-slot.js`) in the prototype only — in the real codebase, just leave normal `<img>`/avatar slots empty or use a neutral avatar fallback until real photos are provided.

## Content Placeholders — Do Not Ship As-Is
- Executive Team names/roles/bios (Team.dc.html) — entirely invented placeholders.
- Events calendar dates/descriptions on the **Events** page (association's own events, not PSAP's) — illustrative placeholders.
- Contact email `cpassa@schulich.yorku.ca` — placeholder, confirm the real address.
- Social links (Instagram/LinkedIn in footer) — placeholder `#` hrefs.
- PSAP page's "Student Voices" testimonial box and Board of Ambassadors names/photos are **intentionally** left blank — do not invent real people's names, quotes, or photos for these; they must come from the club.
- The PSAP "Upcoming Info Sessions" table has real-looking but example dates (Sept–Dec 2026) — verify against CPA Ontario's live page before publishing, or replace with a link-out.

## Files
- `Header.dc.html`, `Footer.dc.html` — shared header/footer
- `Home.dc.html` — homepage
- `About.dc.html` — About Us
- `Team.dc.html` — Executive Team
- `Events.dc.html` — Events (association's own)
- `Membership.dc.html` — Membership
- `Resources.dc.html` — Resources / career prep
- `PSAP.dc.html` — CPA Ontario PSAP informational page
- `assets/` — real photos referenced above
