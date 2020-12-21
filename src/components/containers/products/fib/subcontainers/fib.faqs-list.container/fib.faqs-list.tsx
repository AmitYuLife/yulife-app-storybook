import React from "react";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";
import { PressableWithDelay } from "@components/molecules";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text, ArrowRightSvg } from "@atoms";
import { Style, Colours } from "@styles";

interface Props {
  faqs: IFaq[];
}

export const FibFaqsList = (props: Props) => {
  const { faqs } = props;

  return (
    <View style={styles.wrapper}>
      {faqs.map((item) => (
        <PressableWithDelay key={item.label} style={styles.button} onPress={item.onPress}>
          <Text style={styles.label} bold={true}>
            {item.label}
          </Text>
          <View style={styles.right}>
            <ArrowRightSvg />
          </View>
        </PressableWithDelay>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: Style.adjust(Style.hasNotch ? 40 : 0),
  } as ViewStyle,
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: Style.adjust(24),
    paddingLeft: Style.adjust(32),
    borderBottomWidth: 1,
    borderColor: Colours.neutral.n100,
    minHeight: Style.adjust(64),
  } as ViewStyle,
  label: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.neutral.n700,
    maxWidth: Style.DEVICE_WIDTH - 100,
  } as TextStyle,
  right: {
    marginLeft: "auto",
  } as ViewStyle,
});
