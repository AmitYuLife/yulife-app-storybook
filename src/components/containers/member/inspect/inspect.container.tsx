import { useLazyQuery, useQuery } from "@apollo/client";
import React, { memo, useCallback, useEffect, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { useSelector } from "react-redux";
import InspectScreen from "@components/screens/member/inspect/inspect.screen";
import { ROUTES } from "@navigation/constants";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { GQL_QUERY_GET_STATISTICS } from "@graphql/statistics/getStatistics.gql";
import { GetStatistics, GetDuels } from "@graphql/_core/schema";
import { useBackHandler } from "@hooks";
import { GQL_QUERY_GET_DUELS } from "@graphql/duels";
import { onDuelPress } from "../leaderboard/active-leaderboard/leaderboard-content/items/leaderboard-rank-item/duel-dialog.helpers";
import LoadingScreen from "@components/screens/member/loading/loading.screen";

interface IProps {
  componentId: string;
  userId: string;
  leaderboardPlacement: number;
}

const InspectContainer = ({ componentId: _componentId, userId, leaderboardPlacement }: IProps) => {
  const onClose = useCallback(() => {
    Navigation.pop(ROUTES.inspect);
    return true;
  }, []);

  const currentUserId = useSelector(getCurrentUserId);
  const inspectOtherUser = useMemo(() => userId !== currentUserId, [userId, currentUserId]);

  useBackHandler(onClose);

  const [getDuels, { loading: duelsLoading, data: duelsData }] = useLazyQuery<GetDuels>(GQL_QUERY_GET_DUELS, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (inspectOtherUser) {
      getDuels();
    }
  }, [inspectOtherUser]);

  const duels = duelsData?.getDuels || [];

  const onPressChallengeDuel = useCallback(() => {
    inspectOtherUser ? onDuelPress(duels, currentUserId, userId, leaderboardPlacement, "inspect") : openDuelHub();
  }, [inspectOtherUser, onClose, onDuelPress, duelsData]);
  const { loading, data } = useQuery<GetStatistics>(GQL_QUERY_GET_STATISTICS, {
    variables: { userId },
    fetchPolicy: "network-only",
  });

  const { current, opponent } = data?.getStatistics || {};
  const activityItems = useMemo(
    () =>
      current?.sections?.activity?.stats.map((item) => {
        if (!opponent) {
          return {
            id: item.id,
            icon: item.icon.uri,
            value: item.value,
            name: item.name,
            label: item.label,
          };
        }

        const opponentValue = opponent.sections.activity.stats.find(
          (opponentItem) => opponentItem.type === item.type
        ).value;
        return {
          id: item.id,
          icon: item.icon.uri,
          value: item.value,
          opponentValue: opponentValue,
          opponentIsWinner: opponentValue > item.value,
          name: item.name,
          label: item.label,
        };
      }),
    [current, opponent]
  );

  const averageActivity = useMemo(
    () => ({
      title: current?.sections?.activity?.title,
      subTitle: current?.sections?.activity?.subtitle,
      avatarUri: current?.avatar.uri,
      opponentAvatarUri: opponent?.avatar?.uri,
      name: current?.fullName,
      averageItems: activityItems,
    }),
    [current, opponent, activityItems]
  );

  const duel = useMemo(
    () => ({
      title: current?.sections?.duels?.title,
      items: current?.sections?.duels?.stats || [],
    }),
    [current]
  );

  const general = useMemo(
    () => ({
      title: current?.sections?.general?.title,
      items: current?.sections?.general?.stats || [],
    }),
    [current]
  );

  if (duelsLoading || loading || !data?.getStatistics?.current) {
    return <LoadingScreen onClose={onClose} />;
  }

  return (
    <InspectScreen
      userName={current.fullName}
      level={current.level}
      yuniversalMap={current.yuniversalMap}
      general={general}
      duel={duel}
      activity={averageActivity}
      yumoji={current.avatar.uri}
      onClose={onClose}
      challengeDuel={onPressChallengeDuel}
      inspectOtherUser={inspectOtherUser}
    />
  );
};

const openDuelHub = () =>
  Navigation.push(ROUTES.inspect, {
    component: {
      id: ROUTES.duelsHub,
      name: ROUTES.duelsHub,
    },
  });

export default memo(InspectContainer);
