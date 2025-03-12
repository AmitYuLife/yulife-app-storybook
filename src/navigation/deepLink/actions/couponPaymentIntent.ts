import { handleURLCallback } from "@stripe/stripe-react-native";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/stripe-redirect
export const couponPaymentIntent: DeepLinkHandler = {
  name: "stripe-redirect",
  action: async ({ fullUrl }) => {
    await handleURLCallback(fullUrl);
  },
};
