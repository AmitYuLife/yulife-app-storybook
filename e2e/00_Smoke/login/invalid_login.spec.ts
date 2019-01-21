// tslint:disable
import { Feature, Given, Scenario, Then, ThenManual, When } from "@bdd";
import { reload } from "@navigation";
import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";

Feature("As a user I am told why I am unable to login", async () => {

    Scenario("I cannot login with the wrong password for my email address", reload, async () => {
        Given("I have entered a valid email address but an invalid password", given.enterInvalidCredentials, async () => {
            When("I press `log in`", when.tapOnLogin, async () => {
                Then("my email address should remain unchanged in the email field", then.emailUnchanged);
                Then("my password should remain unchanged in the password field", then.passwordUnchanged);
                Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
                Then("the login button should not be disabled", then.loginButtonIsActive);
            });
        });
    });

    Scenario("I can login with correct login details", reload, async () => {
        Given("I have entered a valid email address and valid password", null, async () => {
            When("I press `log in`", null, async () => {
                ThenManual("my email address should remain unchanged in the email field");
                ThenManual("my password should remain unchanged in the password field");
                ThenManual("an error message should tell me that the combination does not exist");
                ThenManual("the login button should not be disabled");
            });
        });
    });

});
