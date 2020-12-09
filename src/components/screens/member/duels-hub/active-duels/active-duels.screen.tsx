import * as React from "react";
import { SectionList, View } from "react-native";
import styles from "./active-duels.styles";
import { STATS_SCREEN } from "@ids";
import { DuelHubTab } from "@components/containers/member/duels-hub/duels-hub.container";
import { NavBar } from "@organisms";
import {
  GetDuelsHubData_getDuelsHubData,
  GetDuelsHubData_getDuelsHubData_activeDuels,
  GetDuelsHubData_getDuelsHubData_upcomingDuels,
  GetDuelsHubData_getDuelsHubData_duelInvitations,
  GetDuelsHubData,
} from "@graphql/_core/schema";
import { ApolloQueryResult } from "apollo-client";
import { EmptyDuelHub, DuelTabs } from "../subcomponents";
import { renderItem, renderSectionHeader, getItemLayout, getResToList } from "./active-duels.helpers";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface IDuels {
  data: GetDuelsHubData_getDuelsHubData;
  onPressClose: () => void;
  onChangeTab: (tab: DuelHubTab) => () => void;
  activeTab: DuelHubTab;
  onRefetch: () => Promise<ApolloQueryResult<GetDuelsHubData>>;
  refreshing: boolean;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type IProps = IDuels & ConnectedState;

const ActiveDuels = ({ data, onPressClose, onChangeTab, activeTab, onRefetch, refreshing, dailySteps }: IProps) => {
  const emptyState = {
    activeDuels: [] as GetDuelsHubData_getDuelsHubData_activeDuels[],
    upcomingDuels: [] as GetDuelsHubData_getDuelsHubData_upcomingDuels[],
    duelInvitations: [] as GetDuelsHubData_getDuelsHubData_duelInvitations[],
  };

  const { activeDuels, upcomingDuels, duelInvitations } = data || emptyState;

  const sections = getResToList({
    activeDuels,
    duelInvitations,
    upcomingDuels,
    totalSteps: dailySteps,
  });

  return (
    <View style={styles.wrapper} testID={STATS_SCREEN}>
      <GenericHeadingPad />
      <View style={styles.tabWrapper}>
        <DuelTabs onPress={onChangeTab} activeTab={activeTab} />
      </View>
      <SectionList
        style={styles.sectionList}
        extraData={activeDuels.length + upcomingDuels.length + duelInvitations.length}
        sections={sections}
        refreshing={refreshing}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={<EmptyDuelHub activeTab={activeTab} onPressClose={onPressClose} />}
        onRefresh={onRefetch}
        getItemLayout={getItemLayout}
        keyExtractor={({ id }) => id}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
      <NavBar activeIndex={3} />
      <GenericHeadingAbsolute heading="Duels Hub" onLeftIconPress={onPressClose} />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  dailySteps: getDailySteps(state),
});

export default connect(mapStateToProps)(ActiveDuels);
