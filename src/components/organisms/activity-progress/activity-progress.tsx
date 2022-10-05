import { TextTemplate, Image, Block } from "@atoms";
import { Colours, Style } from "@styles";
import React, { memo, useMemo } from "react";
import { StyleSheet, View, Image as RNImage } from "react-native";
import { ProgressBar, PressableWithDelay } from "@molecules";
import { StarIcon } from "@atoms/icon/star-icon";
import { useTranslation } from "@hooks";

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
  onPress?: () => void;
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

export const ClaimableActivityProgress = (props: IProps) => {
  const { isClaimable, isCompleted, isSelected, isJoined } = props;
  const t = useTranslation(["button.claim"]);
  const style = useMemo(() => {
    if (isCompleted) {
      return styles.completedActivityBlock;
    }

    if (isClaimable) {
      return styles.claimableActivityBlock;
    }

    if (isSelected) {
      return styles.selectedActivityBlock;
    }

    return {};
  }, [isClaimable, isCompleted, isSelected]);

  const isAvailableToClaim = isClaimable && !isCompleted;
  return (
    <PressableWithDelay onPress={props.onPress}>
      <Block style={[styles.claimableActivity, style]}>
        <View style={styles.claimableActivityProgress}>
          <View>
            <Activity {...props} />
            <View style={styles.progressWrapper}>
              {isAvailableToClaim ? (
                <View style={styles.wrapper}>
                  <View style={styles.claim}>
                    <TextTemplate textAlign="center" color={Colours.neutral.white} type="l1b">
                      {t["button.claim"]}
                    </TextTemplate>
                  </View>
                </View>
              ) : !isJoined ? null : (
                <Progress {...props} />
              )}
            </View>
          </View>
        </View>
      </Block>
    </PressableWithDelay>
  );
};

const Activity = (props: IProps) => {
  const { isCompleted, isDisabled, iconUrl, activitySubTotal, rating = 0, yuCoinSubTotal } = props;
  const textColour = getTextColour(props);

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <Image width={Style.adjust(16)} height={Style.adjust(16)} style={styles.icon} source={{ uri: iconUrl }} />
        {!isDisabled ? null : <View style={styles.isDisabledIcon} />}
        <TextTemplate color={textColour.activity} type="l1">
          {activitySubTotal}
        </TextTemplate>
      </View>
      <View style={[styles.wrapper, styles.yuCoinSubTotal]}>
        {Array.from({ length: rating }).map((_, i) => (
          <View key={i} style={styles.starsWrapper}>
            <StarIcon />
          </View>
        ))}
        <TextTemplate color={textColour.total} type="l1b">
          {yuCoinSubTotal}
        </TextTemplate>
        <RNImage
          source={isCompleted ? require("@assets/icons/check-green.png") : require("@assets/icons/yucoin.png")}
          width={Style.adjust(16)}
          height={Style.adjust(16)}
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
  progressWrapper: {
    height: Style.adjust(26),
    alignItems: "center",
    justifyContent: "center",
  },
  completedActivityBlock: {
    backgroundColor: Colours.products.fib.commonLight,
    borderColor: Colours.status.su400,
  },
  claimableActivityBlock: {
    backgroundColor: Colours.primary.p400,
    borderColor: Colours.primary.p400,
  },
  selectedActivityBlock: {
    borderColor: Colours.primary.p400,
  },
  claimableActivity: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
    paddingBottom: Style.adjust(16),
  },
  claimableActivityProgress: {
    marginTop: Style.adjust(16),
  },
  claim: {
    marginTop: Style.adjust(6),
    width: Style.adjust(80),
    borderWidth: 1,
    borderColor: Colours.neutral.white,
    borderRadius: 99,
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
