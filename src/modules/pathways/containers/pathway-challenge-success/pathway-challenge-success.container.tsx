import React, { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import PathwayChallengeSuccessScreen from "@app/modules/pathways/screens/pathway-challenge-success/pathway-challenge-success.screen";
import { ROUTES } from "@navigation/constants";

interface Props {
  reward: number;
}

const PathwayChallengeSuccessContainer = ({ reward }: Props) => {
  const onPressCta = useCallback(() => {
    Navigation.popTo(ROUTES.questsChallengesList);
  }, []);

  return <PathwayChallengeSuccessScreen reward={reward} loading={false} onPressCta={onPressCta} />;
};

export default memo(PathwayChallengeSuccessContainer);
