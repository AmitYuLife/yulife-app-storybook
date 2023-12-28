import React, { memo, useCallback, useEffect, useMemo } from "react";
import { useBackHandler, useTranslation } from "@hooks";
import { Navigation } from "@navigation/main";
import SudokuLeaderboardEmptyScreen from "./sudoku-leaderboard-empty.screen";
import { useLazyQuery } from "@apollo/client";
import { GetSudokuBoard_getSudokuBoard_results } from "@graphql/_core/schema";
import SudokuLeaderboardScreen from "./sudoku-leaderboard.screen";
import moment from "moment";
import { DATE_FORMAT } from "@utils";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { useSelector } from "react-redux";
import { getActiveYudokuLeaderboard } from "@redux/leaderboards/leaderboards.selectors";
import { ROUTES } from "@navigation/constants";
import { SudokuDifficulty, gql } from "@graphql/__generated";

interface IProps {
  componentId: string;
  date?: string;
  results: GetSudokuBoard_getSudokuBoard_results;
  onStart?: () => void;
}

const SudokuLeaderboardContainer = ({ componentId, date }: IProps) => {
  const activeYudokuLeaderboard = useSelector(getActiveYudokuLeaderboard);
  const leaderboardDate = date || moment().format(DATE_FORMAT);
  const t = useTranslation(["format.date_readable"]);
  const formattedDate = useMemo(() => {
    return moment(leaderboardDate).format(t["format.date_readable"]);
  }, [leaderboardDate, t]);

  const [getSocialGroupLeaderboardItems, { data: leaderboard, loading: isLoading }] = useLazyQuery(
    gql("GetMobileSocialGroupLeaderboardItemsDocument"),
    {
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => {
    if (activeYudokuLeaderboard?.leaderboardId) {
      getSocialGroupLeaderboardItems({
        variables: {
          leaderboardId: activeYudokuLeaderboard?.leaderboardId,
          filter: {
            date: leaderboardDate,
            difficulty: SudokuDifficulty.Easy,
          },
          limit: 100,
        },
      });
    }
  }, [activeYudokuLeaderboard?.leaderboardId, getSocialGroupLeaderboardItems]);

  const onClose = useCallback(() => Navigation.pop(componentId), [componentId]);

  const onListItemPress = useCallback(
    (userId: string, leaderboardPlacement: number) => {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.inspect,
          name: ROUTES.inspect,
          passProps: {
            userId,
            leaderboardPlacement,
          },
        },
      });
      return Navigation.dismissAllModals();
    },
    [componentId]
  );

  useBackHandler(() => {
    onClose();
    return true;
  });

  if (isLoading) {
    return <LoadingScreen onClose={onClose} />;
  }

  if (!leaderboard?.getMobileSocialGroupLeaderboardItems?.length) {
    return <SudokuLeaderboardEmptyScreen onClose={onClose} date={formattedDate} />;
  }

  return (
    <SudokuLeaderboardScreen
      onBack={onClose}
      date={leaderboardDate}
      leaderboard={leaderboard?.getMobileSocialGroupLeaderboardItems}
      onListItemPress={onListItemPress}
    />
  );
};

export default memo(SudokuLeaderboardContainer);
