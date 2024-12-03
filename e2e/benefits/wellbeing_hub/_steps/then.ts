import { navigation } from "@utils"
import {expect} from 'detox'
import { scrollUntilIdVisible, scrollUntilTextVisible } from "_utils/navigation/scrolling"
import { SDUI_BODY_SCROLL, TEXT_TEMPLATE, WELLBEING_HUB_ITEM_SCROLL_VIEW, WELLBEING_HUB_SCROLL_VIEW } from "@ids"
import * as fixture from "../_resources/fixtures"
import * as constant from "../_resources/constants"
import { BupaWellbeingHubItem } from "../_resources/types"

export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible,
    multipleTextVisible,
    wait
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

export const canSeeFiitFormValidationError = async () => {
    const emailText = "Email address must be valid"

    await expect(element(by.text(emailText))).toBeVisible()
}

export const canSeeFiitReadyMessage = async () => {
    const readyText = "Your Fiit membership is ready! We will send you an email with further instructions. Please check your email account."
    await wait(2500)()
    await expect(element(by.text(readyText))).toBeVisible()
}

export const canSeeFiitLimitReached = async () => {
    const limitReachedText = "All memberships purchased by your company have already been claimed. Please contact your HR if you'd still like to claim this benefit."
    await idVisible(TEXT_TEMPLATE(limitReachedText, "b2"))()   
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
        await scrollUntilTextVisible(SDUI_BODY_SCROLL, i.text[i.text.length - 1], "down")()
        await textVisible(i.header)()
        i.text.forEach(text => async () => {
            await textVisible(text)()
        })
    }
   await haveAQuestionVisible()
}

export const haveAQuestionVisible = async () => {
    await scrollUntilTextVisible(SDUI_BODY_SCROLL, constant.helpCentreButtonText, "down")()
    await textVisible (constant.haveAQuestionHeader)()
    await textVisible (constant.haveAQuestionText)()
    await textVisible (constant.helpCentreButtonText)()
}