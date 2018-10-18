import * as React from "react";
import { PureComponent } from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import UpsertOnboardingChallengeMutation, {
    upsertOnboardingChallengeGql,
    UpsertOnboardingChallengeMutationType,
    UpsertOnboardingChallengeStateType
} from "../../../../graphql/challenges/upsertOnboardingChallenge.gql";
import { setNextRoot } from "../../../../navigation/root";
import { Loading } from "../../../atoms";
import { SignUpRewardScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IChildProps extends UpsertOnboardingChallengeStateType, IProps {
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
            <SignUpRewardScreen
                onCollectPress={this.onCollect}
                reward={data.upsertPassiveChallenge.challenge.yuCoinAwarded}
            />
        );
    }

    private onCollect = () => {
        setNextRoot();
    }
}

const SignUpRewardContainer = (props: IProps) => (
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

export default SignUpRewardContainer;
