import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/smoking
export const smoking: DeepLinkHandler = {
  name: "smoking",
  action: ({ currentRoute }) => {
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.smoking,
        name: ROUTES.smoking,
        passProps: {},
      },
    });
  },
};
