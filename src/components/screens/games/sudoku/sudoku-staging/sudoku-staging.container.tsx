import { useMutation, useQuery } from "@apollo/client";
import {
  GetQuestMapLevelChallengeDetails,
  GetQuestMapLevel_getQuestMapLevel_slots,
  GetSudokuBoard,
  GetSudokuLeaderboard,
  GetSudokuLeaderboardVariables,
} from "@graphql/_core/schema";
import { GQL_QUERY_GET_SUDOKU_BOARDS } from "@graphql/brainGames/sudoku/getSudokuBoards.gql";
import { useCallback, useEffect, useMemo } from "react";
import { first } from "lodash";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { useDispatch, useSelector } from "react-redux";
import { sudokuReset } from "@redux/sudoku/sudoku.actions";
import SudokuStagingScreen from "./sudoku-staging.screen";
import { showYuModal } from "@navigation/root";
import { GQL_QUERY_GET_SODUKU_LEADERBOARD } from "@graphql/brainGames/sudoku/getSudokuLeaderboards.gql";
import { SudokuDifficulty } from "@graphql/_core/schema/globalTypes";
import { GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE } from "@graphql/challenges";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS } from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useQueryOnScreenSeen } from "@hooks";
import { challengeCancelAction, challengeStartSuccessAction } from "@redux/levels/levels.actions";
import cancelQuestMapLevelChallenge from "@graphql/challenges/cancelQuestMapLevelChallenge.gql";
import { getCurrentDateState, getRouteState } from "@redux/app/app.selectors";

interface IProps {
  componentId: string;
  slot: GetQuestMapLevel_getQuestMapLevel_slots;
}

export const SudokuStagingContainer = ({ componentId, slot }: IProps) => {
  const dispatch = useDispatch();
  const activeChallenge = useSelector(getActiveLevel);
  const currentDate = useSelector(getCurrentDateState);
  const currentScreen = useSelector(getRouteState);
  const [createQuestMapLevelChallenge] = useMutation(GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE);

  const [, { data }] = useQueryOnScreenSeen<GetSudokuBoard>(GQL_QUERY_GET_SUDOKU_BOARDS, componentId, {
    fetchPolicy: "no-cache",
  });

  const showSecondAttemptDisclaimer = useMemo(() => {
    return !data?.getSudokuBoard?.leaderboardEligible;
  }, [data]);

  const [, { data: leaderboard }] = useQueryOnScreenSeen<GetSudokuLeaderboard, GetSudokuLeaderboardVariables>(
    GQL_QUERY_GET_SODUKU_LEADERBOARD,
    componentId,
    {
      fetchPolicy: "network-only",
      variables: {
        date: currentDate,
        difficulty: SudokuDifficulty.EASY,
        limit: 3,
      },
    }
  );

  const { data: levelDetails, loading: isDetailsLoading } = useQuery<GetQuestMapLevelChallengeDetails>(
    GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS,
    {
      variables: { levelSlotId: slot.id },
    }
  );

  useEffect(() => {
    if (currentScreen === componentId) {
      dispatch(
        sudokuReset({
          gameIdentifier: `${currentDate}_${SudokuDifficulty.EASY}`,
          levelSlotId: slot?.id,
          startTime: null,
          date: currentDate,
        })
      );
    }
  }, [currentDate]);

  const board = first(data?.getSudokuBoard?.boards);

  const startGame = useCallback(async () => {
    if (activeChallenge.levelSlotId) {
      await cancelQuestMapLevelChallenge(activeChallenge.levelSlotId);
      dispatch(challengeCancelAction());
    }

    const challenge = await createQuestMapLevelChallenge({
      variables: {
        levelSlotId: slot.id,
      },
    });

    dispatch(
      challengeStartSuccessAction({
        createQuestMapLevelChallenge: challenge.data?.createQuestMapLevelChallenge,
        levelSlotId: slot.id,
      })
    );

    dispatch(
      sudokuReset({
        levelSlotId: slot.id,
        startTime: new Date(),
        gameIdentifier: `${currentDate}_${SudokuDifficulty.EASY}`,
        date: currentDate,
      })
    );

    return Navigation.push(componentId, {
      component: {
        id: ROUTES.sudokuGame,
        name: ROUTES.sudokuGame,
        passProps: { date: currentDate, levelSlotId: slot.id },
      },
    });
  }, [activeChallenge.levelSlotId, createQuestMapLevelChallenge, slot.id, dispatch, componentId, currentDate]);

  const onBack = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const onClose = useCallback(() => {
    Navigation.popToRoot(ROUTES.quests);
  }, []);

  const onStartPractice = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.sudokuPractice,
        name: ROUTES.sudokuPractice,
        passProps: {},
      },
    });
  }, [componentId]);

  const openLeaderboard = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.sudokuLeaderboard,
        name: ROUTES.sudokuLeaderboard,
        passProps: {
          onStart: startGame,
          results: data?.getSudokuBoard.results,
          date: data?.getSudokuBoard?.date,
        },
      },
    });
  }, [componentId, startGame, data]);

  const onLeaderboardPress = useCallback(() => {
    if (data.getSudokuBoard.stats?.leaderboardId) {
      dispatch(logMixpanelEventActionCreator("button_pressed", { button_id: "sudoku_leaderboard" }));
      openLeaderboard();

      return;
    }

    dispatch(logMixpanelEventActionCreator("button_pressed", { button_id: "sudoku_join_leaderboard" }));

    showYuModal({
      component: {
        id: MODALS.sudokuLeaderboardConsent,
        name: MODALS.sudokuLeaderboardConsent,
        passProps: {
          onConsented: openLeaderboard,
        },
      },
    });
  }, [data, dispatch, openLeaderboard]);

  const onHelp = useCallback(() => {
    dispatch(logMixpanelEventActionCreator("button_pressed", { button_id: "sudoku_help" }));

    showYuModal({
      component: {
        id: MODALS.sudokuHelp,
        name: MODALS.sudokuHelp,
      },
    });
  }, [dispatch]);

  if (!board || isDetailsLoading) {
    return <LoadingScreen onBack={() => Navigation.pop(componentId)} />;
  }

  return (
    <SudokuStagingScreen
      data={data}
      reward={slot.reward}
      onBack={onBack}
      slot={slot}
      onClose={onClose}
      onStart={startGame}
      onHelp={onHelp}
      onLeaderboardPress={onLeaderboardPress}
      showSecondAttemptDisclaimer={showSecondAttemptDisclaimer}
      leaderboard={leaderboard?.getSudokuLeaderboard}
      onStartPractice={onStartPractice}
      levelDetails={levelDetails?.getQuestMapLevelChallengeDetails}
      hasLeaderboardConsent={!!data?.getSudokuBoard?.stats?.leaderboardId}
    />
  );
};

export default SudokuStagingContainer;
