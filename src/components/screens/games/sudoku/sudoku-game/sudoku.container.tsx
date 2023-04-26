import { ISudokuStateChangedArgs, SudokuBoard } from "@components/games/sudoku/sudoku-manager";
import SudokuScreen from "./sudoku.screen";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useSelector, useDispatch } from "react-redux";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";
import { GetSudokuBoard, GetSudokuBoard_getSudokuBoard_results } from "@graphql/_core/schema";
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
import { useBackHandler } from "@hooks";

export interface ISodukuBoard {
  puzzle: SudokuBoard;
  solution: SudokuBoard;
  difficulty: string;
}

interface IProps {
  levelSlotId: string;
  componentId: string;
}

export const SudokuContainer = ({ levelSlotId, componentId }: IProps) => {
  const dispatch = useDispatch();
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const activeLevel = useSelector(getActiveLevel);

  const sudokuState = useSelector(getSudokuState);
  const date = useMemo(() => moment().format(DATE_FORMAT), []);
  const [sendPause] = useMutation(GQL_MUTATION_TOGGLE_CHALLENGE_PAUSE);

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

  const onGameComplete = useCallback(
    (parmas: GetSudokuBoard_getSudokuBoard_results) => {
      setTimeout(() => {
        Navigation.push(componentId, {
          component: {
            id: ROUTES.sudokuCompleted,
            name: ROUTES.sudokuCompleted,
            passProps: {
              results: { ...parmas, leaderboardId: data.getSudokuBoard.stats?.leaderboardId },
              reward: activeLevel.coins,
              stats: data.getSudokuBoard.stats,
            },
          },
        });
      }, 2500);
    },
    [componentId, activeLevel, data]
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
      onStateUpdate={onStateUpdate}
      onPause={onPause}
      onResume={onResume}
      savedState={sudokuState}
      invertHeader={!!yuniversalMap}
    />
  );
};

export default memo(SudokuContainer, () => true);
