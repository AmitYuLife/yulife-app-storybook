import {
    navigation, YUSCREEN, GET_STARTED_BUTTON, EMPTY_YUSCREEN_COPY,
    MALE_BODY, FEMALE_BODY, BODY_ITEM_TITLE, multipleTextVisible,
    AVATAR_BODY, PERSONAL_PRODUCT, SURVEY_SCREEN, BUILDER_BODY
} from "@utils"
import { scrollFromText } from "_utils/navigation/scrolling"

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible
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
    const createTitle = element(by.text("Create your avatar"))
    const editTitle = element(by.text("Edit your avatar"))
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
    const createTitle = element(by.text("Create your avatar"))
    const editTitle = element(by.text("Edit your avatar"))
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
    const copy = ["Great work! \nYour avatar is ready for adventure.", "Done"]

    await multipleTextVisible(copy)()
}

export const onYourYuCoin = async () => {
    const copy = [
        "Your YuCoin",
        "Power-Ups",
        "Life Insurance",
        "Earn Rate Explained",
        "2000 Steps",
        "5 Mindful Minutes",
        "1 Challenge",
        "Streaks",
        "Chests",
    ]

    for (let i = 0; i < copy.length; i++) {
        try {
            await expect(element(by.text(copy[i]))).toBeVisible()
        } catch (e) {
            await scrollFromText("Power-Ups", "up", "fast")()
            await expect(element(by.text(copy[i]))).toBeVisible()
        }

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
    const products = ["LifeInsurance", "IncomeProtection", "CriticalIllness", "TravelInsurance"]

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