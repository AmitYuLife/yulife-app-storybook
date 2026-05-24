# Styles

## Typography

ALWAYS use the `Text` component. NEVER use raw `<p>`, `<span>`, `<h1>`–`<h6>`, or set font properties manually.

```tsx
import { Text, Colours } from '@yulife-private/design-system'

// CORRECT
<Text type="h1">Page Title</Text>
<Text type="b2">Body text</Text>
<Text type="l1" color={Colours.neutral.n700}>Caption</Text>

// WRONG — never do this
<h1 style={{ fontSize: 32, fontWeight: 'bold' }}>Page Title</h1>
<p style={{ fontFamily: 'Bariol' }}>Body text</p>
```

### Type scale decision tree

```
Page title (one per screen)?          → type="h1"  (32px bold)
Section heading?                      → type="h2"  (28px bold)
Card/subsection heading?              → type="h3"  (24px bold)
Large intro paragraph?                → type="b1"  (20px regular)
Standard body text?                   → type="b2"  (16px regular) ← default
Bold body / emphasis?                 → type="b2b" (16px bold)
Form label or UI label?               → type="l1"  (14px regular)
Bold label?                           → type="l1b" (14px bold)
Caption / metadata / small text?      → type="l2"  (12px regular)
Fine print?                           → type="l3"  (10px regular)
```

### Full type scale

| Type | Size | Weight | Line height | Usage |
|------|------|--------|-------------|-------|
| `h1` | 32px | 700 | 40px | Page titles |
| `h2` | 28px | 700 | 32px | Section headings |
| `h3` | 24px | 700 | 32px | Subsection headings |
| `b1` | 20px | 400 | 24px | Large body text |
| `b1b` | 20px | 700 | 24px | Large body emphasis |
| `b2` | 16px | 400 | 24px | **Default body text** |
| `b2b` | 16px | 700 | 24px | Body emphasis |
| `l1` | 14px | 400 | 18px | Labels, form fields |
| `l1b` | 14px | 700 | 18px | Bold labels |
| `l2` | 12px | 400 | 16px | Small labels, captions |
| `l2b` | 12px | 700 | 16px | Bold captions |
| `l3` | 10px | 400 | 16px | Fine print |
| `l4` | 8px | 400 | 16px | Smallest text (rare) |
| `time` | 62px | 700 | — | Timer displays |
| `bigYuCoin` | 40px | 700 | — | Large coin amounts (used with `Counter`) |
| `big64` | 64px | 700 | — | Hero numbers |
| `big88` | 88px | 700 | — | Extra-large display numbers |

---

## Colours

ALWAYS use `Colours` tokens. NEVER hardcode hex values.

```tsx
import { Colours } from '@yulife-private/design-system'
```

### Background colour decision tree

```
Page / screen background?            → Colours.neutral.n20        (#F5F5F5)
Card or panel surface?               → Colours.neutral.white       (#FFFFFF)
Primary action button?               → Colours.primary.p600        (#E30D76)
Light pink tint (highlight)?         → Colours.primary.p50         (#FCE5EF)
Divider or subtle separator?         → Colours.neutral.n100        (#E7E7EB)
Input border (inactive)?             → Colours.textInput.inactive  (rgb(204,204,204))
Success state background?            → Colours.status.su100        (#ECF9EE)
Error state background?              → Colours.status.er100        (#FFF2F2)
Warning state background?            → Colours.status.wa100        (#FAF4E6)
```

### Text colour decision tree

```
Primary content (headings, body)?    → Colours.neutral.n900        (#464647)
Secondary (descriptions, captions)?  → Colours.neutral.n700        (#6E6E70)
Placeholder / disabled?              → Colours.neutral.n400        (#ABABAD)
On brand-pink background?            → Colours.neutral.white       (#FFFFFF)
Error message?                       → Colours.status.er300        (#FF5F5F)
Success message?                     → Colours.status.su300        (#66CC78)
```

---

## Colour rules

- Do NOT use `Colours.primary.p600` as a background for cards, sections, or large areas
- Do NOT use raw black `#000000` — use `Colours.neutral.n900` instead
- Do NOT use status colours for decoration — only for their semantic meaning (error/success/warning/info)
- ALWAYS pair white text with the brand pink background
- Use `Colours.neutral.n900` for headings and body, `Colours.neutral.n700` for secondary text

---

## Layout patterns

### Standard page

```tsx
<Box bg={Colours.neutral.n20} minHeight="100vh" p={16} gap={16} flexDirection="column">
  <Text type="h1">Page Title</Text>
  <Card>...</Card>
  <Card>...</Card>
</Box>
```

### Card with header row

```tsx
<Card>
  <Box flexDirection="row" alignItems="center" justifyContent="space-between" mb={12}>
    <Text type="h3">Card Title</Text>
    <Text type="l1" color={Colours.neutral.n700}>See all</Text>
  </Box>
  {/* card body */}
</Card>
```

### Form section

```tsx
<Card>
  <Box gap={16} flexDirection="column">
    <Text type="h3">Personal Details</Text>
    <TextField label="Full name" placeholder="Enter your name" />
    <TextField label="Email" placeholder="Enter your email" />
    <Button label="Save" />
  </Box>
</Card>
```
