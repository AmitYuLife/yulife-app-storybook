import React, { ComponentProps } from "react";
import { ViewStyle, View, Platform } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, Colours, StyleSheet } from "@styles";
import { VALUE_DESCRIPTION } from "@ids";

type TextTemplateType = ComponentProps<typeof TextTemplate>["type"];

interface Props {
  value: string;
  description: string;
  type?: "default" | "yucoin" | "vertical" | "verticalLarge";
  style?: ViewStyle;
}

export const ValueDescription = (props: Props) => {
  const { value, description, type = "default", style } = props;

  if (!value || !description) {
    return null;
  }

  if (["vertical", "verticalLarge"].includes(type)) {
    return (
      <View style={StyleSheet.flatten([verticalStyles.wrapper, style])}>
        <TextTemplate textAlign="center" type="l2">
          {description}
        </TextTemplate>
        <TextTemplate textAlign="center" type={type === "verticalLarge" ? "b1b" : "b2b"}>
          {value}
        </TextTemplate>
      </View>
    );
  }

  const { valueProps, descriptionProps, descriptionWrapperStyle } = getStyle(type);

  return (
    <View style={StyleSheet.flatten([styles.wrapper, style])} testID={VALUE_DESCRIPTION(value, description)}>
      <View>
        <TextTemplate {...valueProps}>{value}</TextTemplate>
      </View>
      <View {...descriptionWrapperStyle}>
        <TextTemplate {...descriptionProps}>{description}</TextTemplate>
      </View>
    </View>
  );
};

const getStyle = (type: Props["type"]) => {
  switch (type) {
    case "yucoin":
      return {
        valueProps: {
          type: "h2" as TextTemplateType,
          color: Colours.orange,
        },
        descriptionProps: {
          type: "h3" as TextTemplateType,
          color: Colours.orangeNew,
        },
        descriptionWrapperStyle: {
          marginStart: Style.adjust(6),
          marginBottom: Platform.select({
            ios: 0,
            android: Style.adjust(2),
          }),
        },
      };
    default:
      return {
        valueProps: {
          type: "h2" as TextTemplateType,
          color: Colours.neutral.n800,
        },
        descriptionProps: {
          type: "h3" as TextTemplateType,
          color: Colours.neutral.n800,
        },
        descriptionWrapperStyle: {
          marginBottom: Platform.select({
            ios: 0,
            android: Style.adjust(2),
          }),
        },
      };
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
