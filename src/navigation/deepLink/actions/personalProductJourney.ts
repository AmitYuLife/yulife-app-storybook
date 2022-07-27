import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/personal-product/journey?productId=${productId like Bupa_Dent}
export const personalProductJourney: DeepLinkHandler = {
  name: "personal-product/journey",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.productStep,
        name: ROUTES.productStep,
        passProps: customParams,
      },
    }),
};
