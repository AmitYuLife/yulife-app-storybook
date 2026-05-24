import { CSSProperties, forwardRef, memo, useCallback, useRef, useMemo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";

export interface IShortCodeInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  length?: number;
  autoFocus?: boolean;
  style?: CSSProperties;
}

const ShortCodeInput = forwardRef<HTMLInputElement, IShortCodeInputProps>(
  ({ value, onChange, onSubmit, length = 6, autoFocus, style }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = (ref ?? inputRef) as React.RefObject<HTMLInputElement>;

    const sanitise = useCallback(
      (raw: string) =>
        raw
          .toUpperCase()
          .replace(/[^A-Z0-9]/g, "")
          .slice(0, length),
      [length]
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitised = sanitise(e.target.value);
        onChange(sanitised);
        if (sanitised.length === length) {
          onSubmit?.(sanitised);
        }
      },
      [sanitise, onChange, onSubmit, length]
    );

    const containerStyle: CSSProperties = {
      display: "flex",
      flexDirection: "row",
      gap: "8px",
      position: "relative",
      ...style,
    };

    const hiddenInputStyle: CSSProperties = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      cursor: "text",
    };

    const cells = Array.from({ length }, (_, i) => {
      const char = value[i] ?? "";
      const isActive = i === value.length;
      return { char, isActive };
    });

    return (
      <div style={containerStyle} onClick={() => mergedRef.current?.focus()}>
        {cells.map(({ char, isActive }, i) => (
          <CellBox key={i} char={char} isActive={isActive} />
        ))}
        <input
          ref={mergedRef}
          type="text"
          value={value}
          onChange={handleChange}
          autoFocus={autoFocus}
          autoCapitalize="characters"
          autoComplete="one-time-code"
          style={hiddenInputStyle}
          aria-label="Short code input"
        />
      </div>
    );
  }
);

const CellBox = memo(({ char, isActive }: { char: string; isActive: boolean }) => {
  const cellStyle = useMemo(
    (): CSSProperties => ({
      width: "44px",
      height: "52px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      border: `2px solid ${isActive ? Colours.primary.p600 : char ? Colours.neutral.n300 : Colours.neutral.n200}`,
      backgroundColor: Colours.neutral.white,
      fontFamily: FONT_FAMILY_PRIMARY_BOLD,
      fontWeight: "700",
      fontSize: "20px",
      color: Colours.neutral.n900,
    }),
    [char, isActive]
  );
  return <div style={cellStyle}>{char || (isActive ? <Cursor /> : null)}</div>;
});
CellBox.displayName = "CellBox";

const Cursor = () => (
  <div
    style={{
      width: "2px",
      height: "24px",
      backgroundColor: Colours.primary.p600,
      animation: "yu-blink 1s step-end infinite",
    }}
  />
);

ShortCodeInput.displayName = "ShortCodeInput";
export default memo(ShortCodeInput);
