import { CSSProperties, memo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";

export interface ISettingsHeaderProps {
  title: string;
  style?: CSSProperties;
}

const SettingsHeader = ({ title, style }: ISettingsHeaderProps) => {
  const sectionStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "16px",
    paddingRight: "16px",
    backgroundColor: Colours.neutral.n50,
    borderTop: `1px solid ${Colours.neutral.n100}`,
    borderBottom: `1px solid ${Colours.neutral.n100}`,
    ...style,
  };

  const textStyle: CSSProperties = {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "16px",
    color: Colours.neutral.n600,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  return (
    <div style={sectionStyle}>
      <span style={textStyle}>{title}</span>
    </div>
  );
};

export default memo(SettingsHeader);
