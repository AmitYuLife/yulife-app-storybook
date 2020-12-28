import React, { useState, useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { IMainTabsProps } from "@navigation/root";
import RewardsListContainer from "./rewards.list";
import RewardsPurchasesContainer from "./rewards.purchases";
import { useTapBackTwiceToExit } from "@services/hooks/useTapBackTwiceToExit";

type Tab = "rewards" | "purchases";

function RewardsMainContainer(props: IMainTabsProps) {
  const [tab, setTab] = useState("rewards");

  useTapBackTwiceToExit(props.componentId);

  const onTabChange = useCallback(async (newTab: Tab, componentId: string = "") => {
    setTab(newTab);

    if (componentId) {
      await Navigation.popToRoot(componentId);
    }
  }, []);

  if (tab === "purchases") {
    return (
      <RewardsPurchasesContainer
        componentId={props.componentId}
        onLeftMenuPress={props.onLeftMenuPress}
        onTabChange={onTabChange}
      />
    );
  }

  return (
    <RewardsListContainer
      componentId={props.componentId}
      onLeftMenuPress={props.onLeftMenuPress}
      onTabChange={onTabChange}
    />
  );
}

export default RewardsMainContainer;
