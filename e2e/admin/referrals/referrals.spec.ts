import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import moment from "moment";
import { noReferralsMessage, referralImageURIForest, referralImageURIOcean } from "./_resources/fixtures";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";

Feature("Referrals work as intended", async () => {
  Scenario("As a user with referrals enabled, I can view my referred person and receive the correct reward amount", scenario.start, async () => {
    Given("I trigger the referral worker", given.triggerawardReferralYucoin(data.CUSTOMER_10.data.customerId), async () => {
      When("I login as a user with a referrals enabled", when.loginAsUser(data.CUSTOMER_5, data.AUTH_5), async () => {
        Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible("2000"));
        Then("I should see 2,200 YuCoin today, 2000 of which came from the referral", then.textVisible("2,200 YuCoin today"));
        Then("I should see my updated YuCoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(5280)));
      });
    });
    When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0)), async () => {
      Then("I see the YuCoin earned today so far", then.textVisible("2,200 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I should see the referral reward", then.textVisible("Referral"));
      Then("I should see YuCoin amount from the referral", then.textVisible("2000"));
    });
    When("I close and reopen the app", when.restartWithoutDeleteTwoTimes, async () => {
      Then("I should see the Invite a colleague popover", then.referralsPopoverVisible("2000"));
    });
    When("I tap the menu icon to close the popover", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should no longer see the the popover", then.referralsPopoverNotVisible("2000"));
      Then("the menu icon should have a badge", then.idVisible(ids.MENU_ICON_BADGE(true)));
    });
    When("I go to the menu page", when.tapID(ids.MENU_ICON), async () => {
      Then("I should be on the menu screen", then.menuItemsVisible("enhanced"));
      Then("I should see the Invite a colleague menu item", then.idVisible(ids.MENU_ITEM("Invite a Colleague")));
      Then("I should see the Lottie icon", then.idVisible(ids.LOTTIE_VIEW));
    });
    When("I tap on the Invite a Colleague", when.tapID(ids.MENU_ITEM("Invite a Colleague")), async () => {
      Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage(referralImageURIForest, 2000));
      Then("I should see the referral for Ron W", then.referralVisible(data.CUSTOMER_10, moment().format("DD/MM/YYYY"), "2000"));
    });
    When("I tap copy", when.tapText("Copy"), async () => {
      Then("I should see this text change to 'Copied'", then.textVisible("Copied!"));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be on the daily steps screen", then.onDailySteps());
      Then("the menu icon should no longer have a badge", then.idVisible(ids.MENU_ICON_BADGE(false)));
    });
    When("I close and reopen the app", when.restartWithoutDelete, async () => {
      Then("I should no longer see the the popover", then.referralsPopoverNotVisible("2000"));
      Then("the menu icon should no longer have a badge", then.idVisible(ids.MENU_ICON_BADGE(false)));
    });
  });

  Scenario("As a user without referrals enabled, I should see no referral-related content", scenario.start, async () => {
    Given("I login as a user with a referrals not enabled", given.loginAsUser(data.CUSTOMER_7, data.AUTH_7), async () => {
      Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible());
    });
    When("I close and reopen the app", when.restartWithoutDeleteTwoTimes, async () => {
      Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible());
    });
    When("I go to the menu", when.tapID(ids.MENU_ICON), async () => {
      Then("I should not see the invite button", then.textNotVisible("Invite a colleague"));
      Then("I should not see the referrals QR code", then.idNotVisible(ids.REFERRALS_QR_CODE));
    });
  });

  Scenario("As a referrals-enabled user, I should see the empty state when no invites are accepted yet", scenario.start, async () => {
    Given("I login as a user with a referrals enabled", given.loginAsUser(data.CUSTOMER_10, data.AUTH_10), async () => {
      Then("I should not see the Invite Colleagues popover", then.referralsPopoverNotVisible("2000"));
      Then("I should see my YuCoin balance of 100,200", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(100200)));
    });
    When("I close and reopen the app", when.restartWithoutDeleteTwoTimes, async () => {
      Then("I should see the Invite Colleagues popover", then.referralsPopoverVisible("2000"));
    });
    When("I tap the menu icon to close the popover", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should no longer see the the popover", then.referralsPopoverNotVisible("2000"));
      Then("The menu icon should have a badge", then.idVisible(ids.MENU_ICON_BADGE(true), 2500));
    });
    When("I go to the menu page", when.tapID(ids.MENU_ICON), async () => {
      Then("I should be on the menu screen", then.menuItemsVisible("enhanced"));
      Then("I should see the Invite a colleague menu item", then.idVisible(ids.MENU_ITEM("Invite a Colleague")));
    });
    When("I tap on the Invite a Colleague", when.tapID(ids.MENU_ITEM("Invite a Colleague")), async () => {
      Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage(referralImageURIOcean));
      Then("I should see the empty referral screen state", then.referralEmptyState);
    });
  });

  Scenario("As a user with concurrent employments, I should be able to refer someone through any of my employments", scenario.start, async () => {
    Given("I trigger the referral worker", given.triggerawardReferralYucoin(data.CUSTOMER_16.customer.data.customerId), async () => {
      When("I login", given.loginAsUser(data.CUSTOMER_15.customer, GENERIC_AUTH_PASSWORD), async () => {
        When("I go to the menu page", when.tapID(ids.MENU_ICON), async () => {
          Then("I should be on the menu screen", then.menuItemsVisible("enhanced"));
          Then("I should see the Invite a colleague menu item", then.idVisible(ids.MENU_ITEM("Invite a Colleague")));
        });
      });
    });
    When("I tap on the Invite a Colleague", when.tapID(ids.MENU_ITEM("Invite a Colleague")), async () => {
      Then("I should see that my currently selected referral company is 'YU LIFE LTD'", then.idVisible(ids.REFERRALS_BUSINESS_ACCOUNT_NAME(data.BUSINESS_ACCOUNT_1.data.business_account_name)));
      Then("I should see the appropriate voucher code title", then.idVisible(ids.VOUCHER_CODE_TITLE(`Share your link with a ${data.BUSINESS_ACCOUNT_1.data.business_account_name} colleague!`)));
      Then("I should see the correct voucher code for this business", then.idVisible(ids.VOUCHER_CODE("mylink.develop.yulife.engineering/UK-T2ST-CU14")));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.REFERRALS_QR_CODE, "up", "fast"), async () => {
      Then("I should see the empty referral history", then.textVisible(noReferralsMessage));
    });
    When("I scroll back to the top", when.scrollFromID(ids.REFERRALS_QR_CODE, "down", "fast"), async () => {
      When("I change the selected business to 'Justice League' using the dropdown", when.changeReferralSelectedBusiness(data.BUSINESS_ACCOUNT_4.data.business_account_name), async () => {
        Then("I should see that my currently selected referral company has changed to 'Justice League'", then.idVisible(ids.REFERRALS_BUSINESS_ACCOUNT_NAME(data.BUSINESS_ACCOUNT_4.data.business_account_name)));
        Then("I should see the updated voucher code title", then.idVisible(ids.VOUCHER_CODE_TITLE(`Share your link with a ${data.BUSINESS_ACCOUNT_4.data.business_account_name} colleague!`)));
        Then("I should see the correct voucher code for this business", then.idVisible(ids.VOUCHER_CODE("mylink.develop.yulife.engineering/UK-T3ST-CU14")));
      });
    });
    When("I scroll to the bottom", when.scrollFromID(ids.REFERRALS_QR_CODE, "up", "fast"), async () => {
      Then("I should see the referral for Reverald B", then.referralVisible(data.CUSTOMER_16.customer, moment().format("DD/MM/YYYY"), "2000"));
    });
  });
});
