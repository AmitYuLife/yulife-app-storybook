
import { INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD, BUTTON_LOGIN } from "@ids";
export { authoriseFitkit, sendSteps, addCyclingData, sendMindfulnessData } from "@socket";
import * as when from "./when";
import { sendReduxEvent } from "@socket";
import { navigateViaText, navigation, tapText } from "@navigation"
import { AUTH_1, CUSTOMER_1, CUSTOMER_4 } from "@data";
import { selectRegionIfVissible } from "_utils/navigation/login";
export { selectRegionIfVissible } from "_utils/navigation/login";

export const {
    loginOnly,
    logInAndGoToTab
} = navigation.login

export const triggerAppUpdateState = async (): Promise<void> => {
    await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: "active" });
}