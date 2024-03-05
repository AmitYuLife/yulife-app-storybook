import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import * as when from "./_steps/when"
import * as data from "@data"
import * as helper from "./_resources/helpers"
import { CPED_1_GHI_FUTURE, CPED_1_GHI_STARTED } from "_utils/data/postgres/customer_product_entity_dependant";
import { yuMojiBuilder } from "./_resources/fixture";



Feature("I am able to see GHI in App", async () => {
    Scenario("As a YuLifer with GHI product with start date in future i should be able to see prduct details and dependent", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_GHI, data.AUTH_GHI), async () => {
            Then(`I should see the onboarding Yuscreen with GHI yet to start`, then.onboardingYuscreenV4("GHI_FUTURE", "10"))
        })
        When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
            Then(`I should see the yumoji builder`, then.textVisible(yuMojiBuilder));
          })
        When("I swipe down the screen", when.swipeFromText("Create your Yumoji to step into the Yuniverse", "up", "slow"), async () => {
            When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
                Then(`I should be on YuScreen V4 and see GHI yet to start`, then.onYuscreenV4(data.CUSTOMER_GHI, "GHI_FUTURE", "10"));
            })
        })
        When(`I tap Health Insurance`, when.tapText("Health Insurance"), async () => {
            Then("I should see correct product details", then.GHIProductInfo(data.CPE_GHI_FUTURE, CPED_1_GHI_FUTURE, "10"));
        });
    })

    Scenario("As a YuLifer with GHI already started product i should be able to see prduct details and dependent", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_GHI_STARTED, data.AUTH_GHI_STARTED), async () => {
            Then(`I should see the onboarding Yuscreen with GHI already started`, then.onboardingYuscreenV4("GHI_STARTED", "10"))
        })
        When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
            Then(`I should see the yumoji builder`, then.textVisible(yuMojiBuilder));
          })
        When("I swipe down the screen", when.swipeFromText("Create your Yumoji to step into the Yuniverse", "up", "slow"), async () => {
            When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
                Then(`I should be on YuScreen V4 and see GHI already started`, then.onYuscreenV4(data.CUSTOMER_GHI_STARTED, "GHI_STARTED", "10"));
            })
        })
        When(`I tap Health Insurance`, when.tapText("Health Insurance"), async () => {
            Then("I should see correct product details", then.GHIProductInfo(data.CPE_GHI_STARTED, CPED_1_GHI_STARTED, "10"));
        });
    })
})