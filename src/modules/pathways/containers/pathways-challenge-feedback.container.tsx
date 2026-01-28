import { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import PathwaysChallengeFeedbackScreen from "../screens/pathways-challenge-feedback/pathways-challenge-feedback.screen";
import { useBackHandler } from "@hooks";
import { usePathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";

interface Props {
  componentId: string;
  challengeId: string;
}

const PathwaysChallengeFeedbackContainer = ({ componentId, challengeId }: Props) => {
  useBackHandler(() => true);

  const { submitChallengeFeedback } = usePathwayChallenge({
    componentId,
    challengeId,
    skipQuery: true,
  });

  const onPressCta = useCallback(
    async (rating: number) => {
      await submitChallengeFeedback(rating);
      Navigation.popToRoot(componentId);
    },
    [componentId, submitChallengeFeedback]
  );

  const onPressSkip = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  return <PathwaysChallengeFeedbackScreen onPressCta={onPressCta} onPressSkip={onPressSkip} />;
};

export default memo(PathwaysChallengeFeedbackContainer);
