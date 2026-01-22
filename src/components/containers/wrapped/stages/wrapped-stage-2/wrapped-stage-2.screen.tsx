import { Box, TextTemplate } from "@atoms";
import { Button, SwimmingFish } from "@components/molecules";
import { memo, useCallback, useMemo, useState } from "react";
import { Image, ScrollView } from "react-native";
import { FadeIn, FadeInDown, FadeInUp, SlideInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IWrappedStageProps } from "../../wrapped.types";
import WrappedChallengeCountCard from "./components/wrapped-challenge-count-card";
import { Style, StyleSheet } from "@styles";
import { useWrappedStage2Animations } from "./use-wrapped-stage-2-animations.hook";
import { t } from "@locale";
import { WRAPPED_BOTTOM_OFFSET } from "../../wrapped.constants";
import { HEIGHT, TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

const EXIT_DELAY = 600;
const CONTENT_DELAY = 3500;
const CORAL_ASPECT = 768 / 1125;

const BUBBLES_ASSET = require("./assets/bubbles.webp");
const TOP_WAVES_ASSET = require("./assets/top-waves.webp");
const CORAL_ASSET = require("./assets/bottom-coral.webp");
const WATER_BOTTOM_BACK_ASSET = require("./assets/water-bottom-back.webp");

const WrappedStage2Screen = ({ nextStage, stats }: IWrappedStageProps) => {
  const insets = useSafeAreaInsets();
  const [isExiting, setIsExiting] = useState(false);
  const coralHeight = Style.DEVICE_WIDTH * CORAL_ASPECT;
  const { wrapperStyle, coralStyle, waterStyle, bubbleStyle } = useWrappedStage2Animations({ isExiting, coralHeight });

  const onPress = useCallback(() => {
    setIsExiting(true);

    setTimeout(() => {
      nextStage();
    }, EXIT_DELAY);
  }, [nextStage]);

  const challengeStats = useMemo(() => {
    return [...(stats.challengeCounts ?? [])]
      .sort((a, b) => (a.count > b.count ? -1 : 1))
      .map(({ count, label, icon }) => {
        return {
          count,
          label,
          icon,
        };
      });
  }, [stats.challengeCounts]);

  return (
    <Box w="100%" h="100%" bg="#0747A3">
      <Box w={"100%"} h="100%">
        <Box w={"100%"} h="100%" position="absolute">
          <Box
            top={0}
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            entering={FadeInDown.delay(1000).duration(5000)}
          >
            <Image style={styles.waves} resizeMode="contain" source={TOP_WAVES_ASSET} />
          </Box>
        </Box>

        <Box w={"100%"} h="100%" position="absolute">
          <Box style={bubbleStyle} forceAnimated={true} w="100%" h="100%" top={-50}>
            <Box w="100%" h="100%" justifyContent="center" alignItems="center" entering={SlideInDown.duration(5000)}>
              <Image style={styles.bubbles} resizeMode="contain" source={BUBBLES_ASSET} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        style={styles.background}
        pb={insets.bottom}
        justifyContent="space-between"
        position="absolute"
        pt={TOP_BAR_WITH_PAD - HEIGHT}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: coralHeight,
            minHeight: Style.DEVICE_HEIGHT * 0.7,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Box px={25} pt={30} gap={10}>
            <Box entering={FadeInUp.delay(CONTENT_DELAY).duration(1000)} gap={2}>
              <TextTemplate type="h3" color="white" textAlign="center">
                {t("screens.wrapped.stage_2.line_1")}
              </TextTemplate>
              <TextTemplate type="h3" color="white" textAlign="center">
                {t("screens.wrapped.stage_2.line_2")}
              </TextTemplate>
              <TextTemplate type="h3" color="white" textAlign="center">
                {t("screens.wrapped.stage_2.line_3")}
              </TextTemplate>
            </Box>
          </Box>
          <Box px={16} mt={40} alignItems="center" justifyContent="center">
            <Box w={Style.DEVICE_WIDTH * 0.6}>
              {challengeStats.map(({ icon, label, count }, index) => (
                <WrappedChallengeCountCard
                  key={label}
                  label={label}
                  icon={icon}
                  value={count}
                  entering={FadeInUp.delay(CONTENT_DELAY + 1000 + index * 100).duration(500)}
                />
              ))}
            </Box>
            <Box p={20} />
          </Box>
        </ScrollView>
      </Box>

      <Box forceAnimated={true} style={wrapperStyle} pointerEvents="box-none">
        <Box forceAnimated={true} style={coralStyle} pointerEvents="none">
          <Image style={styles.background} resizeMode="cover" source={CORAL_ASSET} />
        </Box>

        <Box forceAnimated={true} style={waterStyle} pointerEvents="none">
          <Image style={styles.background} resizeMode="cover" source={WATER_BOTTOM_BACK_ASSET} />
        </Box>
        <Box h="100%" w="100%" position="absolute" pointerEvents="box-none" justifyContent="flex-end">
          <Box position="absolute" bottom={0} pb={180} width={"100%"} pointerEvents="box-none">
            <SwimmingFish duration={12000} delay={2000} interactive={true} />
          </Box>
        </Box>

        <Box
          w="100%"
          position="absolute"
          pointerEvents={isExiting ? "none" : "box-none"}
          bottom={insets.bottom + WRAPPED_BOTTOM_OFFSET}
          entering={FadeInUp.delay(CONTENT_DELAY + 2000).duration(1000)}
        >
          <Box mt={30} justifyContent="center" w="100%" flexDirection="row" pointerEvents="box-none">
            <Button onPress={onPress} translationKey="labels.cta.continue" />
          </Box>
        </Box>
      </Box>

      {isExiting ? (
        <Box entering={FadeIn.delay(0).duration(600)} position="absolute" w="100%" h="100%" bg="#8ADFFB" />
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  waves: { position: "absolute", width: "100%", top: 0 },
  bubbles: { position: "absolute", width: "90%", height: "100%" },
});

export default memo(WrappedStage2Screen);
