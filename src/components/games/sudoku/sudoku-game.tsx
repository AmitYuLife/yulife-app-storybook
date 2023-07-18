import { FloatingModal, SudokuPauseModal } from "@components/modals";
import { SUDOKU_PAUSE_ANIMATION_DURATION } from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { Colours, Style } from "@styles";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";
import Grid from "./grid";
import NumbersInput from "./numbers-input";
import SudokuHeader from "./sudoku-header";

const AnimatedView = Animated.createAnimatedComponent(View);

interface IProps {
  invertHeader?: boolean;
}

export const SudokuGame = ({ invertHeader }: IProps) => {
  const { lastPauseTime, unpause } = useSudokuContext();

  return (
    <>
      <View>
        <SudokuHeader invert={invertHeader} />
        <View style={styles.gameWrapper}>
          <Grid />
          <NumbersInput />
        </View>
      </View>

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
            <FloatingModal showButton={false}>
              <SudokuPauseModal onClose={unpause} />
            </FloatingModal>
          </AnimatedView>
        </AnimatedView>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  gameWrapper: {
    backgroundColor: Colours.neutral.n50,
    paddingTop: Style.adjust(10),
    borderTopLeftRadius: Style.adjust(10),
    borderTopRightRadius: Style.adjust(10),
    height: Style.DEVICE_HEIGHT,
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
