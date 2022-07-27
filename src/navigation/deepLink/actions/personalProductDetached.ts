import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/personal-product/detached?productId=${productId like Bupa_Dent}&stepId=${Bupa_Dent_01_FAQs}
export const personalProductDetached: DeepLinkHandler = {
  name: "personal-product/detached",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.productStepDetached,
        name: ROUTES.productStepDetached,
        passProps: customParams,
      },
    }),
};
