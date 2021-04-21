import React, { memo } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { TertiaryButton, Text } from "@atoms";
import { Style, Colours } from "@styles";
import { Heading } from "./heading";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";

interface Props {
  title: string;
  description: string;
  buttonLabel: string;
  buttonLeftIcon?: BUTTON_ICON;
  iconSvgXml?: string;
  onPress: () => void;
}

export const CommonWrapperWithButton = memo(
  ({ title, description, onPress, buttonLabel, buttonLeftIcon, iconSvgXml }: Props) => (
    <View>
      <Heading title={title} />
      <Text style={styles.content}>{description}</Text>
      <TertiaryButton
        size="Fill"
        onPress={onPress}
        label={buttonLabel}
        leftIcon={buttonLeftIcon}
        rightIcon={BUTTON_ICON.ARROW_RIGHT}
        wrapperStyle={styles.margin}
        iconSvgXml={iconSvgXml}
      />
    </View>
  )
);

const styles = StyleSheet.create({
  content: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.products.fib.n800,
  } as TextStyle,
  margin: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
});
