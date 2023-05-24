import { useQuery } from "@apollo/client";
import { GetSudokuLeaderboard, GetSudokuLeaderboardVariables } from "@graphql/_core/schema";
import { GQL_QUERY_GET_SODUKU_LEADERBOARD } from "@graphql/brainGames/sudoku/getSudokuLeaderboards.gql";
import { useCallback } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import SudokuHistoryButton from "./sudoku-history-button";

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

  if (!sudokuLeaderboard) {
    return null;
  }

  return <SudokuHistoryButton onPress={onPressSudokuLeaderboard} />;
};
