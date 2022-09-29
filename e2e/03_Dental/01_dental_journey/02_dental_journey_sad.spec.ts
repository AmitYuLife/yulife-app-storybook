import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as helper from "./_steps/helpers"
import { CUSTOMER_DENTAL_2, AUTH_DENTAL_2 } from "@data";


Feature("DENTAL SAD", async()=>{
    Scenario("I should see a notification that my policy is Cancelled", scenario.start, async()=>{
        Given("I login as a user with Bupa Dental product approved but Cancelled", given.loginToYuScreen(false, CUSTOMER_DENTAL_2, AUTH_DENTAL_2), async()=>{
            Then("I should be on the yuscreen", then.onYuscreenV3(CUSTOMER_DENTAL_2))
            When("I create the default yumoji", when.createDefaultYumoji, async () => {
                When("I tap at YuCoin Power 2", when.tapTextAtIndex("2", 0), async () => {
                    Then("I should see canceled notification", then.cancelledNotificationVisible)
                    Then("I should see correct product details", then.dentalProductInfo("Common", "0321"))
                })
                helper.PACKAGE_COVERING("Common")
                helper.BUPA_CLAIM()
                helper.FAQ()
                helper.PAYMENT_HISTORY("£12.99", "Failed")
            })
        })
    })
})