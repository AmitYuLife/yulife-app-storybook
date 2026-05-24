# YuLife Design System — Overview

## Product character

This is a **B2B health & wellness** mobile-first application with a **friendly, gamified** UI style.

- **Density**: Comfortable — generous padding, card-based layout with breathing room
- **Surface strategy**: White cards on a light grey background (`Colours.neutral.n20`). Surface colour creates visual hierarchy.
- **Colour palette**: Predominantly neutral with a strong pink/magenta brand accent (`p600: #E30D76`). The brand colour appears only on primary buttons and small accents — never as a large background fill.
- **Corner style**: `8px` for inputs, `12px` for cards, `16px` for panels/modals, `50px` (pill) for buttons, `9999px` for avatars
- **Typography**: Bariol (primary), Open Sans (secondary). Bold for headings, regular for body. Applied automatically by the `Text` component.
- **Elevation**: Subtle box-shadows on cards. Primary buttons use a coloured offset shadow (`p600Shadow`) for depth.

---

## Reading order

**MUST READ before writing any code:**

1. `overview.md` — this file; product character, rules, and structure
2. `setup.md` — CSS import, component imports, build configuration, font loading
3. `styles.md` — typography scale, colour usage rules, layout patterns
4. `tokens.md` — spacing scale, border radius, full colour token reference
5. `components.md` — complete component catalogue with props, examples, and substitution table

**Read on demand:**

- `foundations/colours.md` — full colour palette with decision trees for background, text, and border
- `foundations/typography.md` — complete type scale including display types (`bigYuCoin`, `time`, `big64`, `big88`)
- `foundations/spacing.md` — spacing scale with CSS custom property names

---

## Workflows

### Before using a component

1. Check the import table at the top of `components.md` — all components come from `@yulife-private/design-system`
2. Find the component's section in `components.md` and read the props table, examples, and rules
3. Do NOT write code using a component until you have read its section

### Before choosing colours

1. Read `tokens.md` for the full `Colours` token reference
2. Use the `Colours` object import or CSS custom properties (`--yu-color-*`)
3. Never hardcode hex values when a token exists
4. Check `foundations/colours.md` for the decision tree if you are unsure which token applies

### When building a layout

1. Use `Box` as the primary layout primitive with shorthand props (`p`, `gap`, `flexDirection`, etc.)
2. Apply spacing tokens only — never hardcode arbitrary pixel values outside the defined scale
3. Cards (`<Card>`) float on light backgrounds — use them for all elevated content surfaces
4. Page background is always `Colours.neutral.n20`; card surface is always `Colours.neutral.white`

### When building a form

1. Use `TextField` for text inputs, `CheckBox` for boolean fields, `Switch` for settings toggles, `Radio` for exclusive choices
2. Always include a `label` prop — never render inputs without labels
3. Use the `error` prop on `TextField` for validation messages — never style errors manually
4. Place the primary `Button` at the bottom; if there is a cancel action, use `SecondaryButton` to its left

---

## Rules

**Components**

- ALWAYS use design system components over raw HTML. See the substitution table in `components.md`.
- NEVER install or import from another component library (no MUI, Chakra, shadcn, Radix, Tailwind).
- ALWAYS import from `@yulife-private/design-system` — there is no other source.

**CSS**

- The FIRST line of `main.tsx` / `App.tsx` MUST be `import '@yulife-private/design-system/styles.css'`. Without it fonts, colours, and animations will not work.

**Colours**

- NEVER hardcode hex values — always use `Colours.*` tokens.
- The brand pink (`p600`) is for buttons and small accents only — never a large background fill.
- Status colours (success, error, warning, info) are reserved for their semantic meaning — never decorative.
- Raw black (`#000000`) is forbidden — use `Colours.neutral.n900` instead.

**Spacing & sizing**

- NEVER hardcode arbitrary pixel values — use Box shorthand props (`p={16}`, `gap={8}`, `mt={24}`).
- Buttons are pill-shaped (`borderRadius: 50px`) — do not override this.
- Inputs use `8px` border radius, cards `12px`, panels `16px` — do not override these.

**Typography**

- NEVER use raw `<p>`, `<span>`, or `<h1>`–`<h6>` — always use `<Text type="...">`.
- NEVER set `font-size`, `font-family`, or `font-weight` manually.

**Interaction & state**

- Icons use `currentColor` by default — only override colour when a specific value is required.
- Disabled states use `opacity: 0.5` — do not apply custom greyed-out colours.
- Loading states: use `isLoading` on `Button` rather than swapping label text.
