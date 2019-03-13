// tslint:disable
import { Feature, Given, Scenario, Then, ThenManual, When, ScenarioOnly } from "@bdd";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";

Feature("As a user I am told why I am unable to login", async () => {

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

    Scenario("I can login with correct login details", scenario.setup, async () => {
        Given("I have entered a valid email address and valid password", given.enterValidCredentials, async () => {
            When("I press `log in`", when.tapOnLogin, async () => {
                Then("I should not longer be on the login screen", then.notOnLoginScreen);
                Then("I should see a prompt to connect to the health app", then.healthAppPromptVisible);
                Then("I should see a link to the privacy notice", then.privacyLinkVisible);
                ThenManual("I can still assert something manually!");
            });
        });
    });

});
