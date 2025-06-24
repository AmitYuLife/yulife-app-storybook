import { Feature, Scenario, Given, When, Then, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("I receive the correct emails", async () => {
  Scenario("I should receive the correct magic link to access the App via the Login flow", scenario.start, async () => {
    Then("I should be on the login page", then.idVisible(ids.LOGIN_HERO_CLAIM_ACCOUNT_BUTTON, 2500));
    When("I tap to begin the login flow", when.tapID(ids.LOGIN_HERO_LOGIN_BUTTON), async () => {
      Then("I should be on the email login screen", then.isOnLoginEmailScreen);
    });
    When("I enter my email", when.typeViaID(ids.INPUT_LOGIN_EMAIL, data.CUSTOMER_6.data.email), async () => {
      When("I tap to continue", when.tapID(ids.BUTTON_LOGIN(false), 2000), async () => {
        When("I tap 'PASS' on the captcha prompt", when.tapText("PASS", 2000), async () => {
          Then("I should have received the correct email", then.hasReceivedMagicLinkEmail(data.CUSTOMER_6.data.email));
        });
      });
    });
    When("I terminate the app", when.terminateApp, async () => {
      When("I follow the email link", when.followEmailLink(data.CUSTOMER_6.data.email), async () => {
        Then("I should see the sign up reward screen", then.rewardScreenVisible);
        Then("I should see a visual indicator to say i've been awarded 200 coins", then.given200coins);
      });
    });
    // new addition to test expired link message. Getting app error. Roger's investigating
    //  When("I tap 'Let's go'", when.tapLetsGo, async () => {
    //     When("I skip the health connection screen", when.skipHealthConnection, async () => {
    //       When("I terminate the app", when.terminateApp, async () => {
    //         When("I follow the email link", when.followEmailLink(data.CUSTOMER_6.data.email), async () => {
    //           Then("I should see the sign up reward screen", then.rewardScreenVisible);
    //         });
    //       })
    //     });
    //   });
  });

  ScenarioSkip("I receive the correct email when redeeming a voucher reward", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("rewards", data.CUSTOMER_6, data.AUTH_6), async () => {
      Then("I should be on the Rewards tab", then.idVisible(ids.REWARDS_SCREEN));
      When("I scroll to Nike reward", when.scrollFromID(ids.REWARDS_SCREEN, "up", "slow"), async () => {
        When("I tap nike reward", when.tapRewardInList(data.CORE_REWARDS_NIKE), async () => {
          Then("I should be on the nike reward screen", then.onRewardScreen(data.CORE_REWARDS_NIKE));
          When("I scroll to the bottom of the page", when.swipeFromText("How to redeem Nike", "up", "fast"), async () => {
            Then("I should be at the bottom of the page", then.textVisible("Have a question?"));
            When("I tap buy voucher with yucoin", when.tapText("Buy voucher with YuCoin"), async () => {
              When("I tap 3rd denomination", when.tapDenomination(data.CORE_REWARDS_NIKE, 2), async () => {
                When("I tap confirm", when.tapText("Confirm"), async () => {
                  Then("I should receive the correct email", then.hasReceivedNikeEmail(data.CUSTOMER_6.data.email));
                });
              });
            });
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
});
