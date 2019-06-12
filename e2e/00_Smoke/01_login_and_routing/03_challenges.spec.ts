// tslint:disable
// TODO: Move this to a different smoke folder
import { Feature, Given, Scenario, Then, ThenManual, When, ScenarioOnly } from "@bdd";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import { USER_2 } from "_utils/data/records";

enum challenge {
    shortStroll = "short stroll",
    briskWalk = "brisk walk",
    longWalk = "long walk",
    meditation = "meditation"
}

Feature("As a user I can take a challenge", async () => {

    Scenario("I can access the correct challenges as a level 1 user without any challenges today", scenario.setup, () => {
        Given("I am a level 1 user who has not done any challenges today", null, () => {
            Given("I have logged in and passed the education screens", given.loginAndGoToStepsScreen(), () => {
                When("I press on the quests tab", when.pressOnTab("quests"), async () => {
                    Then("I should see the first world", then.worldIsVisible(0));
                    When("I press on my current level", when.pressOnLevel(1), async () => {
                        Then("I should see the challenge screen", then.challengeScreenIsVisible);
                        Then("short stroll should be available", then.challengeIsAvailable(challenge.shortStroll));
                        Then("brisk walk should not be available", then.challengeIsUnavailable(challenge.briskWalk));
                        Then("long walk should not be available", then.challengeIsUnavailable(challenge.longWalk));
                        Then("meditation should not be available", then.challengeIsUnavailable(challenge.meditation));
                        When("I click back to the map", when.clickBackToMap, async () => {
                            Then("I should see the first world", then.worldIsVisible(0));
                        })
                    })
                })
                When("I click on the next level", when.pressOnLevel(2), async () => {
                    Then("I should see unlock at level 2 text", then.unlockAtLevelVisible(2));
                    When("I click 'got it'", when.clickOnGotIt, async () => {
                        Then("I should see the first world", then.worldIsVisible(0));
                    })
                })
                When("I click on the chest level", when.pressOnLevel(7), async () => {
                    Then("I should see unlock at level 7 text", then.unlockAtLevelVisible(7));
                })
            })
        })
    })

    ScenarioOnly("I can take a challenge and cancel it", scenario.setup, async () => {
        Given("I have logged in and passed the education screens", given.loginAndGoToStepsScreen, async () => {
            When("I press on the quests tab", null, async () => {
                When("I press on the first level", null, async () => {
                    ThenManual("I should see the challenge selection screen");
                    When("I press on the short stroll challenge", null, async () => {
                        ThenManual("I should see the short stroll challenge summary page");
                        When("I press on the take challenge button", null, async () => {
                            ThenManual("I should see the challenge progress screen for short stroll");
                            When("I press on the cancel challenge button", null, async () => {
                                ThenManual("I should see the exit challenge? Screen");
                                When("I press on the no way! button", null, async () => {
                                    ThenManual("I should see the challenge progress screen for short stroll");
                                })
                                When("I press on the exit button", null, async () => {
                                    ThenManual("I should see the quests screen");
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can access the correct challenges as a level 4 user without any challenges today", scenario.setup, () => {
        Given("I am a level 4 user who has not done any challenges today", null, () => {
            const user = USER_2;
            Given("I have logged in and passed the education screens", given.loginExistingUser(user), () => {
                When("I press on the quests tab", when.pressOnTab("quests"), async () => {
                    Then("I should see the first world", then.worldIsVisible(0));
                    When("I press on my current level 4", when.pressOnLevel(4), async () => {
                        Then("I should see the challenge screen", then.challengeScreenIsVisible);
                        Then("short stroll should be available", then.challengeIsAvailable(challenge.shortStroll));
                        Then("long walk should be available", then.challengeIsAvailable(challenge.longWalk));
                        Then("meditation should be available", then.challengeIsAvailable(challenge.meditation));
                        Then("brisk walk should not be available", then.challengeIsUnavailable(challenge.briskWalk));
                        When("I click back to the map", when.clickBackToMap, async () => {
                            Then("I should see the first world", then.worldIsVisible(0));
                        })
                    })
                })
                When("I click on the previous level", when.pressOnLevel(3), async () => {
                    ThenManual("I should see the level history for level 3");
                    When("I click 'back'", when.clickOnBack, async () => {
                        Then("I should see the first world", then.worldIsVisible(0));
                    })
                })
            })
        })
    })

});