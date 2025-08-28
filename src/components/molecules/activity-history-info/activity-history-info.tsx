import { Image, StarInline, TextTemplate } from "@atoms";
import { ACTIVITY_HISTORY_CHALLENGE_VALUE } from "@ids";
import { Style } from "@styles";
import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

// Temp type:
interface RemoteImage {
  uri?: string;
  id: string;
}
export interface IActivityHistoryInfoItems {
  title: string;
  leftIcon: RemoteImage;
  rightIcon: RemoteImage;
  yucoin?: string;
  stars?: number;
}

interface IProps {
  title: string;
  activityItems: IActivityHistoryInfoItems[];
  isLastItem: boolean;
}

const ActivityHistoryInfo = ({ title, activityItems, isLastItem }: IProps) => {
  const wrapperStyle = useMemo(
    () => ({
      ...activityHistoryInfoStyles.wrapper,
      ...(isLastItem && {
        borderBottomWidth: 1,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      }),
    }),
    [isLastItem]
  );

  return (
    <View style={wrapperStyle}>
      <TextTemplate type="b2b">{title}</TextTemplate>
      {activityItems.map((item, index) => (
        <View key={index} style={activityHistoryInfoStyles.activityWrapper}>
          <View style={activityHistoryInfoStyles.leftImage}>
            <Image source={item.leftIcon} {...IMAGE_SIZE} />
          </View>
          <TextTemplate
            type="l1"
            color={!item.yucoin ? COLOURS.disabled : COLOURS.enabled}
            testID={ACTIVITY_HISTORY_CHALLENGE_VALUE(item.title)}
          >
            {item.title}
          </TextTemplate>
          <View style={activityHistoryInfoStyles.yucoinWrapper}>
            {!item.stars ? null : (
              <View style={activityHistoryInfoStyles.stars}>
                {Array.from({ length: item.stars }).map((_, i) => (
                  <View key={i}>
                    <StarInline filled={true} />
                  </View>
                ))}
              </View>
            )}
            {!item.yucoin || item.yucoin === "0" ? (
              <TextTemplate type="l1b" color={COLOURS.disabled}>
                -
              </TextTemplate>
            ) : (
              <>
                <TextTemplate type="l1b">{item.yucoin}</TextTemplate>
                <Image source={item.rightIcon} style={activityHistoryInfoStyles.yucoin} {...IMAGE_SIZE} />
              </>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

const COLOURS = {
  enabled: "#464647",
  disabled: "#A0A09B",
};

const IMAGE_SIZE = {
  width: Style.adjust(16),
  height: Style.adjust(16),
};

export const activityHistoryInfoStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FAFAFE",
    padding: Style.adjust(16),
    borderColor: "#E3E3E1",
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  activityWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(16),
  },
  leftImage: {
    marginEnd: Style.adjust(8),
  },
  yucoinWrapper: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  yucoin: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginStart: Style.adjust(4),
  },
  stars: {
    flexDirection: "row",
    marginEnd: Style.adjust(4),
  },
});

export default memo(ActivityHistoryInfo);
