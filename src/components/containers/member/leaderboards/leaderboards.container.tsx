/* tslint:disable */
import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetLeaderboardVariables } from "../../../../graphql/_core/schema";
import GetLeaderboardQuery, { getLeaderboardGql } from "../../../../graphql/member/getLeaderboard.gql";
import { IReduxState } from "../../../../redux/_core/reducers";
import { updateLeaderboardConsent } from "../../../../redux/user/user.actions";
import { getLeaderboards, getUserFeatures } from "../../../../redux/user/user.selectors";
import { GenericModal } from "../../../modals";
import GenericConnectionErrorModal from "../../../modals/generic-modal/generic-error-modal";
import { LeaderboardsScreen, SimpleLeaderboardsScreen } from "../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
    componentId: string;
}

interface IState {
    isLoading: boolean;
    sortBy: string;
    leaderboardId: string;
}

type Props = ConnectedState & ConnectedDispatch & IProps;

class LeaderboardsContainer extends PureComponent<Props, IState> {
    public state: IState = {
        isLoading: true,
        sortBy: "steps",
        leaderboardId: null
    };

    public componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 250);
    }

    public render() {
        const { sortBy, leaderboardId } = this.state;
        const { leaderboards = [], features = {} } = this.props;

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
                    isPrimaryLoading={companyLeaderboard.isLoading}
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
            <GetLeaderboardQuery
                query={getLeaderboardGql}
                fetchPolicy="cache-and-network"
                variables={{ leaderboardId, sortBy }}
            >
                {({ error, loading, data, refetch }) => {
                    if (error && (!data || !data.getLeaderboard || !data.getCurrentUser)) {
                        return <GenericConnectionErrorModal onPress={this.handleClose} />;
                    }

                    const coinsRefetch = this.handleRefetch(refetch, "coins");
                    const stepsRefetch = this.handleRefetch(refetch, "steps");
                    const initialScrollIndex =
                        data &&
                        data.getLeaderboard != null &&
                        (data.getLeaderboard as any).findIndex(
                            (item: any) => item.id === `lead_${data.getCurrentUser.id}`
                        );

                    if (features.showAdvancedLeaderboards) {
                        return (
                            <LeaderboardsScreen
                                isLoading={loading}
                                initialScrollIndex={initialScrollIndex}
                                leaderboards={leaderboards}
                                items={data.getLeaderboard || []}
                                onHandleCoinsRefetch={coinsRefetch}
                                onPressClose={this.handleClose}
                                onHandleStepsRefetch={stepsRefetch}
                                onLeaderboardChange={this.handleLeaderboardChange}
                                sortBy={sortBy}
                            />
                        );
                    }

                    return (
                        <SimpleLeaderboardsScreen
                            isLoading={loading}
                            initialScrollIndex={initialScrollIndex}
                            items={data.getLeaderboard || []}
                            onPressClose={this.handleClose}
                            sortBy={sortBy}
                            onRefetch={stepsRefetch}
                        />
                    );
                }}
            </GetLeaderboardQuery>
        );
    }

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    };

    private handleRefetch = (refetch: (variables: GetLeaderboardVariables) => void, sortBy: string) => () => {
        this.setState({ sortBy }, () => refetch({ sortBy }));
    };

    private handleLeaderboardChange = (index: number) => {
        const { leaderboards } = this.props;
        this.setState({ leaderboardId: leaderboards[index].leaderboardId });
    };

    private allowLeaderboard = () => {
        const { leaderboards, updateLeaderboardConsent: updateConsent } = this.props;
        const company = leaderboards[0];
        updateConsent({ leaderboardId: company.leaderboardId, consent: true });
    };
}

const mapStateToProps = (state: IReduxState) => ({
    features: getUserFeatures(state),
    leaderboards: getLeaderboards(state)
});

const mapDispatchToProps = {
    updateLeaderboardConsent
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(LeaderboardsContainer);
