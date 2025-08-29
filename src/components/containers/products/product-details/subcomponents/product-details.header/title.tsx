import React, { ComponentProps, memo } from "react";
import { View, ViewStyle } from "react-native";
import { TEXT_TEMPLATE } from "@ids";
import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";

interface Props {
  title: string;
  titleType: ComponentProps<typeof TextTemplate>["type"];
}

export const Title = memo(({ title, titleType }: Props) => (
  <View style={styles.wrapper}>
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
    marginTop: Style.adjust(16),
  } as ViewStyle,
});
