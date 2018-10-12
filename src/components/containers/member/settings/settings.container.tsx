import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { MODALS } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { updateLeaderboardConsent, UpdateLeaderboardConsentAction } from "../../../../redux/user/user.actions";
import { Leaderboard, leaderboardsSelector } from "../../../../redux/user/user.selectors";
import { SettingsScreen } from "../../../screens";

interface IConnectedState {
    leaderboards: Leaderboard[];
}

interface IConnectedDispatch {
    updateLeaderboardConsent: UpdateLeaderboardConsentAction;
}

interface IOwnProps {
    componentId: string;
}

type IProps = IOwnProps & IConnectedState & IConnectedDispatch;

class SettingsContainer extends PureComponent<IProps> {
    public render() {
        const { leaderboards = [] } = this.props;
        const leaderboard = {
            items: leaderboards.map((l) => ({
                name: l.name,
                onPress: this.handleUpdateLeaderboardConsent(l),
                status: l.consent ? "active" : "inactive"
            })),
            name: "leaderboard"
        } as any;

        return <SettingsScreen onPressClose={this.handleClose} sections={[leaderboard]} />;
    }

    private handleUpdateLeaderboardConsent = (l: Leaderboard) => () => {
        if (l.consent) {
            const onPress = () => Navigation.dismissModal(MODALS.generic);

            Navigation.showModal({
                component: {
                    id: MODALS.generic,
                    name: MODALS.generic,
                    passProps: {
                        ctaLabel: "keep it on!",
                        ctaLabelSecondary: "turn it off",
                        heading: "turn it off?",
                        onPress,
                        onPressSecondary: () => {
                            this.props.updateLeaderboardConsent({
                                consent: !l.consent,
                                leaderboardId: l.leaderboardId
                            });
                            onPress();
                        },
                        /* tslint:disable-next-line */
                        subheading: "This means you won’t be able to see how well you’re doing compared to others in your business or workspace."
                    }
                }
            });
        } else {
            this.props.updateLeaderboardConsent({
                consent: !l.consent,
                leaderboardId: l.leaderboardId
            });
        }
    }

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
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
)(SettingsContainer);
