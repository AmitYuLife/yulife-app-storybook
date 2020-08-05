import React, { memo } from "react";
import { StyleSheet, ViewStyle, View, Platform } from "react-native";
import { EarnRateSVG } from "../svg/earn-rate-svg";
import { EARN_RATE_BUTTON } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules";
import { Style } from "@styles";

interface Props {
  earnRate: number;
  onEarnRatePress: () => void;
}
const WRAPPER_HEIGHT = 48;
const WRAPPER_WIDTH = 152;
const BUTTON_POSITION = 96;

const getTopBarFiller = () => {
  if (Platform.OS === "android") {
    return 0;
  }

  if (Style.isIphoneXPlus()) {
    return 42;
  }

  if (Style.isIphoneX()) {
    return 37;
  }

  return 16;
};

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
    top: getTopBarFiller() + BUTTON_POSITION,
    alignSelf: "center",
    zIndex: 1,
  } as ViewStyle,
});
