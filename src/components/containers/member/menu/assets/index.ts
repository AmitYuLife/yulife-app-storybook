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
  | "referralsInfo"
  | "yuniversity";

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
  YUNIVERSITY = "yuniversity",
}

export default {
  [LINKS.ACTIVITY]: require("@assets/menu/activity.png"),
  [LINKS.SUPPORT]: require("@assets/menu/chat.png"),
  [LINKS.LOGOUT]: require("@assets/menu/logout.png"),
  [LINKS.MEMBER]: require("@assets/menu/member.png"),
  [LINKS.SETTINGS]: require("@assets/menu/settings.png"),
  [LINKS.LEADERBOARD]: require("@assets/menu/leaderboard.png"),
  [LINKS.WELLBEING_HUB]: require("@assets/menu/memberServices.png"),
  [LINKS.YUNIVERSITY]: require("@assets/menu/yuniversity.png"),
} as { [key: string]: ImageRequireSource };
