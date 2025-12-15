import React, { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useSelector } from "react-redux";
import { getChallengesStatus } from "@redux/levels/levels.selectors";
import PathwayChallengeSuccessScreen from "../screens/pathways-challenge-success.screen";

interface Props {
  reward: number;
}

const PathwayChallengeSuccessContainer = ({ reward }: Props) => {
  const { isAvailable } = useSelector(getChallengesStatus);

  const onPressCta = useCallback(() => {
    Navigation.popTo(isAvailable ? ROUTES.questsChallengesList : ROUTES.quests);
  }, [isAvailable]);

  return <PathwayChallengeSuccessScreen reward={reward} loading={false} onPressCta={onPressCta} />;
};

export default memo(PathwayChallengeSuccessContainer);
