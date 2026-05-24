# Tokens

## Token format — read this first

All spacing and sizing values in this design system are already in **pixels** — no unit conversion needed. Use them directly:

```tsx
// CORRECT — pass numbers, Box adds "px" automatically
<Box p={16} gap={8} mt={24} br={12} />

// WRONG — do not pass strings with px
<Box p="16px" />
```

Colour tokens are complete CSS values — use them directly in JSX:

```tsx
// CORRECT
<Box bg={Colours.primary.p600} />
<Text color={Colours.neutral.n900}>Hello</Text>

// WRONG — never hardcode hex
<Box bg="#E30D76" />
```

---

## Spacing scale

ONLY use values from this table. Never use arbitrary values like `13px` or `7px`.

| Value | CSS Variable | Box prop example | Usage |
|-------|-------------|-----------------|-------|
| 0px | `--yu-spacing-0` | `p={0}` | Reset |
| 2px | `--yu-spacing-2` | `p={2}` | Hairline spacing |
| 4px | `--yu-spacing-4` | `p={4}` | Tight spacing, icon padding |
| 6px | `--yu-spacing-6` | `p={6}` | Small gap |
| 8px | `--yu-spacing-8` | `p={8}` | Default small spacing |
| 10px | `--yu-spacing-10` | `p={10}` | Compact padding |
| 12px | `--yu-spacing-12` | `p={12}` | Compact card padding |
| **16px** | `--yu-spacing-16` | `p={16}` | **Default card padding, page padding** |
| 20px | `--yu-spacing-20` | `p={20}` | Comfortable padding |
| **24px** | `--yu-spacing-24` | `gap={24}` | **Default section spacing** |
| 32px | `--yu-spacing-32` | `mt={32}` | Large gap between sections |
| 40px | `--yu-spacing-40` | `py={40}` | Hero/large spacing |
| 48px | `--yu-spacing-48` | `p={48}` | Page-level vertical padding |
| 64px | `--yu-spacing-64` | `mt={64}` | Major section breaks |
| 80px | `--yu-spacing-80` | `p={80}` | Hero spacing |
| 96px | `--yu-spacing-96` | `p={96}` | Maximum spacing |

### Box spacing shorthand reference

```tsx
<Box p={16} />        // padding: all sides
<Box pt={8} />        // padding-top
<Box pb={16} />       // padding-bottom
<Box pl={16} />       // padding-left
<Box pr={16} />       // padding-right
<Box px={24} />       // padding-left + padding-right
<Box py={16} />       // padding-top + padding-bottom
<Box m={8} />         // margin: all sides
<Box mt={24} />       // margin-top
<Box mb={16} />       // margin-bottom
<Box mx={16} />       // margin-left + margin-right
<Box my={24} />       // margin-top + margin-bottom
<Box gap={8} />       // gap (flexbox)
```

---

## Border radius

| Value | Usage |
|-------|-------|
| `br={4}` | Subtle rounding |
| `br={8}` | Inputs, small elements |
| `br={12}` | **Cards** (default) |
| `br={16}` | Panels |
| `rounded` prop | `border-radius: 9999px` — pills, avatars |

Buttons use `borderRadius: 50px` internally — do not override.

---

## Colour tokens (TypeScript)

```tsx
import { Colours } from '@yulife-private/design-system'

// Primary brand
Colours.primary.p600        // #E30D76  — brand pink, primary buttons
Colours.primary.p600Shadow  // #900860  — button shadow
Colours.primary.p50         // #FCE5EF  — light pink background tint
Colours.primary.p20         // #FFF5FA  — very light pink tint

// Neutral
Colours.neutral.white       // #FFFFFF  — card surface
Colours.neutral.n20         // #F5F5F5  — page background
Colours.neutral.n50         // #FAFAFE  — subtle background
Colours.neutral.n100        // #E7E7EB  — dividers
Colours.neutral.n150        // #E3E3E1  — card/input border (default)
Colours.neutral.n200        // #D3D3D6  — stronger borders
Colours.neutral.n300        // #BFBFC2  — inactive borders
Colours.neutral.n400        // #ABABAD  — placeholder / disabled text
Colours.neutral.n600        // #838385  — secondary text (lighter)
Colours.neutral.n700        // #6E6E70  — secondary text
Colours.neutral.n900        // #464647  — primary text

// Status
Colours.status.su300        // #66CC78  — success
Colours.status.su100        // #ECF9EE  — success background
Colours.status.er300        // #FF5F5F  — error
Colours.status.er100        // #FFF2F2  — error background
Colours.status.wa300        // #F19E22  — warning
Colours.status.wa100        // #FAF4E6  — warning background
Colours.status.in300        // #5A89D8  — info
Colours.status.in100        // #E6EDF9  — info background

// Input states
Colours.textInput.inactive  // rgb(204,204,204) — unfocused input border
Colours.textInput.focus     // #333333          — focused input border
Colours.textInput.error     // rgb(255,102,102) — error input border

// Interactive text
Colours.button.link         // rgb(232,49,129)  — link text colour
```

---

## Colour tokens (CSS custom properties)

Use these in plain CSS or `style` props when not using the `Colours` object:

```css
var(--yu-color-primary-p600)         /* #E30D76 */
var(--yu-color-primary-p600-shadow)  /* #900860 */
var(--yu-color-neutral-white)        /* #FFFFFF */
var(--yu-color-neutral-n20)          /* #F5F5F5 */
var(--yu-color-neutral-n900)         /* #464647 */
var(--yu-color-status-success)       /* #66CC78 */
var(--yu-color-status-error)         /* #FF5F5F */
```

---

## Font tokens

```css
font-family: var(--yu-font-primary);       /* Bariol, Nunito Sans, sans-serif */
font-family: var(--yu-font-primary-bold);  /* Bariol Bold, Nunito Sans, sans-serif */
```

Do NOT use these directly — use the `Text` component with `type` prop instead.
