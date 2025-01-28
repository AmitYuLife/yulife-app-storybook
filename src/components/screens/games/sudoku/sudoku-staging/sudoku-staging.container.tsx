import { useLazyQuery } from "@apollo/client";
import { SudokuDifficulty, gql, GetQuestMapLevelQuery } from "@graphql/__generated";
import { useCallback, useEffect, useMemo, useState } from "react";
import { first } from "lodash";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { useDispatch, useSelector } from "react-redux";
import { sudokuReset } from "@redux/sudoku/sudoku.actions";
import SudokuStagingScreen from "./sudoku-staging.screen";
import { showYuModal } from "@navigation/root";
import { getActiveLevel, getCreateChallengeError, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { ActiveLevelState } from "@redux/levels/levels.types";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import {
  getChallengeDetailsData,
  useGetChallengeDetails,
  usePopToQuestsRootOnNewDate,
  useQueryOnScreenSeen,
} from "@hooks";
import { challengeStartAction } from "@redux/levels/levels.actions";
import { getRouteState } from "@redux/app/app.selectors";
import { getActiveYudokuLeaderboard } from "@redux/leaderboards/leaderboards.selectors";
import { getCurrentDateState } from "@redux/device/device.selectors";
import Logger from "@services/logging/logger";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";

interface IProps {
  componentId: string;
  slot: GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][0];
  level: number;
}

export const SudokuStagingContainer = ({ componentId, slot, level }: IProps) => {
  const dispatch = useDispatch();
  const activeYudokuLeaderboard = useSelector(getActiveYudokuLeaderboard);
  const activeLevel = useSelector(getActiveLevel);
  const currentDate = useSelector(getCurrentDateState);
  const currentScreen = useSelector(getRouteState);
  const isScreenActive = currentScreen === componentId;
  const [createChallengeLoading, setCreateChallengeLoading] = useState(false);
  const [error, setErrorState] = useState<string | null>(null);
  const createChallengeError = useSelector(getCreateChallengeError);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const sudokuState = useSelector(getSudokuState);

  const [, { data }] = useQueryOnScreenSeen(gql(`GetSudokuBoardDocument`), componentId, {
    fetchPolicy: "no-cache",
  });

  usePopToQuestsRootOnNewDate(level);

  const showSecondAttemptDisclaimer = useMemo(() => {
    return !data?.getSudokuBoard?.leaderboardEligible;
  }, [data]);

  const [getSocialGroupLeaderboardItems, { data: leaderboard }] = useLazyQuery(
    gql("GetMobileSocialGroupLeaderboardItemsDocument"),
    {
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => {
    if (activeYudokuLeaderboard?.leaderboardId && activeYudokuLeaderboard?.consent) {
      getSocialGroupLeaderboardItems({
        variables: {
          leaderboardId: activeYudokuLeaderboard?.leaderboardId,
          filter: {
            date: currentDate,
            difficulty: SudokuDifficulty.Easy,
          },
          limit: 3,
        },
      });
    }
  }, [activeYudokuLeaderboard?.leaderboardId, getSocialGroupLeaderboardItems, isScreenActive]);

  const { data: levelDetails, loading: isDetailsLoading } = useGetChallengeDetails({
    level,
    levelSlotTemplateId: slot.levelSlotTemplateId,
    yuniversalMap,
  });

  const challengeDetails = getChallengeDetailsData(levelDetails);

  useEffect(() => {
    const stateGameIdentifier = sudokuState?.gameIdentifier;
    const gameIdentifier = `${currentDate}_${SudokuDifficulty.Easy}`;

    const stateLevelSlotId = sudokuState?.levelSlotId;
    const currentLevelSlotId = slot?.id;

    const shouldReset = stateGameIdentifier !== gameIdentifier || stateLevelSlotId !== currentLevelSlotId;

    if (isScreenActive && shouldReset) {
      dispatch(
        sudokuReset({
          gameIdentifier,
          levelSlotId: slot?.id,
          startTime: null,
          date: currentDate,
          challengeId: activeLevel.id,
        })
      );
    }
  }, [currentDate, isScreenActive, activeLevel.id, sudokuState?.gameIdentifier, sudokuState?.levelSlotId, slot?.id]);

  const board = first(data?.getSudokuBoard?.boards);

  const startGame = useCallback(async () => {
    setCreateChallengeLoading(true);

    dispatch(
      challengeStartAction({
        levelSlotId: slot.id,
        createQuestMapLevelChallengeVariables: { levelSlotId: slot.id },
        createMobileQuestLevelChallengeVariables: {
          level,
          levelSlotTemplateId: slot.levelSlotTemplateId,
          yuniversalMap,
        },
      })
    );
  }, [slot.id, slot.levelSlotTemplateId, yuniversalMap, level, dispatch]);

  const setError = useCallback(() => {
    setErrorState(createChallengeError);
  }, [createChallengeError]);

  useEffect(() => {
    if (!createChallengeLoading) {
      return;
    }

    const challengeIdentifier = activeLevel.id;

    if (activeLevel.levelState === ActiveLevelState.START_CHALLENGE_SUCCEED && challengeIdentifier) {
      dispatch(
        sudokuReset({
          levelSlotId: slot.id,
          startTime: new Date(),
          gameIdentifier: `${currentDate}_${SudokuDifficulty.Easy}`,
          date: currentDate,
          challengeId: activeLevel.id,
        })
      );

      Logger.logEvent("start_sudoku_game", { challengeId: activeLevel.id, levelSlotId: slot.id });

      Navigation.push(componentId, {
        component: {
          id: ROUTES.sudokuGame,
          name: ROUTES.sudokuGame,
          passProps: { date: currentDate, levelSlotId: slot.id, challengeId: activeLevel.id },
          options: { popGesture: false },
        },
      });
      return;
    }

    if (activeLevel.levelState === ActiveLevelState.START_CHALLENGE_FAILED) {
      setCreateChallengeLoading(false);
      setError();
    }
  }, [
    activeLevel.levelState,
    activeLevel.id,
    slot.id,
    createChallengeLoading,
    componentId,
    currentDate,
    dispatch,
    setError,
  ]);

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
      onClose={onClose}
      onStart={startGame}
      onHelp={onHelp}
      onLeaderboardPress={onLeaderboardPress}
      showSecondAttemptDisclaimer={showSecondAttemptDisclaimer}
      leaderboard={leaderboard?.getMobileSocialGroupLeaderboardItems}
      onStartPractice={onStartPractice}
      levelDetails={challengeDetails}
      hasLeaderboardConsent={activeYudokuLeaderboard?.consent}
      isStartingChallenge={createChallengeLoading}
      error={error}
    />
  );
};

export default SudokuStagingContainer;
