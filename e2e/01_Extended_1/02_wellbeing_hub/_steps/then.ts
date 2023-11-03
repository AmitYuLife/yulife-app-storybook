import { navigation } from "@utils"
import { scrollUntilIdVisible, scrollUntilTextVisible } from "_utils/navigation/scrolling"
import { TEXT_TEMPLATE, WELLBEING_HUB_ITEM_SCROLL_VIEW, WELLBEING_HUB_SCROLL_VIEW } from "@ids"
import * as fixture from "../_resources/fixtures"
import * as constant from "../_resources/constants"
import { BupaWellbeingHubItem } from "../_resources/types"

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

export const bupaWellbeingItemsVisible = async () => {
    const bupaItems = 
    [
        fixture.bluaHealthItem,
        fixture.anytimeHelplineItem,
        fixture.familyMentalHealthLineItem,
        fixture.menopauseHealthLineItem,
        fixture.directAccessItem
    ]

    for (const i of bupaItems) {
        await scrollUntilTextVisible(WELLBEING_HUB_SCROLL_VIEW, i.buttonDesc, "down")()
        await idVisible(TEXT_TEMPLATE(i.title))()
        await textVisible(i.buttonDesc)()
    }
}

export const onCorrectWellbeingItemPage = (item: BupaWellbeingHubItem) => async () => {
    for (const i of item.content) {
        await scrollUntilTextVisible(WELLBEING_HUB_ITEM_SCROLL_VIEW, i.text[i.text.length - 1], "down")()
        await textVisible(i.header)()
        i.text.forEach(text => async () => {
            await textVisible(text)()
        })
    }
   await haveAQuestionVisible()
}

export const haveAQuestionVisible = async () => {
    await scrollUntilTextVisible(WELLBEING_HUB_ITEM_SCROLL_VIEW, constant.helpCentreButtonText, "down")()
    await textVisible (constant.haveAQuestionHeader)()
    await textVisible (constant.haveAQuestionText)()
    await textVisible (constant.helpCentreButtonText)()
}