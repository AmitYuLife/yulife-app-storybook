import { labels } from "../../root";
import { DeepLinkHandler } from "../types";

export const yucoin: DeepLinkHandler = {
  name: labels[0].name,
  action: () => labels[0].onPress(),
};
