import { CSSProperties, HTMLAttributes, ReactNode, forwardRef, memo, useMemo } from "react";
import { textStyles, TemplateTextType } from "../../tokens/typography";

export interface ITextProps extends Omit<HTMLAttributes<HTMLElement>, "style"> {
  children?: ReactNode;
  type?: TemplateTextType;
  color?: string;
  align?: "left" | "center" | "right";
  style?: CSSProperties;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "div";
  numberOfLines?: number;
}

function getElementForType(type?: TemplateTextType): NonNullable<ITextProps["as"]> {
  if (!type) {
    return "span";
  }

  if (type === "h1" || type === "h2" || type === "h3") {
    return type;
  }

  if (type.startsWith("b")) {
    return "p";
  }

  return "span";
}

const Text = forwardRef<HTMLElement, ITextProps>(
  ({ children, type = "b2", color, align, style: propStyle, as, numberOfLines, ...props }, ref) => {
    const Component: keyof JSX.IntrinsicElements = as || getElementForType(type);

    const style = useMemo((): CSSProperties => {
      const def = textStyles[type];
      const base: CSSProperties = {
        fontFamily: def.fontFamily,
        fontWeight: def.fontWeight as CSSProperties["fontWeight"],
        fontSize: `${def.fontSize}px`,
        lineHeight: `${def.lineHeight}px`,
        letterSpacing: `${def.letterSpacing}px`,
        margin: 0,
      };

      if (color) {
        base.color = color;
      }

      if (align) {
        base.textAlign = align;
      }

      if (numberOfLines != null) {
        base.overflow = "hidden";
        base.display = "-webkit-box";
        base.WebkitLineClamp = numberOfLines;
        base.WebkitBoxOrient = "vertical";
      }

      return { ...base, ...propStyle };
    }, [type, color, align, propStyle, numberOfLines]);

    return (
      <Component ref={ref as never} style={style} {...props}>
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export default memo(Text);
