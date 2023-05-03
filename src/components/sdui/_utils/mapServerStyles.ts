import { SduiStyleDynamic } from "@graphql/_core/schema";
import { SduiStyle } from "@graphql/_core/schema/SduiStyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

type LocalStyle = ViewStyle | TextStyle | ImageStyle;

export const mapServerStyles = (styles: SduiStyle[] = []) => {
  if (!styles?.length) {
    return null;
  }

  const style = styles.reduce((acc, curr) => {
    acc[curr.property] = castValue(curr.value);

    return acc;
  }, {} as Record<string, string | number>);

  return style;
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

const IS_FLOAT_NUMBER = /^-?[0-9]*\.?[0-9]*$/;

const castValue = (value: SduiStyle["value"]) => {
  if (IS_FLOAT_NUMBER.test(value)) {
    const parsedValue = parseFloat(value);

    if (!isNaN(parsedValue)) {
      return parsedValue;
    }
  }

  return value;
};
