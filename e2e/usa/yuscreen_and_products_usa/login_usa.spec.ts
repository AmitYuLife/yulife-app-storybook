import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import { STEPS_COUNT, CYCLING_COUNT, MINDFUL_COUNT, YUCOIN_POWER_INFO } from "@ids";
import { AUTH_USA_1 } from "../_data/mongo/auths";
import { BUSINESS_ACCOUNT_USA_1, BUSINESS_EMPLOYEE_INFO_2, CUSTOMER_USA_1, CUSTOMER_USA_2 } from "../_data";
import * as ids from "@ids";

Feature("As a USA user, I can login and interact with app features", async () => {
  Scenario("As a user I can get past the login screen and see the donate tab after selecting my location", scenario.start, async () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason([BUSINESS_ACCOUNT_USA_1.data.business_account_id]), async () => {
      Given("I login and go to the daily steps screen", given.loginAsUser(CUSTOMER_USA_1, AUTH_USA_1, true, "US"), async () => {
        When("I have done 20 steps", given.sendSteps(20), async () => {
          Then("I should see 20 steps", then.idVisible(STEPS_COUNT(20), 5000));
        });
      });
    });
    When("I have done 11.3 km cycling", when.addCyclingData(11345), async () => {
      When("I have done 13 min Mindfulness", when.addMindfulnessHistoricalData(800, 0), async () => {
        When("I update the screen to see today activity", given.triggerAppUpdateState, async () => {
          Then("I should see 11.3 km done today", then.idVisible(CYCLING_COUNT("7.0 mi"), 4000));
          Then("I should see 13 min mindful done today", then.idVisible(MINDFUL_COUNT("13 min"), 4000));
          Then("I should see the amount of yucoin I earned today", then.textVisible("16 YuCoin today", 4000));
          Then("I should see the power info tooltip next to the YuCoin icon", then.idVisible(YUCOIN_POWER_INFO, 3000));
        });
      });
    });
    When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards"), 3000), async () => {
      When("I tap the intro CTA button to continue", when.tapID(ids.BATTLE_PASS_INTRO_SCREEN_CTA_BUTTON, 2000), async () => {
        Then("I should see the first level variant screen", then.idVisible(ids.BATTLE_PASS_FIRST_LEVEL_SCREEN, 2000));
      });
    });
  });

  // skipping as test will fail on runners until we get members running alongside it
  // to test locally, ensure members is also running
  // Cris is looking into getting this working on the runners
  ScenarioSkip("A US user can onboard through the app", scenario.start, async () => {
    When("I press `log in`", when.tapID(ids.LOGIN_HERO_LOGIN_BUTTON), async () => {
      When("I input my email", when.typeViaID(ids.INPUT_LOGIN_EMAIL, BUSINESS_EMPLOYEE_INFO_2.data.employment_email), async () => {
        When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
          When("I tap the button to go to the next screen", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
            When("I tap pass on the captcha", when.tapText("PASS"), async () => {
              Then("I should have received the correct email", then.hasReceivedOnboardingLinkEmail(BUSINESS_EMPLOYEE_INFO_2.data.employment_email));
            });
          });
        });
      });
    });
    When("I terminate the app", when.terminateApp, async () => {
      When("I follow the email link", when.followEmailLink(BUSINESS_EMPLOYEE_INFO_2.data.employment_email), async () => {
        When("I wait 15 seconds", when.wait(15000), async () => {
          Then("I should see the signup reward screen", then.signupRewardVisible);
        });
      });
    });
    When("I have authorised fitkit", given.authoriseFitkit(), async () => {
      When("I tap let's go", when.tapID(ids.BUTTON_BASE("SIGN_UP_REWARD_SCREEN")), async () => {
        Then("I should see a prompt to connect to the health app", then.idVisible(ids.FITKIT_CONNECT_BUTTON));
      });
    });
    When("I tap to skip connection", when.tapID(ids.SCREEN_ONBOARDING_FITKIT_CONNECT_BUTTON_SKIP), async () => {
      Then("I should see my total yucoin balance of 20", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(20)));
    });
  });
});
