import * as React from "react";
import { PureComponent } from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { setAuthenticatedRoot } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { setAuthenticated } from "../../../../redux/app/app.actions";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { getIsOnboarding, getOnboardingReward } from "../../../../redux/onboarding/onboarding.selectors";
import { SignUpRewardScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

class SignUpRewardContainer extends PureComponent<Props> {
    private backHandler: NativeEventSubscription;

    constructor(props: Props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidAppear() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
    }

    public componentDidDisappear() {
        this.backHandler.remove();
    }

    public render() {
        const { copy, isLoading, yucoinAwarded } = this.props;

        return (
            <SignUpRewardScreen
                isLoading={isLoading}
                onCollectPress={this.onCollect}
                reward={yucoinAwarded}
                copy={copy}
            />
        );
    }

    private onCollect = async () => {
        await setAuthenticatedRoot(this.props.setAuthenticated);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    copy: getCopy(state, "signupReward"),
    yucoinAwarded: getOnboardingReward(state),
    isLoading: getIsOnboarding(state)
});

const mapDispatchToProps = {
    setAuthenticated
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(SignUpRewardContainer);
