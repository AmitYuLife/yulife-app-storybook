import { AUTH_1, CUSTOMER_1 } from "@data";
import { navigation, INPUT_LOGIN_PASSWORD, INPUT_LOGIN_EMAIL, BUTTON_LOGIN, navigateViaID, navigateViaText } from "@navigation"
import { authoriseFitkit } from "@socket";

export const {
    loginAsUser,
} = navigation.login

export const logInWithStreakScreen = (customer = CUSTOMER_1, auth = AUTH_1, fitkitAuth = true) => async () => {
    await authoriseFitkit(fitkitAuth)()
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN(false))
    await navigateViaText("Next")
}

export const continueLoginAfterStreak = async () => {
    await navigateViaText("let’s begin")
}

