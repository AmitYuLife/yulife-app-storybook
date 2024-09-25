import { SkeletonLoading } from "@atoms";
import { battlePassListItemStyles } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { Style, TOP_BAR } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

const BattlePassLoading = () => (
  <View style={styles.wrapper}>
    <View style={styles.background}>
      <View style={styles.container}>
        <SkeletonLoading style={styles.title} />
        <SkeletonLoading style={styles.description} />
        <View style={styles.rewards}>
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonLoading key={index} style={styles.rewardsItem} />
          ))}
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <SkeletonLoading style={styles.progressBar} />
      <View style={styles.impact}>
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonLoading key={index} style={styles.impactItem} />
        ))}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  background: {
    backgroundColor: "#290163",
  },
  container: {
    paddingLeft: Style.adjust(24),
    paddingRight: Style.adjust(24),
  },
  title: {
    width: Style.adjust(171),
    height: Style.adjust(24),
    backgroundColor: "#320178",
  },
  description: {
    width: Style.adjust(129),
    height: Style.adjust(16),
    marginTop: Style.adjust(5),
    backgroundColor: "#320178",
  },
  rewards: {
    marginVertical: Style.adjust(24),
    flexDirection: "row",
  },
  rewardsItem: {
    ...battlePassListItemStyles.wrapper,
    marginRight: Style.adjust(8),
    backgroundColor: "#320178",
    marginBottom: Style.adjust(20),
  },
  progressBar: {
    width: Style.adjust(343),
    height: Style.adjust(36),
    top: -Style.adjust(18),
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

export default memo(BattlePassLoading);
