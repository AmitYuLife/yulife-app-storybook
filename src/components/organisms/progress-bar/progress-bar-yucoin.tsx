import React, { ComponentProps, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { ProgressBar } from "@molecules";
import { TextTemplate, YuCoinMiniSvg } from "@atoms";

type Props = ComponentProps<typeof ProgressBar> & { yuCoin: number };

const YU_COIN_IMAGE_AND_TEXT_WIDTH = Style.adjust(58);

export const ProgressBarYuCoin = memo(({ yuCoin, ...props }: Props) => {
  return (
    <ProgressBar {...props} childrenWidth={YU_COIN_IMAGE_AND_TEXT_WIDTH}>
      <View style={styles.wrapper}>
        <YuCoinMiniSvg style={styles.yuCoin} />
        <View style={styles.textWrapper}>
          <TextTemplate type="l1b" color={Colours.orange}>
            {yuCoin}
          </TextTemplate>
        </View>
      </View>
    </ProgressBar>
  );
});

export default ProgressBarYuCoin;

const styles = StyleSheet.create({
  wrapper: {
    height: Style.adjust(18),
    flexDirection: "row",
  },
  yuCoin: {
    marginLeft: Style.adjust(8),
  } as ViewStyle,
  textWrapper: {
    marginLeft: Style.adjust(4),
  } as ViewStyle,
});
