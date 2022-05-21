import React, { FC } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { Text } from "@atoms";
import { DuelEntry } from "../../subcomponents";
import { GQL_QUERY_GET_DUEL_TOMORROW } from "@graphql/duels/getDuelsTomorrow.gql";
import { GetDuelsTomorrow } from "@graphql/_core/schema";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { DuelSkeleton } from "../../subcomponents/duel-skeleton/duel-skeleton";
import { useQueryOnScreenSeen } from "@hooks";
import { ROUTES } from "@navigation/constants";

const DuelsTomorrow: FC = () => {
  const [, { data, loading }] = useQueryOnScreenSeen<GetDuelsTomorrow>(GQL_QUERY_GET_DUEL_TOMORROW, ROUTES.duelsHub, {
    fetchPolicy: "no-cache",
  });

  const duels = data?.getDuelsTomorrow || [];
  const userId = useSelector(getCurrentUserId);

  const isEmpty = duels.length === 0;

  if (loading) {
    return (
      <View style={styles.skeletonWrapper}>
        <DuelSkeleton length={2} />
      </View>
    );
  }

  if (isEmpty) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Text bold={true}>Tomorrow’s Duels</Text>
      <View style={styles.entriesWrapper}>
        {duels.map((duel) => (
          <DuelEntry key={duel.id} duel={duel} userId={userId} type="tomorrow" />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: Style.adjust(24) } as ViewStyle,
  entriesWrapper: { flex: 1, marginTop: Style.adjust(16) } as ViewStyle,
  skeletonWrapper: {
    flex: 1,
    height: Style.adjust(100),
    marginBottom: Style.adjust(20),
    marginHorizontal: -Style.adjust(24),
    overflow: "hidden",
  } as ViewStyle,
});

export default DuelsTomorrow;
