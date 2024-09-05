import { Image, Stack, TextTemplate } from "@atoms";
import { Button, LottieView } from "@molecules";
import { t } from "@locale";
import PodiumRays from "@organisms/podium/podium-rays";
import { Colours, Style } from "@styles";
import LottieViewRef from "lottie-react-native";
import { memo, useEffect, useMemo, useRef } from "react";
import { Dimensions, StyleSheet, View, ViewStyle } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { RollingText } from "@organisms";
import { GetMobileGameBattlePassQuery } from "@graphql/__generated";
import { useSafeAreaViewOffset } from "@hooks";
import BlurredOverlay from "../blurred-overlay/blurred-overlay";

interface IBattlePassLevelUpModalProps {
  onClose: () => void;
  reward: GetMobileGameBattlePassQuery["getMobileGameBattlePass"]["rewards"][0];
}

const { height: screenHeight } = Dimensions.get("screen");
const ANIMATION_START_DELAY = 700;

const BattlePassLevelUpModal = ({ onClose, reward }: IBattlePassLevelUpModalProps) => {
  const starLottie1Ref = useRef<LottieViewRef>(null);
  const starLottie2Ref = useRef<LottieViewRef>(null);
  const bubbleRef = useRef<LottieViewRef>(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      starLottie1Ref.current?.play(0, 60);
    }, ANIMATION_START_DELAY);

    const timeout2 = setTimeout(() => {
      starLottie2Ref.current?.play(60, 117);
    }, ANIMATION_START_DELAY + 1250);

    const timeout3 = setTimeout(() => {
      bubbleRef.current?.play();
    }, ANIMATION_START_DELAY);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const offset = useSafeAreaViewOffset();

  const wrapperStyle = useMemo(
    (): ViewStyle => ({
      width: "100%",
      minHeight: Style.DEVICE_HEIGHT - offset.safeAreaViewOffset.y - Style.adjust(40),
    }),
    [offset.safeAreaViewOffset]
  );

  const imageWrapperStyles = useMemo(() => {
    return [
      styles.imageWrapper,
      {
        top: screenHeight / 2 - RAYS_Y_OFFSET / 2 - REWARD_IMAGE_SIZE / 2,
      },
    ];
  }, []);

  if (!reward) {
    return null;
  }

  return (
    <BlurredOverlay withBlurBackground={true} blurAmount={3} blurType="dark" backgroundColor="rgba(0,0,0,.1)">
      <Animated.View entering={FadeIn.duration(200)} style={styles.wrapper}>
        <View style={styles.raysWrapper}>
          <Animated.View style={styles.rays} entering={FadeIn.delay(300).duration(800)}>
            <PodiumRays backgroundColor={"transparent"} style="alternate" />
          </Animated.View>
        </View>
        <View style={wrapperStyle}>
          <View style={styles.contentContainer}>
            <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.levelUpText}>
              <TextTemplate type="h2" color={Colours.neutral.white} textAlign="center">
                {t("screens.battle_pass.level_up.title")}
              </TextTemplate>
              <RollingText
                previousValue={`${Math.max(reward.position - 1, 0)}`.padStart(2, "0")}
                newValue={`${reward.position}`.padStart(2, "0")}
              />
            </Animated.View>
          </View>

          <Stack style={styles.buttonsWrapper} gap={5}>
            <Button translationKey={"labels.cta.continue"} onPress={onClose} />
          </Stack>
        </View>

        <View style={imageWrapperStyles}>
          <Animated.View entering={FadeInDown.delay(700).duration(600)} style={styles.animatedImageWrapper}>
            <LottieView
              ref={starLottie1Ref}
              source={require("./battle-pass-level-up-stars.lottie")}
              style={styles.starLottie1}
              loop={true}
            />

            <LottieView
              ref={starLottie2Ref}
              source={require("./battle-pass-level-up-stars.lottie")}
              style={styles.starLottie2}
              loop={true}
              speed={1}
            />
            <LottieView
              ref={bubbleRef}
              source={require("./battle-pass-level-up-bubbles.lottie")}
              style={styles.bubbleLottie}
              loop={true}
              speed={1}
            />

            <Image
              style={styles.rewardOverlayIcon}
              width={Style.adjust(REWARD_IMAGE_SIZE) * 0.75}
              source={reward.overlayIcon}
            />
          </Animated.View>
        </View>
      </Animated.View>
    </BlurredOverlay>
  );
};

const REWARD_IMAGE_SIZE = Style.adjust(180);
const RAYS_Y_OFFSET = Style.adjust(130);
const STARS_SIZE = REWARD_IMAGE_SIZE * 2.6;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    paddingTop: Style.adjust(40),
  },
  buttonsWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  levelUpText: { gap: Style.adjust(14) },
  rewardOverlayIcon: { position: "absolute" },
  rays: { width: "100%", height: "100%", position: "absolute", top: -RAYS_Y_OFFSET },
  raysWrapper: { width: "100%", height: "100%", position: "absolute", opacity: 0.4 },
  animatedImageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: REWARD_IMAGE_SIZE,
    height: REWARD_IMAGE_SIZE,
  },
  imageWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  starLottie1: {
    width: STARS_SIZE,
    height: STARS_SIZE,
  },
  starLottie2: {
    position: "absolute",
    width: STARS_SIZE,
    height: STARS_SIZE,
  },
  bubbleLottie: {
    position: "absolute",
    width: STARS_SIZE,
    height: STARS_SIZE,
  },
});

export default memo(BattlePassLevelUpModal);
