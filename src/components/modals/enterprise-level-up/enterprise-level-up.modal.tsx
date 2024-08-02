import { Image, Stack, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { t } from "@locale";
import PodiumRays from "@organisms/podium/podium-rays";
import { Colours, Style } from "@styles";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeInUp, ZoomInEasyUp } from "react-native-reanimated";

interface IEnterpriseLevelUpModalProps {
  onClose: () => void;
  rewardTitle: string;
}

const PLACEHOLDER_IMAGE = require("./wellbeing-placeholder.png");
const GLOW_IMAGE = require("./glow.png");

const EnterpriseLevelUpModal = ({ onClose, rewardTitle }: IEnterpriseLevelUpModalProps) => {
  if (!rewardTitle) {
    return null;
  }

  return (
    <Animated.View entering={FadeIn.duration(200)} style={styles.wrapper}>
      <View style={styles.raysWrapper}>
        <Animated.View style={styles.rays} entering={FadeIn.delay(300).duration(800)}>
          <PodiumRays backgroundColor={"transparent"} style="alternate" />
        </Animated.View>
      </View>
      <Animated.View entering={FadeInUp.delay(200).duration(500)} style={styles.levelUpText}>
        <TextTemplate type="h3" color={Colours.neutral.white} textAlign="center">
          {t("screens.battle_pass.level_up.title", { item: rewardTitle })}
        </TextTemplate>
      </Animated.View>

      <View style={styles.imageWrapper}>
        <Animated.View entering={ZoomInEasyUp.delay(200).duration(400)} style={styles.animatedImageWrapper}>
          <Image width={Style.adjust(200)} source={GLOW_IMAGE} />
          <Image style={styles.rewardOverlayIcon} width={Style.adjust(200)} source={PLACEHOLDER_IMAGE} />
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
    backgroundColor: `rgba(0,0,0,0.1)`,
  },
  buttonsWrapper: {
    flex: 1,
    marginTop: Style.adjust(100),
    justifyContent: "flex-end",
    paddingBottom: Style.adjust(45),
  },
  levelUpText: { position: "absolute", top: 100 },
  rewardOverlayIcon: { position: "absolute", top: 0, left: 0 },
  rays: { width: "100%", height: "100%", position: "absolute", top: Style.adjust(-180) },
  raysWrapper: { width: "100%", height: "100%", position: "absolute", opacity: 0.4 },
  animatedImageWrapper: { justifyContent: "center", alignItems: "center" },
  imageWrapper: { marginBottom: Style.adjust(50), paddingTop: Style.adjust(140), marginTop: Style.adjust(100) },
});

export default memo(EnterpriseLevelUpModal);
