import { SkeletonLoading } from "@atoms";
import { battlePassListItemStyles } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { Style, TOP_BAR } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

const BattlePassLoading = () => (
  <View style={styles.wrapper}>
    <View style={styles.background}>
      <View style={styles.container}>
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
    paddingBottom: Style.adjust(6),
  },
  container: {
    paddingLeft: Style.adjust(20),
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
    borderRadius: 10,
    left: -Style.adjust(4),
    top: -Style.adjust(34),
    width: Style.adjust(342),
    height: Style.adjust(64),
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
    shadowOpacity: 0.17,
    shadowRadius: 3.22,
  },
  impact: {
    marginTop: Style.adjust(-15),
  },
  impactItem: {
    width: Style.adjust(343),
    height: Style.adjust(120),
    marginBottom: Style.adjust(24),
    borderRadius: Style.adjust(16),
    marginLeft: -Style.adjust(4),
    top: -Style.adjust(1),
  },
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  },
});

export default memo(BattlePassLoading);
