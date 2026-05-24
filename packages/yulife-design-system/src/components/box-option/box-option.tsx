import { ButtonHTMLAttributes, CSSProperties, ReactNode, forwardRef, memo, useMemo } from "react";
import { Colours } from "../../tokens/colours";

export interface IBoxOptionProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  children: ReactNode;
  isSelected?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
}

const BoxOption = forwardRef<HTMLButtonElement, IBoxOptionProps>(
  ({ children, isSelected, onPress, disabled, style, ...props }, ref) => {
    const buttonStyle = useMemo(
      (): CSSProperties => ({
        display: "block",
        width: "100%",
        padding: "16px",
        borderRadius: "12px",
        border: `2px solid ${isSelected ? Colours.primary.p600 : Colours.neutral.n200}`,
        backgroundColor: isSelected ? Colours.primary.p20 : Colours.neutral.white,
        boxShadow: isSelected ? `0 2px 8px ${Colours.overlay.black10}` : "0 1px 4px rgba(0,0,0,0.06)",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        textAlign: "left",
        transition: "all 0.15s ease",
        transform: isSelected ? "translateY(-1px)" : "none",
        ...style,
      }),
      [isSelected, disabled, style]
    );

    return (
      <button
        ref={ref}
        type="button"
        className="yu-box-option"
        style={buttonStyle}
        onClick={onPress}
        disabled={disabled}
        aria-pressed={isSelected}
        {...props}
      >
        {children}
      </button>
    );
  }
);

BoxOption.displayName = "BoxOption";
export default memo(BoxOption);
