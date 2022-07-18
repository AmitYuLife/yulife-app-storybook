import {
    navigation, YUSCREEN, GET_STARTED_BUTTON, EMPTY_YUSCREEN_COPY,
    MALE_BODY, FEMALE_BODY, BODY_ITEM_TITLE,
    AVATAR_BODY, PERSONAL_PRODUCT, SURVEY_SCREEN, BUILDER_BODY, FIB_BROWSE_SCREEN
} from "@utils"
import { scrollUntilTextVisible } from "_utils/navigation/scrolling"
import { EARN_RATE_ROW, PACKAGE_INFO, SUMMARY_SCROLL_VIEW, TEXT_TEMPLATE, VALUE_DESCRIPTION, YUSCREEN_V3 } from "@ids"
import moment from "moment"


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
    await expect(subTitle).toBeVisible()

    const femaleBody = element(by.id(FEMALE_BODY))
    await expect(femaleBody).toBeVisible()

    const maleBody = element(by.id(MALE_BODY))
    await expect(maleBody).toBeVisible()

    try {
        await expect(createTitle).toBeVisible()
    } catch (e) {
        await expect(editTitle).toBeVisible()
    }
}

export const onAvatarBuilder = (screen: string) => async () => {
    const createTitle = element(by.text("Create your Yumoji"))
    const editTitle = element(by.text("Edit your Yumoji"))

    try {
        await expect(element(by.id(BODY_ITEM_TITLE(screen)))).toBeVisible()
    } catch (e) {
        await expect(element(by.text(screen))).toBeVisible()
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
    const products = ["Income Protection", "Family Income Benefit", "Critical Illness", "Travel Insurance"]

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
    await expectIsVisibleViaID(PACKAGE_INFO)
    await multipleTextVisible(["Common", "Rare", "Epic"])()
}

export const packageScreenCorrect = async () => {
    const textElements = ["How it works", "How much would it pay out?", "Other benefits", "YuLife app", "Smart Health",
                            "Documents", "Terms & Conditions", "Privacy Policy", "Rewards Policy",
                                "Key Facts", "Policy Guide", "General Terms of Business", "Have a question?", "FAQs",]
        
    for (const i of textElements) {
        try{
            await scrollUntilTextVisible(FIB_BROWSE_SCREEN, i, "down")()
            await expect(element(by.text(i))).toBeVisible()
        }
        catch(e){
            await scrollUntilTextVisible(SUMMARY_SCROLL_VIEW, i, "down")()
            await expect(element(by.text(i))).toBeVisible()
        }
    }
}

export const onYuscreenV3 = (customer:any)=> async()=>{
    const firstName = customer.data.firstName
    const lastName = customer.data.lastName
    await expect(element(by.text(`${firstName} ${lastName}`))).toBeVisible()
    await expect(element(by.id(YUSCREEN_V3(true)))).toBeVisible()
}

export const onProductDetails = (coverType: string, productName: string, earnRate: number) => async ()=>{
    const lumpSum = `x salary as lump sum`
    const yuCoin = `YuCoin Power`

    const product = TEXT_TEMPLATE(productName)
    const power = VALUE_DESCRIPTION(earnRate, yuCoin)

    const documents = TEXT_TEMPLATE("Documents")

    await expect(element(by.text(coverType))).toBeVisible()
    await expect(element(by.id(product))).toBeVisible()
    await expect(element(by.id(power))).toBeVisible()
    await expect(element(by.id(documents))).toBeVisible()
    await expect(element(by.text("Policy Details"))).toBeVisible()
}

export const onCertificate = (productName: string, customer:any, customerGroupPol:any, business:any, businessEmployee:any) => async()=>{
    const customerName = `${customer.data.firstName} ${customer.data.lastName}`
    const companyName = business.data.business_account_name
    const policyNumber = customerGroupPol.data.business_product_id
    const dateJoined = moment(businessEmployee.data.employment_start_date).format("DD/MM/YYYY")

    await expect(element(by.text(productName))).toBeVisible()
    
    await expect(element(by.text("Client name"))).toBeVisible()
    await expect(element(by.text(customerName))).toBeVisible()
    
    await expect(element(by.text("Company name"))).toBeVisible()
    await expect(element(by.text(companyName))).toBeVisible()
    
    await expect(element(by.text("Policy number"))).toBeVisible()
    await expect(element(by.text(policyNumber))).toBeVisible()
    
    await expect(element(by.text("Date joined"))).toBeVisible()
    await expect(element(by.text(dateJoined))).toBeVisible()
}