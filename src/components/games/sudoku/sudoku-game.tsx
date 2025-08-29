import { FloatingModal, SudokuPauseModal } from "@components/modals";
import { SUDOKU_PAUSE_ANIMATION_DURATION } from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { Colours, Style, StyleSheet } from "@styles";
import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";
import Grid from "./grid";
import NumbersInput from "./numbers-input";
import SudokuHeader from "./sudoku-header";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

const AnimatedView = Animated.createAnimatedComponent(View);

interface IProps {
  invertHeader?: boolean;
}

export const SudokuGame = ({ invertHeader }: IProps) => {
  const { lastPauseTime, unpause } = useSudokuContext();

  const pauseModal = useMemo(() => {
    return (
      <FloatingModal showButton={false}>
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
        <View style={styles.gameWrapper}>
          <Grid />
          <NumbersInput />
        </View>
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

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: Style.DEVICE_HEIGHT - TOP_BAR_WITH_PAD,
  },
  scrollContent: {
    paddingBottom: Style.adjust(15),
  },
  gameWrapper: {
    paddingTop: Style.adjust(10),
    backgroundColor: Colours.neutral.n50,
    borderRadius: Style.adjust(10),
  },
  pauseContainer: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    top: 0,
    flex: 1,
    bottom: 0,
    zIndex: 100,
    position: "absolute",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,.9)",
  },
});
