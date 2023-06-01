import { useQuery } from "@apollo/client";
import { GetSudokuLeaderboard, GetSudokuLeaderboardVariables } from "@graphql/_core/schema";
import { GQL_QUERY_GET_SODUKU_LEADERBOARD } from "@graphql/brainGames/sudoku/getSudokuLeaderboards.gql";
import { useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import SudokuHistoryButton from "./sudoku-history-button";
import { t } from "@locale";
import moment from "moment";
import { LEVEL_SUMMARY_YUDOKU_LEADERBOARD } from "@ids";

interface IProps {
  componentId: string;
  date: string;
}

export const SudokuHistoryButtonContainer = ({ date, componentId }: IProps) => {
  const onPressSudokuLeaderboard = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.sudokuLeaderboard,
        name: ROUTES.sudokuLeaderboard,
        passProps: {
          date,
        },
      },
    });
  }, [componentId, date]);

  const { data: sudokuLeaderboard } = useQuery<GetSudokuLeaderboard, GetSudokuLeaderboardVariables>(
    GQL_QUERY_GET_SODUKU_LEADERBOARD,
    {
      variables: {
        date,
        limit: 1,
      },
      fetchPolicy: "network-only",
    }
  );

  const dateString = useMemo(() => {
    const dateMoment = moment(date);
    if (moment().isSame(dateMoment, "day")) {
      return t("screens.challenges.history.sudoku_leaderboard_today");
    }

    return dateMoment.format("Do MMMM");
  }, [date]);

  if (!sudokuLeaderboard) {
    return null;
  }

  return (
    <SudokuHistoryButton
      onPress={onPressSudokuLeaderboard}
      date={dateString}
      testID={LEVEL_SUMMARY_YUDOKU_LEADERBOARD(dateString)}
    />
  );
};
