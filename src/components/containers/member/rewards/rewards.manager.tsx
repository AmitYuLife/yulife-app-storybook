import React, { memo } from "react";
import { useSelector } from "react-redux";
import { getIsBattlePassActive } from "@redux/battle-pass/battle-pass.selectors";
import BattlePassContainer from "@components/containers/battle-pass/battle-pass.container";
import RewardsListContainer from "./rewards.list.container";

const _RewardsTabManagerContainer = () => {
  const isBattlePassActive = useSelector(getIsBattlePassActive);

  if (isBattlePassActive) {
    return <BattlePassContainer />;
  }

  return <RewardsListContainer />;
};

const RewardsTabManagerContainer = memo(_RewardsTabManagerContainer);
export default RewardsTabManagerContainer;
