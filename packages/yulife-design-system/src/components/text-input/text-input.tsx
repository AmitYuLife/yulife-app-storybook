import { CSSProperties, InputHTMLAttributes, forwardRef, memo, useMemo, useState } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY } from "../../tokens/typography";

export interface ITextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "style" | "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
}

const TextField = forwardRef<HTMLInputElement, ITextInputProps>(
  ({ label, error, helperText, containerStyle, inputStyle, id, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const inputId = id || `input-${label?.replace(/\s/g, "-") || "field"}`;

    const wrapperStyle = useMemo(
      (): CSSProperties => ({
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        ...containerStyle,
      }),
      [containerStyle]
    );

    const labelStyle: CSSProperties = {
      fontFamily: FONT_FAMILY_PRIMARY,
      fontSize: "14px",
      lineHeight: "18px",
      color: error ? Colours.textInput.error : Colours.neutral.n800,
      marginBottom: "2px",
    };

    const computedInputStyle = useMemo((): CSSProperties => {
      let borderColor: string = Colours.textInput.inactive;
      if (error) {
        borderColor = Colours.textInput.error;
      } else if (focused) {
        borderColor = Colours.textInput.focus;
      } else if (props.value) {
        borderColor = Colours.textInput.filled;
      }

      return {
        fontFamily: FONT_FAMILY_PRIMARY,
        fontSize: "16px",
        lineHeight: "24px",
        padding: "12px 16px",
        borderRadius: "8px",
        border: `1px solid ${borderColor}`,
        outline: "none",
        transition: "border-color 0.2s ease",
        backgroundColor: Colours.neutral.white,
        color: Colours.neutral.n900,
        width: "100%",
        boxSizing: "border-box",
        ...inputStyle,
      };
    }, [error, focused, props.value, inputStyle]);

    const helperStyle: CSSProperties = {
      fontFamily: FONT_FAMILY_PRIMARY,
      fontSize: "12px",
      lineHeight: "16px",
      color: error ? Colours.textInput.error : Colours.neutral.n600,
      marginTop: "2px",
    };

    return (
      <div style={wrapperStyle}>
        {label && (
          <label htmlFor={inputId} style={labelStyle}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          style={computedInputStyle}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />
        {(error || helperText) && <span style={helperStyle}>{error || helperText}</span>}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default memo(TextField);
