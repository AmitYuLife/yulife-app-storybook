# YuLife Storybook — Information Architecture

This document defines the **purpose-based information architecture (IA)** for the rebuilt YuLife Storybook. It replaces the legacy atomic-design sidebar (`atoms` / `molecules` / `organisms`) with flat, LLM-friendly categories grouped by **what a component does**, not how it is composed.

---

## Goals

1. **Human discoverability** — designers and engineers can find components by intent (“I need a form control”, “I need a loading state”).
2. **LLM readability** — category names and story titles map directly to usage; an LLM can infer the right import without knowing internal folder structure.
3. **Flat hierarchy** — at most two sidebar levels: `{Category}/{ComponentName}`. No nested atomic tiers.
4. **Stable public names** — Storybook titles use the **exported component name**, not the source file or legacy folder name.

---

## Sidebar structure

```
Storybook
├── Welcome           — landing page and changelog
├── Foundations       (7)   — design tokens (colours, typography, spacing, radii, elevation, animation)
├── Templates         (4)   — full-screen layout shells with hero/children/footer slots
├── Layout            (20+) — structure, surfaces, composed content blocks
├── Typography        (6+)  — text rendering and copy patterns
├── Inputs            (15+) — interactive controls and form fields
├── Media             (6+)  — images, icons, avatars, AV player UI
├── Navigation        (12+) — headers, tabs, list rows that move the user
├── Feedback          (12+) — status, progress, loading, notifications
└── Screens           — app screens + Examples/ reference compositions
```

**Total:** 56+ legacy design-system components + ~20 merged from Journey design system + 4 templates + 9/128 app screen stories.

Suggested sidebar order: Welcome → Foundations → Templates → Screens → Inputs → Layout → Feedback → Media → Navigation → Typography.

**Screen backlog and priority tiers:** see `CLAUDE.md` § App Screen Stories. Inventory: `screens/screen-catalog.json`.

**Merge status:** Canonical components from `~/Projects/design-system` are tracked in `guidelines/merge-manifest.json`.

---

## Category definitions

### Foundations

**Purpose:** Design token reference — colours, typography, spacing, radii, elevation, animation, and iconography. Use when looking up token values or Figma-aligned naming.

| Story title | Source |
|---|---|
| `Foundations/Colours` | `src/tokens/colours.stories.tsx` |
| `Foundations/Typography` | `src/tokens/typography.stories.tsx` |
| `Foundations/Spacing` | `src/tokens/spacing.stories.tsx` |
| `Foundations/Radii` | `src/tokens/radii.stories.tsx` |
| `Foundations/Elevation` | `src/tokens/elevation.stories.tsx` |
| `Foundations/Animation` | `src/tokens/animation.stories.tsx` |
| `Foundations/Iconography/*` | `src/icons/*.stories.tsx` |

---

### Templates

**Purpose:** Reusable full-screen layout shells with slot-based composition (`hero`, `children`, `footer`). Use when building product pages — prefer `SinglePageTemplate` for generic pages.

| Story title | Export | Source path |
|---|---|---|
| `Templates/SinglePageTemplate` | `SinglePageTemplate` | `src/templates/single-page-template/` |
| `Templates/ModalTemplate` | `ModalTemplate` | `src/templates/modal-template/` |
| `Templates/YuCoinScreen` | `YuCoinScreen` | `src/templates/yu-coin-screen/` |
| `Templates/QuestScreen` | `QuestScreen` | `src/templates/quest-screen/` |

Reference compositions that demonstrate templates live under `Screens/Examples/` (not a separate Pages category).

---

## Category definitions (components)

### Layout

**Purpose:** Structural primitives and elevated/composed content surfaces. Use when building page scaffolding, cards, panels, or domain-specific content blocks that primarily **organise** other elements.

**Includes:**
- Layout primitives (`Box`, `Card`, `Panel`)
- Gamification / rewards layouts (achievements, battle pass, activity history)
- Share / invite / onboarding prompts that are card-shaped

**Does NOT include:** Interactive form controls (→ Inputs), list rows with navigation affordances (→ Navigation), or transient status UI (→ Feedback).

| Story title | Export | Source path |
|---|---|---|
| `Layout/AchievementCard` | `AchievementCard` | `src/components/organisms/achievement-card/` |
| `Layout/ActivityHistoryDay` | `ActivityHistoryDay` | `src/components/organisms/activity-history-day/` |
| `Layout/ActivityPanel` | `ActivityPanel` | `src/components/organisms/activity-panel/` |
| `Layout/BattlePassHeader` | `BattlePassHeader` | `src/components/organisms/battle-pass-header/` |
| `Layout/BattlePassListItem` | `BattlePassListItem` | `src/components/organisms/battle-pass-list-item/` |
| `Layout/Box` | `Box` | `src/components/box/` |
| `Layout/Card` | `Card` | `src/components/card/` |
| `Layout/CodeAndLinkCopy` | `CodeAndLinkCopy` | `src/components/organisms/code-and-link-copy/` |
| `Layout/GiftSendPrompt` | `GiftSendPrompt` | `src/components/organisms/gift-send-prompt/` |
| `Layout/JoinLeaderboard` | `JoinLeaderboard` | `src/components/organisms/join-leaderboard/` |
| `Layout/Panel` | `Panel` | `src/components/panel/` |
| `Layout/RecentRewardCard` | `RecentRewardCard` | `src/components/organisms/recent-reward-card/` |

---

### Typography

**Purpose:** All text rendering, inline links, and copy patterns. Use when the primary job is **displaying or formatting text**.

**Includes:** Headings, body text, counters, heading+body pairs, inline hyperlinks.

**Does NOT include:** Buttons or pressable controls (→ Inputs), icons (→ Media).

| Story title | Export | Source path |
|---|---|---|
| `Typography/Counter` | `Counter` | `src/components/counter/` |
| `Typography/HeadingAndCopy` | `HeadingAndCopy` | `src/components/heading-and-copy/` |
| `Typography/Hyperlink` | `Hyperlink` | `src/components/hyperlink/` |
| `Typography/Text` | `Text` | `src/components/text/` |

---

### Inputs

**Purpose:** User-initiated interaction and data entry. Use for buttons, toggles, form fields, selectors, and pressable option cards.

**Includes:**
- All button variants (`Button`, `SecondaryButton`, `TertiaryButton`, `LinkButton` — documented under `Inputs/Button`)
- Form controls (`TextField`, `CheckBox`, `Switch`, `Radio`, `SelectInput`, etc.)
- Search, chips, sliders, OTP inputs
- Health provider pickers (selection is the primary interaction)

**Does NOT include:** Read-only list rows (→ Navigation), progress/loading (→ Feedback).

| Story title | Export | Source path |
|---|---|---|
| `Inputs/ActionButton` | `ActionButton` | `src/components/action-button/` |
| `Inputs/ArrowButton` | `ArrowButton` | `src/components/arrow-button/` |
| `Inputs/BoxOption` | `BoxOption` | `src/components/box-option/` |
| `Inputs/Button` | `Button`, `SecondaryButton`, `TertiaryButton`, `LinkButton` | `src/components/button/` |
| `Inputs/CheckBox` | `CheckBox` | `src/components/checkbox/` |
| `Inputs/ChipList` | `ChipList`, `Chip` | `src/components/chip-list/` |
| `Inputs/HealthProviderItem` | `HealthProviderItem` | `src/components/organisms/health-provider-item/` |
| `Inputs/HealthProviderSelection` | `HealthProviderSelection` | `src/components/organisms/health-provider-selection/` |
| `Inputs/Radio` | `Radio` | `src/components/radio/` |
| `Inputs/SearchInputWithIcon` | `SearchInputWithIcon` | `src/components/search-input-with-icon/` |
| `Inputs/SelectInput` | `SelectInput` | `src/components/select-input/` |
| `Inputs/ShortCodeInput` | `ShortCodeInput` | `src/components/short-code-input/` |
| `Inputs/SliderInput` | `SliderInput` | `src/components/slider-input/` |
| `Inputs/Switch` | `Switch` | `src/components/switch/` |
| `Inputs/TextField` | `TextField` | `src/components/text-input/` |

> **Note:** `TextField` is exported as `TextField` but lives in `text-input/`. The story title uses the export name, not the folder name.

---

### Media

**Purpose:** Visual assets and AV player presentation. Use for images, icons, avatars, star ratings, and media metadata display.

**Does NOT include:** AV playback progress or timers (→ Feedback for progress; timer display stays here when it is purely presentational).

| Story title | Export | Source path |
|---|---|---|
| `Media/Avatar` | `Avatar` | `src/components/avatar/` |
| `Media/AvPlayerDescription` | `AvPlayerDescription` | `src/components/organisms/av-player-description/` |
| `Media/AvPlayerTimer` | `AvPlayerTimer` | `src/components/organisms/av-player-timer/` |
| `Media/Icon` | `Icon`, `HeartIcon`, `SearchIcon`, … | `src/components/icon/` |
| `Media/Image` | `Image` | `src/components/image/` |
| `Media/StarRating` | `StarRating` | `src/components/star-rating/` |

---

### Navigation

**Purpose:** Moving the user through the app — screen headers, tab bars, settings section dividers, and pressable list rows where **navigation or selection** is the primary action.

**Includes:** Generic screen heading, tabs, leaderboard tab bar, settings headers, coupon/donation/reward list rows, leaderboard/search list items.

**Does NOT include:** Form inputs (→ Inputs), static layout cards (→ Layout).

| Story title | Export | Source path |
|---|---|---|
| `Navigation/CouponListItem` | `CouponListItem` | `src/components/organisms/coupon-list-item/` |
| `Navigation/DonationListItem` | `DonationListItem` | `src/components/organisms/donation-list-item/` |
| `Navigation/GenericHeading` | `GenericHeading` | `src/components/organisms/generic-heading/` |
| `Navigation/LeaderboardNavigation` | `LeaderboardNavigation` | `src/components/leaderboard-navigation/` |
| `Navigation/ListItem` | `ListItem` | `src/components/organisms/list-item/` |
| `Navigation/RewardSearchListItem` | `RewardSearchListItem` | `src/components/organisms/reward-search-list-item/` |
| `Navigation/SettingsHeader` | `SettingsHeader` | `src/components/settings-header/` |
| `Navigation/Tabs` | `Tabs` | `src/components/organisms/tabs/` |
| `Navigation/WeekDays` | `WeekDays` | `src/components/week-days/` |

---

### Feedback

**Purpose:** Communicating system state — loading, progress, toasts, skeletons, informational cards, inbox notifications, and achievement metadata.

**Includes:** Spinners, progress bars, toasts, hint popups, skeleton placeholders, inbox message rows, info callouts.

**Does NOT include:** Primary navigation (→ Navigation), form validation on inputs (documented on the input story).

| Story title | Export | Source path |
|---|---|---|
| `Feedback/AchievementExtraInfo` | `AchievementExtraInfo` | `src/components/organisms/achievement-extra-info/` |
| `Feedback/AvPlayerProgressBar` | `AvPlayerProgressBar` | `src/components/organisms/av-player-progress-bar/` |
| `Feedback/BattlePassProgressBar` | `BattlePassProgressBar` | `src/components/organisms/battle-pass-progress-bar/` |
| `Feedback/HintPopup` | `HintPopup` | `src/components/hint-popup/` |
| `Feedback/InboxMessageItem` | `InboxMessageItem` | `src/components/organisms/inbox-message-item/` |
| `Feedback/InfoCard` | `InfoCard` | `src/components/info-card/` |
| `Feedback/Loading` | `Loading` | `src/components/loading/` |
| `Feedback/ProgressBar` | `ProgressBar` | `src/components/progress-bar/` |
| `Feedback/SkeletonRow` | `SkeletonRow` | `src/components/skeleton-row/` |
| `Feedback/Toast` | `Toast` | `src/components/toast/` |

---

### Screens

**Purpose:** Full-screen app views rendered from the main app codebase (`src/components/screens/`). These sit outside the design-system package and use a separate story root.

**Story location:** `screens/**/*.stories.tsx` (configured in `.storybook/main.ts`).

**Title format:** `Screens/{Domain}/{ScreenName}`

| Story title | Screen | Source path |
|---|---|---|
| `Screens/Auth/LoginEmail` | Login email entry | `src/components/screens/login/login-email/login-email.screen.tsx` |
| `Screens/Member/DailySteps` | Daily steps tab | `src/components/screens/member/daily-steps/daily-steps.screen.tsx` |
| `Screens/Member/Leaderboard` | Leaderboard tab | `src/components/screens/member/leaderboard/leaderboard.screen.tsx` |
| `Screens/Member/QuestMap` | Quest tab map | `src/components/containers/member/quests/quest-map/quest-map.screen.tsx` |
| `Screens/Member/Shopfront` | Rewards tab store | `src/components/screens/member/shopfront/shopfront.screen.tsx` |
| `Screens/Member/YuScreen` | YuScreen tab | `src/components/containers/member/yu/subcomponents/yu-screen-v5/yu-screen.tsx` |
| `Screens/System/GenericError` | Generic error | `src/components/screens/generic-error/generic-error.screen.tsx` |
| `Screens/System/NoAccess` | No access | `src/components/screens/no-access/no-access.screen.tsx` |
| `Screens/System/Offline` | Offline | `src/components/screens/offline/offline.screen.tsx` |

Screen stories set `parameters.screenStory: true` (via `createScreenMeta`) and render inside the mobile screen preview decorator.

**Pending screens:** 119 remaining — priority order in `CLAUDE.md` § App Screen Stories; full list in `screens/screen-catalog.json`.

---

## Story title conventions

Every story file **must** set:

```tsx
const meta: Meta<typeof ComponentName> = {
  title: "{Category}/{ComponentName}",
  component: ComponentName,
  tags: ["autodocs"],
  // ...
};
```

| Rule | Example |
|---|---|
| Category is PascalCase, singular concept | `Inputs`, not `input` or `FormControls` |
| Component segment matches the **primary export name** | `Inputs/TextField`, not `Inputs/TextInput` |
| No atomic-design prefixes | ❌ `Organisms/BattlePassHeader` → ✅ `Layout/BattlePassHeader` |
| No file-path segments | ❌ `Inputs/TextInput` → ✅ `Inputs/TextField` |
| Screens use three levels | `Screens/Auth/LoginEmail` |
| Variant exports share one story | `Button`, `SecondaryButton`, etc. → `Inputs/Button` |

---

## Category assignment decision tree

Use this when adding a new component:

```
What is the component's primary job?
│
├─ Design token or icon reference?
│  └─ Foundations
│
├─ Reusable full-screen layout shell with slots?
│  └─ Templates
│
├─ Full app screen?
│  └─ Screens/{Domain}/{Name}  (Examples/ for reference compositions)
│
├─ User enters or toggles data?
│  └─ Inputs
│
├─ User navigates or selects from a list row?
│  └─ Navigation
│
├─ Shows loading, progress, or system status?
│  └─ Feedback
│
├─ Displays text or copy?
│  └─ Typography
│
├─ Shows an image, icon, avatar, or media metadata?
│  └─ Media
│
└─ Structures or groups other content (card, panel, section)?
   └─ Layout
```

When a component spans categories, assign by **the reason a developer would search for it**. Example: `HealthProviderSelection` is filed under **Inputs** because the developer need is “pick a provider”, not “show a list”.

---

## Migration from legacy atomic design

The app source still uses `src/components/atoms|molecules|organisms/` path aliases during the transition. Storybook IA is **decoupled** from those folders.

| Legacy location | New Storybook category | Notes |
|---|---|---|
| `atoms/box` | Layout | Primitives by purpose, not size |
| `atoms/text`, `atoms/hyperlink` | Typography | |
| `atoms/button`, `atoms/checkbox`, form atoms | Inputs | |
| `atoms/icon`, `atoms/image`, `atoms/avatar` | Media | |
| `molecules/card`, `molecules/panel` | Layout | |
| `molecules/toast`, `molecules/loading` | Feedback | |
| `molecules/leaderboard-navigation`, headers | Navigation | |
| `organisms/*-list-item` (navigational) | Navigation | Coupon, donation, reward search |
| `organisms/*-card`, battle pass, activity | Layout | Composed content blocks |
| `organisms/av-player-progress-bar` | Feedback | Progress is status, not media |
| `components/screens/*` | Screens/{Domain}/* | Unchanged screen paths in app |

Physical source files in `packages/yulife-design-system` may still live under `organisms/` internally; only the **Storybook title** reflects the new IA.

---

## Story file locations

| Scope | Glob | Package / path |
|---|---|---|
| Design system components | `packages/yulife-design-system/src/**/*.stories.tsx` | `@yulife-private/design-system` |
| App screens | `screens/**/*.stories.tsx` | Main app (`src/components/screens/`) |

Stories are **co-located** with their component — never in a separate `stories/` directory.

---

## Required stories per component

| Story | When |
|---|---|
| `Default` | Always — canonical usage |
| `AllVariants` | Component has enum/variant props |
| `Disabled` | Supports `disabled` |
| `Loading` | Supports `isLoading` |
| `WithContent` | Has meaningful `children` or slots |
| `Playground` | Always — all controls exposed |

Screen stories additionally provide realistic mock data and document navigation context.

---

## LLM usage notes

When generating YuLife UI from this Storybook:

1. Look up the component by **category + name** in this document (e.g. `Inputs/Button`).
2. Read the co-located `*.stories.tsx` for props, constraints, and composition examples.
3. Import from `@yulife-private/design-system` — category names are not import paths.
4. Do not infer category from the `organisms/` source folder; use the Storybook title.
5. For full pages, check `Screens/` first, then compose from Layout + Inputs + Navigation + Feedback.

---

## Related docs

- [`overview.md`](./overview.md) — product character and reading order
- [`components.md`](./components.md) — props, examples, and HTML substitution table
- [`tokens.md`](./tokens.md) — design tokens
- [`setup.md`](./setup.md) — Storybook and package setup
