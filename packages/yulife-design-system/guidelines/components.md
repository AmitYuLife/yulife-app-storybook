# Component Catalogue

ALL components are imported from `@yulife-private/design-system`. There is no other source.

IMPORTANT: Do NOT use raw HTML elements. See substitution table below.

IMPORTANT: Do NOT guess component names. The complete list of available components is below. If a component is not in this list, it does not exist in the package.

---

## Complete component list with imports

```tsx
// Layout & structure
import { Box } from '@yulife-private/design-system'
import { Card } from '@yulife-private/design-system'
import { Panel } from '@yulife-private/design-system'

// Typography
import { Text } from '@yulife-private/design-system'
import { HeadingAndCopy } from '@yulife-private/design-system'
import { Counter } from '@yulife-private/design-system'
import { Hyperlink } from '@yulife-private/design-system'

// Buttons
import { Button } from '@yulife-private/design-system'
import { SecondaryButton } from '@yulife-private/design-system'
import { TertiaryButton } from '@yulife-private/design-system'
import { LinkButton } from '@yulife-private/design-system'
import { ArrowButton } from '@yulife-private/design-system'
import { ActionButton } from '@yulife-private/design-system'
import { BoxOption } from '@yulife-private/design-system'

// Inputs
import { TextField } from '@yulife-private/design-system'
import { CheckBox } from '@yulife-private/design-system'
import { Switch } from '@yulife-private/design-system'
import { Radio } from '@yulife-private/design-system'
import { SelectInput } from '@yulife-private/design-system'
import { SliderInput } from '@yulife-private/design-system'
import { ShortCodeInput } from '@yulife-private/design-system'
import { SearchInputWithIcon } from '@yulife-private/design-system'
import { ChipList, Chip } from '@yulife-private/design-system'

// Media
import { Image } from '@yulife-private/design-system'
import { Avatar } from '@yulife-private/design-system'
import { Icon } from '@yulife-private/design-system'
import { StarRating } from '@yulife-private/design-system'

// Navigation
import { LeaderboardNavigation } from '@yulife-private/design-system'
import { SettingsHeader } from '@yulife-private/design-system'
import { WeekDays } from '@yulife-private/design-system'

// Feedback & status
import { Toast } from '@yulife-private/design-system'
import { Loading } from '@yulife-private/design-system'
import { ProgressBar } from '@yulife-private/design-system'
import { SkeletonRow } from '@yulife-private/design-system'
import { HintPopup } from '@yulife-private/design-system'
import { InfoCard } from '@yulife-private/design-system'

// Organisms — Achievements
import { AchievementCard } from '@yulife-private/design-system'
import { AchievementExtraInfo } from '@yulife-private/design-system'

// Organisms — Activity
import { ActivityHistoryDay } from '@yulife-private/design-system'
import { ActivityPanel } from '@yulife-private/design-system'

// Organisms — Media player
import { AvPlayerDescription } from '@yulife-private/design-system'
import { AvPlayerProgressBar } from '@yulife-private/design-system'
import { AvPlayerTimer } from '@yulife-private/design-system'

// Organisms — Battle Pass
import { BattlePassHeader } from '@yulife-private/design-system'
import { BattlePassListItem } from '@yulife-private/design-system'
import { BattlePassProgressBar } from '@yulife-private/design-system'

// Organisms — Lists & rows
import { CouponListItem } from '@yulife-private/design-system'
import { DonationListItem } from '@yulife-private/design-system'
import { InboxMessageItem } from '@yulife-private/design-system'
import { ListItem } from '@yulife-private/design-system'
import { RecentRewardCard } from '@yulife-private/design-system'
import { RewardSearchListItem } from '@yulife-private/design-system'

// Organisms — Navigation & layout
import { GenericHeading } from '@yulife-private/design-system'
import { Tabs } from '@yulife-private/design-system'

// Organisms — Misc
import { CodeAndLinkCopy } from '@yulife-private/design-system'
import { GiftSendPrompt } from '@yulife-private/design-system'
import { HealthProviderItem } from '@yulife-private/design-system'
import { HealthProviderSelection } from '@yulife-private/design-system'
import { JoinLeaderboard } from '@yulife-private/design-system'

// Tokens
import { Colours } from '@yulife-private/design-system'
```

Or import multiple at once:

```tsx
import {
  Box, Text, Button, SecondaryButton, Card, Avatar,
  TextField, Switch, LeaderboardNavigation, Colours,
  AchievementCard, GenericHeading, Tabs, ListItem,
} from '@yulife-private/design-system'
```

---

## HTML → component substitution table

| Raw HTML | Use instead | Import |
|----------|------------|--------|
| `<div>` (layout) | `<Box>` | `import { Box } from '@yulife-private/design-system'` |
| `<p>`, `<span>` | `<Text type="b2">` | `import { Text } from '@yulife-private/design-system'` |
| `<h1>` | `<Text type="h1" as="h1">` | `import { Text } from '@yulife-private/design-system'` |
| `<h2>` | `<Text type="h2" as="h2">` | `import { Text } from '@yulife-private/design-system'` |
| `<h3>` | `<Text type="h3" as="h3">` | `import { Text } from '@yulife-private/design-system'` |
| `<button>` (primary) | `<Button>` | `import { Button } from '@yulife-private/design-system'` |
| `<button>` (secondary) | `<SecondaryButton>` | `import { SecondaryButton } from '@yulife-private/design-system'` |
| `<button>` (ghost) | `<TertiaryButton>` | `import { TertiaryButton } from '@yulife-private/design-system'` |
| `<a>` or text link | `<LinkButton>` | `import { LinkButton } from '@yulife-private/design-system'` |
| `<input type="text">` | `<TextField>` | `import { TextField } from '@yulife-private/design-system'` |
| `<input type="checkbox">` | `<CheckBox>` | `import { CheckBox } from '@yulife-private/design-system'` |
| `<input type="checkbox">` toggle | `<Switch>` | `import { Switch } from '@yulife-private/design-system'` |
| `<input type="radio">` | `<Radio>` | `import { Radio } from '@yulife-private/design-system'` |
| `<img>` | `<Image>` | `import { Image } from '@yulife-private/design-system'` |
| Elevated card `<div>` | `<Card>` | `import { Card } from '@yulife-private/design-system'` |
| Panel with header `<div>` | `<Panel>` | `import { Panel } from '@yulife-private/design-system'` |
| Tab navigation bar | `<LeaderboardNavigation>` | `import { LeaderboardNavigation } from '@yulife-private/design-system'` |

---

## Component reference

### Box — layout primitive

Use `Box` as the primary layout primitive for all structural layout. It replaces raw `<div>` elements and provides shorthand props that map directly to CSS properties.

#### Props

| Prop | Type | Maps to |
|------|------|---------|
| `p` | number | padding |
| `pt`, `pb`, `pl`, `pr` | number | padding-top/bottom/left/right |
| `px`, `ph` | number | padding-inline |
| `py`, `pv` | number | padding-block |
| `m` | number | margin |
| `mt`, `mb`, `ml`, `mr` | number | margin-top/bottom/left/right |
| `mx`, `mh` | number | margin-inline |
| `my`, `mv` | number | margin-block |
| `flex` | number | flex |
| `flexGrow` | number | flex-grow |
| `flexDirection` | string | flex-direction |
| `alignItems` | string | align-items |
| `justifyContent` | string | justify-content |
| `gap` | number | gap |
| `w`, `width` | number/string | width |
| `h`, `height` | number/string | height |
| `bg` | string | background-color |
| `br` | number | border-radius |
| `opacity` | number | opacity |
| `overflow` | string | overflow |
| `position` | string | position |
| `display` | string | display |
| `center` | boolean | justify-content: center + align-items: center |
| `size` | number | width + height (equal) |
| `rounded` | boolean | border-radius: 9999px |
| `withBorder` | string | 1px solid border with given colour |
| `as` | string | HTML element tag (div, section, article, etc.) |

Numeric values are converted to `px` automatically. Non-numeric values (colours, flex values) are passed as-is.

#### Examples

```tsx
import { Box, Text, Colours } from '@yulife-private/design-system'

{/* Basic layout with padding and gap */}
<Box p={16} gap={12} flexDirection="column">
  <Text type="h3">Title</Text>
  <Text type="b2">Content here</Text>
</Box>

{/* Horizontal row, centered */}
<Box flexDirection="row" alignItems="center" gap={8}>
  <Avatar size={32} name="John" />
  <Text type="l1b">John Doe</Text>
</Box>

{/* Coloured background with border radius */}
<Box bg={Colours.primary.p20} br={12} p={16}>
  <Text type="b2">Highlighted content</Text>
</Box>

{/* Fixed size centered container */}
<Box size={64} center rounded bg={Colours.primary.p50}>
  <Icon.Heart size={24} color={Colours.primary.p600} />
</Box>

{/* Using semantic HTML element */}
<Box as="section" py={24} gap={16} flexDirection="column">
  <Text type="h2" as="h2">Section Title</Text>
</Box>
```

#### Rules

- Always use `Box` over raw `<div>` for layout
- Numeric props are in pixels — use the spacing scale (4, 8, 12, 16, 20, 24, 32...)
- Use `center` instead of manually setting `justifyContent` + `alignItems`
- Use `size` for equal width/height squares
- Use `rounded` for circular shapes (avatars, icon containers)
- Use `withBorder` for quick 1px solid borders

---

### Text — all text rendering

Use `Text` for ALL text rendering. Never use raw `<span>`, `<p>`, or heading elements directly. The `type` prop controls the entire typographic style.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | TemplateTextType | `"b2"` | Typography preset (h1, h2, h3, b1, b2, l1, l2, etc.) |
| `color` | string | inherited | Text colour |
| `align` | `"left" \| "center" \| "right"` | `"left"` | Text alignment |
| `as` | HTML element | auto-detected | Override the rendered HTML element |
| `numberOfLines` | number | — | Clamp text to N lines with ellipsis |
| `style` | CSSProperties | — | Style overrides |

#### Usage

```tsx
import { Text, Colours } from '@yulife-private/design-system'

{/* Headings */}
<Text type="h1">Page Title</Text>
<Text type="h2">Section Heading</Text>
<Text type="h3">Subsection</Text>

{/* Body text */}
<Text type="b1">Large intro paragraph</Text>
<Text type="b2">Default body text</Text>
<Text type="b2b">Bold body emphasis</Text>

{/* Labels and captions */}
<Text type="l1" color={Colours.neutral.n700}>Form label</Text>
<Text type="l2" color={Colours.neutral.n600}>Caption text</Text>

{/* Line clamping */}
<Text type="b2" numberOfLines={2}>
  This text will be clamped to 2 lines with an ellipsis if it overflows...
</Text>

{/* Custom element */}
<Text type="h1" as="h1">Semantic H1</Text>
<Text type="l1" as="label">Form Label</Text>
```

#### Element mapping

By default, `Text` infers the HTML element from the type:

- `h1`, `h2`, `h3` → `<h1>`, `<h2>`, `<h3>`
- `b1`, `b1b`, `b2`, `b2b` → `<p>`
- All others → `<span>`

Override with the `as` prop when you need specific semantics.

#### Rules

- Always specify `type` — relying on the default (`b2`) is fine for body text
- Colour is a separate concern — use the `color` prop, not CSS
- Never set `font-size`, `font-family`, or `font-weight` manually
- Use `numberOfLines` for truncation instead of CSS overflow hacks
- For emphasis within text, use the bold variant (`b2b` instead of `b2`)

---

### Button — primary action (Figma-canonical)

Use `Button` for all interactive actions — form submissions, navigation triggers, confirmations. This is the **canonical** implementation from the Journey design system (Figma node 12783:985), merged from `~/Projects/design-system`.

#### API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | — | Button label (required) |
| `colour` | `"Primary" \| "Secondary" \| "Success" \| "Warning" \| "Error" \| "Info"` | `"Primary"` | Colour scheme. Status colours are flat (for InlineBanner CTAs). |
| `variant` | `"Solid" \| "Outline" \| "Text"` | `"Solid"` | Visual style |
| `size` | `"Large" \| "Small"` | `"Large"` | Large = 48px tall, 224px wide; Small = content-sized |
| `disabled` | boolean | `false` | Disable interactions and apply muted styling |
| `leadingIcon` | ReactNode | — | Icon before label |
| `trailingIcon` | ReactNode | — | Icon after label |
| `onClick` | function | — | Click handler |
| `style` | CSSProperties | — | Inline overrides (e.g. `width: "100%"` for full-bleed CTAs) |

Use `ButtonGroup` to stack or row-align buttons, with optional `pinned` gradient for footer overlays in templates.

#### Variant decision tree

```
┌─ "What button style should I use?"
│
├─ Main call-to-action (one per screen)?
│  └─ colour="Primary" variant="Solid"
│
├─ Secondary action alongside a primary?
│  └─ colour="Primary" variant="Outline" or colour="Secondary" variant="Solid"
│
├─ Tertiary / low-emphasis action?
│  └─ variant="Text"
│
└─ InlineBanner action?
   └─ colour="Success|Warning|Error|Info" size="Small"
```

#### Examples

```tsx
import { Button, ButtonGroup } from '@yulife-private/design-system'
import { Icon, CheckIcon } from '@yulife-private/design-system/icons'

{/* Primary CTA */}
<Button colour="Primary" variant="Solid">Join challenge</Button>

{/* Secondary outline */}
<Button colour="Primary" variant="Outline">Cancel</Button>

{/* Full-width in template footer */}
<Button style={{ width: "100%" }}>Continue</Button>

{/* Pinned footer group */}
<ButtonGroup pinned direction="vertical">
  <Button>Primary action</Button>
  <Button colour="Secondary">Secondary</Button>
</ButtonGroup>

{/* With icon */}
<Button leadingIcon={<Icon svg={CheckIcon} size={16} color="#FFFFFF" accessibilityLabel="" />}>
  Confirm
</Button>
```

#### Rules

- Only ONE Primary Solid button per visible section
- Primary Solid uses press-down animation (4px shadow travel) — do not override with custom shadows
- Status colour buttons (Success/Warning/Error/Info) are always flat — no shadow
- Use `ButtonGroup` with `pinned` inside `SinglePageTemplate` or `ModalTemplate` footers

#### Deprecated API (removed)

The previous `variant="primary"`, `SecondaryButton`, `TertiaryButton`, `LinkButton`, and `isLoading` props were replaced by the Figma-canonical API above. See `guidelines/merge-manifest.json`.
- Use `isLoading` instead of swapping text — it preserves button width
- Do NOT use variant names that don't exist — only `"primary"`, `"secondary"`, `"tertiary"`, `"link"`
- Icons in buttons should be 16px

---

### Card — elevated surface

Use `Card` for any elevated content surface that needs to stand out from the page background. Cards are the primary container for grouped content.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | number | 16 | Inner padding in px |
| `borderRadius` | number | 12 | Corner radius in px |
| `backgroundColor` | string | white | Background colour |
| `shadow` | boolean | true | Show box shadow |
| `border` | boolean | false | Show border |
| `style` | CSSProperties | — | Style overrides |

#### Examples

```tsx
import { Card, Text, Box, Colours } from '@yulife-private/design-system'

{/* Default card */}
<Card>
  <Text type="b2b">Card content</Text>
</Card>

{/* Card with more padding */}
<Card padding={24}>
  <Box gap={12} flexDirection="column">
    <Text type="h3">Card Title</Text>
    <Text type="b2">Card description text goes here.</Text>
  </Box>
</Card>

{/* Flat card (no shadow, with border) */}
<Card shadow={false} border>
  <Text type="l1">Subtle card variant</Text>
</Card>
```

---

### Panel — card with title + close

Use `Panel` for overlay-style cards that have a title and optional close button. Common for modals, bottom sheets, and floating content.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | — | Header title text |
| `onClose` | function | — | Close button handler (shows X button) |
| `padding` | number | 16 | Inner padding in px |
| `backgroundColor` | string | white | Background colour |
| `style` | CSSProperties | — | Style overrides |

#### Examples

```tsx
import { Panel, Text, Button, Box } from '@yulife-private/design-system'

{/* Panel with title and close */}
<Panel title="Confirm Action" onClose={handleClose}>
  <Text type="b2">Are you sure you want to proceed?</Text>
  <Box flexDirection="row" gap={12} mt={16} justifyContent="flex-end">
    <SecondaryButton label="Cancel" onClick={handleClose} />
    <Button label="Confirm" onClick={handleConfirm} />
  </Box>
</Panel>

{/* Panel without title */}
<Panel onClose={handleDismiss} padding={24}>
  <Text type="b1b" align="center">Welcome!</Text>
</Panel>
```

---

### Avatar — user profile display

Use `Avatar` for displaying user profile images or initials. Always circular.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | — | Image URL |
| `name` | string | — | User name (for initials fallback) |
| `size` | number | 40 | Diameter in px |
| `backgroundColor` | string | primary.p50 | Fallback background |
| `textColor` | string | primary.p600 | Initials colour |

#### Examples

```tsx
import { Avatar, Box, Text } from '@yulife-private/design-system'

{/* With image */}
<Avatar src="https://example.com/photo.jpg" name="Jane Smith" size={48} />

{/* Initials fallback */}
<Avatar name="John Doe" size={40} />

{/* In a list item */}
<Box flexDirection="row" alignItems="center" gap={12}>
  <Avatar name="Alice" size={32} />
  <Text type="b2">Alice Johnson</Text>
</Box>
```

---

### Toast — status notification

Use `Toast` for brief status notifications that auto-dismiss.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | string | required | Notification text |
| `variant` | `"success" \| "error" \| "warning" \| "info"` | `"info"` | Visual style |
| `visible` | boolean | true | Show/hide |
| `duration` | number | 4000 | Auto-dismiss time in ms (0 = persist) |
| `onDismiss` | function | — | Called on dismiss (shows X button) |
| `icon` | ReactNode | — | Leading icon |

#### Examples

```tsx
import { Toast } from '@yulife-private/design-system'

<Toast message="Changes saved!" variant="success" />
<Toast message="Something went wrong" variant="error" onDismiss={handleDismiss} />
<Toast message="Your session expires soon" variant="warning" duration={6000} />
```

---

### Card / Panel / Avatar / Toast — rules

- Cards are the default elevated surface — use them over plain `Box` with shadow
- Panel is for overlay/modal contexts with a dismissible header
- Avatar always shows initials when no `src` is provided — never shows empty
- Toast auto-dismisses in 4 seconds by default — extend for important messages
- Only one Toast should be visible at a time

---

### Icon — SVG icons

Use icon components for all vector graphics in the UI. Icons are SVG-based and accept `size` and `color` props.

#### Available icons

| Icon | Component | Usage |
|------|-----------|-------|
| Heart | `HeartIcon` | Favourites, likes, health |
| Search | `SearchIcon` | Search actions |
| Chevron Right | `ChevronRightIcon` | Navigation forward, disclosure |
| Chevron Left | `ChevronLeftIcon` | Navigation back |
| Close | `CloseIcon` | Dismiss, close |
| Check | `CheckIcon` | Completion, success |
| Star | `StarIcon` | Ratings, rewards |
| Info | `InfoIcon` | Information, tooltips |

All icons are also available via the `Icon` namespace:

```tsx
import { Icon } from '@yulife-private/design-system'

<Icon.Heart size={24} />
<Icon.Search size={20} color="#333" />
<Icon.Close size={16} />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | number | 24 | Width and height in pixels |
| `color` | string | `"currentColor"` | Stroke/fill colour |

Plus all standard SVG element attributes.

#### Examples

```tsx
import { Icon, HeartIcon, Colours, Box } from '@yulife-private/design-system'

{/* Default — inherits text colour */}
<HeartIcon />

{/* Custom size and colour */}
<Icon.Star size={16} color={Colours.primary.p600} />

{/* In a button */}
<Button label="Search" leftIcon={<Icon.Search size={16} />} />

{/* Icon container */}
<Box size={40} center rounded bg={Colours.primary.p20}>
  <Icon.Heart size={20} color={Colours.primary.p600} />
</Box>
```

#### Rules

- Default size is `24px` — use `16px` inside buttons and small contexts
- Always use `currentColor` (the default) unless you need a specific colour
- Icons in buttons should be `16px`
- Icons in avatar/badge contexts should be `20-24px`
- Do NOT use inline SVG — always use the icon components
- Do NOT guess icon names — check the available icons table above

---

### Form inputs

#### TextField — text input

Use `TextField` for all single-line text entry. Provides label, error state, and helper text out of the box.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | — | Field label above input |
| `error` | string | — | Error message (turns border red) |
| `helperText` | string | — | Helper text below input |
| `placeholder` | string | — | Placeholder text |
| `value` | string | — | Controlled value |
| `onChange` | function | — | Change handler |
| `disabled` | boolean | false | Disable input |
| `containerStyle` | CSSProperties | — | Wrapper style |
| `inputStyle` | CSSProperties | — | Input element style |

States: **Inactive** (light grey border), **Focused** (dark border), **Filled** (medium grey border), **Error** (red border + red label + error message).

```tsx
import { TextField } from '@yulife-private/design-system'

<TextField
  label="Email address"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
/>
```

#### CheckBox — boolean form field

Use `CheckBox` for boolean selections within forms where a label is needed.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | — | Label text |
| `checked` | boolean | — | Checked state |
| `onChange` | function | — | Change handler |
| `size` | number | 20 | Checkbox size in px |
| `activeColor` | string | primary.p600 | Checked background colour |
| `disabled` | boolean | false | Disable checkbox |

```tsx
import { CheckBox } from '@yulife-private/design-system'

<CheckBox
  label="I agree to the terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
```

#### Switch — on/off toggle

Use `Switch` for on/off toggles, typically in settings screens. Prefer `CheckBox` in forms.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | — | Label text |
| `checked` | boolean | — | On/off state |
| `onChange` | function | — | Change handler |
| `size` | `"small" \| "medium"` | `"medium"` | Toggle size |
| `activeColor` | string | primary.p600 | Active track colour |
| `disabled` | boolean | false | Disable toggle |

```tsx
import { Switch } from '@yulife-private/design-system'

<Switch
  label="Push notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

#### Radio — exclusive choice

Use `Radio` for mutually exclusive selections within a group.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | — | Label text |
| `name` | string | — | Radio group name |
| `value` | string | — | Radio value |
| `checked` | boolean | — | Selected state |
| `onChange` | function | — | Change handler |
| `size` | number | 20 | Radio size in px |
| `activeColor` | string | primary.p600 | Selected accent colour |

```tsx
import { Radio, Box } from '@yulife-private/design-system'

<Box gap={8} flexDirection="column">
  <Radio name="plan" value="free" label="Free plan" checked={plan === "free"} onChange={handleChange} />
  <Radio name="plan" value="pro" label="Pro plan" checked={plan === "pro"} onChange={handleChange} />
</Box>
```

#### Input selection decision tree

```
┌─ "How should the user provide input?"
│
├─ Freeform text (short)?
│  └─ TextField
│
├─ Boolean on/off (in a form)?
│  └─ CheckBox
│
├─ Boolean on/off (settings toggle)?
│  └─ Switch
│
└─ Choose one from several options?
   └─ Radio (one per option, same `name`)
```

#### Input rules

- Always include a `label` — do not use inputs without labels
- Use `error` prop on TextField for validation — do not style errors manually
- Group Radio buttons with the same `name` prop
- Prefer Switch for settings, CheckBox for forms
- Active/selected colour defaults to brand pink — override only for world themes

---

### LeaderboardNavigation — tab navigation for leaderboards

Use `LeaderboardNavigation` for any tab bar that switches between different leaderboard views (e.g. Friends / Company / Global). It renders a horizontal tab row with an active pink underline indicator.

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tabs` | `ILeaderboardNavigationTab[]` | Yes | Array of tab definitions |
| `activeTab` | string | Yes | `key` of the currently selected tab |
| `onTabChange` | `(key: string) => void` | Yes | Called when user taps a tab |
| `style` | CSSProperties | No | Style override for the container |

**ILeaderboardNavigationTab**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes | Unique identifier for the tab |
| `label` | string | Yes | Display label |
| `count` | number | No | Optional count shown below the label |

#### Example

```tsx
import { useState } from 'react'
import { Box, LeaderboardNavigation } from '@yulife-private/design-system'

export default function LeaderboardScreen() {
  const [activeTab, setActiveTab] = useState('friends')

  return (
    <Box flexDirection="column" flex={1}>
      <LeaderboardNavigation
        tabs={[
          { key: 'friends', label: 'Friends', count: 42 },
          { key: 'company', label: 'Company', count: 158 },
          { key: 'global', label: 'Global' },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Box flex={1} p={16}>
        {activeTab === 'friends' && <FriendsLeaderboard />}
        {activeTab === 'company' && <CompanyLeaderboard />}
        {activeTab === 'global' && <GlobalLeaderboard />}
      </Box>
    </Box>
  )
}
```

#### Visual behaviour

- Active tab: bold label + pink underline (`Colours.primary.p600`)
- Inactive tab: regular label + grey text (`Colours.neutral.n700`)
- Each tab takes equal width (flex: 1)
- Optional `count` appears below the label in smaller text

#### Rules

- Always manage `activeTab` state in the parent component
- Tab `key` values must be unique within the set
- Minimum 2 tabs, maximum 5 tabs recommended
- Do NOT nest `LeaderboardNavigation` inside a `Card` — it sits at the top of a screen or section, flush against the background

### Loading — spinner
```tsx
import { Loading } from '@yulife-private/design-system'
<Loading size={32} color={Colours.primary.p600} />
```

### ProgressBar — progress indicator
```tsx
import { ProgressBar } from '@yulife-private/design-system'
<ProgressBar progress={0.65} />   // 0.0–1.0
```

### SearchInputWithIcon — pill search field
```tsx
import { SearchInputWithIcon } from '@yulife-private/design-system'
<SearchInputWithIcon placeholder="Search challenges" value={q} onChange={setQ} />
```

### SelectInput — dropdown selector
```tsx
import { SelectInput } from '@yulife-private/design-system'
<SelectInput
  label="Country"
  placeholder="Select country"
  options={[{ label: 'United Kingdom', value: 'uk' }, { label: 'USA', value: 'us' }]}
  value={country}
  onChange={setCountry}
  errorMessage={countryError}
/>
```

### SliderInput — range slider
```tsx
import { SliderInput } from '@yulife-private/design-system'
<SliderInput value={score} min={0} max={10} onChange={setScore} leftLabel="Low" rightLabel="High" />
```

### ShortCodeInput — PIN / OTP input
```tsx
import { ShortCodeInput } from '@yulife-private/design-system'
// Renders a row of individual character boxes driven by a hidden input
<ShortCodeInput value={code} onChange={setCode} onSubmit={handleSubmit} length={6} />
```

### ChipList — horizontal chip/tag selector
```tsx
import { ChipList } from '@yulife-private/design-system'
<ChipList
  chips={[
    { value: 'steps', label: 'Steps', isSelected: true, onPress: handleSelect },
    { value: 'sleep', label: 'Sleep', isSelected: false, onPress: handleSelect },
  ]}
/>
```

### Chip — single selectable tag
```tsx
import { Chip } from '@yulife-private/design-system'
<Chip value="steps" label="Steps" isSelected onPress={handlePress} />
```

### StarRating — star rating display
```tsx
import { StarRating } from '@yulife-private/design-system'
<StarRating totalStars={5} activeStars={3} />
```

### ArrowButton — circular arrow button
```tsx
import { ArrowButton } from '@yulife-private/design-system'
// intent: "primary" (pink filled) | "secondary" (outline) | "transparent"
// direction: "right" | "left" | "up" | "down"
<ArrowButton intent="primary" direction="right" size={40} onClick={handleNext} />
```

### ActionButton — icon + label row with arrow
```tsx
import { ActionButton } from '@yulife-private/design-system'
<ActionButton icon={<Icon.Heart size={24} />} label="My Rewards" onPress={handlePress} />
```

### BoxOption — selectable card option
```tsx
import { BoxOption, Text, Colours } from '@yulife-private/design-system'
// Renders a pressable card that highlights when isSelected
<BoxOption isSelected={selected === 'a'} onPress={() => setSelected('a')}>
  <Text type="b2b">Option A</Text>
</BoxOption>
```

### HeadingAndCopy — title + body text pair
```tsx
import { HeadingAndCopy } from '@yulife-private/design-system'
<HeadingAndCopy title="Why track steps?" titleType="h3" body="Walking improves your wellbeing score daily." />
```

### Counter — animated number display
```tsx
import { Counter } from '@yulife-private/design-system'
<Counter value={1234} type="bigYuCoin" textAfterValue=" YuCoins" color={Colours.primary.p600} />
```

### Hyperlink — inline text link
```tsx
import { Hyperlink } from '@yulife-private/design-system'
<Hyperlink title="Terms and conditions" url="https://yulife.com/terms" />
<Hyperlink title="Contact us" onPress={handleContact} />
```

### InfoCard — icon + title + description row
```tsx
import { InfoCard, Icon } from '@yulife-private/design-system'
<InfoCard
  icon={<Icon.Info size={24} color={Colours.status.in300} />}
  title="Did you know?"
  description="You earn YuCoins for every 1,000 steps you take."
/>
```

### SkeletonRow — loading placeholder row
```tsx
import { SkeletonRow } from '@yulife-private/design-system'
// Shows a pulsing avatar + bar placeholder
<SkeletonRow width={160} />
```

### HintPopup — informational popup with button
```tsx
import { HintPopup } from '@yulife-private/design-system'
<HintPopup
  title="Streak bonus"
  description="Complete 5 days in a row to earn a bonus multiplier."
  buttonLabel="Got it"
  onClose={handleClose}
/>
```

### LeaderboardNavigation — tab bar for leaderboards
```tsx
import { LeaderboardNavigation } from '@yulife-private/design-system'
<LeaderboardNavigation
  tabs={[{ key: 'friends', label: 'Friends', count: 42 }, { key: 'company', label: 'Company' }]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

### SettingsHeader — section header for settings screens
```tsx
import { SettingsHeader } from '@yulife-private/design-system'
// Renders an uppercase section divider band
<SettingsHeader title="Account" />
```

### WeekDays — week day tracker row
```tsx
import { WeekDays } from '@yulife-private/design-system'
// activeDays: array of 0-indexed day numbers (0=Mon, 6=Sun)
<WeekDays activeDays={[0, 2, 4]} />
```

---

## Organisms

Organisms are complex, composed UI patterns built from atoms and molecules. Each organism is grouped by purpose in Storybook under `Feedback`, `Inputs`, `Layout`, `Media`, or `Navigation`.

ALL organisms are imported from `@yulife-private/design-system`. Do NOT use the raw React Native originals.

---

### Achievements

#### AchievementCard
Full-bleed card (160 × ~220px) with a reward icon, name, rarity description, optional point count, and a status badge.

| Prop | Type | Notes |
|------|------|-------|
| `name` | `string` | Achievement name |
| `description` | `string` | Rarity or subtitle |
| `icon` | `{ uri?: string; id: string }` | Reward artwork |
| `status` | `"locked" \| "unlocked" \| "equipped"` | Default `"unlocked"` |
| `points` | `number?` | Hidden when omitted |
| `onPress` | `() => void` | Optional press handler |

#### AchievementExtraInfo
Bordered list of stat rows, each showing an icon + label on the left and a value on the right.

| Prop | Type |
|------|------|
| `items` | `IAchievementExtraInfoItem[]` |

`IAchievementExtraInfoItem`: `{ title: string; description: string; icon: { uri?: string; id: string } }`

---

### Activity

#### ActivityHistoryDay
Full-width collapsible day card with a header row (date, level, YuCoin total) and grouped activity sub-rows with star ratings.

| Prop | Type |
|------|------|
| `title` | `string` — date label |
| `level` | `string` — e.g. `"Level 434"` |
| `yucoin` | `string` — total coins earned |
| `leftIcon` | `{ uri?: string; id: string }` |
| `rightIcon?` | `{ uri?: string; id: string }` |
| `historyItems` | `IActivityHistoryGroup[]` |

`IActivityHistoryGroup`: `{ title: string; activityItems: IActivityHistoryItem[] }`
`IActivityHistoryItem`: `{ title; yucoin; stars?; leftIcon; rightIcon? }`

#### ActivityPanel
Compact card showing an activity type, milestone target, and coin reward. Highlights with pink border when `isPoweredUp`.

| Prop | Type |
|------|------|
| `title` | `string` |
| `milestone` | `string` |
| `rewardText` | `string` |
| `icon` | `{ uri?: string; id: string }` |
| `isPoweredUp?` | `boolean` |

---

### Media Player

#### AvPlayerDescription
Rich description panel for audio/video content: title, subtitle, duration, tag pill, stars, YuCoin reward, and body text.

| Prop | Type |
|------|------|
| `title` | `string` |
| `subtitle?` | `string` |
| `description` | `string` |
| `duration?` | `number` — seconds |
| `stars?` | `number` — 0–5 |
| `yuCoin` | `number` |
| `logo` | `string` — image URL |
| `tag?` | `string` |

#### AvPlayerProgressBar
Thin 6px track (full-width) showing playback position.

| Prop | Type | Default |
|------|------|---------|
| `currentProgress` | `number` — seconds elapsed | — |
| `duration` | `number` — total seconds | — |
| `fillColor?` | `string` | `Colours.primary.p600` |

#### AvPlayerTimer
Displays elapsed or remaining time as `mm:ss`.

| Prop | Type |
|------|------|
| `time` | `number` — milliseconds |
| `colour?` | `string` |
| `opacity?` | `number` — default `1` |

---

### Battle Pass

#### BattlePassHeader
Full-width card with a background image, season title, description, a progress bar, and an optional Wallet button.

| Prop | Type |
|------|------|
| `title` | `string` |
| `description` | `string` |
| `backgroundImage?` | `string` — image URL |
| `textColor?` | `string` — default white |
| `progressStatus` | `IBattlePassProgressBarStatus` |
| `onPressWallet?` | `() => void` |

`IBattlePassProgressBarStatus`: `{ level; step; steps; fillColor?; backgroundColor?; icon? }`

#### BattlePassListItem
Fixed-width (130px) reward tile with coloured background, position label, icon, optional title, and a CTA strip (Claim / Claimed).

| Prop | Type |
|------|------|
| `position` | `number` |
| `title?` | `string` |
| `icon` | `{ uri?: string; width?: number; height?: number }` |
| `backgroundColour` | `string` |
| `titleColour?` | `string` |
| `status?` | `"completed" \| "claimed" \| "pending" \| null` |
| `onPress?` | `() => void` |
| `buttonLabel?` | `string` |

#### BattlePassProgressBar
Horizontal progress track with a numbered level bubble at the right end.

| Prop | Type | Default |
|------|------|---------|
| `level` | `number` | — |
| `step` | `number` | — |
| `steps` | `number` | — |
| `fillColor?` | `string` | `Colours.primary.p600` |
| `backgroundColor?` | `string` | `"#EFF0FA"` |
| `icon?` | `string` | — |

---

### Lists & Rows

#### CouponListItem
Pressable row with a square logo, title, and description.

| Prop | Type |
|------|------|
| `title` | `string` |
| `description` | `string` |
| `icon` | `string` — image URL |
| `onPress?` | `() => void` |

#### DonationListItem
Row with a square image, title, description, stacked avatars, YuCoin count, and a Donate button.

| Prop | Type |
|------|------|
| `id?` | `string` |
| `title` | `string` |
| `description?` | `string` |
| `yuCoin` | `number` |
| `image` | `{ uri?: string }` |
| `onSubmit?` | `(id: string, amount: number) => void` |
| `avatarUris?` | `string[]` |

#### InboxMessageItem
Full-width notification row with image, optional badge overlay, category label, message preview, timestamp, and an unread dot.

| Prop | Type |
|------|------|
| `title` | `string` |
| `subtitle` | `string` |
| `timestamp` | `string` |
| `imageSource?` | `string` |
| `badgeSource?` | `string \| null` |
| `category?` | `string` |
| `showNotificationDot?` | `boolean` |
| `onPress?` | `() => void` |

#### ListItem
Flexible row for leaderboard rankings or search results: avatar, name, optional position badge, and score or chevron.

| Prop | Type | Default |
|------|------|---------|
| `name` | `string` | — |
| `uri?` | `string` | — |
| `type?` | `"leaderboard" \| "search"` | `"search"` |
| `theme?` | `"active" \| "default"` | `"default"` |
| `position?` | `number` | — |
| `score?` | `string` | — |
| `onPress?` | `() => void` | — |

#### RecentRewardCard
Square pressable card displaying a reward image.

| Prop | Type | Default |
|------|------|---------|
| `imageUrl` | `string` | — |
| `size?` | `number` | `100` |
| `onPress?` | `() => void` | — |

#### RewardSearchListItem
Compact search result row with a thumbnail, label, and chevron.

| Prop | Type |
|------|------|
| `label` | `string` |
| `imageUrl?` | `string` |
| `onPress?` | `() => void` |

---

### Navigation & Layout

#### GenericHeading
Screen-level navigation header with a centred title and left/right icon buttons.

| Prop | Type | Default |
|------|------|---------|
| `heading?` | `string` | — |
| `leftIcon?` | `"back" \| "menu" \| "close"` | `"back"` |
| `rightIcon?` | `"close" \| "info" \| "share"` | `"close"` |
| `onLeftIconPress?` | `() => void` | — |
| `onRightIconPress?` | `() => void` | — |
| `color?` | `string` | `Colours.neutral.n900` |

#### Tabs
Horizontally scrollable tab bar that underlines the selected tab in `Colours.primary.p600`.

| Prop | Type | Default |
|------|------|---------|
| `list` | `ITab[]` | — |
| `defaultTab?` | `number` | `0` |
| `isLoading?` | `boolean` | `false` |

`ITab`: `{ name: string; icon?: ReactNode; onPress: () => void; testID?: string }`

---

### Misc

#### CodeAndLinkCopy
Card displaying a shareable code with a clipboard-copy button and a primary share CTA.

| Prop | Type |
|------|------|
| `title` | `string` |
| `code` | `string` |
| `buttonText` | `string` |
| `disclaimer?` | `string` |
| `onShare` | `() => void \| Promise<void>` |

#### GiftSendPrompt
Centred prompt card (gift icon, title, description, CTA) encouraging the user to send a reward.

| Prop | Type | Default |
|------|------|---------|
| `name` | `string` | — |
| `onPress` | `() => void` | — |
| `title?` | `string` | `"Send a gift"` |
| `description?` | `string` | auto-generated |
| `buttonLabel?` | `string` | `"Send gift"` |

#### HealthProviderItem
Pressable row for selecting a health provider (logo, name, recommended label, arrow).

| Prop | Type |
|------|------|
| `provider` | `string` |
| `label` | `string` |
| `isRecommended?` | `boolean` |
| `logoSrc?` | `string` |
| `onPress?` | `() => void` |

#### HealthProviderSelection
Expandable row with radio button; shows supported activity type chips when selected.

| Prop | Type |
|------|------|
| `provider` | `string` |
| `label` | `string` |
| `isSelected` | `boolean` |
| `isRecommended?` | `boolean` |
| `logoSrc?` | `string` |
| `supportedTypes?` | `string[]` |
| `onPress?` | `() => void` |

#### JoinLeaderboard
Centred panel with heading, description, and a full-width primary CTA to join the leaderboard.

| Prop | Type | Default |
|------|------|---------|
| `onPress` | `() => void` | — |
| `heading?` | `string` | `"Join the leaderboard"` |
| `description?` | `string` | default text |
| `buttonLabel?` | `string` | `"Join leaderboard"` |
