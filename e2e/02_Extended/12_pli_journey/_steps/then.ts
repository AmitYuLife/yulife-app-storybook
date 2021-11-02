import { navigation } from "@utils"
import { DATE_INPUT, PERCENTAGE_COVERED, REFERRALS_INVITE_BUTTON, PRODUCT_STEP_BODY_SCROLL_VIEW } from "@ids"
import { screens } from "@appScreens"
import { scrollUntilTextVisible } from "_utils/navigation/scrolling"


export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible,
    multipleTextVisible
} = navigation.common

export const {
    onYuscreenV3
} = screens.yuscreen

export const correctPliIntroCopy = (header: string) => async () => {
    switch (header) {
        case "Our simple promise":
            await textVisible("Should you pass away, your family will receive a percentage of your pre-tax salary every month.")()
            break;
        case "Cover for a lifetime":
            await textVisible("We pay out for up to 40 years or until you would have been 70 years old, whichever happens first.")()
            break;
        case "Power up!":
            await textVisible("Customise your Yumoji’s style and unlock new Power in the Yuniverse.")()
            break;
        case "Owned by you":
            await textVisible("This policy will be owned by you and is not linked to any policies you have with your employer. You keep both the YuLife app and this policy even if you change jobs.")()
            break;
    }
}

export const isOnLetsGetPersonalScreen = (name: string) => async () => {
    const titleText = `Let's get personal, ${name}.`
    const handshakeText = "In order to get you covered, we’ll need to know a bit about you."
    const internetText = "You’ll need an active internet connection to answer some questions."
    const privacyText = "This policy will be owned by you, and your answers will not be seen by your employer."
    const exitText = "Should you exit or drop out of the journey at any stage your progress will be saved and you can simply pick up where you left off."
    const coinText = "You’ll get 1000 YuCoin for completing the questions."
    const termsText = "Before we get started, please take a moment to read the YuLife Terms of Business."
    const buttonText = "Let's go!"

    await expect(element(by.text(titleText))).toBeVisible()
    await expect(element(by.text(handshakeText))).toBeVisible()
    await expect(element(by.text(internetText))).toBeVisible()
    await expect(element(by.text(privacyText))).toBeVisible()
    await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, buttonText, "down")()
    await expect(element(by.text(exitText))).toBeVisible()
    await expect(element(by.text(coinText))).toBeVisible()
    await expect(element(by.text(termsText))).toBeVisible()
    await expect(element(by.text(buttonText))).toBeVisible()
}

export const isOnPromiseYugiScreen = async () => {
    const yugiText = "Do you promise to answer honestly, accurately and to the best of your knowledge? If you are not honest, claims may not be paid out or your policy can be cancelled."
    const buttonText = "Yes, I promise"

    await expect(element(by.text(yugiText))).toBeVisible()
    await expect(element(by.text(buttonText))).toBeVisible()
}

export const isOnNameScreen = (user: any) => async () => {
    const title = "Okay! Let's start with the easy stuff: is this your name?"
    const firstName = user.data.firstName
    const lastName = user.data.lastName

    await expect(element(by.text(title))).toBeVisible()
    await expect(element(by.text(firstName))).toBeVisible()
    await expect(element(by.text(lastName))).toBeVisible()
}

export const isOnDoBScreen = async () => {
    await isOnScreen("What is your date of birth?")()
    await expect(element(by.id(DATE_INPUT))).toBeVisible()
}

export const isOnScreen = (title: string) => async () => {
    await expect(element(by.text(title))).toBeVisible();
}

export const isOnCoverLevelScreen = async () => {
    await expect(element(by.text("Choose your cover level"))).toBeVisible();
    await expect(element(by.id(PERCENTAGE_COVERED(25)))).toBeVisible()
    await expect(element(by.id(PERCENTAGE_COVERED(50)))).toBeVisible()
    await expect(element(by.id(PERCENTAGE_COVERED(75)))).toBeVisible()
}

export const canSeeCheckoutTerms = async () => {
    const aboveStatements = "I have read and agreed to the above statements."
    const yuLifeTerms = "I have read and agree to the Insurance Terms & Conditions, and YuLife Terms of Business."

    await expect(element(by.text(aboveStatements))).toBeVisible();
    await expect(element(by.text(yuLifeTerms))).toBeVisible();
}