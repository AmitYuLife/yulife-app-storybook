import React, { useState } from "react";
import { palette, colors } from "../../tokens/colors";
import { textStyles } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";
import { duration, easing } from "../../tokens/animation";

// ─── Figma colour tokens ───────────────────────────────────────────────────────
// Source: YuLife App Storybook, node 12783:985
// These map to the "Colours" variable collection in the Figma file.
// Where an exact palette match exists it is referenced; raw hex is used otherwise.

/** Primary/P700* — active fill */
const P700 = colors.actionPrimaryHover; // #E30D76 = palette.pink700
/** Primary/P800 — pressed fill (one step darker than active) */
const P800 = colors.actionPrimaryPressed; // #CC0D6E = palette.pink800
/** Primary/P900 — active drop-shadow */
const P900 = palette.pink900; // #900860
/** Primary/P100 — disabled fill */
const P100 = "#F9BDD9";
/** Primary/P200 — disabled drop-shadow / disabled outline border */
const P200 = "#F791BF";

/** Neutral/N800 — secondary label */
const N800 = "#5A5A5C";
/** Neutral/N600 — secondary outline border (active) */
const N600 = "#838385";
/** Neutral/N400 — secondary label (disabled) */
const N400 = "#ABABAD";
/** Neutral/N300 — secondary drop-shadow + secondary outline border (disabled) */
const N300 = "#BFBFC2";
/** Neutral/N100 — secondary fill (disabled) */
const N100 = "#E7E7EB";

// Status colour fills — from the feedback semantic tokens
const S_SUCCESS = colors.feedbackSuccess; // #66CC78
const S_WARNING = colors.feedbackWarning; // #F19E22
const S_ERROR = colors.feedbackDanger; // #FF5F5F
const S_INFO = colors.feedbackInfo; // #5A89D8

// ─── Types ────────────────────────────────────────────────────────────────────

export type ButtonColour = "Primary" | "Secondary" | "Success" | "Warning" | "Error" | "Info";
export type ButtonVariant = "Solid" | "Outline" | "Text";
export type ButtonSize = "Large" | "Small";

export interface ButtonProps {
  /** Button label */
  children: React.ReactNode;
  /**
   * Color scheme.
   * - `Primary` (pink) and `Secondary` (neutral white) are general-purpose.
   * - `Success`, `Warning`, `Error`, `Info` are status colours intended for
   *   use in InlineBanner action buttons. These are always flat (no shadow).
   */
  colour?: ButtonColour;
  /** Visual style */
  variant?: ButtonVariant;
  /** Size — Large (48 px tall, 224 px wide) or Small (content-sized) */
  size?: ButtonSize;
  /** Disabled state */
  disabled?: boolean;
  /** Icon rendered before the label */
  leadingIcon?: React.ReactNode;
  /** Icon rendered after the label */
  trailingIcon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Inline style overrides — use to override width for full-bleed CTAs */
  style?: React.CSSProperties;
  /** Accessible label */
  "aria-label"?: string;
  /** HTML button type */
  type?: "button" | "submit" | "reset";
}

// ─── Button ───────────────────────────────────────────────────────────────────

/** Drop-shadow height in px — the amount the button travels on press. */
const SHADOW_DEPTH = 4;

const STATUS_COLOURS: ButtonColour[] = ["Success", "Warning", "Error", "Info"];

/**
 * Button
 *
 * Implements the YuLife App Storybook button design system with full variant
 * support (Primary/Secondary × Solid/Outline/Text × Large/Small × enabled/disabled).
 *
 * Solid variants animate on press: the button travels down by the shadow depth
 * (4 px) while the drop-shadow collapses, giving a natural tactile feel.
 *
 * Status colour variants (Success/Warning/Error/Info) are flat — no shadow or
 * press travel. They are used as action buttons inside InlineBanner.
 *
 * Figma reference: YuLife App Storybook, node 12783:985
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=12783-985
 */

export const Button: React.FC<ButtonProps> = ({
  children,
  colour = "Primary",
  variant = "Solid",
  size = "Large",
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
  style: styleProp,
  "aria-label": ariaLabel,
  type = "button",
}) => {
  const isLarge = size === "Large";
  const isPrimary = colour === "Primary";
  const isStatus = STATUS_COLOURS.includes(colour);
  // Status buttons are flat — no shadow or press travel
  const hasShadow = variant === "Solid" && !disabled && !isStatus;

  const [pressed, setPressed] = useState(false);
  const isPressed = hasShadow && pressed;

  // Destructure any transform from the style override so we can compose it
  // with our press translateY rather than letting it silently overwrite it.
  const { transform: externalTransform, ...restStyleProp } = styleProp ?? {};

  const pressTransform = isPressed ? `translateY(${SHADOW_DEPTH}px)` : "translateY(0)";
  const composedTransform = hasShadow
    ? [externalTransform, pressTransform].filter(Boolean).join(" ")
    : externalTransform;

  // ── Container base ──────────────────────────────────────────────────────────
  const containerBase: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    outline: "none",
    textDecoration: "none",
    // Size
    height: isLarge ? 48 : undefined,
    padding: isLarge ? "16px 32px" : "8px 16px",
    borderRadius: radii.pill,
    // Default width for Large; Small sizes to content
    width: isLarge ? 224 : undefined,
    // Press-down animation — only for shadow variants
    transform: composedTransform,
    transition: hasShadow
      ? `transform ${duration.fast}ms ${easing.spring}, box-shadow ${duration.fast}ms ${easing.spring}, background-color ${duration.fast}ms ${easing.spring}`
      : undefined,
  };

  // ── Variant-specific container styles ───────────────────────────────────────
  let containerStyle: React.CSSProperties;

  const statusFill = (() => {
    if (colour === "Success") {
      return S_SUCCESS;
    }

    if (colour === "Warning") {
      return S_WARNING;
    }

    if (colour === "Error") {
      return S_ERROR;
    }

    if (colour === "Info") {
      return S_INFO;
    }

    return undefined;
  })();

  if (isStatus && variant === "Solid") {
    containerStyle = {
      ...containerBase,
      border: "none",
      backgroundColor: disabled ? N100 : statusFill,
    };
  } else if (isStatus && variant === "Outline") {
    containerStyle = {
      ...containerBase,
      backgroundColor: "transparent",
      border: `1px solid ${disabled ? N300 : statusFill}`,
    };
  } else if (isStatus && variant === "Text") {
    containerStyle = {
      ...containerBase,
      backgroundColor: "transparent",
      border: "1px solid transparent",
    };
  } else if (variant === "Solid" && isPrimary) {
    containerStyle = {
      ...containerBase,
      border: "none",
      backgroundColor: disabled ? P100 : isPressed ? P800 : P700,
      boxShadow: isPressed ? "none" : `0px ${SHADOW_DEPTH}px 0px 0px ${disabled ? P200 : P900}`,
    };
  } else if (variant === "Solid" && !isPrimary) {
    containerStyle = {
      ...containerBase,
      border: "none",
      backgroundColor: disabled ? N100 : palette.neutralWhite,
      boxShadow: isPressed ? "none" : `0px ${SHADOW_DEPTH}px 0px 0px ${N300}`,
    };
  } else {
    // Outline + Text: bordered container, no shadow or press travel.
    const borderColor = (() => {
      if (isPrimary && variant === "Outline") {
        return disabled ? P200 : P700;
      }

      if (!isPrimary) {
        return disabled ? N300 : N600;
      }

      return "transparent"; // Primary Text
    })();

    containerStyle = {
      ...containerBase,
      backgroundColor: "transparent",
      border: `1px solid ${borderColor}`,
    };
  }

  // ── Content opacity (disabled dimming) ──────────────────────────────────────
  // Solid Primary: colour change, no opacity. All other disabled states dim content.
  const contentOpacity = disabled && !(variant === "Solid" && isPrimary) ? 0.4 : 1;

  // ── Label colour ────────────────────────────────────────────────────────────
  const labelColor = (() => {
    if (isStatus && variant === "Solid") {
      return palette.neutralWhite;
    }

    if (isStatus) {
      return disabled ? N400 : statusFill;
    }

    if (variant === "Solid" && isPrimary) {
      return palette.neutralWhite;
    }

    if (variant === "Solid" && !isPrimary) {
      return N800;
    }

    if (isPrimary) {
      return P700;
    }

    // Secondary Outline/Text disabled uses a flat colour rather than opacity
    return disabled ? N400 : N800;
  })();

  // ── Text style ──────────────────────────────────────────────────────────────
  const textToken = isLarge ? textStyles.button : textStyles.label1Bold;
  const labelStyle: React.CSSProperties = {
    ...textToken,
    color: labelColor,
    lineHeight: `${textToken.lineHeight}px`,
    letterSpacing: `${textToken.letterSpacing}px`,
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  // ── Press event handlers ─────────────────────────────────────────────────────
  const pressHandlers = hasShadow
    ? {
        onMouseDown: () => setPressed(true),
        onMouseUp: () => setPressed(false),
        onMouseLeave: () => setPressed(false),
        onTouchStart: () => setPressed(true),
        onTouchEnd: () => setPressed(false),
        onTouchCancel: () => setPressed(false),
      }
    : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{ ...containerStyle, ...restStyleProp }}
      {...pressHandlers}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: spacing[2],
          overflow: "hidden",
          opacity: contentOpacity,
        }}
      >
        {leadingIcon && (
          <span
            aria-hidden={true}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}
          >
            {leadingIcon}
          </span>
        )}
        <span style={labelStyle}>{children}</span>
        {trailingIcon && (
          <span
            aria-hidden={true}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}
          >
            {trailingIcon}
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;
