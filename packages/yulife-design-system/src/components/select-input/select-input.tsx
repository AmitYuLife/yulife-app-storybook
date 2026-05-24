import { CSSProperties, forwardRef, memo, useMemo, useState } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY } from "../../tokens/typography";

export interface ISelectInputOption {
  label: string;
  value: string | number;
}

export interface ISelectInputProps {
  options: ISelectInputOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  disabled?: boolean;
  style?: CSSProperties;
  "data-state"?: string;
}

const SelectInput = forwardRef<HTMLSelectElement, ISelectInputProps>(
  ({ options, value, onChange, placeholder, label, errorMessage, disabled, style, "data-state": dataState }, ref) => {
    const [focused, setFocused] = useState(false);
    const hasError = !!errorMessage;

    const wrapperStyle: CSSProperties = { display: "flex", flexDirection: "column", gap: "4px", ...style };

    const labelStyle: CSSProperties = {
      fontFamily: FONT_FAMILY_PRIMARY,
      fontSize: "14px",
      lineHeight: "18px",
      color: hasError ? Colours.textInput.error : Colours.neutral.n800,
    };

    const selectStyle = useMemo(
      (): CSSProperties => ({
        fontFamily: FONT_FAMILY_PRIMARY,
        fontSize: "16px",
        lineHeight: "24px",
        padding: "12px 40px 12px 16px",
        borderRadius: "8px",
        border: `1px solid ${
          hasError ? Colours.textInput.error : focused ? Colours.textInput.focus : Colours.neutral.n200
        }`,
        backgroundColor: disabled ? Colours.neutral.n50 : Colours.neutral.white,
        color: value != null ? Colours.neutral.n900 : Colours.neutral.n400,
        appearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='m6 9 6 6 6-6' stroke='%23838385' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 12px center",
        cursor: disabled ? "default" : "pointer",
        width: "100%",
        outline: "none",
        opacity: disabled ? 0.6 : 1,
      }),
      [hasError, focused, value, disabled]
    );

    const helperStyle: CSSProperties = {
      fontFamily: FONT_FAMILY_PRIMARY,
      fontSize: "12px",
      lineHeight: "16px",
      color: Colours.textInput.error,
    };

    return (
      <div style={wrapperStyle}>
        {label ? <label style={labelStyle}>{label}</label> : null}
        <select
          ref={ref}
          className="yu-select-input"
          data-state={dataState}
          value={value ?? ""}
          disabled={disabled}
          style={selectStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => {
            const opt = options.find((o) => String(o.value) === e.target.value);
            if (opt) {
              onChange?.(opt.value);
            }
          }}
        >
          {placeholder ? (
            <option value="" disabled={true}>
              {placeholder}
            </option>
          ) : null}
          {options.map((opt) => (
            <option key={String(opt.value)} value={String(opt.value)}>
              {opt.label}
            </option>
          ))}
        </select>
        {errorMessage ? <span style={helperStyle}>{errorMessage}</span> : null}
      </div>
    );
  }
);

SelectInput.displayName = "SelectInput";
export default memo(SelectInput);
