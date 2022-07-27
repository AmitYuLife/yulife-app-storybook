import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

export const referralInformation: DeepLinkHandler = {
  name: "referral-information",
  action: ({ currentRoute }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.referralInformation,
        name: ROUTES.referralInformation,
      },
    }),
};
