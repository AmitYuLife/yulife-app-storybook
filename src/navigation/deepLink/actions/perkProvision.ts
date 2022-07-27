import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

export const perkProvision: DeepLinkHandler = {
  name: "perk-provision",
  action: ({ rootUrl, currentRoute }) => {
    const perkId = rootUrl.split("/")[1];

    if (perkId) {
      pushToScreen(currentRoute, {
        component: {
          id: ROUTES.perkSubscriptionInfo,
          name: ROUTES.perkSubscriptionInfo,
          passProps: { perkId },
        },
      });
    }
  },
};
