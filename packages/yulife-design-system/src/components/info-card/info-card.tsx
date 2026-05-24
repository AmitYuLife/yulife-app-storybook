import { CSSProperties, ReactNode, memo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";

export interface IInfoCardProps {
  icon: ReactNode;
  title?: string;
  description?: string;
  customBody?: ReactNode;
  style?: CSSProperties;
}

const InfoCard = ({ icon, title, description, customBody, style }: IInfoCardProps) => {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "12px",
    padding: "16px",
    backgroundColor: Colours.neutral.white,
    borderRadius: "12px",
    border: `1px solid ${Colours.neutral.n150}`,
    ...style,
  };

  const contentStyle: CSSProperties = { flex: 1, display: "flex", flexDirection: "column", gap: "4px" };

  const titleStyle: CSSProperties = {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "24px",
    color: Colours.neutral.n900,
    margin: 0,
  };

  const descStyle: CSSProperties = {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
    color: Colours.neutral.n700,
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <div style={{ flexShrink: 0 }}>{icon}</div>
      <div style={contentStyle}>
        {customBody ?? (
          <>
            {title && <p style={titleStyle}>{title}</p>}
            {description && <p style={descStyle}>{description}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default memo(InfoCard);
