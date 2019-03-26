// tslint:disable
import { Feature, Given, Scenario, Then, ThenManual, When } from "@bdd";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";

Feature("As a user I can navigate through member routes correctly", async () => {

    Scenario("I can view the core screens of the app without it crashing", scenario.setup, async () => {
        Given("I have logged in and passed the education screens", given.loginAndGoToStepsScreen, async () => {
            When("I press on the quests tab", when.pressOnTab("quests"), async () => {
                Then("I should see the first world", then.worldIsVisible(1));
                Then("The quests tab should be active", then.tabIsActive("quests"))
                Then("The yucoin tab should be inactive", then.tabIsInActive("yucoin"))
                Then("The rewards tab should be inactive", then.tabIsInActive("rewards"))
            })
            When("I press on the yucoin tab", when.pressOnTab("yucoin"), async () => {
                Then("The yucoin tab should be active", then.tabIsActive("yucoin"))
                Then("The quests tab should be inactive", then.tabIsInActive("quests"))
                Then("The rewards tab should be inactive", then.tabIsInActive("rewards"))
            })
            When("I press on the rewards tab", when.pressOnTab("rewards"), async () => {
                Then("The yucoin tab should be inactive", then.tabIsInActive("yucoin"))
                Then("The quests tab should be inactive", then.tabIsInActive("quests"))
                Then("The rewards tab should be active", then.tabIsActive("rewards"));
                Then("I should see a list of possible rewards", then.rewardsScreenVisible);
            })
            When("I press on the top left menu", when.pressOnMenu, async () => {
                Then("I should see the menu", then.menuIsVisible);
                When("I press on activity history", when.pressOnActivityHistory, async () => {
                    ThenManual("I should see the activity history screen");
                })
            })
        })
    });

    Scenario("I can view the menu screens of the app without it crashing", scenario.setup, async () => {
        Given("I have logged in and passed the education screens", given.loginAndGoToStepsScreen, async () => {
            When("I press on the quests tab", null, async () => {
                ThenManual("I should see the first world");
                ThenManual("The quests tab should be active");
            });
            When("I press on the rewards tab", null, async () => {
                ThenManual("I should see a list of possible rewards");
                ThenManual("The rewards tab should be active");
            });
            When("I press on the yucoin tab", null, async () => {
                ThenManual("I should see the passive steps screen with my total yucoin for the day");
                ThenManual("The yucoin tab should be active");
                When("I press on the yucoin image", null, async () => {
                    ThenManual("I should see a screen explaining today's activity in the app");
                });
            });
            When("I press on the top left menu", null, async () => {
                ThenManual("I should see the menu");
                When("I press on activity history", null, async () => {
                    ThenManual("I should see the activity history screen");
                });
                When("I press on the leaderboard", null, async () => {
                    ThenManual("I should see the company leaderboard");
                });
                When("I press on the settings", null, async () => {
                    ThenManual("I should see the settings");
                });
                When("I press on play intro", null, async () => {
                    ThenManual("I should see the intro play");
                    When("I press next on each of the screens 5 times", null, async () => {
                        ThenManual("I should be returned to the yucoin screen");
                    });
                });
                When("I press on chat", null, async () => {
                    ThenManual("I should see the intercom window appear");
                });
                When("I press on log out", null, async () => {
                    ThenManual("I should be logged out of the app");
                    ThenManual("I should see the login screen");
                });
            });
        });
    });

});