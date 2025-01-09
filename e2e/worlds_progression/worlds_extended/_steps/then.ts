import { navigation } from "@utils"
import { screens } from "@appScreens"
import { swipeFromText } from "_utils/navigation/scrolling"
import { expect } from 'detox'
import * as ids from "@ids"

export const {
    idVisible,
    textVisible,
    textNotVisible,
    idExist,
    textVisibleAtIndex,
    expectIsVisibleViaText,
    navigateViaText, 
    wait, 
    idVisibleAtIndex
} = navigation.common

export const {
} = screens.streaks

export const {
    onChallengeComplete,
    onMeditationChallengeComplete,
    canSeeChallengeTiles,
    yunityRewardsVisible
} = screens.challenges

export const {
    scrollFromText
} = navigation.scrolling

export const {
    unlockedYumojiItemsVisible
} = screens.yuscreen


export const onChallengeHistory = (challengeType: string, levelNum: number, yucoinNums: number[], starsCount: number[], timeSpent?: number, steps?: number) => async () => {
    const fullHistory = "Full history"
    const level = `level ${levelNum}`

    let values = [challengeType, level, fullHistory]
    
    if (timeSpent > 1) {
        values.push(`${timeSpent} mins`)
    } else if (timeSpent === 1) {
        values.push(`${timeSpent} mins`)
    }

    if (steps > 1) {
        const stepCount = `${steps} steps`
        values.push(stepCount)
    }

    for (const value of values ) {
        await expect(element(by.text(value))).toBeVisible() 
    }

    let yuCoinIndex = 0;

    for (const yucoin of yucoinNums) {
      const str = `${yucoin}`;
      const id = ids.CHALLENGE_HISTORY_YUCOIN_STARS(str, starsCount[yuCoinIndex], challengeType, yuCoinIndex);
      await expect(element(by.id(id))).toBeVisible();
      yuCoinIndex++
    }
}



export const yunityCorrect = (worldType: "Forest" | "Ocean" |"Desert" |"Mountain1") => async()=>{
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
        case "Mountain1":
            label = "... and you’ve completed your first journey for unity!"
            subheading = "You’re ready to explore the Yuniverse in your enlightened state. Enjoy your Yunity Mountain Chest and floating through the cosmos."
    }
    
    try{
        await textVisible(label, 3000)
        await textVisible(subheading)()
        await navigateViaText("Continue")
    }catch(e){
        await textVisible(label, 3000)
        await navigateViaText("Continue")
    }

}

export const onTodaysYucoin = (steps = 0, mindfulness = 0) => async () => {
    await expectIsVisibleViaText(`${steps} / 12000 steps`)
    await expectIsVisibleViaText(`${mindfulness} / 30 mindful mins`)
    await textVisibleAtIndex("0/60",0)
    await textVisibleAtIndex("0/60",1)
    await textVisible("10")
    await expectIsVisibleViaText("Today's challenges (1/4)")
    await expectIsVisibleViaText("Short stroll (400 steps)")
    await expectIsVisibleViaText("Take a challenge (3 left)")
}

export const oceanThreeRewardsVisible = async () => {
    await textVisible("1 day 2x surge")
    await textVisible("+1 Challenge per day")
    await textVisible("Desert Outfit")
    await navigateViaText("Claim rewards")
}

export const mountainYunityFirstPartCorrect = async () => {
    textVisible("You've achieved Yunity with the Mountain ...", 4000)
    navigateViaText("Continue")
}

export const mountainChestMessageVisible = async () => {
    textVisible("You have earned Yunity Mountain Chest", 3000)
}

export const isOnExploreYuniverseScreen = async () => {
    await textVisible("With your first Yuniversal journey complete, now is a time for reflection and gratitude as you drift amongst the stars. Familiar friends will guide you on your path towards a celestial chest, and what’s inside ...", 3000)
    await navigateViaText("Explore the Yuniverse")
}

export const isOnChestScreen = (worldType: "Forest" | "Ocean" |"Desert" |"Mountain1") => async()=> {
    await wait(5000)()
    let label = ""
    let subheading = ""

    switch(worldType){
        case "Forest":
            label = "You have earned Yunity Forest Chest!"
            break 
        case "Ocean":
            label = "You have earned Yunity Ocean Chest!"
            break 
        case "Desert":
            label = "You have earned Yunity Desert Chest!"
            break
        case "Mountain1":
            label = "You have earned Yunity Mountain Chest!"
    }

    await textVisible(label, 3000)
}
 
export const nextLevelLocked = async () => {
    // const timeLeft = getTimeRemaining(USER_GAME_STATE_60.data.nextLevelAvailableAt).time
    await idVisible(ids.CHALLENGE_UNAVAILABLE)()
    // await idVisible(TEXT_TEMPLATE(`The next one will be available in ${timeLeft}`))()
    await textVisible("You have just completed a level")()
}

export const nextYuniverseLevelLocked = (level: string) => async () => {
    await textVisible(`Unlock at level ${level}`)()
}

export const challengesAvailableVisible = async () => {
    await idVisible(ids.CHALLENGE_SET)()
    await idVisible(ids.CHALLENGE_TILE("Short Stroll"))()
    await idVisible(ids.CHALLENGE_TILE("Brisk Walk"))()
    await idVisible(ids.CHALLENGE_TILE("Long Walk"))()
    await idVisible(ids.CHALLENGE_TILE("Meditation"))()
    await swipeFromText("Meditation", "up", "fast")()
}

export const challengeStarsCorrect = (starCount: number, challengeType: string, ) => async () => {
    for (let i = 0; i < starCount; i += 1) {
        await expect(element(by.id(ids.CHALLENGE_HISTORY_STARS(i, challengeType)))).toBeVisible()
    }
}

export const yuniverseChallengesVisible = async () => {
    await idVisible(ids.CHALLENGE_SET)()
    await idVisible(ids.CHALLENGE_TILE("Short Stroll"))()
    await idVisible(ids.CHALLENGE_TILE("Meditation"))()
    await swipeFromText("Meditation", "up", "fast")()
    await idVisible(ids.CHALLENGE_TILE("Fiit Class"))()
    await swipeFromText("Fiit Class", "down", "fast")()
}

export const challengesAndYuCoinsAwardedVisible = async () => {
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Short Stroll", "80", 3))()
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Brisk Walk", "120", 3))()
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Long Walk", "160", 3))()
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Meditation", "40", 1))()
}
