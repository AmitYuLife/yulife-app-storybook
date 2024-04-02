import { navigation } from "@navigation"
export { addStepsHistoricalData, addCyclingHistoricalData, addMindfulnessHistoricalData, addPilatesHistoricalData} from "@socket";
import { AUTH_7, CUSTOMER_7 } from "../../_data";

// A function that wraps the loginAsUser function with default values for this module's data
export const loginAsUser = (
    customer = CUSTOMER_7,
    auth = AUTH_7,
    fitkitAuth = true,
    region = "United Kingdom",
    firstTime = true
) => {
    return navigation.login.loginAsUser(customer, auth, fitkitAuth, region, firstTime);
};
