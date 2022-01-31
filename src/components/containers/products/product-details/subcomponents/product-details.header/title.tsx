import React, { ComponentProps, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";

interface Props {
  title: string;
  titleType: ComponentProps<typeof TextTemplate>["type"];
}

export const Title = memo(({ title, titleType }: Props) => (
  <View style={styles.wrapper}>
    <TextTemplate color={Colours.neutral.white} type={titleType || "b1b"}>
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
