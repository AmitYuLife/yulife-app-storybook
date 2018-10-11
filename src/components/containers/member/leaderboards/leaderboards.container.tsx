import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetLeaderboardVariables, MobileConsentInput } from "../../../../graphql/_core/schema";
import GetLeaderboardQuery, { getLeaderboardGql } from "../../../../graphql/member/getLeaderboard.gql";
import { IReduxState } from "../../../../redux/_core/reducers";
import { updateUserConsent, UpdateUserConsentAction } from "../../../../redux/user/user.actions";
import { userConsentSelector } from "../../../../redux/user/user.selectors";
import { Loading } from "../../../atoms";
import { GenericModal } from "../../../modals";
import { LeaderboardsScreen } from "../../../screens";

interface IConnectedState {
    consent: MobileConsentInput;
}

interface IConnectedDispatch {
    updateUserConsent: UpdateUserConsentAction;
}

interface IProps {
    componentId: string;
}

interface IState {
    sortBy: string;
}

type Props = IConnectedState & IConnectedDispatch & IProps;

class LeaderboardsContainer extends PureComponent<Props, IState> {
    public state = {
        sortBy: "steps"
    };

    public render() {
        const { sortBy } = this.state;
        const { consent } = this.props;

        if (!consent.companyLeaderboard) {
            const handleOnPress = () => this.props.updateUserConsent({ companyLeaderboard: true });

            /* tslint:disable:max-line-length */
            return (
                <GenericModal
                    onPress={handleOnPress}
                    heading="turn on leaderboard?"
                    subheading="We enjoy a bit of friendly competition. By turning on leaderboards, others within your organisation or workspace will be able to see summary details of your activity.  You’ll be able to stop sharing your activity at any time in your settings."
                    ctaLabel="give me leaderboards"
                    onPressSecondary={this.handleClose}
                    ctaLabelSecondary="no thanks"
                />
            );
            /* tslint:enable:max-line-length */
        }

        return (
            <GetLeaderboardQuery query={getLeaderboardGql} fetchPolicy="network-only" variables={{ sortBy }}>
                {({ loading, data, refetch }) => {
                    if (loading) {
                        return <Loading />;
                    }

                    const onCoinPress = this.handleRefetch(refetch, "coins");
                    const onStepsPress = this.handleRefetch(refetch, "steps");

                    return (
                        <LeaderboardsScreen
                            items={data.getLeaderboard || []}
                            onCoinPress={onCoinPress}
                            onPressClose={this.handleClose}
                            onStepsPress={onStepsPress}
                            sortBy={sortBy}
                        />
                    );
                }}
            </GetLeaderboardQuery>
        );
    }

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    }

    private handleRefetch = (refetch: (variables: GetLeaderboardVariables) => void, sortBy: string) => () => {
        this.setState({ sortBy }, () => refetch({ sortBy }));
    }
}

const mapStateToProps = (state: IReduxState) => ({
    consent: userConsentSelector(state)
});

const mapDispatchToProps = {
    updateUserConsent
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(LeaderboardsContainer);
