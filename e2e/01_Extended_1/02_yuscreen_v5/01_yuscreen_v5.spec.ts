import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import * as when from "./_steps/when"
import * as data from "../_data";

Feature("I am able to use the yuscreen v5", async () => {
    Scenario("With the user toggle, I can change between YuScreen v4 and v5", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_138, data.AUTH_138), async () => {
            Then(`I should be on YuScreen V4 and see wellbeing only`, then.onYuscreenV4(data.CUSTOMER_138, "wellbeing only", "10", false));
        })
        When("I tap to see V5 of the YuScreen", when.tapText("v5a"), async () => {
            Then("I shouldn't see the wellbeing product anymore", then.textNotVisible("Wellbeing Access"))
        })
    })
})
