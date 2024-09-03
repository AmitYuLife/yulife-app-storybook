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

const { height } = Dimensions.get("screen");
const BattlePassLevelUpModal = ({ onClose, reward }: IBattlePassLevelUpModalProps) => {
  const lottieRef = useRef<LottieViewRef>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      lottieRef.current?.play();
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  const offset = useSafeAreaViewOffset();

  const scrollStyle = useMemo(
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
        top: height / 2 - RAYS_Y_OFFSET / 2 - REWARD_IMAGE_SIZE / 2 + Style.adjust(15),
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
        <View style={scrollStyle}>
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
              ref={lottieRef}
              source={require("./enterprise-glow.json")}
              style={{ width: Style.adjust(230), height: Style.adjust(250) }}
              loop={true}
            />
            <Image style={styles.rewardOverlayIcon} width={Style.adjust(200)} source={reward.overlayIcon} />
          </Animated.View>
        </View>
      </Animated.View>
    </BlurredOverlay>
  );
};

const REWARD_IMAGE_SIZE = Style.adjust(250);
const RAYS_Y_OFFSET = Style.adjust(130);

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
  rewardOverlayIcon: { position: "absolute", top: Style.adjust(25), left: Style.adjust(25) },
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
});

export default memo(BattlePassLevelUpModal);
