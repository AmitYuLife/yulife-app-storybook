import { Given, When, Then, Scenario, Feature, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as ids from "@ids";
import * as data from "../_data";
import { getLocalisedString as t } from "@i18n";
import { locationModalButton } from "./_resources/constants";

Feature("Rewards should act correctly", async () => {
    Scenario("I cannot redeem a reward if I don't have enough coin", scenario.start, () => {
        Given("I log in and go to reward", given.logInAndGoToTab("rewards", data.CUSTOMER_1, data.AUTH_1), async () => {
            Then("I should see the modal to select store location", then.rewardsLocationModalVisible)
        })
        When("I dismiss the modal", when.tapText(locationModalButton), async () => {
            Then("I should be on the rewards tab", then.idVisible(ids.REWARDS_SCREEN))
            Then("I should see the John Lewis Reward", then.rewardVisible(data.CORE_REWARDS_JOHN_LEWIS))
        })
        When("I tap on the John Lewis reward", when.tapRewardInList(data.CORE_REWARDS_JOHN_LEWIS), async () => {
            Then("I should be on the reward page", then.textVisible("To redeem John Lewis:"))      //onRewardScreen(data.CORE_REWARDS_JOHN_LEWIS))
        })
        When("I scroll to the bottom of the page", when.swipeFromText("To redeem John Lewis:", "up", "fast"), async () => {
            Then("I should see the Buy voucher with YuCoin button", then.textVisible("Buy voucher with YuCoin"))
        })
        When("I tap the button", when.tapText("Buy voucher with YuCoin"), async () => {
            Then("I should see the denominations modal", then.denominationListVisible(data.CORE_REWARDS_JOHN_LEWIS, 200))
        })
        When("I tap to buy a denomination", when.tapDenomination(data.CORE_REWARDS_JOHN_LEWIS, 0), async () => {
            Then("I should see the confirm modal", then.textVisible("Confirm purchase"))
        })
        When("I tap 'Confirm'", when.tapText("Confirm"), async () => {
            Then("I should see the not enough YuCoin modal", then.textVisible("You do not have enough YuCoin to purchase this reward", 3000))
        })
        When("I click Got it", when.tapText("Got it"), async () => {
            Then("I should be back on the John Lewis reward page", then.textVisible("Have a question?"))
        })
    })

    Scenario("I cannot redeem a locked reward", scenario.start, () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_1, data.AUTH_1), async () => {
            Then("I should see the modal to select store location", then.rewardsLocationModalVisible)
        })
        When("I dismiss the modal", when.tapText(locationModalButton), async () => {
            Then("I should be on the rewards tab", then.idVisible(ids.REWARDS_SCREEN))
            Then("I should see the locked bloom reward", then.lockedRewardVisible(data.CORE_REWARDS_BLOOM_UNAVAILABLE))
        })
        When("I tap on the locked reward", when.tapRewardInList(data.CORE_REWARDS_BLOOM_UNAVAILABLE), async () => {
            Then("I should see an update in progress pop up ", then.textVisible("update in progress"))
        })
        When("I tap 'back to rewards'", when.tapText("back to rewards"), async () => {
            Then("I should be back on the rewards screen", then.idVisible(ids.REWARDS_SCREEN))
        })
        When("I scroll to the bottom of the rewards page", when.swipeFromText("John Lewis", "up", "fast"), async () => {
            Then("I should see the locked amazon reward", then.lockedRewardVisible(data.CORE_REWARDS_AMAZON_UNAVAILABLE))
            Then("I should see the 'Undergoing maintenance' text on the locked reward", then.textVisibleAtIndex("Undergoing maintenance", 1))
        })
    })

    Scenario("I can purchase multiple rewards and adjust the voucher amount successfully", scenario.start, () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_3, data.AUTH_3), () => {
            Then("I should see the modal to select store location", then.rewardsLocationModalVisible)
        })
        When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 1500), async () => {
            Then("I should be on the rewards tab", then.idVisible(ids.REWARDS_SCREEN))
        })
        When("I scroll down this page", when.scrollFromID(ids.REWARDS_LIST_SCREEN, "up", "fast", 0.3), async () => {
            Then("I should see the Amazon Reward", then.rewardVisible(data.CORE_REWARDS_AMAZON))
            Then("I should see my coin balance in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(42200)))
        })
        When("I tap this reward", when.tapRewardInList(data.CORE_REWARDS_AMAZON), async () => {
            Then("I should be on the reward page", then.onRewardScreen(data.CORE_REWARDS_AMAZON))
        })
        When("I scroll to the bottom of the page", when.scrollFromID(ids.SDUI_SCREEN_SCROLL_VIEW, "up", "fast"), async () => {
            When("I tap the button", when.tapID(ids.BUTTON_BASE("Buy voucher with YuCoin")), async () => {
                Then("I should see the buy button", then.buyButtonVisible(data.CORE_REWARDS_AMAZON))
                Then("I should see the £ amount drop down", then.denominationListVisible(data.CORE_REWARDS_AMAZON, 42200))
            })
        })
        When("I tap the drop down", when.tapDenominationList(data.CORE_REWARDS_AMAZON, "Amazon"), async () => {
            Then("I should see the confirm modal", then.textVisible("Confirm purchase"))
        })
        When("I tap 'Cancel'", when.tapText("Cancel", 2500, true), async () => {
            Then("I should not see the confirm modal", then.textNotVisible("Confirm purchase"))
        })
        When("I tap the 'Buy voucher with YuCoin' button", when.tapID(ids.BUTTON_BASE("Buy voucher with YuCoin")), async () => {
            Then("I should see the £ amount drop down", then.denominationListVisible(data.CORE_REWARDS_AMAZON, 42200))
        })
        When("I tap the drop down", when.tapDenominationList(data.CORE_REWARDS_AMAZON, "Amazon"), async () => {
            When("I tap 'Confirm'", when.tapText("Confirm"), async () => {
                Then("I should be on the purchase screen", then.onRewardPurchasedScreen(data.CORE_REWARDS_AMAZON))
                Then("I should see the custom purchase code title", then.idVisible(ids.VOUCHER_CODE_TITLE("Free Gummy Bears")))
                Then("I should see my coin balance in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(35200)))
            })
        })
        When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap on the Amazon reward", when.tapRewardInList(data.CORE_REWARDS_AMAZON), async () => {
                When("I scroll to the bottom of the page", when.scrollFromID(ids.SDUI_SCREEN_SCROLL_VIEW, "up", "fast"), async () => {
                    When("I tap to purchase the reward", when.tapID(ids.BUTTON_BASE("Buy voucher with YuCoin")), async () => {
                        When("I select this time the second option of £24 voucher", when.tapDenominationList(data.CORE_REWARDS_AMAZON, "Amazon", 1), async () => {
                            When("I confrim the purchase", when.tapText("Confirm"), async () => {
                                Then("I should see the custom voucher code", then.idVisible(ids.VOUCHER_CODE("TestAmazonCode456")))
                                Then("I should see my update YuCoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(21200)))
                            })
                        })
                    })
                })
            })
        })
        When("I go back again to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap on the Amazon reward", when.tapRewardInList(data.CORE_REWARDS_AMAZON), async () => {
                When("I scroll to the bottom of the page", when.scrollFromID(ids.SDUI_SCREEN_SCROLL_VIEW, "up", "fast"), async () => {
                    When("I tap to purchase the reward", when.tapID(ids.BUTTON_BASE("Buy voucher with YuCoin")), async () => {
                        When("I select this time the third option of £36 voucher", when.tapDenominationList(data.CORE_REWARDS_AMAZON, "Amazon", 2), async () => {
                            When("I confrim the purchase", when.tapText("Confirm"), async () => {
                                Then("I should see the custom voucher code", then.idVisible(ids.VOUCHER_CODE("TestAmazonCode789")))
                                Then("I should see my update YuCoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)))
                            })
                        })
                    })
                })
            })
        })
        When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap on the purchased tab", when.tapID(ids.PURCHASED_TAB_BUTTON, 1000), async () => {
                Then("I should see all three purchased Amazon vouchers", then.multiplePurchasedRewardVisible(["£36 Amazon voucher", "£24 Amazon voucher", "£12 Amazon voucher"]))
            })
        })
    })

    Scenario("I cannot buy a reward if there are issues with a provider", scenario.start, async () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_4, data.AUTH_4), async () => {
            Then("I should see the modal to select store location", then.rewardsLocationModalVisible)
        })
        When("I dismiss the modal", when.tapText(locationModalButton), async () => {
            Then("I should be on the rewards tab", then.idVisible(ids.REWARDS_SCREEN))
            Then("I should see the Broken Item Reward", then.rewardVisible(data.CORE_REWARDS_BROKEN))
        })
        When("I tap this reward", when.tapRewardInList(data.CORE_REWARDS_BROKEN), async () => {
            Then("I should be on the reward page", then.textVisible("To redeem Broken Item:"))
        })
        When("I scroll to the bottom of the page", when.swipeFromText("To redeem Broken Item:", "up", "fast"), async () => {
            Then("I should see the buy button", then.textVisible("Buy voucher with YuCoin"))
        })
        When("I tap the buy button", when.tapText("Buy voucher with YuCoin"), async () => {
            Then("I should see the denominations modal", then.denominationListVisible(data.CORE_REWARDS_BROKEN, 15200))
        })
        When("I tap to buy a denomination", when.tapDenomination(data.CORE_REWARDS_BROKEN, 0), async () => {
            Then("I should see the confirm modal", then.textVisible("Confirm purchase"))
        })
        When("I tap 'Confirm'", when.tapText("Confirm"), async () => {
            Then("I should see that the reward is unavailable", then.textVisible("Reward could not be found"))
        })
    })

    Scenario("I can login and view my previously purchased rewards", scenario.start, async () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_2, data.AUTH_2), async () => {
            Then("I should see the modal to select store location", then.rewardsLocationModalVisible)
        })
        When("I dismiss the modal", when.tapText(locationModalButton, 2500), async () => {
            When("I swipe down this page", when.scrollFromID(ids.REWARDS_LIST_SCREEN, "up", "fast"), async () => {
                When("I tap the Purchased history", when.tapID(ids.PURCHASED_TAB_BUTTON, 1000), async () => {
                    Then("I should see the nike reward I have previously purchased", then.purchasedRewardVisible(data.CORE_REWARDS_NIKE, 0))
                    Then("I should see my coin balance in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)))
                })
            })
        })
        When("I tap this reward", when.tapPurchasedReward(data.CORE_REWARDS_NIKE, 0), async () => {
            Then("I should be on the purchase screen for this reward", then.onRewardPurchasedScreen(data.CORE_REWARDS_NIKE))
            Then("I should see my coin balance in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)))
        })
    })

    Scenario("I can login and view my previously purchased rewards with different date formate : locale US", scenario.startUS, async () => {
        Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_2, data.AUTH_2), async () => {
            Then("I should see the modal to select store location", then.rewardsLocationModalVisible)
        })
        When("I dismiss the modal", when.tapText(locationModalButton), async () => {
            When("I swipe down this page", when.swipeToText(ids.REWARDS_LIST_SCREEN, t("Purchased"), "up"), async () => {
                When("I tap the Purchased history", when.tapID(ids.PURCHASED_TAB_BUTTON, 1000), async () => {
                    Then("I should see the nike reward I have previously purchased", then.purchasedRewardVisible(data.CORE_REWARDS_NIKE, 0))
                    Then("I should see my coin balance in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)))
                })
            })
            When("I tap this reward", when.tapPurchasedReward(data.CORE_REWARDS_NIKE, 0), async () => {
                Then("I should be on the purchase screen for this reward and see US date format", then.onRewardPurchasedScreen(data.CORE_REWARDS_NIKE, "en-US"))
                Then("I should see my coin balance in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)))
            })
        })
    })
})
