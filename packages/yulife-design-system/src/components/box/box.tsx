import { CSSProperties, HTMLAttributes, ReactNode, forwardRef, memo, useMemo } from "react";

const PROPERTY_MAP = {
  p: "padding",
  pt: "paddingTop",
  pl: "paddingLeft",
  pr: "paddingRight",
  pb: "paddingBottom",
  py: "paddingBlock",
  pv: "paddingBlock",
  ph: "paddingInline",
  px: "paddingInline",
  m: "margin",
  mt: "marginTop",
  ml: "marginLeft",
  mr: "marginRight",
  mb: "marginBottom",
  my: "marginBlock",
  mv: "marginBlock",
  mx: "marginInline",
  mh: "marginInline",
  flex: "flex",
  flexGrow: "flexGrow",
  flexWrap: "flexWrap",
  flexBasis: "flexBasis",
  alignSelf: "alignSelf",
  flexShrink: "flexShrink",
  alignItems: "alignItems",
  alignContent: "alignContent",
  flexDirection: "flexDirection",
  justifyContent: "justifyContent",
  borderWidth: "borderWidth",
  borderColor: "borderColor",
  borderTopWidth: "borderTopWidth",
  borderLeftWidth: "borderLeftWidth",
  borderRightWidth: "borderRightWidth",
  borderBottomWidth: "borderBottomWidth",
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom",
  position: "position",
  w: "width",
  width: "width",
  h: "height",
  height: "height",
  minWidth: "minWidth",
  maxWidth: "maxWidth",
  minHeight: "minHeight",
  maxHeight: "maxHeight",
  transform: "transform",
  br: "borderRadius",
  borderRadius: "borderRadius",
  borderTopLeftRadius: "borderTopLeftRadius",
  borderTopRightRadius: "borderTopRightRadius",
  borderBottomLeftRadius: "borderBottomLeftRadius",
  borderBottomRightRadius: "borderBottomRightRadius",
  gap: "gap",
  display: "display",
  opacity: "opacity",
  overflow: "overflow",
  bg: "backgroundColor",
  aspectRatio: "aspectRatio",
  zIndex: "zIndex",
} as const;

type PropertyMapKeys = keyof typeof PROPERTY_MAP;

type BoxStyleProps = {
  [K in PropertyMapKeys]?: string | number;
};

export interface IBoxProps extends BoxStyleProps, Omit<HTMLAttributes<HTMLDivElement>, "style"> {
  children?: ReactNode;
  center?: boolean;
  size?: number;
  rounded?: boolean;
  borderTopRadius?: number;
  borderBottomRadius?: number;
  borderLeftRadius?: number;
  borderRightRadius?: number;
  withBorder?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "article" | "aside" | "main" | "header" | "footer" | "nav";
}

const NON_NUMERIC_PROPS = new Set([
  "bg",
  "flex",
  "zIndex",
  "display",
  "opacity",
  "flexGrow",
  "flexWrap",
  "position",
  "overflow",
  "flexBasis",
  "alignSelf",
  "transform",
  "flexShrink",
  "alignItems",
  "borderColor",
  "aspectRatio",
  "alignContent",
  "flexDirection",
  "justifyContent",
]);

const Box = forwardRef<HTMLDivElement, IBoxProps>(
  (
    {
      children,
      center,
      size,
      rounded,
      borderTopRadius,
      borderBottomRadius,
      borderLeftRadius,
      borderRightRadius,
      withBorder,
      style: propStyle,
      as: Component = "div",
      ...props
    },
    ref
  ) => {
    const { computedStyle, passProps } = useMemo(() => {
      const mapped: CSSProperties = {};
      const pass: Record<string, unknown> = {};

      for (const [key, value] of Object.entries(props)) {
        const cssKey = PROPERTY_MAP[key as PropertyMapKeys];
        if (cssKey) {
          const finalValue = typeof value === "number" && !NON_NUMERIC_PROPS.has(key) ? `${value}px` : value;
          (mapped as Record<string, unknown>)[cssKey] = finalValue;
        } else {
          pass[key] = value;
        }
      }

      if (center) {
        mapped.display = mapped.display || "flex";
        mapped.justifyContent = "center";
        mapped.alignItems = "center";
      }

      if (size != null) {
        mapped.width = `${size}px`;
        mapped.height = `${size}px`;
      }

      if (rounded) {
        mapped.borderRadius = "9999px";
      }

      if (borderTopRadius != null) {
        mapped.borderTopLeftRadius = `${borderTopRadius}px`;
        mapped.borderTopRightRadius = `${borderTopRadius}px`;
      }

      if (borderBottomRadius != null) {
        mapped.borderBottomLeftRadius = `${borderBottomRadius}px`;
        mapped.borderBottomRightRadius = `${borderBottomRadius}px`;
      }

      if (borderLeftRadius != null) {
        mapped.borderTopLeftRadius = `${borderLeftRadius}px`;
        mapped.borderBottomLeftRadius = `${borderLeftRadius}px`;
      }

      if (borderRightRadius != null) {
        mapped.borderTopRightRadius = `${borderRightRadius}px`;
        mapped.borderBottomRightRadius = `${borderRightRadius}px`;
      }

      if (withBorder) {
        mapped.borderWidth = "1px";
        mapped.borderStyle = "solid";
        mapped.borderColor = withBorder;
      }

      return { computedStyle: { ...mapped, ...propStyle }, passProps: pass };
    }, [
      props,
      center,
      size,
      rounded,
      borderTopRadius,
      borderBottomRadius,
      borderLeftRadius,
      borderRightRadius,
      withBorder,
      propStyle,
    ]);

    return (
      <Component ref={ref} style={computedStyle} {...passProps}>
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";

export default memo(Box);
