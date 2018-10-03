import * as React from "react";
import { PureComponent } from "react";
import Intercom from "react-native-intercom";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { ROUTES } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getRouteState } from "../../../../redux/app/app.selectors";
import { logOut } from "../../../../redux/user/user.actions";
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
                        condition: features.showMember,
                        label: "member zone",
                        onPress: this.handlePressLink(LINKS.MEMBER),
                        source: assets[LINKS.MEMBER]
                    },
                    {
                        condition: features.showLeaderboard,
                        label: "leaderboard",
                        onPress: this.handlePressLink(LINKS.LEADERBOARD),
                        source: assets[LINKS.LEADERBOARD]
                    },
                    {
                        condition: features.showSettings,
                        label: "settings",
                        onPress: this.handlePressLink(LINKS.SETTINGS),
                        source: assets[LINKS.SETTINGS]
                    },
                    {
                        condition: false,
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
        const { currentRoute, logOut: handleLogOut } = this.props;
        switch (link) {
            case LINKS.ACTIVITY:
                this.handleClose();
                Navigation.push(currentRoute, {
                    component: {
                        id: ROUTES.activityHistory,
                        name: ROUTES.activityHistory
                    }
                });
                return null;
            case LINKS.CHAT:
                Intercom.displayConversationsList();
                return null;
            case LINKS.DEBUG:
                return null;
            case LINKS.LEADERBOARD:
                return null;
            case LINKS.LOGOUT:
                handleLogOut();
                return null;
            case LINKS.MEMBER:
                return null;
            case LINKS.PLAY:
                return null;
            default:
                return null;
        }
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
    logOut
};

export default connect<IConnectedState>(
    mapStateToProps,
    mapDispatchToProps
)(MenuContainer);
