import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import moment from "moment";
import { referralImageURIForest, referralImageURIOcean } from "./_resources/fixtures";

Feature("Referrals work as intended", async () => {
    // @bug Bitrise bug - en-US translations being used, test expects en-UK. Passing locally
    ScenarioSkip("As a user with referrals enabled I can view the referrals popover, button and screen, and see the person I have referred", scenario.start, async () => {
        Given("I trigger the referral worker", given.triggerawardReferralYucoin(data.CUSTOMER_10.data.customerId), async()=>{
            When("I login as a user with a referrals enabled", when.loginAsUser(data.CUSTOMER_5, data.AUTH_5), async () => {
                Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible)
                Then("I should see 1,200 YuCoin today, 1000 of which came from the referral", then.textVisible("1,200 YuCoin today"))
                Then("I should see my YuCoin balance of 4,280", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(4280)))
            })
        })
        When("I go to Today's Earnings", when.tapText("0 steps"), async()=>{
            Then("I see the 1,200 yucoin earned today so far", then.textVisible("1,200 YuCoin"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I should see the referral reward", then.textVisible("Referral"))
            Then("I should see YuCoin amount from the referral", then.textVisible("1000"))
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
            Then("I should see the Invite a colleague menu item", then.idVisible(ids.MENU_ITEM("Invite a Colleague")))
            Then("I should see the Lottie icon", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap on the Invite a Colleague", when.tapID(ids.MENU_ITEM("Invite a Colleague")), async () => {
            Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage(referralImageURIForest))
            Then("I should see the referral for Ron W", then.referralVisible(data.CUSTOMER_10, moment().format("DD/MM/YYYY")))
        })
        When("I tap copy", when.tapText("Copy"), async()=>{
            Then("I should see this text change to 'Copied'", then.textVisible("Copied!"))
        })
        When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the daily steps screen", then.onDailySteps())
            Then("the menu icon should no longer have a badge", then.idVisible(ids.MENU_ICON_BADGE(false)))
        })
        When("I close the app", when.restartWithoutDelete, async () => {
            Then("I should no longer see the the popover", then.referralsPopoverNotVisible)
            Then("the menu icon should no longer have a badge", then.idVisible(ids.MENU_ICON_BADGE(false)))
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
    
    // @bug Bitrise bug - en-US translations being used, test expects en-UK. Passing locally
    ScenarioSkip("As a user with custom icon and reward referrals enabled I can see it on home screen, and reward screen's empty state", scenario.start, async () => {
        Given("I login as a user with a referrals enabled", given.loginAsUser(data.CUSTOMER_10, data.AUTH_10), async () => {
            Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible)
                Then("I should see my YuCoin balance of 100,200", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(100200)))
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
            Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage(referralImageURIOcean))
            Then("I should see the empty referral screen state", then.referralEmptyState)
            Then("I should not see the the person who referred me", then.referralNotVisible(data.CUSTOMER_5, moment().format("DD/MM'YYYY")))

        })
        When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
            When("I go to the menu page", when.tapID(ids.MENU_ICON), async () => {
                Then("I should be on the menu screen", then.menuItemsVisible)
                Then("I should see the Invite a colleague menu item", then.idVisible(ids.MENU_ITEM("Invite a Colleague")))
            })
        })
        When("I tap on the invite button", when.tapID(ids.MENU_ITEM("Invite a Colleague")), async () => {
            Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage(referralImageURIOcean))
        })
    })
})