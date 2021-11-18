import { TextTemplate, Image } from "@atoms";
import { Colours, Style } from "@styles";
import React, { memo, useMemo } from "react";
import { StyleSheet, View, Image as RNImage } from "react-native";
import { ProgressBar } from "@molecules";
import { StarIcon } from "@atoms/icon/star-icon";

interface IProps {
  activitySubTotal: string;
  yuCoinSubTotal: string;
  iconUrl: string;
  currentPosition?: number;
  maxLength?: number;
  rating?: number;
  isDisabled?: boolean;
}

const ActivityProgress = ({
  activitySubTotal,
  yuCoinSubTotal,
  iconUrl,
  currentPosition,
  maxLength,
  rating,
  isDisabled,
}: IProps) => {
  const textColour = useMemo(() => (isDisabled ? Colours.neutral.n400 : Colours.neutral.n800), [isDisabled]);
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.wrapper}>
          <Image width={Style.adjust(16)} height={Style.adjust(16)} style={styles.icon} source={{ uri: iconUrl }} />
          {!isDisabled ? null : <View style={styles.isDisabledIcon} />}
          <TextTemplate color={textColour} type="l1">
            {activitySubTotal}
          </TextTemplate>
        </View>
        <View style={[styles.wrapper, styles.yuCoinSubTotal]}>
          {Array.from({ length: rating }).map((_, i) => (
            <View key={i} style={styles.starsWrapper}>
              <StarIcon />
            </View>
          ))}
          <TextTemplate color={textColour} type="l1b">
            {yuCoinSubTotal}
          </TextTemplate>
          <RNImage
            source={require("@assets/icons/yucoin.png")}
            width={Style.adjust(16)}
            height={Style.adjust(16)}
            style={styles.yuCoin}
          />
        </View>
      </View>
      {!currentPosition && !maxLength ? null : (
        <ProgressBar
          currentPosition={currentPosition || 0}
          maxLength={maxLength || 100}
          marginHorizontal={Style.adjust(80)}
          style={styles.progressBar}
          isDisabled={isDisabled}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  isDisabledIcon: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    backgroundColor: "rgba(250,250,254,0.5)",
    position: "absolute",
  },
  yuCoinSubTotal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  icon: {
    marginRight: Style.adjust(8),
  },
  starsWrapper: {
    marginRight: Style.adjust(4),
  },
  yuCoin: {
    marginLeft: Style.adjust(4),
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
  progressBar: {
    marginTop: Style.adjust(8),
  },
});

export default memo(ActivityProgress);
