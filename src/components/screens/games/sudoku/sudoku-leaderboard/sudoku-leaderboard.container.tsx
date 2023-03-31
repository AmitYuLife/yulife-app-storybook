import React, { memo, useCallback } from "react";
import { useBackHandler } from "@hooks";
import { Navigation } from "@navigation/main";
import SudokuLeaderboardEmptyScreen from "./sudoku-leaderboard-empty.screen";
import { useQuery } from "@apollo/client";
import {
  GetSudokuBoard_getSudokuBoard_results,
  GetSudokuLeaderboard,
  GetSudokuLeaderboardVariables,
} from "@graphql/_core/schema";
import { GQL_QUERY_GET_SODUKU_LEADERBOARD } from "@graphql/brainGames/sudoku/getSudokuLeaderboards.gql";
import { SudokuDifficulty } from "@graphql/_core/schema/globalTypes";
import SudokuLeaderboardScreen from "./sudoku-leaderboard.screen";
import moment from "moment";
import { DATE_FORMAT } from "@utils";

interface IProps {
  componentId: string;
  date: string;
  results: GetSudokuBoard_getSudokuBoard_results;
  onStart?: () => void;
}

const SudokuLeaderboardContainer = ({ componentId, onStart, results, date }: IProps) => {
  const { data: leaderboard } = useQuery<GetSudokuLeaderboard, GetSudokuLeaderboardVariables>(
    GQL_QUERY_GET_SODUKU_LEADERBOARD,
    {
      variables: {
        date: moment().format(DATE_FORMAT),
        difficulty: SudokuDifficulty.EASY,
        limit: 100,
      },
      fetchPolicy: "no-cache",
    }
  );

  const onClose = useCallback(() => Navigation.pop(componentId), [componentId]);

  useBackHandler(() => {
    onClose();
    return true;
  });

  if (!leaderboard?.getSudokuLeaderboard?.length) {
    return <SudokuLeaderboardEmptyScreen onClose={onClose} onStart={!results ? onStart : undefined} />;
  }

  return (
    <SudokuLeaderboardScreen
      onBack={onClose}
      date={date}
      componentId={componentId}
      leaderboard={leaderboard?.getSudokuLeaderboard}
    />
  );
};

export default memo(SudokuLeaderboardContainer);
