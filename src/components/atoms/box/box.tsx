import { Style } from "@styles";
import { memo, useMemo } from "react";
import { ViewStyle, View } from "react-native";
import Animated from "react-native-reanimated";
import { IBoxProps, PROPERTY_MAP, excludeAutoAdjustPropertyMap } from "./box.types";

const Box = ({
  size,
  style,
  center,
  exiting,
  entering,
  children,
  rounded,
  forceAnimated,
  borderTopRadius,
  borderLeftRadius,
  disableAutoAdjust,
  borderRightRadius,
  borderBottomRadius,
  ...props
}: IBoxProps) => {
  const ViewComponent = !!entering || !!exiting || forceAnimated ? Animated.View : View;

  const computedStyles = useMemo((): ViewStyle[] => {
    const adjust = (value: number) => (disableAutoAdjust ? value : Style.adjust(value));

    const mappedStyles = Object.entries(props).reduce((acc, [key, value]) => {
      const mappedKey = PROPERTY_MAP[key as keyof typeof PROPERTY_MAP];
      const adjustedValue =
        !excludeAutoAdjustPropertyMap[mappedKey] && !disableAutoAdjust && typeof value === "number"
          ? adjust(value)
          : value;
      acc[mappedKey] = adjustedValue as ViewStyle[keyof ViewStyle];

      return acc;
    }, {} as Record<keyof ViewStyle, ViewStyle[keyof ViewStyle]>);

    const specialStyles: ViewStyle = {
      ...(center ? { justifyContent: "center", alignItems: "center" } : null),
      ...(size ? { width: adjust(size), height: adjust(size) } : null),
      ...(rounded ? { borderRadius: 1000 } : null),
      ...(borderTopRadius
        ? { borderTopLeftRadius: adjust(borderTopRadius), borderTopRightRadius: adjust(borderTopRadius) }
        : null),
      ...(borderBottomRadius
        ? {
            borderBottomLeftRadius: adjust(borderBottomRadius),
            borderBottomRightRadius: adjust(borderBottomRadius),
          }
        : null),
      ...(borderLeftRadius
        ? {
            borderTopLeftRadius: adjust(borderLeftRadius),
            borderBottomLeftRadius: adjust(borderLeftRadius),
          }
        : null),
      ...(borderRightRadius
        ? {
            borderTopRightRadius: adjust(borderRightRadius),
            borderBottomRightRadius: adjust(borderRightRadius),
          }
        : null),
    };

    return [specialStyles, mappedStyles as ViewStyle, style].filter(Boolean);
  }, [
    props,
    center,
    size,
    rounded,
    borderTopRadius,
    borderBottomRadius,
    borderLeftRadius,
    borderRightRadius,
    style,
    disableAutoAdjust,
  ]);

  return (
    <ViewComponent style={computedStyles} {...props} entering={entering} exiting={exiting}>
      {children}
    </ViewComponent>
  );
};

export default memo(Box);
