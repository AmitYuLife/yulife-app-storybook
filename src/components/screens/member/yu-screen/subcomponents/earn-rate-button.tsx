import React, { memo } from "react";
import { StyleSheet, ViewStyle, TextStyle, View } from "react-native";
import { EarnRateSVG } from "../svg/earn-rate-svg";
import { Style, Colours } from "@styles";
import { EARN_RATE_BUTTON } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules";

interface Props {
  earnRate: number;
  onEarnRatePress: () => void;
}
const WRAPPER_HEIGHT = 48;
const WRAPPER_WIDTH = 152;

export const EarnRateButton = memo(function ({ earnRate, onEarnRatePress }: Props) {
  return (
    <TouchableOpacityWithDelay activeOpacity={0.85} onPress={onEarnRatePress} style={styles.wrapper}>
      <View style={StyleSheet.absoluteFill} testID={EARN_RATE_BUTTON(earnRate)}>
        <EarnRateSVG earnRate={earnRate} height={WRAPPER_HEIGHT} width={WRAPPER_WIDTH} />
      </View>
    </TouchableOpacityWithDelay>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    height: WRAPPER_HEIGHT,
    width: WRAPPER_WIDTH,
    bottom: -WRAPPER_HEIGHT / 2,
    alignSelf: "center",
  } as ViewStyle,
  text: {
    color: Colours.yuscreen.brown,
    fontSize: Style.adjust(14),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.adjust(1),
    lineHeight: Style.adjust(24),
    marginRight: Style.adjust(3),
  } as TextStyle,
  absoluteTextWrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});
