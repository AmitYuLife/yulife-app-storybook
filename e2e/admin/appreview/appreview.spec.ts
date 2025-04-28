import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { getLocalisedString as t } from "@i18n";

Feature("App store review should behave correctly", async () => {
  Scenario("App store review pop up and i should tap Yeah!", scenario.start, async () => {
    Given("I am in the app should pop up app review", given.loginAsUser(data.CUSTOMER_6, data.AUTH_6), async () => {
      Then("I should see text Enjoying YuLife?", then.idVisible(ids.APPREVIEW_TEXT(t("Enjoying YuLife?")), 5000));
      Then("I should see text (We’d love to know either way!)", then.textVisible(t("(We’d love to know either way!)")));
      When("I tap the button", when.tapText("Yeah!", 1, true), async () => {
        Then("I should not see a screen asking me Enjoying YuLife?", then.idNotVisible(ids.APPREVIEW_TEXT(t("Enjoying YuLife?"))));
        When("I close and reopen the app", when.reloadOnly, async () => {
          Then("I should not see a screen asking me Enjoying YuLife?", then.idNotVisible(ids.APPREVIEW_TEXT(t("Enjoying YuLife?"))));
        });
      });
    });
  });

  Scenario("App store review pop up and i should tap on Not really and after that Give feedback", scenario.start, async () => {
    Given("I am in the app should pop up app review", given.loginAsUser(data.CUSTOMER_6, data.AUTH_6), async () => {
      Then("I should see text Enjoying YuLife?", then.idVisible(ids.APPREVIEW_TEXT(t("Enjoying YuLife?")), 5000));
      When("I tap the button Not really", when.tapText("Not really", 2000, true), async () => {
        Then("I should see text We’re sorry to hear that", then.idVisible(ids.APPREVIEW_TEXT(t("We’re sorry to hear that"))));
        Then("I should see text We’d love a chance to do better. Would you mind leaving us a few tips?", then.textVisible(t("We’d love a chance to do better. Would you mind leaving us a few tips?")));
        When("I tap the button Give feedback", when.tapText(t("Give feedback"), 1, true), async () => {
          Then("I should see intercom", then.textVisible(t("Send us a message")));
          When("I close and reopen the app", when.reloadOnly, async () => {
            Then("I should not see a screen asking me Enjoying YuLife?", then.idNotVisible(ids.APPREVIEW_TEXT(t("Enjoying YuLife?"))));
          });
        });
      });
    });
  });

  Scenario("App store review pop up and i should tap on Not really and after that No thanks", scenario.start, async () => {
    Given("I am in the app should pop up app review", given.loginAsUser(data.CUSTOMER_6, data.AUTH_6), async () => {
      Then("I should see text Enjoying YuLife?", then.idVisible(ids.APPREVIEW_TEXT(t("Enjoying YuLife?")), 5000));
      When("I tap the button Not really", when.tapText(t("Not really"), 2000, true), async () => {
        Then("I should see text We’d love a chance to do better. Would you mind leaving us a few tips?", then.textVisible("We’d love a chance to do better. Would you mind leaving us a few tips?"));
        When("I tap the button Give feedback", when.tapText(t("No thanks"), 1, true), async () => {
          Then("I should  see the daily steps screen", then.onDailySteps());
          Then("I should  not see intercom", then.textNotVisible(t("Start a conversation")));
          When("I close and reopen the app", when.reloadOnly, async () => {
            When("I wait for 6 seconds", when.wait(6000), async () => {
              Then("I should not see a screen asking me Enjoying YuLife?", then.idNotVisible(ids.APPREVIEW_TEXT("Enjoying YuLife?")));
            });
          });
        });
      });
    });
  });
});
