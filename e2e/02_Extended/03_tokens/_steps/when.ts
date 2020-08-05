import { navigation, INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD, navigateViaID, BUTTON_LOGIN } from "@utils"
import { authoriseFitkit } from "@socket"
import { AUTH_10, CUSTOMER_10 } from "_utils/data/stubs"

export const {
    wait,
    reloadOnly,
    tapID,
} = navigation.common

export const {
    loginAsUser,
} = navigation.login

export const loginAfterTokenExpiry = (customer = CUSTOMER_10, auth = AUTH_10) => async () => {
    await authoriseFitkit(true)()
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN)
}