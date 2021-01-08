import { expectIsVisibleViaText, REWARD_ITEM, expectIsVisibleViaID, LOCKED_REWARD_ITEM, WEGIFT_CONFIRMED, PURCHASE_IMAGE, booleanIdVisible, wait, REWARDS_SCREEN } from "@navigation"
import moment = require("moment")
import { scrollFromID, scrollFromText } from "_utils/navigation/scrolling"

type rewardType = "avios"

export function addCommasToNumber(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const rewardVisible = (reward: any) => async () => {

    const minValue = reward.data.minimum_value
    const minYucoin = addCommasToNumber(reward.data.available_denominations[0].yuCoin)
    const rewardItem = REWARD_ITEM(reward.data.code)

    let rewardItemVisible = await booleanIdVisible(rewardItem)
    const maxAttempts = 15
    let currentAttempt = 0

    while (rewardItemVisible === false && currentAttempt < maxAttempts) {
        await scrollFromID(REWARDS_SCREEN, "up", "slow")()
        rewardItemVisible = await booleanIdVisible(rewardItem)
        currentAttempt += 1
    }

    await expectIsVisibleViaText(`£${minValue} voucher`, 1500)
    await expectIsVisibleViaText(`yucoin x ${minYucoin}`, 1500)
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

            rewardItem = REWARD_ITEM(reward.data.code)
            rewardTitle = `${minValue} avios`
            rewardSubText = `yucoin x ${minYucoin} up`

            break;
    }


    await expectIsVisibleViaID(rewardItem, 1500)
    await expectIsVisibleViaText(rewardTitle, 1500)
    await expectIsVisibleViaText(rewardSubText, 1500)
}

export const tapRewardInList = (reward: any) => async () => {
        const rewardItem = element(by.id(REWARD_ITEM(reward.data.code)))
        await rewardItem.tap()
}


export const onRewardScreen = (reward: any) => async () => {
    const description = reward.data.description
    const minValue = reward.data.available_denominations[0].value
    const minYucoin = addCommasToNumber(reward.data.available_denominations[0].yuCoin)

    const rewardItem = REWARD_ITEM(reward.data.code)
    const rewardTitle = `£${minValue} voucher`
    const rewardSubText = `yucoin x ${minYucoin}`

    await expectIsVisibleViaID(rewardItem)
    await expectIsVisibleViaText(rewardTitle)
    await expectIsVisibleViaText(rewardSubText)

    await expectIsVisibleViaText(description)
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

            rewardItem = REWARD_ITEM(reward.data.code)
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
    const rewardItem = LOCKED_REWARD_ITEM(reward.data.code)

    await expectIsVisibleViaID(rewardItem, 1500)
    await expectIsVisibleViaText("locked", 1500)
}

export const rewardDenominationsVisible = (reward: any) => async () => {
    const denominations = reward.data.available_denominations

    for (const i of denominations) {
        await expect(element(by.text(`£${i.value}.00 - ${i.yuCoin} yucoin`))).toBeVisible()
    };
}

export const tapDenomination = (reward: any, index: number) => async () => {
    const denomination = reward.data.available_denominations[index]
    const denominationText = element(by.text(`£${denomination.value}.00 - ${denomination.yuCoin} yucoin`))
    await denominationText.tap()
}

export const denominationListVisible = (reward: any, index = 0) => async () => {
    const denomination = reward.data.available_denominations[index]
    const denominationText = element(by.text(`£${denomination.value}.00`))
    await expect(denominationText).toBeVisible()
}

export const tapDenominationList = (reward: any, index = 0) => async () => {
    const denomination = reward.data.available_denominations[index]
    await wait(5000)()
    const denominationText = element(by.text(`£${denomination.value}.00`))
    await expect(denominationText).toBeVisible()
    await denominationText.tap()
}

export const buyButtonVisible = (reward: any, index = 0) => async () => {
    const buttonText = element(by.text(`buy with ${reward.data.available_denominations[index].yuCoin} yucoin`))
    await expect(buttonText).toBeVisible()
}

export const tapBuyButton = (reward: any, index = 0) => async () => {
    const buttonText = element(by.text(`buy with ${reward.data.available_denominations[index].yuCoin} yucoin`))
    await expect(buttonText).toBeVisible()
    await buttonText.longPress()
}

export const onRewardPurchasedScreen = (reward: any) => async () => {
    const cardImageURL = element(by.id(PURCHASE_IMAGE(reward.data.card_image_url)))
    const description = reward.data.description

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
        await expect(element(by.text("get voucher"))).toBeVisible()
    }

    await expect(element(by.text("T&Cs"))).toBeVisible()
    await expect(element(by.text("Rewards policy"))).toBeVisible()

}


export const purchasedRewardVisible = (reward: any, denominationIndex = 0) => async () => {
    const value = reward.data.available_denominations[denominationIndex].value
    const rewardName = reward.data.name
    const yuCoinCost = reward.data.available_denominations[denominationIndex].yuCoin

    const title = `£${value} ${rewardName} VOUCHER`
    const subTitle = `${yuCoinCost} yucoin`

    await expect(element(by.text(title))).toBeVisible()
    await expect(element(by.text(subTitle))).toBeVisible()

}

export const tapPurchasedReward = (reward: any, denominationIndex = 0) => async () => {
    const value = reward.data.available_denominations[denominationIndex].value
    const rewardName = reward.data.name

    const title = element(by.text(`£${value} ${rewardName} VOUCHER`))
    await title.tap()
}