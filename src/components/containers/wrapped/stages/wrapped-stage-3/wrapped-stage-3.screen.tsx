import { Box } from "@atoms";
import PodiumRays from "@organisms/podium/podium-rays";
import { StyleSheet, useWindowDimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Easing,
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { IWrappedStageProps } from "../../wrapped.types";
import { memo, useCallback, useState } from "react";
import { Colours, Style } from "@styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WrappedCloud } from "../../components/wrapped-cloud";
import WrappedFlyingAsset from "../../components/wrapped-flying-asset";
import WrappedCoinStage from "./components/wrapped-coin-stage";
import { Image } from "expo-image";
import { useWrappedStage3Animations } from "./use-wrapped-stage-3-animations";
import WrappedStepsStage from "./components/wrapped-steps-stage";
import { WRAPPED_BOTTOM_OFFSET } from "../../wrapped.constants";
import { HEIGHT, TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

const CLIFF_ASPECT_RATIO = 1143 / 1080;
const CLIFF_2 = 1675 / 1080;
const SHEEP_ASPECT_RATIO = 501 / 483;

const CLIFF_ENTERING_DELAY = 800;

const SCALE_STAGE_DURATION = 4000;
const SCALE_VALUE = 5;
const COIN_SCALE_VALUE = 1.2;

const EAGLE_ASSET = require("./assets/eagle.webp");
const CLIFF_LEFT_ASSET = require("./assets/cliff-left.webp");
const CLIFF_RIGHT_ASSET = require("./assets/cliff-right.webp");
const FAT_SHEEP_ASSET = require("./assets/fat-sheep.webp");

const WrappedStage3Screen = ({ nextStage, stats }: IWrappedStageProps) => {
  const insets = useSafeAreaInsets();
  const scaleValue = useSharedValue(1);
  const coinTranslateY = useSharedValue(0);
  const { width, height } = useWindowDimensions();
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [isCoinStage, setIsCoinStage] = useState<boolean>(false);

  const { coinScale, coinStyle, coinContainerStyle, coinContainerFloatStyle } = useWrappedStage3Animations({
    isExiting,
    isCoinStage,
  });

  const startCoinTransition = useCallback(() => {
    setIsCoinStage(true);
    scaleValue.value = withTiming(SCALE_VALUE, { duration: 5000 });
    coinScale.value = withSequence(
      withTiming(0.2, { duration: 1300, easing: Easing.in(Easing.ease) }),
      withTiming(COIN_SCALE_VALUE, { duration: 5000, easing: Easing.out(Easing.ease) })
    );

    coinTranslateY.value = withTiming(-100, { duration: 3000 });
  }, [coinScale, coinTranslateY, scaleValue]);

  const onCoinStageContinue = useCallback(() => {
    setIsExiting(true);

    setTimeout(() => {
      nextStage();
    }, 2000);
  }, [nextStage]);

  const wrapperStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scaleValue.value,
        },
      ],
    };
  });

  return (
    <Box w="100%" h="100%" bg={isExiting ? Colours.neutral.n50 : "#8ADFFB"}>
      <Box forceAnimated={true} style={wrapperStyle}>
        <Box w="100%" h="100%" entering={SlideInDown.duration(1800)}>
          <LinearGradient
            colors={["#8ADFFB", "#FFF47E"]}
            style={styles.fill}
            start={{ y: 0, x: 0 }}
            end={{ y: 0.8, x: 0 }}
          />
        </Box>

        <Box h={Style.adjust(250)} bottom={0} w="100%" position="absolute" entering={SlideInDown.duration(2000)}>
          <LinearGradient colors={["#FFF47E", "#FDD377"]} style={styles.fill} />
        </Box>

        {isExiting ? (
          <Box
            entering={FadeIn.delay(1000).duration(1000)}
            position="absolute"
            w="100%"
            h="100%"
            bg={Colours.neutral.n50}
          />
        ) : null}

        <Box position="absolute" w="100%" top={20}>
          <WrappedCloud color="white" opacity={0.3} duration={8000} top={5} delay={3000} />
          <WrappedCloud color="white" opacity={0.3} duration={12000} top={140} invert={true} size={120} delay={3000} />
        </Box>

        <Box position="absolute" top={height * 0.25}>
          <WrappedFlyingAsset asset={EAGLE_ASSET} />
        </Box>

        <Box position="absolute" bottom={0} w="100%">
          <Box
            left={0}
            w={width}
            position="absolute"
            h={width * CLIFF_ASPECT_RATIO}
            bottom={Style.adjust(120)}
            entering={SlideInLeft.delay(CLIFF_ENTERING_DELAY).duration(2000)}
          >
            <Image source={CLIFF_LEFT_ASSET} style={styles.fill} />
          </Box>

          <Box
            right={0}
            w={width}
            position="absolute"
            h={width * CLIFF_2}
            bottom={Style.adjust(-50)}
            entering={SlideInRight.delay(CLIFF_ENTERING_DELAY).duration(2000)}
          >
            <Image source={CLIFF_RIGHT_ASSET} style={styles.fill} />
          </Box>

          <Box
            left={30}
            w={width * 0.3}
            position="absolute"
            bottom={Style.DEVICE_HEIGHT * 0.15}
            h={width * 0.3 * SHEEP_ASPECT_RATIO}
            entering={SlideInLeft.duration(3000)}
          >
            <Image source={FAT_SHEEP_ASSET} style={styles.fill} />
          </Box>
        </Box>
      </Box>

      <Box
        top={0}
        w={"100%"}
        h={"100%"}
        pt={TOP_BAR_WITH_PAD - HEIGHT}
        pb={insets.bottom + WRAPPED_BOTTOM_OFFSET}
        position="absolute"
        justifyContent="space-between"
      >
        {!isCoinStage ? <WrappedStepsStage onPress={startCoinTransition} totalSteps={stats?.totalSteps} /> : null}
      </Box>

      <Box position="absolute" w="100%" h="100%" pointerEvents="none">
        {isCoinStage && !isExiting ? (
          <Box
            w="100%"
            h="100%"
            position="absolute"
            bg="rgba(255,255,200,1)"
            entering={FadeIn.delay(1000).duration(3000)}
            exiting={FadeOut.duration(1000)}
          />
        ) : null}
      </Box>

      {isCoinStage ? (
        <Box w="100%" h="100%" position="absolute">
          <Box style={coinContainerFloatStyle} forceAnimated={true}>
            <Box style={coinContainerStyle} forceAnimated={true}>
              <Box forceAnimated={true} style={coinStyle}>
                <>
                  <Box
                    w="100%"
                    h="100%"
                    position="absolute"
                    alignItems="center"
                    justifyContent="center"
                    top={Style.adjust(Style.DEVICE_HEIGHT > 600 ? -90 : -140)}
                    entering={FadeIn.delay(500).duration(SCALE_STAGE_DURATION)}
                  >
                    <PodiumRays backgroundColor={"transparent"} style="alternate" color="#FFED44" />
                  </Box>
                  <Box h="100%" w="100%" justifyContent="center" alignItems="center">
                    <Image source={require("./yucoin-hifi.webp")} style={styles.yugiHifi} resizeMode="contain" />
                  </Box>
                </>
              </Box>
            </Box>
          </Box>
          {!isExiting && isCoinStage ? <WrappedCoinStage stats={stats} onPress={onCoinStageContinue} /> : null}
        </Box>
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  fill: { width: "100%", height: "100%" },
  yugiHifi: { width: Style.adjust(200), height: Style.adjust(200) },
  yearlySteps: { fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD, color: "#640038", fontSize: 40 },
});

export default memo(WrappedStage3Screen);
