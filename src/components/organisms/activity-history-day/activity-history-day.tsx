import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import React, { memo } from "react";
import ActivityHistoryInfo, {
  IActivityHistoryInfoItems,
} from "@components/molecules/activity-history-info/activity-history-info";

// Temp type:
interface RemoteImage {
  uri: string;
  id: string;
}
interface IHistoryItems {
  title: string;
  activityItems: IActivityHistoryInfoItems[];
}

interface IProps {
  title: string;
  subTitle: string;
  yucoin: string;
  leftIcon: RemoteImage;
  rightIcon: RemoteImage;
  historyItems: IHistoryItems[];
}

const ActivityHistoryDay = ({ title, subTitle, yucoin, historyItems, leftIcon, rightIcon }: IProps) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <TextTemplate type="b1b">{title}</TextTemplate>
        <View style={styles.container}>
          <View style={styles.leftIcon}>
            <Image source={leftIcon} {...IMAGE_SIZE} />
          </View>
          <TextTemplate type="l1b">{subTitle}</TextTemplate>
          <View style={styles.rightIcon}>
            <TextTemplate type="l1b">{yucoin}</TextTemplate>
            <Image source={rightIcon} style={styles.yucoin} {...IMAGE_SIZE} />
          </View>
        </View>
      </View>
      {historyItems.map((item, index) => (
        <ActivityHistoryInfo key={index} {...item} isLastItem={historyItems.length - 1 === index} />
      ))}
    </View>
  );
};

const IMAGE_SIZE = {
  width: Style.adjust(16),
  height: Style.adjust(16),
};

const styles = StyleSheet.create({
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
    marginRight: Style.adjust(6),
  },
  rightIcon: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
  },
  yucoin: {
    marginLeft: Style.adjust(4),
  },
});

export default memo(ActivityHistoryDay);
