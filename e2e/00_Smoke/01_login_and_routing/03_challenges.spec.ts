// tslint:disable
// TODO: Move this to a different smoke folder
import { Feature, Given, Scenario, Then, ThenManual, When } from "@bdd";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";

Feature("As a user I can take a challenge", async () => {

    Scenario("I can take a challenge and cancel it", scenario.setup, async () => {
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

});