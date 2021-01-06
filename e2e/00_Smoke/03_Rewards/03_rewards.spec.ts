import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { REWARDS_SCREEN, VIEW_TOP_RIGHT_COIN_COUNTER, WEGIFT_DETAILS } from "@ids";
import { REWARDS_JOHN_LEWIS, REWARDS_BLOOM_UNAVAILABLE, CUSTOMER_3, AUTH_3, REWARDS_NIKE, CUSTOMER_4, AUTH_4 } from "@data";



Feature("Rewards should act correctly", async () => {

    Scenario("I cannot redeem a reward if I don't have enough coin", scenario.start, () => {
        Given("I log in and go to reward", given.logInAndGoToTab("rewards"), async () => {
            Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
            Then("I should see the John Lewis Reward", then.rewardVisible(REWARDS_JOHN_LEWIS))
            When("I tap on the John Lewis reward", when.tapRewardInList(REWARDS_JOHN_LEWIS), async () => {
                Then("I should be on the reward page", then.onRewardScreen(REWARDS_JOHN_LEWIS))
                When("I scroll to the bottom of the page", when.scrollFromID(WEGIFT_DETAILS, "up", "slow"), async () => {
                    Then("I should see the buy button", then.textVisible("buy with 4130 yucoin"))
                    Then("I should see the £ amount drop down", then.textVisible("£5.00"))
                    When("I try to purchase the reward", when.tapText("buy with 4130 yucoin",0,true), async () => {
                        Then("I should see a confirm modal", then.textVisible("Confirm purchase"))
                        When("I tap OK", when.tapText("OK", 2500,true), async () => {
                            Then("I should see a 'not enough coin' screen", then.textVisible("not enough coin"))
                            When("I tap 'got it'", when.tapText("got it"), async () => {
                                Then("I should be back on the John Lewis rewards screen", then.textVisible("buy with 4130 yucoin"))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I cannot redeem a locked reward", scenario.start, () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards"), async () => {
            Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
            Then("I should see a locked reward", then.lockedRewardVisible(REWARDS_BLOOM_UNAVAILABLE))
            When("I tap on the locked reward", when.tapRewardInList(REWARDS_BLOOM_UNAVAILABLE), async () => {
                Then("I should see an update in progress pop up ", then.textVisible("update in progress"))
                When("I tap 'back to rewards'", when.tapText("back to rewards"), async () => {
                    Then("I should be back on the rewards screen", then.idVisible(REWARDS_SCREEN))
                })

            })
        })
    })

    Scenario("I can change the reward amount and buy it if I have enough coin", scenario.start, () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards", CUSTOMER_3, AUTH_3), () => {
            Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
            Then("I should see the Nike Reward", then.rewardVisible(REWARDS_NIKE))
            Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            When("I tap this reward", when.tapRewardInList(REWARDS_NIKE), async () => {
                Then("I should be on the reward page", then.onRewardScreen(REWARDS_NIKE))
                When("I scroll to the bottom of the page", when.scrollFromID(WEGIFT_DETAILS, "up", "slow"), async () => {
                    Then("I should see the buy button", then.buyButtonVisible(REWARDS_NIKE))
                    Then("I should see the £ amount drop down", then.denominationListVisible(REWARDS_NIKE))
                    When("I tap the drop down", when.tapDenominationList(REWARDS_NIKE), async () => {
                        Then("I should see a list of options", then.rewardDenominationsVisible(REWARDS_NIKE))
                        When("I tap a denomination", when.tapDenomination(REWARDS_NIKE, 1), async () => {
                            Then("The buy button should update", then.buyButtonVisible(REWARDS_NIKE, 1))
                            When("I tap the buy button", when.tapBuyButton(REWARDS_NIKE, 1), async () => {
                                Then("I should see the confirm modal", then.textVisible("Confirm purchase"))
                                When("I tap 'ok", when.tapText("OK", 2500, true), async () => {
                                    Then("I should be on the purchase screen", then.onRewardPurchasedScreen(REWARDS_NIKE))
                                    When("I see other rewards", when.tapText("see other rewards"), async () => {
                                        Then("I should be back on the rewards screen", then.idVisible(REWARDS_SCREEN))
                                        Then("I should see my updated balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(2200)))
                                        When("I reload the app and go to rewards", when.reloadAppToTab("rewards"), async () => {
                                            When("I tap the purchased tab", when.tapText("purchased"), async () => {
                                                Then("I should see my nike reward", then.purchasedRewardVisible(REWARDS_NIKE, 1))
                                                When("I tap this reward", when.tapPurchasedReward(REWARDS_NIKE, 1), async () => {
                                                    Then("I should be on the purchase screen for this reward", then.onRewardPurchasedScreen(REWARDS_NIKE))
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I cannot buy a reward if there are issues with a provider", scenario.start, async () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards", CUSTOMER_4, AUTH_4), async () => {
            Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
            Then("I should see the John Lewis Reward", then.rewardVisible(REWARDS_JOHN_LEWIS))
            When("I tap this reward", when.tapRewardInList(REWARDS_JOHN_LEWIS), async () => {
                Then("I should be on the reward page", then.onRewardScreen(REWARDS_JOHN_LEWIS))
                When("I scroll to the bottom of the page", when.scrollFromID(WEGIFT_DETAILS, "up", "slow"), async () => {
                    Then("I should see the buy button", then.buyButtonVisible(REWARDS_JOHN_LEWIS))
                    When("I tap the buy button", when.tapBuyButton(REWARDS_JOHN_LEWIS, 0), async () => {
                        When("I tap 'ok", when.tapText("OK", 2500, true), async () => {
                            Then("I should see a screen telling me there's an issue with the reward", then.textVisible("the voucher is not currently available"))
                            When("I tap the CTA", when.tapText("check other rewards"), async () => {
                                Then("I should be back on the John Lewis reward page", then.buyButtonVisible(REWARDS_JOHN_LEWIS))
                            })
                        })
                    })
                })
            })
        })
    })
})

