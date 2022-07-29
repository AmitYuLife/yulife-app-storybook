import { navigation } from "@utils"
import { screens } from "@appScreens"
import moment = require("moment")
import { GOALS_1 } from "_utils/data/mongo/goals";
import { GOAL_REWARD_MILESTONES_1, GOAL_REWARD_MILESTONES_2 } from "@data";

export const {
    idVisible,
    textVisible,
    textNotVisible,
    multipleTextVisible,
    expectIsVisibleViaText,
    completedTodayStreakCopyVisible,
    idNotVisible,
    textVisibleAtIndex,
    multipleTextNotVisible,
    idVisibleAtIndex
} = navigation.common

export const {
    onChallengeComplete,
} = screens.challenges


export const iCanSeeGoal = (challenge: string) => async () => {
    await textVisible("NEW")()
    await textVisible("Join")()
    await textVisible("Test event detox")()
    await textVisible(`${challenge} challenges`)()
    await textVisible("6 days left")()
    await textVisible("0 joined")()
}

export const iCanSeePopUp = async () => {
    await textVisible("Ready to join?")()
    await textVisible("Join the event to participate")()
    await textVisible("Cancel", 2000)()
    await textVisible("Confirm")()
}

export const iCanSeeGoalEventScreen = (challenge: string) => async () => {
    const descriptionTitle = GOALS_1.data.descriptionTitle
    const description = GOALS_1.data.description
   
    await textVisible("Test event detox", 4000)()
    await textVisible(`${challenge} challenges`)()
    await textVisible(description)
    await textVisible(descriptionTitle)

}

export const iCanSeeTaskDetails = async () => {
    const task = "Task"
    const taskDescription = "Complete any challenge. Challenges can be started through the quest menu."

    await textVisible(task)
    await textVisible(taskDescription)
}

export const iCanSeeGoalToolTip = async () => {
    const toolTip = GOAL_REWARD_MILESTONES_1.data.rewardTooltip
    const toolTipButton = "Got it"

    await textVisible(toolTip)
    await textVisible(toolTipButton)

}

export const iCanSeeClaimRewards = async () => {
    const rewardValue = GOAL_REWARD_MILESTONES_1.data.rewardValue
    const congatulationText = "Great job!"
    const rewardText = "You reached the milestone!\nCongratulations. Claim your rewards."
    const challenge = "1 Challenge"


    await textVisibleAtIndex(`${rewardValue} YuCoin`, 0)
    await textVisible(congatulationText)
    await textVisibleAtIndex(`${rewardValue} YuCoin`, 1)
    await textVisible(rewardText)
    await textVisible(challenge)
    await textVisible("Claim")
}

export const iCanSeeEventEndedWhenClaimRewards = async () => {
    const firstRewardValue = GOAL_REWARD_MILESTONES_1.data.rewardValue
    const secondRewardValue = GOAL_REWARD_MILESTONES_2.data.rewardValue
    const congatulationText = "Great job!"
    const rewardText = "Congrats on completing the event!`"
    const challenge = "1 Challenge"

    await textVisible("Event ended")
    await textVisible(`${firstRewardValue} YuCoin`)
    await textVisible(congatulationText)
    await textVisible(`${secondRewardValue} YuCoin`)
    await textVisible(rewardText)
    await textVisible(challenge)
    await textVisible("Claim rewards")
}

export const iCanSeeClaimSecondReward = async () => {
    const rewardValue = GOAL_REWARD_MILESTONES_2.data.rewardValue
    const congatulationText = "Great job!"
    const rewardText = "You reached the event milestone!\nCongratulations. Claim your rewards."
    const challenge = "1 Challenge"

    await textVisibleAtIndex(`${rewardValue} YuCoin`, 0)
    await textVisible(congatulationText)
    await textVisibleAtIndex(`${rewardValue} YuCoin`, 1)
    await textVisible(rewardText)
    await textVisible(challenge)
    await textVisible("Claim")
}
