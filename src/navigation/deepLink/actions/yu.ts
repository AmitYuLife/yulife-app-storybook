import { labels } from "../../root";
import { DeepLinkHandler } from "../types";

export const yuScreen: DeepLinkHandler = {
  name: labels[2].name,
  action: () => labels[2].onPress(),
};
