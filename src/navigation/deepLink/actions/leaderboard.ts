import { labels } from "../../root";
import { DeepLinkHandler } from "../types";

export const leaderboard: DeepLinkHandler = {
  name: labels[3].name,
  action: () => labels[3].onPress(),
};
