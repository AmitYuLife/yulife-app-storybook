import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";

interface Props {
  title: string;
}

export const Title = memo(({ title }: Props) => (
  <View style={styles.wrapper}>
    <TextTemplate color={Colours.neutral.white} type="b1b">
      {title}
    </TextTemplate>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Style.adjust(8),
  } as ViewStyle,
});
