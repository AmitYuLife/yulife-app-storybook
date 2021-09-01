import * as React from "react";
import { connect } from "react-redux";
import { setAuthenticatedRoot } from "@navigation/root";
import { IReduxState } from "@redux/_core/reducers";
import { setAuthenticated } from "@redux/app/app.actions";
import { getCopy } from "@redux/copy/copy.selectors";
import { getIsOnboarding, getOnboardingReward } from "@redux/onboarding/onboarding.selectors";
import { SignUpRewardScreen } from "@screens";

// TODO find where these props actually come from in RNN types
interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const SignUpRewardContainer: React.FC<Props> = (props) => {
  const { copy, isLoading, yucoinAwarded } = props;

  const onCollectPress = async () => {
    await setAuthenticatedRoot(props.setAuthenticated);
  };

  return (
    <SignUpRewardScreen isLoading={isLoading} onCollectPress={onCollectPress} reward={yucoinAwarded} copy={copy} />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "signupReward"),
  yucoinAwarded: getOnboardingReward(state),
  isLoading: getIsOnboarding(state),
});

const mapDispatchToProps = {
  setAuthenticated,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(SignUpRewardContainer);
