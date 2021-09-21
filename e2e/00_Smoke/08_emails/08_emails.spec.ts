import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { REWARDS_SCREEN, INPUT_RESET_PASSWORD, INPUT_AVIOS_FORM_FIELD } from "@ids"

import { CUSTOMER_36, AUTH_36, REAWARDS_AVIOS, REWARDS_NIKE } from "@data"

Feature("I receive the correct emails", async () => {
    Scenario("I receive a magic link when I have forgot my password", scenario.start, async () => {
        Then("I should ", then.textVisible("need help logging in?"))
        When("I click need help loggin in", when.tapText("need help logging in?"), async () => {
            Then("I should be on the need help screen", then.isOnNeedHelpScreen)
            When("I enter an email", when.typeViaID(INPUT_RESET_PASSWORD, CUSTOMER_36.data.email), async () => {
                When("I tap email me...", when.tapText("email me a magic link"), async () => {
                    Then("I should be on the email sent screen", then.isOnEmailSentScreen(CUSTOMER_36.data.email))
                    Then("I should have received the correct email", then.hasReceivedMagicLinkEmail(CUSTOMER_36.data.email))
                })
            })
        })
    })

    Scenario("I receive the correct email when redeeming an avios reward", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("rewards", CUSTOMER_36, AUTH_36), async () => {
            Then("I should be on the Rewards tab", then.idVisible(REWARDS_SCREEN))
            When("I tap avios reward", when.tapRewardInList(REAWARDS_AVIOS), async () => {
                Then("I should be on thee avios reward screen", then.onRewardScreen(REAWARDS_AVIOS))
                When("I scroll to the bottom of the page", when.swipeFromText("connect yucoin to avios", "up", "fast"), async () => {
                    Then("I should be at the bottom of the page", then.textVisible("Have a question?"))
                    When("I tap Loyalty programme dropdown", when.tapText("Loyalty programme"), async () => {
                        When("I tap British Airways", when.tapText("The British Airways Executive Club"), async () => {
                            Then("I should see that selected", then.textVisible("The British Airways Executive Club"))
                            When("I enter my Forename", when.typeViaID(INPUT_AVIOS_FORM_FIELD("Forename"), CUSTOMER_36.data.firstName), async () => {
                                When("I enter my surname", when.typeViaID(INPUT_AVIOS_FORM_FIELD("Surname"), CUSTOMER_36.data.lastName), async () => {
                                    When("I enter my account number", when.typeViaID(INPUT_AVIOS_FORM_FIELD("Account number"), "12345678"), async () => {
                                        Then("I should see all of these fields", then.multipleTextVisible([CUSTOMER_36.data.firstName, CUSTOMER_36.data.lastName, "1234 5678"]))
                                        When("I tap buy avios", when.tapText("buy avios"), async () => {
                                            When("I tap 3rd denomination", when.tapDenomination(REAWARDS_AVIOS, 3), async () => {
                                                When("I tap confirm", when.tapText("Confirm"), async () => {
                                                    Then("I should be on purchase pending page", then.textVisible("purchase pending"))
                                                    Then("I should have received the correct email", then.hasReceivedAviosEmail(CUSTOMER_36.data.email))
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

    Scenario("I receive the correct email when redeeming a voucher reward", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("rewards", CUSTOMER_36, AUTH_36), async () => {
            Then("I should be on the Rewards tab", then.idVisible(REWARDS_SCREEN))
            When("I tap nike reward", when.tapRewardInList(REWARDS_NIKE), async () => {
                Then("I should be on the nike reward screen", then.onRewardScreen(REWARDS_NIKE))
                When("I scroll to the bottom of the page", when.swipeFromText("How to redeem Nike", "up", "fast"), async () => {
                    Then("I should be at the bottom of the page", then.textVisible("Have a question?"))
                    When("I tap buy voucher with yucoin", when.tapText("Buy voucher with YuCoin"), async () => {
                        When("I tap 3rd denomination", when.tapDenomination(REWARDS_NIKE, 2), async () => {
                            When("I tap confirm", when.tapText("Confirm"), async () => {
                                Then("I should receive the correct email", then.hasReceivedNikeEmail(CUSTOMER_36.data.email))
                            })
                        })
                    })
                })
            })
        })
    })
})