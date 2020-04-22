import { ImageRequireSource } from "react-native";

export type LinkTypes =
  | "debug"
  | "activity"
  | "leaderboard"
  | "chat"
  | "survey"
  | "logout"
  | "member"
  | "memeberServices"
  | "play"
  | "settings"
  | "stats";

export enum LINKS {
  DEBUG = "debug",
  ACTIVITY = "activity",
  LEADERBOARD = "leaderboard",
  CHAT = "chat",
  SURVEY = "survey",
  LOGOUT = "logout",
  MEMBER = "member",
  MEMBER_SERVICES = "memeberServices",
  PLAY = "play",
  SETTINGS = "settings",
  STATS = "stats",
}

export default {
  [LINKS.STATS]: require("../../../../../../assets/menu/stats.png"),
  [LINKS.ACTIVITY]: require("../../../../../../assets/menu/activity.png"),
  [LINKS.CHAT]: require("../../../../../../assets/menu/chat.png"),
  [LINKS.SURVEY]: require("../../../../../../assets/menu/chat.png"),
  [LINKS.LOGOUT]: require("../../../../../../assets/menu/logout.png"),
  [LINKS.MEMBER]: require("../../../../../../assets/menu/member.png"),
  [LINKS.PLAY]: require("../../../../../../assets/menu/play.png"),
  [LINKS.SETTINGS]: require("../../../../../../assets/menu/settings.png"),
  [LINKS.LEADERBOARD]: require("../../../../../../assets/menu/leaderboard.png"),
  [LINKS.MEMBER_SERVICES]: require("../../../../../../assets/menu/memberServices.png"),
} as { [key: string]: ImageRequireSource };
