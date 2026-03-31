import { FloatingModal, SudokuPauseModal } from "@components/modals";
import { SUDOKU_PAUSE_ANIMATION_DURATION } from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { Colours, Style, StyleSheet } from "@styles";
import React, { useMemo } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";
import Grid from "./grid";
import NumbersInput from "./numbers-input";
import SudokuHeader from "./sudoku-header";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import { Box } from "@atoms";

const AnimatedView = Animated.createAnimatedComponent(View);

interface IProps {
  invertHeader?: boolean;
}

export const SudokuGame = ({ invertHeader }: IProps) => {
  const { lastPauseTime, unpause } = useSudokuContext();

  const pauseModal = useMemo(() => {
    return (
      <FloatingModal showButton={false} showCloseIcon={false} height={0}>
        <SudokuPauseModal onClose={unpause} />
      </FloatingModal>
    );
  }, [unpause]);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <SudokuHeader invert={invertHeader} />
        <Box pt={10} br={10} bg={Colours.neutral.n50} flex={1}>
          <Grid />
          <NumbersInput />
        </Box>
      </ScrollView>

      {lastPauseTime ? (
        <AnimatedView
          entering={FadeIn.duration(SUDOKU_PAUSE_ANIMATION_DURATION)}
          exiting={FadeOut.duration(SUDOKU_PAUSE_ANIMATION_DURATION)}
          style={styles.pauseContainer}
        >
          <AnimatedView
            entering={SlideInDown.duration(SUDOKU_PAUSE_ANIMATION_DURATION)}
            exiting={SlideOutDown.duration(SUDOKU_PAUSE_ANIMATION_DURATION)}
          >
            {pauseModal}
          </AnimatedView>
        </AnimatedView>
      ) : null}
    </>
  );
};

const { height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollView: {
    height: Style.DEVICE_HEIGHT - (TOP_BAR_WITH_PAD - Style.adjust(15)),
  },
  scrollContent: {
    paddingBottom: Style.adjust(15),
    flex: 1,
  },
  gameWrapper: {
    paddingTop: Style.adjust(10),
    backgroundColor: Colours.neutral.n50,
    borderRadius: Style.adjust(10),
  },
  pauseContainer: {
    ...StyleSheet.absoluteFillObject,
    height: windowHeight,
    zIndex: 100,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: Colours.overlay.black90,
  },
});
