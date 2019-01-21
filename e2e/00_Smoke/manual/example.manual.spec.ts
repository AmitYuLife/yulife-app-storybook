import { Feature, Given, Scenario, Then, ThenManual, When } from "@bdd";

Feature("As a user I want to do something that requires manual testing", async () => {

    Scenario("Steps are recorded correctly on a 5 minute walk", null, async () => {
        Given("I have started a challege for a five minute walk", null, async () => {
            When("I go for a walk and complete a challenge and hit the number of steps", null, async () => {
                ThenManual("I am rewarded with 4 yucoin");
                ThenManual("other challenges are blocked out with a countdown timer");
            });
        });
    });

});
