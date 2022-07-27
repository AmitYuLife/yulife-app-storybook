import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/personal-product/payment-history?customerProductId={CPEID}
export const personalProductPaymentHistory: DeepLinkHandler = {
  name: "personal-product/payment-history",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.productPaymentHistory,
        name: ROUTES.productPaymentHistory,
        passProps: customParams,
      },
    }),
};
