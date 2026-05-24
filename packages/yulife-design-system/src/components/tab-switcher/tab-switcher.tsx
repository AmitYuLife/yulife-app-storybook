import React from "react";
import { colors, palette } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";

// ─── Constants ────────────────────────────────────────────────────────────────
// Source: Figma "YuLife App Storybook", node 4542:45362

/** Total height of the tab row in px. 24px text + 7px gap + 2px indicator. */
const TAB_HEIGHT = 33;

/** Top padding so the tab bar breathes below the NavigationHeader. */
const TAB_TOP_PADDING = spacing[4];

/** Vertical gap between the label text and the active underline indicator. */
const LABEL_TO_INDICATOR_GAP = 7;

// ─── TabSwitcherProps ─────────────────────────────────────────────────────────

export interface TabSwitcherProps {
  /** Labels for each tab. */
  tabs: string[];
  /**
   * Index of the currently active tab (0-based).
   * This is a controlled component — the parent is responsible for tracking
   * and updating the active index via `onTabChange`.
   */
  activeIndex: number;
  /** Called when the user presses a tab; receives the new tab index. */
  onTabChange?: (index: number) => void;
  /** Additional inline styles applied to the root element. */
  style?: React.CSSProperties;
}

// ─── TabSwitcher ─────────────────────────────────────────────────────────────

/**
 * TabSwitcher
 *
 * A horizontal tab bar used below the NavigationHeader to split page content
 * into named sections. Shows a full-width separator line at the bottom and a
 * 2px pink underline indicator that tracks the active tab.
 *
 * Includes `16px` (`spacing[4]`) of top padding so it naturally clears the
 * NavigationHeader when placed directly below it. Override via the `style` prop.
 *
 * This is a **controlled** component. Pass `activeIndex` and handle
 * `onTabChange` to drive selection from the parent.
 *
 * Figma reference: YuLife App Storybook → Navigation / Tab Switcher
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=4542-45362
 */
export const TabSwitcher: React.FC<TabSwitcherProps> = ({ tabs, activeIndex, onTabChange, style }) => {
  return (
    <div
      role="tablist"
      style={{
        position: "relative",
        boxSizing: "border-box",
        height: TAB_HEIGHT + TAB_TOP_PADDING,
        paddingTop: TAB_TOP_PADDING,
        display: "flex",
        alignItems: "flex-start",
        ...style,
      }}
    >
      {/* Full-width separator at the tab baseline, behind the active indicator */}
      <div
        aria-hidden={true}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          backgroundColor: palette.neutral300,
          borderRadius: radii.md,
        }}
      />

      {tabs.map((label, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onTabChange?.(index)}
            style={{
              // Reset button defaults
              appearance: "none",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              // Layout — each tab takes an equal share of the container width
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: LABEL_TO_INDICATOR_GAP,
              height: TAB_HEIGHT,
            }}
          >
            <span
              style={{
                ...textStyles.body1Bold,
                lineHeight: `${textStyles.body1Bold.lineHeight}px`,
                letterSpacing: `${textStyles.body1Bold.letterSpacing}px`,
                color: isActive ? colors.actionPrimaryHover : colors.textDisabled,
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>

            {/* Active underline indicator */}
            {isActive && (
              <div
                aria-hidden={true}
                style={{
                  width: "100%",
                  height: spacing.px,
                  backgroundColor: colors.actionPrimaryHover,
                  borderRadius: radii.md,
                  flexShrink: 0,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TabSwitcher;
