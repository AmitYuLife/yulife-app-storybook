import { View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import React, { memo, useMemo } from "react";
import ActivityHistoryInfo, {
  IActivityHistoryInfoItems,
} from "@components/molecules/activity-history-info/activity-history-info";

// Temp type:
interface RemoteImage {
  uri?: string;
  id: string;
}
interface IHistoryItems {
  title: string;
  activityItems: IActivityHistoryInfoItems[];
}

export interface IActivityHistoryDay {
  id: string;
  title: string;
  level: string;
  yucoin?: string;
  leftIcon: RemoteImage;
  rightIcon?: RemoteImage;
  historyItems: IHistoryItems[];
}

const ActivityHistoryDay = ({ title, level, yucoin, historyItems, leftIcon, rightIcon }: IActivityHistoryDay) => {
  const filterEmptyActivityItems = useMemo(() => historyItems.filter((e) => e.activityItems.length), [historyItems]);
  return (
    <View>
      <View style={activityHistoryDayStyles.wrapper}>
        <TextTemplate type="b1b">{title}</TextTemplate>
        <View style={activityHistoryDayStyles.container}>
          <View style={activityHistoryDayStyles.leftIcon}>
            <Image source={leftIcon} {...IMAGE_SIZE} />
          </View>
          <TextTemplate type="l1b">{level}</TextTemplate>
          {!yucoin ? null : (
            <View style={activityHistoryDayStyles.rightIcon}>
              <TextTemplate type="l1b">{yucoin}</TextTemplate>
              <Image source={rightIcon} style={activityHistoryDayStyles.yucoin} {...IMAGE_SIZE} />
            </View>
          )}
        </View>
      </View>
      {filterEmptyActivityItems
        .filter((e) => e.activityItems.length)
        .map((item, index) => (
          <ActivityHistoryInfo key={index} {...item} isLastItem={filterEmptyActivityItems.length - 1 === index} />
        ))}
    </View>
  );
};

const IMAGE_SIZE = {
  width: Style.adjust(16),
  height: Style.adjust(16),
};

export const activityHistoryDayStyles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(24),
    padding: Style.adjust(16),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: "#E3E3E1",
    borderWidth: 1,
  },
  container: {
    flexDirection: "row",
    marginTop: Style.adjust(8),
  },
  leftIcon: {
    marginEnd: Style.adjust(6),
  },
  rightIcon: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
  },
  yucoin: {
    marginStart: Style.adjust(4),
  },
});

export default memo(ActivityHistoryDay);
