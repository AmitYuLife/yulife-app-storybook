import { LottieView } from "@components/molecules";
import { DETOX_ENABLED } from "@services/socket";
import { Style } from "@styles";
import { memo } from "react";
import { View, StyleSheet } from "react-native";

export const YuCoinAnimation = memo(() => (
  <View pointerEvents="none" style={styles.wrapper}>
    <LottieView style={styles.coinBank} source={require("./coin-bank.json")} autoPlay={!DETOX_ENABLED} loop={false} />
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: Style.adjust(2),
    top: Style.adjust(10),
  },
  coinBank: {
    height: Style.adjust(72),
    width: Style.adjust(124),
  },
});
