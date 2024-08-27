import React, { memo } from "react";
import { useSelector } from "react-redux";
import { getActiveRewardsSection } from "@redux/rewards-tab/rewards-tab.selectors";
import BattlePassContainer from "@components/containers/battle-pass/battle-pass.container";
import RewardsListContainer from "./rewards.list.container";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";

// TODO: remove the partial type
const CONTAINERS: Partial<Record<RewardsSection, React.FC>> = {
  [RewardsSection.Donations]: BattlePassContainer,
  [RewardsSection.Store]: RewardsListContainer,
  // [RewardsSection.Premium]: RewardsListContainer,
};

const _RewardsTabManagerContainer = () => {
  const selectedSection = useSelector(getActiveRewardsSection);

  const Container = CONTAINERS[selectedSection] || RewardsListContainer;

  return <Container />;
};

const RewardsTabManagerContainer = memo(_RewardsTabManagerContainer);
export default RewardsTabManagerContainer;
