import * as React from "react";
import { View } from "react-native";
import { Text } from "@atoms";
import { Button, LinkButton } from "@molecules";
import { TextStyle, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { GenericHeadingAbsolute } from "@organisms";

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
      <View style={styles.contentWrapper}>
        <Text style={styles.heading} bold={true}>
          {heading}
        </Text>
        <Text style={styles.subheading}>{subheading}</Text>
        <Button
          wrapperStyle={styles.buttonWrapper}
          translationKey="screens.update_mobile.cta_label"
          onPress={onPress}
        />
        <LinkButton
          wrapperStyle={styles.buttonWrapperSecondary}
          translationKey="labels.cta.not_now"
          onPress={onPressSecondary}
        />
      </View>
      <GenericHeadingAbsolute onRightIconPress={onPressSecondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
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
  contentWrapper: {
    alignItems: "center",
    backgroundColor: Colours.overlay.white90,
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});
