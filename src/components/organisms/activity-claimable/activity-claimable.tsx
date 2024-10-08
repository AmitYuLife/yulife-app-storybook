import { TextTemplate, Image, Block, Pad } from "@atoms";
import { Colours, Style } from "@styles";
import React, { memo, useMemo } from "react";
import { View, Image as RNImage } from "react-native";
import { ProgressBar, PressableWithDelay } from "@molecules";

import { RadioIcon } from "@atoms/icon/radio-icon";

import styles from "./activity-claimable.styles";

interface IProps {
  activitySubTotal: string;
  yuCoinSubTotal: string;
  iconUrl: string;
  currentPosition?: number;
  maxLength?: number;
  rating?: number;
  isCompleted?: boolean;
  onPress?: () => void;
  isJoined?: boolean;
  isSelected?: boolean;
}

const ActivityClaimable = (props: IProps) => {
  const { isCompleted, currentPosition, maxLength, isJoined, isSelected, iconUrl, activitySubTotal, yuCoinSubTotal } =
    props;
  const textColour = getTextColour(isCompleted);

  const style = useMemo(() => {
    if (isCompleted) {
      return styles.completedActivityBlock;
    }

    if (isSelected) {
      return styles.selectedActivityBlock;
    }

    if (isJoined) {
      return styles.joinedActivityBlock;
    }

    return {};
  }, [isCompleted, isJoined, isSelected]);

  return (
    <PressableWithDelay onPress={props.onPress} delay={1000}>
      <Block style={[styles.claimableActivity, style]}>
        <View style={styles.container}>
          {!isJoined ? (
            <View style={styles.wrapper}>
              <Image width={Style.adjust(24)} height={Style.adjust(24)} style={styles.icon} source={{ uri: iconUrl }} />
            </View>
          ) : null}
          <View style={styles.titleWrapper}>
            <Pad width={Style.adjust(4)} />
            <TextTemplate color={textColour.activity} type={isJoined ? "b2" : "b2b"} numberOfLines={2}>
              {activitySubTotal}
            </TextTemplate>
          </View>
          <View style={[styles.wrapper, styles.yuCoinSubTotal]}>
            {isJoined ? null : (
              <>
                <TextTemplate color={textColour.total} type="b2b">
                  {yuCoinSubTotal}
                </TextTemplate>
                {isCompleted ? (
                  <View style={styles.yuCoin}>
                    <RadioIcon width={Style.adjust(24)} height={Style.adjust(24)} checked={true} />
                  </View>
                ) : (
                  <RNImage source={require("@assets/icons/yucoin.png")} style={styles.yuCoin} />
                )}
              </>
            )}
          </View>
        </View>
        {!isJoined || currentPosition === undefined || !maxLength ? null : (
          <View style={styles.progressWrapper}>
            <ProgressBar
              currentPosition={currentPosition || 0}
              maxLength={maxLength || 100}
              marginHorizontal={Style.adjust(80)}
              style={styles.progressBar}
              isCompleted={isCompleted}
            />
          </View>
        )}
      </Block>
      {!(isSelected && !isJoined) ? null : (
        <View style={styles.selectedCheckContainer}>
          <RadioIcon width={Style.adjust(22)} height={Style.adjust(22)} checked={true} checkedColour="#8F6CF7" />
        </View>
      )}
    </PressableWithDelay>
  );
};

export default memo(ActivityClaimable);

const getTextColour = (isCompleted: boolean) => {
  if (isCompleted) {
    return {
      activity: Colours.neutral.n800,
      total: Colours.status.su400,
    };
  }

  return {
    activity: Colours.neutral.n800,
    total: Colours.neutral.n800,
  };
};
