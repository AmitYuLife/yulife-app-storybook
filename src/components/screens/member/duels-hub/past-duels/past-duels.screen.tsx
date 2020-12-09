import * as React from "react";
import { View, FlatList } from "react-native";
import { ApolloQueryResult } from "apollo-client";
import styles from "./past-duels.styles";
import { STATS_SCREEN } from "@ids";
import { DuelHubTab } from "@components/containers/member/duels-hub/duels-hub.container";
import { NavBar } from "@organisms";
import {
  GetDuelsHubData_getDuelsHubData,
  GetDuelsHubData_getDuelsHubData_pastDuels,
  GetDuelsHubData,
} from "@graphql/_core/schema";
import { renderItem, getItemLayout } from "./past-duels.helpers";
import { EmptyDuelHub, DuelTabs } from "../subcomponents";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface IProps {
  data: GetDuelsHubData_getDuelsHubData;
  activeTab: DuelHubTab;
  refreshing: boolean;
  onPressClose: () => void;
  onChangeTab: (tab: DuelHubTab) => () => void;
  onRefetch: () => Promise<ApolloQueryResult<GetDuelsHubData>>;
}

const PastDuels = ({ data, onPressClose, onChangeTab, activeTab, onRefetch, refreshing }: IProps) => {
  const emptyState = {
    pastDuels: [] as GetDuelsHubData_getDuelsHubData_pastDuels[],
  };
  const { pastDuels } = data || emptyState;
  const formattedPastDuels = pastDuels.map((duel, index, arr) => {
    const formattedDuel = {
      ...duel,
      isFirst: false,
      isLast: false,
    };
    if (index === 0) {
      formattedDuel.isFirst = true;
    }

    if (arr.length - 1 === index) {
      formattedDuel.isLast = true;
    }

    return formattedDuel;
  });
  return (
    <View style={styles.wrapper} testID={STATS_SCREEN}>
      <GenericHeadingPad />
      <View style={styles.tabWrapper}>
        <DuelTabs onPress={onChangeTab} activeTab={activeTab} />
      </View>
      <FlatList
        style={styles.flatList}
        data={formattedPastDuels}
        ListEmptyComponent={<EmptyDuelHub activeTab={activeTab} onPressClose={onPressClose} />}
        getItemLayout={getItemLayout}
        refreshing={refreshing}
        onRefresh={onRefetch}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
      <NavBar activeIndex={3} />
      <GenericHeadingAbsolute heading="Duels Hub" onLeftIconPress={onPressClose} />
    </View>
  );
};

export default PastDuels;
