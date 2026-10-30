# Button (`.yu-btn`)

The chapter's one-action control: event registration, RSVPs, "Apply now."

```html
<button class="yu-btn yu-btn--primary">Register</button>
<button class="yu-btn yu-btn--secondary">Learn more</button>
<button class="yu-btn yu-btn--national">ACE Canada Nationals</button>
```

- **`yu-btn--primary`** — `brand-primary` fill, `brand-primary-ink` text. The one action you want taken on a screen. Use at most one per view.
- **`yu-btn--secondary`** — outlined in `brand-primary`, transparent fill. Supporting actions ("Learn more", "View schedule") next to a primary button.
- **`yu-btn--national`** — `national-accent` fill, `national-accent-ink` text. Only for actions that are explicitly ACE Canada national content (registering for ACE Canada Nationals, a joint national event). Never use it as a third general-purpose colour.

All three variants hold at least 4.5:1 contrast between their fill and text token in both themes.
