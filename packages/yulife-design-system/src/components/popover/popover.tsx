import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { colors, palette } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { radii } from "../../tokens/radii";
import { spacing } from "../../tokens/spacing";
import { duration, easing } from "../../tokens/animation";
import { elevation } from "../../tokens/elevation";
import { Button } from "../button";
import { Icon, CloseIcon } from "../../icons";

// ─── Constants ────────────────────────────────────────────────────────────────

/**
 * How long the isExiting flag stays true after a close is triggered.
 * Must be ≥ the exit transition duration + a small buffer.
 */
const EXIT_DURATION_MS = duration.exit + 15;

/** Half the width of the beak's base (along the bubble edge), in px. */
const BEAK_HALF_BASE = 8;
/** How far the beak protrudes from the bubble edge, in px. */
const BEAK_HEIGHT = 8;
/** Distance from the start/end edge for non-centred beak positions, in px. */
const BEAK_EDGE_OFFSET = 24;

/** Default bubble width — overridable via `style.width`. */
const DEFAULT_WIDTH = 240;

// ─── Types ────────────────────────────────────────────────────────────────────

export type PopoverBeakDirection = "top" | "right" | "bottom" | "left" | "none";
export type PopoverBeakPosition = "start" | "center" | "end";

export interface PopoverProps {
  /** Bold heading text. */
  title: string;
  /** Optional supporting body copy. */
  description?: string;
  /** Optional call-to-action rendered below the text. */
  action?: { label: string; onClick: () => void };
  /**
   * Which edge of the bubble the beak (arrow) protrudes from.
   * Defaults to `"none"` (no beak).
   */
  beakDirection?: PopoverBeakDirection;
  /**
   * Where along the beak edge the beak is placed.
   * - `"start"`  — near the left / top edge
   * - `"center"` — centred (default)
   * - `"end"`    — near the right / bottom edge
   */
  beakPosition?: PopoverBeakPosition;
  /**
   * Controls visibility with enter / exit animation.
   * When omitted the popover renders unconditionally with no transition.
   */
  isVisible?: boolean;
  /**
   * Called when the user taps outside the popover or presses the close button.
   * When provided, renders an invisible full-screen dismiss overlay that
   * captures outside-tap events.
   */
  onDismiss?: () => void;
  /**
   * When `true` and `onDismiss` is provided, renders a close (×) button in
   * the top-right corner of the bubble.
   */
  showCloseButton?: boolean;
  /** Inline style overrides applied to the outermost popover wrapper. */
  style?: React.CSSProperties;
}

// ─── Outline path generator ───────────────────────────────────────────────────

/**
 * Build a single closed SVG path that traces the bubble's rounded rectangle
 * and seamlessly detours out into a triangular beak on one edge.
 *
 * Drawing the bubble + beak as one path means:
 *   • the 1 px stroke is continuous — no border seam where the beak attaches
 *   • a single `filter: drop-shadow` on the parent follows the entire outline
 *   • a single white fill covers both regions — the beak feels carved out of
 *     the same body, not stuck on as a separate layer
 *
 * The path is built clockwise starting from the top-left corner.
 */
function buildOutlinePath({
  width: w,
  height: h,
  radius,
  beakDirection,
  beakPosition,
}: {
  width: number;
  height: number;
  radius: number;
  beakDirection: PopoverBeakDirection;
  beakPosition: PopoverBeakPosition;
}): string {
  // Cap radius so corners can never overlap or invert on tiny bubbles.
  const r = Math.max(0, Math.min(radius, w / 2, h / 2));
  const bh = BEAK_HALF_BASE;
  const bp = BEAK_HEIGHT;
  const eo = BEAK_EDGE_OFFSET;

  // Centre coordinate of the beak along its edge (x for top/bottom, y for left/right).
  const isHorizontalEdge = beakDirection === "top" || beakDirection === "bottom";
  const isVerticalEdge = beakDirection === "left" || beakDirection === "right";

  let beakCenter = 0;
  if (isHorizontalEdge) {
    beakCenter = beakPosition === "start" ? r + eo : beakPosition === "end" ? w - r - eo : w / 2;
  } else if (isVerticalEdge) {
    beakCenter = beakPosition === "start" ? r + eo : beakPosition === "end" ? h - r - eo : h / 2;
  }

  let d = `M ${r},0`;

  // ── Top edge (left → right) ─────────────────────────────────────────────
  if (beakDirection === "top") {
    d += ` H ${beakCenter - bh}`;
    d += ` L ${beakCenter},${-bp}`;
    d += ` L ${beakCenter + bh},0`;
  }

  d += ` H ${w - r}`;
  d += ` A ${r},${r} 0 0 1 ${w},${r}`;

  // ── Right edge (top → bottom) ───────────────────────────────────────────
  if (beakDirection === "right") {
    d += ` V ${beakCenter - bh}`;
    d += ` L ${w + bp},${beakCenter}`;
    d += ` L ${w},${beakCenter + bh}`;
  }

  d += ` V ${h - r}`;
  d += ` A ${r},${r} 0 0 1 ${w - r},${h}`;

  // ── Bottom edge (right → left) ──────────────────────────────────────────
  if (beakDirection === "bottom") {
    d += ` H ${beakCenter + bh}`;
    d += ` L ${beakCenter},${h + bp}`;
    d += ` L ${beakCenter - bh},${h}`;
  }

  d += ` H ${r}`;
  d += ` A ${r},${r} 0 0 1 0,${h - r}`;

  // ── Left edge (bottom → top) ────────────────────────────────────────────
  if (beakDirection === "left") {
    d += ` V ${beakCenter + bh}`;
    d += ` L ${-bp},${beakCenter}`;
    d += ` L 0,${beakCenter - bh}`;
  }

  d += ` V ${r}`;
  d += ` A ${r},${r} 0 0 1 ${r},0`;

  d += ` Z`;
  return d;
}

// ─── Popover ──────────────────────────────────────────────────────────────────

/**
 * Popover
 *
 * A floating tooltip / onboarding bubble that renders elevated above all other
 * content. Supports a directional beak (arrow) on any of the four cardinal
 * edges, an optional call-to-action button, and an optional close button.
 *
 * ## Anatomy
 * The bubble's silhouette — rounded card + protruding beak — is drawn as a
 * single SVG path placed behind the content. This guarantees that:
 *   • the 1 px outline wraps continuously around bubble and beak with no
 *     visible seam at the join
 *   • the fill is one shape, so the beak feels carved out of the bubble body
 *   • a single drop-shadow filter casts a shadow that follows the real
 *     outline (including the beak), not a bounding rectangle
 *
 * Inside the silhouette:
 *   • Bold heading (`textStyles.body2Bold`)
 *   • Optional description (`textStyles.label2Regular`)
 *   • Optional CTA button (`Button` Outline / Primary / Small)
 *   • Optional close (×) button in the top-right corner
 *
 * ## Dismiss behaviour
 * When `onDismiss` is provided, an invisible full-screen overlay is rendered
 * behind the bubble — tapping anywhere outside fires `onDismiss`. The close
 * button (when `showCloseButton` is `true`) also fires `onDismiss`.
 *
 * ## Animation
 * When `isVisible` is provided, the component uses a mount / enter / exit /
 * unmount lifecycle identical to the `InlineBanner` toast mode:
 *   • Enter — fade in + rise up (`duration.slow`, `easing.enter`)
 *   • Exit  — fade out + fall down (`duration.exit`, `easing.exit`)
 *
 * When `isVisible` is omitted, the component renders statically with no
 * transition.
 *
 * ## Positioning
 * The Popover does not position itself — the parent is responsible for placing
 * it absolutely next to the trigger element. The beak protrudes beyond the
 * bubble's bounding box by `BEAK_HEIGHT` (8 px) in the beak direction; factor
 * this into parent positioning where necessary.
 *
 * Figma reference: YuLife App Storybook, node 9314:19961
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=9314-19961
 */
export const Popover: React.FC<PopoverProps> = ({
  title,
  description,
  action,
  beakDirection = "none",
  beakPosition = "center",
  isVisible,
  onDismiss,
  showCloseButton = false,
  style,
}) => {
  const isControlled = isVisible !== undefined;

  // ── Animation state ───────────────────────────────────────────────────────
  // Same three-state pattern as InlineBanner toast:
  //   `mounted`     — DOM presence; false → return null
  //   `animVisible` — CSS target; false = "from" position (transparent + shifted)
  //   `isExiting`   — true only during the exit window (selects exit transition)
  const [mounted, setMounted] = useState(() => !isControlled || isVisible === true);
  const [animVisible, setAnimVisible] = useState(() => !isControlled);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isControlled) {
      return;
    }

    if (isVisible) {
      setIsExiting(false);
      setMounted(true);
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setAnimVisible(true)));
      return () => cancelAnimationFrame(raf);
    }

    setIsExiting(true);
    setAnimVisible(false);
    const timer = setTimeout(() => {
      setIsExiting(false);
      setMounted(false);
    }, EXIT_DURATION_MS);
    return () => clearTimeout(timer);
  }, [isVisible, isControlled]);

  // ── Bubble size measurement ───────────────────────────────────────────────
  // Content height is intrinsic, so we measure the content div with a
  // ResizeObserver and feed the dimensions into the SVG path generator.
  // useLayoutEffect (rather than useEffect) writes the measurement before the
  // browser paints, so the user never sees a frame without the SVG outline.
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [bubbleSize, setBubbleSize] = useState({ width: DEFAULT_WIDTH, height: 0 });

  useLayoutEffect(() => {
    const el = bubbleRef.current;
    if (!el) {
      return;
    }

    const update = () => setBubbleSize({ width: el.offsetWidth, height: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [mounted]);

  if (isControlled && !mounted) {
    return null;
  }

  const hasAction = Boolean(action);
  const hasCloseButton = showCloseButton && Boolean(onDismiss);

  const path = buildOutlinePath({
    width: bubbleSize.width,
    height: bubbleSize.height,
    radius: radii.xl,
    beakDirection,
    beakPosition,
  });

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Dismiss overlay ─────────────────────────────────────────────── */}
      {/* Transparent full-screen layer that captures outside-tap events.
          Sits below the popover wrapper. */}
      {onDismiss && (
        <div
          aria-hidden={true}
          onClick={onDismiss}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1200,
          }}
        />
      )}

      {/* ── Popover wrapper ─────────────────────────────────────────────── */}
      {/* `filter: drop-shadow` follows the SVG silhouette including the beak,
          which `box-shadow` cannot do — so the wrapper carries the shadow
          rather than the bubble box itself. */}
      <div
        role="dialog"
        aria-label={title}
        style={{
          position: "relative",
          zIndex: onDismiss ? 1201 : undefined,
          width: DEFAULT_WIDTH,
          filter: elevation.popoverFilter,
          ...(isControlled && {
            opacity: animVisible ? 1 : 0,
            transform: animVisible ? "translateY(0)" : "translateY(8px)",
            transition: isExiting
              ? `opacity ${duration.exit}ms ${easing.exit}, transform ${duration.exit}ms ${easing.exit}`
              : `opacity ${duration.normal}ms ${easing.default}, transform ${duration.slow}ms ${easing.enter}`,
            willChange: "opacity, transform",
          }),
          ...style,
        }}
      >
        {/* ── Outline + fill (single SVG path) ─────────────────────────── */}
        {/* `overflow: visible` lets the beak draw outside the SVG's nominal
            box. The wrapper's drop-shadow filter still follows it because
            drop-shadow operates on the rasterised output, not the box. */}
        {bubbleSize.height > 0 && (
          <svg
            aria-hidden={true}
            width={bubbleSize.width}
            height={bubbleSize.height}
            viewBox={`0 0 ${bubbleSize.width} ${bubbleSize.height}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <path
              d={path}
              fill={palette.neutralWhite}
              stroke={palette.neutral300}
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        )}

        {/* ── Bubble content (sits on top of the SVG) ──────────────────── */}
        <div
          ref={bubbleRef}
          style={{
            position: "relative",
            padding: spacing[4],
            display: "flex",
            flexDirection: "column",
            gap: hasAction ? spacing[4] : 0,
          }}
        >
          {/* Header row: text + optional close button */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: spacing[2] }}>
            {/* Text column */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: spacing[1],
                minWidth: 0,
              }}
            >
              <span
                style={{
                  ...textStyles.body2Bold,
                  color: colors.textPrimary,
                  lineHeight: `${textStyles.body2Bold.lineHeight}px`,
                  letterSpacing: `${textStyles.body2Bold.letterSpacing}px`,
                }}
              >
                {title}
              </span>

              {description && (
                <span
                  style={{
                    ...textStyles.label1Regular,
                    color: colors.textPrimary,
                    lineHeight: `${textStyles.label1Regular.lineHeight}px`,
                    letterSpacing: `${textStyles.label1Regular.letterSpacing}px`,
                  }}
                >
                  {description}
                </span>
              )}
            </div>

            {/* Close button */}
            {hasCloseButton && (
              <button
                onClick={onDismiss}
                aria-label="Close"
                style={{
                  flexShrink: 0,
                  alignSelf: "flex-start",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                  height: 24,
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <Icon svg={CloseIcon} size={16} color={palette.neutral500} accessibilityLabel="Close" />
              </button>
            )}
          </div>

          {/* Action button */}
          {hasAction && (
            <Button colour="Primary" variant="Outline" size="Small" onClick={action!.onClick} style={{ width: "100%" }}>
              {action!.label}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Popover;
