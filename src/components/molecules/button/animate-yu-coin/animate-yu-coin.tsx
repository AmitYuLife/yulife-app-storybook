import { DETOX_ENABLED } from "@services/socket";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import LottieView from "../../lottie-view/lottie-view";
import { View } from "react-native";

export const AnimateYuCoin = memo(() => (
  <View style={bubblingCoinsStyles.wrapper} pointerEvents="none">
    <LottieView
      style={bubblingCoinsStyles.bubblingCoins}
      source={require("./bubbling-coins.json")}
      autoPlay={!DETOX_ENABLED}
      loop={false}
    />
  </View>
));

const bubblingCoinsStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
  },
  bubblingCoins: {
    width: Style.DEVICE_WIDTH,
    height: (240 / 375) * Style.DEVICE_WIDTH,
  },
});
