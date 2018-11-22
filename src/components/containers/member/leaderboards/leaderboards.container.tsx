import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetLeaderboardVariables } from "../../../../graphql/_core/schema";
import GetLeaderboardQuery, { getLeaderboardGql } from "../../../../graphql/member/getLeaderboard.gql";
import { IReduxState } from "../../../../redux/_core/reducers";
import { updateLeaderboardConsent, UpdateLeaderboardConsentAction } from "../../../../redux/user/user.actions";
import { Leaderboard, leaderboardsSelector } from "../../../../redux/user/user.selectors";
import { Loading } from "../../../atoms";
import { GenericModal } from "../../../modals";
import { LeaderboardsScreen } from "../../../screens";

interface IConnectedState {
    leaderboards: Leaderboard[];
}

interface IConnectedDispatch {
    updateLeaderboardConsent: UpdateLeaderboardConsentAction;
}

interface IProps {
    componentId: string;
}

interface IState {
    isLoading: boolean;
    sortBy: string;
}

type Props = IConnectedState & IConnectedDispatch & IProps;

class LeaderboardsContainer extends PureComponent<Props, IState> {
    public state = {
        isLoading: true,
        sortBy: "steps"
    };

    public componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 250);
    }

    public render() {
        const { sortBy } = this.state;
        const { leaderboards = [] } = this.props;

        if (!leaderboards.length) {
            return (
                <GenericModal
                    onPress={this.handleClose}
                    heading="no leaderboards!"
                    subheading="Sorry. There are no leaderboards you belong to."
                    ctaLabel="back"
                />
            );
        }

        const companyLeaderboard = leaderboards[0];

        if (!companyLeaderboard.consent) {
            /* tslint:disable:max-line-length */
            return (
                <GenericModal
                    onPress={this.allowLeaderboard}
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
                {({ loading, data = { getLeaderboard: [], getCurrentUser: { id: null } }, refetch }) => {
                    if (loading) {
                        return <Loading />;
                    }

                    const onCoinPress = this.handleRefetch(refetch, "coins");
                    const onStepsPress = this.handleRefetch(refetch, "steps");
                    const initialScrollIndex = (data.getLeaderboard as any).findIndex(
                        (item: any) => item.id === `lead_${data.getCurrentUser.id}`
                    );

                    return (
                        <LeaderboardsScreen
                            initialScrollIndex={initialScrollIndex}
                            items={data.getLeaderboard}
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

    private allowLeaderboard = () => {
        const { leaderboards, updateLeaderboardConsent: updateConsent } = this.props;
        const company = leaderboards[0];
        updateConsent({ leaderboardId: company.leaderboardId, consent: true });
    }
}

const mapStateToProps = (state: IReduxState) => ({
    leaderboards: leaderboardsSelector(state)
});

const mapDispatchToProps = {
    updateLeaderboardConsent
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(LeaderboardsContainer);
