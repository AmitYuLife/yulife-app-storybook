import { labels } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/rewards
export const rewards: DeepLinkHandler = {
  name: labels[4].name,
  action: () => labels[4].onPress(),
};
