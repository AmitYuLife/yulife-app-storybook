import React, { memo, useRef, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Button, LabelWithImages, PressableWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import { RadioIcon } from "@atoms/icon/radio-icon";
import LottieView from "lottie-react-native";
import { ILabelImage } from "@components/molecules/label-with-images/label-with-images";
import { RemoteImage } from "@graphql/_core/schema";
import { GoalRewardStatus } from "@graphql/_core/schema/globalTypes";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { showInfoMessageTooltipViewRelative } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { GOAL_TOOLTIP_INFO } from "@ids";

const lottieAnimationSource = require("./assets/event-reward-animation.json");
const INFO_VIEW_HEIGHT_WIDTH = Style.adjust(22);
interface IEventReward {
  marginHorizontal?: number;
  height?: number;
  width?: number;
  reward: IReward;
  claimButton?: boolean;
}

export interface IReward {
  id: string;
  title: string;
  description: string;
  itemBackground: RemoteImage;
  item: RemoteImage;
  status: GoalRewardStatus;
  animated?: boolean;
  stars?: ILabelImage[];
  infoText?: string;
  infoBadgeUri?: RemoteImage;
}

const EventReward = ({
  reward,
  height = Style.adjust(170),
  width = Style.adjust(136),
  marginHorizontal = Style.adjust(4),
  claimButton,
}: IEventReward) => {
  const {
    title,
    description,
    stars,
    item: { uri: itemUri },
    itemBackground: { uri: itemBackgroundUri },
    status,
    animated,
    infoText,
    infoBadgeUri,
  } = reward;
  const questionMarkRef = useRef<View>();
  const rewardClaimed = status === GoalRewardStatus.claimed;
  const rewardCompleted = status === GoalRewardStatus.completed;
  const statusColor = getStatusColor(status);

  const openPopUp = useCallback(() => {
    showInfoMessageTooltipViewRelative({ viewRef: questionMarkRef, infoText, buttonLabel: "Got it" });
  }, [questionMarkRef, infoText]);

  const claimReward = useCallback(() => {
    if (!claimButton || !rewardCompleted) {
      return;
    }

    showYuModal({
      component: {
        id: MODALS.collectEventReward,
        name: MODALS.collectEventReward,
        passProps: {
          title,
          descriptionTitle: "Great job!",
          description: `You reached the milestone!\nCongratulations. Claim your rewards.`,
          cta: "Claim",
          rewards: [reward],
        },
      },
    });
  }, [claimButton, reward, status, title]);

  const descriptionFooter = useMemo(() => {
    if (rewardCompleted && claimButton) {
      return (
        <Button
          wrapperStyle={styles.descriptionWrapper}
          onPress={claimReward}
          size="ExtraSmall"
          shadowColor="transparent"
          label="Claim"
        />
      );
    }

    if (description) {
      return (
        <View style={styles.descriptionWrapper}>
          <TextTemplate type="l1">{description}</TextTemplate>
        </View>
      );
    }

    return null;
  }, [claimButton, claimReward, description, rewardCompleted]);

  const animation = useMemo(() => {
    if (!animated && !rewardCompleted) {
      return null;
    }

    return <LottieView style={styles.absolute} source={lottieAnimationSource} autoPlay={true} loop={true} />;
  }, [animated, rewardCompleted]);

  return (
    <PressableWithDelay onPress={claimReward}>
      <View style={[styles.wrapper, { height, width, marginHorizontal }]}>
        <View style={[styles.circleWrapper, { borderColor: statusColor }]}>
          <View style={styles.backgroundImageWrapper}>
            <Image
              source={{ uri: itemBackgroundUri }}
              width={Style.adjust(72)}
              height={Style.adjust(72)}
              style={styles.absolute}
            />
            {animation}
            <Image
              suppressLoadingUi={true}
              source={{ uri: itemUri }}
              width={Style.adjust(72)}
              height={Style.adjust(72)}
              style={styles.absolute}
            />
          </View>
          <View style={styles.labelWrapper}>
            {!rewardClaimed ? null : (
              <View style={styles.radioIconWrapper}>
                <RadioIcon checked={true} />
              </View>
            )}
            {rewardClaimed || !stars ? null : <LabelWithImages labelImages={stars} backgroundColor={statusColor} />}
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <TextTemplate type={"l1b"}>{title}</TextTemplate>
        </View>

        {descriptionFooter}

        {!infoBadgeUri ? null : (
          <View style={styles.infoWrapper}>
            <PressableWithDelay onPress={openPopUp}>
              <View ref={questionMarkRef} collapsable={false} testID={GOAL_TOOLTIP_INFO}>
                <Image
                  suppressLoadingUi={true}
                  width={INFO_VIEW_HEIGHT_WIDTH}
                  height={INFO_VIEW_HEIGHT_WIDTH}
                  source={infoBadgeUri}
                />
              </View>
            </PressableWithDelay>
          </View>
        )}
      </View>
    </PressableWithDelay>
  );
};

const getStatusColor = (status: GoalRewardStatus) => {
  switch (status) {
    case GoalRewardStatus.claimed:
      return "#40C057";
    case GoalRewardStatus.completed:
      return Colours.primary.p400;
    case GoalRewardStatus.pending:
    default:
      return Colours.neutral.n100;
  }
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  },
  infoWrapper: {
    position: "absolute",
    top: Style.adjust(9),
    right: Style.adjust(9),
  },
  wrapper: {
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(8),
    alignItems: "center",
    paddingTop: Style.adjust(16),
  },
  labelWrapper: {
    position: "absolute",
    bottom: Style.adjust(-12),
  },
  titleWrapper: {
    marginTop: Style.adjust(8),
  },
  descriptionWrapper: {
    marginTop: Style.adjust(4),
  },
  circleWrapper: {
    width: Style.adjust(88),
    height: Style.adjust(88),
    borderRadius: Style.adjust(44),
    borderWidth: Style.adjust(4),
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImageWrapper: {
    width: Style.adjust(72),
    height: Style.adjust(72),
    borderRadius: Style.adjust(36),
  },
  radioIconWrapper: {
    paddingHorizontal: Style.adjust(2),
    height: Style.adjust(20),
    borderRadius: Style.adjust(10),
    backgroundColor: Colours.neutral.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(EventReward);
