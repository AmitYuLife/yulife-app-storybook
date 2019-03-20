import { querySteps } from "@services/fitkit/fitkit.helpers";
import * as React from "react";
import { PureComponent } from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
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
import { getUserStart } from "../../../../redux/user/user.actions";
import Logger from "../../../../services/logging/logger";
import { Loading } from "../../../atoms";
import { SignUpRewardScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

type ConnectedDispatch = typeof mapDispatchToProps;

interface IChildProps extends UpsertOnboardingChallengeStateType, ConnectedDispatch, IProps {
    upsertOnboardingChallenge: UpsertOnboardingChallengeMutationType;
}

class SignUpRewardContainerChild extends PureComponent<IChildProps> {
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
        const { loading, data, error } = this.props;

        // TODO: handle errors
        if (error) {
            return null;
        }

        if (loading || !data || !data.upsertPassiveChallenge) {
            return <Loading />;
        }

        return (
            <AddHistoricalStepsMutation mutation={addHistoricalStepsGql}>
                {(addHistoricalSteps) => (
                    <SignUpRewardScreen
                        onCollectPress={this.onCollect(addHistoricalSteps)}
                        reward={data.upsertPassiveChallenge.challenge.yuCoinAwarded}
                    />
                )}
            </AddHistoricalStepsMutation>
        );
    }

    private onCollect = (addHistoricalSteps: AddHistoricalStepsMutationFunction) => async () => {
        try {
            const { results: payload } = await querySteps(60, 1);

            if (payload.length > 0) {
                await addHistoricalSteps({
                    variables: { payload, shouldAward: false }
                });
            }
        } catch (e) {
            Logger.logIntercomEvent("historical_steps_sync_failed", { message: e.message });
        }

        await setNextRoot();
    };
}

const SignUpRewardContainer = (props: IProps & ConnectedDispatch) => (
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

const mapDispatchToProps = {
    getUserStart
};

export default connect<{}, ConnectedDispatch>(
    null,
    mapDispatchToProps
)(SignUpRewardContainer);
