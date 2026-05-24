import { ButtonHTMLAttributes, CSSProperties, memo, useCallback, useMemo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";

export interface IChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style" | "value"> {
  value: string;
  label?: string;
  isSelected?: boolean;
  onPress?: (value: string) => void;
  disabled?: boolean;
}

export interface IChipListProps {
  chips: IChipProps[];
  style?: CSSProperties;
  isLoading?: boolean;
}

const Chip = memo(({ value, label, isSelected, onPress, disabled, ...props }: IChipProps) => {
  const handleClick = useCallback(() => onPress?.(value), [onPress, value]);

  const chipStyle = useMemo(
    (): CSSProperties => ({
      display: "inline-flex",
      alignItems: "center",
      paddingTop: "6px",
      paddingBottom: "6px",
      paddingLeft: "16px",
      paddingRight: "16px",
      borderRadius: "50px",
      border: `1px solid ${isSelected ? Colours.primary.p600 : Colours.neutral.n200}`,
      backgroundColor: isSelected ? Colours.primary.p50 : Colours.neutral.white,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "all 0.2s ease",
      whiteSpace: "nowrap",
    }),
    [isSelected, disabled]
  );

  const textStyle: CSSProperties = {
    fontFamily: isSelected ? FONT_FAMILY_PRIMARY_BOLD : FONT_FAMILY_PRIMARY,
    fontWeight: isSelected ? "700" : "400",
    fontSize: "14px",
    lineHeight: "18px",
    color: isSelected ? Colours.primary.p600 : Colours.neutral.n800,
  };

  return (
    <button
      type="button"
      className="yu-chip"
      style={chipStyle}
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={isSelected}
      {...props}
    >
      <span style={textStyle}>{label ?? value}</span>
    </button>
  );
});
Chip.displayName = "Chip";

const ChipList = ({ chips, style, isLoading }: IChipListProps) => {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "8px",
    ...style,
  };

  if (isLoading) {
    return (
      <div style={containerStyle}>
        {[80, 60, 100, 72].map((w, i) => (
          <div
            key={i}
            style={{
              width: `${w}px`,
              height: "32px",
              borderRadius: "50px",
              backgroundColor: Colours.neutral.n100,
              animation: "yu-pulse 1.5s ease-in-out infinite",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {chips.map((chip) => (
        <Chip key={chip.value} {...chip} />
      ))}
    </div>
  );
};

export { Chip };
export default memo(ChipList);
