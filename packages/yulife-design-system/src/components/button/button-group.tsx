import React from "react";
import { spacing } from "../../tokens/spacing";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonGroupProps {
  /**
   * Button components to render.
   *
   * In **horizontal** mode each child shares the available width equally
   * (`flex: 1`). In **vertical** mode each child stretches to full width.
   */
  children: React.ReactNode;
  /**
   * Layout direction.
   *
   * - `"vertical"` (default) — buttons stack top-to-bottom at full width.
   * - `"horizontal"` — buttons sit side-by-side and share width equally.
   */
  direction?: "horizontal" | "vertical";
  /**
   * When `true`, renders a gradient background that fades from opaque white at
   * the bottom to fully transparent white at the top. Only applies when
   * `direction` is `"vertical"`. Use this when the button group is pinned to
   * the bottom of a scrollable area so it visually lifts out of the content
   * below it without a hard edge.
   */
  pinned?: boolean;
  /** Inline style overrides for the root element. */
  style?: React.CSSProperties;
}

// ─── ButtonGroup ──────────────────────────────────────────────────────────────

/** Height of the gradient veil that extends above the button group (48 px). */
export const BUTTON_GROUP_GRADIENT_HEIGHT = spacing[12];

/**
 * ButtonGroup
 *
 * A layout wrapper that arranges `Button` components in either a vertical stack
 * (full-width, default) or a horizontal row (equal-width sharing). Uses the
 * same `spacing[4]` (16px) gap token as `TileGroup` for visual consistency.
 *
 * The optional `pinned` variant renders an absolutely-positioned gradient veil
 * 48 px tall that sits above the button group, fading from transparent at the
 * top to opaque white at the bottom. Place the ButtonGroup inside a footer
 * container that overlaps the scroll area (see `ModalTemplate` and
 * `SinglePageTemplate`) so the veil fades over real scroll content rather than
 * a plain background.
 *
 * Figma reference: YuLife App Storybook → ButtonGroup
 */

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  direction = "vertical",
  pinned = false,
  style,
}) => {
  const isVertical = direction === "vertical";
  const showGradient = pinned && isVertical;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        width: "100%",
        gap: spacing[4],
        alignItems: isVertical ? "stretch" : "center",
        ...style,
      }}
    >
      {/* Gradient veil — absolutely positioned ABOVE the button group so it
          physically overlaps scroll content behind it. Transparent at the top,
          fading to opaque white at the bottom where the buttons sit.
          pointer-events: none so it never intercepts taps. */}
      {showGradient && (
        <div
          aria-hidden={true}
          style={{
            position: "absolute",
            bottom: "100%",
            left: 0,
            right: 0,
            height: BUTTON_GROUP_GRADIENT_HEIGHT,
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            pointerEvents: "none",
          }}
        />
      )}
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return (
          <div style={isVertical ? { width: "100%" } : { flex: "1 0 0", minWidth: 0 }}>
            {React.cloneElement(child as React.ReactElement<any>, {
              style: {
                ...(child.props as any).style,
                width: "100%",
              },
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
