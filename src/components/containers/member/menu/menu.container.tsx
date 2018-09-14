import * as React from "react";
import { PureComponent } from "react";
import Intercom from "react-native-intercom";
import { Navigation } from "react-native-navigation";
import { setUnauthenticatedRoot } from "../../../../navigation/root";
import { ROUTES } from "../../../../navigation/routes";
import { clearToken } from "../../../../services/storage/token";
import { clearUser } from "../../../../services/storage/user";
import { MenuScreen } from "../../../screens";
import assets, { LINKS } from "./assets";

export type Link = "debug" | "leaderboard" | "activity" | "chat" | "logout" | "member" | "play";

export default class MenuContainer extends PureComponent {
    public render() {
        return (
            <MenuScreen
                onPressClose={this.handleClose}
                links={[
                    {
                        condition: true,
                        label: "debug",
                        onPress: this.handlePressLink(LINKS.DEBUG)
                    },
                    {
                        condition: true,
                        label: "activity history",
                        onPress: this.handlePressLink(LINKS.ACTIVITY),
                        source: assets[LINKS.ACTIVITY]
                    },
                    {
                        condition: true,
                        label: "leaderboard",
                        onPress: this.handlePressLink(LINKS.LEADERBOARD),
                        source: assets[LINKS.MEMBER]
                    },
                    {
                        condition: true,
                        label: "member zone",
                        onPress: this.handlePressLink(LINKS.MEMBER),
                        source: assets[LINKS.MEMBER]
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
        switch (link) {
            case LINKS.ACTIVITY:
                Navigation.push(ROUTES.member, {
                    component: {
                        id: ROUTES.activityHistory,
                        name: ROUTES.activityHistory
                    }
                });
                this.handleClose();
                return null;
            case LINKS.CHAT:
                Intercom.displayConversationsList();
                return null;
            case LINKS.DEBUG:
                return null;
            case LINKS.LEADERBOARD:
                return null;
            case LINKS.LOGOUT:
                this.handleLogout();
                return null;
            case LINKS.MEMBER:
                return null;
            case LINKS.PLAY:
                return null;
            default:
                return null;
        }
    }

    private handleClose = () => {
        Navigation.mergeOptions(ROUTES.menu, {
            sideMenu: {
                left: {
                    visible: false
                }
            }
        });
    }

    private handleLogout = async () => {
        await clearToken();
        await clearUser();
        setUnauthenticatedRoot();
    }
}
