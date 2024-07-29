import { SkeletonLoading } from "@atoms";
import { GenericHeadingPad, NavBar, TopBar } from "@organisms";
import { enterpriseRewardItemStyles } from "@organisms/enterprise-reward-item/enterprise-reward-item";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { Style, TOP_BAR } from "@styles";
import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  onLeftMenuPress: () => void;
}

const EnterpriseLoading = ({ onLeftMenuPress }: IProps) => {
  const leftIcons = useMemo(
    () => [
      {
        icon: LeftIcon.MENU,
        onPress: onLeftMenuPress,
        style: { marginRight: Style.adjust(16) },
      },
    ],
    [onLeftMenuPress]
  );

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.container}>
        <SkeletonLoading style={styles.title} />
        <SkeletonLoading style={styles.description} />
        <View style={styles.rewards}>
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonLoading key={index} style={styles.rewardsItem} />
          ))}
        </View>
        <SkeletonLoading style={styles.progressBar} />
        <View style={styles.impact}>
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoading key={index} style={styles.impactItem} />
          ))}
        </View>
      </View>
      <View style={styles.topbarWrapper}>
        <TopBar type="default" leftIcons={leftIcons} />
      </View>
      <NavBar activeIndex={4} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    marginLeft: Style.adjust(24),
    marginRight: Style.adjust(24),
    marginTop: Style.adjust(24),
  },
  title: {
    width: Style.adjust(171),
    height: Style.adjust(24),
  },
  description: {
    width: Style.adjust(129),
    height: Style.adjust(16),
    marginTop: Style.adjust(5),
  },
  rewards: {
    marginVertical: Style.adjust(24),
    flexDirection: "row",
  },
  rewardsItem: {
    ...enterpriseRewardItemStyles.wrapper,
    marginRight: Style.adjust(8),
  },
  progressBar: {
    width: Style.adjust(343),
    height: Style.adjust(36),
  },
  impact: {
    marginTop: Style.adjust(40),
  },
  impactItem: {
    width: Style.adjust(343),
    height: Style.adjust(100),
    marginBottom: Style.adjust(14),
  },
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  },
});

export default memo(EnterpriseLoading);
