export { authoriseFitkit, sendSteps, addCyclingData, sendMindfulnessData } from "@socket";
import { sendReduxEvent } from "@socket";
import { navigation } from "@navigation"
export { selectRegionIfVisible } from "_utils/navigation/login";

export const {
    loginOnly,
    logInAndGoToTab
} = navigation.login

export const triggerAppUpdateState = async (): Promise<void> => {
    await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } });
}
