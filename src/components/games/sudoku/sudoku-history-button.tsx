import { useQuery } from "@apollo/client";
import { GetSudokuLeaderboard, GetSudokuLeaderboardVariables } from "@graphql/_core/schema";
import { GQL_QUERY_GET_SODUKU_LEADERBOARD } from "@graphql/brainGames/sudoku/getSudokuLeaderboards.gql";
import { SudokuDifficulty } from "./sudoku.interface";
import moment from "moment";
import { DATE_FORMAT } from "@utils";
import { useCallback, useMemo } from "react";
import { Button } from "@components/molecules";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useSelector } from "react-redux";
import { getCurrentLevel, getNextLevelAvailableAt } from "@redux/levels/levels.selectors";

interface IProps {
  componentId: string;
  level?: number;
}

export const SudokuHistoryButton = ({ level, componentId }: IProps) => {
  const leaderboardDate = useMemo(() => moment().format(DATE_FORMAT), []);
  const nextAvailableAt = useSelector(getNextLevelAvailableAt);
  const currentLevel = useSelector(getCurrentLevel);

  const onPressSudokuLeaderboard = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.sudokuLeaderboard,
        name: ROUTES.sudokuLeaderboard,
        passProps: {
          date: leaderboardDate,
        },
      },
    });
  }, [componentId, leaderboardDate]);

  const { data: sudokuLeaderboard } = useQuery<GetSudokuLeaderboard, GetSudokuLeaderboardVariables>(
    GQL_QUERY_GET_SODUKU_LEADERBOARD,
    {
      variables: {
        date: leaderboardDate,
        difficulty: SudokuDifficulty.EASY,
        limit: 1,
      },
      fetchPolicy: "network-only",
    }
  );

  const isNextLevelLocked = useMemo(() => {
    return moment(nextAvailableAt).format(DATE_FORMAT) !== moment().format(DATE_FORMAT);
  }, [nextAvailableAt]);

  if (!isNextLevelLocked || currentLevel - 1 !== level || !sudokuLeaderboard?.getSudokuLeaderboard?.length) {
    return null;
  }

  return <Button onPress={onPressSudokuLeaderboard} label={t("screens.challenges.history.sudoku_leaderboard")} />;
};
