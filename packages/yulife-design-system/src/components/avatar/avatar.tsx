import { CSSProperties, memo, useMemo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";

export interface IAvatarProps {
  src?: string;
  name?: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  style?: CSSProperties;
}

function getInitials(name?: string): string {
  if (!name) {
    return "?";
  }

  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const Avatar = ({
  src,
  name,
  size = 40,
  backgroundColor = Colours.primary.p50,
  textColor = Colours.primary.p600,
  style,
}: IAvatarProps) => {
  const containerStyle = useMemo(
    (): CSSProperties => ({
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: src ? "transparent" : backgroundColor,
      flexShrink: 0,
      ...style,
    }),
    [size, src, backgroundColor, style]
  );

  const textStyle = useMemo(
    (): CSSProperties => ({
      fontFamily: FONT_FAMILY_PRIMARY_BOLD,
      fontWeight: "700",
      fontSize: `${Math.round(size * 0.4)}px`,
      color: textColor,
      userSelect: "none",
    }),
    [size, textColor]
  );

  if (src) {
    return (
      <div style={containerStyle}>
        <img src={src} alt={name || "Avatar"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    );
  }

  return (
    <div style={containerStyle} aria-label={name || "Avatar"}>
      <span style={textStyle}>{getInitials(name)}</span>
    </div>
  );
};

export default memo(Avatar);
