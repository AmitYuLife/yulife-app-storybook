import React, { memo, useRef, useCallback, useMemo, useEffect, useState } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
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
import Svg, { Circle } from "react-native-svg";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useDispatch } from "react-redux";

const lottieAnimationSource = require("./assets/event-reward-animation.json");

const CIRCLE_SIZE = Style.adjust(88);
const HALF_SIZE = CIRCLE_SIZE / 2;
const STROKE_WIDTH = Style.adjust(4);
const REWARD_PADDING = Style.adjust(4);

const REWARD_SIZE = CIRCLE_SIZE - 2 * STROKE_WIDTH - 2 * REWARD_PADDING;

const CIRCLE_RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;

const CIRCLE_CIRCUMFERENCE = CIRCLE_RADIUS * 2 * Math.PI;

export const FADE_OUT_DURATION = 500;
export const FADE_PAUSE_DURATION = 200;
export const FADE_IN_DURATION = 1000;

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
  goalId: string;
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

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const EventReward = ({
  reward,
  height = Style.adjust(170),
  width = Style.adjust(136),
  marginHorizontal = Style.adjust(4),
  claimButton,
}: IEventReward) => {
  const {
    id,
    goalId,
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
  const [rewardClaimed, setRewardClaimed] = useState(status === GoalRewardStatus.claimed);
  const rewardCompleted = status === GoalRewardStatus.completed;
  const [statusColor, setStatusColor] = useState(getStatusColor(status));
  const progress = useRef(new Animated.Value(CIRCLE_CIRCUMFERENCE)).current;
  const dispatch = useDispatch();

  const openPopUp = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("reward_info_viewed", {
        name: title,
        ID: id,
        event_id: goalId,
        info_text: infoText,
      })
    );
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

  useEffect(() => {
    const statusChanged = statusColor !== getStatusColor(status);
    const animationSequence = Animated.sequence([
      ...(statusChanged
        ? [
            Animated.timing(progress, {
              toValue: CIRCLE_CIRCUMFERENCE,
              duration: FADE_OUT_DURATION,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
          ]
        : []),
      {
        start: (cb) => {
          setStatusColor(getStatusColor(status));
          setRewardClaimed(status === GoalRewardStatus.claimed);
          cb({ finished: true });
        },
        stop: () => null,
        reset: () => null,
      },
      Animated.timing(progress, {
        toValue: 0,
        duration: FADE_IN_DURATION,
        delay: FADE_PAUSE_DURATION,
        easing: Easing.cubic,
        useNativeDriver: true,
      }),
    ]);
    animationSequence.start();
    return () => {
      animationSequence.stop();
    };
  }, [progress, status]);

  const wrapperStyle = useMemo(() => [styles.wrapper, { height, width, marginHorizontal }], []);

  return (
    <PressableWithDelay onPress={claimReward}>
      <View style={wrapperStyle}>
        <View style={styles.circleWrapper}>
          <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE} viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`} fill="none">
            <Circle
              cx={HALF_SIZE}
              cy={HALF_SIZE}
              r={CIRCLE_RADIUS}
              stroke={Colours.neutral.n100}
              strokeWidth={STROKE_WIDTH}
              strokeLinecap={"round"}
            />
            <AnimatedCircle
              cx={HALF_SIZE}
              cy={HALF_SIZE}
              r={CIRCLE_RADIUS}
              strokeDasharray={[CIRCLE_CIRCUMFERENCE, CIRCLE_CIRCUMFERENCE]}
              strokeDashoffset={progress}
              stroke={statusColor}
              transform={`rotate(90, ${HALF_SIZE}, ${HALF_SIZE})`}
              strokeWidth={STROKE_WIDTH}
              strokeLinecap={"round"}
            />
          </Svg>
          <View style={styles.backgroundImageWrapper}>
            <Image
              source={{ uri: itemBackgroundUri }}
              width={Style.adjust(72)}
              height={Style.adjust(72)}
              style={styles.absolute}
              suppressLoadingUi={true}
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
    bottom: -(REWARD_PADDING + STROKE_WIDTH),
  },
  titleWrapper: {
    marginTop: Style.adjust(8),
  },
  descriptionWrapper: {
    marginTop: Style.adjust(4),
  },
  circleWrapper: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImageWrapper: {
    width: REWARD_SIZE,
    height: REWARD_SIZE,
    borderRadius: REWARD_SIZE / 2,
    position: "absolute",
    top: REWARD_PADDING + STROKE_WIDTH,
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
