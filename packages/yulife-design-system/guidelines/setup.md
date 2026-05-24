# Project Setup

## Step 1 — CSS import (REQUIRED)

The CSS import MUST be in your main entry file (e.g. `main.tsx` or `App.tsx`). Without it nothing will look correct.

```tsx
import '@yulife-private/design-system/styles.css'
```

## Step 2 — Component imports

```tsx
import {
  Box, Text, Button, SecondaryButton, Card, Panel,
  Avatar, TextField, CheckBox, Switch, Toast,
  Loading, ProgressBar, Icon, Colours,
} from '@yulife-private/design-system'
```

## Step 3 — Complete starter file

Copy this template as your starting point for any new page or screen:

```tsx
import '@yulife-private/design-system/styles.css'
import { Box, Text, Colours } from '@yulife-private/design-system'

export default function App() {
  return (
    <Box
      bg={Colours.neutral.n20}
      minHeight="100vh"
      p={16}
      gap={16}
      flexDirection="column"
    >
      {/* Page content here */}
    </Box>
  )
}
```

## Vite config

No special configuration is needed. Standard Vite + React setup works:

```tsx
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## Font loading

Bariol is the primary font. It is referenced in the CSS as `'Bariol', 'Nunito Sans', sans-serif`. Add Nunito Sans as a fallback via Google Fonts in your `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,700&display=swap" rel="stylesheet">
```

## Rules

- The CSS import goes ONCE at the top of `main.tsx` or `App.tsx` — not in every component file
- Do NOT add Tailwind or any other styling library — this package uses plain CSS custom properties
- Do NOT import from any other component library — use only `@yulife-private/design-system`
- `react` and `react-dom` ≥18 are required peer dependencies
