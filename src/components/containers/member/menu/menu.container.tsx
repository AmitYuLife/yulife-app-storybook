import * as React from "react";
import { PureComponent } from "react";
import Intercom from "react-native-intercom";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { setIntroRoot } from "../../../../navigation/root";
import { ROUTES } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { SyncAction } from "../../../../redux/_core/types";
import { getRouteState } from "../../../../redux/app/app.selectors";
import { logOut, openMemberZone } from "../../../../redux/user/user.actions";
import { userFeaturesSelector } from "../../../../redux/user/user.selectors";
import { MenuScreen } from "../../../screens";
import assets, { LINKS } from "./assets";

export type Link = "debug" | "leaderboard" | "activity" | "chat" | "logout" | "member" | "play" | "settings";

interface IConnectedState {
    currentRoute: string;
    features: { [x: string]: boolean };
}

interface IConnectedDipatch {
    logOut: () => void;
    openMemberZone: () => SyncAction;
}

type Props = IConnectedState & IConnectedDipatch;

class MenuContainer extends PureComponent<Props> {
    public render() {
        const { features = {} } = this.props;

        return (
            <MenuScreen
                onPressClose={this.handleClose}
                links={[
                    {
                        condition: features.showDebug,
                        label: "debug",
                        onPress: this.handlePressLink(LINKS.DEBUG)
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
                Intercom.displayConversationsList();
                return null;
            case LINKS.DEBUG:
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
    }

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
    }

    private handlePush = (route: string) => {
        this.handleClose();
        Navigation.push(this.props.currentRoute, {
            component: {
                id: route,
                name: route
            }
        });
    }

    private handleClose = async () => {
        Navigation.mergeOptions(ROUTES.menu, {
            sideMenu: {
                left: {
                    enabled: false,
                    visible: false
                }
            }
        });
    }
}

const mapStateToProps = (state: IReduxState) => ({
    currentRoute: getRouteState(state),
    features: userFeaturesSelector(state)
});

const mapDispatchToProps = {
    logOut,
    openMemberZone
};

export default connect<IConnectedState>(
    mapStateToProps,
    mapDispatchToProps
)(MenuContainer);
