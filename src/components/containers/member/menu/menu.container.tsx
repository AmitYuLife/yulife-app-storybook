import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import { setIntroRoot } from "@navigation/root";
import * as React from "react";
import { PureComponent } from "react";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import Intercom from "react-native-intercom";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getRouteState } from "../../../../redux/app/app.selectors";
import { getPushNotifications } from "../../../../redux/device/device.selectors";
import { logOut, openMemberZone } from "../../../../redux/user/user.actions";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import { MenuScreen } from "../../../screens";
import assets, { LINKS } from "./assets";

export type Link = "debug" | "leaderboard" | "activity" | "chat" | "logout" | "member" | "play" | "settings";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDipatch = typeof mapDispatchToProps;

type Props = ConnectedState & ConnectedDipatch;

class MenuContainer extends PureComponent<Props> {
    private deviceVersion = DeviceInfo.getVersion();

    public render() {
        const { features = {} } = this.props;
        const version = features.showBuildNumber
            ? `${this.deviceVersion} (${Config.BUILD_NUMBER})`
            : this.deviceVersion;

        return (
            <MenuScreen
                onPressClose={this.handleClose}
                links={[
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
                        condition: true,
                        label: "leaderboard",
                        onPress: this.handlePressLink(LINKS.LEADERBOARD),
                        source: assets[LINKS.LEADERBOARD]
                    },
                    {
                        condition: true || features.showSettings,
                        label: "settings",
                        onPress: this.handlePressLink(LINKS.SETTINGS),
                        source: assets[LINKS.SETTINGS]
                    },
                    {
                        condition: true,
                        label: "play intro",
                        onPress: this.handlePressLink(LINKS.PLAY),
                        source: assets[LINKS.PLAY]
                    },
                    {
                        condition: true,
                        label: "chat",
                        onPress: this.handlePressLink(LINKS.CHAT),
                        source: assets[LINKS.CHAT]
                    },
                    {
                        condition: true,
                        label: "log out",
                        onPress: this.handlePressLink(LINKS.LOGOUT),
                        source: assets[LINKS.LOGOUT]
                    }
                ]}
                version={version}
                onDebugPress={features.showDebug ? this.handlePressLink(LINKS.DEBUG) : null}
            />
        );
    }

    private handlePressLink = (link: Link) => (): null => {
        switch (link) {
            case LINKS.ACTIVITY:
                this.handlePush(ROUTES.activityHistory);
                return null;
            case LINKS.SETTINGS:
                this.handlePush(ROUTES.settings);
                return null;
            case LINKS.CHAT:
                this.handleIntercom();
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
            case LINKS.PLAY:
                setIntroRoot();
                return null;
            default:
                return null;
        }
    };

    // private handleModal = (name: string) => {
    //     Navigation.showModal({
    //         component: {
    //             id: name,
    //             name
    //         }
    //     });
    //     setTimeout(this.handleClose, 1000);
    // }

    private handleMemberZone = () => {
        this.handleClose();
        this.props.openMemberZone();
    };

    private handlePush = (route: string) => {
        this.handleClose();
        Navigation.push(this.props.currentRoute, {
            component: {
                id: route,
                name: route,
                options: { bottomTabs }
            }
        });
    };

    private handleClose = () => {
        Navigation.mergeOptions(ROUTES.menu, {
            sideMenu: {
                left: {
                    enabled: false,
                    visible: false
                }
            }
        });
    };

    private handleIntercom = () => {
        const { permissions } = this.props;
        const callback = () => Intercom.displayConversationsList();

        if (permissions.status !== "enabled") {
            Navigation.showModal({
                component: {
                    id: MODALS.pushNotifications,
                    name: MODALS.pushNotifications,
                    passProps: {
                        callback,
                        permissions
                    }
                }
            });
        } else {
            callback();
        }
    };
}

const mapStateToProps = (state: IReduxState) => ({
    currentRoute: getRouteState(state),
    features: getUserFeatures(state),
    permissions: getPushNotifications(state)
});

const mapDispatchToProps = {
    logOut,
    openMemberZone
};

export default connect<ConnectedState, ConnectedDipatch>(
    mapStateToProps,
    mapDispatchToProps
)(MenuContainer);
