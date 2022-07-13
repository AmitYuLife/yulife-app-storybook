import { ROUTES } from "@navigation/constants";
import { setScreen } from "../../root";
import { DeepLinkHandler } from "../types";

export const referralInformation: DeepLinkHandler = {
  name: "referral-information",
  action: ({ currentRoute }) => setScreen(currentRoute, ROUTES.referralInformation),
};
