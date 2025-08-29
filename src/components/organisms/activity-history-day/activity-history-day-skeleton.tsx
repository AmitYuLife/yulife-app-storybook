import React, { memo } from "react";
import { View } from "react-native";
import { SkeletonLoading } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { activityHistoryInfoStyles } from "@components/molecules/activity-history-info/activity-history-info";
import { activityHistoryDayStyles } from "./activity-history-day";

const ActivityHistoryDaySkeleton = () => (
  <>
    {Array.from({ length: 4 }).map((_, index) => (
      <View key={index}>
        <View style={activityHistoryDayStyles.wrapper}>
          <SkeletonLoading style={styles.title} />
          <SkeletonLoading style={styles.subTitle} />
        </View>
        <View style={styles.wrapper}>
          <SkeletonLoading style={styles.coreTitle} />
          <SkeletonLoading style={styles.coreDescription} />
          <SkeletonLoading style={styles.coreDescription} />
        </View>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  title: { width: Style.adjust(174), height: Style.adjust(24) },
  subTitle: { width: Style.adjust(124), height: Style.adjust(16), marginTop: Style.adjust(8) },
  wrapper: {
    ...activityHistoryInfoStyles.wrapper,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  coreTitle: { width: Style.adjust(154), height: Style.adjust(13), marginTop: Style.adjust(8) },
  coreDescription: { width: Style.adjust(124), height: Style.adjust(13), marginTop: Style.adjust(8) },
});

export default memo(ActivityHistoryDaySkeleton);
