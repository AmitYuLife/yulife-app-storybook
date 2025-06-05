import { SudokuBoard } from "@components/games/sudoku/sudoku-manager";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useSelector } from "react-redux";
import { gql } from "@graphql/__generated";
import { memo, useCallback } from "react";
import { useQuery } from "@apollo/client";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { ISudokuResults } from "@components/games/sudoku/sudoku.interface";
import { useBackHandler } from "@hooks";
import SudokuPracticeScreen from "./sudoku-practice.screen";
import { getYuniversalProgress } from "@redux/levels/levels.selectors";
import { delay } from "@utils/misc";

export interface ISodukuBoard {
  puzzle: SudokuBoard;
  solution: SudokuBoard;
  difficulty: string;
}

interface IProps {
  componentId: string;
}

const SUDOKU_ANIMATION_TIMEOUT = 2000;
export const SudokuPracticeContainer = ({ componentId }: IProps) => {
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const { data } = useQuery(gql(`GetSudokuPracticeDocument`), { fetchPolicy: "network-only" });
  const board = data?.getSudokuPractice;

  const onGameComplete = useCallback(
    async (params: ISudokuResults) => {
      await delay(SUDOKU_ANIMATION_TIMEOUT);
      (async () => {
        Navigation.push(componentId, {
          component: {
            id: ROUTES.sudokuCompleted,
            name: ROUTES.sudokuCompleted,
            passProps: {
              results: params,
              isPractice: true,
            },
          },
        });
      })();
    },
    [componentId]
  );

  const onBack = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const onBackPress = useCallback(() => {
    onBack();
    return true;
  }, [onBack]);

  useBackHandler(onBackPress);

  if (!board) {
    return <LoadingScreen onBack={() => Navigation.pop(componentId)} />;
  }

  return (
    <SudokuPracticeScreen
      onBack={onBack}
      board={board}
      config={board.config}
      onGameComplete={onGameComplete}
      gameIdentifier={"practice"}
      detectCheats={false}
      savedState={undefined}
      invertHeader={!!yuniversalMap}
    />
  );
};

export default memo(SudokuPracticeContainer, () => true);
