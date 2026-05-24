# Action Bar

The floating action bar is the primary navigation component for top-level app screens. It sits at the bottom of the viewport and gives users persistent access to the five main sections of the app.

**Figma reference:** [YuLife App Storybook — Action Bar](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=9509-3583)

---

## Anatomy

```
┌─────────────────────────────────────────┐  ← Outer wrapper (full width, 82px tall)
│  ┌───────────────────────────────────┐  │
│  │  [●]   [ ]   [ ]   [ ]   [ ]     │  │  ← Bar container (white, 58px, rounded, shadow)
│  │  YuCoin Quests  Yu  Leader Rewards│  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
         ↑ 24px bottom padding (safe area buffer)
```

Each **nav item** (48 × 42px) contains:

1. **Icon** — 24px icon from the iconography set, coloured by state.
2. **Notification dot** *(optional)* — 8px pink circle with a white border, positioned top-right of the icon.
3. **Label** — 10px Bariol Bold, centred below the icon, coloured by state.

---

## States

### Active

The item corresponding to the user's current screen. Icon and label render in **Primary pink** (`#E30D76`).

### Inactive

All other items. Icon and label render in **Ink Base** (`#5C5757`).

### Notification dot

A small pink circle overlaid on the top-right corner of the icon, indicating unread content or activity requiring attention. It does not replace the active/inactive colour — both states can carry a dot simultaneously.

---

## Usage guidelines

### Do

- **Always show all 5 items.** The action bar must present the full navigation set so users can orient themselves within the app.
- **Use on top-level screens only.** The action bar should be visible whenever the user is on a root tab destination.
- **Keep labels short.** Aim for ≤ 11 characters. The label truncates with an ellipsis beyond the 48px item width.
- **Set `activeId` to match the current route.** The component is stateless — the consuming screen is responsible for tracking and passing the active tab.
- **Clear notification dots on navigation.** Remove `showNotification` when the user visits that tab.

### Don't

- **Don't show the action bar inside nested views**, modals, sheets, or any screen that has a back action in the header.
- **Don't change the number of items.** The bar is designed for 5 items. Fewer items create large, uneven gaps; more items make labels unreadably small.
- **Don't use the active colour for anything other than the active tab.** Avoid pink icons elsewhere on the same screen to prevent confusion.
- **Don't add custom colours.** Always use the component's built-in active/inactive theming.

---

## Accessibility

| Concern | Implementation |
|---|---|
| Landmark | Rendered as `<nav aria-label="Main navigation">` |
| Active page | Active item has `aria-current="page"` |
| Icon labels | Each icon receives an `aria-label` via `accessibilityLabel` (falls back to `label`) |
| Notification dot | The dot `<span>` carries `role="status"` and `aria-label="notification"` |
| Keyboard navigation | Items are native `<button>` elements — fully keyboard accessible out of the box |

---

## API

```ts
interface ActionBarItem {
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  accessibilityLabel?: string;  // defaults to label
  showNotification?: boolean;   // default false
}

interface ActionBarProps {
  items: ActionBarItem[];
  activeId: string;
  onPress?: (id: string) => void;
  testID?: string;
}
```

---

## Code example

```tsx
import {
  TodaysYuCoinIcon,
  MapIcon,
  HeartIcon,
  TrophyIcon,
  ChestIcon,
} from "@/icons";
import { ActionBar } from "@/components/ActionBar";

const NAV_ITEMS = [
  { id: "yucoin",      icon: TodaysYuCoinIcon, label: "YuCoin"      },
  { id: "quests",      icon: MapIcon,          label: "Quests"      },
  { id: "yu",          icon: HeartIcon,        label: "Yu"          },
  { id: "leaderboard", icon: TrophyIcon,       label: "Leaderboard" },
  { id: "rewards",     icon: ChestIcon,        label: "Rewards",
    showNotification: hasUnreadRewards },
];

<ActionBar
  items={NAV_ITEMS}
  activeId={currentRoute}
  onPress={(id) => router.navigate(id)}
/>
```

---

## Token reference

| Property | Token | Value |
|---|---|---|
| Active colour | `colors.actionPrimaryHover` | `#E30D76` |
| Inactive colour | `palette.neutral600` | `#5C5757` |
| Bar background | `colors.bgBase` | `#FFFFFF` |
| Label font | `fontFamily.sans` + `fontSize["3xs"]` + `fontWeight.bold` | Bariol Bold 10px |
| Bar padding | `spacing[2]` | 8px |
| Bottom padding | `spacing[6]` | 24px |

> **Note on inactive colour:** `palette.neutral600` (`#5C5757`) is referenced directly because no semantic token covers this shade. `colors.textPrimary` (`neutral700`) is too dark and `colors.textSecondary` (`neutral500`) is too light. A future `colors.textMuted` semantic token would resolve this.
