import { Feature, Scenario, Given, When, Then, ScenarioSkip, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";

Feature("I receive the correct emails", async () => {
  Scenario("I should receive the correct magic link to access the App via the Login flow", scenario.start, async () => {
    Then("I should be on the login page", then.idVisible(ids.LOGIN_HERO_CLAIM_ACCOUNT_BUTTON, 2500));
    When("I tap to begin the login flow", when.tapID(ids.LOGIN_HERO_LOGIN_BUTTON), async () => {
      Then("I should be on the email login screen", then.isOnLoginEmailScreen);
    });
    When("I enter my email", when.typeViaID(ids.INPUT_LOGIN_EMAIL, data.CUSTOMER_5.data.email), async () => {
      When("I tap to continue", when.tapID(ids.BUTTON_LOGIN(false), 2000), async () => {
        When("I tap 'PASS' on the captcha prompt", when.tapText("PASS", 2000), async () => {
          Then("I should have received the correct email", then.hasReceivedMagicLinkEmail(data.CUSTOMER_5.data.email));
        });
      });
    });
    When("I terminate the app", when.terminateApp, async () => {
      When("I follow the email link", when.followEmailLink(data.CUSTOMER_5.data.email), async () => {
        Then("I should see the sign up reward screen", then.rewardScreenVisible);
        Then("I should see a visual indicator to say i've been awarded 200 coins", then.given200coins);
      });
    });
    // testing expired link
    When("I tap 'Let's go'", when.tapLetsGo, async () => {
      When("I skip the health connection screen", when.skipHealthConnection, async () => {
        When("I terminate the app", when.terminateApp, async () => {
          When("I follow the email link", when.followEmailLink(data.CUSTOMER_5.data.email, { clearKeychainBeforeLaunch: true }), async () => {
            When("I wait", when.wait(5000), async () => {
              Then("I should see the warning that the link has expired", then.textVisible("Something went wrong"));
            });
          });
        });
      });
    });
  });

  Scenario("I can log into the app using the short code from the magic link email", scenario.start, async () => {
    Then("I should be on the login page", then.idVisible(ids.LOGIN_HERO_CLAIM_ACCOUNT_BUTTON, 2500));
    When("I tap to begin the login flow", when.tapID(ids.LOGIN_HERO_LOGIN_BUTTON), async () => {
      Then("I should be on the email login screen", then.isOnLoginEmailScreen);
    });
    When("I enter my email", when.typeViaID(ids.INPUT_LOGIN_EMAIL, data.CUSTOMER_SHORT_CODE.customer.data.email), async () => {
      When("I tap to continue", when.tapID(ids.BUTTON_LOGIN(false), 2000), async () => {
        When("I tap 'PASS' on the captcha prompt", when.tapText("PASS", 2000), async () => {
          Then("I should see the short code input field", then.idVisible(ids.INPUT_SHORT_CODE, 2500));
          Then("I should have received the correct email", then.hasReceivedMagicLinkEmail(data.CUSTOMER_SHORT_CODE.customer.data.email));
        });
      });
    });
    When("I read the short code from the email and enter it", when.submitShortCodeFromEmail(data.CUSTOMER_SHORT_CODE.customer.data.email), async () => {
      When("I wait for the login to complete", when.wait(5000), async () => {
        Then("I should see the sign up reward screen", then.rewardScreenVisible);
        Then("I should see a visual indicator to say i've been awarded 200 coins", then.given200coins);
      });
    });
  });

  Scenario("I receive the correct email when redeeming a voucher reward", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_VOUCHER_EMAIL.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards"), 3000), async () => {
        Then("I should be on the Rewards tab", then.idVisible(ids.SHOPFRONT_REWARDS_LIST));
      });
    });
    When("I scroll to the Adidas reward", when.scrollFromID(ids.REWARDS_SCREEN, "up", "slow", 0.5, 3_000), async () => {
      When("I tap the Adidas reward", when.tapText("Adidas"), async () => {
        Then("I should be on the Adidas reward screen", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW));
      });
    });
    When("I scroll to the buy button", when.scrollFromID(ids.SDUI_SCREEN_SCROLL_VIEW, "up", "fast", 0.5, 3_000), async () => {
      When("I tap buy voucher with YuCoin", when.tapID(ids.BUTTON_BASE("Claim Reward", false), 4000), async () => {
        When("I tap a denomination", when.tapID(ids.TEXT_TEMPLATE("£10 - 7,760 YuCoin", undefined)), async () => {
          When("I tap confirm", when.tapText("Confirm", 3000), async () => {
            Then("I should receive the correct email", then.hasReceivedAdidasEmail(data.CUSTOMER_VOUCHER_EMAIL.customer.data.email));
          });
        });
      });
    });
  });

  Scenario("A user without a password set should be able to log into the app via the magic link in their email", scenario.start, async () => {
    Then("I should be on the login page", then.idVisible(ids.LOGIN_HERO_CLAIM_ACCOUNT_BUTTON, 2500));
    When("I tap to begin the login flow", when.tapID(ids.LOGIN_HERO_LOGIN_BUTTON), async () => {
      Then("I should be on the email login screen", then.isOnLoginEmailScreen);
    });
    When("I enter my email", when.typeViaID(ids.INPUT_LOGIN_EMAIL, data.CUSTOMER_14.data.email), async () => {
      When("I tap to continue", when.tapID(ids.BUTTON_LOGIN(false), 2000), async () => {
        When("I tap 'PASS' on the captcha prompt", when.tapText("PASS", 2000), async () => {
          Then("I shouldn't see the option to login with email", then.idNotVisible(ids.LOGIN_WITH_PASSWORD));
          Then("I should have received the correct email", then.hasReceivedMagicLinkEmail(data.CUSTOMER_14.data.email));
        });
      });
    });
    When("I terminate the app", when.terminateApp, async () => {
      When("I follow the email link", when.followEmailLink(data.CUSTOMER_14.data.email), async () => {
        Then("I should see the sign up reward screen", then.rewardScreenVisible);
        Then("I should see a visual indicator to say i've been awarded 200 coins", then.given200coins);
      });
    });
  });

  Scenario("User sees their gifted YuCoin reward via the email flow", scenario.start, async () => {
    Given("I log into the app", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        When("I trigger the gifting event", when.triggerGiftReceivedEmail(data.CUSTOMER_2.customer, data.USER_2_GIFT_A), async () => {
          Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
        });
      });
    });
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("I should have received the gifted YuCoin email", then.hasReceivedGiftedEmail(data.CUSTOMER_1.data.email, data.CUSTOMER_2.customer));
    });
    When("I fully terminate the app", when.terminateApp, async () => {
      When("I open the gifted YuCoin email and click the CTA link", when.followEmailLink(data.CUSTOMER_1.data.email), async () => {
        Then("I should be deep-linked into the gifting screen", then.idVisible(ids.P2P_STICKER_ITEMS("lantern")));
      });
    });
  });
});
