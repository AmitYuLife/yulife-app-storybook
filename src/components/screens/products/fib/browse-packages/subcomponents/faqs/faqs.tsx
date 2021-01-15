import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Heading } from "../common";
import { Text, Button } from "@atoms";
import { Style, Colours } from "@styles";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";

const CONTENT =
  "Visit our FAQs to find more information on anything you’re unsure of. If you need additional details, chat to us below!";
interface IFaqs {
  navigateToFaqsList: () => void;
}

export const Faqs = memo(({ navigateToFaqsList }: IFaqs) => (
  <View>
    <Heading title="Have a question?" />
    <Text style={styles.content}>{CONTENT}</Text>
    <Button
      type="Tertiary"
      size="Fill"
      onPress={navigateToFaqsList}
      label="FAQs"
      height={Style.adjust(60)}
      leftIcon={BUTTON_ICON.QUESTION_BUBBLE}
      rightIcon={BUTTON_ICON.ARROW_RIGHT}
      wrapperStyle={styles.margin}
    />
  </View>
));

const styles = StyleSheet.create({
  content: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    marginTop: Style.adjust(16),
    color: Colours.neutral.n700,
  } as TextStyle,
  margin: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
});
