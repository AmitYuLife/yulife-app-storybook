import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

export const journey: DeepLinkHandler = {
  name: "journey",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.journey,
        name: ROUTES.journey,
        passProps: customParams,
      },
    }),
};
