import { ImageRequireSource } from "react-native";

export const enum LINKS {
    DEBUG = "debug",
    ACTIVITY = "activity",
    LEADERBOARD = "leaderboard",
    CHAT = "chat",
    LOGOUT = "logout",
    MEMBER = "member",
    PLAY = "play",
}

export default {
    [LINKS.ACTIVITY]: require("./activity.png"),
    [LINKS.CHAT]: require("./chat.png"),
    [LINKS.LOGOUT]: require("./logout.png"),
    [LINKS.MEMBER]: require("./member.png"),
    [LINKS.PLAY]: require("./play.png"),
} as { [key: string]: ImageRequireSource };
