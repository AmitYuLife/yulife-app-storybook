import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticatedRoot } from "@navigation/root";
import { setAuthenticated } from "@redux/app/app.actions";
import { getIsOnboarding, getOnboardingReward } from "@redux/onboarding/onboarding.selectors";
import { SignUpRewardScreen } from "@screens";
import { getUserFeatures } from "@redux/user/user.selectors";
import { useCallback } from "react";

// TODO find where these props actually come from in RNN types
interface Props {
  componentId: string;
}

const SignUpRewardContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const yuCoinAwarded = useSelector(getOnboardingReward);
  const isLoading = useSelector(getIsOnboarding);
  const { newSignUpBonusCopy } = useSelector(getUserFeatures);

  const onCollectPress = useCallback(async () => {
    await setAuthenticatedRoot(() => dispatch(setAuthenticated()));
  }, [dispatch]);

  return (
    <SignUpRewardScreen
      isLoading={isLoading}
      onCollectPress={onCollectPress}
      yuCoin={yuCoinAwarded}
      hasNewCopy={newSignUpBonusCopy}
    />
  );
};

export default React.memo(SignUpRewardContainer);
