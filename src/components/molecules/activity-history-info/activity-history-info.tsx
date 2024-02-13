import { Image, StarInline, TextTemplate } from "@atoms";
import { Style } from "@styles";
import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

// Temp type:
interface RemoteImage {
  uri: string;
  id: string;
}
export interface IActivityHistoryInfoItems {
  title: string;
  leftIcon: RemoteImage;
  rightIcon: RemoteImage;
  yucoin: string;
  stars: number;
}

interface IProps {
  title: string;
  activityItems: IActivityHistoryInfoItems[];
  isLastItem: boolean;
}

const ActivityHistoryInfo = ({ title, activityItems, isLastItem }: IProps) => {
  const wrapperStyle = useMemo(
    () => ({
      ...styles.wrapper,
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
        <View key={index} style={styles.activityWrapper}>
          <View style={styles.leftImage}>
            <Image source={item.leftIcon} {...IMAGE_SIZE} />
          </View>
          <TextTemplate type="l1" color={item.yucoin ? COLOURS.enabled : COLOURS.disabled}>
            {item.title}
          </TextTemplate>
          <View style={styles.yucoinWrapper}>
            {!item.yucoin ? null : (
              <View style={styles.stars}>
                {Array.from({ length: item.stars }).map((_, i) => (
                  <View key={i}>
                    <StarInline filled={true} />
                  </View>
                ))}
              </View>
            )}
            {item.yucoin ? (
              <>
                <TextTemplate type="l1b">{item.yucoin}</TextTemplate>
                <Image source={item.rightIcon} style={styles.yucoin} {...IMAGE_SIZE} />
              </>
            ) : (
              <TextTemplate type="l1b" color={item.yucoin ? COLOURS.enabled : COLOURS.disabled}>
                -
              </TextTemplate>
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

const styles = StyleSheet.create({
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
    marginRight: Style.adjust(8),
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
    marginLeft: Style.adjust(4),
  },
  stars: {
    flexDirection: "row",
    marginRight: Style.adjust(4),
  },
});

export default memo(ActivityHistoryInfo);
