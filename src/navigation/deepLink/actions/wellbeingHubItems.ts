import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/wellbeing-hub-items[?category=${category}]
export const wellbeingHubItems: DeepLinkHandler = {
  name: "wellbeing-hub-items",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.wellbeingHubItems,
        name: ROUTES.wellbeingHubItems,
        passProps: {
          preselectCategory: customParams.category,
        },
      },
    }),
};
