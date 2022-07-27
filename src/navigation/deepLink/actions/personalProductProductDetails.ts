import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/personal-product/product-details?productId=${customerProductId not productID}
export const personalProductDetails: DeepLinkHandler = {
  name: "personal-product/product-details",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.productDetails,
        name: ROUTES.productDetails,
        passProps: customParams,
      },
    }),
};
