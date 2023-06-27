import * as ids from "@ids"
import { screens } from "@appScreens"
import { navigation } from "@navigation"

export const {
    textVisible,
    idVisible,
    multipleIDVisible,
    multipleTextVisible,
    textNotVisible,
    wait,
    textVisibleAtIndex,
    idVisibleAtIndex
} = navigation.common

export const {
    scrollFromID,
    scrollFromText,
    scrollUntilIdVisible,
    swipeFromText
} = navigation.scrolling

export const {
    onAvatarBuilder,
    onCreateAvatarScreen,
    onAvatarCompletionScreen,
    onYuscreen,
    onSkinToneScreen,
    onChooseAvatarBodyScreen
} = screens.yuscreen

export const onLeaderboardConsent = async () => {
    const firstParagraph = "By joining the leaderboard, you are consenting to share details about your activity with other members of this leaderboard."
    const secondParagraph ="You can opt out at any time by tapping the name of the leaderboard and adjusting your settings."
    const copy = ["Join the Leaderboard?", firstParagraph,secondParagraph, "Yes"]

    await swipeFromText("Yes", "up", "slow")()
    for (const i of copy) {
        await expect(element(by.text(i))).toBeVisible()
    }

}

export const leaderboardVisible = (customers: any[], steps?: any[]) => async () => {
    let i = 0

    for(const customer of customers){
        const name = customer.data.firstName + " " + customer.data.lastName
        await expect(element(by.id(ids.LEADERBOARD_NAME(name)))).toBeVisible()
        const stepCount = steps?.[i]
        if(stepCount){
            await expect(element(by.text(stepCount.toString()))).toBeVisible()
        }
        i++
    }
}

export const leaderboardStatus = (leaderboardName: string, status: "active" | "inactive") => async () => {
    await wait(2000)()
    await expect(element(by.id(ids.LEADERBOARD_STATUS(leaderboardName, status)))).toBeVisible()
}

export const isOnInspectScreen = async () => {
    await idVisible(ids.INSPECT_SCREEN)()
}

export const personalDataVisible = (name: string, level: string, world: string) => async () => {
    await idVisible(ids.YUMOJI)()
    await idVisible(ids.USER_INFO(`${name} ${level}`))()
    await textVisible(world)()
}

export const duelStatsVisible = (winStreak: number, duelsWon: number) => async () => {
    await idVisible(ids.INSPECT_SECTION_HEADER("Duel Statistics"))()
    await idVisible(ids.INSPECT_ACTIVITY("Win streak"))()
    await idVisible(ids.INSPECT_ACTIVITY("Duels won"))()
    await idVisible(ids.INSPECT_DATA(winStreak, ""))()  
    await idVisible(ids.INSPECT_DATA(duelsWon, ""))()  
}

export const challengeDataVisible = (challengesDone: number, longestStreak: number) => async () => {
    await idVisible(ids.INSPECT_SECTION_HEADER("Challenge Statistics"))()
    await idVisible(ids.INSPECT_ACTIVITY("Challenges done"))()
    await idVisible(ids.INSPECT_ACTIVITY("Longest streak"))()
    await idVisible(ids.INSPECT_ACTIVITY("Yudokus done"))()
    await idVisibleAtIndex(ids.INSPECT_DATA(challengesDone, ""), 1)()  
    await idVisible(ids.INSPECT_DATA(longestStreak, "d"))()  
}

export const activitySectionHeadingVisible = (userId: string) => async () => {
    await scrollUntilIdVisible(ids.USER_INFO(userId), ids.INSPECT_ACTIVITY_PERIOD, "down")()
    await idVisible(ids.INSPECT_ACTIVITY_HEADER)()
    await idVisible(ids.INSPECT_ACTIVITY_PERIOD)()
    await textVisible("Activity")()
    await textVisible("Last 30 days")()
}

export const comparativeUserStatsVisible = (opponentAvSteps: number, myAvSteps: number) => async () => {
    await idVisible(ids.COMPARISON_STATS_SECTION, 1000)()
    await idVisible(ids.LEFT_USER)()
    await idVisible(ids.RIGHT_USER)()
    await idVisible(ids.COMPARISON_NAMES("Michael Scott"), 1000)()
    await idVisible(ids.COMPARISON_NAMES("You"), 1000)()
    await idVisible(ids.USER_YUMOJI_AVATAR, 1000)()
    await idVisible(ids.EMPTY_USER_YUMOJI_AVATAR, 1000)() 
    await idVisible(ids.COMPARISON_ACTIVITY("Average steps"), 1000)()
    await idVisible(ids.COMPARISON_ACTIVITY_OPPONENT(opponentAvSteps))() 
    await idVisible(ids.COMPARISON_ACTIVITY_MINE(myAvSteps))()  
    await idVisible(ids.WINNER(myAvSteps))() 
    await idVisible(ids.SECOND_POSITION(opponentAvSteps))() 
}

export const comparativeUserSeedStatsVisible = (opponentAvSteps: number, myAvSteps: number) => async () => {
    await idVisible(ids.COMPARISON_STATS_SECTION, 1000)()
    await idVisible(ids.LEFT_USER)()
    await idVisible(ids.RIGHT_USER)()
    await idVisible(ids.COMPARISON_NAMES("Michael Scott"), 1000)()
    await idVisible(ids.COMPARISON_NAMES("You"), 1000)()
    await idVisible(ids.USER_YUMOJI_AVATAR, 1000)()
    await idVisible(ids.EMPTY_USER_YUMOJI_AVATAR, 1000)() 
    await idVisible(ids.COMPARISON_ACTIVITY("Average steps"), 1000)()
    await idVisible(ids.COMPARISON_ACTIVITY_OPPONENT(opponentAvSteps))() 
    await idVisible(ids.COMPARISON_ACTIVITY_MINE(myAvSteps))()  
    await idVisible(ids.WINNER(myAvSteps))() 
    await idVisible(ids.SECOND_POSITION(opponentAvSteps))() 
}


export const comparativeUserCyclingMindfulnessStats = (oppAvKm: number, myAvKm: number, oppAvMins: number, myAvMins: number, ) => async () => {
    await idVisible(ids.COMPARISON_ACTIVITY("Average cycling"), 1000)()
    await idVisible(ids.COMPARISON_ACTIVITY_OPPONENT(oppAvKm), 1000)() 
    await idVisible(ids.COMPARISON_ACTIVITY_MINE(myAvKm), 1000)()  
    await idVisible(ids.WINNER(myAvKm))() 
    await idVisible(ids.SECOND_POSITION(oppAvKm))() 
    await idVisible(ids.COMPARISON_ACTIVITY("Average mindfulness"), 1000)()
    await idVisible(ids.COMPARISON_ACTIVITY_OPPONENT(oppAvMins), 1000)() 
    await idVisible(ids.COMPARISON_ACTIVITY_MINE(myAvMins), 1000)() 
    await idVisible(ids.WINNER(myAvMins))() 
    await idVisible(ids.SECOND_POSITION(oppAvKm))() 
    await textVisible(`${oppAvKm} km`)() 
    await textVisible(`${myAvKm} km`)() 
    await textVisible(`${oppAvMins} min`)() 
    await textVisible(`${myAvMins} min`)() 
}


export const myDuelStatsVisible = (duelsWon: number) => async () => {
    await idVisible(ids.INSPECT_SECTION_HEADER("Duel Statistics"))()
    await idVisible(ids.INSPECT_ACTIVITY("Win streak"))()
    await idVisible(ids.INSPECT_ACTIVITY("Duels won"))()
    await idVisible(ids.INSPECT_DATA(duelsWon, ""))()   
}

export const mySeedStatsVisible = async () => {
    await idVisible(ids.SINGLE_USER, 1000)()
    await idVisible(ids.COMPARISON_NAMES("You"), 1000)()
    await idVisible(ids.USER_YUMOJI_AVATAR, 1000)()
    await idVisible(ids.COMPARISON_ACTIVITY("Average steps"), 1000)()
    await idVisible(ids.AV_STATS(333), 1000)() 
    await scrollUntilIdVisible(ids.USER_INFO("Gill Stock 1"), ids.AV_STATS(1), "down")()
    await idVisible(ids.COMPARISON_ACTIVITY("Average cycling"), 1000)()
    await idVisible(ids.AV_STATS(1), 1000)()
}


export const myChallengeDataVisible = (longestStreak: number) => async () => {
    await idVisible(ids.INSPECT_SECTION_HEADER("Challenge Statistics"))()
    await idVisible(ids.INSPECT_ACTIVITY("Challenges done"))()
    await idVisible(ids.INSPECT_ACTIVITY("Longest streak"))()
    await idVisible(ids.INSPECT_DATA(longestStreak, "d"))()  
}

export const onChallengeAFriend = async () => {
    await textVisible("Challenge a friend!")()
    await textVisible("Want to go head-to-head? Select a friend from the leaderboard, and challenge them to a duel!")()
}

export const isOnSetWagerScreen = async () => {
    await textVisible("Set the wager")()
    await textVisible("Feeling confident? Duel for YuCoin or bragging rights!")()
}

export const isOnOutStepOpponentScreen = async () => {
    await textVisible("Out-step your opponent")()
    await textVisible("Your duel will begin the next day and you’ll have 24 hours to get in as many steps as you can!")()
}

export const challengeFriendButtonVisible =  async () => {
    await idVisible(ids.CHALLENGE_FRIEND_BUTTON)()
}

export const onEmptyDuelsHub = async () => {
    await expect(element(by.id(ids.DUELS_HUB))).toBeVisible()
    await expect(element(by.id(ids.CHALLENGE_FRIEND_BUTTON))).toBeVisible()
    await expect(element(by.id(ids.EMPTY_DUELS_HUB))).toBeVisible()
    await expect(element(by.text("You’re not duelling with anybody today."))).toBeVisible()
}

export const challengeToDuelButtonVisible = async () => {
    await idVisible(ids.CHALLENGE_DUEL_BUTTON)()
    await textVisible("Challenge to duel")()
}

export const challengeSomebodyButtonVisible = async () => {
    await idVisible(ids.CHALLENGE_DUEL_BUTTON)()
    await textVisible("Challenge somebody")()
}

export const myMindfulnessDataVisible = async () => {
    await idVisible(ids.COMPARISON_ACTIVITY("Average mindfulness"), 1000)()
    await idVisible(ids.AV_STATS(3), 1000)()
}

export const minsComparativeDrawResults = (opponentAvMinduflness: number, myAvMindfulness: number) => async () => {
    await idVisible(ids.COMPARISON_ACTIVITY("Average mindfulness"), 1000)()
    await idVisible(ids.COMPARISON_ACTIVITY_OPPONENT(opponentAvMinduflness))() 
    await idVisible(ids.COMPARISON_ACTIVITY_MINE(myAvMindfulness))()  
    await idVisibleAtIndex(ids.DRAW(opponentAvMinduflness), 0)() 
    await idVisibleAtIndex(ids.DRAW(myAvMindfulness), 1)() 
}

export const cyclingComparativeDrawResults = (opponentAvCycling: number, myAvCycling: number) => async () => {
    await idVisible(ids.COMPARISON_ACTIVITY("Average mindfulness"), 1000)()
    await idVisible(ids.COMPARISON_ACTIVITY_OPPONENT(opponentAvCycling))() 
    await idVisible(ids.COMPARISON_ACTIVITY_MINE(myAvCycling))()  
    await idVisibleAtIndex(ids.DRAW(opponentAvCycling), 0)() 
    await idVisibleAtIndex(ids.DRAW(myAvCycling), 1)() 
}


export const winStreakVisible = (winStreak: number) => async () => {
    await idVisible(ids.INSPECT_ACTIVITY("Win streak"))()
    await idVisible(ids.INSPECT_DATA(winStreak, ""))()  
}
