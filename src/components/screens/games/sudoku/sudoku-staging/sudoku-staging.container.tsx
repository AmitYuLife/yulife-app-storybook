import { useMutation, useQuery } from "@apollo/client";
import {
  GetQuestMapLevelChallengeDetails,
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
import moment from "moment";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";
import { sudokuReset, sudokuStateChanged } from "@redux/sudoku/sudoku.actions";
import SudokuStagingScreen from "./sudoku-staging.screen";
import { showYuModal } from "@navigation/root";
import { GQL_QUERY_GET_SODUKU_LEADERBOARD } from "@graphql/brainGames/sudoku/getSudokuLeaderboards.gql";
import { SudokuDifficulty } from "@graphql/_core/schema/globalTypes";
import { GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE } from "@graphql/challenges";
import { getUserActiveChallengeStart, getUserStart } from "@redux/user/user.actions";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS } from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { DATE_FORMAT } from "@utils";

interface IProps {
  componentId: string;
  slotId: string;
  reward: string;
}

export const SudokuStagingContainer = ({ componentId, reward, slotId }: IProps) => {
  const sudokuState = useSelector(getSudokuState);
  const date = useMemo(() => new Date(), []);

  const { data } = useQuery<GetSudokuBoard>(GQL_QUERY_GET_SUDOKU_BOARDS, {
    fetchPolicy: "no-cache",
  });

  const leaderboard = useQuery<GetSudokuLeaderboard, GetSudokuLeaderboardVariables>(GQL_QUERY_GET_SODUKU_LEADERBOARD, {
    variables: {
      date: moment().format(DATE_FORMAT),
      difficulty: SudokuDifficulty.EASY,
      limit: 3,
    },
    fetchPolicy: "no-cache",
  });

  const { data: levelDetails, loading: isDetailsLoading } = useQuery<GetQuestMapLevelChallengeDetails>(
    GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS,
    {
      variables: { levelSlotId: slotId },
    }
  );

  const [createQuestMapLevelChallenge] = useMutation(GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE);

  const activeChallenge = useSelector(getActiveLevel);

  const dispatch = useDispatch();

  useEffect(() => {
    const currentDate = moment(date).format(DATE_FORMAT);
    if (sudokuState?.gameIdentifier !== currentDate || sudokuState?.levelSlotId !== slotId) {
      dispatch(sudokuReset({ gameIdentifier: currentDate, levelSlotId: slotId }));
    }
  }, [sudokuState, slotId, dispatch, date]);

  const board = first(data?.getSudokuBoard?.boards);

  const startGame = useCallback(async () => {
    if (!activeChallenge.levelSlotId) {
      await createQuestMapLevelChallenge({
        variables: {
          levelSlotId: slotId,
        },
      });

      dispatch(getUserActiveChallengeStart());
      dispatch(getUserStart());
    }

    const currentDate = moment(date).format(DATE_FORMAT);

    const newState = {
      ...sudokuState,
      levelSlotId: slotId,
      reward,
      startDateTime: new Date(),
      date: currentDate,
      board: sudokuState.board ? sudokuState.board : board?.puzzle,
    };

    dispatch(sudokuStateChanged(newState));

    return Navigation.push(componentId, {
      component: {
        id: ROUTES.sudokuGame,
        name: ROUTES.sudokuGame,
        passProps: { board, stats: data?.getSudokuBoard?.stats, date: currentDate, levelSlotId: slotId },
      },
    });
  }, [
    board,
    reward,
    date,
    dispatch,
    sudokuState,
    data?.getSudokuBoard.stats,
    slotId,
    activeChallenge,
    createQuestMapLevelChallenge,
    componentId,
  ]);

  const onBack = useCallback(() => {
    if (sudokuState.gameIdentifier) {
      Navigation.popToRoot(ROUTES.quests);
      return;
    }

    Navigation.pop(componentId);
  }, [componentId, sudokuState?.gameIdentifier]);

  const onClose = useCallback(() => {
    Navigation.popToRoot(ROUTES.quests);
  }, []);

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
      openLeaderboard();
      return;
    }

    showYuModal({
      component: {
        id: MODALS.sudokuLeaderboardConsent,
        name: MODALS.sudokuLeaderboardConsent,
        passProps: {
          onConsented: openLeaderboard,
        },
      },
    });
  }, [data, openLeaderboard]);

  if (!board || isDetailsLoading) {
    return <LoadingScreen onClose={() => Navigation.pop(componentId)} />;
  }

  return (
    <SudokuStagingScreen
      data={data}
      reward={reward}
      onBack={onBack}
      onClose={onClose}
      onStart={startGame}
      onLeaderboardPress={onLeaderboardPress}
      leaderboard={leaderboard?.data?.getSudokuLeaderboard}
      levelDetails={levelDetails?.getQuestMapLevelChallengeDetails}
      hasLeaderboardConsent={!!data?.getSudokuBoard?.stats?.leaderboardId}
    />
  );
};

export default SudokuStagingContainer;
