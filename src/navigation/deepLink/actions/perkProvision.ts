import { ROUTES } from "@navigation/constants";
import { setScreen } from "../../root";
import { DeepLinkHandler } from "../types";

export const perkProvision: DeepLinkHandler = {
  name: "perk-provision",
  action: ({ rootUrl, currentRoute }) => {
    const perkId = rootUrl.split("/")[1];

    if (perkId) {
      setScreen(currentRoute, ROUTES.perkSubscriptionInfo, { perkId });
    }
  },
};
