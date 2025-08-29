import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";

interface IProps {
  title: string;
}

const SectionHeading = ({ title }: IProps) => (
  <View style={styles.wrapper}>
    <TextTemplate type="l1b" color={Colours.neutral.n400}>
      {title}
    </TextTemplate>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    backgroundColor: Colours.neutral.n50,
    borderTopColor: Colours.neutral.n100,
    borderTopWidth: 1,
    borderBottomColor: Colours.neutral.n100,
    borderBottomWidth: 1,
    paddingBottom: Style.adjust(7),
    paddingTop: Style.adjust(7),
  } as ViewStyle,
});

export default memo(SectionHeading);
