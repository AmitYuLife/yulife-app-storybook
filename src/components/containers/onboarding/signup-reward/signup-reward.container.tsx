import * as React from "react";
import { PureComponent } from "react";
import UpsertOnboardingChallengeMutation, {
    upsertOnboardingChallengeGql,
    UpsertOnboardingChallengeMutationType,
    UpsertOnboardingChallengeStateType
} from "../../../../graphql/challenges/upsertOnboardingChallenge.gql";
import { setAuthenticatedRoot } from "../../../../navigation/root";
import { Loading } from "../../../atoms";
import { SignUpRewardScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IChildProps extends UpsertOnboardingChallengeStateType, IProps {
    upsertOnboardingChallenge: UpsertOnboardingChallengeMutationType;
}

interface IState {
    coins: number;
}

class SignUpRewardContainerChild extends PureComponent<IChildProps, IState> {
    public state: IState = {
        coins: null
    };

    public async componentDidMount() {
        await this.props.upsertOnboardingChallenge();
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
            <SignUpRewardScreen onCollectPress={this.onCollect} reward={data.upsertPassiveChallenge.yuCoinAwarded} />
        );
    }

    private onCollect = () => {
        setAuthenticatedRoot();
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
