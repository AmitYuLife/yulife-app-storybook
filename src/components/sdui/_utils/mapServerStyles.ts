import { SduiStyle, SduiStyleDynamic } from "@graphql/__generated";
import { findConditionalValue, castValue } from "@utils";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

type LocalStyle = ViewStyle | TextStyle | ImageStyle;

export const mapServerStyles = (styles: SduiStyle[] = []): ViewStyle | null => {
  if (!styles?.length) {
    return null;
  }

  const style = styles.reduce((acc, curr) => {
    const conditionalValue = findConditionalValue(curr.conditionalValue ?? []);

    acc[curr.property] = castValue(conditionalValue ?? curr.value);

    return acc;
  }, {} as Record<string, string | number>);

  return style as ViewStyle;
};

export const mapDynamicServerStyles = (
  styles: Array<SduiStyleDynamic> = [],
  bus: Record<string, any> = {}
): LocalStyle => {
  if (!styles?.length) {
    return null;
  }

  const style = styles.reduce((acc, curr) => {
    const dynamicValue = bus[curr.value] ?? castValue(curr.defaultValue);

    acc[curr.property] = dynamicValue;

    return acc;
  }, {} as Record<string, string | number>);

  return style;
};
