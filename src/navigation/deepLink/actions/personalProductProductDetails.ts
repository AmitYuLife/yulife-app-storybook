import { ROUTES } from "@navigation/constants";
import { setScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/personal-product/product-details?productId=${customerProductId not productID}
export const personalProductDetails: DeepLinkHandler = {
  name: "personal-product/product-details",
  action: ({ currentRoute, customParams }) => setScreen(currentRoute, ROUTES.productDetails, customParams),
};
