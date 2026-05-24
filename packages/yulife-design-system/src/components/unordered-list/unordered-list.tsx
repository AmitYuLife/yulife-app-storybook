import React, { createContext, useContext } from "react";
import { colors } from "../../tokens/colors";
import { space } from "../../tokens/spacing";
import { textStyles } from "../../tokens/typography";

// ─── Layout constants ─────────────────────────────────────────────────────────

/** Expected marker icon size in px (matches the design's 24px icon grid). */
const MARKER_SIZE = 24;

/**
 * Vertical offset applied to the text span so the centre of the first text
 * line aligns with the centre of the marker icon.
 *
 * icon centre   = MARKER_SIZE / 2            = 12px from row top
 * text centre   = paddingTop + lineHeight / 2 = 4 + 8 = 12px from row top  ✓
 */
const TEXT_TOP_OFFSET = (MARKER_SIZE - textStyles.label1Bold.lineHeight) / 2;

// ─── Context ──────────────────────────────────────────────────────────────────

interface UnorderedListContextValue {
  marker: React.ReactNode;
  markerColor: string | undefined;
}

const UnorderedListContext = createContext<UnorderedListContextValue>({
  marker: null,
  markerColor: undefined,
});

// ─── Types ────────────────────────────────────────────────────────────────────

export interface UnorderedListProps {
  /** Default marker rendered beside every item. Any ReactNode — icon, string, element. */
  marker?: React.ReactNode;
  /**
   * CSS color applied to every marker. All line and fill icons in this library
   * use `fill="currentColor"`, so this cascades into the SVG automatically.
   * Individual items can override it with their own `markerColor` prop.
   */
  markerColor?: string;
  /** `UnorderedListItem` elements. */
  children: React.ReactNode;
  /** Inline style overrides on the root `<ul>` element. */
  style?: React.CSSProperties;
}

export interface UnorderedListItemProps {
  /** Overrides the parent `UnorderedList` marker for this item only. */
  marker?: React.ReactNode;
  /**
   * CSS color for this item's marker. Overrides the parent `UnorderedList`
   * `markerColor`. All icons in this library use `fill="currentColor"` so any
   * valid CSS color string works (hex, token reference, etc.).
   */
  markerColor?: string;
  /** Item text or content. */
  children: React.ReactNode;
  /** Inline style overrides on the root `<li>` element. */
  style?: React.CSSProperties;
}

// ─── UnorderedList ────────────────────────────────────────────────────────────

/**
 * UnorderedList
 *
 * A semantic `<ul>` that renders a vertically stacked list of items, each
 * preceded by a configurable marker. The `marker` prop sets the default for
 * all child `UnorderedListItem` elements; individual items may override it.
 *
 * Common markers from the icon library:
 * - Checklist  — `<CheckIcon width={24} height={24} />`
 * - Bullet     — `<BulletIcon width={24} height={24} />`
 * - Star       — `<StarFillIcon width={24} height={24} />`
 *
 * Use `markerColor` to tint all markers at once; individual items can override:
 *
 * ```tsx
 * <UnorderedList
 *   marker={<StarLineIcon width={24} height={24} />}
 *   markerColor={palette.pink600}
 * >
 *   <UnorderedListItem>Earned reward</UnorderedListItem>
 *   <UnorderedListItem markerColor={palette.neutral400}>Locked reward</UnorderedListItem>
 * </UnorderedList>
 * ```
 *
 * Figma reference: YuLife App Storybook, node 10920:1177
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10920-1177
 */
export const UnorderedList: React.FC<UnorderedListProps> = ({ marker = null, markerColor, children, style }) => (
  <UnorderedListContext.Provider value={{ marker, markerColor }}>
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </ul>
  </UnorderedListContext.Provider>
);

// ─── UnorderedListItem ────────────────────────────────────────────────────────

/**
 * UnorderedListItem
 *
 * A single row inside an `UnorderedList`. Renders the marker (from context or
 * its own `marker` prop) with its centre aligned to the first line of text.
 * A `paddingTop` offset is applied to the text span so that the centre of the
 * first text line sits at the same Y position as the centre of the 24 px marker,
 * regardless of how many lines the item wraps to.
 *
 * ```tsx
 * <UnorderedListItem>Regular item (uses parent marker)</UnorderedListItem>
 * <UnorderedListItem marker={<StarFillIcon width={24} height={24} />}>
 *   Star item
 * </UnorderedListItem>
 * ```
 */
export const UnorderedListItem: React.FC<UnorderedListItemProps> = ({
  marker: markerProp,
  markerColor: markerColorProp,
  children,
  style,
}) => {
  const { marker: contextMarker, markerColor: contextMarkerColor } = useContext(UnorderedListContext);
  const resolvedMarker = markerProp !== undefined ? markerProp : contextMarker;
  const resolvedMarkerColor = markerColorProp !== undefined ? markerColorProp : contextMarkerColor;

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: space.inlineSM,
        ...style,
      }}
    >
      {resolvedMarker !== null && (
        <span
          aria-hidden={true}
          style={{
            display: "flex",
            flexShrink: 0,
            color: resolvedMarkerColor,
          }}
        >
          {resolvedMarker}
        </span>
      )}
      <span
        style={{
          ...textStyles.label1Bold,
          lineHeight: `${textStyles.label1Bold.lineHeight}px`,
          letterSpacing: `${textStyles.label1Bold.letterSpacing}px`,
          color: colors.textPrimary,
          flex: 1,
          minWidth: 0,
          paddingTop: TEXT_TOP_OFFSET,
        }}
      >
        {children}
      </span>
    </li>
  );
};
