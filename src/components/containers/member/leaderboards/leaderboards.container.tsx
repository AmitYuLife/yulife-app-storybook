import { GetLeaderboardVariables } from "@graphql/_core/schema";
import Logger from "@services/logging/logger";
import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import GetLeaderboardQuery, { getLeaderboardGql } from "../../../../graphql/member/getLeaderboard.gql";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { updateLeaderboardConsent } from "../../../../redux/user/user.actions";
import { getConsentedLeaderboards, getUserFeatures } from "../../../../redux/user/user.selectors";
import { GenericModal } from "../../../modals";
import GenericConnectionErrorModal from "../../../modals/generic-modal/generic-connection-error-modal";
import { LeaderboardsScreen } from "../../../screens";

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
        const { sortBy } = this.state;
        const { leaderboards = [], features = {}, copy } = this.props;

        const [companyLeaderboard, ...consentedLeaderboards] = leaderboards;

        if (
            !companyLeaderboard.consent &&
            (features.showAdvancedLeaderboards ? !consentedLeaderboards || consentedLeaderboards.length < 1 : true)
        ) {
            /* tslint:disable:max-line-length */
            return (
                <GenericModal
                    isPrimaryLoading={companyLeaderboard.isLoading}
                    onPress={this.allowLeaderboard}
                    heading={copy.turnBoardOn.heading}
                    subheading={copy.turnBoardOn.subheading}
                    ctaLabel={copy.turnBoardOn.ctaLabel}
                    onPressSecondary={this.handleClose}
                    ctaLabelSecondary={copy.turnBoardOn.ctaLabelSecondary}
                />
            );
            /* tslint:enable:max-line-length */
        }

        const leaderboardId =
            this.state.leaderboardId ||
            (companyLeaderboard.consent ? companyLeaderboard.leaderboardId : consentedLeaderboards[0].leaderboardId);

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

                    return (
                        <LeaderboardsScreen
                            isLoading={loading}
                            initialScrollIndex={initialScrollIndex}
                            leaderboards={companyLeaderboard.consent ? leaderboards : consentedLeaderboards || []}
                            items={data.getLeaderboard || []}
                            onHandleCoinsRefetch={coinsRefetch}
                            onPressClose={this.handleClose}
                            onHandleStepsRefetch={stepsRefetch}
                            onLeaderboardChange={this.handleLeaderboardChange}
                            sortBy={sortBy}
                            onRefetch={() => refetch()}
                            isAdvanced={features.showAdvancedLeaderboards}
                            copy={copy}
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
        const leaderboardId = leaderboards[index].leaderboardId;

        this.setState({ leaderboardId });
        Logger.logEvent("screen_view", {
            name:
                leaderboardId.length === 32
                    ? "yulife.member.Leaderboards.Primary"
                    : "yulife.member.Leaderboards.Secondary",
            leaderboard_id: leaderboardId
        });
    };

    private allowLeaderboard = () => {
        const { leaderboards, updateLeaderboardConsent: updateConsent } = this.props;
        const company = leaderboards[0];
        updateConsent({ leaderboardId: company.leaderboardId, consent: true });
    };
}

const mapStateToProps = (state: IReduxState) => ({
    features: getUserFeatures(state),
    leaderboards: getConsentedLeaderboards(state),
    copy: getCopy(state, "leaderboards")
});

const mapDispatchToProps = {
    updateLeaderboardConsent
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(LeaderboardsContainer);
