import { IBoxProps, PROPERTY_MAP, excludeAutoAdjustPropertyMap } from "@atoms/box/box.types";
import { Style } from "@styles";
import { get, omitBy } from "lodash";
import { useMemo } from "react";
import { ViewStyle } from "react-native";

export const useBoxProps = ({
  size,
  center,
  rounded,
  borderTopRadius,
  borderLeftRadius,
  style: propStyle,
  disableAutoAdjust,
  borderRightRadius,
  borderBottomRadius,
  ...props
}: IBoxProps) => {
  const style = useMemo((): ViewStyle[] => {
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

    return [specialStyles, mappedStyles as ViewStyle, propStyle].filter(Boolean);
  }, [
    props,
    center,
    size,
    rounded,
    borderTopRadius,
    borderBottomRadius,
    borderLeftRadius,
    borderRightRadius,
    propStyle,
    disableAutoAdjust,
  ]);

  const passProps = useMemo(() => {
    return omitBy(props, (_, key) => {
      return get(PROPERTY_MAP, key);
    });
  }, [props]);

  return { style, ...passProps };
};
