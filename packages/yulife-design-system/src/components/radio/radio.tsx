import { CSSProperties, InputHTMLAttributes, forwardRef, memo, useMemo } from "react";
import { Colours } from "../../tokens/colours";

export interface IRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "style"> {
  label?: string;
  size?: number;
  activeColor?: string;
  style?: CSSProperties;
}

const Radio = forwardRef<HTMLInputElement, IRadioProps>(
  ({ label, size = 20, activeColor = Colours.primary.p600, style, id, ...props }, ref) => {
    const radioId = id || `radio-${label?.replace(/\s/g, "-") || "item"}`;

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

    const radioStyle = useMemo(
      (): CSSProperties => ({
        width: `${size}px`,
        height: `${size}px`,
        accentColor: activeColor,
        cursor: props.disabled ? "default" : "pointer",
      }),
      [size, activeColor, props.disabled]
    );

    return (
      <label htmlFor={radioId} style={containerStyle}>
        <input ref={ref} id={radioId} type="radio" style={radioStyle} {...props} />
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default memo(Radio);
