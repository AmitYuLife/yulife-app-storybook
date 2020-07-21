import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Heading, DEFAULT_TEXT_PAD_LEFT } from "../common";
import { Style } from "@styles";
import { Faq } from "../faqs/faq";
import { customCoverPromptSVG } from "./assets/icon";

interface ICustomCoverPrompt {
  onPressCustomCoverPrompt: () => void;
}

export const CustomCoverPrompt = memo(({ onPressCustomCoverPrompt }: ICustomCoverPrompt) => (
  <View style={styles.wrapper}>
    <Heading wrapperStyle={styles.headingWrapper} title="Need something different?" />
    <Faq
      iconSvgXml={customCoverPromptSVG}
      label="Create custom cover"
      onPress={onPressCustomCoverPrompt}
      redirectType="internal"
    />
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(48),
  } as ViewStyle,
  headingWrapper: {
    paddingLeft: DEFAULT_TEXT_PAD_LEFT,
  } as ViewStyle,
});
