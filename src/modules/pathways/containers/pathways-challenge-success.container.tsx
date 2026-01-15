import { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import PathwayChallengeSuccessScreen from "../screens/pathways-challenge-success.screen";
import { useBackHandler } from "@hooks";

interface Props {
  reward: number;
  componentId: string;
}

const PathwayChallengeSuccessContainer = ({ reward, componentId }: Props) => {
  useBackHandler(() => true);

  const onPressCta = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  return <PathwayChallengeSuccessScreen reward={reward} onPressCta={onPressCta} />;
};

export default memo(PathwayChallengeSuccessContainer);
