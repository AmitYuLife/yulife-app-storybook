import * as React from "react";
import { View, SectionList, SectionListRenderItem, SectionListData } from "react-native";
import styles from "./completed-duels.styles";
import { useQuery } from "@apollo/client";
import { DuelEntry, DuelEmpty } from "../subcomponents";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { Text } from "@atoms";
import { DUEL_ENTRY_HEIGHT } from "../subcomponents/duel-entry/duel-entry";
import { DuelSkeleton } from "../subcomponents/duel-skeleton/duel-skeleton";
import { GetDuelsCompletedQuery, gql } from "@graphql/__generated";
import { useMemo } from "react";

type IGetDuelsCompletedDuels = GetDuelsCompletedQuery["getDuelsCompleted"][0]["duels"][0];
interface ItemData extends IGetDuelsCompletedDuels {
  userId: string;
  dailySteps: number;
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

const keyExtractor = (item: IGetDuelsCompletedDuels) => item.id;

const CompletedDuelsScreen = () => {
  const { data, loading, networkStatus } = useQuery(gql("GetDuelsCompletedDocument"), {
    fetchPolicy: "no-cache",
  });
  const userId = useSelector(getCurrentUserId);
  const dailySteps = useSelector(getDailySteps);
  const duels = useMemo(() => data?.getDuelsCompleted || [], [data]);

  const sections = useMemo(() => {
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
      />
    </View>
  );
};

export default CompletedDuelsScreen;
