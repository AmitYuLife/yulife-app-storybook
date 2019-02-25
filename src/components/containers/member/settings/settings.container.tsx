import { MODALS } from "@navigation/routes";
import { IReduxState } from "@redux/_core/reducers";
import { UpdateNofiticationPayload, updateNotificationSettings } from "@redux/notifications/notifications.actions";
import { getNotifications } from "@redux/notifications/notifications.selectors";
import { updateLeaderboardConsent } from "@redux/user/user.actions";
import { getLeaderboards, getUserFeatures, Leaderboard } from "@redux/user/user.selectors";
import { SettingsScreen } from "@screens/index";
import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IOwnProps {
    componentId: string;
}

type IProps = IOwnProps & ConnectedState & ConnectedDispatch;

class SettingsContainer extends PureComponent<IProps> {
    public render() {
        const { features, leaderboards = [], notifications = {} as any } = this.props;
        const leaderboard = {
            isVisible: true,
            items: leaderboards.map((l) => ({
                name: l.name,
                onPress: this.handleUpdateLeaderboardConsent(l),
                status: l.consent ? "active" : "inactive"
            })),
            name: "leaderboard"
        } as any;
        const notification = {
            isVisible: features.showNotifications,
            items: Object.keys(notifications).map((key) => ({
                ...notifications[key],
                key,
                onPress: this.handleNotificationPress({ ...notifications[key], key })
            })),
            name: "notifications"
        } as any;

        return <SettingsScreen onPressClose={this.handleClose} sections={[notification, leaderboard]} />;
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
                      "This means you won’t be able to see how well you’re doing compared to others in your business or workspace."
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
                      "We enjoy a bit of friendly competition. By turning on leaderboards, others within your organisation or workspace will be able to see summary details of your activity.  You’ll be able to stop sharing your activity at any time in your settings."
              };

        Navigation.showModal({
            component: {
                id: MODALS.generic,
                name: MODALS.generic,
                passProps
            }
        });
    };

    private handleNotificationPress = (n: UpdateNofiticationPayload) => () => {
        if (n.time) {
            // open a screen with setup
        }
        this.props.updateNotificationSettings({ ...n, active: !n.active });
    };

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    features: getUserFeatures(state),
    leaderboards: getLeaderboards(state),
    notifications: getNotifications(state)
});

const mapDispatchToProps = {
    updateLeaderboardConsent,
    updateNotificationSettings
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(SettingsContainer);
