import React, { ComponentProps, memo } from "react";
import { View, ViewStyle } from "react-native";
import { TEXT_TEMPLATE } from "@ids";
import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";

interface Props {
  title: string;
  titleType: ComponentProps<typeof TextTemplate>["type"];
  marginTop?: number;
}

export const Title = memo(({ title, titleType, marginTop = 16 }: Props) => (
  <View style={[styles.wrapper, { marginTop: Style.adjust(marginTop) }]}>
    <TextTemplate
      testID={TEXT_TEMPLATE(title)}
      color={Colours.neutral.white}
      type={titleType || "b1b"}
      numberOfLines={2}
    >
      {title}
    </TextTemplate>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
});
