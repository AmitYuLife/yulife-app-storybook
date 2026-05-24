import { CSSProperties, memo, useMemo } from "react";
import { textStyles, TemplateTextType } from "../../tokens/typography";
import { Colours } from "../../tokens/colours";

export interface ICounterProps {
  value: number;
  type?: TemplateTextType;
  color?: string;
  textBeforeValue?: string;
  textAfterValue?: string;
  style?: CSSProperties;
}

const Counter = ({
  value,
  type = "b1b",
  color = Colours.neutral.n900,
  textBeforeValue,
  textAfterValue,
  style,
}: ICounterProps) => {
  const def = textStyles[type];
  const textStyle = useMemo(
    (): CSSProperties => ({
      fontFamily: def.fontFamily,
      fontWeight: def.fontWeight as CSSProperties["fontWeight"],
      fontSize: `${def.fontSize}px`,
      lineHeight: `${def.lineHeight}px`,
      color,
      ...style,
    }),
    [def, color, style]
  );

  const formatted = value.toLocaleString();

  return (
    <span style={textStyle}>
      {textBeforeValue}
      {formatted}
      {textAfterValue}
    </span>
  );
};

export default memo(Counter);
