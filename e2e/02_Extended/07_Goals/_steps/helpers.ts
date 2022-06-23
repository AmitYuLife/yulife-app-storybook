import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when"
import * as then from "./then"
import { COMMUNITY_GOAL_DROPDOWN, GOALS_BUTTON, NICKNAME_INPUT, GOAL_TOOLTIP_INFO, QUESTS_SCREEN, LEVEL_CHALLENGE_BUTTON, CHALLENGE_TILE, CHALLENGE_SET, GENERIC_SCREEN_CTA, CHALLENGE_PROGRESS_BAR, GENERIC_SCREEN_HEADING, FLAT_LIST_EVENTS, AD_BANNERS, NAV_BAR, RADIO_ICON_COLOUR, BACK_BUTTON, VIEW_TOP_RIGHT_COIN_COUNTER} from "@ids"


export const GOAL_JOIN_INFO = async (challengeProgress: string, totalCoinCounter: number) => {
    
    Then("I can see the Goal and details on screen", then.iCanSeeGoal(challengeProgress))
    Then(`I should see my coin balance in the top right ${totalCoinCounter}`, then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(totalCoinCounter)))
    When("I press Join to the Goal", when.tapText("Join"), async () => {
        Then("I should see correct info at popUp", then.iCanSeePopUp)
    })
}

export const REFUSE_JOIN = async () => {
    When("I press Cancel to refuse to Join", when.tapText("Cancel"), async () => {
        Then("I should still see the Join text", then.multipleTextVisible(["Join", "0 joined"]))
    })
}

export const AD_VISIBILE = async (scrollDirection: string) => {
    When(`I scroll to the ${scrollDirection}`, when.scrollFromID(FLAT_LIST_EVENTS, scrollDirection, "fast", 1.0), async () => {
        Then("I should see the ad ASOS", then.idVisible(AD_BANNERS))
    })
}

export const AD_NOT_VISIBLE = async (scrollDirection: string) => {
    When(`I scroll to the ${scrollDirection}`, when.scrollFromID(FLAT_LIST_EVENTS, scrollDirection, "fast", 1.0), async () => {
        Then("I should NOT see the ad ASOS", then.idNotVisible(AD_BANNERS))
    })
}

export const JOIN_GOAL = async (challengeProgress: string,) => {
    When("I press Join to the Goal", when.tapText("Join"), async () => {
        When("I press Confirm", when.tapText("Confirm"), async () => {
            Then("I should see the event dialog screen", then.iCanSeeGoalEventScreen(challengeProgress))
            Then("I should not see Claim text", then.multipleTextNotVisible(["Claim", "Claim rewards"]))
        })
    })
    When("I scroll down this page", when.swipeFromText("Bright and early", "up", "fast"), async () => {
        Then("I should see the Task details", then.iCanSeeTaskDetails)
    })
    When("I scroll up this page", when.swipeFromText("Bright and early", "down", "fast"), async () => {
        When("I press on tooltip icon", when.tapIDAtIndex(GOAL_TOOLTIP_INFO), async () => {
            Then("I should see correct Tooltip text", then.iCanSeeGoalToolTip)
        })
    })
    When("I press Got it", when.tapText("Got it"), async () => {
        When("I press on  second tooltip icon", when.tapIDAtIndex(GOAL_TOOLTIP_INFO, 1), async () => {
            Then("I should see correct Tooltip text", then.iCanSeeGoalToolTip)
        })
    })
    When("I press Got it", when.tapText("Got it"), async () => {
        Then("I should not see Claim text", then.multipleTextNotVisible(["Claim", "Claim rewards"]))
    })
}


export const COMPLETE_CHALLENGE = async (todayEarnedCoins: number, challengeProgress: string, totalCoinCounter: number, totalJoiners: number) => {
    When("I tap take a challenge", when.tapText("Take a challenge"), async () => {
        Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
    })
    When("I tap the level 1 button", when.tapID(LEVEL_CHALLENGE_BUTTON(1)), async () => {
        Then("I should be on the level one quest screen", then.idVisible(CHALLENGE_SET))
    })
    When("I tap the unlocked short stroll challenge", when.tapID(CHALLENGE_TILE("short stroll")), async () => {
        Then("I should see a screen with a take challenge option", then.textVisible("short stroll / 0 min"))
        Then("I should see the number of steps I need to complete the challenge", then.textVisible("100 steps"))
    })
    When("I tap 'take challenge'", when.tapText("Take challenge"), async () => {
        Then("I should see a screen asking me to turn on notifications", then.idVisible(GENERIC_SCREEN_HEADING("don't miss out"), 5000))
    })
    When("I dismiss this screen", when.tapID(GENERIC_SCREEN_CTA("maybe later")), async () => {
        Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
    })
    When("I walk over 100 steps", when.sendSteps(200, 38000), async () => {
        Then("I should see the well done screen", then.onChallengeComplete(200, 1))
    })
    When("I tap collect", when.tapText("collect"), async () => {
        Then("..I should see the completed streak day 1 modal", then.completedTodayStreakCopyVisible(1))
    })
    When("I tap 'done'", when.tapText("Done"), async () => {
        Then("I should be on the quest screen", then.idVisible(QUESTS_SCREEN(0)))
        Then("I should see the level 2 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(2)))
    })
    When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
        Then(`I should see ${todayEarnedCoins} YuCoin today and ${challengeProgress} challenges`, then.multipleTextVisible([`${todayEarnedCoins} YuCoin today`, `${challengeProgress} challenges`,`${totalJoiners} joined`]))
        Then(`I should see my coin balance in the top right ${totalCoinCounter}`, then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(totalCoinCounter)))
        Then("I shold not see Join text", then.textNotVisible("Join"))
    })
}

export const CLAIM_REWARD = async (todayEarnedCoins: number, challengeProgress: string, totalCoinCounter: number) => {

    When("I click on event", when.tapText("Test event detox"), async () => {
        Then(`I should see ${challengeProgress} event completed`, then.iCanSeeGoalEventScreen(challengeProgress))
        Then("I should see Claim text", then.multipleTextVisible(["Claim", "Claim rewards"]))
    })
    When("I press on Claim", when.tapText("Claim"), async () => {
        Then("I should see correct text", then.iCanSeeClaimRewards)
    })
    When("I press Claim", when.tapText("Claim"), async () => {
        Then("I should see correct colour of first claimed reward", then.idVisible(RADIO_ICON_COLOUR("#40C057")))
        Then("I should not see Claim text", then.multipleTextNotVisible(["Claim", "Claim rewards"], 2000))
        Then("I should see Take a challenge", then.textVisible("Take a challenge"))
    })
    When("I close this screen", when.tapID(BACK_BUTTON), async () => {
        Then(`I should see ${todayEarnedCoins} YuCoin today and ${challengeProgress} challenges`, then.multipleTextVisible([`${todayEarnedCoins} YuCoin today`, `${challengeProgress} challenges`, "1 joined"]))
        Then(`I should see my coin balance in the top right ${totalCoinCounter}`, then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(totalCoinCounter)))
    })
}


export const LOGIN_ANOTHER_TEAM_MEMBER = async ( customer:any, auth:any, totalCoinCounter: number, totalJoiners: number) => {
    When("I restart and login as the invited user", when.restartAndLoginAnotherUser(customer, auth), async()=>{
        Then(`I should see my coin balance in the top right ${totalCoinCounter}`, then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(totalCoinCounter)))
        Then("I shold see Test event detox", then.textVisible("Test event detox"))
        Then(`I should see ${totalJoiners} joiners`, then.textVisible(`${totalJoiners} joined`))
    })
}


export const CLAIM_ALL_REWARDS_WHEN_SECOND_CHALLENGE_COMPLETED = async (todayEarnedCoins: string, challengeProgress: string, totalCoinCounter: number) => {

    When("I click on event", when.tapText("Test event detox"), async () => {
        Then(`I should see ${challengeProgress} event completed`, then.iCanSeeGoalEventScreen(challengeProgress))
        Then("I should see Claim on first reward", then.textVisibleAtIndex("Claim", 0))
        Then("I should see Claim text on 2 reward ", then.textVisibleAtIndex("Claim", 1))
    })
    When("I press on Claim rewards", when.tapText("Claim rewards"), async () => {
        Then("I shold not see Join text", then.textNotVisible("Join"))
        Then("I should see that Event ended", then.iCanSeeEventEndedWhenClaimRewards)
    })
    When("I press on Claim", when.tapText("Claim"), async () => {
        Then(`I should see ${challengeProgress} event completed`, then.iCanSeeGoalEventScreen(challengeProgress))
        Then("I should not see Claim text", then.multipleTextNotVisible(["Claim", "Claim rewards"], 4000))
    })
    When("I close this screen", when.tapID(BACK_BUTTON), async () => {
        Then(`I should see ${todayEarnedCoins} screen details`, then.textVisible(`${todayEarnedCoins} YuCoin today`))
        Then(`I should see my coin balance in the top right ${totalCoinCounter}`, then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(totalCoinCounter), 2000))
        Then("I should Not see the Event Goal", then.multipleTextNotVisible(["Claim", "Claim rewards", "Test event detox"], 4000))
        Then("I should NOT see the ad ASOS", then.idNotVisible(AD_BANNERS))
    })
}
export const CLAIM_REWARDS_WHEN_TEAMMEMBER_COMPLETED_GOAL = async (todayEarnedCoins: string, challengeProgress: string, totalCoinCounter: number) => {

    When("I click on event", when.tapText("Test event detox"), async () => {
        Then(`I should see ${challengeProgress} event completed`, then.iCanSeeGoalEventScreen(challengeProgress))
        Then("I should see correct colour of first claimed reward", then.idVisible(RADIO_ICON_COLOUR("#40C057")))
        Then("I should see Claim text", then.multipleTextVisible(["Claim", "Claim rewards"]))
    })
    When("I press on Claim", when.tapText("Claim"), async () => {
        Then("I should see correct text", then.iCanSeeClaimSecondReward)
    })
    When("I press on Claim", when.tapText("Claim"), async () => {
        Then("I should see correct colour of claimed first challenge", then.idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 0, 4000))
        Then("I should see correct colour of claimed second challenge", then.idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 1))
    })
    When("I close this screen", when.tapID(BACK_BUTTON), async () => {
        Then(`I should see ${todayEarnedCoins} screen details`, then.textVisible(`${todayEarnedCoins} YuCoin today`))
        Then(`I should see my coin balance in the top right ${totalCoinCounter}`, then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(totalCoinCounter), 2000))
        Then("I should Not see the Event Goal", then.multipleTextNotVisible(["Claim", "Claim rewards", "Test event detox"], 2000))
        Then("I should see the ad ASOS", then.idVisible(AD_BANNERS))
    })
}