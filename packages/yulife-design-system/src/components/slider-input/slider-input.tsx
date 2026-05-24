import { CSSProperties, forwardRef, memo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY } from "../../tokens/typography";

export interface ISliderInputProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  leftLabel?: string;
  rightLabel?: string;
  style?: CSSProperties;
}

const SliderInput = forwardRef<HTMLInputElement, ISliderInputProps>(
  ({ value = 0, min = 0, max = 10, step = 1, onChange, leftLabel, rightLabel, style }, ref) => {
    const containerStyle: CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: "100%",
      ...style,
    };

    const trackStyle: CSSProperties = {
      width: "100%",
      accentColor: Colours.primary.p600,
      cursor: "pointer",
      height: "4px",
    };

    const labelsStyle: CSSProperties = { display: "flex", justifyContent: "space-between" };

    const labelStyle: CSSProperties = {
      fontFamily: FONT_FAMILY_PRIMARY,
      fontSize: "12px",
      lineHeight: "16px",
      color: Colours.neutral.n600,
    };

    return (
      <div style={containerStyle}>
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          style={trackStyle}
          onChange={(e) => onChange?.(Number(e.target.value))}
        />
        {(leftLabel || rightLabel) && (
          <div style={labelsStyle}>
            {leftLabel && <span style={labelStyle}>{leftLabel}</span>}
            {rightLabel && <span style={labelStyle}>{rightLabel}</span>}
          </div>
        )}
      </div>
    );
  }
);

SliderInput.displayName = "SliderInput";
export default memo(SliderInput);
