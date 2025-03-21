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
  | "settings"
  | "tools"
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
  SETTINGS = "settings",
  TOOLS = "tools",
  REFERRALS_INFO = "referralsInfo",
}

export default {
  [LINKS.REFERRALS_INFO]: require("@assets/menu/invite.png"),
  [LINKS.ACTIVITY]: require("@assets/menu/activityHistory.png"),
  [LINKS.SUPPORT]: require("@assets/menu/chatHelp.png"),
  [LINKS.LOGOUT]: require("@assets/menu/logout.png"),
  [LINKS.MEMBER]: require("@assets/menu/account.png"),
  [LINKS.SETTINGS]: require("@assets/menu/settingsGear.png"),
  [LINKS.LEADERBOARD]: require("@assets/menu/trophy.png"),
  [LINKS.WELLBEING_HUB]: require("@assets/menu/wellbeingHub.png"),
} as { [key: string]: ImageRequireSource };
