// tslint:disable
import { Feature, Given, Scenario, Then, ThenManual, When } from "@bdd";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import { ScenarioOnly } from '../../_utils/bdd/index';

Feature("As a user I can get past the login screen", async () => {

    Scenario("I cannot login with the wrong password for my email address", scenario.setup, async () => {
        Given("I have entered a valid email address but an invalid password", given.enterInvalidCredentials, async () => {
            When("I press `log in`", when.tapOnLogin, async () => {
                Then("my email address should remain unchanged in the email field", then.emailUnchanged);
                Then("my password should remain unchanged in the password field", then.passwordUnchanged);
                Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
                Then("the login button should not be disabled", then.loginButtonIsActive);
            });
        });
    });

    Scenario("I can login with correct login details and be prompted with a health screen", scenario.setup, async () => {
        Given("I have entered a valid email address and valid password", given.enterValidCredentials, async () => {
            When("I press `log in`", when.tapOnLogin, async () => {
                Then("I should not longer be on the login screen", then.notOnLoginScreen);
                Then("I should see a prompt to connect to the health app", then.healthAppPromptVisible);
                Then("I should see a link to the privacy notice", then.privacyLinkVisible);
            });
        });
    });

    Scenario("I can login with correct login details and make it past the intro screens", scenario.setup, async () => {
        Given("I have authorised fitkit on my device", when.authoriseFitKit, async () => {
            Given("I have entered a valid email address and valid password", given.enterValidCredentials, async () => {
                When("I press `log in`", when.tapOnLogin, async () => {
                    Then("I should see the sign up reward screen", then.rewardScreenVisible);
                    Then("I should see a visual indicator to say i've been awarded 200 coins", then.given200coins);
                    When("I press next on on each of the screens (5 times)", [when.pressNext5Times, when.authoriseFitKit], async () => {
                        Then("I land on the daily steps screen", then.dailyStepsScreenVisible);
                        Then("The quests tab should be active", then.tabIsActive("yucoin"));
                        Then("I should see 200 coins in the top right hand corner", then.givenCoinsTopRight(200));
                        When("The I register 1000 steps walked since last opening", when.sendSteps(1000), async () => {
                            Then("I should see 1000 steps on the screen", then.stepsMeasured(1000));
                        });
                    })
                });
            });
        })
    });

});
