import { Box, TextTemplate } from "@atoms";
import { IWrappedStageProps } from "../../wrapped.types";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import SudokuTodaysTimeSvg from "@atoms/icon/sudoku-todays-time-svg";

import { Image, StyleSheet } from "react-native";
import {
  Easing,
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  SlideInRight,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Button } from "@components/molecules";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colours, Style } from "@styles";
import { MedalIcon } from "@atoms/icon/medal-icon";
import { getDuration } from "@components/games/sudoku/sudoku-utils";
import WrappedStage4YudokuGame from "./components/WrappedStage4YudokuGame";
import { t } from "@locale";
import { WRAPPED_BOTTOM_OFFSET } from "../../wrapped.constants";

const BLUE_DELAY = 0;
const CONTENT_DELAY = BLUE_DELAY + 700;
const BLUE_HEIGHT = 300;
const YUDOKU_DELAY = CONTENT_DELAY + 1200;

const WrappedStage4Screen = ({ nextStage, stats }: IWrappedStageProps) => {
  const insets = useSafeAreaInsets();
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [renderYudoku, setRenderYudoku] = useState<boolean>(false);

  const onPress = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      nextStage();
    }, 2000);
  }, [nextStage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderYudoku(true);
    }, YUDOKU_DELAY);

    return () => clearTimeout(timeout);
  }, []);

  const blueStyle = useAnimatedStyle(() => {
    return {
      height: BLUE_HEIGHT,
      backgroundColor: "#A7D2FF",
      paddingTop: insets.top,
      position: "absolute",
      top: -BLUE_HEIGHT,
      width: "100%",
      transform: [
        {
          translateY: withSequence(
            withTiming(0, { duration: 0 }),
            withTiming(0, { duration: BLUE_DELAY }),
            withTiming(BLUE_HEIGHT, { duration: 1100, easing: Easing.inOut(Easing.ease) })
          ),
        },
      ],
    };
  });

  const statItems = useMemo(() => {
    return [
      {
        label: t("screens.wrapped.stage_4.games_played"),
        value: stats.totalYudokus,
        Icon: MedalIcon,
      },
      {
        label: t("screens.wrapped.stage_4.best_time"),
        value: getDuration(stats.bestYudokuTime),
        Icon: SudokuTodaysTimeSvg,
      },
      {
        label: t("screens.wrapped.stage_4.total_time_played"),
        value: getDuration(stats.totalYudokuTime),
        Icon: SudokuTodaysTimeSvg,
      },
    ];
  }, [stats]);

  return (
    <>
      <Box w="100%" h="100%" bg={Colours.neutral.n50}>
        <Box h={BLUE_HEIGHT} w="100%">
          {!isExiting ? (
            <Box exiting={FadeOut.duration(1000)}>
              <Box forceAnimated={true} style={blueStyle}>
                <Box p={25} pr={100} gap={5} mt={5}>
                  <Box entering={FadeInUp.delay(CONTENT_DELAY).duration(1000)}>
                    <TextTemplate type="h3" color="black">
                      {t("screens.wrapped.stage_4.title")}
                    </TextTemplate>
                  </Box>
                  <Box entering={FadeInUp.delay(CONTENT_DELAY + 400).duration(1000)}>
                    <TextTemplate type="b2" color="black">
                      {t("screens.wrapped.stage_4.subtitle")}
                    </TextTemplate>
                  </Box>
                </Box>
                <Box position="absolute" right={0} w={300} h={300} entering={SlideInRight.duration(2500)}>
                  <Image source={require("./yudoku-eagle.webp")} style={styles.eagleImage} />
                </Box>
              </Box>
            </Box>
          ) : null}
        </Box>
        <Box>
          {!isExiting ? (
            <Box
              px={20}
              entering={FadeInUp.delay(CONTENT_DELAY + 800).duration(1000)}
              exiting={FadeOutDown.duration(700)}
            >
              <Box p={10} borderWidth={1} borderColor={Colours.metallic.m200} br={10} bg="white" mt={-100}>
                <>
                  {statItems.map(({ label, value, Icon }) => {
                    return (
                      <Box
                        key={label}
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        p={5}
                        py={8}
                      >
                        <Box flexDirection="row" alignItems="center">
                          <Box mr={10}>
                            <Icon position={1} />
                          </Box>
                          <TextTemplate type="b2">{label}</TextTemplate>
                        </Box>
                        <Box flexDirection="row" alignItems="center" justifyContent="flex-end">
                          <TextTemplate type="b2b">{value ?? 0}</TextTemplate>
                        </Box>
                      </Box>
                    );
                  })}
                </>
              </Box>
            </Box>
          ) : null}
        </Box>

        {renderYudoku ? <WrappedStage4YudokuGame /> : null}

        <Box
          mt={20}
          position="absolute"
          w="100%"
          bottom={insets.bottom}
          h="100%"
          justifyContent="flex-end"
          pb={WRAPPED_BOTTOM_OFFSET}
        >
          {!isExiting ? (
            <Box
              w="100%"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              exiting={FadeOutDown.duration(1000)}
              entering={FadeInDown.delay(CONTENT_DELAY + 6000).duration(1000)}
            >
              <Button testID="next_button" onPress={onPress} translationKey="labels.cta.continue" />
            </Box>
          ) : null}
        </Box>

        {isExiting ? (
          <Box bg="#ffffff" entering={FadeIn.delay(500).duration(1000)} position="absolute" h="100%" w="100%" />
        ) : null}
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  eagleImage: { width: Style.adjust(300), height: Style.adjust(300), position: "absolute" },
});

export default memo(WrappedStage4Screen);
