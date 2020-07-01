import React, { memo, useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle, View } from "react-native";
import { EarnRateSVG } from "../svg/earn-rate-svg";
import { Style, Colours } from "@styles";
import { EARN_RATE_BUTTON } from "@ids";

interface Props {
  earnRate: number;
  onEarnRatePress: () => void;
  topDistance: number;
}
const WRAPPER_HEIGHT = 48;
const WRAPPER_WIDTH = 152;
const WRAPPER_HEIGHT_HALVED = WRAPPER_HEIGHT / 2;

export const EarnRateButton = memo(function ({ earnRate, onEarnRatePress, topDistance = Style.adjust(140) }: Props) {
  const [top, setTop] = useState(topDistance - WRAPPER_HEIGHT_HALVED);
  useEffect(() => {
    setTop(topDistance - WRAPPER_HEIGHT_HALVED);
  }, [topDistance]);
  return (
    <TouchableOpacity activeOpacity={1} onPress={onEarnRatePress} style={[styles.wrapper, { top }]}>
      <View style={StyleSheet.absoluteFill} testID={EARN_RATE_BUTTON(earnRate)}>
        <EarnRateSVG earnRate={earnRate} height={WRAPPER_HEIGHT} width={WRAPPER_WIDTH} />
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    height: WRAPPER_HEIGHT,
    width: WRAPPER_WIDTH,
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
