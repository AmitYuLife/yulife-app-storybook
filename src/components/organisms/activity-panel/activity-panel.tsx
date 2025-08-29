import { Colours, Style, StyleSheet } from "@styles";
import React, { memo, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { Block, Image, TextTemplate, YuCoinMiniSvg } from "@atoms";
import { GetYuCoinPowerInfoQuery } from "@graphql/__generated";
import { ACTIVITY_PANEL_REWARD, ACTIVITY_PANEL_TITLE } from "@ids";

type IGetYuCoinPowerInfoSectionItems = GetYuCoinPowerInfoQuery["getYuCoinPowerInfo"]["sections"][0]["items"][0];
interface IProps extends IGetYuCoinPowerInfoSectionItems {
  style?: ViewStyle;
  isPoweredUp?: boolean;
}

const ActivityPanel = ({ title, milestone, rewardText, icon, isPoweredUp, style }: IProps) => {
  const colours = useMemo(
    () =>
      isPoweredUp
        ? { backgroundColour: "#FCE7F1", colour: "#CC0D6E" }
        : { backgroundColour: "#F7F3FF", colour: "#5C5757" },
    [isPoweredUp]
  );

  const iconStyle = useMemo(
    () => ({
      ...styles.icon,
      backgroundColor: colours.backgroundColour,
    }),
    [colours]
  );

  return (
    <Block style={[styles.wrapper, style]}>
      <View style={iconStyle}>
        <Image width={Style.adjust(24)} height={Style.adjust(24)} source={icon} />
      </View>
      <TextTemplate type="l1b" testID={ACTIVITY_PANEL_TITLE(title)}>
        {title}
      </TextTemplate>
      <View style={styles.milestone}>
        <TextTemplate type="l1">{milestone}</TextTemplate>
      </View>
      <View style={styles.rewardWrapper}>
        <View style={styles.rewardText}>
          <TextTemplate type="l1b" color={colours.colour} testID={ACTIVITY_PANEL_REWARD(rewardText)}>
            {rewardText}
          </TextTemplate>
        </View>
        <YuCoinMiniSvg />
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    paddingVertical: Style.adjust(10),
    backgroundColor: Colours.neutral.white,
  },
  icon: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: Style.adjust(48),
    height: Style.adjust(48),
    marginBottom: Style.adjust(12),
  },
  milestone: {
    flex: 1,
    marginTop: Style.adjust(4),
  },
  rewardWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(12),
  },
  rewardText: {
    marginEnd: Style.adjust(4),
  },
});

export default memo(ActivityPanel);
