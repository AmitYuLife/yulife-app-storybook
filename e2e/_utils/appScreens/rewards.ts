import { expectIsVisibleViaText, REWARD_ITEM, expectIsVisibleViaID, LOCKED_REWARD_ITEM, WEGIFT_CONFIRMED, PURCHASE_IMAGE } from "@navigation"
import moment = require("moment")
import { scrollFromID } from "_utils/navigation/scrolling"

type rewardType = "avios"

export const rewardVisible = (reward: any) => async () => {
    const minValue = reward.data.minimum_value
    const minYucoin = reward.data.available_denominations[0].yuCoin
    const rewardItem = REWARD_ITEM(reward.data.code)

    await expectIsVisibleViaText(`£${minValue} voucher`)
    await expectIsVisibleViaText(`yucoin x ${minYucoin}`)
    await expectIsVisibleViaID(rewardItem)
}

export const specialRewardVisible = (reward: any, type: rewardType) => async () => {
    let rewardTitle: string
    let rewardSubText: string
    let rewardItem: string

    switch (type) {
        case "avios":
            const minValue = reward.data.available_denominations[0].value
            const minYucoin = reward.data.available_denominations[0].yuCoin

            rewardItem = REWARD_ITEM(reward.data.code)
            rewardTitle = `${minValue} avios`
            rewardSubText = `yucoin x ${minYucoin} up`

            break;
    }

    await expectIsVisibleViaID(rewardItem)
    await expectIsVisibleViaText(rewardTitle)
    await expectIsVisibleViaText(rewardSubText)
}

export const tapRewardInList = (reward: any) => async () => {
    if (reward.data.available_denominations.length === 0) {
        console.log(JSON.stringify(reward.data.available_denominations.length))
        const rewardItem = element(by.id(LOCKED_REWARD_ITEM(reward.data.code)))
        await rewardItem.tap()

    } else if (reward.data.available_denominations.length > 0) {
        const rewardItem = element(by.id(REWARD_ITEM(reward.data.code)))
        await rewardItem.tap()
    }
}


export const onRewardScreen = (reward: any) => async () => {
    const description = reward.data.description
    const minValue = reward.data.available_denominations[0].value
    const minYucoin = reward.data.available_denominations[0].yuCoin

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
            const minYucoin = reward.data.available_denominations[0].yuCoin

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

    await expectIsVisibleViaID(rewardItem)
    await expectIsVisibleViaText("locked")
}

export const purchasesTabEmpty = async () => {
    const copy = ["It’s empty!", "Buy a voucher and it will appear here", "check rewards",]

    copy.forEach(async i => {
        await expectIsVisibleViaText(i)
    });
}

export const rewardDenominationsVisible = (reward: any) => async () => {
    const denominations = reward.data.available_denominations

    denominations.forEach(async i => {
        await expect(element(by.text(`£${i.value}.00 - ${i.yuCoin} yucoin`))).toBeVisible()
    });
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
    await buttonText.tap()
}

export const onRewardPurchasedScreen = (reward: any) => async () => {
    const cardImageURL = element(by.id(PURCHASE_IMAGE(reward.data.card_image_url)))

    const description = reward.data.description
    const howToRedeem = reward.data.redeem_steps.steps

    const expiryPolicy = reward.data.expiry_date_policy
    const purchaseDate = moment().format("DD MMMM YYYY")
    let expiryDate;

    switch (expiryPolicy) {
        case "24 months from last activity":
            expiryDate = moment().add(24, "months").format("DD MMMM YYYY")
    }

    await expect(element(by.id(WEGIFT_CONFIRMED))).toBeVisible()
    await expect(cardImageURL).toBeVisible()

    await expect(element(by.text(description))).toBeVisible()
    await expect(element(by.text(purchaseDate))).toBeVisible()
    await expect(element(by.text(expiryDate))).toBeVisible()

    await cardImageURL.swipe("up", "fast")

    // howToRedeem.forEach(async i => {
    //     await expect(element(by.text(i))).toBeVisible()
    // });

    await expect(element(by.text("see other rewards"))).toBeVisible()
    await expect(element(by.text("get voucher"))).toBeVisible()
    await expect(element(by.text("T&Cs"))).toBeVisible()
    await expect(element(by.text("Reward policy"))).toBeVisible()

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