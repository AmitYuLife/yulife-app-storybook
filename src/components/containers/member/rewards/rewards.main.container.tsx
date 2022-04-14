import React, { useState, useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { IMainTabsProps } from "@navigation/root";
import RewardsListContainer from "./rewards.list";
import RewardsListLegacyContainer from "./rewards.list.legacy";
import RewardsPurchasesContainer from "./rewards.purchases";
import { useTapBackTwiceToExit } from "@services/hooks/useTapBackTwiceToExit";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";

type Tab = "rewards" | "purchases";

function RewardsMainContainer(props: IMainTabsProps) {
  const [tab, setTab] = useState("rewards");
  const hasNewRewards = useSelector(getUserFeatures)?.hasNewRewards;

  useTapBackTwiceToExit(props.componentId);

  const onTabChange = useCallback(async (newTab: Tab, componentId: string = "") => {
    setTab(newTab);

    if (componentId) {
      await Navigation.popToRoot(componentId);
    }
  }, []);

  const onBackToRewards = useCallback(() => setTab("rewards"), []);

  if (tab === "purchases") {
    return (
      <RewardsPurchasesContainer
        componentId={props.componentId}
        hasNewRewards={hasNewRewards}
        onLeftMenuPress={hasNewRewards ? onBackToRewards : props.onLeftMenuPress}
        onTabChange={onTabChange}
      />
    );
  }

  if (hasNewRewards) {
    return (
      <RewardsListContainer
        componentId={props.componentId}
        onLeftMenuPress={props.onLeftMenuPress}
        onTabChange={onTabChange}
      />
    );
  }

  return (
    <RewardsListLegacyContainer
      componentId={props.componentId}
      onLeftMenuPress={props.onLeftMenuPress}
      onTabChange={onTabChange}
    />
  );
}

export default RewardsMainContainer;
