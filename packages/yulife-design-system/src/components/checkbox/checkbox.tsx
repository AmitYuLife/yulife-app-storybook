import { CSSProperties, InputHTMLAttributes, forwardRef, memo, useMemo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY } from "../../tokens/typography";

export interface ICheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "style" | "size"> {
  label?: string;
  size?: number;
  activeColor?: string;
  style?: CSSProperties;
}

const CheckBox = forwardRef<HTMLInputElement, ICheckBoxProps>(
  ({ label, size = 20, activeColor = Colours.primary.p600, checked, style, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${label?.replace(/\s/g, "-") || "item"}`;

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

    const boxStyle = useMemo(
      (): CSSProperties => ({
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "4px",
        border: `2px solid ${checked ? activeColor : Colours.neutral.n300}`,
        backgroundColor: checked ? activeColor : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        flexShrink: 0,
      }),
      [size, checked, activeColor]
    );

    const labelStyle: CSSProperties = {
      fontFamily: FONT_FAMILY_PRIMARY,
      fontSize: "14px",
      lineHeight: "18px",
      color: Colours.neutral.n900,
      userSelect: "none",
    };

    return (
      <label htmlFor={checkboxId} className="yu-checkbox" style={containerStyle}>
        <div className="yu-checkbox__box" style={boxStyle}>
          {checked && (
            <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 12 12" fill="none">
              <path d="M10 3 4.5 8.5 2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            checked={checked}
            style={{
              opacity: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              margin: 0,
              cursor: "pointer",
            }}
            {...props}
          />
        </div>
        {label && <span style={labelStyle}>{label}</span>}
      </label>
    );
  }
);

CheckBox.displayName = "CheckBox";

export default memo(CheckBox);
