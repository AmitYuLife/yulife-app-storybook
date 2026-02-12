import { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

import { useBackHandler, useUserFeatures } from "@hooks";
import { ChallengeSuccessScreen } from "@components/screens";
import { ChallengeCompletionSummary } from "@redux/levels/levels.types";
import PathwayChallengeSuccessScreen from "../screens/pathways-challenge-success.screen";

interface Props {
  reward: number;
  componentId: string;
  challengeId: string;
  completionSummary: ChallengeCompletionSummary;
}

const PathwayChallengeSuccessContainer = ({ reward, componentId, challengeId, completionSummary }: Props) => {
  useBackHandler(() => true);
  const features = useUserFeatures();

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

  if (features.tempGameEnableNewSuccessScreen) {
    return <ChallengeSuccessScreen reward={reward} onPressCta={onPressCta} completionSummary={completionSummary} />;
  }

  return <PathwayChallengeSuccessScreen reward={reward} onPressCta={onPressCta} />;
};

export default memo(PathwayChallengeSuccessContainer);
