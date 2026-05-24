import React from "react";
import { Icon } from "../../icons";
import { colors, palette } from "../../tokens/colors";
import { fontFamily, fontSize, fontWeight } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";

// ─── Colour constants ─────────────────────────────────────────────────────────

/** Active nav item colour — Figma "Primary/100" (#E30D76). */
const COLOR_ACTIVE = colors.actionPrimaryHover;

/**
 * Inactive nav item colour — Figma "Ink/Base" (#5C5757).
 * palette.neutral600 is used directly because no semantic token covers this
 * shade; textPrimary (neutral700) is too dark and textSecondary (neutral500)
 * is too light. A future `colors.textMuted` token would resolve this.
 */
const COLOR_INACTIVE = palette.neutral600;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ActionBarItem {
  /** Unique identifier — used to determine the active tab. */
  id: string;
  /** SVGR React component from `@/icons`. */
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  /** Short label displayed beneath the icon. Keep to ~11 characters. */
  label: string;
  /**
   * Accessible name for the icon passed to `aria-label`.
   * Falls back to `label` when omitted.
   */
  accessibilityLabel?: string;
  /** When true, renders a notification dot on the top-right of the icon. */
  showNotification?: boolean;
}

export interface ActionBarProps {
  /** Ordered list of navigation items. Designed for 5 items. */
  items: ActionBarItem[];
  /** `id` of the currently active item. */
  activeId: string;
  /** Called with the item's `id` when the user presses a nav item. */
  onPress?: (id: string) => void;
  /** Test ID for automated testing. */
  testID?: string;
}

// ─── NavItem ──────────────────────────────────────────────────────────────────

interface NavItemProps {
  item: ActionBarItem;
  isActive: boolean;
  onPress?: (id: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, isActive, onPress }) => {
  const color = isActive ? COLOR_ACTIVE : COLOR_INACTIVE;

  return (
    <button
      onClick={() => onPress?.(item.id)}
      aria-current={isActive ? "page" : undefined}
      aria-label={item.accessibilityLabel ?? item.label}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 48,
        height: 42,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        color,
        gap: spacing[2],
        flexShrink: 0,
      }}
    >
      {/* Icon + optional notification dot */}
      <div style={{ position: "relative", flexShrink: 0, lineHeight: 0 }}>
        <Icon svg={item.icon} size={24} color={color} accessibilityLabel={item.accessibilityLabel ?? item.label} />
        {item.showNotification && (
          <span
            role="status"
            aria-label="notification"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 8,
              height: 8,
              borderRadius: radii.pill,
              backgroundColor: COLOR_ACTIVE,
              border: `1.5px solid ${colors.bgBase}`,
              boxSizing: "border-box",
            }}
          />
        )}
      </div>

      {/* Label */}
      <span
        style={{
          fontFamily: fontFamily.sans,
          fontSize: fontSize["3xs"],
          fontWeight: fontWeight.bold,
          lineHeight: `${fontSize["3xs"]}px`,
          color,
          textAlign: "center",
          width: 48,
          flexShrink: 0,
        }}
      >
        {item.label}
      </span>
    </button>
  );
};

// ─── ActionBar ────────────────────────────────────────────────────────────────

/**
 * Floating action bar — the primary navigation component for top-level app
 * screens. Sits at the bottom of the viewport and contains 5 icon-and-label
 * nav items, each supporting active, inactive, and notification states.
 *
 * @example
 * <ActionBar items={NAV_ITEMS} activeId="yucoin" onPress={setActiveId} />
 */
export const ActionBar: React.FC<ActionBarProps> = ({ items, activeId, onPress, testID }) => (
  <nav
    aria-label="Main navigation"
    data-testid={testID}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      paddingBottom: spacing[6],
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 58,
        padding: spacing[2],
        backgroundColor: colors.bgBase,
        borderRadius: radii.md,
        boxShadow: "0px 4px 16px 0px rgba(53, 60, 64, 0.08)",
        boxSizing: "border-box",
      }}
    >
      {items.map((item) => (
        <NavItem key={item.id} item={item} isActive={item.id === activeId} onPress={onPress} />
      ))}
    </div>
  </nav>
);

export default ActionBar;
