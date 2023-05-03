import { ISudokuStateChangedArgs, SudokuBoard } from "@components/games/sudoku/sudoku-manager";
import SudokuScreen from "./sudoku.screen";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useSelector, useDispatch } from "react-redux";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";
import {
  GetSudokuBoard,
  GetSudokuBoard_getSudokuBoard_results,
  SubmitSudokuSolution,
  SubmitSudokuSolutionVariables,
} from "@graphql/_core/schema";
import { sudokuStateChanged } from "@redux/sudoku/sudoku.actions";
import { memo, useCallback, useMemo } from "react";
import { first } from "lodash";
import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import { GQL_QUERY_GET_SUDOKU_BOARDS } from "@graphql/brainGames/sudoku/getSudokuBoards.gql";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { GQL_MUTATION_TOGGLE_CHALLENGE_PAUSE } from "@graphql/challenges/toggleChallengePause.gql";
import { getActiveLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { DATE_FORMAT } from "@utils";
import { getUserFeatures } from "@redux/user/user.selectors";
import { SudokuDifficulty } from "@graphql/_core/schema/globalTypes";
import { GQL_MUTATION_SUBMIT_SUDOKU_SOLUTION } from "@graphql/brainGames/sudoku/submitSudokuResults.gql";
import { ISudokuResults } from "@components/games/sudoku/sudoku.interface";
import { useBackHandler } from "@hooks";
import { delay } from "@utils/misc";

export interface ISodukuBoard {
  puzzle: SudokuBoard;
  solution: SudokuBoard;
  difficulty: string;
}

interface IProps {
  levelSlotId: string;
  componentId: string;
}

const SUDOKU_ANIMATION_TIMEOUT = 2000;
export const SudokuContainer = ({ levelSlotId, componentId }: IProps) => {
  const dispatch = useDispatch();
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const activeLevel = useSelector(getActiveLevel);
  const features = useSelector(getUserFeatures);
  const sudokuState = useSelector(getSudokuState);
  const [sendPause] = useMutation(GQL_MUTATION_TOGGLE_CHALLENGE_PAUSE);
  const date = useMemo(() => moment().format(DATE_FORMAT), []);
  const [submitSudokuSolution] = useMutation<SubmitSudokuSolution, SubmitSudokuSolutionVariables>(
    GQL_MUTATION_SUBMIT_SUDOKU_SOLUTION
  );

  const { data } = useQuery<GetSudokuBoard>(GQL_QUERY_GET_SUDOKU_BOARDS, {
    fetchPolicy: "no-cache",
  });

  const onStateUpdate = useCallback(
    ({ key, value }: ISudokuStateChangedArgs) => {
      dispatch(sudokuStateChanged({ [key]: value, gameIdentifier: date }));
    },
    [date, dispatch]
  );

  const board = first(data?.getSudokuBoard?.boards);

  const navigateToCompleted = useCallback(
    (parmas: GetSudokuBoard_getSudokuBoard_results, result: SubmitSudokuSolution) => {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.sudokuCompleted,
          name: ROUTES.sudokuCompleted,
          passProps: {
            results: {
              ...parmas,
              adjustedTime: result?.submitSudokuSolution.incomingData.duration,
              leaderboardId: data.getSudokuBoard.stats?.leaderboardId,
              leaderboardEligible: data?.getSudokuBoard?.leaderboardEligible,
            },
            reward: activeLevel.coins,
            stats: data.getSudokuBoard.stats,
          },
        },
      });
    },
    [activeLevel?.coins, componentId, data?.getSudokuBoard?.leaderboardEligible, data?.getSudokuBoard.stats]
  );

  const onGameComplete = useCallback(
    (parmas: ISudokuResults) => {
      (async () => {
        const [result] = await Promise.all([
          submitSudokuSolution({
            variables: {
              results: {
                date: sudokuState.gameIdentifier,
                mistakes: parmas.mistakes,
                hints: parmas.hints,
                baseTime: parmas.adjustedTime,
                guesses: parmas.guesses,
                adjustedTime: parmas.adjustedTime,
                levelSlotId: sudokuState.levelSlotId,
                difficulty: SudokuDifficulty.EASY,
              },
            },
          }),
          delay(SUDOKU_ANIMATION_TIMEOUT),
        ]);

        navigateToCompleted({ ...parmas, leaderboardId: undefined }, result?.data);
      })();
    },
    [submitSudokuSolution, sudokuState.gameIdentifier, sudokuState.levelSlotId, navigateToCompleted]
  );

  const onPause = useCallback(() => {
    sendPause({
      variables: {
        levelSlotId: levelSlotId,
        paused: true,
      },
    });
  }, [levelSlotId, sendPause]);

  const onResume = useCallback(() => {
    sendPause({
      variables: {
        levelSlotId: levelSlotId,
        paused: false,
      },
    });
  }, [levelSlotId, sendPause]);

  const onBack = useCallback(() => {
    onPause();
    dispatch(sudokuStateChanged({ lastPauseTime: new Date(), gameIdentifier: date }));

    Navigation.popToRoot(ROUTES.quests);
  }, [onPause, date, dispatch]);

  const onBackPress = useCallback(() => {
    onBack();
    return true;
  }, [onBack]);

  useBackHandler(onBackPress);

  if (!board) {
    return <LoadingScreen onClose={() => Navigation.pop(componentId)} />;
  }

  return (
    <SudokuScreen
      onBack={onBack}
      board={board}
      onGameComplete={onGameComplete}
      gameIdentifier={moment(date).format("YYYY-MM-DD")}
      detectCheats={features.enableSudokuCheatDetection}
      onStateUpdate={onStateUpdate}
      onPause={onPause}
      onResume={onResume}
      savedState={sudokuState}
      invertHeader={!!yuniversalMap}
    />
  );
};

export default memo(SudokuContainer, () => true);
