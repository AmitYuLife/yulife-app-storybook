import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/daily-reflections
export const dailyReflections: DeepLinkHandler = {
  name: "daily-reflections",
  action: ({ currentRoute }) => {
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.pathways,
        name: ROUTES.pathways,
        passProps: {},
      },
    });
  },
};
