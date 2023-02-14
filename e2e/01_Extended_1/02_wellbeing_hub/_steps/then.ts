import { navigation } from "@utils"
import { scrollUntilIdVisible } from "_utils/navigation/scrolling"
import { TEXT_TEMPLATE, WELLBEING_HUB_SCROLL_VIEW } from "@ids"

export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible,
    multipleTextVisible
} = navigation.common

export const {
    swipeFromText
} = navigation.scrolling

export const wellbeingServiceVisible = async () => {
    const titles = ["Smart Health", "YuMatter", "Yuniversity", "Beam", "HiBob", "More Happi"]

    for (const i of titles) {
        await scrollUntilIdVisible(WELLBEING_HUB_SCROLL_VIEW, TEXT_TEMPLATE(i), "down")()
        await expect(element(by.id(TEXT_TEMPLATE(i)))).toBeVisible()
    }
}

export const canSeeFiitFormValidationErrors = async () => {
    const firstNameText = "First name must contain at least 1 character"
    const lastNameText = "Last name must contain at least 1 character"
    const emailText = "Email address must be valid"

    await expect(element(by.text(firstNameText))).toBeVisible()
    await expect(element(by.text(lastNameText))).toBeVisible()
    await expect(element(by.text(emailText))).toBeVisible()
}

export const canSeeFiitReadyMessage = async () => {
    const readyText = "Your Fiit membership is ready! Fiit will send you an email with further instructions on how to proceed. Please check your email account."

    await expect(element(by.text(readyText))).toBeVisible()
}

export const canSeeFiitLimitReached = async () => {
    const limitReachedText = "All available memberships purchased by your company are currently in use. Contact our support to resolve this issue."
   
    await expect(element(by.text(limitReachedText))).toBeVisible()
   
}