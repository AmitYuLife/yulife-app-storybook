import React from "react";
import { PressableWithDelay } from "@components/molecules";
import { View, StyleSheet, ViewStyle } from "react-native";
import { ArrowRightSvg, TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";

interface Props {
  faqs: Array<{ label: string; onPress: () => void }>;
}

export const FibFaqsList = (props: Props) => {
  const { faqs } = props;

  return (
    <View style={styles.wrapper}>
      {faqs.map((item) => (
        <PressableWithDelay key={item.label} style={styles.button} onPress={item.onPress}>
          <TextTemplate type="b2b">{item.label}</TextTemplate>
          <View style={styles.right}>
            <ArrowRightSvg colour={Colours.primary.p600} />
          </View>
        </PressableWithDelay>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(32),
    borderRadius: 8,
    borderColor: Colours.metallic.m100,
    borderWidth: 1,
    marginBottom: Style.adjust(40),
  } as ViewStyle,
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: Style.adjust(24),
    minHeight: Style.adjust(56),
  } as ViewStyle,
  right: {
    marginLeft: "auto",
  } as ViewStyle,
});
