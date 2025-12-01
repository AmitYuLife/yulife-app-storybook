import { TextTemplate, Image } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import React, { memo } from "react";
import { View, Image as RNImage, Platform } from "react-native";
import { ProgressBar } from "@molecules";
import { StarIcon } from "@atoms/icon/star-icon";
import { ACTIVITY_LISTING } from "@ids";

interface IProps {
  activitySubTotal: string;
  yuCoinSubTotal: string;
  iconUrl: string;
  currentPosition?: number;
  maxLength?: number;
  rating?: number;
  isDisabled?: boolean;
  isCompleted?: boolean;
  isClaimable?: boolean;
  isJoined?: boolean;
  isSelected?: boolean;
}

export const ActivityProgress = (props: IProps) => {
  return (
    <View>
      <Activity {...props} />
      <Progress {...props} />
    </View>
  );
};

const Activity = (props: IProps) => {
  const { isCompleted, isDisabled, iconUrl, activitySubTotal, rating = 0, yuCoinSubTotal } = props;
  const textColour = getTextColour(props);

  return (
    <View style={styles.wrapper} testID={ACTIVITY_LISTING(activitySubTotal, yuCoinSubTotal)}>
      <View style={styles.wrapper}>
        <Image
          width={Style.adjust(16)}
          height={Style.adjust(16)}
          style={styles.icon}
          suppressLoadingUi={true}
          source={{ uri: iconUrl }}
        />
        {!isDisabled ? null : <View style={styles.isDisabledIcon} />}
        <TextTemplate color={textColour.activity} type="l1">
          {activitySubTotal}
        </TextTemplate>
      </View>
      <View style={[styles.wrapper, styles.yuCoinSubTotal]}>
        {rating === 0 ? null : (
          <View style={styles.starsWrapper}>
            <TextTemplate type="l1b">{rating}</TextTemplate>
            <StarIcon />
          </View>
        )}
        <View style={styles.subtotal}>
          <TextTemplate color={textColour.total} type="l1b" textAlign="right">
            {yuCoinSubTotal}
          </TextTemplate>
        </View>
        <RNImage
          source={isCompleted ? require("@assets/icons/check-green.png") : require("@assets/icons/yucoin.png")}
          style={styles.yuCoin}
        />
      </View>
    </View>
  );
};

const Progress = (props: IProps) => {
  const { currentPosition, maxLength, isDisabled, isCompleted } = props;
  if (!currentPosition && !maxLength) {
    return null;
  }

  return (
    <ProgressBar
      currentPosition={currentPosition || 0}
      maxLength={maxLength || 100}
      marginHorizontal={Style.adjust(80)}
      style={styles.progressBar}
      isDisabled={isDisabled}
      isCompleted={isCompleted}
    />
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
    backgroundColor: Colours.overlay.lightPurple,
    position: "absolute",
  },
  subtotal: {
    minWidth: Style.adjust(20),
  },
  yuCoinSubTotal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  icon: {
    marginEnd: Style.adjust(8),
  },
  starsWrapper: {
    flexDirection: "row",
    marginEnd: Platform.select({
      ios: Style.adjust(4),
      android: 0,
    }),
  },
  yuCoin: {
    marginStart: Style.adjust(4),
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
  progressBar: {
    marginTop: Style.adjust(8),
  },
  progressWrapper: {
    height: Style.adjust(26),
    alignItems: "center",
    justifyContent: "center",
  },
  completedActivityBlock: {
    backgroundColor: Colours.products.fib.commonLight,
    borderColor: Colours.status.su400,
  },
});

export default memo(ActivityProgress);

const getTextColour = (props: Pick<IProps, "isClaimable" | "isDisabled" | "isCompleted">) => {
  if (props.isCompleted) {
    return {
      activity: Colours.neutral.n800,
      total: Colours.status.su400,
    };
  }

  if (props.isClaimable) {
    return {
      activity: Colours.neutral.white,
      total: Colours.neutral.white,
    };
  }

  if (props.isDisabled) {
    return {
      activity: Colours.neutral.n400,
      total: Colours.neutral.n400,
    };
  }

  return {
    activity: Colours.neutral.n800,
    total: Colours.neutral.n800,
  };
};
