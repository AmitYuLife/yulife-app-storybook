import React, { useCallback, useState } from "react";
import { Navigation } from "react-native-navigation";
import { useSelector, useDispatch } from "react-redux";
import { ActiveDuelsScreen, PastDuelsScreen, DuelsIntroScreen } from "@screens/index";
import { IMainTabsProps } from "@navigation/root";
import { NetworkStatus } from "apollo-client";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_DUELS_HUB_DATA } from "@graphql/duels";
import { GetDuelsHubData } from "@graphql/_core/schema";
import { Loading } from "@atoms";
import { SafeAreaView, StyleSheet } from "react-native";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ROUTES } from "@navigation/constants";
import { getDuelsGoalsIntro } from "@redux/onboarding/onboarding.selectors";
import { setDuelsIntroShown } from "@redux/onboarding/onboarding.actions";

export type DuelHubTab = "active" | "past";

interface IProps {
  componentId?: IMainTabsProps["componentId"];
}

type Props = IProps;

function DuelsHubContainer({ componentId }: Props) {
  const [tab, setTab] = useState<DuelHubTab>("active");
  const introShown = useSelector(getDuelsGoalsIntro);
  const dispatch = useDispatch();
  const handleClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const handleChangeTab = (pressedTab: DuelHubTab) => () => {
    setTab(pressedTab);
  };

  useBackHandler(() => {
    Navigation.pop(ROUTES.duelsHub);
    return true;
  });

  const { data, loading, refetch, networkStatus } = useQuery<GetDuelsHubData>(GQL_QUERY_GET_DUELS_HUB_DATA, {
    fetchPolicy: "network-only",
  });
  const duelsData = data
    ? data.getDuelsHubData
    : { activeDuels: [], upcomingDuels: [], duelInvitations: [], pastDuels: [] };

  if (introShown) {
    return <DuelsIntroScreen setOnboardingShown={() => dispatch(setDuelsIntroShown())} />;
  }

  if (loading) {
    return (
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <Loading />
      </SafeAreaView>
    );
  }

  if (tab === "active") {
    return (
      <ActiveDuelsScreen
        data={duelsData}
        activeTab={tab}
        onPressClose={handleClose}
        onChangeTab={handleChangeTab}
        onRefetch={refetch}
        refreshing={networkStatus === NetworkStatus.refetch}
      />
    );
  }

  return (
    <PastDuelsScreen
      data={duelsData}
      activeTab={tab}
      onPressClose={handleClose}
      onChangeTab={handleChangeTab}
      onRefetch={refetch}
      refreshing={networkStatus === NetworkStatus.refetch}
    />
  );
}

export default DuelsHubContainer;
