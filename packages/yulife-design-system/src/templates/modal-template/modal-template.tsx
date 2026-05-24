import React, { useRef, useCallback, useState, useEffect } from "react";
import { colors, palette } from "../../tokens/colors";
import { spacing, space } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";
import { duration, easing } from "../../tokens/animation";

// ─── Constants ────────────────────────────────────────────────────────────────

/** Default height of the hero slot in px, matching the story placeholder */
const MODAL_HERO_HEIGHT = 200;
/** Dampens the raw drag distance to produce an elastic rubber-band feel */
const PULL_RESISTANCE = 0.4;
/**
 * Cap on the effective pull distance in px. At PULL_RESISTANCE=0.4, a
 * 375px finger drag reaches the ceiling — roughly a full phone screen height.
 */
const MAX_EFFECTIVE_DELTA = 150;
/** Spring-back transition for the hero container height on release */
const RELEASE_TRANSITION_HEIGHT = `height ${duration.slow}ms ${easing.spring}`;
/**
 * How long the isExiting flag stays true after a close is triggered.
 * Must be ≥ the exit panel transition duration (175 ms) + a small buffer.
 */
const EXIT_DURATION_MS = duration.exit + 15;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ModalTemplateProps {
  /**
   * Optional hero component rendered at the top of the modal. Not scrollable —
   * it stays pinned above the content area as the user scrolls the body.
   * The hero wrapper's height is driven by the `--modal-hero-height` CSS
   * custom property, enabling the pull-down zoom effect.
   * Pass any hero variant or a custom element (e.g. a placeholder image with
   * an overlaid NavigationHeader). When omitted the hero wrapper is not
   * rendered and the MainLayout fills the modal from the top.
   */
  hero?: React.ReactNode;
  /**
   * Content rendered inside the scrollable MainLayout container. This is an
   * open slot — pass any combination of components (cards, tiles, text, etc.)
   * and they will be laid out in a vertical flex column with consistent spacing.
   */
  children: React.ReactNode;
  /**
   * Optional pinned footer content rendered below the scrollable body. Intended
   * for button groups that should remain visible regardless of scroll position.
   * When provided, the footer floats above the body content with a subtle top
   * shadow for visual separation.
   */
  footer?: React.ReactNode;
  /**
   * Controls the open/closed state with enter and exit animations.
   *
   * - When `true`: the overlay fades in and the modal panel slides up.
   * - When `false`: the panel slides down while the overlay stays opaque, then
   *   both disappear once the transition completes.
   * - When **omitted**: the modal renders unconditionally with no transition —
   *   suitable for always-visible usage or when the parent manages mounting.
   */
  isOpen?: boolean;
  /**
   * Called when the user taps the semi-transparent overlay backdrop behind
   * the modal. In a controlled setup (`isOpen` is provided), wire this to
   * set `isOpen` to `false` to trigger the exit animation.
   */
  onClose?: () => void;
  /**
   * Inline style overrides applied to the root overlay element.
   * Use sparingly — prefer composing content via the hero, children, and footer slots.
   */
  style?: React.CSSProperties;
}

// ─── ModalTemplate ────────────────────────────────────────────────────────────

/**
 * ModalTemplate
 *
 * A bottom-anchored modal layout template that mirrors the slot-based anatomy
 * of `SinglePageTemplate`: a hero at the top (not scrollable) and a
 * MainLayout content area below (scrollable once content exceeds the max height).
 *
 * The modal renders over a full-screen `transBlack` overlay and is anchored to
 * the bottom of the viewport. Its height is content-driven, capped at 90 vh —
 * at which point the MainLayout body scrolls while the hero and any pinned
 * footer remain stationary.
 *
 * ## Enter / exit animation
 * When `isOpen` is provided the component keeps itself in the DOM at all times
 * (avoiding the mount-timing issues of rAF-based approaches) and drives all
 * animation through CSS transitions:
 *
 * - **Enter**: overlay fades in (`opacity 0.2s ease`), panel rises
 *   (`translateY(100% → 0)` with `0.35s cubic-bezier(0.32, 0.72, 0, 1)`).
 * - **Exit**: panel falls (`0.3s ease-in`), overlay stays fully opaque while
 *   the panel animates and then disappears together once complete.
 *
 * The element is kept invisible and non-interactive (`opacity 0`,
 * `pointerEvents none`) while closed so it never blocks the content beneath.
 *
 * ## MainLayout overlap
 * The MainLayout overlaps the hero by `spacing[6]` (24 px) with rounded top
 * corners (`radii.md`), matching the `SinglePageTemplate` parallax aesthetic.
 *
 * ## Pull-down zoom
 * When the user is at the top of the scroll body and drags downward, the hero
 * wrapper grows taller via `--modal-hero-height`, a CSS custom property set on
 * the modal container and inherited by the hero wrapper. On release, the height
 * springs back with a smooth transition.
 *
 * Figma reference: YuLife App Storybook → Modal / Shell → node 12819:3175
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=12819-3175
 */
export const ModalTemplate: React.FC<ModalTemplateProps> = ({ hero, children, footer, isOpen, onClose, style }) => {
  // ── Animation state ───────────────────────────────────────────────────────

  const isControlled = isOpen !== undefined;

  /**
   * isVisible — the target open/closed state.
   * Drives translateY on the panel and opacity on the overlay.
   * Always `true` in uncontrolled mode.
   */
  const [isVisible, setIsVisible] = useState(() => !isControlled || isOpen === true);

  /**
   * isExiting — true only during the exit transition window.
   * Used to pin the overlay at full opacity while the panel slides down,
   * so only the panel moves (no overlay fade on close).
   */
  const [isExiting, setIsExiting] = useState(false);

  // Skip the effect on the initial mount — the useState initialiser already
  // sets the correct starting state. Running the else-branch on mount with
  // isOpen=false would set isExiting=true for EXIT_DURATION_MS, making the
  // overlay briefly flash at full opacity on load.
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (!isControlled) {
      return;
    }

    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    let timerId: ReturnType<typeof setTimeout> | undefined;

    if (isOpen) {
      // Cancel any in-flight exit timer and start entering.
      // Batching setIsExiting+setIsVisible in one render means the panel was
      // already at translateY(100%) from the previous closed state, so the
      // CSS transition fires immediately without any rAF dance.
      setIsExiting(false);
      setIsVisible(true);
    } else {
      // Start the exit: pin overlay at full opacity, slide panel down.
      // Reset isExiting after the transition completes so the overlay
      // returns to opacity 0 (invisible / non-interactive) for the closed state.
      setIsExiting(true);
      setIsVisible(false);
      timerId = setTimeout(() => setIsExiting(false), EXIT_DURATION_MS);
    }

    return () => {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [isOpen, isControlled]);

  // ── Pull-down zoom refs ───────────────────────────────────────────────────

  /**
   * The modal container. Hosts `--modal-hero-height` / `--modal-hero-transition`
   * CSS custom properties that the hero wrapper inherits for the pull-down zoom.
   */
  const modalContainerRef = useRef<HTMLDivElement>(null);

  /** The scrollable body — used to gate pull gestures to `scrollTop === 0` */
  const scrollBodyRef = useRef<HTMLDivElement>(null);

  const isPointerDownRef = useRef<boolean>(false);
  const pointerStartYRef = useRef<number>(0);
  const isPullingRef = useRef<boolean>(false);

  // ── CSS-variable helpers ──────────────────────────────────────────────────

  const setHeroHeight = useCallback((height: number, transition: string) => {
    const el = modalContainerRef.current;
    if (!el) {
      return;
    }

    el.style.setProperty("--modal-hero-transition", transition);
    el.style.setProperty("--modal-hero-height", `${height}px`);
  }, []);

  // ── Pull helpers ──────────────────────────────────────────────────────────

  const applyPull = useCallback(
    (rawDelta: number) => {
      const effective = Math.min(rawDelta * PULL_RESISTANCE, MAX_EFFECTIVE_DELTA);
      setHeroHeight(MODAL_HERO_HEIGHT + effective, "none");
    },
    [setHeroHeight]
  );

  const releasePull = useCallback(() => {
    setHeroHeight(MODAL_HERO_HEIGHT, RELEASE_TRANSITION_HEIGHT);
    isPullingRef.current = false;
  }, [setHeroHeight]);

  // ── Pointer event handlers ────────────────────────────────────────────────

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isPointerDownRef.current = true;
    pointerStartYRef.current = e.clientY;
    isPullingRef.current = false;
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isPointerDownRef.current) {
        return;
      }

      const scrollEl = scrollBodyRef.current;
      if (!scrollEl) {
        return;
      }

      const rawDelta = e.clientY - pointerStartYRef.current;
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

  // ── Derived animation values ──────────────────────────────────────────────

  // The overlay should be visible (opacity 1) while open OR while exiting so
  // the background stays dark throughout the panel's slide-down motion.
  const overlayVisible = isVisible || isExiting;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    // ── Overlay ─────────────────────────────────────────────────────────────
    // Full-screen fixed backdrop. Always in the DOM; invisible and
    // non-interactive when closed so it never blocks content beneath.
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: colors.bgOverlay,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-end",
        // Controlled mode: fade the overlay IN on enter only.
        // On exit the overlay stays at full opacity — the panel movement is
        // the sole visual cue for closing.
        ...(isControlled && {
          opacity: overlayVisible ? 1 : 0,
          pointerEvents: overlayVisible ? "auto" : "none",
          transition: isExiting ? "none" : `opacity ${duration.normal}ms ${easing.default}`,
          willChange: "opacity",
        }),
        ...style,
      }}
    >
      {/* ── Modal container ──────────────────────────────────────────────── */}
      {/* Hosts CSS custom properties for pull-down zoom. Also carries the
          slide-up / slide-down transition when isOpen is controlled. */}
      <div
        ref={modalContainerRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxHeight: "90vh",
          borderTopLeftRadius: radii.xl,
          borderTopRightRadius: radii.xl,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: colors.bgBase,
          // Enter: fast-start deceleration — panel arrives crisply.
          // Exit: ease-in — panel accelerates away, feels deliberate.
          ...(isControlled && {
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            transition: isExiting
              ? `transform ${duration.exit}ms ${easing.exit}`
              : `transform ${duration.slow}ms ${easing.enter}`,
            willChange: "transform",
          }),
        }}
      >
        {/* ── Hero slot (optional) ───────────────────────────────────────── */}
        {hero && (
          <div
            style={{
              position: "relative",
              zIndex: 0,
              flexShrink: 0,
              height: `var(--modal-hero-height, ${MODAL_HERO_HEIGHT}px)`,
              transition: "var(--modal-hero-transition, none)",
              overflow: "hidden",
            }}
          >
            {hero}
          </div>
        )}

        {/* ── Scrollable MainLayout ──────────────────────────────────────── */}
        {/* When a hero is present, overlaps it by spacing[6] (24 px) with
            rounded top corners. Without a hero, fills the modal from the top
            with no overlap or negative margin. */}
        <div
          ref={scrollBodyRef}
          onPointerDown={hero ? handlePointerDown : undefined}
          onPointerMove={hero ? handlePointerMove : undefined}
          onPointerUp={hero ? handlePointerUp : undefined}
          onPointerCancel={hero ? handlePointerUp : undefined}
          style={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            marginTop: hero ? -spacing[6] : 0,
            borderTopLeftRadius: hero ? radii.md : 0,
            borderTopRightRadius: hero ? radii.md : 0,
            overflowY: "auto",
            overflowX: "hidden",
            WebkitOverflowScrolling: "touch",
            backgroundColor: palette.neutral50,
            paddingTop: space.pagePaddingVertical,
            paddingBottom: footer ? spacing[8] : space.pagePaddingVertical,
            paddingLeft: space.pagePaddingHorizontal,
            paddingRight: space.pagePaddingHorizontal,
            display: "flex",
            flexDirection: "column",
            gap: space.stackMD,
          }}
        >
          {children}
        </div>

        {/* ── Pinned footer ─────────────────────────────────────────────── */}
        {/* The ButtonGroup's gradient veil is position:absolute bottom:100%,
            so it extends upward by BUTTON_GROUP_GRADIENT_HEIGHT into the scroll
            body's paddingBottom zone — no negative marginTop needed.
            z-index:2 renders the footer above the z-index:1 scroll body. */}
        {footer && (
          <div
            style={{
              flexShrink: 0,
              position: "relative",
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
    </div>
  );
};

export default ModalTemplate;
