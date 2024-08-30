import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { LottieView, RadioEnterpriseRewardItem } from "@molecules";
import Lottie from "lottie-react-native";
import { Image, TextTemplate, prefetchImages } from "@atoms";
import { IReward, IRewardLottie } from "./collect-battle-pass-reward-modal";
import Animated, {
  FadeIn,
  FadeOutDown,
  ZoomInEasyDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Colours, Style } from "@styles";
import styles from "./collect-battle-pass-reward-stage-style";
import { IRadioBattlePassRewardItem } from "@components/molecules/radio-battle-pass-reward-item/radio-battle-pass-reward-item";

// TODO: Remove this
interface IProps {
  lottie: IRewardLottie;
  frames: number[];
  reward: IReward;
  rewardOptions: IRadioBattlePassRewardItem["reward"][];
  onAnimationFinish: () => void;
  onPress: (id: string) => void;
  rewardOptionSelected: string;
}

const OFFSET = 5;

const CollectEnterpriseRewardStageTwo = ({
  lottie,
  reward,
  frames,
  onAnimationFinish,
  onPress,
  rewardOptions,
  rewardOptionSelected,
}: IProps) => {
  const [hideLottie, setHideLottie] = useState(false);
  const lottieRef = useRef<Lottie>(null);
  const offset = useSharedValue<number>(0);

  useEffect(() => {
    prefetchImages(reward.uri);
    lottieRef.current?.play(frames[0], frames[1]);
    playUpAndDownAnimation();
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  const playUpAndDownAnimation = () => {
    offset.value = withRepeat(withTiming(OFFSET, { duration: 800 }), 0, true);
  };

  const lottieStyle = useMemo(
    () => ({
      width: lottie.width,
      height: lottie.height,
    }),
    [lottie]
  );

  const handleOnAnimationFinish = useCallback(() => {
    setHideLottie(true);
    onAnimationFinish();
  }, [onAnimationFinish]);

  return (
    <View>
      {hideLottie ? null : (
        <Animated.View exiting={FadeOutDown} style={styles.lottie}>
          <LottieView
            ref={lottieRef}
            resizeMode="cover"
            style={lottieStyle}
            source={lottie.uri}
            autoPlay={false}
            loop={false}
            onAnimationFinish={handleOnAnimationFinish}
          />
        </Animated.View>
      )}

      <Animated.View entering={ZoomInEasyDown.duration(500).delay(500)} style={styles.rewardIcon}>
        <Animated.View style={style}>
          <Image resizeMode="cover" source={reward} width={Style.adjust(151)} height={Style.adjust(130)} />
        </Animated.View>
      </Animated.View>
      {!hideLottie ? null : (
        <Animated.View entering={FadeIn} style={styles.selectReward}>
          <View style={styles.descriptionStage2}>
            <TextTemplate type="h3" color={Colours.neutral.white} textAlign="center">
              {`You got the ${reward.name}`}
              {/* this is temp text, thats why i haven't added to translations yet */}
            </TextTemplate>
            {rewardOptions.length === 1 ? null : (
              <View style={styles.rewardTitle}>
                <TextTemplate type="b2" color={Colours.neutral.white} textAlign="center">
                  Choose what you would like!
                  {/* this is temp text, thats why i haven't added to translations yet */}
                </TextTemplate>
              </View>
            )}
          </View>
          <View style={styles.rewardOptions}>
            {rewardOptions.map((option) => (
              <View key={option.id} style={styles.rewardOption}>
                <RadioEnterpriseRewardItem
                  onPress={onPress}
                  reward={option}
                  checked={option.id === rewardOptionSelected}
                />
              </View>
            ))}
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default memo(CollectEnterpriseRewardStageTwo);
