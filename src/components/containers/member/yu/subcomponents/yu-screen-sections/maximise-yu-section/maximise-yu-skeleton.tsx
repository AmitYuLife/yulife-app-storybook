import React from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { SkeletonLoading } from "@atoms";
import { NUDGE_ITEM_MARGIN, NUDGE_ITEM_WIDTH } from "./nudge-item/styles";

export const MaximiseYuSkeleton = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.todayEarnings}>
        <SkeletonLoading style={styles.coin} />
        <View style={styles.todayEarningsContent}>
          <SkeletonLoading style={styles.title} />
          <View style={styles.progressText}>
            <SkeletonLoading style={styles.current} />
            <SkeletonLoading style={styles.max} />
          </View>
          <SkeletonLoading style={styles.progressBar} />
        </View>
        <SkeletonLoading style={styles.caret} />
      </View>
      <View style={styles.horizontalList}>
        <SkeletonLoading style={styles.nudgeItem} />
        <SkeletonLoading style={styles.nudgeItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(24),
    marginBottom: Style.adjust(12),
    borderWidth: 1,
    paddingBottom: Style.adjust(16),
    backgroundColor: Colours.neutral.white,
    borderColor: Colours.neutral.n150,
    borderRadius: Style.adjust(8),
  },
  todayEarnings: {
    paddingEnd: Style.adjust(12),
    paddingStart: Style.adjust(16),
    paddingTop: Style.adjust(18),
    flexDirection: "row",
  },
  coin: {
    width: Style.adjust(48),
    height: Style.adjust(48),
    borderRadius: Style.adjust(24),
    marginTop: Style.adjust(12),
  },
  todayEarningsContent: {
    marginStart: Style.adjust(16),
    flex: 1,
  },
  title: {
    width: Style.adjust(135),
    height: Style.adjust(16),
    marginVertical: Style.adjust(4),
    borderRadius: Style.adjust(4),
  },
  progressText: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  current: {
    width: Style.adjust(43),
    height: Style.adjust(20),
    marginTop: Style.adjust(4),
    borderRadius: Style.adjust(4),
  },
  max: {
    width: Style.adjust(43),
    height: Style.adjust(16),
    borderRadius: Style.adjust(4),
    marginStart: Style.adjust(8),
  },
  progressBar: {
    height: Style.adjust(8),
    width: Style.adjust(180),
    marginTop: Style.adjust(8),
  },
  caret: {
    width: Style.adjust(24),
    height: Style.adjust(24),
    borderRadius: Style.adjust(4),
    marginEnd: Style.adjust(4),
  },
  horizontalList: {
    marginTop: Style.adjust(16),
    height: Style.adjust(72),
    width: "100%",
    flexDirection: "row",
    paddingStart: Style.adjust(8),
    overflow: "hidden",
  },
  nudgeItem: {
    width: NUDGE_ITEM_WIDTH,
    height: Style.adjust(72),
    borderRadius: Style.adjust(8),
    marginStart: NUDGE_ITEM_MARGIN,
  },
});
