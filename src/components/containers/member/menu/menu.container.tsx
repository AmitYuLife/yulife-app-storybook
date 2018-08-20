import * as React from "react";
import Intercom from "react-native-intercom";
import { Navigation } from "react-native-navigation";
import { MenuScreen } from "../../../screens";
import { ROUTES } from "../../../../navigation/routes";
import assets, { LINKS } from "./assets";

export type Link = "debug" | "leaderboard" | "activity" | "chat" | "logout" | "member" | "play";

export default class MenuContainer extends React.PureComponent {
    public render() {
        return (
            <MenuScreen
                onPressClose={this.handleClose}
                links={[
                    {
                        onPress: this.handlePressLink(LINKS.DEBUG),
                        label: "debug",
                        condition: true,
                    },
                    {
                        source: assets[LINKS.ACTIVITY],
                        onPress: this.handlePressLink(LINKS.ACTIVITY),
                        label: "activity history",
                        condition: true,
                    },
                    {
                        source: assets[LINKS.MEMBER],
                        onPress: this.handlePressLink(LINKS.LEADERBOARD),
                        label: "leaderboard",
                        condition: true,
                    },
                    {
                        source: assets[LINKS.MEMBER],
                        onPress: this.handlePressLink(LINKS.MEMBER),
                        label: "member zone",
                        condition: true,
                    },
                    {
                        source: assets[LINKS.PLAY],
                        onPress: this.handlePressLink(LINKS.PLAY),
                        label: "play intro",
                        condition: false,
                    },
                    {
                        source: assets[LINKS.CHAT],
                        onPress: this.handlePressLink(LINKS.CHAT),
                        label: "chat",
                        condition: true,
                    },
                    {
                        source: assets[LINKS.LOGOUT],
                        onPress: this.handlePressLink(LINKS.LOGOUT),
                        label: "log out",
                        condition: true,
                    },
                ]}
            />
        );
    }

    private handlePressLink = (link: Link) => (): null => {
        switch (link) {
            case LINKS.ACTIVITY:
                return null;
            case LINKS.CHAT:
                Intercom.displayConversationsList();
                return null;
            case LINKS.DEBUG:
                return null;
            case LINKS.LEADERBOARD:
                return null;
            case LINKS.LOGOUT:
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
                    visible: false,
                },
            },
        });
    }
}
