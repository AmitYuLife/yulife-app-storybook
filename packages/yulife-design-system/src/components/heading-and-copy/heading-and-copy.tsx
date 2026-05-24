import { CSSProperties, memo } from "react";
import { textStyles, TemplateTextType } from "../../tokens/typography";
import { Colours } from "../../tokens/colours";

export interface IHeadingAndCopyProps {
  title?: string;
  titleType?: TemplateTextType;
  body: string;
  style?: CSSProperties;
}

const HeadingAndCopy = ({ title, titleType = "h3", body, style }: IHeadingAndCopyProps) => {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    ...style,
  };

  const def = textStyles[titleType];
  const titleStyle: CSSProperties = {
    fontFamily: def.fontFamily,
    fontWeight: def.fontWeight as CSSProperties["fontWeight"],
    fontSize: `${def.fontSize}px`,
    lineHeight: `${def.lineHeight}px`,
    color: Colours.neutral.n900,
    margin: 0,
  };

  const bodyStyle: CSSProperties = {
    fontFamily: textStyles.b2.fontFamily,
    fontWeight: textStyles.b2.fontWeight as CSSProperties["fontWeight"],
    fontSize: `${textStyles.b2.fontSize}px`,
    lineHeight: `${textStyles.b2.lineHeight}px`,
    color: Colours.neutral.n700,
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      {title && <p style={titleStyle}>{title}</p>}
      <p style={bodyStyle}>{body}</p>
    </div>
  );
};

export default memo(HeadingAndCopy);
