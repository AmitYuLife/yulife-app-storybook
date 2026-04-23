import { t } from "@locale";
import { useDispatch } from "react-redux";
import type Lottie from "lottie-react-native";
import Svg, { Circle } from "react-native-svg";
import { Vibration, View, ViewStyle } from "react-native";
import React, { memo, useRef, useMemo, useEffect, useCallback, useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withSequence } from "react-native-reanimated";
import { Colours, Style, StyleSheet } from "@styles";
import { Image, TextTemplate } from "@atoms";
import Logger from "@services/logger/logger";
import { RadioIcon } from "@atoms/icon/radio-icon";
import { GOAL_TOOLTIP_INFO, CLAIM_BUTTON, ANIMATED_CIRCLE } from "@ids";
import { Button, LabelWithImages, LottieView, Pressable } from "@molecules";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { refreshUserProfileEvents, getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { ILabelImage } from "@components/molecules/label-with-images/label-with-images";
import { showInfoMessageTooltipViewRelative } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { GoalRewardStatus, RemoteImage, SduiAction } from "@graphql/__generated";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

const shineAnimationSource = require("@assets/lottie/shine.json");
const explosionAnimationSource = require("@assets/lottie/explosion.json");

const CIRCLE_SIZE = Style.adjust(88);
const STROKE_WIDTH = Style.adjust(4);
const CIRCLE_HALF_SIZE = CIRCLE_SIZE / 2;
const REWARD_PADDING = Style.adjust(4);

const REWARD_SIZE = CIRCLE_SIZE - 2 * STROKE_WIDTH - 2 * REWARD_PADDING;
const CIRCLE_RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCLE_CIRCUMFERENCE = CIRCLE_RADIUS * 2 * Math.PI;

const IMAGE_SIZE = 72;
const IMAGE_TRANSFORM_SCALE = Style.adjust(IMAGE_SIZE / 2);

const INFO_VIEW_HEIGHT_WIDTH = Style.adjust(22);

export interface IReward {
  id: string;
  title: string;
  goalId: string;
  item: RemoteImage;
  infoText?: string;
  animated?: boolean;
  description?: string;
  stars?: ILabelImage[];
  animationDelay?: number;
  status: GoalRewardStatus;
  infoBadgeUri?: RemoteImage;
  itemBackground: RemoteImage;
  onPress?: SduiAction;
}

interface IEventRewardProps {
  width?: number;
  height?: number;
  reward: IReward;
  eventTitle: string;
  marginHorizontal?: number;
  isClaimRewardEnabled?: boolean;
  onClaimReward: (reward: IReward) => Promise<void>;
}

const SCALE_ANIMATION_DURATION = 100;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const EventReward = ({
  reward,
  onClaimReward,
  isClaimRewardEnabled,
  width = Style.adjust(136),
  height = Style.adjust(170),
  marginHorizontal = Style.adjust(4),
}: IEventRewardProps) => {
  const {
    id,
    title,
    stars,
    goalId,
    status,
    animated,
    infoText,
    description,
    infoBadgeUri,
    item: { uri: itemUri },
    itemBackground: { uri: itemBackgroundUri },
  } = reward;

  const dispatch = useDispatch();
  const questionMarkRef = useRef<View>(null);
  const scaleAnimationRef = useSharedValue<number>(1);
  const explosionAnimationRef = useRef<Lottie>(null);
  const [initialStatus] = useState<GoalRewardStatus>(status);
  const [delayedStatus, setDelayedStatus] = useState<GoalRewardStatus>(status);

  const isRewardDelayedStatusClaimed = delayedStatus === GoalRewardStatus.Claimed;
  const isRewardDelayedStatusCompleted = delayedStatus === GoalRewardStatus.Completed;
  const isRewardClaimable = isRewardDelayedStatusCompleted && isClaimRewardEnabled;

  /**
   * We put the status prop into state with a delay,
   * to allow animations to be delayed/staggered when being
   * claimed from the modal (when the event ends)
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => setDelayedStatus(status), reward.animationDelay);

    return () => clearTimeout(timeoutId);
  }, [status, reward.animationDelay]);

  /**
   * We only want the animations to play when the status
   * is different from the initial status
   */
  useEffect(() => {
    if (initialStatus === delayedStatus) {
      return;
    }

    if (isRewardDelayedStatusClaimed) {
      explosionAnimationRef.current?.play();
      scaleAnimationRef.value = withSequence(
        withTiming(1, { duration: SCALE_ANIMATION_DURATION }),
        withTiming(1.1, { duration: SCALE_ANIMATION_DURATION }),
        withTiming(1, { duration: SCALE_ANIMATION_DURATION })
      );
    }
  }, [isRewardDelayedStatusClaimed, scaleAnimationRef, delayedStatus, initialStatus]);

  const openPopUp = useCallback((): void => {
    dispatch(
      logMixpanelEventActionCreator("reward_info_viewed", {
        name: title,
        ID: id,
        event_id: goalId,
        info_text: infoText,
      })
    );
    showInfoMessageTooltipViewRelative({
      viewRef: questionMarkRef,
      infoText,
      buttonLabel: "Got it",
    });
  }, [dispatch, goalId, id, infoText, title]);

  const claimReward = useCallback(async (): Promise<void> => {
    if (!isClaimRewardEnabled || !isRewardDelayedStatusCompleted) {
      return;
    }

    try {
      await onClaimReward(reward);
      dispatch(refreshUserProfileEvents());
      dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));

      Vibration.vibrate();
    } catch (e) {
      Logger.notify(e, { event: "claim-goal" });
    }
  }, [isClaimRewardEnabled, isRewardDelayedStatusCompleted, onClaimReward, reward, dispatch]);

  const shineAnimation = useMemo((): React.ReactNode => {
    if (!animated && !isRewardDelayedStatusCompleted) {
      return null;
    }

    return <LottieView style={styles.image} source={shineAnimationSource} autoPlay={true} loop={true} />;
  }, [animated, isRewardDelayedStatusCompleted]);

  const animatedStyle = useAnimatedStyle(
    (): ViewStyle => ({
      transform: [
        { translateY: IMAGE_TRANSFORM_SCALE - scaleAnimationRef.value * IMAGE_TRANSFORM_SCALE },
        { scale: scaleAnimationRef.value },
      ],
    })
  );

  const wrapperStyle = useMemo(() => {
    return {
      ...styles.wrapper,
      ...{
        height,
        width,
        marginHorizontal,
        borderColor: delayedStatus === GoalRewardStatus.Claimed ? Colours.event.claimedColor : Colours.neutral.n100,
        backgroundColor:
          delayedStatus === GoalRewardStatus.Claimed ? Colours.event.claimedBackgroundColor : Colours.neutral.white,
      },
    };
  }, [height, width, marginHorizontal, delayedStatus]);

  const imageWrapperStyle = useMemo(() => {
    return {
      ...styles.image,
      ...animatedStyle,
    };
  }, [animatedStyle]);

  const { theme } = useTheme();

  const statusColor = useMemo((): string => {
    switch (delayedStatus) {
      case GoalRewardStatus.Claimed:
        return Colours.event.claimedColor;
      case GoalRewardStatus.Completed:
        return theme.colors.primary.p400;
      case GoalRewardStatus.Pending:
      default:
        return Colours.neutral.n100;
    }
  }, [delayedStatus, theme]);

  return (
    <Pressable delay={1000} onPress={claimReward}>
      <View style={wrapperStyle}>
        <View style={styles.circleWrapper} testID={ANIMATED_CIRCLE(statusColor)}>
          <View style={styles.explosionEffectWrapper}>
            <LottieView
              loop={false}
              ref={explosionAnimationRef}
              source={explosionAnimationSource}
              style={styles.explosionAnimation}
            />
          </View>
          <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE} viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`} fill="none">
            <Circle
              cx={CIRCLE_HALF_SIZE}
              cy={CIRCLE_HALF_SIZE}
              r={CIRCLE_RADIUS}
              strokeLinecap={"round"}
              strokeWidth={STROKE_WIDTH}
              stroke={Colours.neutral.n100}
            />
            <AnimatedCircle
              r={CIRCLE_RADIUS}
              stroke={statusColor}
              cx={CIRCLE_HALF_SIZE}
              cy={CIRCLE_HALF_SIZE}
              strokeLinecap={"round"}
              strokeWidth={STROKE_WIDTH}
              transform={`rotate(90, ${CIRCLE_HALF_SIZE}, ${CIRCLE_HALF_SIZE})`}
              strokeDasharray={[CIRCLE_CIRCUMFERENCE, CIRCLE_CIRCUMFERENCE]}
            />
          </Svg>
          <View style={styles.backgroundImageWrapper}>
            <Animated.View style={imageWrapperStyle}>
              <Image
                style={styles.image}
                width={Style.adjust(IMAGE_SIZE)}
                suppressLoadingUi={true}
                height={Style.adjust(IMAGE_SIZE)}
                source={{ uri: itemBackgroundUri }}
              />
              {shineAnimation}
              <Image
                style={styles.image}
                suppressLoadingUi={true}
                width={Style.adjust(IMAGE_SIZE)}
                source={{ uri: itemUri }}
                height={Style.adjust(IMAGE_SIZE)}
              />
            </Animated.View>
          </View>
          <View style={styles.labelWrapper}>
            {!isRewardDelayedStatusClaimed ? null : (
              <View style={styles.radioIconWrapper}>
                <RadioIcon checked={true} />
              </View>
            )}
            {isRewardDelayedStatusClaimed || !stars ? null : (
              <LabelWithImages labelImages={stars} backgroundColor={statusColor} />
            )}
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <TextTemplate type="l1b" color={isRewardDelayedStatusClaimed ? Colours.event.claimedColor : undefined}>
            {title}
          </TextTemplate>
        </View>

        {isRewardClaimable ? (
          <Button
            size="ExtraSmall"
            onPress={claimReward}
            testID={CLAIM_BUTTON}
            shadowColor="transparent"
            translationKey="labels.cta.claim"
            wrapperStyle={styles.descriptionWrapper}
          />
        ) : (
          <View style={styles.descriptionWrapper}>
            {isRewardDelayedStatusClaimed ? (
              <TextTemplate type="l1b" color={Colours.event.claimedColor}>
                {t("screens.event.reward_claimed")}
              </TextTemplate>
            ) : (
              <TextTemplate type="l1">{description}</TextTemplate>
            )}
          </View>
        )}

        {!infoBadgeUri ? null : (
          <View style={styles.infoWrapper}>
            <Pressable delay={1000} onPress={openPopUp}>
              <View ref={questionMarkRef} collapsable={false} testID={GOAL_TOOLTIP_INFO}>
                <Image
                  suppressLoadingUi={true}
                  width={INFO_VIEW_HEIGHT_WIDTH}
                  height={INFO_VIEW_HEIGHT_WIDTH}
                  source={infoBadgeUri}
                />
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    top: 0,
    start: 0,
    end: 0,
    bottom: 0,
    width: REWARD_SIZE,
    height: REWARD_SIZE,
    position: "absolute",
  },
  infoWrapper: {
    position: "absolute",
    top: Style.adjust(9),
    end: Style.adjust(9),
  },
  explosionEffectWrapper: {
    top: 0,
    start: 0,
    end: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    borderWidth: 1,
    alignItems: "center",
    paddingTop: Style.adjust(16),
    borderRadius: Style.adjust(8),
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.white,
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
    overflow: "visible",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
  explosionAnimation: {
    width: Style.adjust(150),
    height: Style.adjust(150),
  },
  backgroundImageWrapper: {
    width: REWARD_SIZE,
    height: REWARD_SIZE,
    position: "absolute",
    borderRadius: REWARD_SIZE / 2,
    top: REWARD_PADDING + STROKE_WIDTH,
  },
  radioIconWrapper: {
    alignItems: "center",
    height: Style.adjust(20),
    justifyContent: "center",
    borderRadius: Style.adjust(10),
    paddingHorizontal: Style.adjust(2),
    backgroundColor: Colours.neutral.white,
  },
});

export default memo(EventReward);
