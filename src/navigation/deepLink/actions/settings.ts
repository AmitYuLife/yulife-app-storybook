import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/settings
export const settings: DeepLinkHandler = {
  name: "settings",
  action: ({ currentRoute }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.settings,
        name: ROUTES.settings,
      },
    }),
};
