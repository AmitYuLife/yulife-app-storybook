import { Style } from "@styles";
import { Button } from "@components/molecules";
import { Box, Text, TextTemplate } from "@atoms";
import { Image, StyleSheet } from "react-native";
import { WrappedCloud } from "../../components/wrapped-cloud";
import { IWrappedStageProps } from "../../wrapped.types";
import LinearGradient from "react-native-linear-gradient";
import { memo, useCallback, useMemo, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WrappedChallengeStarsCard from "./components/wrapped-challenge-stars-card";
import { useWrappedStage1Animations } from "./use-wrapped-stage-1-animations.hook";
import { FadeInUp, FadeOut, FadeOutDown, SlideInUp, ZoomIn } from "react-native-reanimated";
import { t } from "@locale";
import { addCommasToNumber } from "@utils";

export const WRAPPED_1_CLOUD_SIZE = 150;
export const WRAPPED_1_CLOUD_SPEED = 10000;

const YUGI_ASSET = require("./assets/yugi.webp");
const WATER_ASSET = require("./assets/water.webp");
const MOUNTAIN_ASSET = require("./assets/mountain.webp");
const BOTTOM_GRASS_ASSET = require("./assets/bottom-grass.webp");

const WrappedStage1Screen = ({ nextStage, stats }: IWrappedStageProps) => {
  const insets = useSafeAreaInsets();
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const { containerStyle, grassStyle, mountainStyle, waterStyle, yugiStyle, wrapperStyle } = useWrappedStage1Animations(
    { isExiting }
  );

  const onPress = useCallback(() => {
    setIsExiting(true);

    setTimeout(() => {
      nextStage();
    }, 2000);
  }, [nextStage]);

  const challengeRatings = useMemo(() => {
    return [...(stats?.challengeRatings ?? [])].sort((a, b) => (a.rating < b.rating ? -1 : 1));
  }, [stats?.challengeRatings]);

  return (
    <>
      <Box bg="#042759" w="100%" h="100%">
        <Box forceAnimated={true} style={containerStyle} />
      </Box>
      <Box w="100%" h="100%" position="absolute">
        {!isExiting ? (
          <Box
            w="100%"
            h="100%"
            position="absolute"
            exiting={FadeOut.duration(1000)}
            entering={SlideInUp.delay(200).duration(2300)}
          >
            <LinearGradient colors={["#fffcd6", "#FFFABF"]} style={styles.background} />
          </Box>
        ) : null}

        {!isExiting ? (
          <Box position="absolute" w="100%" h="100%">
            <WrappedCloud size={WRAPPED_1_CLOUD_SIZE} duration={WRAPPED_1_CLOUD_SPEED} top={0} />
            <WrappedCloud
              top={120}
              delay={1000}
              invert={true}
              size={WRAPPED_1_CLOUD_SIZE * 0.8}
              duration={WRAPPED_1_CLOUD_SPEED * 1.2}
            />
          </Box>
        ) : null}

        <Box forceAnimated={true} style={wrapperStyle}>
          <Box justifyContent="center" alignItems="center" position="absolute" w="100%" h="100%">
            <Box forceAnimated={true} style={mountainStyle}>
              <Image style={styles.background} resizeMode="cover" source={MOUNTAIN_ASSET} />
            </Box>
          </Box>

          <Box forceAnimated={true} style={waterStyle}>
            <Image style={styles.background} resizeMode="cover" source={WATER_ASSET} />
          </Box>

          <Box forceAnimated={true} style={grassStyle}>
            <Image style={styles.background} resizeMode="cover" source={BOTTOM_GRASS_ASSET} />
          </Box>

          <Box forceAnimated={true} style={yugiStyle}>
            <Image style={styles.background} resizeMode="cover" source={YUGI_ASSET} />
          </Box>
        </Box>

        <Box
          px={40}
          h="100%"
          w="100%"
          pt={insets.top}
          pb={insets.bottom}
          position="absolute"
          justifyContent="space-between"
        >
          {!isExiting ? (
            <Box flex={1}>
              <Box w="100%" flex={1} alignItems="center" exiting={FadeOutDown.duration(1000)}>
                <Box entering={FadeInUp.delay(3000).duration(1000)} mt={10}>
                  <TextTemplate type="h3" textAlign="center">
                    {t("screens.wrapped.stage_1.title")}
                  </TextTemplate>
                </Box>

                <Box entering={ZoomIn.delay(3300).duration(1000)} mt={10}>
                  <Text style={styles.challengeCountText}>{addCommasToNumber(stats.totalChallenges)}</Text>
                </Box>
                <Box entering={FadeInUp.delay(3500).duration(1000)}>
                  <TextTemplate type="h1">
                    {stats?.totalChallenges === 1
                      ? t("screens.wrapped.stage_1.subtitle_single")
                      : t("screens.wrapped.stage_1.subtitle")}
                  </TextTemplate>
                </Box>

                <Box w="100%" gap={10} mt={25} justifyContent="center" alignItems="center">
                  {challengeRatings.map((stat, index) => (
                    <WrappedChallengeStarsCard
                      key={index}
                      stars={stat.rating}
                      amount={stat.count}
                      entering={FadeInUp.delay(4000 + 100 * index).duration(1000)}
                    />
                  ))}
                </Box>
              </Box>

              <Box entering={FadeInUp.delay(5000).duration(1000)}>
                <Box mt={30}>
                  <Button translationKey="labels.cta.continue" onPress={onPress} />
                </Box>
              </Box>
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  challengeCountText: { fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD, color: "#640038", fontSize: 70 },
});

export default memo(WrappedStage1Screen);
