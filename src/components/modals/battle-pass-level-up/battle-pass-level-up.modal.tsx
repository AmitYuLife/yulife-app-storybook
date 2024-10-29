import { Box, TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { t } from "@locale";
import PodiumRays from "@organisms/podium/podium-rays";
import { Colours, Style } from "@styles";
import { memo, useEffect, useMemo } from "react";
import { Dimensions, StyleSheet, View, ViewStyle } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { BattlePassReward, RollingText } from "@organisms";
import { GetMobileGameBattlePassQuery } from "@graphql/__generated";
import { useSafeAreaViewOffset, useTrack } from "@hooks";
import BlurredOverlay from "../blurred-overlay/blurred-overlay";
import { DONATION_LEVEL_UP_MODAL } from "@ids";
import { DETOX_ENABLED } from "@services/socket";

interface IBattlePassLevelUpModalProps {
  onClose: () => void;
  reward: GetMobileGameBattlePassQuery["getMobileGameBattlePass"]["rewards"][0];
}

const { height: screenHeight } = Dimensions.get("screen");
const ANIMATION_START_DELAY = 700;

const BattlePassLevelUpModal = ({ onClose, reward }: IBattlePassLevelUpModalProps) => {
  const track = useTrack();
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

  useEffect(() => {
    track("battlepass_level_up", { level_achieved: reward.position });
  }, [reward.position, track]);

  if (!reward) {
    return null;
  }

  return (
    <BlurredOverlay withBlurBackground={true} blurAmount={3} blurType="dark" backgroundColor="rgba(0,0,0,.1)">
      <Animated.View entering={FadeIn.duration(200)} style={styles.wrapper}>
        <View style={styles.raysWrapper}>
          <Animated.View style={styles.rays} entering={FadeIn.delay(300).duration(800)}>
            {!DETOX_ENABLED && <PodiumRays backgroundColor={"transparent"} style="alternate" />}
          </Animated.View>
        </View>
        <View style={wrapperStyle} testID={DONATION_LEVEL_UP_MODAL}>
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

          <Box style={styles.buttonsWrapper} gap={5}>
            <Button translationKey={"labels.cta.continue"} onPress={onClose} />
          </Box>
        </View>

        <View style={imageWrapperStyles}>
          <Animated.View entering={FadeInDown.delay(700).duration(600)} style={styles.animatedImageWrapper}>
            <BattlePassReward size={180} source={reward.overlayIcon} delay={ANIMATION_START_DELAY} />
          </Animated.View>
        </View>
      </Animated.View>
    </BlurredOverlay>
  );
};

const REWARD_IMAGE_SIZE = Style.adjust(180);
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
