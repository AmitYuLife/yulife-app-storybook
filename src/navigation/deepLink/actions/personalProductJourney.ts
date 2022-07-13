import { ROUTES } from "@navigation/constants";
import { setScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/personal-product/journey?productId=${productId like Bupa_Dent}
export const personalProductJourney: DeepLinkHandler = {
  name: "personal-product/journey",
  action: ({ currentRoute, customParams }) => setScreen(currentRoute, ROUTES.productStep, customParams),
};
