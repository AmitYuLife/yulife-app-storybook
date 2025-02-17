import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as ids from "@ids";
import * as data from "../_data";
import { PensionInfoUser111, PensionInfoUser114 } from "./_resources/fixtures";
import { calculateDailyContribution, calculateInProgressContribution, calculatePensionModalAmount } from "./_resources/utils";

Feature("Smart Pension", async () => {
  Scenario("I can see an active connected pension", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_111, data.AUTH_111), async () => {
      Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17703)));
    });
    When("I go to the Yu tab", when.navigateTo("yu"), async () => {
      Then("I do not see the onboarding screen as I have a connection", then.cannotSeePensionOnboarding);
      Then("I can see the slot has no yucoin icon", then.idNotVisible(ids.RIGHT_STATUS_ICON));
    });
    When("I swipe to the bottom", when.swipeFromText(`${data.CUSTOMER_111.data.firstName} ${data.CUSTOMER_111.data.lastName}`, "up", "fast"), async () => {
      Then("I cannot see the caoursel item", then.idNotVisible(ids.CAROUSEL_CARD_BUTTON("**Connect your Pension**")));
    });
    When("I tap the pension slot", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Pension")), async () => {
      Then("I can see an active pension contribution page", then.canSeePensionContributionPage("active", PensionInfoUser111, "5"));
    });
    When("I scroll down the screen", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I tap the piggy bank toggle", when.tapID(ids.SDUI_SWITCH(undefined)), async () => {
        Then("I can see the value has changed", then.idVisible(ids.SDUI_SWITCH(true)));
      });
    });
    When("I dismiss the product page", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
      Then("I am back on the yuscreen", then.textVisible(`${data.CUSTOMER_111.data.firstName} ${data.CUSTOMER_111.data.lastName}`));
    });
    When("I go to the Yucoin tab", when.navigateTo("yucoin"), async () => {
      Then("I can see the contributions", then.textVisible(`£${calculateInProgressContribution(PensionInfoUser111)}`));
    });
    When("I go to earnings", when.tapYuCoinIcon, async () => {
      Then("I am on the earnings page", then.idVisible(ids.TODAYS_EARNINGS));
    });
    When("I scroll if needed", when.scrollUntilTextVisible(ids.TODAYS_EARNINGS, `${calculatePensionModalAmount(PensionInfoUser114)}`, "down"), async () => {
      Then("I can see the YuCoin rewarded", then.textVisible("10"));
      Then("I can see the modal telling the user to connect isn't visible", then.cannotSeePensionConnectPrompt);
    });
  });

  Scenario("I can see a pending pension due to contribution not exisiting", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_112, data.AUTH_112), async () => {
      Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
    });
    When("I go to the Yu tab", when.navigateTo("yu"), async () => {
      Then("I do not see the onboarding screen as I have a connection", then.cannotSeePensionOnboarding);
      Then("I can see the slot has no icon", then.idNotVisible(ids.RIGHT_STATUS_ICON));
      Then("I can see the slot has no icon", then.idNotVisible(ids.LEFT_SIDE_BACKGROUD_IMAGE_SLOT(undefined)));
    });
    When("I tap the pension slot", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Pension")), async () => {
      Then("I can see a pending pension contribution page", then.canSeePensionContributionPage("pending"));
    });
    When("I dismiss the product page", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
      When("I go to the Yu tab", when.navigateTo("yucoin"), async () => {
        When("I go to earnings", when.tapYuCoinIcon, async () => {
          When("I scroll if needed", when.scrollUntilTextVisible(ids.TODAYS_EARNINGS, "Today's challenges (0/4)", "down"), async () => {
            Then("I can see the Pending pension modal", then.canSeePendingPensionEarnings());
            Then("I cannot see the Manage button", then.textNotVisible("Manage"));
          });
        });
      });
    });
  });

  Scenario("I can see a pending pension due to contribution not having filled info", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_113, data.AUTH_113), async () => {
      Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
    });
    When("I go to the Yu tab", when.navigateTo("yu"), async () => {
      Then("I do not see the onboarding screen as I have a connection", then.cannotSeePensionOnboarding);
      Then("I can see the slot has no icon", then.idNotVisible(ids.RIGHT_STATUS_ICON));
      Then("I can see the slot has no icon", then.idNotVisible(ids.LEFT_SIDE_BACKGROUD_IMAGE_SLOT(undefined)));
    });
    When("I tap the pension slot", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Pension")), async () => {
      Then("I can see a pending pension contribution page", then.canSeePensionContributionPage("pending"));
    });
    When("I dismiss the product page", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
      When("I go to the Yu tab", when.navigateTo("yucoin"), async () => {
        When("I go to earnings", when.tapYuCoinIcon, async () => {
          When("I scroll if needed", when.scrollUntilTextVisible(ids.TODAYS_EARNINGS, "Today's challenges (0/4)", "down"), async () => {
            Then("I can see the Pending pension modal", then.canSeePendingPensionEarnings(false));
            Then("I cannot see the Manage button", then.textNotVisible("Manage"));
          });
        });
      });
    });
  });

  Scenario("I can see a paused pension due the contribution being set to paused", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_114, data.AUTH_114), async () => {
      Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
    });
    When("I go to the Yu tab", when.navigateTo("yu"), async () => {
      Then("I do not see the onboarding screen as I have a connection", then.cannotSeePensionOnboarding);
      Then("I can see the slot has no icon", then.idNotVisible(ids.RIGHT_STATUS_ICON));
      Then("I can see the slot has no icon", then.idNotVisible(ids.LEFT_SIDE_BACKGROUD_IMAGE_SLOT(undefined)));
    });
    When("I tap the pension slot", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Pension")), async () => {
      Then("I can see a paused pension contribution page", then.canSeePensionContributionPage("paused", PensionInfoUser114));
    });
    When("I tap the piggy bank toggle", when.tapID(ids.SDUI_SWITCH(undefined)), async () => {
      Then("I can see the value has changed", then.idVisible(ids.SDUI_SWITCH(true)));
    });
    When("I dismiss the product page", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
      When("I go to the Yu tab", when.navigateTo("yucoin"), async () => {
        Then("I cannot see the contributions", then.textNotVisible(calculateDailyContribution(PensionInfoUser114).toString()));
      });
    });
    When("I go to earnings", when.tapYuCoinIcon, async () => {
      When("I scroll if needed", when.scrollUntilTextVisible(ids.TODAYS_EARNINGS, "Today's challenges (0/4)", "down"), async () => {
        Then("I can see the paused contribution modal", then.canSeePausedPensionEarnings);
      });
    });
    When("I tap manage", when.tapText("Manage"), async () => {
      Then("I am on the product page for the pension", then.onPensionProductPage);
    });
  });
});
