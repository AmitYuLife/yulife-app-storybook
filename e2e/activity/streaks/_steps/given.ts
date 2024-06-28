import { AUTH_1, CUSTOMER_1 } from "../../_data";
import { navigateViaID, navigateViaText } from "../../_common/given"
import { authoriseFitkit } from "@socket";
import * as ids from "@ids"

export { loginAsUser } from "../../_common/given"


export const logInWithStreakScreen = (customer = CUSTOMER_1, auth = AUTH_1, fitkitAuth = true) => async () => {
    await authoriseFitkit(fitkitAuth)()
    const loginField = element(by.id(ids.INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(ids.INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(ids.BUTTON_LOGIN(false))
    await navigateViaText("Let's go", 3000)
}

export const continueLoginAfterStreak = async () => {
    await navigateViaText("let’s begin")
}
