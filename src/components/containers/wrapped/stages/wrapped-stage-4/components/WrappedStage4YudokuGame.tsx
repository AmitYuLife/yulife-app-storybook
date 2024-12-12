import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { memo, useEffect, useMemo, useState } from "react";
import { WRAPPED_YUDOKU_MOVES, WRAPPED_YUDOKU_PUZZLE, WRAPPED_YUDOKU_SOLUTION } from "../wrapped-stage-4.constants";
import Grid from "@components/games/sudoku/grid";
import { Box } from "@atoms";
import SudokuManager from "@components/games/sudoku/sudoku-manager";
import { SudokuDifficulty } from "@graphql/__generated";
import { useAnimatedStyle, withSequence, withTiming, FadeOutDown } from "react-native-reanimated";
import { Style } from "@styles";

const WrappedStage4YudokuGame = () => {
  const yudokuWrapperStyle = useAnimatedStyle(() => {
    const transformValue = (() => {
      return withSequence(withTiming(Style.DEVICE_WIDTH), withTiming(0, { duration: 1500 }));
    })();

    return {
      transform: [
        {
          translateY: transformValue,
        },
      ],
    };
  });

  const managerProps = useMemo(() => {
    return {
      initialBoard: {
        puzzle: WRAPPED_YUDOKU_PUZZLE,
        solution: WRAPPED_YUDOKU_SOLUTION,
        difficulty: SudokuDifficulty.Easy,
      },
      board: {
        puzzle: WRAPPED_YUDOKU_PUZZLE,
        solution: WRAPPED_YUDOKU_SOLUTION,
      },
      onGameComplete: () => {
        // do nothing
      },
    };
  }, []);

  return (
    <Box
      position="absolute"
      top={Style.adjust(Style.DEVICE_WIDTH * 1.2)}
      w="100%"
      forceAnimated={true}
      exiting={FadeOutDown.duration(1000)}
    >
      <Box w="100%" h="100%" forceAnimated={true} style={yudokuWrapperStyle} pointerEvents="none">
        <SudokuManager savedState={null} gameIdentifier="wrapped" {...managerProps}>
          <WrappedStage4YudokuBoard />
        </SudokuManager>
      </Box>
    </Box>
  );
};

// We need to split this up so it can use yudoku context
const WrappedStage4YudokuBoard = memo(() => {
  const { setSelectedCell, putNumber } = useSudokuContext();
  const [currentCellIndex, setCurrentCellIndex] = useState(-2);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextCellIndex = currentCellIndex + 1;
      setCurrentCellIndex(nextCellIndex);
      const move = WRAPPED_YUDOKU_MOVES[nextCellIndex];

      if (!move) {
        const getRandomPosition = () => {
          const randomX = Math.floor(Math.random() * 6);
          const randomY = Math.floor(Math.random() * 9);
          if (WRAPPED_YUDOKU_PUZZLE[randomX][randomY] === 0) {
            return false;
          }

          return { row: randomX, column: randomY };
        };

        let randomPosition = getRandomPosition();
        while (!randomPosition) {
          randomPosition = getRandomPosition();
        }

        setSelectedCell({ row: randomPosition.row, column: randomPosition.column });
        return;
      }

      setSelectedCell(move);
      if (move.number) {
        setTimeout(() => {
          putNumber({ number: move.number ?? 1, row: move.row, column: move.column });
        }, 300);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [currentCellIndex, putNumber, setSelectedCell]);

  return <Grid />;
});

export default memo(WrappedStage4YudokuGame);
