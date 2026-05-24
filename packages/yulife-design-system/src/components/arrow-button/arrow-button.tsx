import { ButtonHTMLAttributes, CSSProperties, forwardRef, memo, useMemo } from "react";
import { Colours } from "../../tokens/colours";

type ArrowIntent = "primary" | "secondary" | "transparent";
type ArrowDirection = "right" | "left" | "up" | "down";

export interface IArrowButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  intent?: ArrowIntent;
  direction?: ArrowDirection;
  size?: number;
  style?: CSSProperties;
  /** Renders a non-interactive span instead of a button — use inside other pressable elements. */
  decorative?: boolean;
}

const ROTATE_MAP: Record<ArrowDirection, string> = {
  right: "rotate(0deg)",
  down: "rotate(90deg)",
  left: "rotate(180deg)",
  up: "rotate(270deg)",
};

const ArrowButton = forwardRef<HTMLButtonElement, IArrowButtonProps>(
  ({ intent = "primary", direction = "right", size = 40, style, disabled, decorative, className, ...props }, ref) => {
    const containerStyle = useMemo(
      (): CSSProperties => ({
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        border: intent === "secondary" ? `1px solid ${Colours.neutral.n200}` : "none",
        backgroundColor: intent === "primary" ? Colours.primary.p600 : "transparent",
        ...style,
      }),
      [intent, size, disabled, style]
    );

    const arrowColor = intent === "primary" ? Colours.neutral.white : Colours.neutral.n700;

    const arrow = (
      <svg
        width={size * 0.4}
        height={size * 0.4}
        viewBox="0 0 24 24"
        fill="none"
        style={{ transform: ROTATE_MAP[direction] }}
        aria-hidden={true}
      >
        <path d="m9 18 6-6-6-6" stroke={arrowColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );

    if (decorative) {
      return (
        <span ref={ref as never} style={containerStyle} aria-hidden={true} {...props}>
          {arrow}
        </span>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        className={["yu-arrow-button", `yu-arrow-button--${intent}`, className].filter(Boolean).join(" ")}
        style={containerStyle}
        disabled={disabled}
        {...props}
      >
        {arrow}
      </button>
    );
  }
);

ArrowButton.displayName = "ArrowButton";
export default memo(ArrowButton);
