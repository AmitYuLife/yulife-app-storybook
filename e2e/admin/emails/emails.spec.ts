import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("I receive the correct emails", async () => {
    Scenario("I receive a magic link when I have forgot my password", scenario.start, async () => {
        Then("I should be on the login page", then.textVisible("Need help logging in?"))
        When("I click need help loggin in", when.tapText("Need help logging in?"), async () => {
            Then("I should be on the need help screen", then.isOnNeedHelpScreen)
        })
        When("I enter an email", when.typeViaID(ids.INPUT_RESET_PASSWORD, data.CUSTOMER_6.data.email), async () => {
            When("I tap email me...", when.tapText("Email me a magic link"), async () => {
                Then("I should be on the email sent screen", then.isOnEmailSentScreen(data.CUSTOMER_6.data.email))
                Then("I should have received the correct email", then.hasReceivedMagicLinkEmail(data.CUSTOMER_6.data.email))
            })
        })
        When("I kill the app", when.terminateApp, async () => {
            When("I follow the link", when.followEmailLink(data.CUSTOMER_6.data.email), async () => {
                Then("I should be on the login page", then.textVisible("Need help logging in?"))
            })
        })
    })

    ScenarioSkip("I receive the correct email when redeeming a voucher reward", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("rewards", data.CUSTOMER_6, data.AUTH_6), async () => {
            Then("I should be on the Rewards tab", then.idVisible(ids.REWARDS_SCREEN))
            When("I scroll to Nike reward", when.scrollFromID(ids.REWARDS_SCREEN, "up", "slow"), async () => {
                When("I tap nike reward", when.tapRewardInList(data.CORE_REWARDS_NIKE), async () => {
                    Then("I should be on the nike reward screen", then.onRewardScreen(data.CORE_REWARDS_NIKE))
                    When("I scroll to the bottom of the page", when.swipeFromText("How to redeem Nike", "up", "fast"), async () => {
                        Then("I should be at the bottom of the page", then.textVisible("Have a question?"))
                        When("I tap buy voucher with yucoin", when.tapText("Buy voucher with YuCoin"), async () => {
                            When("I tap 3rd denomination", when.tapDenomination(data.CORE_REWARDS_NIKE, 2), async () => {
                                When("I tap confirm", when.tapText("Confirm"), async () => {
                                    Then("I should receive the correct email", then.hasReceivedNikeEmail(data.CUSTOMER_6.data.email))
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
