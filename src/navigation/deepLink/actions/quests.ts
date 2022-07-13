import { labels } from "../../root";
import { DeepLinkHandler } from "../types";

export const quests: DeepLinkHandler = {
  name: labels[1].name,
  action: () => labels[1].onPress(),
};
