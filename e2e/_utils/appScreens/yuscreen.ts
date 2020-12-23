import {
    navigation, YUSCREEN, GET_STARTED_BUTTON, EMPTY_YUSCREEN_COPY,
    MALE_BODY, FEMALE_BODY, BODY_ITEM_TITLE,
    AVATAR_BODY, PERSONAL_PRODUCT, SURVEY_SCREEN, BUILDER_BODY, PACKAGE_SCREEN, FIB_BROWSE_SCREEN, booleanTextVisible, wait,
} from "@utils"
import { scrollFromText, scrollFromID } from "_utils/navigation/scrolling"
import { EARN_RATE_ROW, EARN_RATE_TABLE } from "@ids"


export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    multipleTextVisible
} = navigation.common

export const onEmptyYuscreen = (customer) => async () => {
    const firstName = customer.data.firstName
    const lastName = customer.data.lastName

    const yuscreen = element(by.id(YUSCREEN))
    const getStartedButton = element(by.id(GET_STARTED_BUTTON))
    const copy = element(by.id(EMPTY_YUSCREEN_COPY))

    await expect(yuscreen).toBeVisible()
    await expect(getStartedButton).toBeVisible()
    await expect(copy).toBeVisible()

    await expect(element(by.text(`${firstName} ${lastName}`))).toBeVisible()
}

export const onYuscreen = (customer) => async () => {
    const firstName = customer.data.firstName
    const lastName = customer.data.lastName

    const yuscreen = element(by.id(YUSCREEN))

    await expect(yuscreen).toBeVisible()

    await expect(element(by.text(`${firstName} ${lastName}`))).toBeVisible()

}

export const onCreateAvatarScreen = async () => {
    const createTitle = element(by.text("Create your Yumoji"))
    const editTitle = element(by.text("Edit your Yumoji"))
    const subTitle = element(by.text("Pick a body type"))

    const femaleBody = element(by.id(FEMALE_BODY))
    const maleBody = element(by.id(MALE_BODY))

    try {
        await expect(createTitle).toBeVisible()
    } catch (e) {
        await expect(editTitle).toBeVisible()
    }
    await expect(subTitle).toBeVisible()
    await expect(femaleBody).toBeVisible()
    await expect(maleBody).toBeVisible()
}

export const onAvatarBuilder = async () => {
    const createTitle = element(by.text("Create your Yumoji"))
    const editTitle = element(by.text("Edit your Yumoji"))
    const itemTitles = ["Skin Tone", "Hair Style", "Facial Hair", "Eye Colour", "Accessories"]

    for (const i of itemTitles) {
        try {
            await expect(element(by.id(BODY_ITEM_TITLE(i)))).toBeVisible()
        } catch (e) {
            await expect(element(by.text(i))).toBeVisible()
        }
    }

    try {
        await expect(createTitle).toBeVisible()
    } catch (e) {
        await expect(editTitle).toBeVisible()
    }
}

export const onAvatarCompletionScreen = async () => {
    const copy = ["Great work! \nYour Yumoji is ready for adventure.", "Done"]

    await multipleTextVisible(copy)()
}

export const onYourYuCoin = async () => {
    const copy = [
        "2000 steps",
        "5 mindful mins",
        "1 challenge",
        "Streaks",
        "Chests",
    ]

    const value = [1, 1, 6, 250, 20]

    await expect(element(by.text("Your YuCoin Power"))).toBeVisible()

    for (let i = 0; i < copy.length; i++) {
        await expect(element(by.id(EARN_RATE_ROW(copy[i], value[i])))).toBeVisible()
    }

}

export const avatarBodyVisible = (eyes: string, hair: string, facialHair: string, glasses: string) => async () => {
    try {
        await expect(element(by.id(AVATAR_BODY([eyes, hair, facialHair, glasses])))).toBeVisible()
    } catch (e) {
        await expect(element(by.id(BUILDER_BODY([eyes, hair, facialHair, glasses])))).toBeVisible()
    }
}

export const avatarBodyVisibleWithUser = (user) => async () => {
    const eyes = user.data.avatar.leftEye.partId
    const hair = user.data.avatar.hair.partId
    const facialHair = user.data.avatar.facialHair.partId
    const glasses = user.data.avatar.glasses.partId

    const partsList = [eyes, hair, facialHair, glasses]

    await expect(element(by.id(AVATAR_BODY(partsList)))).toBeVisible()


}

export const leaderboardAvatarVisible = (facialHair: string, eyes: string, hair: string, glasses: string) => async () => {
    await expect(element(by.id(AVATAR_BODY([facialHair, eyes, hair, glasses])))).toBeVisible()
}

export const personalProductsVisible = async () => {
    const products = ["Life Insurance", "Income Protection", "Critical Illness", "Travel Insurance"]

    for (const i of products) {
        await expect(element(by.id(PERSONAL_PRODUCT(i)))).toBeVisible()
    }
}

export const onSurveyScreen = async () => {
    const surveyScreen = element(by.id(SURVEY_SCREEN))
    const title = element(by.text("What Would You Like To See?"))

    await expect(surveyScreen).toBeVisible()
    await expect(title).toBeVisible()
}

export const onSurveySubmitScreen = async () => {
    const title = element(by.text("What Would You Like To See?"))
    const buttonCopy = element(by.text("Close"))

    await expect(title).toBeVisible()
    await expect(buttonCopy).toBeVisible()

}

export const onPackageScreen = async () => {
    await expectIsVisibleViaID(PACKAGE_SCREEN)
    await multipleTextVisible(["Common", "Rare", "Epic"])()
}

export const packageScreenCorrect = (estimatedCost: number) => async () => {
    const textElements = ["How it works", "How much would it pay out?", "Additional benefits",
       "Have a question?", "FAQs", "Documents", "Terms & Conditions", "Privacy Policy", "Rewards Policy",
        "Key Facts", "Policy Guide", "YuLife General Terms of Business"]

    await scrollFromID(PACKAGE_SCREEN, "up", "slow")()
    await expect(element(by.text(`£${estimatedCost} per month`))).toBeVisible()

    for (const i of textElements) {
        let isTextVisible = await booleanTextVisible(i)
        let attempt = 0
        while (isTextVisible === false && attempt < 10) {
            await scrollFromID(FIB_BROWSE_SCREEN, "up", "slow", 0.2)()
            isTextVisible = await booleanTextVisible(i)
            attempt += 1
        }
        await expect(element(by.text(i))).toBeVisible()
    }
}