import { ISudokuStateChangedArgs, SudokuBoard } from "@components/games/sudoku/sudoku-manager";
import SudokuScreen from "./sudoku.screen";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useSelector, useDispatch } from "react-redux";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";
import { sudokuStateChanged } from "@redux/sudoku/sudoku.actions";
import { memo, useCallback } from "react";
import { first } from "lodash";
import { useQuery } from "@apollo/client";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { ISudokuResults } from "@components/games/sudoku/sudoku.interface";
import { useBackHandler, useChallengePause, useSubmitSudokuSolution, useTranslation } from "@hooks";
import { delay } from "@utils/misc";
import { challengeEndSuccessAction } from "@redux/levels/levels.actions";
import { Alert } from "react-native";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import {
  gql,
  SudokuDifficulty,
  GetSudokuBoardQuery,
  SubmitMobileQuestLevelSudokuSolutionMutation,
} from "@graphql/__generated";
import { VoidFunction } from "@utils";
import Logger from "@services/logging/logger";

export interface ISodukuBoard {
  puzzle: SudokuBoard;
  solution: SudokuBoard;
  difficulty: string;
}

interface IProps {
  challengeId: string;
  componentId: string;
}

const SUDOKU_ANIMATION_TIMEOUT = 2000;
export const SudokuContainer = ({ componentId, challengeId }: IProps) => {
  const dispatch = useDispatch();
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const features = useSelector(getUserFeatures);
  const sudokuState = useSelector(getSudokuState);

  const sendPause = useChallengePause();
  const submitSudokuSolution = useSubmitSudokuSolution();

  const { data } = useQuery(gql(`GetSudokuBoardDocument`), {
    fetchPolicy: "no-cache",
    variables: {
      date: sudokuState.date,
    },
  });

  const t = useTranslation(["sudoku.error.title", "sudoku.error.message", "sudoku.error.retry", "sudoku.error.cancel"]);

  const onStateUpdate = useCallback(
    ({ key, value }: ISudokuStateChangedArgs) => {
      dispatch(sudokuStateChanged({ [key]: value }));
    },
    [dispatch]
  );

  const board = first(data?.getSudokuBoard?.boards);

  const navigateToCompleted = useCallback(
    (
      params: GetSudokuBoardQuery["getSudokuBoard"],
      result: SubmitMobileQuestLevelSudokuSolutionMutation["submitMobileQuestLevelSudokuSolution"]
    ) => {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.sudokuCompleted,
          name: ROUTES.sudokuCompleted,
          passProps: {
            results: {
              ...params,
              adjustedTime: result.incomingData.duration,
              leaderboardId: data.getSudokuBoard.stats?.leaderboardId,
              leaderboardEligible: data?.getSudokuBoard?.leaderboardEligible,
            },
            reward: result?.yuCoinAwarded,
            stats: data.getSudokuBoard.stats,
          },
        },
      });
    },
    [componentId, data?.getSudokuBoard?.leaderboardEligible, data?.getSudokuBoard?.stats]
  );

  const onPause = useCallback(() => {
    sendPause({
      challengeId,
      paused: true,
    });
  }, [challengeId, sendPause]);

  const onResume = useCallback(() => {
    sendPause({
      challengeId,
      paused: false,
    });
  }, [challengeId, sendPause]);

  const showSubmissionError = useCallback(
    ({ onRetry, onCancel }: { onRetry: VoidFunction; onCancel: VoidFunction }) => {
      Alert.alert(
        t["sudoku.error.title"],
        t["sudoku.error.message"],
        [
          {
            text: t["sudoku.error.cancel"],
            onPress: onCancel,
          },
          {
            text: t["sudoku.error.retry"],
            onPress: onRetry,
          },
        ],
        {
          cancelable: false,
        }
      );
    },
    [t]
  );

  const submitSolution = useCallback(
    (params: ISudokuResults, onGameComplete: (params: ISudokuResults, delayMs?: number) => void) => {
      return new Promise<SubmitMobileQuestLevelSudokuSolutionMutation>((res) => {
        (async () => {
          const results = await submitSudokuSolution(
            {
              mistakes: params.mistakes,
              hints: params.hints,
              baseTime: params.adjustedTime,
              guesses: params.guesses,
              adjustedTime: params.adjustedTime,
              difficulty: SudokuDifficulty.Easy,
              date: sudokuState.date,
              challengeId: sudokuState.challengeId,
            },
            {
              onError: (err) => {
                onPause();
                dispatch(getUserDataStart({ types: [AppDataType.activeChallenge] }));
                showSubmissionError({
                  // no need to delay, no more animation after retrying
                  onRetry: () => onGameComplete(params, 0),
                  onCancel: () => {
                    Navigation.popTo(ROUTES.quests);
                  },
                });
                Logger.error(err, {
                  challengeId: sudokuState.challengeId,
                  date: sudokuState.date,
                });
              },
            }
          );

          if (results?.data) {
            res(results.data);
          }
        })();
      });
    },
    [dispatch, onPause, showSubmissionError, submitSudokuSolution, sudokuState.date, sudokuState.challengeId]
  );

  const onGameComplete = useCallback(
    (params: ISudokuResults, delayMs = SUDOKU_ANIMATION_TIMEOUT) => {
      (async () => {
        const [result] = await Promise.all([submitSolution(params, onGameComplete), delay(delayMs)]);

        if (result) {
          const resultData = result?.submitMobileQuestLevelSudokuSolution;

          dispatch(
            challengeEndSuccessAction({
              milestonesLog: resultData.milestoneLog,
              coins: resultData.yuCoinAwarded,
              level: resultData.level,
              rating: resultData.rating,
              incomingData: resultData.incomingData,
            })
          );

          navigateToCompleted(
            { ...params, leaderboardId: undefined } as unknown as GetSudokuBoardQuery["getSudokuBoard"],
            resultData
          );
        }
      })();
    },
    [submitSolution, dispatch, navigateToCompleted]
  );

  const onBack = useCallback(() => {
    onPause();
    dispatch(sudokuStateChanged({ lastPauseTime: new Date() }));

    Navigation.popToRoot(ROUTES.quests);
  }, [onPause, dispatch]);

  const onBackPress = useCallback(() => {
    onBack();
    return true;
  }, [onBack]);

  useBackHandler(onBackPress);

  if (!board) {
    return <LoadingScreen onBack={() => Navigation.pop(componentId)} />;
  }

  return (
    <SudokuScreen
      onBack={onBack}
      board={board}
      config={board.config}
      onGameComplete={onGameComplete}
      gameIdentifier={sudokuState?.gameIdentifier}
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
