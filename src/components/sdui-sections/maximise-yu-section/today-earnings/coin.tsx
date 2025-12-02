import { YuCoinMiniSvg } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";

export const Coin = memo(() => (
  <View style={styles.wrapper}>
    <YuCoinMiniSvg size={Style.adjust(48)} hasShadow={true} />
  </View>
));

const styles = StyleSheet.create({
  wrapper: { marginTop: Style.adjust(4) },
});
