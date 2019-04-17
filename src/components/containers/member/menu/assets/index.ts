import { ImageRequireSource } from "react-native";

type Types = "debug" | "activity" | "leaderboard" | "chat" | "logout" | "member" | "play" | "settings";

export const LINKS: { [name: string]: Types } = {
    DEBUG: "debug",
    ACTIVITY: "activity",
    LEADERBOARD: "leaderboard",
    CHAT: "chat",
    LOGOUT: "logout",
    MEMBER: "member",
    PLAY: "play",
    SETTINGS: "settings"
};

export default {
    [LINKS.ACTIVITY]: require("../../../../../../assets/menu/activity.png"),
    [LINKS.CHAT]: require("../../../../../../assets/menu/chat.png"),
    [LINKS.LOGOUT]: require("../../../../../../assets/menu/logout.png"),
    [LINKS.MEMBER]: require("../../../../../../assets/menu/member.png"),
    [LINKS.PLAY]: require("../../../../../../assets/menu/play.png"),
    [LINKS.SETTINGS]: require("../../../../../../assets/menu/settings.png"),
    [LINKS.LEADERBOARD]: require("../../../../../../assets/menu/leaderboard.png")
} as { [key: string]: ImageRequireSource };
