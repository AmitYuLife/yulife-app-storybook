import React, { ComponentProps, memo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { ProgressBar } from "@molecules";
import { TextTemplate, YuCoinMiniSvg } from "@atoms";
import { YuCoinAnimation } from "./yu-coin-animation/yu-coin-animation";
import { DETOX_ENABLED } from "@services/socket";

type Props = ComponentProps<typeof ProgressBar> & {
  yuCoin: number;
  animateYuCoin?: boolean;
  yucoinDisplayedAmount?: number;
};

const YU_COIN_IMAGE_AND_TEXT_WIDTH = Style.adjust(58);

export const ProgressBarYuCoin = memo(({ yuCoin, animateYuCoin, yucoinDisplayedAmount, ...props }: Props) => {
  return (
    <>
      {!animateYuCoin || DETOX_ENABLED ? null : <YuCoinAnimation />}
      <ProgressBar {...props} childrenWidth={YU_COIN_IMAGE_AND_TEXT_WIDTH}>
        <View style={styles.wrapper}>
          <YuCoinMiniSvg style={styles.yuCoin} />
          <View style={styles.textWrapper}>
            <TextTemplate type="l1b" color={Colours.orange}>
              {yucoinDisplayedAmount ?? yuCoin}
            </TextTemplate>
          </View>
        </View>
      </ProgressBar>
    </>
  );
});

export default ProgressBarYuCoin;

const styles = StyleSheet.create({
  wrapper: {
    height: Style.adjust(18),
    flexDirection: "row",
  },
  yuCoin: {
    marginStart: Style.adjust(8),
  } as ViewStyle,
  textWrapper: {
    marginStart: Style.adjust(4),
  } as ViewStyle,
});
