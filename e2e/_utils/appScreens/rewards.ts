import { expectIsVisibleViaText, REWARD_ITEM, expectIsVisibleViaID, LOCKED_REWARD_ITEM, WEGIFT_CONFIRMED, PURCHASE_IMAGE, booleanIdVisible, wait, REWARDS_SCREEN, REWARDS_LIST_SCREEN } from "@navigation"
import moment = require("moment")
import { scrollFromID, scrollFromText, scrollUntilTextVisible, scrollUntilIdVisible } from "_utils/navigation/scrolling"
import { TEXT_TEMPLATE } from "@ids"

type rewardType = "avios"

export function addCommasToNumber(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const rewardVisible = (reward: any) => async () => {

    const minValue = reward.data.minimum_value
    const minYucoin = addCommasToNumber(reward.data.available_denominations[0].yuCoin)
    const rewardItem = REWARD_ITEM(reward.data._id)

    let rewardItemVisible = await booleanIdVisible(rewardItem)
    const maxAttempts = 15
    let currentAttempt = 0

    while (rewardItemVisible === false && currentAttempt < maxAttempts) {
        await scrollFromID(REWARDS_SCREEN, "up", "slow")()
        rewardItemVisible = await booleanIdVisible(rewardItem)
        currentAttempt += 1
    }

    await expectIsVisibleViaText(`Get vouchers from\n£${minValue} for ${minYucoin} YuCoin`, 1500)
    await expectIsVisibleViaID(rewardItem, 1500)
}

export const specialRewardVisible = (reward: any, type: rewardType) => async () => {
    let rewardTitle: string
    let rewardSubText: string
    let rewardItem: string

    switch (type) {
        case "avios":
            const minValue = reward.data.available_denominations[0].value
            const minYucoin = addCommasToNumber(reward.data.available_denominations[0].yuCoin)

            rewardItem = REWARD_ITEM(reward.data._id)
            rewardTitle = `${minValue} avios`
            rewardSubText = `yucoin x ${minYucoin} up`

            break;
    }


    await expectIsVisibleViaID(rewardItem, 1500)
    await expectIsVisibleViaText(rewardTitle, 1500)
    await expectIsVisibleViaText(rewardSubText, 1500)
}

export const tapRewardInList = (reward: any) => async () => {
        const rewardItem = element(by.id(REWARD_ITEM(reward.data._id)))

        await scrollUntilIdVisible(REWARDS_LIST_SCREEN,REWARD_ITEM(reward.data._id),"down")
        await rewardItem.tap()
}


export const onRewardScreen = (reward: any) => async () => {
    const name = reward.data.name
    const description = reward.data.description
    const minValue = reward.data.available_denominations[0].value
    const minYucoin = reward.data.available_denominations[0].yuCoin

    const rewardItem = REWARD_ITEM(reward.data._id)
    const rewardTitle = `£${minValue} ${name} for ${minYucoin} YuCoins`
    
    // await idVisible(MARKDOWN_TEXT(rewardTitle))()
    // await idVisible(MARKDOWN_TEXT(description))()

    // await expectIsVisibleViaID(rewardItem)
    // await expectIsVisibleViaText(description)
}

export const onSpecialRewardScreen = (reward: any, type: rewardType) => async () => {
    const description = reward.data.description

    let rewardTitle: string
    let rewardSubText: string
    let rewardItem: string

    switch (type) {
        case "avios":
            const minValue = reward.data.available_denominations[0].value
            const minYucoin = addCommasToNumber(reward.data.available_denominations[0].yuCoin)

            rewardItem = REWARD_ITEM(reward.data._id)
            rewardTitle = `${minValue} avios`
            rewardSubText = `yucoin x ${minYucoin} up`

            break;
    }

    await expectIsVisibleViaID(rewardItem)
    await expectIsVisibleViaText(rewardTitle)
    await expectIsVisibleViaText(rewardSubText)

    await expectIsVisibleViaText(description)
}

export const lockedRewardVisible = (reward: any) => async () => {
    const rewardItem = LOCKED_REWARD_ITEM(reward.data._id)

    await expectIsVisibleViaID(rewardItem, 1500)
}

export const rewardDenominationsVisible = (reward: any) => async () => {
    const denominations = reward.data.available_denominations

    for (const i of denominations) {
        await expect(element(by.text(`£${i.value} - ${i.yuCoin} YuCoin`))).toBeVisible()
    };
}

export const tapDenomination = (reward: any, index: number) => async () => {
    const denomination = reward.data.available_denominations[index]
    const denominationText = element(by.id(TEXT_TEMPLATE(`£${denomination.value} - ${addCommasToNumber(denomination.yuCoin)} YuCoin`)))
    await denominationText.tap()
}

export const denominationListVisible = (reward: any, availableYuCoin: number) => async () => {
    const denominationArr = reward.data.available_denominations
    
    await expect(element(by.text(`You have ${availableYuCoin} YuCoin`))).toBeVisible()
    await expect(element(by.text(`Cancel`))).toBeVisible()

    for (const i of denominationArr) {
        await expect(element(by.text(`£${i.value} - ${addCommasToNumber(i.yuCoin)} YuCoin`))).toBeVisible()
    }

}

export const tapDenominationList = (reward: any, index = 0) => async () => {
    const denomination = reward.data.available_denominations[index]
    const denominationText = element(by.text(`£${denomination.value} - ${addCommasToNumber(denomination.yuCoin)} YuCoin`))
    const confirmationPurchaseText =  element(by.text(`You'll purchase Nike £${denomination.value} voucher with ${addCommasToNumber(denomination.yuCoin)} YuCoin.`))

    await wait(5000)()
    await expect(denominationText).toBeVisible()
    await denominationText.tap()
    await expect(confirmationPurchaseText).toBeVisible()
    await expect(element(by.text(`Cancel`))).toBeVisible()

}

export const buyButtonVisible = (reward: any, index = 0) => async () => {
    const buttonText = element(by.text(`£10 - ${addCommasToNumber(reward.data.available_denominations[index].yuCoin)} YuCoin`))
    await expect(buttonText).toBeVisible()
}

export const tapBuyButton = (reward: any, index = 0) => async () => {
    const buttonText = element(by.text(`£20 - ${reward.data.available_denominations[index].yuCoin} YuCoin`))
    await expect(buttonText).toBeVisible()
    await buttonText.longPress()
}

export const onRewardPurchasedScreen = (reward: any, index = 0) => async () => {
    const cardImageURL = element(by.id(PURCHASE_IMAGE(reward.data.card_image_url)))
    const description = reward.data.description
    const howtoRedeem = reward.data.redeem_steps.steps[index]

    const expiryPolicy = reward.data.expiry_date_policy
    const purchaseDate = moment().format("DD MMM YYYY")
    let expiryDate;

    switch (expiryPolicy) {
        case "24 months from last activity":
            expiryDate = moment().add(24, "months").format("DD MMM YYYY")
    }

    await expect(element(by.id(WEGIFT_CONFIRMED))).toBeVisible()
    await expect(cardImageURL).toBeVisible()

    await expect(element(by.text(purchaseDate))).toBeVisible()
    await expect(element(by.text(expiryDate))).toBeVisible()

    try {
        await expect(element(by.text(description))).toBeVisible()
    } catch (e) {
        await cardImageURL.swipe("up", "slow", 0.1)
        await expect(element(by.text(description))).toBeVisible()
    }
    await cardImageURL.swipe("up", "fast")

    await expect(element(by.text("see other rewards"))).toBeVisible()
    try {
        await expect(element(by.text("get voucher"))).toBeVisible()
    } catch (e) {
        await scrollFromText("How to redeem", "up", "fast")()
        await expect(element(by.text(howtoRedeem))).toBeVisible()
        await expect(element(by.text("get voucher"))).toBeVisible()
    }

    await expect(element(by.text("T&Cs"))).toBeVisible()
    await expect(element(by.text("Rewards policy"))).toBeVisible()

}


export const purchasedRewardVisible = (reward: any, denominationIndex = 0) => async () => {
    const value = reward.data.available_denominations[denominationIndex].value
    const rewardName = reward.data.name
    const yuCoinCost = addCommasToNumber(reward.data.available_denominations[denominationIndex].yuCoin)

    const title = `£${value} ${rewardName} voucher`
    const subTitle = `${yuCoinCost} YuCoin`
    const todayDay = moment().format("DD")
    const currentMonth = moment().format("MMM")

    await expect(element(by.text(title)).atIndex(denominationIndex)).toBeVisible()
    await expect(element(by.text(subTitle)).atIndex(denominationIndex)).toBeVisible()
    await expect(element(by.text(todayDay)).atIndex(denominationIndex)).toBeVisible()
    await expect(element(by.text(currentMonth)).atIndex(denominationIndex)).toBeVisible()
}

export const tapPurchasedReward = (reward: any, denominationIndex = 0) => async () => {
    const value = reward.data.available_denominations[denominationIndex].value
    const rewardName = reward.data.name

    const title = element(by.text(`£${value} ${rewardName} voucher`)).atIndex(denominationIndex)
    await title.tap()
}

export const onRewardNotAvailableScreen = async () => {
    await expect(element(by.text("the voucher is not currently available"))).toBeVisible()
    await expect(element(by.text("Please come back later."))).toBeVisible()
    await expect(element(by.text("check other rewards"))).toBeVisible()
}


