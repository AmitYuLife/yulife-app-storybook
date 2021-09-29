import { initStripe as init } from "@stripe/stripe-react-native";
import Config from "react-native-config";

export function initStripe() {
  init({ publishableKey: Config.STRIPE_PUBLISHABLE_KEY });
}
