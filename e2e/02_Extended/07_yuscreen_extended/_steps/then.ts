import { navigation, YEAR_SCROLLER, MONTH_SCROLLER, booleanTextVisible, booleanIdVisible, HIGHLIGHTED_SCROLLER_VALUE, CUSTOM_COVER_SCREEN, PERCENTAGE_COVERED, wait, SCROLLER_VALUE } from "@utils"
import { screens } from "@appScreens"

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    multipleTextVisible,
    tryCatchTextVisible
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


export const yearsScrollCorrect = async () => {
    await wait(2500)()
    try {
        await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(41)))).toBeVisible()
        await expect(element(by.text("£290,000"))).toBeVisible()
    }catch(e){
        await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(42)))).toBeVisible()
        await expect(element(by.text("£280,000"))).toBeVisible()
    }
}

export const monthsScrollCorrect = async()=>{
    await wait(2500)()
    const yearIsFourtyOne = await booleanIdVisible(HIGHLIGHTED_SCROLLER_VALUE(41))
    const yearIsFourtyTwo = await booleanTextVisible(HIGHLIGHTED_SCROLLER_VALUE(42))
    
    if(yearIsFourtyOne===true && yearIsFourtyTwo === false){
        await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(41)))).toBeVisible()
        try{ 
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(1)))).toBeVisible()
            await expect(element(by.text("£289,167"))).toBeVisible()
        }catch(e){
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(2)))).toBeVisible()
            await expect(element(by.text("£288,833"))).toBeVisible()
        }
    } else if(yearIsFourtyTwo === true && yearIsFourtyOne===false){
        try{
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(42)))).toBeVisible()
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(1)))).toBeVisible()
            await expect(element(by.text("£279,167"))).toBeVisible()
        }catch(e){
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(42)))).toBeVisible()
            await expect(element(by.id(HIGHLIGHTED_SCROLLER_VALUE(2)))).toBeVisible()
            await expect(element(by.text("278,833"))).toBeVisible()
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