import { ImageRequireSource } from "react-native";

export const enum LINKS {
    DEBUG = "debug",
    ACTIVITY = "activity",
    LEADERBOARD = "leaderboard",
    CHAT = "chat",
    LOGOUT = "logout",
    MEMBER = "member",
    PLAY = "play"
}

export default {
    [LINKS.ACTIVITY]: require("../../../../../../assets/menu/activity.png"),
    [LINKS.CHAT]: require("../../../../../../assets/menu/chat.png"),
    [LINKS.LOGOUT]: require("../../../../../../assets/menu/logout.png"),
    [LINKS.MEMBER]: require("../../../../../../assets/menu/member.png"),
    [LINKS.PLAY]: require("../../../../../../assets/menu/play.png")
} as { [key: string]: ImageRequireSource };
