import { ILeaderboard } from "@app/redux/user/user.reducer";
import { GetLeaderboardVariables } from "@graphql/_core/schema";
import Logger from "@services/logging/logger";
import React from "react";
import { BackHandler, Linking, NativeEventSubscription } from "react-native";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { COLOURS } from "../../../../components/molecules";
import GetLeaderboardQuery, { getLeaderboardGql } from "../../../../graphql/member/getLeaderboard.gql";
import { IMainTabsProps } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getAppState, getOfflineState } from "../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { getCurrentLevel, getHasNotification } from "../../../../redux/levels/levels.selectors";
import { updateLeaderboardConsent } from "../../../../redux/user/user.actions";
import { getAllLeaderboards, getConsentedLeaderboards } from "../../../../redux/user/user.selectors";
import { getCurrentWorld } from "../../../../services/utils";
import { LeaderboardOfflineScreen, LeaderboardsScreen } from "../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;
interface IProps {
    componentId: string;
}

interface IState {
    isLoading: boolean;
    sortBy: string;
    leaderboardId: string;
    activeLeaderboardIndex: number;
}

type Props = ConnectedState & ConnectedDispatch & IProps & IMainTabsProps;

class LeaderboardsContainer extends React.Component<Props, IState> {
    public state: IState = {
        isLoading: true,
        sortBy: "steps",
        ...getInitialLeaderboard(this.props.leaderboards)
    };
    private backHandler: NativeEventSubscription;
    private backPressed: number = 0;

    constructor(props: Props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidAppear() {
        this.backPressed = 0;
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            if (this.backPressed > 0) {
                return false;
            }

            this.backPressed += 1;
            return true;
        });
    }

    public componentDidDisappear() {
        if (this.backHandler) {
            this.backHandler.remove();
        }
    }

    public componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 250);
    }

    public shouldComponentUpdate(nextProps: Props, nextState: IState) {
        return (
            nextState.isLoading !== this.state.isLoading ||
            nextState.sortBy !== this.state.sortBy ||
            nextState.leaderboardId !== this.state.leaderboardId ||
            nextState.activeLeaderboardIndex !== this.state.activeLeaderboardIndex ||
            nextProps.totalCoins !== this.props.totalCoins ||
            nextProps.hasNotification !== this.props.hasNotification ||
            nextProps.currentLevel !== this.props.currentLevel ||
            nextProps.isOffline !== this.props.isOffline ||
            nextProps.appState !== this.props.appState
        );
    }

    public render() {
        const { sortBy, activeLeaderboardIndex, leaderboardId } = this.state;
        const {
            leaderboards = [],
            hasNotification,
            labels,
            currentLevel,
            totalCoins,
            onLeftMenuPress,
            isOffline,
            copy,
            componentId,
            appState
        } = this.props;
        const currentWorld = getCurrentWorld(currentLevel);
        const navbarColour = getNavbarColourScheme(currentWorld);

        return (
            <GetLeaderboardQuery
                query={getLeaderboardGql}
                fetchPolicy="cache-and-network"
                variables={{ leaderboardId, sortBy }}
            >
                {({ loading, data, refetch }) => {
                    const coinsRefetch = this.handleRefetch(refetch, "coins");
                    const stepsRefetch = this.handleRefetch(refetch, "steps");
                    const mindfulMinsRefetch = this.handleRefetch(refetch, "mindful");

                    if (isOffline && (!data || !data.getLeaderboard)) {
                        return (
                            <LeaderboardOfflineScreen
                                hasNotification={hasNotification}
                                currentWorld={currentWorld}
                                totalCoins={totalCoins}
                                labels={labels}
                                onLeftMenuPress={onLeftMenuPress}
                                navbarColour={navbarColour}
                            />
                        );
                    }

                    const initialScrollIndex =
                        data && data.getLeaderboard != null
                            ? (data.getLeaderboard as any).findIndex(
                                  (item: any) => item.id === `lead_${data.getCurrentUser.id}`
                              )
                            : 0;

                    return (
                        <LeaderboardsScreen
                            componentId={componentId}
                            currentWorld={currentWorld}
                            isLoading={loading}
                            initialScrollIndex={initialScrollIndex}
                            leaderboards={leaderboards || []}
                            items={data.getLeaderboard || []}
                            onHandleCoinsRefetch={coinsRefetch}
                            onHandleStepsRefetch={stepsRefetch}
                            onHandleMindfulMinsRefetch={mindfulMinsRefetch}
                            activeLeaderboardIndex={activeLeaderboardIndex}
                            onLeaderboardChange={this.handleLeaderboardChange}
                            sortBy={sortBy}
                            onRefetch={() => refetch()}
                            hasNotification={hasNotification}
                            labels={labels}
                            totalCoins={totalCoins}
                            onLeftMenuPress={onLeftMenuPress}
                            onAllowLeaderboard={this.allowLeaderboard}
                            onRefuseConsent={this.refuseConsent}
                            onPrivacyPolicyPress={this.onPrivacyPolicyPress}
                            copy={copy.turnBoardOn}
                            isMindfulAvailable={false}
                            navbarColour={navbarColour}
                            appState={appState}
                        />
                    );
                }}
            </GetLeaderboardQuery>
        );
    }

    private onPrivacyPolicyPress = async () => {
        try {
            await Linking.openURL(Config.PRIVACY_POLICY_URL);
        } catch (e) {
            // tslint:disable-next-line
            console.log("Unable to open privacy policy link:", e);
        }
    };

    private handleRefetch = (refetch: (variables: GetLeaderboardVariables) => void, sortBy: string) => () => {
        this.setState({ sortBy }, () => refetch({ sortBy }));
    };

    private handleLeaderboardChange = (index: number) => {
        const leaderboardId = this.props.leaderboards[index].leaderboardId;

        this.setState({ leaderboardId, activeLeaderboardIndex: index });
        Logger.logEvent("screen_view", {
            name:
                leaderboardId.length === 32
                    ? "yulife.member.Leaderboards.Primary"
                    : "yulife.member.Leaderboards.Secondary",
            leaderboard_id: leaderboardId
        });
    };

    private refuseConsent = () => {
        const { activeLeaderboardIndex } = this.state;
        const { leaderboards } = this.props;
        const nextIndex = activeLeaderboardIndex + 1 === leaderboards.length ? 0 : activeLeaderboardIndex + 1;
        const leaderboardId = leaderboards[nextIndex].leaderboardId;
        this.setState({
            leaderboardId,
            activeLeaderboardIndex: nextIndex
        });
    };

    private allowLeaderboard = () => {
        const { activeLeaderboardIndex } = this.state;
        const { leaderboards, updateLeaderboardConsent: updateConsent } = this.props;
        const company = leaderboards[activeLeaderboardIndex];
        updateConsent({ leaderboardId: company.leaderboardId, consent: true });
    };
}

const getInitialLeaderboard = (leaderboards: ILeaderboard[]) => {
    const leaderboardWithConsentIndex = leaderboards.findIndex(({ consent }) => consent);
    const activeLeaderboardIndex = leaderboardWithConsentIndex !== -1 ? leaderboardWithConsentIndex : 0;
    const leaderboard = leaderboards[activeLeaderboardIndex];

    return {
        leaderboardId: leaderboard.leaderboardId,
        activeLeaderboardIndex
    };
};

const mapStateToProps = (state: IReduxState) => ({
    copy: getCopy(state, "leaderboards"),
    totalCoins: getTotalCoins(state),
    leaderboards: getAllLeaderboards(state),
    consentedLeaderboards: getConsentedLeaderboards(state),
    hasNotification: getHasNotification(state),
    currentLevel: getCurrentLevel(state),
    isOffline: getOfflineState(state),
    appState: getAppState(state)
});

const mapDispatchToProps = {
    updateLeaderboardConsent
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(LeaderboardsContainer);

function getNavbarColourScheme(currentWorld: number): COLOURS {
    switch (currentWorld) {
        case 3:
            return COLOURS.MOUNTAIN;
        case 2:
            return COLOURS.DESERT;
        case 1:
        case 0:
        default:
            return COLOURS.LIGHT;
    }
}
