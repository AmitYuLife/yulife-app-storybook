import { Image, Stack, TextTemplate } from "@atoms";
import { Button, LottieView } from "@molecules";
import { t } from "@locale";
import PodiumRays from "@organisms/podium/podium-rays";
import { Colours, Style } from "@styles";
import LottieViewRef from "lottie-react-native";
import { memo, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { RollingText } from "@organisms";
import { GetMobileGameBattlePassQuery } from "@graphql/__generated";

interface IBattlePassLevelUpModalProps {
  onClose: () => void;
  reward: GetMobileGameBattlePassQuery["getMobileGameBattlePass"]["rewards"][0];
}

const BattlePassLevelUpModal = ({ onClose, reward }: IBattlePassLevelUpModalProps) => {
  const lottieRef = useRef<LottieViewRef>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      lottieRef.current?.play();
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  if (!reward) {
    return null;
  }

  return (
    <Animated.View entering={FadeIn.duration(200)} style={styles.wrapper}>
      <View style={styles.raysWrapper}>
        <Animated.View style={styles.rays} entering={FadeIn.delay(300).duration(800)}>
          <PodiumRays backgroundColor={"transparent"} style="alternate" />
        </Animated.View>
      </View>
      <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.levelUpText}>
        <TextTemplate type="h1" color={Colours.neutral.white} textAlign="center">
          {t("screens.battle_pass.level_up.title")}
        </TextTemplate>
        <RollingText previousValue={Math.max(reward.position - 1, 0)} newValue={reward.position} />
      </Animated.View>

      <View style={styles.imageWrapper}>
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

      <Stack style={styles.buttonsWrapper} gap={5}>
        <Button translationKey={"labels.cta.continue"} onPress={onClose} />
      </Stack>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `rgba(0,0,0,0.4)`,
  },
  buttonsWrapper: {
    flex: 1,
    marginTop: Style.adjust(100),
    justifyContent: "flex-end",
    paddingBottom: Style.adjust(45),
  },
  levelUpText: { position: "absolute", top: 100 },
  rewardOverlayIcon: { position: "absolute", top: Style.adjust(25), left: Style.adjust(25) },
  rays: { width: "100%", height: "100%", position: "absolute", top: Style.adjust(-130) },
  raysWrapper: { width: "100%", height: "100%", position: "absolute", opacity: 0.4 },
  animatedImageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: Style.adjust(250),
    height: Style.adjust(250),
  },
  imageWrapper: { marginBottom: Style.adjust(50), paddingTop: Style.adjust(160), marginTop: Style.adjust(100) },
});

export default memo(BattlePassLevelUpModal);
