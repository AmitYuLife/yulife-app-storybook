import { region } from "@locale";
import { initStripe as init } from "@stripe/stripe-react-native";

export async function initStripe() {
  const publishableKey = region.getConfig("stripeKey");
  await init({ publishableKey });
}
