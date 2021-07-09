import { ImageRequireSource } from "react-native";

export type LinkTypes =
  | "debug"
  | "activity"
  | "leaderboard"
  | "support"
  | "survey"
  | "logout"
  | "member"
  | "wellbeingHub"
  | "play"
  | "settings"
  | "stats"
  | "referralsInfo";

export enum LINKS {
  DEBUG = "debug",
  ACTIVITY = "activity",
  LEADERBOARD = "leaderboard",
  SUPPORT = "support",
  LOGOUT = "logout",
  MEMBER = "member",
  WELLBEING_HUB = "wellbeingHub",
  PLAY = "play",
  SETTINGS = "settings",
  STATS = "stats",
  REFERRALS_INFO = "referralsInfo",
}

export default {
  [LINKS.STATS]: require("../../../../../../assets/menu/stats.png"),
  [LINKS.ACTIVITY]: require("../../../../../../assets/menu/activity.png"),
  [LINKS.SUPPORT]: require("../../../../../../assets/menu/chat.png"),
  [LINKS.LOGOUT]: require("../../../../../../assets/menu/logout.png"),
  [LINKS.MEMBER]: require("../../../../../../assets/menu/member.png"),
  [LINKS.PLAY]: require("../../../../../../assets/menu/play.png"),
  [LINKS.SETTINGS]: require("../../../../../../assets/menu/settings.png"),
  [LINKS.LEADERBOARD]: require("../../../../../../assets/menu/leaderboard.png"),
  [LINKS.WELLBEING_HUB]: require("../../../../../../assets/menu/memberServices.png"),
} as { [key: string]: ImageRequireSource };
