import { CSSProperties, memo, useCallback } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY } from "../../tokens/typography";

export interface IHyperlinkProps {
  title: string;
  url?: string;
  onPress?: () => void;
  underline?: boolean;
  style?: CSSProperties;
}

const Hyperlink = ({ title, url, onPress, underline = true, style }: IHyperlinkProps) => {
  const handleClick = useCallback(() => {
    if (onPress) {
      onPress();
      return;
    }

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, [onPress, url]);

  const linkStyle: CSSProperties = {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "14px",
    lineHeight: "18px",
    color: Colours.button.link,
    textDecoration: underline ? "underline" : "none",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    ...style,
  };

  return (
    <button type="button" style={linkStyle} onClick={handleClick}>
      {title}
    </button>
  );
};

export default memo(Hyperlink);
