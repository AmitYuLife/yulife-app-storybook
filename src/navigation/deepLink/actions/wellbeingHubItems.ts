import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

export const wellbeingHubItems: DeepLinkHandler = {
  name: "wellbeing-hub-items",
  action: ({ currentRoute }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.wellbeingHubItems,
        name: ROUTES.wellbeingHubItems,
      },
    }),
};
