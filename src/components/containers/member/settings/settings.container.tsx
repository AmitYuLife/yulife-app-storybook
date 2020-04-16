import { MODALS } from "@navigation/constants";
import { IReduxState } from "@redux/_core/reducers";
import { UpdateNofiticationPayload, updateNotificationSettings } from "@redux/notifications/notifications.actions";
import { getNotifications } from "@redux/notifications/notifications.selectors";
import { updateConnectionStart, updateLeaderboardConsent } from "@redux/user/user.actions";
import {
    Connection,
    getAcceptedLeaderboards,
    getUserConnections,
    getUserFeatures,
    Leaderboard
} from "@redux/user/user.selectors";
import { SettingsScreen } from "@screens/index";
import moment from "moment";
import * as React from "react";
import { PureComponent } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { getCopy } from "../../../../redux/copy/copy.selectors";

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
        const { connections, features, leaderboards = [], notifications = {} as any } = this.props;

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

        const connection = {
            isVisible: features.showConnections,
            items: connections.map((c) => ({
                ...c,
                lastUpdated: features.showLastSynced ? c.lastUpdated : null,
                onPress: this.handleConnectionItemPress(c),
                onPressInfo: this.handleConnectionInfoPress(c)
            })),
            name: "connections"
        } as any;

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
                    sections={[notification, connection, leaderboard]}
                />
                <DateTimePicker
                    date={modalDate}
                    mode="time"
                    headerTextIOS="Set time"
                    isVisible={isTimeModalVisible}
                    onConfirm={this.handleTimeModalConfirm}
                    onCancel={this.handleTimeModalCancel}
                />
            </>
        );
    }

    private handleConnectionItemPress = (c: Connection) => () => {
        this.props.updateConnectionStart(c);
    };

    private handleConnectionInfoPress = (c: Connection) => () => {
        const {
            copySettings: { heading, subheading, ctaLabel }
        } = this.props;
        Navigation.showModal({
            component: {
                id: MODALS.info,
                name: MODALS.info,
                passProps: {
                    onPress: () => Navigation.dismissModal(MODALS.info),
                    type: c.name,
                    heading: heading.replace("${connection}", c.name.charAt(0).toUpperCase() + c.name.slice(1)),
                    subheading,
                    ctaLabel
                }
            }
        });
    };

    private handleUpdateLeaderboardConsent = (l: Leaderboard) => () => {
        const { turnBoardOff, turnBoardOn } = this.props.copyLeaderBoard;
        const dismissModal = () => Navigation.dismissModal(MODALS.generic);
        const passProps = l.consent
            ? {
                  ctaLabel: turnBoardOff.ctaLabel,
                  ctaLabelSecondary: turnBoardOff.ctaLabelSecondary,
                  heading: turnBoardOff.heading,
                  onPress: dismissModal,
                  onPressSecondary: () => {
                      this.props.updateLeaderboardConsent({
                          consent: !l.consent,
                          leaderboardId: l.leaderboardId
                      });
                      dismissModal();
                  },
                  subheading: turnBoardOff.subheading
              }
            : {
                  ctaLabel: turnBoardOn.ctaLabel,
                  ctaLabelSecondary: turnBoardOn.ctaLabelSecondary,
                  heading: turnBoardOn.heading,
                  onPress: () => {
                      this.props.updateLeaderboardConsent({
                          consent: !l.consent,
                          leaderboardId: l.leaderboardId
                      });
                      dismissModal();
                  },
                  onPressSecondary: dismissModal,
                  subheading: turnBoardOn.subheading
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
    connections: getUserConnections(state),
    features: getUserFeatures(state),
    leaderboards: getAcceptedLeaderboards(state),
    notifications: getNotifications(state),
    copyLeaderBoard: getCopy(state, "leaderboards"),
    copySettings: getCopy(state, "settingsInfo")
});

const mapDispatchToProps = {
    updateConnectionStart,
    updateLeaderboardConsent,
    updateNotificationSettings
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(SettingsContainer);
