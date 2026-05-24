# @yulife-private/design-system

YuLife Design System package for Figma Make.

## Overview

This package provides web-compatible React components and design tokens extracted from the YuLife mobile app design system. It is intended for use in Figma Make kits to enable AI-generated prototypes that match the YuLife brand.

## Installation

```bash
npm install @yulife-private/design-system
```

## Usage

```tsx
import '@yulife-private/design-system/styles.css'
import { Box, Text, Button, Card, Colours } from '@yulife-private/design-system'
```

## What's Included

### Components

**Atoms**: Box, Text, Icon, Image, Loading, ProgressBar, Radio

**Molecules**: Button (Primary, Secondary, Tertiary, Link), Avatar, Card, Panel, Switch, TextField, CheckBox, Toast

### Tokens

- **Colours**: Full YuLife colour palette as CSS custom properties and TypeScript constants
- **Typography**: Type scale (h1-h3, b1-b2, l1-l4) with Bariol font family
- **Spacing**: 4px-based scale as CSS custom properties

## Publishing

This package is published to the Figma private npm registry for the YuLife organization.

```bash
cd packages/yulife-design-system
npm run build
npm publish
```

See `.npmrc` for registry configuration. You need a `FIGMA_NPM_TOKEN` environment variable set.

## Guidelines

The `guidelines/` directory contains Make kit guidelines that teach Figma Make how to use this design system. These are included in the published package and should be added to your Make kit.

## Development

```bash
npm install
npm run build      # Build with Vite
npm run typecheck  # TypeScript validation
```
