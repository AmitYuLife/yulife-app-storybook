import { MODALS } from "@navigation/constants";
import { IReduxState } from "@redux/_core/reducers";
import { UpdateNofiticationPayload, updateNotificationSettings } from "@redux/notifications/notifications.actions";
import { getNotifications } from "@redux/notifications/notifications.selectors";
import { updateLeaderboardConsent } from "@redux/user/user.actions";
import { getAcceptedLeaderboards, getUserFeatures, Leaderboard } from "@redux/user/user.selectors";
import { SettingsScreen } from "@screens/index";
import moment from "moment";
import * as React from "react";
import { PureComponent } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IOwnProps {
    componentId: string;
}

type IProps = IOwnProps & ConnectedState & ConnectedDispatch;

interface IState {
    isTimeModalVisible: boolean;
    modalDate: Date;
    selectedNotification: UpdateNofiticationPayload;
}

class SettingsContainer extends PureComponent<IProps, IState> {
    public state: IState = {
        isTimeModalVisible: false,
        modalDate: null,
        selectedNotification: null
    };

    public render() {
        const { isTimeModalVisible, modalDate } = this.state;
        const { features, leaderboards = [], notifications = {} as any } = this.props;
        const leaderboard = {
            isVisible: true,
            items: leaderboards.map((l) => ({
                isLoading: l.isLoading,
                name: l.name,
                onPress: this.handleUpdateLeaderboardConsent(l),
                status: l.consent ? "active" : "inactive"
            })),
            name: "leaderboard"
        } as any;

        if (features.showCreateLeaderboard) {
            leaderboard.items.push({
                isLoading: false,
                name: "create",
                onPress: this.handleCreateNewLeaderboard,
                status: "create"
            });
        }

        const notification = {
            isVisible: features.showNotifications,
            items: Object.keys(notifications).map((key) => ({
                ...notifications[key],
                key,
                ...this.getNotificationPressFunctions({ ...notifications[key], key })
            })),
            name: "notifications"
        } as any;

        return (
            <>
                <SettingsScreen
                    onCreateLeaderboard={this.handleCreateNewLeaderboard}
                    onPressClose={this.handleClose}
                    sections={[notification, leaderboard]}
                />
                <DateTimePicker
                    date={modalDate}
                    mode="time"
                    isVisible={isTimeModalVisible}
                    onConfirm={this.handleTimeModalConfirm}
                    onCancel={this.handleTimeModalCancel}
                />
            </>
        );
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
                  ctaLabel: "give me leaderboard",
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

    private handleCreateNewLeaderboard = () => {
        Navigation.showModal({
            component: {
                id: MODALS.createLeaderboard,
                name: MODALS.createLeaderboard
            }
        });
    };

    private getNotificationPressFunctions = (n: UpdateNofiticationPayload) => ({
        onSwitchPress: () => {
            this.props.updateNotificationSettings({ ...n, active: !n.active });
        },
        onTimePress: () => {
            const currentDate = moment().format("YYYY-MM-DD");
            this.setState({
                isTimeModalVisible: true,
                modalDate: moment(`${currentDate}T${n.time}`).toDate(),
                selectedNotification: n
            });
        }
    });

    private handleTimeModalConfirm = (date: Date) => {
        const { selectedNotification } = this.state;
        const time = moment(date.toISOString()).format("HH:mm");
        this.setState({ isTimeModalVisible: false }, () => {
            this.props.updateNotificationSettings({ ...selectedNotification, time });
        });
    };

    private handleTimeModalCancel = () => {
        this.setState({ isTimeModalVisible: false });
    };

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    features: getUserFeatures(state),
    leaderboards: getAcceptedLeaderboards(state),
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
