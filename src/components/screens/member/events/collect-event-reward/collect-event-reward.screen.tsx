import { Box, Image, TextTemplate } from "@atoms";
import { Button, LottieView } from "@molecules";
import { IReward } from "@organisms/event-reward/event-reward";
import EventRewardsWrapper from "@organisms/event-reward/event-rewards-wrapper";
import { DETOX_ENABLED } from "@services/socket";
import { Colours, Style, TOP_BAR } from "@styles";
import React, { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import { Animated, Easing, ImageStyle, StyleProp, StyleSheet, View } from "react-native";
import { COLLECT_EVENT_REWARD_BUTTON } from "@ids";

export enum eventState {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}
interface ICollectEventRewardsProps {
  title: string;
  descriptionTitle: string;
  description: string;
  cta: string;
  onCta: () => void;
  rewards: IReward[];
  status?: eventState;
}

const assets = {
  yugiCelebration: require("@assets/goals/claim-rewards/celebrationYugi.png"),
  confetti: require("@assets/chest-components/chest-background.png"),
  trophy: require("@assets/lottie/trophy.json"),
};

const CollectEventRewardScreen: FC<ICollectEventRewardsProps> = ({
  title,
  descriptionTitle,
  description,
  cta,
  onCta,
  rewards,
  status = eventState.IN_PROGRESS,
}) => {
  const [screenState, setScreenState] = useState({ status, title, description, descriptionTitle });
  const confettiScale = useRef(new Animated.Value(0)).current;
  const confettiOpacity = useRef(new Animated.Value(1)).current;
  const titleTemplate = Style.isShortToMedium() ? "b2b" : "b1b";
  const descriptionTitleTemplate = Style.isShortToMedium() ? "h3" : "h2";
  useEffect(() => {
    if (screenState.status === status) {
      setScreenState({ status, title, description, descriptionTitle });
      return;
    }

    if (DETOX_ENABLED) {
      return;
    }

    const expandConfetti = Animated.timing(confettiScale, {
      toValue: 2.5,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.ease,
    });

    const showConfetti = Animated.sequence([
      Animated.timing(confettiOpacity, {
        toValue: 1,
        useNativeDriver: true,
        duration: 100,
        easing: Easing.ease,
      }),
      {
        start: (cb) => {
          setScreenState({ status, title, description, descriptionTitle });
          cb({ finished: true });
        },
        stop: () => null,
        reset: () => null,
      },
      Animated.timing(confettiOpacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: 100,
        easing: Easing.ease,
      }),
    ]);

    const animation = Animated.parallel([expandConfetti, showConfetti]);
    animation.start();
    return () => {
      animation.stop();
    };
  }, [status]);

  const confettiStyle: Animated.AnimatedProps<StyleProp<ImageStyle>> = useMemo(
    () => ({
      backgroundColor: "white",
      opacity: confettiOpacity,
      transform: [
        {
          scale: confettiScale,
        },
      ],
      position: "absolute",
      top: 150,
    }),
    [confettiOpacity, confettiScale]
  );

  return (
    <Box alignItems="center" bg={Colours.neutral.white} flex={1} flexDirection="column">
      <View style={style.titleWrapper}>
        <TextTemplate type={titleTemplate} color={Colours.neutral.n900}>
          {screenState.title}
        </TextTemplate>
      </View>
      <View style={style.lottieWrapper}>
        {screenState.status === eventState.COMPLETED ? (
          <Image source={assets.yugiCelebration} width={280} />
        ) : (
          <Animated.View style={style.lottieAnimatedView}>
            <LottieView style={style.lottie} source={assets.trophy} autoPlay={true} loop={false} />
          </Animated.View>
        )}
      </View>

      <TextTemplate type={descriptionTitleTemplate} color={Colours.neutral.n800}>
        {screenState.descriptionTitle}
      </TextTemplate>
      <Animated.Image style={confettiStyle} resizeMode="contain" source={assets.confetti} />
      <View style={style.separator16} />
      <TextTemplate type={"b2"} textAlign="center" color={Colours.neutral.n800}>
        {screenState.description}
      </TextTemplate>
      <View style={style.rewardSeparator} />
      <EventRewardsWrapper isClaimRewardEnabled={false} eventTitle={screenState.title} rewards={rewards} />
      <View style={style.buttonWrapper}>
        <Button size="Large" onPress={onCta} translatedLabel={cta} testID={COLLECT_EVENT_REWARD_BUTTON} />
      </View>
    </Box>
  );
};

const iconHeight = Style.isShortToMedium() ? Style.DEVICE_WIDTH - 105 : 330;

const style = StyleSheet.create({
  titleWrapper: {
    marginTop: TOP_BAR.PADDING_TOP + Style.adjust(8),
  },
  lottieWrapper: {
    marginTop: Style.isShortToMedium() ? Style.adjust(8) : Style.adjust(14),
    height: Style.isShortToMedium() ? Style.adjust(170) : Style.adjust(220),
    width: Style.DEVICE_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  separator16: {
    height: Style.isShortToMedium() ? Style.adjust(8) : Style.adjust(16),
  },
  rewardSeparator: {
    height: Style.isShortToMedium() ? Style.adjust(16) : Style.adjust(40),
  },
  buttonWrapper: {
    position: "absolute",
    bottom: Style.adjust(32),
  },
  lottieAnimatedView: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(iconHeight),
    alignSelf: "center",
  },
  lottie: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_WIDTH * (220 / 180),
    alignSelf: "center",
  },
});

export default memo(CollectEventRewardScreen);
