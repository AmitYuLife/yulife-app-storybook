import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { getLocalisedString as t } from "@i18n";

Feature("As a user I can complete challenges across multiple worlds", async () => {
  Scenario("I can't transition from the first world (forest) to the second world (ocean) on the same day", scenario.start, () => {
    Given("I login as a user on level 49", given.loginAsUser(data.CUSTOMER_60, data.AUTH_60), async () => {
      When("I go to the YuCoin screen", when.tapID(ids.NAV_BAR("quests"), 5000), async () => {
        Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700), 5000));
        Then("I should see the level 49 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(49), 3000));
      });
    });
    When("I complete a walking challenge", when.completeNewWorldShortStroll(49), async () => {
      Then("I should see the level 50 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(50)));
    });
    When("I tap this level 50 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(50)), async () => {
      Then("I should see a message that the next level is not available yet", then.nextLevelLocked("50"));
    });
    When("I tap got it", when.tapID(ids.SCROLLABLE_CONTENT_CTA, 2000), async () => {
      Then("I should see the level 50 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(50)));
    });
  });

  Scenario("I can't transition from the level 199 to the yuniverse level 200 on the same day", scenario.start, () => {
    Given("I login as a user on level 199", given.logInAndGoToTab("quests", data.CUSTOMER_63, data.AUTH_63), async () => {
      Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700), 5000));
      Then("I should see the level 199 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(199), 3000));
    });
    When("I complete a walking challenge", when.completeNewWorldShortStroll(199), async () => {
      Then("I should see the level 199 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(199)));
    });
    When("I scroll up", when.scrollFromID(ids.LEVEL_CHALLENGE_BUTTON(199), "down", "slow"), async () => {
      When("I tap level 200 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(200)), async () => {
        Then("I should see a message that the next level is not available yet", then.nextLevelLocked("200"));
      });
    });
    When("I tap got it", when.tapID(ids.SCROLLABLE_CONTENT_CTA, 2000), async () => {
      Then("I should see the level 200 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(200)));
    });
  });

  Scenario("When I have unlocked level 200 and level 201, I can do two challenges for level 201", scenario.start, () => {
    Given("I login as a user on level 201", given.logInAndGoToTab("quests", data.CUSTOMER_64, data.AUTH_64), async () => {
      Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
      Then("I should see the level 201 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
    });
    When("I complete a walking challenge at level 201", when.completeChallenge(201, "Short Stroll"), async () => {
      Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
    });
    When("I tap this level 202 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(202)), async () => {
      Then("I should see a message that the next level is not available yet", then.nextLevelLocked("202"));
    });
    When("I tap got it", when.tapID(ids.SCROLLABLE_CONTENT_CTA, 2000), async () => {
      Then("I should see the level 201 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
    });
    When("I complete a second walking challenge at level 201", when.completeSecondChallenge(201, "Short Stroll"), async () => {
      Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
    });
    When("I tap this level 202 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(202)), async () => {
      Then("I should see a message that the next level is not available yet", then.nextLevelLocked("202"));
    });
  });

  Scenario("When I am at level 201 I can see all my challenges with their yucoin value and I can take max 4 in a day", scenario.start, () => {
    Given("I login as a user on level 201", given.logInAndGoToTab("yucoin", data.CUSTOMER_64, data.AUTH_64), async () => {
      Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700), 2000));
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I tap take a challenge", when.tapText(t("Take a challenge (%{noOfChallenges} left today)", { noOfChallenges: "4" }), 2000), async () => {
      Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible);
    });
    When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_TILE("Long Walk"), "down", "fast", 0.3, 1_000), async () => {
      When("I complete a short stroll challenge at level 201", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
        When("I tap done", when.tapText("Done", 1500), async () => {
          Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
          Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17780)));
        });
      });
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 1500), async () => {
      Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"));
    });
    When("I tap take a challenge", when.tapText(t("Take a challenge (%{noOfChallenges} left today)", { noOfChallenges: "3" }), 2000), async () => {
      Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible);
    });
    When("I complete a brisk walk challenge at level 201", when.selectAndCompleteWalkingChallenge("Brisk Walk", 800), async () => {
      Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
      Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17900)));
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 2000), async () => {
      Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left today)", 1500));
    });
    When("I tap take a challenge", when.tapText(t("Take a challenge (%{noOfChallenges} left today)", { noOfChallenges: "2" }), 2000), async () => {
      Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible);
    });
    When("I complete a long walk challenge at level 201", when.selectAndCompleteWalkingChallenge("Long Walk", 2000), async () => {
      Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
      Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18080)));
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 2000), async () => {
      Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left today)", 1500));
    });
    When("I tap take a challenge", when.tapText(t("Take a challenge (%{noOfChallenges} left today)", { noOfChallenges: "1" }), 2000), async () => {
      Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible);
    });
    When("I complete a meditation challenge at level 201", when.selectAndCompleteMeditationChallengeWithMedia(180), async () => {
      Then("I should see the level 201 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201), 1500));
      Then("I should see level 201 has 3 stars", then.idVisible(ids.LEVEL_STAR_COUNT(3), 1500));
      Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18120), 1500));
    });
    When("I tap level 201", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201), 2000), async () => {
      Then("I should see all the challenges I completed along with the yucoin awarded", then.challengesAndYuCoinsAwardedVisible);
    });
    When("I tap back", when.tapID(ids.BACK_BUTTON, 3000), async () => {
      When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
        Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge", 2000));
      });
    });
  });

  Scenario("When I am at level 251 I can see all my challenges with their yucoin value and I can take max 4 in a day", scenario.start, () => {
    Given("I login as a user on level 251", given.logInAndGoToTab("yucoin", data.CUSTOMER_67, data.AUTH_67), async () => {
      Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I tap take a challenge", when.tapText(t("Take a challenge (%{noOfChallenges} left today)", { noOfChallenges: "4" }), 2000), async () => {
      Then("I should be on the level 251 quest screen and see all 5 challenges available to me to take", then.canSeeChallengeTiles(data.USER_67, "boost"));
    });
    When("I complete a short stroll challenge at level 251", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
      When("I tap done", when.tapText(t("Done")), async () => {
        Then("I should see the level 251 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(251)));
        Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17860)));
      });
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"));
    });
    When("I go to quests", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see the level 251 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(251)));
    });
  });

  Scenario("As a user opening a Yunity Chest at level 250, I want the chest to contain a level boost and YuCoin worth 50x the users earn rate", scenario.start, () => {
    Given("I login as a user with level 250 unclaimed", given.logInAndGoToTab("quests", data.CUSTOMER_79, data.AUTH_79), async () => {
      Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
      Then("I should see the level 250 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(250)));
    });
    When("I tap the level 250 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(250)), async () => {
      Then("I should see that I've achived Yunity with the Forest", then.yunityCorrect("Forest"));
    });
    When("I tap to open the chest", when.tapText(t("Open the chest")), async () => {
      Then("I should see the Yunity Rewards", then.yunityRewardsVisible(["1 Level\nBoost", "Forest\nOutfit", "210\nYuCoin"]));
    });
  });
});
