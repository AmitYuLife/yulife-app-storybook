import { CSSProperties, ChangeEvent, InputHTMLAttributes, forwardRef, memo, useCallback, useMemo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY } from "../../tokens/typography";

/** Matches `Colours.checkMilestone.unfilledCircle` in the app theme. */
const DEFAULT_INACTIVE_COLOR = "rgb(230, 230, 230)";

export interface ISwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "style" | "size"> {
  label?: string;
  activeColor?: string;
  inactiveColor?: string;
  size?: "small" | "medium";
  style?: CSSProperties;
}

const SIZES = {
  small: { track: { w: 36, h: 20 }, thumb: 16 },
  medium: { track: { w: 48, h: 28 }, thumb: 24 },
} as const;

const Switch = memo(
  forwardRef<HTMLInputElement, ISwitchProps>(
    (
      {
        label,
        activeColor = Colours.primary.p600,
        inactiveColor = DEFAULT_INACTIVE_COLOR,
        size = "medium",
        checked,
        style,
        id,
        onChange,
        ...props
      },
      ref
    ) => {
      const switchId = id || `switch-${label?.replace(/\s/g, "-") || "toggle"}`;
      const dims = SIZES[size];
      const thumbInset = (dims.track.h - dims.thumb) / 2;

      const containerStyle = useMemo(
        (): CSSProperties => ({
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: props.disabled ? "default" : "pointer",
          opacity: props.disabled ? 0.5 : 1,
          ...style,
        }),
        [props.disabled, style]
      );

      const trackStyle = useMemo(
        (): CSSProperties => ({
          position: "relative",
          width: `${dims.track.w}px`,
          height: `${dims.track.h}px`,
          borderRadius: `${dims.track.h}px`,
          backgroundColor: checked ? activeColor : inactiveColor,
          transition: "background-color 0.2s ease",
          cursor: props.disabled ? "default" : "pointer",
          flexShrink: 0,
        }),
        [checked, activeColor, inactiveColor, dims, props.disabled]
      );

      const thumbStyle = useMemo(
        (): CSSProperties => ({
          position: "absolute",
          top: `${thumbInset}px`,
          left: checked ? `${dims.track.w - dims.thumb - thumbInset}px` : `${thumbInset}px`,
          width: `${dims.thumb}px`,
          height: `${dims.thumb}px`,
          borderRadius: "50%",
          backgroundColor: Colours.neutral.white,
          transition: "left 0.2s ease, background-color 0.2s ease",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          pointerEvents: "none",
        }),
        [checked, dims, thumbInset]
      );

      const labelStyle: CSSProperties = {
        fontFamily: FONT_FAMILY_PRIMARY,
        fontSize: "14px",
        lineHeight: "18px",
        color: Colours.neutral.n900,
        userSelect: "none",
      };

      const inputStyle: CSSProperties = {
        opacity: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        margin: 0,
        cursor: props.disabled ? "default" : "pointer",
      };

      const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
          onChange?.(event);
        },
        [onChange]
      );

      return (
        <label htmlFor={switchId} className="yu-switch" style={containerStyle}>
          <div className="yu-switch__track" style={trackStyle}>
            <div style={thumbStyle} aria-hidden="true" />
            <input
              ref={ref}
              id={switchId}
              type="checkbox"
              role="switch"
              checked={checked}
              style={inputStyle}
              onChange={handleChange}
              {...props}
            />
          </div>
          {label ? <span style={labelStyle}>{label}</span> : null}
        </label>
      );
    }
  )
);

Switch.displayName = "Switch";

export default Switch;
