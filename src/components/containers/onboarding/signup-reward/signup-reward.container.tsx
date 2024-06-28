import * as React from "react";
import { useSelector } from "react-redux";
import { getIsOnboarding, getOnboardingReward } from "@redux/onboarding/onboarding.selectors";
import { SignUpRewardScreen } from "@screens";
import { VoidFunction } from "@utils";

interface Props {
  componentId: string;
  navigateToNext: VoidFunction;
}

const SignUpRewardContainer: React.FC<Props> = ({ navigateToNext }) => {
  const isLoading = useSelector(getIsOnboarding);
  const yuCoinAwarded = useSelector(getOnboardingReward);

  return <SignUpRewardScreen isLoading={isLoading} onCollectPress={navigateToNext} yuCoin={yuCoinAwarded} />;
};

export default React.memo(SignUpRewardContainer);
