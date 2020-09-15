import { navigation, YEAR_SCROLLER, MONTH_SCROLLER, booleanTextVisible, booleanIdVisible, HIGHLIGHTED_SCROLLER_VALUE, CUSTOM_COVER_SCREEN, PERCENTAGE_COVERED, wait, SCROLLER_VALUE } from "@utils"
import { screens } from "@appScreens"

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    multipleTextVisible
} = navigation.common

export const {
    onEmptyYuscreen,
    onYuscreen,
    onCreateAvatarScreen,
    onAvatarBuilder,
    onAvatarCompletionScreen,
    onYourYuCoin,
    avatarBodyVisible,
    avatarBodyVisibleWithUser,
    leaderboardAvatarVisible,
    personalProductsVisible,
    onSurveyScreen,
    onSurveySubmitScreen,
    onPackageScreen,
    packageScreenCorrect
} = screens.yuscreen

export const paymentCalcVisible = async()=>{
    await expect(element(by.text("If you were to pass away at the age of:"))).toBeVisible()
    await expect(element(by.id(YEAR_SCROLLER))).toBeVisible()
    await expect(element(by.id(MONTH_SCROLLER))).toBeVisible()
}


export const yearsScrollCorrect = async () => {
    await wait(2500)()
    try {
        await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(50)))).toBeVisible()
        await expect(element(by.text("£200,000"))).toBeVisible()
    }catch(e){
        await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(51)))).toBeVisible()
        await expect(element(by.text("£190,000"))).toBeVisible()
    }
}

export const monthsScrollCorrect = async()=>{
    await wait(2500)()
    const yearIsFifty = await booleanIdVisible(HIGHLIGHTED_SCROLLER_VALUE(50))
    const yearIsFiftyOne = await booleanTextVisible(HIGHLIGHTED_SCROLLER_VALUE(51))
    
    if(yearIsFifty===true && yearIsFiftyOne === false){
        await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(50)))).toBeVisible()
        try{ 
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(10)))).toBeVisible()
            await expect(element(by.text("£191,667"))).toBeVisible()
        }catch(e){
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(11)))).toBeVisible()
            await expect(element(by.text("£190,833"))).toBeVisible()
        }
    } else if(yearIsFiftyOne === true && yearIsFifty===false){
        try{
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(51)))).toBeVisible()
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(10)))).toBeVisible()
            await expect(element(by.text("£181,667"))).toBeVisible()
        }catch(e){
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(51)))).toBeVisible()
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(11)))).toBeVisible()
            await expect(element(by.text("£180,833"))).toBeVisible()
        }
    }
}

export const onCustomCover = async()=>{
    await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(25)))).toBeVisible()
    await expect(element(by.id(CUSTOM_COVER_SCREEN))).toBeVisible()
}

export const onNextCustomCoverScreen = async()=>{
    await expect(element(by.text("Maximum protection for your loved ones"))).toBeVisible()

    try{
        await expect(element(by.id(PERCENTAGE_COVERED(36)))).toBeVisible()
    }catch(e){
        await expect(element(by.id(PERCENTAGE_COVERED(35)))).toBeVisible()
    }
}