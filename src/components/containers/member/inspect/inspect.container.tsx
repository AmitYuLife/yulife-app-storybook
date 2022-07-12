import React, { memo, useCallback, useMemo } from "react";
import InspectScreen from "@components/screens/member/inspect/inspect.screen";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_STATISTICS } from "@graphql/statistics/getStatistics.gql";
import { GetStatistics } from "@graphql/_core/schema";
import { Loading } from "@atoms";
import { View, StyleSheet } from "react-native";
import { Style } from "@styles";

interface IProps {
  componentId: string;
  userId: string;
  challengeDuel: () => void;
}

const InspectContainer = ({ componentId: _componentId, userId, challengeDuel }: IProps) => {
  const onClose = useCallback(() => Navigation.pop(ROUTES.inspect), []);
  const currentUserId = useSelector(getCurrentUserId);
  const inspectOtherUser = useMemo(() => userId !== currentUserId, [userId, currentUserId]);

  const onPressChallengeDuel = useCallback(() => {
    inspectOtherUser ? challengeDuel() : onClose();
  }, [inspectOtherUser, onClose, challengeDuel]);
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

        const opponentValue = opponent.sections.activity.stats.find((opponentItem) => opponentItem.type === item.type)
          .value;
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

  if (loading && !data?.getStatistics?.current) {
    return (
      <View style={styles.wrapper}>
        <Loading />
      </View>
    );
  }

  return (
    <InspectScreen
      userName={current.fullName}
      level={current.level}
      infoItems={current.sections.general?.stats || []}
      duel={duel}
      activity={averageActivity}
      yumoji={current.avatar.uri}
      onClose={onClose}
      challengeDuel={onPressChallengeDuel}
      inspectOtherUser={inspectOtherUser}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  },
});

export default memo(InspectContainer);
