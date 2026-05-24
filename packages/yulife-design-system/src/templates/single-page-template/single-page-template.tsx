import React, { useRef, useCallback } from "react";
import { colors, palette } from "../../tokens/colors";
import { spacing, space } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";
// ─── Constants ────────────────────────────────────────────────────────────────

const HERO_HEIGHT = 290;
/** Dampens the raw drag distance to produce an elastic rubber-band feel */
const PULL_RESISTANCE = 0.4;
/**
 * Scroll clearance added to the MainLayout's paddingBottom when a pinned
 * footer is present. Sized for the SOLID button area only (two Large buttons
 * at 48px each + 16px gap + 24px footer bottom padding = 136px), minus the
 * gradient height (48px) so the gradient veil overlaps real content rather
 * than empty padding. The gradient extends above this space into the content.
 * Net: spacing[12] + spacing[4] + componentPaddingLG = 48 + 16 + 24 = 88px.
 */
const PINNED_FOOTER_SCROLL_CLEARANCE = spacing[12] + spacing[4] + space.componentPaddingLG;
/**
 * Cap on the effective pull distance in px. At PULL_RESISTANCE=0.4, a
 * 375px finger drag reaches the ceiling — roughly a full phone screen height.
 */
const MAX_EFFECTIVE_DELTA = 150;
/** Spring-back transition for the Hero container height on release */
const RELEASE_TRANSITION_HEIGHT = "height 0.35s ease-out";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SinglePageTemplateProps {
  /**
   * Hero component rendered at the top of the page. Accepts any Hero variant
   * (e.g. `HeroProductDetails`, `Hero` with custom children, or any future
   * variant). The hero stays pinned at the top while the MainLayout content
   * scrolls over it with a parallax effect.
   */
  hero: React.ReactNode;
  /**
   * Content rendered inside the scrollable MainLayout container. This is an
   * open slot — pass any combination of components (cards, tiles, buttons,
   * lists, etc.) and they will be laid out in a vertical flex column with
   * consistent spacing.
   */
  children: React.ReactNode;
  /**
   * Optional pinned footer content that floats above the scroll area. Rendered
   * as an absolute overlay at the bottom of the template, staying visible
   * regardless of scroll position. Intended for `ButtonGroup` with `pinned`
   * enabled — the gradient background on the button group fades over the
   * scrollable content below.
   *
   * When provided, extra bottom padding is added to the scrollable content so
   * the last item can be scrolled fully above the footer.
   */
  footer?: React.ReactNode;
  /**
   * Inline style overrides applied to the root element.
   * Use sparingly — prefer composing content via the hero and children slots.
   */
  style?: React.CSSProperties;
}

// ─── SinglePageTemplate ───────────────────────────────────────────────────────

/**
 * SinglePageTemplate
 *
 * A generic single-page layout template that pairs a full-bleed Hero at the
 * top with a scrollable MainLayout content container below. The MainLayout
 * overlaps the hero by `spacing[6]` (24 px) with rounded top corners, and
 * slides over the hero as the user scrolls — creating a subtle parallax effect
 * using pure CSS (`position: sticky` + negative margin).
 *
 * ## Pull-down zoom
 * When the user is at the top of the scroll and drags downward, the Hero
 * container grows taller to fill the revealed space. The `<img>` inside Hero
 * refills the taller container naturally via `objectFit: cover`, producing a
 * zoom-in effect. The MainLayout shifts down automatically because the taller
 * sticky wrapper pushes it in normal flow — no translateY is needed or applied.
 * Navigation header and text overlay remain static.
 *
 * The height is driven via `--spt-hero-height`, a CSS custom property set
 * imperatively on the scroll container and inherited by Hero's root div.
 * Direct DOM mutation keeps the animation at 60 fps with zero React re-renders.
 *
 * Unlike the domain-specific `HomeScreen` / `YuCoinScreen` templates, this
 * template is fully generic: all content is composed via the `hero` and
 * `children` slots with no hardcoded domain props.
 *
 * Figma reference: YuLife App Storybook → SinglePageTemplate → node 10971:1317
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10971-1317
 */
export const SinglePageTemplate: React.FC<SinglePageTemplateProps> = ({ hero, children, footer, style }) => {
  // ── Refs ──────────────────────────────────────────────────────────────────

  /**
   * The scrollable container. Used to:
   * - Gate pull gestures to `scrollTop === 0`
   * - Host the CSS custom properties that Hero's <img> inherits
   */
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  /** True only while a pointer button is held down — prevents hover from firing */
  const isPointerDownRef = useRef<boolean>(false);

  /** Y coordinate captured on pointerdown */
  const pointerStartYRef = useRef<number>(0);

  /**
   * Latched to true once the gesture is confirmed as a pull-down at scrollTop=0.
   * Prevents the animation activating on a mid-scroll gesture.
   */
  const isPullingRef = useRef<boolean>(false);

  // ── CSS-variable helpers ──────────────────────────────────────────────────

  /**
   * Mutates CSS custom properties on the scroll container element.
   *
   * --spt-hero-height   → read by Hero's root div as its `height` value.
   *                       Growing this fills the space revealed when MainLayout
   *                       is pulled down; the <img> inside fills the taller
   *                       container naturally via `objectFit: cover`.
   * --spt-hero-transition → read by Hero's root div as its `transition` value,
   *                         enabling a smooth spring-back on release.
   *
   * CSS custom properties are inherited, so values set here cascade down to the
   * Hero component without React re-renders.
   */
  const setHeroHeight = useCallback((height: number, transition: string) => {
    const el = scrollContainerRef.current;
    if (!el) {
      return;
    }

    el.style.setProperty("--spt-hero-transition", transition);
    el.style.setProperty("--spt-hero-height", `${height}px`);
  }, []);

  // ── Pull helpers ──────────────────────────────────────────────────────────

  const applyPull = useCallback(
    (rawDelta: number) => {
      const effective = Math.min(rawDelta * PULL_RESISTANCE, MAX_EFFECTIVE_DELTA);

      // Growing the Hero height pushes the MainLayout down in normal flow by
      // exactly `effective` px (offset by the existing -24px overlap margin).
      // No translateY on MainLayout is needed — adding one would cause a
      // double-movement gap: MainLayout flow shift (E) + translateY (E) = 2E,
      // while the Hero only grows by E, leaving a widening hole between them.
      setHeroHeight(HERO_HEIGHT + effective, "none");
    },
    [setHeroHeight]
  );

  const releasePull = useCallback(() => {
    setHeroHeight(HERO_HEIGHT, RELEASE_TRANSITION_HEIGHT);
    isPullingRef.current = false;
  }, [setHeroHeight]);

  // ── Pointer event handlers ─────────────────────────────────────────────────

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isPointerDownRef.current = true;
    pointerStartYRef.current = e.clientY;
    isPullingRef.current = false;
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      // Guard: only act while a button is held (ignore plain hover)
      if (!isPointerDownRef.current) {
        return;
      }

      const scrollEl = scrollContainerRef.current;
      if (!scrollEl) {
        return;
      }

      const rawDelta = e.clientY - pointerStartYRef.current;

      // Only activate when already at the top and moving downward
      if (scrollEl.scrollTop > 0 || rawDelta <= 0) {
        if (isPullingRef.current) {
          releasePull();
        }

        return;
      }

      isPullingRef.current = true;
      applyPull(rawDelta);
    },
    [applyPull, releasePull]
  );

  const handlePointerUp = useCallback(() => {
    isPointerDownRef.current = false;
    if (isPullingRef.current) {
      releasePull();
    }
  }, [releasePull]);

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    // position: relative creates the containing block for the absolute footer
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: colors.bgBase,
        ...style,
      }}
    >
      {/* Scroll container — the only scrollable element; hosts the CSS variables
          that Hero's <img> inherits for the pull-down zoom effect */}
      <div
        ref={scrollContainerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Hero — sticky so it stays pinned while MainLayout scrolls over it.
            The pull-down zoom is applied only to the <img> inside Hero via
            CSS custom properties, leaving nav header and text overlay static. */}
        <div style={{ position: "sticky", top: 0, zIndex: 0 }}>{hero}</div>

        {/* MainLayout — slides over the hero with rounded top corners.
            Moves down naturally as the hero grows in flow; no translateY needed.
            When a pinned footer is present, extra paddingBottom ensures the last
            content item can be scrolled fully above the footer overlay. */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            marginTop: -spacing[6],
            borderTopLeftRadius: radii.md,
            borderTopRightRadius: radii.md,
            backgroundColor: palette.neutral50,
            paddingTop: space.pagePaddingVertical,
            paddingBottom: footer ? PINNED_FOOTER_SCROLL_CLEARANCE : space.pagePaddingVertical,
            paddingLeft: space.pagePaddingHorizontal,
            paddingRight: space.pagePaddingHorizontal,
            display: "flex",
            flexDirection: "column",
            gap: spacing[6],
          }}
        >
          {children}
        </div>
      </div>

      {/* Pinned footer — absolutely positioned over the scroll area so the
          ButtonGroup `pinned` gradient fades over scrollable content rather
          than the template background. z-index: 2 places it above the
          z-index: 1 MainLayout. No background — the ButtonGroup provides it. */}
      {footer && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            paddingBottom: space.componentPaddingLG,
            paddingLeft: space.pagePaddingHorizontal,
            paddingRight: space.pagePaddingHorizontal,
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default SinglePageTemplate;
