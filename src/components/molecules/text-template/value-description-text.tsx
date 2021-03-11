import React from "react";
import { StyleSheet, ViewStyle, TextStyle, View, Platform } from "react-native";
import { Text, TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";

interface Props {
  value: string;
  description: string;
  type?: "default" | "yucoin" | "vertical";
  style?: ViewStyle;
}

export const ValueDescription = (props: Props) => {
  const { value, description, type = "default", style } = props;

  if (type === "vertical") {
    return (
      <View style={StyleSheet.flatten([verticalStyles.wrapper, style])}>
        <TextTemplate textAlign="center" type="l2">
          {description}
        </TextTemplate>
        <TextTemplate textAlign="center" type="b2b">
          {value}
        </TextTemplate>
      </View>
    );
  }

  const { valueStyle, descriptionStyle } = getStyle(type);

  return (
    <View style={StyleSheet.flatten([styles.wrapper, style])}>
      <Text bold={true} style={valueStyle}>
        {value}
      </Text>
      <Text bold={true} style={descriptionStyle}>
        {description}
      </Text>
    </View>
  );
};

const getStyle = (type: Props["type"]) => {
  switch (type) {
    case "yucoin":
      return {
        valueStyle: yucoinStyle.value,
        descriptionStyle: yucoinStyle.description,
      };
    default:
      return {
        valueStyle: defaultStyle.value,
        descriptionStyle: defaultStyle.description,
      };
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
  } as ViewStyle,
});

const verticalStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  } as ViewStyle,
});

const defaultStyle = StyleSheet.create({
  value: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(34),
    letterSpacing: 1,
    color: Colours.neutral.n800,
  } as TextStyle,
  description: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(28),
    letterSpacing: 0.8,
    color: Colours.neutral.n800,
    marginBottom: Platform.select({
      ios: 1,
      android: 2,
    }),
  } as TextStyle,
});

const yucoinStyle = StyleSheet.create({
  value: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.orange,
  } as TextStyle,
  description: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(28),
    letterSpacing: 0.8,
    color: Colours.orangeNew,
    marginBottom: Platform.select({
      ios: 2,
      android: Style.adjust(4),
    }),
    marginLeft: Style.adjust(8),
  } as TextStyle,
});
