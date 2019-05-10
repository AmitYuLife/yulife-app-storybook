import { querySteps } from "@services/fitkit/fitkit.helpers";
import * as React from "react";
import { PureComponent } from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetMobileCopy_getMobileCopy_screens_signupReward as SignUpRewardCopy} from "../../../../graphql/_core/schema";
import { AddHistoricalStepsMutationFunction } from "../../../../graphql/challenges/addHistoricalSteps.gql";
import {
    addHistoricalStepsGql,
    AddHistoricalStepsMutation
} from "../../../../graphql/challenges/addHistoricalSteps.gql";
import UpsertOnboardingChallengeMutation, {
    upsertOnboardingChallengeGql,
    UpsertOnboardingChallengeMutationType,
    UpsertOnboardingChallengeStateType
} from "../../../../graphql/challenges/upsertOnboardingChallenge.gql";
import { setNextRoot } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { getUserStart } from "../../../../redux/user/user.actions";
import Logger from "../../../../services/logging/logger";
import { Loading } from "../../../atoms";
import { SignUpRewardScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IState {
    isLoading: boolean;
}

interface IChildProps extends UpsertOnboardingChallengeStateType, ConnectedState, ConnectedDispatch, IProps {
    upsertOnboardingChallenge: UpsertOnboardingChallengeMutationType;
}

class SignUpRewardContainerChild extends PureComponent<IChildProps, IState> {
    public state = {
        isLoading: false
    };
    private backHandler: NativeEventSubscription;

    constructor(props: IChildProps) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidAppear() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
        this.props.upsertOnboardingChallenge();
        this.props.getUserStart();
    }

    public componentDidDisappear() {
        this.backHandler.remove();
    }

    public render() {
        const { isLoading } = this.state;
        const { loading, data, error, copy } = this.props;

        // TODO: handle errors
        if (error) {
            return null;
        }

        if (!data || !data.upsertPassiveChallenge) {
            return <Loading />;
        }

        return (
            <AddHistoricalStepsMutation mutation={addHistoricalStepsGql}>
                {(addHistoricalSteps) => (
                    <SignUpRewardScreen
                        isLoading={loading || isLoading}
                        onCollectPress={this.onCollect(addHistoricalSteps)}
                        reward={data.upsertPassiveChallenge.challenge.yuCoinAwarded}
                        copy={copy}
                    />
                )}
            </AddHistoricalStepsMutation>
        );
    }

    private onCollect = (addHistoricalSteps: AddHistoricalStepsMutationFunction) => async () => {
        try {
            this.setState({
                isLoading: true
            });
            const { results: payload } = await querySteps(60, 1, false);

            if (payload.length > 0) {
                await addHistoricalSteps({
                    variables: { payload, shouldAward: false }
                });
            }
        } catch (e) {
            Logger.logIntercomEvent("historical_steps_sync_failed", { message: e.message });
        }

        this.setState({
            isLoading: false
        });
        await setNextRoot();
    };
}

const SignUpRewardContainer = (props: IProps & ConnectedState &ConnectedDispatch) => (
    <UpsertOnboardingChallengeMutation mutation={upsertOnboardingChallengeGql}>
        {(upsertOnboardingChallenge, args) => {
            return (
                <SignUpRewardContainerChild
                    upsertOnboardingChallenge={upsertOnboardingChallenge}
                    {...props}
                    {...args}
                />
            );
        }}
    </UpsertOnboardingChallengeMutation>
);

const mapStateToProps = (state: IReduxState) => ({
    copy: getCopy(state, "signupReward") as SignUpRewardCopy
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(SignUpRewardContainer);
