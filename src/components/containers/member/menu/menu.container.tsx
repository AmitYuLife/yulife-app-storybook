import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import Wootric from "@services/wootric";
import * as React from "react";
import { PureComponent } from "react";
import DeviceInfo from "react-native-device-info";
import Intercom from "react-native-intercom";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getRouteState } from "../../../../redux/app/app.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { getPushNotifications } from "../../../../redux/device/device.selectors";
import { logOut, openMemberZone } from "../../../../redux/user/user.actions";
import { getUserBusiness, getUserFeatures } from "../../../../redux/user/user.selectors";
import { MenuScreen } from "../../../screens";
import assets, { LINKS, LinkTypes } from "./assets";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDipatch = typeof mapDispatchToProps;

type Props = ConnectedState & ConnectedDipatch;

class MenuContainer extends PureComponent<Props> {
    private deviceVersion = DeviceInfo.getVersion();

    public render() {
        const { features = {}, isAlphaUser } = this.props;

        return (
            <MenuScreen
                onPressClose={this.handleClose}
                links={[
                    {
                        condition: features.showStats,
                        label: "statistics",
                        onPress: this.handlePressLink(LINKS.STATS),
                        source: assets[LINKS.STATS]
                    },
                    {
                        condition: features.showActivity,
                        label: "activity history",
                        onPress: this.handlePressLink(LINKS.ACTIVITY),
                        source: assets[LINKS.ACTIVITY]
                    },
                    {
                        condition: true,
                        label: "member zone",
                        onPress: this.handlePressLink(LINKS.MEMBER),
                        source: assets[LINKS.MEMBER]
                    },
                    {
                        condition: !isAlphaUser,
                        label: "member services",
                        onPress: this.handlePressLink(LINKS.MEMBER_SERVICES),
                        source: assets[LINKS.MEMBER_SERVICES]
                    },
                    {
                        condition: true,
                        label: "settings",
                        onPress: this.handlePressLink(LINKS.SETTINGS),
                        source: assets[LINKS.SETTINGS]
                    },
                    {
                        condition: true,
                        label: "chat",
                        onPress: this.handlePressLink(LINKS.CHAT),
                        source: assets[LINKS.CHAT]
                    },
                    {
                        // TODO:ENG-95 true for easy testing, remove
                        condition: true,
                        label: "feedback",
                        onPress: this.handlePressLink(LINKS.SURVEY),
                        source: assets[LINKS.SURVEY]
                    },
                    {
                        condition: true,
                        label: "log out",
                        onPress: this.handlePressLink(LINKS.LOGOUT),
                        source: assets[LINKS.LOGOUT]
                    }
                ]}
                version={this.deviceVersion}
                onDebugPress={features.showDebug ? this.handlePressLink(LINKS.DEBUG) : null}
            />
        );
    }

    private handlePressLink = (link: LinkTypes) => (): null => {
        switch (link) {
            case LINKS.STATS:
                this.handlePush(ROUTES.stats);
                return null;
            case LINKS.ACTIVITY:
                this.handlePush(ROUTES.activityHistory);
                return null;
            case LINKS.SETTINGS:
                this.handlePush(ROUTES.settings);
                return null;
            case LINKS.CHAT:
                this.handleIntercom();
                return null;
            case LINKS.SURVEY:
                this.handleSurvey();
                return null;
            case LINKS.DEBUG:
                this.handlePush(ROUTES.debug);
                return null;
            case LINKS.LEADERBOARD:
                this.handlePush(ROUTES.leaderboards);
                return null;
            case LINKS.LOGOUT:
                this.props.logOut();
                return null;
            case LINKS.MEMBER:
                this.handleMemberZone();
                return null;
            case LINKS.MEMBER_SERVICES:
                this.handlePush(ROUTES.memberServices);
                return null;
            default:
                return null;
        }
    };

    private handleMemberZone = () => {
        this.handleClose();
        this.props.openMemberZone();
    };

    private handlePush = async (route: string) => {
        await Navigation.push(this.props.currentRoute, {
            component: {
                id: route,
                name: route,
                options: { bottomTabs }
            }
        });

        this.handleClose();
    };

    private handleClose = () =>
        Navigation.mergeOptions(ROUTES.menu, {
            sideMenu: {
                left: {
                    enabled: false,
                    visible: false
                }
            }
        });

    private handleIntercom = () => {
        const { permissions, pushNotificationCopy } = this.props;
        const callback = () => Intercom.displayConversationsList();

        if (permissions.status !== "enabled") {
            Navigation.showModal({
                component: {
                    id: MODALS.pushNotifications,
                    name: MODALS.pushNotifications,
                    passProps: {
                        callback,
                        permissions,
                        copy: pushNotificationCopy
                    }
                }
            });
        } else {
            callback();
        }
    };

    private handleSurvey() {
        Wootric.showSurvey();
    }
}

const mapStateToProps = (state: IReduxState) => ({
    currentRoute: getRouteState(state),
    features: getUserFeatures(state),
    permissions: getPushNotifications(state),
    pushNotificationCopy: getCopy(state, "pushNotification"),
    isAlphaUser: getUserBusiness(state).alpha
});

const mapDispatchToProps = {
    logOut,
    openMemberZone
};

export default connect<ConnectedState, ConnectedDipatch>(mapStateToProps, mapDispatchToProps)(MenuContainer);
