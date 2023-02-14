import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as helper from "./_steps/helpers"
import { QUESTS_SCREEN, LEVEL_CHALLENGE_BUTTON, CHALLENGE_TILE, GENERIC_SCREEN_HEADING, CHALLENGE_PROGRESS_BAR, GENERIC_SCREEN_CTA, BUTTON_CLOSE_CHALLENGE, NAV_BAR, VIEW_TOP_RIGHT_COIN_COUNTER, STEPS_COUNT, LEFT_PRODUCT_STEP_MULTI_BUTTON, YOUR_YUCOIN_SCREEN , DAILY_STEPS_SCREEN, YUCOIN, YUCOIN_POWER, CHALLENGE_REWARD, BACK_BUTTON, LEADERBOARD_TITLE, INSPECT_SCREEN, LEADERBOARD_SCROLL_LIST, GREAT_BUTTON, YUCOIN_EXPLAINED_SCROLL_VIEW, DAILYSTEP_SCREEN_COIN} from "@ids";
import { CUSTOMER_9, AUTH_9, CUSTOMER_35, AUTH_35, CUSTOMER_52, AUTH_52, COIN_LEDGER_12, USER_54_LEADERBOARD, CUSTOMER_54, CUSTOMER_55, CUSTOMER_56, CUSTOMER_57, CUSTOMER_58, GOAL_REWARD_MILESTONE_3, GOAL_REWARD_MILESTONE_4, GOAL_REWARD_MILESTONE_5, USER_52 } from "@data";

Feature("As a user I can take a challenge", async () => {
    Scenario("I can take a challenge and cancel it", scenario.start, async () => {
        Given("I login and go to the quests tab", given.logInAndGoToTab("quests"), async () => {
            Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
            Then("I should see the level 1 circle", then.idVisible(LEVEL_CHALLENGE_BUTTON(1)))
            When("I tap this button", when.tapID(LEVEL_CHALLENGE_BUTTON(1)), async () => {
                Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                When("I tap this challenge", when.tapID(CHALLENGE_TILE("short stroll")), async () => {
                    Then("I should see a screen with a take challenge option", then.textVisible("short stroll / 0 min"))
                    When("I tap 'take challenge'", when.tapText("Take challenge"), async () => {
                        Then("I should see a screen asking me to turn on notifications", then.idVisible(GENERIC_SCREEN_HEADING("don't miss out"), 5000))
                        When("I dismiss this screen", when.tapID(GENERIC_SCREEN_CTA("maybe later")), async () => {
                            Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                            Then("I should see the cancel button", then.idVisible(BUTTON_CLOSE_CHALLENGE))
                            When("I tap this button", when.tapID(BUTTON_CLOSE_CHALLENGE), async () => {
                                Then("I should see the cancel challenge confirmation screen", then.textVisible("Call it quits?"))
                                When("I tap exit", when.tapText("Exit challenge"), async () => {
                                    Then("I should be back on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
                                    When("I go back to the yuicoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                        Then("I should see the number of points I started with", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can fail a challenge", scenario.start, async () => {
        Given("I login and go to the quests tab", given.logInAndGoToTab("quests"), async () => {
            Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
            Then("I should see the level 1 circle", then.idVisible(LEVEL_CHALLENGE_BUTTON(1)))
            When("I tap this button", when.tapID(LEVEL_CHALLENGE_BUTTON(1)), async () => {
                Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                When("I tap this challenge", when.tapID(CHALLENGE_TILE("short stroll")), async () => {
                    Then("I should see a screen with a take challenge option", then.textVisible("short stroll / 0 min"))
                    When("I tap 'take challenge'", when.tapText("Take challenge"), async () => {
                        Then("I should see a screen asking me to turn on notifications", then.idVisible(GENERIC_SCREEN_HEADING("don't miss out"), 5000))
                        When("I dismiss this screen", when.tapID(GENERIC_SCREEN_CTA("maybe later")), async () => {
                            Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                            When("I wait for the challenge to end", when.wait(35000), async () => {
                                Then("I should see the didn't make it screen", then.textVisible("you didn’t make it", 5000))
                                Then("I should see the sub copy", then.textVisible("So close! Why not try again?"))
                                When("I tap Okay, got it", when.tapText("Okay, got it"), async () => {
                                    Then("I should be back on quests", then.idVisible(QUESTS_SCREEN(0)))
                                    When("I go back to the yuicoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                        Then("I should see the number of points I started with", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can complete a chest challenge", scenario.start, async () => {
        Given("I am on the quest tab as a user with a chest challenge", given.logInAndGoToTab("quests", CUSTOMER_9, AUTH_9), async () => {
            Then("I should see my coins in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(760)))
            Then("I should see level 7 unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(7)))
        })
        When("I tap level 7", when.tapID(LEVEL_CHALLENGE_BUTTON(7)), async () => {
            Then("I should see a screen telling me to take a challenge to unlock a chest", then.textVisible("Take a challenge to unlock the chest"))
        })
        When("I tap 'lets do it'", when.tapText("Let's do it"), async () => {
            Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
            Then("I should see the brisk walk challenge", then.idVisible(CHALLENGE_TILE("brisk walk")))
            Then("I should see the long walk challenge", then.idVisible(CHALLENGE_TILE("long walk")))
            Then("I should see the meditation challenge", then.idVisible(CHALLENGE_TILE("meditation")))
        })
        When("I start the long walk challenge", when.startChallenge("long walk"), async () => {
            Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
        })
        When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
            Then("I should see the well done screen", then.onChallengeComplete(3050, 7))
        })
        When("I tap collect on the well done screen", when.tapText("Collect", 1000), async () => {
            Then("I should see the first day streak screen", then.textVisible("First day done!"))
        })
        When("I dismiss the streak screen", when.tapText("Done", 5000), async()=>{
            Then("I should see the chest unlocked screen telling me I get 200 yucoin", then.textVisible("You get 200 YuCoin", 2000))
        })
        When("I tap collect on the collect reward screen", when.tapText("Collect", 1000), async () => {
            Then("I should be on the quest screen", then.idVisible(LEVEL_CHALLENGE_BUTTON(8), 3000))
        })
        When("I back to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see my updated coins in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(1030)))
            Then("I should see the number of steps I just completed", then.idVisible(STEPS_COUNT(3050)))
            Then("I should see the number of coins I've earned today (470)", then.textVisible("470 YuCoin today"))
        })                                  
    })

    Scenario("I can complete today's challenge and then the homepage button updates to invite a colleague", scenario.start, async () => {
        Given("I am on the quest tab as a user with a daily challenge", given.logInAndGoToTab("quests", CUSTOMER_35, AUTH_35), async () => {
            Then("I should see my coins in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(3280)))
            When("I tap level 6", when.tapID(LEVEL_CHALLENGE_BUTTON(6)), async () => {
                Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                Then("I should see the long walk challenge", then.idVisible(CHALLENGE_TILE("long walk")))
                Then("I should see the meditation challenge", then.idVisible(CHALLENGE_TILE("meditation")))
                When("I start the long walk challenge", when.startChallenge("long walk"), async () => {
                    Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                    When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                        Then("I should see the well done screen", then.onChallengeComplete(3050, 6))
                        When("I tap collect on the well done screen", when.tapText("Collect", 5000), async () => {
                            Then("I should see the first day streak screen", then.textVisible("First day done!", 10000))
                            When("I dismiss the streak screen", when.tapText("Done", 5000), async()=>{
                                Then("I should be on the quest screen", then.idVisible(LEVEL_CHALLENGE_BUTTON(7), 3000))
                                When("I tap yucoin in the tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                    Then("I should see the Invite a colleague button", then.idVisible("REFERRALS_BUTTON_HOMEPAGE"))
                                    When("I tap on the invite button", when.tapID("REFERRALS_BUTTON_HOMEPAGE"), async () => {
                                        Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can take challenge with a higher earn rate of 13 and see the correct higher number of yucoin earned", scenario.start, async () => {
        Given("I login and go to rewards", given.logInAndGoToTab("yucoin", CUSTOMER_52, AUTH_52), async () => {
            Then("I should be on the yucoin screen", then.idVisible(DAILY_STEPS_SCREEN))
        })
        When("I tap the yucoin", when.tapID(DAILYSTEP_SCREEN_COIN), async () => {
            Then("I should be on today's earning screen and see the correct yucoin earn power", then.onTodaysEarnings(0, "0.0 / 9.6 km", 0, "78"))
        })
        When("I tap 13", when.tapID(YUCOIN_POWER("13")), async () => {
            Then("I am on the YuCoin Power overview screen", then.yuCoinPowerInfo(USER_52.data.earnRate))
        })
        When("I scroll down the page", when.scrollFromID(YUCOIN_EXPLAINED_SCROLL_VIEW, "up", "fast"), async () => {
            Then("I should see Got it!", then.textVisible("Got it!"))
        })
        When("I tap Got it", when.tapText("Got it!", 2000), async () => {
            When("I tap Take a challenge (1 left)", when.tapText("Take a challenge (1 left)"), async () => {
                Then("I should see the level 1 circle", then.idVisible(LEVEL_CHALLENGE_BUTTON(1)))
            })
        })
        When("I tap this button", when.tapID(LEVEL_CHALLENGE_BUTTON(1)), async () => {
            Then("I should see the short stroll and meditation challenge rewards of 78 yucoin each", then.challengeRewardVisible(USER_52.data.earnRate, 6))
        })
        When("I go to the yucoin today tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see the correct event for me to complete and the progress bar", then.eventToBeCompletedVisible(0, 0))
        })
        When("I click on the challenge profiles viewed", when.tapChallenge("0 / 5 profiles viewed"), async () => {
            Then("I should be on the event screen and see the correct earn rates for the challenges", then.onEventDetailsScreen)
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            When("I go to the leaderboard tab", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_54_LEADERBOARD.data.name)))
            })
        })
        helper.INSPECT_USER(CUSTOMER_55.data.fullName, "Forest", CUSTOMER_52)();
        When("I go to the yucoin today tab", when.tapID(NAV_BAR("yucoin")), async () => {
            When("I click on the challenge profiles viewed", when.tapChallenge("0 / 5 profiles viewed"), async () => {
                Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(1, 0.2))
                Then("I should see Claim available for the first milestone", then.claimVisible(1))
            })
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("Ends on the 10th", "650", 1, "1 Profile viewed"))
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the first milestone complete", then.milestoneComplete(0))
            })
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            Then("I should see the yucoin page event bar showing the number of profiles viewed and hit the correct milestone", then.yuCoinPageEventDataCorrect(1, 0.2))
            Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(GOAL_REWARD_MILESTONE_3.data.rewardValue, USER_52.data.earnRate, 1))
        })
        When("I go to the leaderboard tab", when.tapID(NAV_BAR("leaderboard")), async () => {
            Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_54_LEADERBOARD.data.name)))
        })
        helper.INSPECT_USER(CUSTOMER_54.data.fullName, "Forest", CUSTOMER_52)();
        helper.INSPECT_USER(CUSTOMER_58.data.fullName, "Forest", CUSTOMER_52)();
        When("I go to the yucoin today tab", when.tapID(NAV_BAR("yucoin")), async () => {
            When("I click on the challenge profiles viewed", when.tapChallenge("1 / 5 profiles viewed"), async () => {
                Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(3, 0.6))
                Then("I should see Claim available for the second milestone", then.claimVisible(2))
            })
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("Ends on the 10th", "650", 2, "3 Profiles viewed"))
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the third milestone complete", then.milestoneComplete(1))
            })
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            Then("I should see the yucoin page event bar showing the number of profiles viewed and hit the correct milestone", then.yuCoinPageEventDataCorrect(3, 0.6))
            Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(GOAL_REWARD_MILESTONE_3.data.rewardValue, USER_52.data.earnRate, 2))
        })
        When("I go to the leaderboard tab", when.tapID(NAV_BAR("leaderboard")), async () => {
            Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_54_LEADERBOARD.data.name)))
        })
         When("I scroll to the bottom of the bottom of the leaderboard", when.scrollFromID(LEADERBOARD_SCROLL_LIST, "up", "fast"), async () => {
            Then("I should see Stephen's name in the leaderboard", then.textVisible(CUSTOMER_57.data.fullName))
        })
        helper.INSPECT_USER(CUSTOMER_57.data.fullName, "Forest", CUSTOMER_52)();
        When("I scroll to the bottom of the bottom of the leaderboard", when.scrollFromID(LEADERBOARD_SCROLL_LIST, "up", "fast"), async () => {
            Then("I should see Milton's name in the leaderboard", then.textVisible(CUSTOMER_56.data.fullName))
        })
        helper.INSPECT_USER(CUSTOMER_56.data.fullName, "Forest", CUSTOMER_52)();
        When("I go to the yucoin today tab", when.tapID(NAV_BAR("yucoin")), async () => {
            When("I click on the challenge profiles viewed", when.tapChallenge("3 / 5 profiles viewed"), async () => {
                Then("I should be on the completed events milestone page", then.onCompletedEventPage("Ends on the 10th", "5 Profiles viewed", "1 Profile viewed", "3 Profiles viewed", "650"))
            })
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            When("I wait", when.wait(3000), async () => {
                Then("The 5 profiles badge is claimed", then.milestoneComplete(0))
            })
        })
        When("I click Great!", when.tapID(GREAT_BUTTON), async () => {
            Then("I can see the milestones and challenge are complete", then.challengeComplete)
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            Then("I should see the correct yucoin earned so far today after completing the challenge", then.yuCoinEarnedFromEvent(GOAL_REWARD_MILESTONE_3.data.rewardValue, USER_52.data.earnRate, 3))
        })
    })
})

