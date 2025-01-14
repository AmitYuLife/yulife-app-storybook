import { IChallengeDetailsScreenProps } from "@components/screens/member/challenges/challenge-details/challenge-details.screen";
import { memo } from "react";
import { ChallengeDetailsScreen } from "@screens";

const ChallengeListDetailsAccessibilityContainer = (props: IChallengeDetailsScreenProps) => (
  <ChallengeDetailsScreen {...props} />
);

export default memo(ChallengeListDetailsAccessibilityContainer);
