import React, { ComponentProps } from "react";
import GenericHeading from "./generic-heading";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import { TOP_BAR, Colours } from "@styles";
import { BUTTON_CLOSE, CONNECTION_SETUP_TITLE } from "@ids";

interface OwnProps {
  backgroundColor?: string;
}

type Props = ComponentProps<typeof GenericHeading> & OwnProps;

const GenericHeadingAbsolute = (props: Props) => {
  const { backgroundColor = Colours.neutral.white, hideBorder = true } = props;
  return (
    <View
      pointerEvents="box-none"
      style={StyleSheet.flatten([styles.wrapper, { backgroundColor }])}
      testID={CONNECTION_SETUP_TITLE}
    >
      <GenericHeading {...props} />
      {hideBorder ? null : <View style={styles.topBarShadow} testID={BUTTON_CLOSE} />}
    </View>
  );
};

export const GenericHeadingPad = () => <View style={styles.pad} />;

export default GenericHeadingAbsolute;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    height: TOP_BAR.TOP_BAR_WITH_PAD,
    paddingTop: TOP_BAR.PADDING_TOP,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  whiteBackground: {
    backgroundColor: "white",
  } as ViewStyle,
  topBarShadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: Platform.select({ ios: StyleSheet.hairlineWidth, android: 1 }),
    backgroundColor: "rgba(0,0,0,0.2)",
  } as ViewStyle,
  pad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});
