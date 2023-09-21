import React, { memo, useMemo } from "react";
import { Source } from "react-native-fast-image";
import { Block, Image, TextTemplate, YuCoinMiniSvg } from "@atoms";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";

interface IProps {
  title: string;
  milestone: string;
  rewardText: string;
  icon: Source;
  isPowerUp?: boolean;
}

const ActivityPanel = ({ title, milestone, rewardText, icon, isPowerUp }: IProps) => {
  const colours = useMemo(
    () =>
      isPowerUp
        ? { backgroundColour: "#FCE7F1", colour: "#CC0D6E" }
        : { backgroundColour: "#F7F3FF", colour: "#5C5757" },
    [isPowerUp]
  );

  const iconStyle = useMemo(
    () => ({
      ...styles.icon,
      backgroundColor: colours.backgroundColour,
    }),
    [colours]
  );

  return (
    <Block style={styles.wrapper}>
      <View style={iconStyle}>
        <Image width={Style.adjust(24)} height={Style.adjust(24)} source={icon} />
      </View>
      <TextTemplate type="l1b">{title}</TextTemplate>
      <View style={styles.milestone}>
        <TextTemplate type="l1">{milestone}</TextTemplate>
      </View>
      <View style={styles.rewardWrapper}>
        <View style={styles.rewardText}>
          <TextTemplate type="l1b" color={colours.colour}>
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
    backgroundColor: Colours.neutral.white,
    alignItems: "center",
    paddingTop: Style.adjust(12),
    paddingBottom: Style.adjust(16),
    paddingHorizontal: Style.adjust(30),
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
    marginTop: Style.adjust(4),
  },
  rewardWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(32),
  },
  rewardText: {
    marginRight: Style.adjust(4),
  },
});

export default memo(ActivityPanel);
