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
        const dismissModal = () => Navigation.dismissModal(MODALS.generic);
        const passProps = l.consent
            ? {
                  ctaLabel: "keep it on!",
                  ctaLabelSecondary: "turn it off",
                  heading: "turn it off?",
                  onPress: dismissModal,
                  onPressSecondary: () => {
                      this.props.updateLeaderboardConsent({
                          consent: !l.consent,
                          leaderboardId: l.leaderboardId
                      });
                      dismissModal();
                  },
                  subheading:
                  /* tslint:disable-next-line */
                      "This means you won’t be able to see how well you’re doing compared to others in your business or workspace.",
              }
            : {
                  ctaLabel: "give me leaderboards",
                  ctaLabelSecondary: "no thanks",
                  heading: "turn on leaderboard?",
                  onPress: () => {
                      this.props.updateLeaderboardConsent({
                          consent: !l.consent,
                          leaderboardId: l.leaderboardId
                      });
                      dismissModal();
                  },
                  onPressSecondary: dismissModal,
                  subheading:
                  /* tslint:disable-next-line */
                      "We enjoy a bit of friendly competition. By turning on leaderboards, others within your organisation or workspace will be able to see summary details of your activity.  You’ll be able to stop sharing your activity at any time in your settings.",
              };

        Navigation.showModal({
            component: {
                id: MODALS.generic,
                name: MODALS.generic,
                passProps
            }
        });
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
