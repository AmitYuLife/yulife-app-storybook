import { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import PathwayChallengeSuccessScreen from "../screens/pathways-challenge-success.screen";
import { useBackHandler } from "@hooks";

interface Props {
  reward: number;
  componentId: string;
  challengeId: string;
}

const PathwayChallengeSuccessContainer = ({ reward, componentId, challengeId }: Props) => {
  useBackHandler(() => true);

  const onPressCta = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        name: ROUTES.pathwayChallengeFeedback,
        passProps: {
          componentId,
          challengeId,
        },
      },
    });
  }, [componentId, challengeId]);

  return <PathwayChallengeSuccessScreen reward={reward} onPressCta={onPressCta} />;
};

export default memo(PathwayChallengeSuccessContainer);
