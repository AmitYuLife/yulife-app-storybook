import { navigation, YEAR_SCROLLER, MONTH_SCROLLER, booleanTextVisible, booleanIdVisible, HIGHLIGHTED_SCROLLER_VALUE, CUSTOM_COVER_SCREEN, PERCENTAGE_COVERED, wait, SCROLLER_VALUE, DUELS_HUB } from "@utils"
import { screens } from "@appScreens"
import moment = require("moment")

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

export const onEmptyDuelsHub = async()=>{
    await expect(element(by.id(DUELS_HUB))).toBeVisible()
    await expect(element(by.text("Active Duels"))).toBeVisible()
    await expect(element(by.text("Past Duels"))).toBeVisible()
    await expect(element(by.text("Challenge a colleague"))).toBeVisible()
}

export const onDuelsHub = async()=>{
    await expect(element(by.id(DUELS_HUB))).toBeVisible()
    await expect(element(by.text("Active Duels"))).toBeVisible()
    await expect(element(by.text("Past Duels"))).toBeVisible()
}

export const wagerModalVisible = async()=>{
    const copy = [
        "10 YuCoin",
        "25 YuCoin",
        "100 YuCoin"
    ]
    await multipleTextVisible(copy)()
}

export const upcomingDuelVisible = (opponent:any, yucoinAmount:number, startDate:any) => async()=>{
    const vs = `vs. ${opponent.data.firstName} ${opponent.data.lastName}`
    const yucoin = `${yucoinAmount} YuCoin`
    const date = startDate.format("DD/MM/YYYY")

    await multipleTextVisible([vs, yucoin, date])()
}

export const pastDuelVisible = (opponent: any, yucoinAmount: number, startDate: any, result:"win"|"lose") => async () => {
    const vs = `vs. ${opponent.data.firstName} ${opponent.data.lastName}`
    const date = startDate.format("DD/MM/YYYY")
    let yucoin = ""
    
    if(result = "win"){
        yucoin = `+ ${yucoinAmount} YuCoin`
    }
    if(result="lose"){
        yucoin = `- ${yucoinAmount} YuCoin`
    }

    await multipleTextVisible([vs, yucoin, date])()
}