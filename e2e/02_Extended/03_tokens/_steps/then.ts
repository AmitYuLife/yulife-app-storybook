import { navigation, INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from "@utils"
import { screens } from "@appScreens"

export const {
    textVisible,
    idVisible
} = navigation.common

export const onLoginScreen = async () => {
    const welcomeLabel = element(by.text("Welcome!"));
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    const needHelp = "need help logging in?"

    await expect(element(by.text(needHelp))).toBeVisible()
    await expect(welcomeLabel).toBeVisible()
    await expect(loginField).toBeVisible()
    await expect(passwordField).toBeVisible()
}