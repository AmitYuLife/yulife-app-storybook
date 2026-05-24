import React from "react";
import { spacing } from "../../tokens/spacing";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TileGroupProps {
  /**
   * Tile components to render (`Tile`, `TileImage`, or a mix of both).
   *
   * In **horizontal** mode each child shares the available width equally
   * (`flex: 1`). In **vertical** mode each child stretches to full width.
   */
  children: React.ReactNode;
  /**
   * Layout direction.
   *
   * - `"horizontal"` (default) — tiles sit side-by-side and share width.
   * - `"vertical"` — tiles stack top-to-bottom at full width.
   */
  direction?: "horizontal" | "vertical";
  /** Inline style overrides for the root element. */
  style?: React.CSSProperties;
}

// ─── TileGroup ────────────────────────────────────────────────────────────────

/**
 * TileGroup
 *
 * A layout wrapper that arranges `Tile` and/or `TileImage` components in
 * either a horizontal row (equal-width sharing) or a vertical stack
 * (full-width). Each child is wrapped in a flex-item `div` so the layout
 * works regardless of the child component's own width.
 *
 * Figma reference: YuLife App Storybook → TileGroup → node 10972:4569
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-4569
 */
export const TileGroup: React.FC<TileGroupProps> = ({ children, direction = "horizontal", style }) => {
  const isVertical = direction === "vertical";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        width: "100%",
        gap: spacing[4],
        alignItems: isVertical ? "stretch" : "center",
        ...style,
      }}
    >
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

export default TileGroup;
