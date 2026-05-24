import React, { useState, useEffect } from "react";
import { colors, palette } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { radii } from "../../tokens/radii";
import { spacing } from "../../tokens/spacing";
import { duration, easing } from "../../tokens/animation";
import { elevation } from "../../tokens/elevation";
import { Button } from "../button";
import type { ButtonColour } from "../button";
import { Icon, CloseIcon, StatusErrorIcon, StatusWarningIcon, StatusSuccessIcon, StatusInfoIcon } from "../../icons";
import {
  YugiStatusErrorColourIcon,
  YugiStatusWarningColourIcon,
  YugiStatusSuccessColourIcon,
  YugiStatusInfoColourIcon,
} from "../../icons/colour";

// ─── Constants ────────────────────────────────────────────────────────────────

/**
 * How long the isExiting flag stays true after a close is triggered.
 * Must be ≥ the exit transition duration + a small buffer.
 */
const EXIT_DURATION_MS = duration.exit + 15;

// ─── Types ────────────────────────────────────────────────────────────────────

export type InlineBannerStatus = "success" | "warning" | "error" | "info";

export interface InlineBannerProps {
  /** The status determines colours, icon, and button style. */
  status: InlineBannerStatus;
  /** Bold title text. */
  title: string;
  /** Optional supporting body text. */
  description?: string;
  /**
   * Show the 48px YugiStatus character icon on the left.
   * Defaults to `true`. Set to `false` for a compact text-only layout.
   */
  showIcon?: boolean;
  /** Optional call-to-action button rendered below the content. */
  action?: { label: string; onClick: () => void };
  /**
   * When provided, renders a dismiss (×) button in the top-right corner.
   * Close and action are typically mutually exclusive in the design.
   */
  onDismiss?: () => void;
  /**
   * `"inline"` (default) — static position in the document flow.
   * `"toast"` — fixed at the bottom of the viewport with enter/exit animations.
   */
  mode?: "inline" | "toast";
  /**
   * Controls the toast enter/exit animation. Only used when `mode="toast"`.
   * - `true` — slide in and fade in.
   * - `false` — slide out and fade out.
   * When omitted, the toast is always visible (useful for static rendering).
   */
  isVisible?: boolean;
  /** Inline style overrides for the root container. */
  style?: React.CSSProperties;
}

// ─── Status config ────────────────────────────────────────────────────────────

type StatusConfig = {
  borderColor: string;
  background: string;
  buttonColour: ButtonColour;
  icon: React.ReactNode;
  statusIcon: React.FC<{ size?: number; color?: string; accessibilityLabel?: string }>;
};

const STATUS_CONFIG: Record<InlineBannerStatus, StatusConfig> = {
  error: {
    borderColor: colors.feedbackDanger,
    background: colors.dangerSurface,
    buttonColour: "Error",
    icon: <YugiStatusErrorColourIcon size={48} />,
    statusIcon: (p) => (
      <Icon
        svg={StatusErrorIcon}
        size={16}
        color={p.color ?? "#FFFFFF"}
        accessibilityLabel={p.accessibilityLabel ?? ""}
      />
    ),
  },
  warning: {
    borderColor: colors.feedbackWarning,
    background: colors.warningSurface,
    buttonColour: "Warning",
    icon: <YugiStatusWarningColourIcon size={48} />,
    statusIcon: (p) => (
      <Icon
        svg={StatusWarningIcon}
        size={16}
        color={p.color ?? "#FFFFFF"}
        accessibilityLabel={p.accessibilityLabel ?? ""}
      />
    ),
  },
  success: {
    borderColor: colors.feedbackSuccess,
    background: colors.successSurface,
    buttonColour: "Success",
    icon: <YugiStatusSuccessColourIcon size={48} />,
    statusIcon: (p) => (
      <Icon
        svg={StatusSuccessIcon}
        size={16}
        color={p.color ?? "#FFFFFF"}
        accessibilityLabel={p.accessibilityLabel ?? ""}
      />
    ),
  },
  info: {
    borderColor: colors.feedbackInfo,
    background: colors.infoSurface,
    buttonColour: "Info",
    icon: <YugiStatusInfoColourIcon size={48} />,
    statusIcon: (p) => (
      <Icon
        svg={StatusInfoIcon}
        size={16}
        color={p.color ?? "#FFFFFF"}
        accessibilityLabel={p.accessibilityLabel ?? ""}
      />
    ),
  },
};

// ─── InlineBanner ─────────────────────────────────────────────────────────────

/**
 * InlineBanner
 *
 * A contextual feedback component that communicates a status (success, warning,
 * error, info) with an optional Yugi mascot icon, body text, action button,
 * and dismiss control.
 *
 * ## Modes
 * - **Inline** (default): renders in the document flow, suitable for single-page
 *   layouts and form feedback.
 * - **Toast**: fixed at the bottom of the viewport (24 px from all edges) with
 *   slide-up enter and slide-down exit animations driven by the `isVisible` prop.
 *   Uses the same animation tokens as ModalTemplate.
 *
 * ## Anatomy
 * - Container: 1px solid border (status colour), `radii.xl` corners, `*Surface` bg
 * - Icon: 48×48 `YugiStatus*ColourIcon` (optional, default on)
 * - Content: title (label1Bold, 14px) + description (label1Regular, 14px)
 * - Button: full-width, 32px tall, flat status colour, with leading status icon
 * - Dismiss: `CloseIcon` top-right (optional)
 *
 * Figma reference: App — Core UI, node 7074:19458
 * https://www.figma.com/design/aNnODOQlMlk38LrQVs63oq/App---Core-UI?node-id=7074-19458
 */
export const InlineBanner: React.FC<InlineBannerProps> = ({
  status,
  title,
  description,
  showIcon = true,
  action,
  onDismiss,
  mode = "inline",
  isVisible,
  style,
}) => {
  const config = STATUS_CONFIG[status];
  const isToast = mode === "toast";
  const isControlled = isToast && isVisible !== undefined;

  // ── Toast animation state ──────────────────────────────────────────────────
  //
  // Two-state pattern:
  //   `mounted`     — DOM presence (false → return null)
  //   `animVisible` — CSS transform/opacity target (false = off-screen)
  //
  // Enter: mount with animVisible=false (paints at the "from" position), then
  // two rAFs later flip animVisible=true so the browser commits the starting
  // paint before the CSS transition begins. This prevents the jump-to-visible
  // issue that occurs when the element is absent from the DOM before entering.
  //
  // Exit: flip animVisible=false (plays CSS transition), then unmount after the
  // transition duration.
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

  if (isControlled && !mounted) {
    return null;
  }

  // ── Container styles ───────────────────────────────────────────────────────

  const containerStyle: React.CSSProperties = isToast
    ? {
        position: "fixed",
        bottom: spacing[6],
        left: spacing[6],
        right: spacing[6],
        zIndex: 1100,
        boxShadow: elevation.toast,
        // Slide up from below on enter, slide back down on exit
        ...(isControlled && {
          transform: animVisible ? "translateY(0)" : "translateY(calc(100% + 24px))",
          opacity: animVisible ? 1 : 0,
          transition: isExiting
            ? `transform ${duration.exit}ms ${easing.exit}, opacity ${duration.exit}ms ${easing.exit}`
            : `transform ${duration.slow}ms ${easing.enter}, opacity ${duration.normal}ms ${easing.default}`,
        }),
      }
    : {};

  // ── Content area width when icon is shown ──────────────────────────────────
  // With a 48px icon + 12px gap + 16px padding × 2 = 92px taken up
  // so text column fills the remainder

  const hasAction = Boolean(action);
  const hasDismiss = Boolean(onDismiss);

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        // Base layout
        display: "flex",
        flexDirection: "column",
        gap: hasAction ? spacing[4] : 0,
        // Visual spec
        border: `1px solid ${config.borderColor}`,
        borderRadius: radii.xl,
        backgroundColor: config.background,
        padding: spacing[4],
        overflow: "hidden",
        boxSizing: "border-box",
        // Toast positioning
        ...containerStyle,
        // Consumer overrides
        ...style,
      }}
    >
      {/* ── Content lockup ─────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: spacing[3],
          alignItems: showIcon ? "center" : "flex-start",
        }}
      >
        {/* Icon */}
        {showIcon && <div style={{ flexShrink: 0 }}>{config.icon}</div>}

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: spacing[1],
            flex: 1,
            minWidth: 0,
          }}
        >
          <span
            style={{
              ...textStyles.label1Bold,
              color: palette.neutral600,
              lineHeight: `${textStyles.label1Bold.lineHeight}px`,
              letterSpacing: `${textStyles.label1Bold.letterSpacing}px`,
            }}
          >
            {title}
          </span>
          {description && (
            <span
              style={{
                ...textStyles.label1Regular,
                color: palette.neutral600,
                lineHeight: `${textStyles.label1Regular.lineHeight}px`,
                letterSpacing: `${textStyles.label1Regular.letterSpacing}px`,
              }}
            >
              {description}
            </span>
          )}
        </div>

        {/* Dismiss button — flex sibling so it reserves its own space and never
            overlaps the text column. alignSelf: flex-start keeps it pinned to
            the top of the row even when the row uses alignItems: center. */}
        {hasDismiss && (
          <button
            onClick={onDismiss}
            aria-label="Dismiss"
            style={{
              alignSelf: "flex-start",
              flexShrink: 0,
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
            <Icon svg={CloseIcon} size={16} color={palette.neutral500} accessibilityLabel="Dismiss" />
          </button>
        )}
      </div>

      {/* ── Action button ──────────────────────────────────────────────────── */}
      {hasAction && (
        <Button
          colour={config.buttonColour}
          variant="Solid"
          size="Small"
          onClick={action!.onClick}
          leadingIcon={<config.statusIcon color="#FFFFFF" />}
          style={{
            width: "100%",
            height: 32,
            borderRadius: radii.xl,
            padding: "4px 16px",
          }}
        >
          {action!.label}
        </Button>
      )}
    </div>
  );
};

export default InlineBanner;
