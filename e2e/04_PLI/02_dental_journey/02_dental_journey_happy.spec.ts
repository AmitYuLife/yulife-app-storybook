import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as helper from "./_steps/helpers"
import { CUSTOMER_37, AUTH_37 } from "@data";
import { TEXT_TEMPLATE } from "@ids";

Feature("DENTAL HAPPY", async()=>{
    Scenario("Dental Happy", scenario.start, async()=>{
        Given("I login as a user with Bupa Dental enabled", given.loginToYuScreen(true, CUSTOMER_37, AUTH_37), async()=>{
            Then("I should be on the yuscreen", then.onYuscreenV3(CUSTOMER_37))
            When("I create the default yumoji", when.createDefaultYumoji, async () => {
                Then("I should see the Dental tooltip", then.dentalTooltipVisible)
                When("I tap off the tooltip", when.tapText(`${CUSTOMER_37.data.firstName} ${CUSTOMER_37.data.lastName}`), async () => {
                    Then("I should be back on the YuScreen", then.onYuscreenV3(CUSTOMER_37))
                })
            })
            When("I tap the gloves", when.tapUnlockableItem("gloves"), async () => {
                Then("I should be on the first Dental onboarding screen", then.idVisible(TEXT_TEMPLATE("Dental Insurance")));
                helper.ONBOARDING()
                helper.INFORMATION()
                helper.PLANS()
                helper.PACKAGE_DETAILS("Epic")
                helper.CHECKOUT()
            })
        })
    })
})