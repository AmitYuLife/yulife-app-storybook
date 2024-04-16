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
import { getActiveLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { ISudokuResults } from "@components/games/sudoku/sudoku.interface";
import {
  getSubmitSudokuData,
  useBackHandler,
  useChallengePause,
  useSubmitSudokuSolution,
  useTranslation,
} from "@hooks";
import { delay } from "@utils/misc";
import { challengeEndSuccessAction } from "@redux/levels/levels.actions";
import { Alert } from "react-native";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import {
  gql,
  SudokuDifficulty,
  SubmitSudokuSolutionMutation,
  GetSudokuBoardQuery,
  SubmitMobileQuestLevelSudokuSolutionMutation,
} from "@graphql/__generated";

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
  const features = useSelector(getUserFeatures);
  const { id } = useSelector(getActiveLevel);
  const sudokuState = useSelector(getSudokuState);

  const sendPause = useChallengePause(features.tempGameUseSettingsConfigForQuestMap);
  const submitSudokuSolution = useSubmitSudokuSolution(features.tempGameUseSettingsConfigForQuestMap);

  const { data } = useQuery(gql(`GetSudokuBoardDocument`), {
    fetchPolicy: "no-cache",
    variables: {
      date: sudokuState.date,
    },
  });

  const t = useTranslation(["sudoku.error.title", "sudoku.error.message", "sudoku.error.continue"]);

  const onStateUpdate = useCallback(
    ({ key, value }: ISudokuStateChangedArgs) => {
      dispatch(sudokuStateChanged({ [key]: value }));
    },
    [dispatch]
  );

  const board = first(data?.getSudokuBoard?.boards);

  const navigateToCompleted = useCallback(
    (params: GetSudokuBoardQuery["getSudokuBoard"], result: ReturnType<typeof getSubmitSudokuData>) => {
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
    const variables = features.tempGameUseSettingsConfigForQuestMap ? { challengeId: id } : { levelSlotId };
    sendPause({
      ...variables,
      paused: true,
    });
  }, [id, features.tempGameUseSettingsConfigForQuestMap, levelSlotId, sendPause]);

  const onResume = useCallback(() => {
    const variables = features.tempGameUseSettingsConfigForQuestMap ? { challengeId: id } : { levelSlotId };

    sendPause({
      ...variables,
      paused: false,
    });
  }, [features.tempGameUseSettingsConfigForQuestMap, id, levelSlotId, sendPause]);

  const showSubmissionError = useCallback(
    (onContinue: () => void) => {
      Alert.alert(
        t["sudoku.error.title"],
        t["sudoku.error.message"],
        [
          {
            text: t["sudoku.error.continue"],
            onPress: onContinue,
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
    (params: ISudokuResults) => {
      return new Promise<SubmitSudokuSolutionMutation | SubmitMobileQuestLevelSudokuSolutionMutation>((res, rej) => {
        (async () => {
          const results = await submitSudokuSolution(
            {
              date: sudokuState.date,
              mistakes: params.mistakes,
              hints: params.hints,
              baseTime: params.adjustedTime,
              guesses: params.guesses,
              adjustedTime: params.adjustedTime,
              levelSlotId: sudokuState.levelSlotId,
              difficulty: SudokuDifficulty.Easy,
              challengeId: id,
            },
            {
              onError: () => {
                onPause();
                dispatch(getUserDataStart({ types: [AppDataType.activeChallenge] }));
                showSubmissionError(rej);
              },
            }
          );

          if (results?.data) {
            res(results.data);
          }
        })();
      });
    },
    [dispatch, onPause, showSubmissionError, submitSudokuSolution, sudokuState.date, sudokuState.levelSlotId, id]
  );

  const onGameComplete = useCallback(
    (params: ISudokuResults) => {
      (async () => {
        const [result] = await Promise.all([
          submitSolution(params).catch(() => {
            Navigation.popTo(ROUTES.quests);
          }),
          delay(SUDOKU_ANIMATION_TIMEOUT),
        ]);

        if (result) {
          const resultData = getSubmitSudokuData(result);

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
