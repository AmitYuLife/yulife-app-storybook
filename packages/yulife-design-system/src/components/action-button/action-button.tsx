import { ButtonHTMLAttributes, CSSProperties, ReactNode, memo, useCallback } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";
import ArrowButton from "../arrow-button/arrow-button";

export interface IActionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style" | "onClick"> {
  icon: ReactNode;
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
}

const ActionButton = ({ icon, label, onPress, disabled, style, ...props }: IActionButtonProps) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onPress?.();
    }
  }, [onPress, disabled]);

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "12px",
    padding: "16px",
    backgroundColor: Colours.neutral.white,
    borderRadius: "12px",
    border: `1px solid ${Colours.neutral.n150}`,
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: "100%",
    ...style,
  };

  const labelStyle: CSSProperties = {
    flex: 1,
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "24px",
    color: Colours.neutral.n900,
    textAlign: "left",
  };

  return (
    <button
      type="button"
      className="yu-action-button"
      style={containerStyle}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      <div style={{ flexShrink: 0 }}>{icon}</div>
      <span style={labelStyle}>{label}</span>
      <ArrowButton decorative={true} intent="transparent" direction="right" size={32} style={{ flexShrink: 0 }} />
    </button>
  );
};

export default memo(ActionButton);
