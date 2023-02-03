import * as React from "react";
import { View, SectionList, SectionListRenderItem, SectionListData } from "react-native";
import styles from "./completed-duels.styles";
import { GQL_QUERY_GET_DUELS_COMPLETED } from "@graphql/duels/getDuelsCompleted.gql";
import { useQuery } from "@apollo/client";
import { GetDuelsCompleted, GetDuelsCompleted_getDuelsCompleted_duels } from "@graphql/_core/schema";
import { DuelEntry, DuelEmpty } from "../subcomponents";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { Text } from "@atoms";
import { Button } from "@molecules";
import { DUEL_ENTRY_HEIGHT } from "../subcomponents/duel-entry/duel-entry";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { DuelSkeleton } from "../subcomponents/duel-skeleton/duel-skeleton";
import { t } from "@locale";

interface ItemData extends GetDuelsCompleted_getDuelsCompleted_duels {
  userId: string;
  dailySteps: number;
}

async function navigateToDuelsSearch() {
  await Navigation.push(ROUTES.duelsHub, {
    component: {
      id: ROUTES.duelsSearch,
      name: ROUTES.duelsSearch,
    },
  });
}

const renderItem: SectionListRenderItem<ItemData> = ({
  item: { id, opponents, duration, type, yucoin, status, userId, dailySteps },
}) => {
  return (
    <DuelEntry
      duel={{
        id,
        opponents,
        duration,
        type,
        yucoin,
        status,
      }}
      type="completed"
      userId={userId}
      dailySteps={dailySteps}
    />
  );
};

const renderSectionHeader: SectionListRenderItem<ItemData> = ({ section }) => {
  return (
    <View style={styles.sectionheaderWrapper}>
      <Text>{section.title}</Text>
    </View>
  );
};

const getItemLayout = (_: SectionListData<ItemData>[], index: number) => ({
  length: DUEL_ENTRY_HEIGHT,
  offset: DUEL_ENTRY_HEIGHT * index,
  index,
});

const keyExtractor = (item: GetDuelsCompleted_getDuelsCompleted_duels) => item.id;

const CompletedDuelsScreen = () => {
  const { data, loading, networkStatus } = useQuery<GetDuelsCompleted>(GQL_QUERY_GET_DUELS_COMPLETED, {
    fetchPolicy: "no-cache",
  });
  const userId = useSelector(getCurrentUserId);
  const dailySteps = useSelector(getDailySteps);
  const duels = data?.getDuelsCompleted || [];
  const sections = React.useMemo(() => {
    return duels.map((duelData) => {
      const formattedDuelData = duelData.duels.map((value) => ({ ...value, userId, dailySteps }));
      return { title: duelData.id, data: formattedDuelData };
    });
  }, [duels, dailySteps, userId]);

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.skeletonWrapper}>
          <DuelSkeleton />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <SectionList
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        sections={sections}
        getItemLayout={getItemLayout}
        stickySectionHeadersEnabled={false}
        refreshing={networkStatus === 4}
        ListEmptyComponent={DuelEmpty}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={
          <Button
            wrapperStyle={styles.buttonWrapperStyle}
            label={t("modals.duels.hub.challenge_friend_button")}
            onPress={navigateToDuelsSearch}
          />
        }
      />
    </View>
  );
};

export default CompletedDuelsScreen;
