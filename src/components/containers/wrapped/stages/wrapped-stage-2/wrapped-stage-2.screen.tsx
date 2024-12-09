import { Box, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { memo, useCallback, useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FadeIn, FadeInRight, FadeInUp, FadeOut, SlideInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IWrappedStageProps } from "../../wrapped.types";
import WrappedFish from "./components/wrapped-fish";
import WrappedChallengeCountCard from "./components/wrapped-challenge-count-card";
import WrappedJellies from "./components/wrapped-jellies";
import { Style } from "@styles";
import { useWrappedStage2Animations } from "./use-wrapped-stage-2-animations.hook";
import { WRAPPED_STAGE_2_WRAPPER_OFFSET } from "./wrapped-stage-2.constants";
import { t } from "@locale";

const RAYS_SCALE = 1;
const EXIT_DELAY = 2000;
const CONTENT_DELAY = 4500;
const RAYS_ASPECT = 1187 / 700;
const CORAL_ASPECT = 890 / 1080;

const RAYS_ASSET = require("./assets/ocean-rays.webp");
const CORAL_ASSET = require("./assets/bottom-coral.webp");
const WATER_BOTTOM_BACK_ASSET = require("./assets/water-bottom-back.webp");

const WrappedStage2Screen = ({ nextStage, stats }: IWrappedStageProps) => {
  const insets = useSafeAreaInsets();
  const [isExiting, setIsExiting] = useState(false);
  const coralHeight = Style.DEVICE_WIDTH * CORAL_ASPECT;
  const { wrapperStyle, coralStyle, waterStyle } = useWrappedStage2Animations({ isExiting, coralHeight });

  const onPress = useCallback(() => {
    setIsExiting(true);

    setTimeout(() => {
      nextStage();
    }, EXIT_DELAY);
  }, [nextStage]);

  return (
    <Box w="100%" h="100%" bg="#042759">
      <Box w={"100%"} h="100%">
        <Box w="100%" h="100%" entering={SlideInUp.delay(200).duration(2300)}>
          <LinearGradient colors={["#16558D", "#042759"]} style={styles.background} />
        </Box>

        {!isExiting ? <WrappedJellies /> : null}

        <Box w={"100%"} h="100%" position="absolute">
          {!isExiting ? (
            <Box
              w="100%"
              h="100%"
              exiting={FadeOut.delay(300).duration(1000)}
              entering={FadeInRight.delay(2000).duration(5000)}
            >
              <Image style={styles.rays} source={RAYS_ASSET} />
            </Box>
          ) : null}
        </Box>
      </Box>

      <Box style={styles.background} pb={insets.bottom} justifyContent="space-between" position="absolute">
        <ScrollView contentContainerStyle={{ paddingBottom: coralHeight }} showsVerticalScrollIndicator={false}>
          {!isExiting ? (
            <Box exiting={FadeOut.duration(1000)}>
              <Box px={25} pt={30} gap={10}>
                <Box entering={FadeInUp.delay(CONTENT_DELAY).duration(1000)}>
                  <TextTemplate type="h1" color="white" textAlign="center">
                    {t("screens.wrapped.stage_2.title")}
                  </TextTemplate>
                </Box>

                <Box entering={FadeInUp.delay(CONTENT_DELAY + 200).duration(1000)} opacity={0.95}>
                  <TextTemplate type="b1" color="white" textAlign="center">
                    {t("screens.wrapped.stage_2.subtitle")}
                  </TextTemplate>
                </Box>
              </Box>
              <Box px={16} flexWrap="wrap" flexDirection="row" mt={40}>
                {[...(stats.challengeCounts ?? [])]
                  .sort((a, b) => (a.count > b.count ? -1 : 1))
                  .map(({ label, count }, index) => (
                    <WrappedChallengeCountCard
                      key={label}
                      label={label}
                      value={count}
                      entering={FadeInUp.delay(CONTENT_DELAY + 1000 + index * 150).duration(500)}
                    />
                  ))}
                <Box p={20} />
              </Box>
            </Box>
          ) : null}
        </ScrollView>
      </Box>

      <Box forceAnimated={true} style={wrapperStyle} pointerEvents="box-none">
        <Box forceAnimated={true} style={coralStyle} pointerEvents="none">
          <Image style={styles.background} resizeMode="cover" source={CORAL_ASSET} />
        </Box>

        <Box forceAnimated={true} style={waterStyle} pointerEvents="none">
          <Image style={styles.background} resizeMode="cover" source={WATER_BOTTOM_BACK_ASSET} />
        </Box>
        <Box
          h="100%"
          w="100%"
          pb={250}
          position="absolute"
          pointerEvents="none"
          justifyContent="flex-end"
          top={-WRAPPED_STAGE_2_WRAPPER_OFFSET}
        >
          <WrappedFish duration={12000} delay={2000} />
        </Box>

        <Box
          w="100%"
          position="absolute"
          pointerEvents="box-none"
          bottom={insets.bottom + WRAPPED_STAGE_2_WRAPPER_OFFSET}
          entering={FadeInUp.delay(CONTENT_DELAY + 2000).duration(1000)}
        >
          <Box mt={30} justifyContent="center" w="100%" flexDirection="row" pointerEvents="box-none">
            <Button onPress={onPress} translationKey="labels.cta.continue" />
          </Box>
        </Box>
      </Box>

      {isExiting ? (
        <Box entering={FadeIn.delay(1000).duration(1000)} position="absolute" w="100%" h="100%" bg="#8ADFFB" />
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  rays: {
    right: 0,
    position: "absolute",
    top: Style.adjust(100),
    width: Style.DEVICE_WIDTH * RAYS_SCALE,
    height: Style.DEVICE_WIDTH * RAYS_ASPECT * RAYS_SCALE,
  },
});

export default memo(WrappedStage2Screen);
