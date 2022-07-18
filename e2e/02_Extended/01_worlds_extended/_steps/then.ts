import { navigation, expectIsVisibleViaText, CHALLENGE_HISTORY_YUCOIN_STARS, navigateViaText, wait } from "@utils"
import { screens } from "@appScreens"

export const {
    idVisible,
    textVisible,
    textNotVisible,
    idExist,
    textVisibleAtIndex
} = navigation.common

export const {
} = screens.streaks

export const {
    onChallengeComplete,
    onMeditationChallengeComplete
} = screens.challenges



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
      const id = CHALLENGE_HISTORY_YUCOIN_STARS(str, starsCount[yuCoinIndex], challengeType, yuCoinIndex);
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
    await expectIsVisibleViaText("Today's challenges (1/3)")
    await expectIsVisibleViaText("Short stroll (400 steps)")
    await expectIsVisibleViaText("Take a challenge (2 left)")
}

export const forestThreeRewardsVisible = () => async () => {
    await textVisible("1 day 2x surge")
    await textVisible("+1 Challenge per day")
    await textVisible("Ocean Outfit")
    await navigateViaText("Claim rewards")
}

export const oceanThreeRewardsVisible = () => async () => {
    await textVisible("1 day 2x surge")
    await textVisible("+1 Challenge per day")
    await textVisible("Desert Outfit")
    await navigateViaText("Claim rewards")
}

export const mountainYunityFirstPartCorrect = () => async () => {
    textVisible("You've achieved Yunity with the Mountain ...", 4000)
    navigateViaText("Continue")
}

export const mountainChestMessageVisible = () => async () => {
    textVisible("You have earned Yunity Mountain Chest", 3000)
}

export const mountainTwoRewardsVisible = () => async () => {
    await textVisible("7 day 2x surge")
    await textVisible("The Yuniversal Reflection")
    await navigateViaText("Claim rewards")
}

export const isOnExploreYuniverseScreen = () => async () => {
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

export const desertThreeRewardsVisible = () => async () => {
    await textVisible("1 day 2x surge")
    await textVisible("+1 Challenge per day")
    await textVisible("Mountain Outfit")
    await navigateViaText("Claim rewards")
}
 
