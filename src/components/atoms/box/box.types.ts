import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { BaseAnimationBuilder } from "react-native-reanimated";

export const PROPERTY_MAP = {
  // Padding
  p: "padding",
  pt: "paddingTop",
  pl: "paddingLeft",
  pr: "paddingRight",
  pb: "paddingBottom",
  py: "paddingVertical",
  pv: "paddingVertical",
  ph: "paddingHorizontal",
  px: "paddingHorizontal",

  // Margin
  m: "margin",
  mt: "marginTop",
  ml: "marginLeft",
  mr: "marginRight",
  mb: "marginBottom",
  my: "marginVertical",
  mv: "marginVertical",
  mx: "marginHorizontal",
  mh: "marginHorizontal",

  // Flex
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

  // Border
  borderWidth: "borderWidth",
  borderColor: "borderColor",
  borderTopWidth: "borderTopWidth",
  borderLeftWidth: "borderLeftWidth",
  borderRightWidth: "borderRightWidth",
  borderBottomWidth: "borderBottomWidth",

  // Position
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom",
  position: "position",

  // Size
  w: "width",
  width: "width",
  h: "height",
  height: "height",
  minWidth: "minWidth",
  maxWidth: "maxWidth",
  minHeight: "minHeight",
  maxHeight: "maxHeight",

  // Transform
  transform: "transform",
  transformOrigin: "transformOrigin",

  // Border radius
  br: "borderRadius",
  borderTopLeftRadius: "borderTopLeftRadius",
  borderTopRightRadius: "borderTopRightRadius",
  borderBottomLeftRadius: "borderBottomLeftRadius",
  borderBottomRightRadius: "borderBottomRightRadius",

  // Shadow
  elevation: "elevation",
  shadowColor: "shadowColor",
  shadowOffset: "shadowOffset",
  shadowRadius: "shadowRadius",
  shadowOpacity: "shadowOpacity",

  // General
  gap: "gap",
  display: "display",
  opacity: "opacity",
  overflow: "overflow",
  bg: "backgroundColor",
  aspectRatio: "aspectRatio",
} as const;

const EXCLUDE_AUTO_ADJUST_PROPERTIES: (keyof typeof PROPERTY_MAP)[] = [
  "bg",
  "flex",
  "display",
  "opacity",
  "flexGrow",
  "flexWrap",
  "position",
  "overflow",
  "flexBasis",
  "alignSelf",
  "transform",
  "elevation",
  "flexShrink",
  "alignItems",
  "borderColor",
  "shadowColor",
  "alignContent",
  "shadowOffset",
  "flexDirection",
  "shadowOpacity",
  "justifyContent",
  "transformOrigin",
] as const;

// For faster access
export const excludeAutoAdjustPropertyMap = EXCLUDE_AUTO_ADJUST_PROPERTIES.reduce((acc, curr) => {
  acc[curr] = true;
  return acc;
}, {} as Record<string, true>);

interface IBoxSpecialProps {
  style?: ViewStyle;
  children?: ReactNode;
  disableAutoAdjust?: boolean;

  /**
   * Applies flex-direction and align-items center
   */
  center?: boolean;

  /**
   * Applies same width & height
   */
  size?: number;

  /**
   * Entering Reanimated layout animation
   */
  entering?: BaseAnimationBuilder;
  /**
   * Exiting Reanimated layout animation
   */
  exiting?: BaseAnimationBuilder;

  /**
   * Force Animated.View to be used
   */
  forceAnimated?: boolean;

  // Border radius
  borderTopRadius?: number;
  borderBottomRadius?: number;
  borderLeftRadius?: number;
  borderRightRadius?: number;
  rounded?: boolean;
}

export type IBoxProps = Partial<{
  [Key in keyof typeof PROPERTY_MAP]: ViewStyle[typeof PROPERTY_MAP[Key]];
}> &
  IBoxSpecialProps;
