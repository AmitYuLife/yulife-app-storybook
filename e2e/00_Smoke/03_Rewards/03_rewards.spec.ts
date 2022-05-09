import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { REWARDS_SCREEN, REWARDS_LIST_SCREEN, VIEW_TOP_RIGHT_COIN_COUNTER, WEGIFT_DETAILS, BACK_BUTTON} from "@ids";
import { REWARDS_JOHN_LEWIS, REWARDS_BLOOM_UNAVAILABLE, CUSTOMER_3, AUTH_3, REWARDS_NIKE, CUSTOMER_4, AUTH_4, COIN_LEDGER_4, CUSTOMER_2, AUTH_2 } from "@data";



Feature("Rewards should act correctly", async () => {
    Scenario("I cannot redeem a reward if I don't have enough coin", scenario.start, () => {
        Given("I log in and go to reward", given.logInAndGoToTab("rewards"), async () => {
            Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
            Then("I should see the John Lewis Reward", then.rewardVisible(REWARDS_JOHN_LEWIS))
            When("I tap on the John Lewis reward", when.tapRewardInList(REWARDS_JOHN_LEWIS), async () => {
                Then("I should be on the reward page", then.textVisible("To redeem John Lewis:"))      //onRewardScreen(REWARDS_JOHN_LEWIS))
                When("I scroll to the bottom of the page", when.swipeFromText("To redeem John Lewis:", "up", "fast"), async () => {
                    Then("I should see the Buy voucher with YuCoin button", then.textVisible("Buy voucher with YuCoin"))
                    When("I tap the button", when.tapText("Buy voucher with YuCoin",0,true), async () => {
                        Then("I should see the denominations modal", then.denominationListVisible(REWARDS_JOHN_LEWIS, 200))
                        When("I tap to buy a denomination", when.tapDenomination(REWARDS_JOHN_LEWIS, 0), async () => {
                            Then("I should see the not enough YuCoin modal", then.multipleTextVisible(["Not enough YuCoin", "Earn more and come back later!"]))
                            When("I click Got it", when.tapText("Got it"), async () => {
                                Then("I should be back on the John Lewis reward page", then.textVisible("Have a question?"))
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
            When("I swipe down this page", when.swipeToText(REWARDS_LIST_SCREEN,"Purchase history", "up"), async () => {
                Then("I should see the Nike Reward", then.rewardVisible(REWARDS_NIKE))
                Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
                When("I tap this reward", when.tapRewardInList(REWARDS_NIKE), async () => {
                    Then("I should be on the reward page", then.onRewardScreen(REWARDS_NIKE))
                })
            })
            When("I scroll to the bottom of the page", when.swipeFromText("Nike", "up", "fast"), async () => {
                When("I tap the button", when.tapText("Buy voucher with YuCoin",0,true), async () => {
                    Then("I should see the buy button", then.buyButtonVisible(REWARDS_NIKE))
                    Then("I should see the £ amount drop down", then.denominationListVisible(REWARDS_NIKE, 17700))
                })
            })
            When("I tap the drop down", when.tapDenominationList(REWARDS_NIKE), async () => {
                Then("I should see the confirm modal", then.textVisible("Confirm purchase"))
                When("I tap 'Cancel'", when.tapText("Cancel", 2500, true), async () => {
                    Then("I should not see the confirm modal", then.textNotVisible("Confirm purchase"))
                })
            })
            When("I tap Buy voucher with YuCoin ", when.tapText("Buy voucher with YuCoin",0,true), async () => {
                Then("I should see the £ amount drop down", then.denominationListVisible(REWARDS_NIKE, 17700))
                When("I tap the drop down", when.tapDenominationList(REWARDS_NIKE), async () => {
                    When("I tap 'Confirm'", when.tapText("Confirm", 2500, true), async () => {
                        Then("I should be on the purchase screen", then.onRewardPurchasedScreen(REWARDS_NIKE))
                        Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(9950)))
                    })
                })
            })
            When("I go back this screen", when.tapID(BACK_BUTTON), async () => {
                Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
            })
            When("I swipe down this page", when.swipeToText(REWARDS_LIST_SCREEN,"Purchase history", "up"), async () => {
                Then("I should see the Nike Reward", then.rewardVisible(REWARDS_NIKE))
                Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(9950)))
                When("I press on purchase history", when.tapText("Purchase history"), async () => {
                    Then("I should see my nike reward purchased", then.purchasedRewardVisible(REWARDS_NIKE, 0))
                })
            })
            When("I tap on the reward i just purcahsed", when.tapText("£10 Nike voucher"), async () => {
                Then("I should be on the purchase screen", then.onRewardPurchasedScreen(REWARDS_NIKE))
                Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(9950)))
                When("I see other rewards", when.tapText("see other rewards"), async () => {
                    Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
                    Then("I should see the Nike Reward", then.rewardVisible(REWARDS_NIKE))
                })
            })
            When("I tap this reward", when.tapRewardInList(REWARDS_NIKE), async () => {
                Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(9950)))
                When("I scroll to the bottom of the page", when.swipeFromText("Nike", "up", "fast"), async () => {
                    When("I tap the button", when.tapText("Buy voucher with YuCoin",0,true), async () => {
                        Then("I should see the £ amount drop down", then.denominationListVisible(REWARDS_NIKE, 9950))
                    })
                })
            })
            When("I tap 'Cancel'", when.tapText("Cancel", 2500, true), async () => {
                When("I tap the button", when.tapText("Buy voucher with YuCoin",0,true), async () => {
                    Then("I should not see the Confirm button", then.textNotVisible("Confirm"))
                })
            })
            When("I tap the buy button", when.tapDenominationList(REWARDS_NIKE), async () => {
                Then("I should see the confirm modal", then.textVisible("Confirm purchase"))
                When("I tap 'Confirm'", when.tapText("Confirm", 2500, true), async () => {
                    Then("I should be on the purchase screen", then.onRewardPurchasedScreen(REWARDS_NIKE))
                    Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(2200)))
                })
            })
            When("I see other rewards", when.tapText("see other rewards"), async () => {
                Then("I should be back on the rewards screen", then.idVisible(REWARDS_SCREEN))
                Then("I should see my updated balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(2200)))
                When("I reload the app and go to rewards", when.reloadAppToTab("rewards"), async () => {
                    When("I swipe down this page", when.swipeToText(REWARDS_LIST_SCREEN,"Purchase history", "up"), async () => {
                        When("I tap the Purchased history", when.tapText("Purchase history"), async () => {
                            Then("I should see my nike reward", then.purchasedRewardVisible(REWARDS_NIKE, 0))
                            Then("I should see the 2 purchased reward in list", then.textVisibleAtIndex("£10 Nike voucher", 1))
                        })
                    })
                })
            })
            When("I tap this reward", when.tapPurchasedReward(REWARDS_NIKE, 0), async () => {
                Then("I should be on the purchase screen for this reward", then.onRewardPurchasedScreen(REWARDS_NIKE))
            })                                                                               
        })
    })

    Scenario("I cannot buy a reward if there are issues with a provider", scenario.start, async () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards", CUSTOMER_4, AUTH_4), async () => {
            Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
            Then("I should see the John Lewis Reward", then.rewardVisible(REWARDS_JOHN_LEWIS))
            When("I tap this reward", when.tapRewardInList(REWARDS_JOHN_LEWIS), async () => {
                Then("I should be on the reward page", then.textVisible("To redeem John Lewis:"))        //onRewardScreen(REWARDS_JOHN_LEWIS))
                When("I scroll to the bottom of the page", when.swipeFromText("To redeem John Lewis:", "up", "fast"), async () => {
                    Then("I should see the buy button", then.textVisible("Buy voucher with YuCoin"))
                    When("I tap the buy button", when.tapText("Buy voucher with YuCoin"), async () => {
                        Then("I should see the denominations modal", then.denominationListVisible(REWARDS_JOHN_LEWIS, 15200))
                        When("I tap to buy a denomination", when.tapDenomination(REWARDS_JOHN_LEWIS, 0), async () => {
                            Then("I should see the confirm modal", then.textVisible("Confirm purchase"))
                            When("I tap 'Confirm'", when.tapText("Confirm", 2500, true), async () => {
                                Then("I should see that the voucher is unavailable", then.onRewardNotAvailableScreen)
                            })
                        })
                    })
                })
            })
        })
    })
    
    Scenario("I can login and view my previously purchased rewards", scenario.start, async () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards", CUSTOMER_2, AUTH_2), async () => {
            Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
            When("I tap the Purchased history", when.tapText("Purchase history"), async () => {
                Then("I should see the nike reward I have previously purchased", then.purchasedRewardVisible(REWARDS_NIKE, 0))
                Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
                When("I tap this reward", when.tapPurchasedReward(REWARDS_NIKE, 0), async () => {
                    Then("I should be on the purchase screen for this reward", then.onRewardPurchasedScreen(REWARDS_NIKE))
                    Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
                })
            })
        })
    })
})