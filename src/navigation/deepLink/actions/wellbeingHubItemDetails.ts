import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/wellbeing-hub-item-details?id=${id}
export const wellbeingHubItemDetails: DeepLinkHandler = {
  name: "wellbeing-hub-item-details",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.wellbeingHubDetails,
        name: ROUTES.wellbeingHubDetails,
        passProps: {
          itemId: customParams.id,
        },
      },
    }),
};
