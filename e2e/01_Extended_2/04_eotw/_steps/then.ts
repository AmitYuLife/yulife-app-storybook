import { navigation, navigateViaText, wait, CHALLENGE_SET, CHALLENGE_TILE, TEXT_TEMPLATE, SURGE_ICON, CELESTIAL_CARD, CELESTIAL_CHEST_SCREEN, CHALLENGE_HISTORY_STARS, WEEKLY_PROGRESS_BAR } from "@utils"
import { screens } from "@appScreens"
import { USER_1 } from "@data"


export const {
    idVisible,
    textVisible,
    textNotVisible,
    idExist,
    textVisibleAtIndex
} = navigation.common

export const {
    onChallengeComplete,
    onMeditationChallengeComplete
} = screens.challenges

export const {
    swipeFromText
} = navigation.scrolling

export const {

    onCreateAvatarScreen,
} = screens.yuscreen


export const mountainChestMessageVisible = () => async () => {
    textVisible("You have earned Yunity Mountain Chest", 3000)
}

export const yunityCorrect = (worldType: "Forest" | "Ocean" |"Desert" |"Mountain") => async()=>{
    await wait(5000)()
    let label = ""
    let subheading = ""

    switch(worldType){
        case "Forest":
            label = "You’ve achieved Yunity with the Forest"
            subheading = "Take a deep, celebratory breath.\nYou earned a Yunity forest chest!"
            break 
        case "Ocean":
            label = "You’ve achieved Yunity with the Ocean"
            subheading = "You took the plunge and ascended victorious. You earned a Yunity ocean chest!"
            break 
        case "Desert":
            label = "You’ve achieved Yunity with the Desert"
            subheading = "You are your own wellbeing oasis and earned a Yunity desert chest!"
            break
        case "Mountain":
            label = "You've achieved Yunity with the Mountain..."
            subheading = "You’re ready to explore the Yuniverse in your enlightened state. Enjoy your Yunity Mountain Chest and floating through the cosmos."
    }
    await textVisible(label, 3000)()
    await navigateViaText("Continue", 3000)
    mountainChestMessageVisible()
    await navigateViaText("Open the chest", 3000)
}

export const mountainTwoRewardsVisible = () => async () => {
    await textVisible("7 day 2x surge")()
    await textVisible("The Yuniversal Reflection")()
    await navigateViaText("Claim rewards")
}

export const isOnExploreYuniverseScreen = () => async () => {
    await textVisible("With your first Yuniversal journey complete, now is a time for reflection and gratitude as you drift amongst the stars. Familiar friends will guide you on your path towards a celestial chest, and what’s inside ...", 3000)
}

export const yuniverseChallengesVisible = async () => {
    await idVisible(CHALLENGE_SET)()
    await idVisible(CHALLENGE_TILE("short stroll"))()
    await idVisible(CHALLENGE_TILE("meditation"))()
    await swipeFromText("meditation", "up", "fast")()
    await idVisible(CHALLENGE_TILE("fiit"))()
    await swipeFromText("fiit", "down", "fast")()
}

export const yuniverseChallengesYuCoinValuesCorrect = (earnRate: number) => async () => {
    const yuniverseSurge = 2
    await textVisible(`${1 * yuniverseSurge * earnRate} YuCoin`)()
    await textVisible(`${1 * yuniverseSurge * earnRate} - ${5 * earnRate * yuniverseSurge} YuCoin`)()
    await textVisibleAtIndex(`${2 * yuniverseSurge * earnRate} - ${6 * earnRate * yuniverseSurge} YuCoin`, 0)()
    await textVisibleAtIndex(`${2 * yuniverseSurge * earnRate} - ${6 * earnRate * yuniverseSurge} YuCoin`, 1)()
    await swipeFromText("meditation", "up", "fast")()
    await textVisible(`${6 * earnRate * yuniverseSurge} YuCoin`)()
    await swipeFromText("fiit", "down", "fast")()
}

export const yucoinTodayEarnedWithSurge = (yucoinStart: number, yucoinEarned: number) => async () => {
    const totalYuCoin = (yucoinStart + yucoinEarned)
    await textVisible(`${totalYuCoin} YuCoin today`)()
}


export function addCommasToNumber(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const stepsDoneToday = (steps: number) => async () => {
    const stepsComma = addCommasToNumber(steps)
    await textVisible(`${stepsComma} steps`)()
}

export const iCanSeeSurgeIcon = (multiplier: string, expireDate: string) => async () => {
    await idVisible(TEXT_TEMPLATE(multiplier))()
    await idVisible(TEXT_TEMPLATE(expireDate))()
    await idVisible(SURGE_ICON)()
}

export const stepsChallengeDataCorrect = (stage: number, yucoinEarned: number, steps: number) =>  async () => {
    await textVisible(`Stage ${stage}`)()
    await textVisible(`${yucoinEarned}`)()
    await textVisible(`${steps} steps`)()
}

export const meditationChallengeDataCorrect = (stage: number, yucoinEarned: number, mins: number) =>  async () => {
    await textVisible(`Stage ${stage}`)()
    await textVisible(`${yucoinEarned}`)()
    await textVisible(`${mins} minutes`)()
}

export const celestialChestEarned = async () => {
    await wait(2000)()
    await idVisible(CELESTIAL_CHEST_SCREEN)()
    await textVisible("You've earned the\nCelestial Chest!")() 
} 

export const celestialChestAwardsVisible = (user: typeof USER_1) => async () => {
    const yuCoinEarnt = user.data.earnRate * 100

    await textVisible("You have earned")()
    await idVisible(CELESTIAL_CARD("25\nDonations"))() 
    await idVisible(CELESTIAL_CARD(`${yuCoinEarnt}\nYuCoin`))() 
}

export const challengesAvailableVisible = async () => {
    await idVisible(CHALLENGE_SET)()
    await idVisible(CHALLENGE_TILE("short stroll"))()
    await idVisible(CHALLENGE_TILE("brisk walk"))()
    await idVisible(CHALLENGE_TILE("long walk"))()
    await idVisible(CHALLENGE_TILE("meditation"))()
    await swipeFromText("meditation", "up", "fast")()
    await idVisible(CHALLENGE_TILE("fiit"))()
    await swipeFromText("fiit", "down", "fast")()
}

export const challengeStarsCorrect = (starCount: number, challengeType: string, ) => async () => {
    for (let i = 0; i < starCount; i += 1) {
        await expect(element(by.id(CHALLENGE_HISTORY_STARS(i, challengeType)))).toBeVisible()
    }
}

export const challengesAndYuCoinsAwardedVisible = async () => {
    await textVisible("short stroll")()
    await textVisibleAtIndex("0 min", 0)()
    await textVisible("6 yucoin")()
    await challengeStarsCorrect(3, "short stroll")()
    await textVisible("brisk walk")()
    await textVisibleAtIndex("0 min", 1)()
    await textVisible("30 yucoin")()
    await challengeStarsCorrect(3, "brisk walk")()
    await textVisible("long walk")()
    await textVisibleAtIndex("0 min", 2)()
    await textVisible("24 yucoin")()
    await challengeStarsCorrect(2, "long walk")()
    await textVisible("meditation")()
    await textVisible("10 mins")()
    await textVisible("12 yucoin")()
    await challengeStarsCorrect(1, "meditation")()
}

export const weeklyChallengeIsVisible = (amount: string) => async () => {
    await textVisible(`${amount} coins`)()
    await textVisible(amount)()
}

export const weeklyQuestsPopUpVisible = async () => {
    await textVisible("Weekly quest", 1000)()
    await textVisible("Pick your challenge.")()
    await weeklyChallengeIsVisible("100")()
    await textVisible("Let's go")()
}

export const challengeSelectedModalVisible = (amount: string, challengeAmount: string) => async () => {
    await textVisible("Reward", 500)()
    await textVisible(amount)()
    await textVisible(`0 / ${challengeAmount} challenges`)()
    await textVisible("Close")()
}

export const challengeProgressShown = (progress: number, max: number, color: string) => async () => {
    await idVisible(WEEKLY_PROGRESS_BAR(progress, max, color), 1000)()
    await textVisible(`${progress} / ${max} challenges`)()
}

export const completedChallengeModalVisible = async () => {
    await textVisible("Done! Claim your reward.", 1000)()
    await textVisible("Claim")()
}

export const challengeIsClaimed = (progress: number, max: number) => async () => {
    await textVisible("Good job! Be sure to return next week.", 750)()
    await textVisible("Claimed")()
    await idVisible(WEEKLY_PROGRESS_BAR(progress, max, "#40C057"))()
}