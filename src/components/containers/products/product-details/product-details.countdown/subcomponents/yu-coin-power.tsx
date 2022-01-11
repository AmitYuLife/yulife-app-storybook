import React, { memo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { PressableWithDelay, YuCoinPower } from "@components/molecules";
import { showEarnRateOverlay } from "@components/containers/member/yu/navigation/showEarnRateOverlay";

interface Props {
  coins: number;
}

export const WrappedYuCoinPower = memo(({ coins }: Props) => (
  <PressableWithDelay style={styles.wrapper} onPress={showEarnRateOverlay}>
    <YuCoinPower width={Style.DEVICE_WIDTH - 48} coins={coins} />
  </PressableWithDelay>
));

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(20),
  } as ViewStyle,
});
