# YuLife Design System Guidelines

## CRITICAL RULES — read before writing any code

IMPORTANT: Do NOT use raw HTML elements. ALWAYS use design system components instead:

| Instead of... | Use... |
|---------------|--------|
| `<div>` for layout | `<Box>` |
| `<p>`, `<span>`, `<h1>`–`<h6>` | `<Text type="h1">` etc. |
| `<button>` | `<Button>`, `<SecondaryButton>`, etc. |
| `<input>` | `<TextField>` |
| `<input type="checkbox">` | `<CheckBox>` |
| `<input type="radio">` | `<Radio>` |
| `<img>` | `<Image>` |
| Tab navigation bar | `<LeaderboardNavigation>` |

IMPORTANT: ALWAYS import the CSS. The very first line of your main entry file must be:
```tsx
import '@yulife-private/design-system/styles.css'
```
Without this import the fonts, colours, and animations will not work.

IMPORTANT: ALWAYS import components from `@yulife-private/design-system`. Never install or import from any other component library (no MUI, no shadcn, no Chakra, no Radix, no Tailwind classes).

```tsx
import { Box, Text, Button, Card, Colours } from '@yulife-private/design-system'
```

IMPORTANT: NEVER hardcode hex colour values. Use `Colours.primary.p600`, `Colours.neutral.n900`, etc.

IMPORTANT: NEVER hardcode pixel values outside the spacing scale. Use Box props: `p={16}`, `gap={8}`, `mt={24}`.

---

## Product character

This is a **B2C health & wellness** app with a **friendly, gamified** UI.

- **Brand colour**: Pink/magenta — `Colours.primary.p600` (`#E30D76`). Used for primary buttons and small accents ONLY.
- **Surfaces**: White cards (`Colours.neutral.white`) on light grey background (`Colours.neutral.n20`).
- **Corners**: `8px` for inputs, `12px` for cards, `50px` (pill) for buttons, `9999px` for avatars.
- **Font**: Bariol (loaded via CSS). Applied automatically by the `Text` component.
- **Spacing base**: 4px. Common values: 4, 8, 12, 16, 20, 24, 32, 40.

---

## Reading order

Before writing any code, read in this order:

1. `overview.md` — product character, workflows, and all rules
2. `setup.md` — copy the starter template first
3. `styles.md` — colour palette and typography rules
4. `tokens.md` — spacing scale and CSS variables
5. `components.md` — full component catalogue, props, and substitution table

For deeper reference on foundations:
- `foundations/colours.md` — full colour palette with decision trees
- `foundations/typography.md` — complete type scale including display types
- `foundations/spacing.md` — spacing scale with CSS custom properties

---

## Typical page structure

Every page follows this pattern:

```tsx
import '@yulife-private/design-system/styles.css'
import { Box, Text, Button, Card, Colours } from '@yulife-private/design-system'

export default function MyPage() {
  return (
    <Box bg={Colours.neutral.n20} minHeight="100vh" p={16} gap={16} flexDirection="column">
      <Text type="h1">Page Title</Text>

      <Card>
        <Box gap={12} flexDirection="column">
          <Text type="h3">Section Heading</Text>
          <Text type="b2" color={Colours.neutral.n700}>Description text.</Text>
          <Button label="Primary Action" />
        </Box>
      </Card>
    </Box>
  )
}
```
