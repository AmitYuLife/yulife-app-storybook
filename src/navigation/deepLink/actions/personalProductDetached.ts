import { ROUTES } from "@navigation/constants";
import { setScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/personal-product/detached?productId=${productId like Bupa_Dent}&stepId=${Bupa_Dent_01_FAQs}
export const personalProductDetached: DeepLinkHandler = {
  name: "personal-product/detached",
  action: ({ currentRoute, customParams }) => setScreen(currentRoute, ROUTES.productStepDetached, customParams),
};
