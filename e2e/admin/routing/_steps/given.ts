import { navigation } from "@navigation";
import { AUTH_7, CUSTOMER_7 } from "../../_data";

export {
  addStepsHistoricalData,
  addCyclingHistoricalData,
  addMindfulnessHistoricalData,
  addPilatesHistoricalData,
} from "@socket";

// A function that wraps the loginAsUser function with default values for this module's data
export const loginAsUser = (
  customer = CUSTOMER_7,
  auth = AUTH_7,
  fitkitAuth = true,
  region: "UK" | "US" | "JP" | "SA" = "UK"
) => {
  return navigation.login.loginAsUser(customer, auth, fitkitAuth, region);
};

export const allowNotifications = async () => {
  await device.launchApp({ permissions: { notifications: "YES" } });
};
