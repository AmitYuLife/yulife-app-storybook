import React, { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import PathwaysChallengeSuccessScreen from "../screens/pathways-challenge-success.screen";

interface Props {
  reward: number;
}

const PathwaysChallengeSuccessContainer = ({ reward }: Props) => {
  const onPressCta = useCallback(() => {
    Navigation.popTo(ROUTES.questsChallengesList);
  }, []);

  return <PathwaysChallengeSuccessScreen reward={reward} loading={false} onPressCta={onPressCta} />;
};

export default memo(PathwaysChallengeSuccessContainer);
