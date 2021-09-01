import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_35, AUTH_35, CUSTOMER_1, AUTH_1 } from "@data"
import { MENU_ICON, MENU_ICON_BADGE, REFERRALS_BUTTON_BADGE, BACK_BUTTON, REFERRALS_INVITE_BUTTON } from "@ids"

Feature("Referrals work as intended", async () => {
    Scenario("As a user with referrals enabled I can view the referrals popover, button and screen", scenario.start, async () => {
        Given("I login as a user with a referrals enabled", given.loginAsUser(CUSTOMER_35, AUTH_35), async () => {
            Then("I should see the Invite Colleagues popover", then.referralsPopoverVisible)
            When("I tap the menu icon to close the popover", when.tapID(MENU_ICON), async () => {
                Then("I should no longer see the the popover", then.referralsPopoverNotVisible)
                Then("the menu icon should have a badge", then.idVisible(MENU_ICON_BADGE(true)))
                When("I go to the menu page", when.tapID(MENU_ICON), async () => {
                    Then("I should be on the menu screen", then.menuItemsVisible)
                    Then("I should see the Invite a colleague button", then.textVisible("Invite a colleague"))
                    Then("the invite button should have the notification badge", then.idVisible(REFERRALS_BUTTON_BADGE(true)))
                    When("I tap on the invite button", when.tapText("Invite a colleague"), async () => {
                        Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage(false))
                        When("I tap the invite a colleague button", when.tapID(REFERRALS_INVITE_BUTTON), async () => {
                            Then("I should see the share modal", then.textVisible("Join me in the Yuniverse! Follow my link to sign up and download the YuLife app."))
                            When("I press off the share modal to close it", when.tapID(BACK_BUTTON), async () => {
                                When("I press the back button", when.tapID(BACK_BUTTON), async () => {
                                    Then("I should be on the daily steps screen", then.onDailySteps)
                                    Then("the menu icon should no longer have a badge", then.idVisible(MENU_ICON_BADGE(false)))
                                    When("I go to the menu", when.tapID(MENU_ICON), async () => {
                                        Then("I should be on the menu", then.menuItemsVisible)
                                        Then("the invite button should no longer have a badge", then.idVisible(REFERRALS_BUTTON_BADGE(false)))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("As a user with referrals enabled I can only see the popover the first time I log in", scenario.start, async () => {
        Given("I login as a user with a referrals enabled", given.loginAsUser(CUSTOMER_35, AUTH_35), async () => {
            Then("I should see the Invite Colleagues popover", then.referralsPopoverVisible)
            When("I tap the menu icon to close the popover", when.tapID(MENU_ICON), async () => {
                Then("I should no longer see the the popover", then.referralsPopoverNotVisible)
                Then("the menu icon should have a badge", then.idVisible(MENU_ICON_BADGE(true)))
                When("I close the app", when.restartWithData, async () => {
                    When("I login as the same user", when.loginOnly(CUSTOMER_35, AUTH_35), async () => {
                        When("I tap skip this step", when.tapText("Skip this step"), async () => {
                            When("I press later", when.tapText("Later"), async () => {
                                Then("I should no longer see the the popover", then.referralsPopoverNotVisible)
                                Then("the menu icon should no longer have a badge", then.idVisible(MENU_ICON_BADGE(false)))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("As a user with referrals not enabled I cannot see anything to do with referrals", scenario.start, async () => {
        Given("I login as a user with a referrals not enabled", given.loginAsUser(CUSTOMER_1, AUTH_1), async () => {
            Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible)
            When("I go to the menu", when.tapID(MENU_ICON), async () => {
                Then("I should not see the invite button", then.textNotVisible("Invite a colleague"))
            })
        })
    })
})