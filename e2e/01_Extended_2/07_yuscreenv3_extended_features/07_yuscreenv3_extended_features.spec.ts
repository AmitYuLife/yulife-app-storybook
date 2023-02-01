import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_82, AUTH_82 } from "@data";
import { BACKGROUND_COLOUR_PRODUCT } from "@ids";



Feature("I am able to use the yuscreens extended features", async () => {
    Scenario("If my CPE start date is in the future, I should see the pending status on the YuScreen", scenario.start, async()=>{
        Given("I login", given.loginToYuScreen(false, CUSTOMER_82, AUTH_82), async () => {
            When("I complete the yuscreen intro", when.completeYuScreenIntro, async()=>{
                Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_82))
                Then("I should see the grey coloured product which is assigned to me with a future start date", then.idVisibleAtIndex(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"), 0))
            })
        })
    })
})