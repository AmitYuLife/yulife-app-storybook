import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("Referrals work as intended", async () => {
    Scenario("As a user with referrals enabled I can view the referrals popover, button and screen", scenario.start, async () => {
        Given("I login as a user with a referrals enabled", given.loginAsUser(data.CUSTOMER_5, data.AUTH_5), async () => {
            Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible)
        })
        When("I close and reopen the app", when.restartWithoutDeleteTwoTimes, async () => {
            Then("I should see the Invite a colleague popover", then.referralsPopoverVisible)
        })
        When("I tap the menu icon to close the popover", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            Then("I should no longer see the the popover", then.referralsPopoverNotVisible)
            Then("the menu icon should have a badge", then.idVisible(ids.MENU_ICON_BADGE(true)))
        })
        When("I go to the menu page", when.tapID(ids.MENU_ICON), async () => {
            Then("I should be on the menu screen", then.menuItemsVisible)
            Then("I should see the Invite a colleague button", then.textVisible("Invite a colleague"))
            Then("the invite button should have the notification badge", then.idVisible(ids.REFERRALS_BUTTON_BADGE(true)))
        })
        When("I tap on the invite button", when.tapText("Invite a colleague"), async () => {
            Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage)
        })
        When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the daily steps screen", then.onDailySteps())
            Then("the menu icon should no longer have a badge", then.idVisible(ids.MENU_ICON_BADGE(false)))
        })
        When("I go to the menu", when.tapID(ids.MENU_ICON), async () => {
            Then("I should be on the menu", then.menuItemsVisible)
            Then("the invite button should no longer have a badge", then.idVisible(ids.REFERRALS_BUTTON_BADGE(false)))
        })
    })

    Scenario("As a user with referrals enabled I can only see the popover the second time I log in", scenario.start, async () => {
        Given("I login as a user with a referrals enabled", given.loginAsUser(data.CUSTOMER_5, data.AUTH_5), async () => {
            Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible)
        })
        When("I close and reopen the app", when.restartWithoutDeleteTwoTimes, async () => {
            Then("I should see the Invite Colleagues popover", then.referralsPopoverVisible)
        })
        When("I tap the menu icon to close the popover", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            Then("I should no longer see the the popover", then.referralsPopoverNotVisible)
            Then("the menu icon should have a badge", then.idVisible(ids.MENU_ICON_BADGE(true)))
        })
        When("I go to the menu page", when.tapID(ids.MENU_ICON), async () => {
            Then("I should be on the menu screen", then.menuItemsVisible)
            Then("I should see the Invite a colleague button", then.textVisible("Invite a colleague"))
            Then("the invite button should have the notification badge", then.idVisible(ids.REFERRALS_BUTTON_BADGE(true)))
        })
        When("I tap on the invite button", when.tapText("Invite a colleague"), async () => {
            Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage)
        })
        When("I close the app", when.restartWithoutDelete, async () => {
            Then("I should no longer see the the popover", then.referralsPopoverNotVisible)
            Then("the menu icon should no longer have a badge", then.idVisible(ids.MENU_ICON_BADGE(false)))
        })
        When("I go to the menu", when.tapID(ids.MENU_ICON), async () => {
            Then("I should be on the menu", then.menuItemsVisible)
            Then("the invite button should no longer have a badge", then.idVisible(ids.REFERRALS_BUTTON_BADGE(false)))
        })
    })

    Scenario("As a user with referrals not enabled I cannot see anything to do with referrals", scenario.start, async () => {
        Given("I login as a user with a referrals not enabled", given.loginAsUser(data.CUSTOMER_7, data.AUTH_7), async () => {
            Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible)
        })
        When("I close and reopen the app", when.restartWithoutDeleteTwoTimes, async () => {
            Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible)
        })
        When("I go to the menu", when.tapID(ids.MENU_ICON), async () => {
            Then("I should not see the invite button", then.textNotVisible("Invite a colleague"))
            Then("I should not see the referrals QR code", then.idNotVisible(ids.REFERRALS_QR_CODE))
        })
    })

    // @update Need to watch on bitrise, can't find 'Invite colleagues' or 'MENU_ICON_BADGE_true', passing locally
    Scenario("As a user with custom icon and reward referrals enabled i can see it on home screen", scenario.start, async () => {
        Given("I login as a user with a referrals enabled", given.loginAsUser(data.CUSTOMER_10, data.AUTH_10), async () => {
            Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible)
        })
        When("I close and reopen the app", when.restartWithoutDeleteTwoTimes, async () => {
            Then("I should see the Invite Colleagues popover", then.referralsPopoverVisible)
        })
        When("I tap the menu icon to close the popover", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            Then("I should see £10 reward refferal", then.textVisible("£10"))
            Then("I should no longer see the the popover", then.referralsPopoverNotVisible)
            Then("the menu icon should have a badge", then.idVisible(ids.MENU_ICON_BADGE(true), 2500))
        })
        When("I tap on the reward ammount icon", when.tapText("£10"), async () => {
            Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage)
        })
        When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
            When("I go to the menu page", when.tapID(ids.MENU_ICON), async () => {
                Then("I should be on the menu screen", then.menuItemsVisible)
                Then("I should see the Invite a colleague button", then.textVisible("Invite a colleague"))
            })
        })
        When("I tap on the invite button", when.tapText("Invite a colleague"), async () => {
            Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage)
        })
    })
})