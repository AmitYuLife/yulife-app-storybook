import { navigation, LEADERBOARD_NAME, LEADERBOARD_STATUS, LEADERBOARD_SCROLL_LIST, INSPECT_SCREEN, YUMOJI, INSPECT_ACTIVITY , USER_INFO, INSPECT_DATA, CHALLENGE_DUEL_BUTTON, INSPECT_ACTIVITY_SECTION, COMPARISON_STATS_SECTION, COMPARISON_NAMES, COMPARISON_ACTIVITY, COMPARISON_ACTIVITY_MINE, COMPARISON_ACTIVITY_OPPONENT, USER_YUMOJI_AVATAR, INSPECT_SECTION_HEADER, INSPECT_ACTIVITY_HEADER, INSPECT_ACTIVITY_PERIOD, WINNER, SECOND_POSITION, SINGLE_USER, LEFT_USER, RIGHT_USER, AV_STATS, CHALLENGE_FRIEND_BUTTON, DUELS_HUB, EMPTY_DUELS_HUB, EMPTY_USER_YUMOJI_AVATAR} from "@utils"
import { screens } from "@appScreens"

export const {
    textVisible,
    idVisible,
    multipleIDVisible,
    multipleTextVisible,
    textNotVisible,
    wait,
    textVisibleAtIndex
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
    onYuscreen
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
        await expect(element(by.id(LEADERBOARD_NAME(name)))).toBeVisible()
        const stepCount = steps?.[i]
        if(stepCount){
            await expect(element(by.text(stepCount.toString()))).toBeVisible()
        }
        i++
    }
}

export const leaderboardStatus = (leaderboardName: string, status: "active" | "inactive") => async () => {
    await wait(2000)()
    await expect(element(by.id(LEADERBOARD_STATUS(leaderboardName, status)))).toBeVisible()
}

export const isOnInspectScreen = async () => {
    await idVisible(INSPECT_SCREEN)()
}

export const personalDataVisible = (name: string, level: string, world: string) => async () => {
    await idVisible(YUMOJI)()
    await idVisible(USER_INFO(`${name} ${level}`))
    await textVisible(world)()
}

export const duelStatsVisible = (winStreak: number, duelsWon: number) => async () => {
    await idVisible(INSPECT_SECTION_HEADER("Duel Statistics"))()
    await idVisible(INSPECT_ACTIVITY("Win streak"))()
    await idVisible(INSPECT_ACTIVITY("Duels won"))()
    await idVisible(INSPECT_DATA(winStreak, ""))()  
    await idVisible(INSPECT_DATA(duelsWon, ""))()  
}

export const challengeDataVisible = (challengesDone: number, longestStreak: number) => async () => {
    await idVisible(INSPECT_SECTION_HEADER("Challenge Statistics"))()
    await idVisible(INSPECT_ACTIVITY("Challenges done"))()
    await idVisible(INSPECT_ACTIVITY("Longest streak"))()
    await idVisible(INSPECT_DATA(challengesDone, ""))()  
    await idVisible(INSPECT_DATA(longestStreak, "d"))()  
}

export const activitySectionHeadingVisible = async () => {
    await idVisible(INSPECT_ACTIVITY_HEADER)()
    await idVisible(INSPECT_ACTIVITY_PERIOD)()
    await textVisible("Activity")()
    await textVisible("Last 30 days")()
}

export const comparativeUserStatsVisible = (opponentAvSteps: number, myAvSteps: number) => async () => {
    await idVisible(COMPARISON_STATS_SECTION, 1000)()
    await idVisible(LEFT_USER)()
    await idVisible(RIGHT_USER)()
    await idVisible(COMPARISON_NAMES("Michael Scott"), 1000)()
    await idVisible(COMPARISON_NAMES("You"), 1000)()
    await idVisible(USER_YUMOJI_AVATAR, 1000)()
    await idVisible(EMPTY_USER_YUMOJI_AVATAR, 1000)() 
    await idVisible(COMPARISON_ACTIVITY("Average steps"), 1000)()
    await idVisible(COMPARISON_ACTIVITY_OPPONENT(opponentAvSteps))() 
    await idVisible(COMPARISON_ACTIVITY_MINE(myAvSteps))()  
    await idVisible(WINNER(myAvSteps))() 
    await idVisible(SECOND_POSITION(opponentAvSteps))() 
}

export const comparativeUserSeedStatsVisible = (opponentAvSteps: number, myAvSteps: number) => async () => {
    await idVisible(COMPARISON_STATS_SECTION, 1000)()
    await idVisible(LEFT_USER)()
    await idVisible(RIGHT_USER)()
    await idVisible(COMPARISON_NAMES("Michael Scott"), 1000)()
    await idVisible(COMPARISON_NAMES("You"), 1000)()
    await idVisible(USER_YUMOJI_AVATAR, 1000)()
    await idVisible(EMPTY_USER_YUMOJI_AVATAR, 1000)() 
    await idVisible(COMPARISON_ACTIVITY("Average steps"), 1000)()
    await idVisible(COMPARISON_ACTIVITY_OPPONENT(opponentAvSteps))() 
    await idVisible(COMPARISON_ACTIVITY_MINE(myAvSteps))()  
    await idVisible(WINNER(opponentAvSteps))() 
    await idVisible(SECOND_POSITION(myAvSteps))() 
}


export const comparativeUserCyclingMindfulnessStats = (oppAvKm: number, myAvKm: number, oppAvMins: number, myAvMins: number, ) => async () => {
    await idVisible(COMPARISON_ACTIVITY("Average cycling"), 1000)()
    await idVisible(COMPARISON_ACTIVITY_OPPONENT(oppAvKm), 1000)() 
    await idVisible(COMPARISON_ACTIVITY_MINE(myAvKm), 1000)()  
    await idVisible(WINNER(oppAvKm))() 
    await idVisible(SECOND_POSITION(myAvKm))() 
    await idVisible(COMPARISON_ACTIVITY("Average mindfulness"), 1000)()
    await idVisible(COMPARISON_ACTIVITY_OPPONENT(oppAvMins), 1000)() 
    await idVisible(COMPARISON_ACTIVITY_MINE(myAvMins), 1000)() 
    await idVisible(WINNER(oppAvMins))() 
    await idVisible(SECOND_POSITION(myAvMins))() 
    await textVisible(`${oppAvKm} km`)() 
    await textVisible(`${myAvKm} km`)() 
    await textVisible(`${oppAvMins} min`)() 
    await textVisible(`${myAvMins} min`)() 
}


export const myDuelStatsVisible = (duelsWon: number) => async () => {
    await idVisible(INSPECT_SECTION_HEADER("Duel Statistics"))()
    await idVisible(INSPECT_ACTIVITY("Win streak"))()
    await idVisible(INSPECT_ACTIVITY("Duels won"))()
    await idVisible(INSPECT_DATA(duelsWon, ""))()   
}

export const mySeedStatsVisible = async () => {
    await idVisible(SINGLE_USER, 1000)()
    await idVisible(COMPARISON_NAMES("You"), 1000)()
    await idVisible(USER_YUMOJI_AVATAR, 1000)()
    await idVisible(COMPARISON_ACTIVITY("Average steps"), 1000)()
    await idVisible(AV_STATS(322), 1000)() 
    await idVisible(COMPARISON_ACTIVITY("Average cycling"), 1000)()
    await idVisible(AV_STATS(0.1), 1000)()
}


export const myChallengeDataVisible = (longestStreak: number) => async () => {
    await idVisible(INSPECT_SECTION_HEADER("Challenge Statistics"))()
    await idVisible(INSPECT_ACTIVITY("Challenges done"))()
    await idVisible(INSPECT_ACTIVITY("Longest streak"))()
    await idVisible(INSPECT_DATA(longestStreak, "d"))()  
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
    await idVisible(CHALLENGE_FRIEND_BUTTON)()
}

export const onEmptyDuelsHub = async () => {
    await expect(element(by.id(DUELS_HUB))).toBeVisible()
    await expect(element(by.id(CHALLENGE_FRIEND_BUTTON))).toBeVisible()
    await expect(element(by.id(EMPTY_DUELS_HUB))).toBeVisible()
    await expect(element(by.text("You’re not duelling with anybody today."))).toBeVisible()
}

export const challengeToDuelButtonVisible = async () => {
    await idVisible(CHALLENGE_DUEL_BUTTON)()
    await textVisible("Challenge to duel")()
}

export const challengeSomebodyButtonVisible = async () => {
    await idVisible(CHALLENGE_DUEL_BUTTON)()
    await textVisible("Challenge somebody")()
}

export const myMindfulnessDataVisible = async () => {
    await idVisible(COMPARISON_ACTIVITY("Average mindfulness"), 1000)()
    await idVisible(AV_STATS(0), 1000)()
}
