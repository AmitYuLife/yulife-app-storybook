import * as React from "react";
import { View } from "react-native";
import { Button, Text } from "@atoms";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";

type ButtonProps = React.ComponentProps<typeof Button>;

export interface IMobileUpdateModalProps {
  onPress?: ButtonProps["onPress"];
  onPressSecondary?: ButtonProps["onPress"];
  heading: string;
  subheading: string;
}

export default function MobileUpdateModalScreen({
  heading,
  subheading,
  onPress,
  onPressSecondary,
}: IMobileUpdateModalProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading} bold={true}>
        {heading}
      </Text>
      <Text style={styles.subheading}>{subheading}</Text>
      <Button wrapperStyle={styles.buttonWrapper} label="Update my app" onPress={onPress} type="Primary" />
      <Button wrapperStyle={styles.buttonWrapperSecondary} label="Not now" onPress={onPressSecondary} type={"Link"} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
  buttonWrapperSecondary: {
    marginTop: Style.adjust(15),
  } as ViewStyle,
  heading: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(35),
    textAlign: "center",
  } as TextStyle,
  subheading: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(20),
    marginHorizontal: Style.adjust(32),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.8),
    marginTop: Style.adjust(20),
    textAlign: "center",
  } as TextStyle,
  wrapper: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});
