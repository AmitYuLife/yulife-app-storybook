import { navigation } from "@navigation"
import { sendReduxEvent } from "@socket";

export const {
    loginAsUser,
    loginOnly,
    loginAndCollectSignupBonus,
    loginToYuScreen
} = navigation.login

export const triggerAppUpdateState = async (): Promise<void> => {
    await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: "active" });
}