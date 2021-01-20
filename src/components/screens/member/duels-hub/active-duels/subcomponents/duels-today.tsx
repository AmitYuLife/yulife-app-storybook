import React, { FC } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { Text, Button } from "@atoms";
import { DuelEntry } from "../../subcomponents";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { useQuery } from "@apollo/react-hooks";
import { GetDuelsToday } from "@graphql/_core/schema";
import { GQL_QUERY_GET_DUELS_TODAY } from "@graphql/duels/getDuelsToday.gql";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { DuelSkeleton } from "../../subcomponents/duel-skeleton/duel-skeleton";
import { EMPTY_DUELS_HUB, CHALLENGE_FRIEND_BUTTON } from "@ids";

async function navigateToDuelsSearch() {
  await Navigation.push(ROUTES.duelsHub, {
    component: {
      id: ROUTES.duelsSearch,
      name: ROUTES.duelsSearch,
    },
  });
}

const TodaysDuels: FC = () => {
  const { data, loading } = useQuery<GetDuelsToday>(GQL_QUERY_GET_DUELS_TODAY, {
    fetchPolicy: "cache-and-network",
  });
  const duels = data?.getDuelsToday || [];
  const isEmpty = duels.length === 0;
  const userId = useSelector(getCurrentUserId);
  const dailySteps = useSelector(getDailySteps);

  if (loading) {
    return (
      <View>
        <Text bold={true}>Today’s Duels</Text>
        <View style={styles.skeletonWrapper}>
          <DuelSkeleton length={2} />
        </View>
      </View>
    );
  }

  if (isEmpty) {
    return (
      <View style={styles.sectionWrapper}>
        <Text bold={true}>Today’s Duels</Text>
        <View style={styles.emptyWrapper} testID={EMPTY_DUELS_HUB}>
          <Text style={styles.emptyText}>You’re not duelling with anybody today.</Text>
        </View>
        <Button
          testID={CHALLENGE_FRIEND_BUTTON}
          label="Challenge a friend"
          type="Primary"
          onPress={navigateToDuelsSearch}
        />
      </View>
    );
  }

  return (
    <View style={styles.sectionWrapper}>
      <Text bold={true}>Today’s Duels</Text>
      <View style={styles.wrapper}>
        {duels.map((duel) => (
          <DuelEntry key={duel.id} userId={userId} type="today" dailySteps={dailySteps} duel={duel} />
        ))}
      </View>
      <Button label="Challenge a friend" type="Primary" onPress={navigateToDuelsSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyWrapper: {
    flex: 1,
    marginVertical: Style.adjust(16),
    height: Style.adjust(38),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
  skeletonWrapper: {
    flex: 1,
    height: Style.adjust(100),
    marginVertical: Style.adjust(16),
    marginHorizontal: -Style.adjust(24),
    overflow: "hidden",
  } as ViewStyle,
  wrapper: { flex: 1, marginVertical: Style.adjust(16) } as ViewStyle,
  emptyText: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    color: Colours.neutral.n500,
  } as TextStyle,
  sectionWrapper: {
    marginBottom: Style.adjust(40),
  } as ViewStyle,
});

export default TodaysDuels;
