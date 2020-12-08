import stripe from "tipsi-stripe";
import Config from "react-native-config";

export function initStripe() {
  stripe.setOptions({
    publishableKey: Config.STRIPE_PUBLISHABLE_KEY,
    androidPayMode: Config.ENV !== "production" ? "test" : "production", // Android only
    // merchantId: 'MERCHANT_ID', // Optional, mandatory to enable Apple Pay
  });
}
