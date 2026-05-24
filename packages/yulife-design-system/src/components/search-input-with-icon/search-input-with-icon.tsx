import { CSSProperties, forwardRef, memo, useMemo, useState } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY } from "../../tokens/typography";

export interface ISearchInputWithIconProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onChangeText?: (value: string) => void;
  style?: CSSProperties;
}

const SearchInputWithIcon = forwardRef<HTMLInputElement, ISearchInputWithIconProps>(
  ({ placeholder = "Search", value, onChange, onChangeText, style }, ref) => {
    const [focused, setFocused] = useState(false);

    const wrapperStyle = useMemo(
      (): CSSProperties => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
        padding: "10px 16px",
        borderRadius: "50px",
        border: `1px solid ${focused ? Colours.primary.p600 : Colours.neutral.n200}`,
        backgroundColor: Colours.neutral.white,
        transition: "border-color 0.2s ease",
        ...style,
      }),
      [focused, style]
    );

    const inputStyle: CSSProperties = {
      flex: 1,
      border: "none",
      outline: "none",
      fontFamily: FONT_FAMILY_PRIMARY,
      fontSize: "16px",
      lineHeight: "24px",
      color: Colours.neutral.n900,
      backgroundColor: "transparent",
    };

    return (
      <div style={wrapperStyle}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          style={{ flexShrink: 0, color: focused ? Colours.primary.p600 : Colours.neutral.n500 }}
        >
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          ref={ref}
          type="search"
          value={value}
          placeholder={placeholder}
          style={inputStyle}
          onChange={(e) => {
            onChange?.(e.target.value);
            onChangeText?.(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    );
  }
);

SearchInputWithIcon.displayName = "SearchInputWithIcon";
export default memo(SearchInputWithIcon);
