import { Feature, Scenario, Given, When, Then, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import { THEME_COLORS, THEME_NAMES } from "./_resources/fixtures";
import * as scenario from "./_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "./_data";
import * as ids from "@ids";

Feature("Carrier Theming", async () => {
  Scenario("MetLife carrier theme is applied after login", scenario.start, async () => {
    Given("I am logged in as a MetLife themed user", given.loginAsUser(data.CUSTOMER_METLIFE.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see the MetLife theme is active", then.idVisible(ids.THEME_NAME(THEME_NAMES.metlife), 10_000));
      Then("I should see the carrier icon in the top bar", then.idVisible(ids.TOP_BAR_CARRIER_ICON, 5_000));
      Then("I should see the MetLife primary color applied", then.idExist(ids.THEME_PRIMARY_COLOR(THEME_COLORS.metlife.p600), 5_000));
      Then("I should see the daily steps screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 5_000));
    });
  });

  Scenario("NN Group carrier theme is applied after login", scenario.start, async () => {
    Given("I am logged in as an NN themed user", given.loginAsUser(data.CUSTOMER_NN.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see the NN theme is active", then.idVisible(ids.THEME_NAME(THEME_NAMES.nn), 10_000));
      Then("I should see the carrier icon in the top bar", then.idVisible(ids.TOP_BAR_CARRIER_ICON, 5_000));
      Then("I should see the NN primary color applied", then.idExist(ids.THEME_PRIMARY_COLOR(THEME_COLORS.nn.p600), 5_000));
      Then("I should see the daily steps screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 5_000));
    });
  });

  Scenario("Theme switches from MetLife to NN successfully", scenario.start, async () => {
    Given("I am logged in as a MetLife themed user", given.loginAsUser(data.CUSTOMER_METLIFE.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see the MetLife theme is active", then.idVisible(ids.THEME_NAME(THEME_NAMES.metlife), 10_000));
      Then("I should see the MetLife primary color applied", then.idExist(ids.THEME_PRIMARY_COLOR(THEME_COLORS.metlife.p600), 5_000));
    });
    When("I open the debug Theme Switcher", when.openDebugMenuItem("get-themes", "get themes"), async () => {
      When("I select the NN theme and set it", when.selectAndSetTheme(THEME_NAMES.nn), async () => {
        When("I close the theme switcher and debug menu", when.closeThemeSwitcherAndDebug, async () => {
          Then("I should see the NN theme is now active", then.idVisible(ids.THEME_NAME(THEME_NAMES.nn), 10_000));
          Then("I should see the carrier icon in the top bar", then.idVisible(ids.TOP_BAR_CARRIER_ICON, 5_000));
          Then("I should see the NN primary color applied", then.idExist(ids.THEME_PRIMARY_COLOR(THEME_COLORS.nn.p600), 5_000));
          Then("I should no longer see the MetLife primary color", then.idNotExist(ids.THEME_PRIMARY_COLOR(THEME_COLORS.metlife.p600), 5_000));
          Then("I should no longer see the MetLife theme name", then.idNotExist(ids.THEME_NAME(THEME_NAMES.metlife), 5_000));
        });
      });
    });
  });
});
