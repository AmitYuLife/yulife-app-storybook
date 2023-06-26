import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import { CUSTOMER_GHI, AUTH_GHI, CUSTOMER_GHI_STARTED, AUTH_GHI_STARTED, CPE_GHI_FUTURE, CPE_GHI_STARTED } from "@data";
import * as helper from "./_steps/helpers"
import { CPED_1_GHI_FUTURE, CPED_1_GHI_STARTED } from "_utils/data/postgres/customer_product_entity_dependant";



Feature("I am able to see GHI in App", async () => {
    Scenario("As a YuLifer with GHI product with start date in future i should be able to see prduct details and dependent", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_GHI, AUTH_GHI), async () => {
            helper.ONBOARDING_YUSCREEN("GHI_FUTURE", "10")
            helper.YUSCREEN_V4(CUSTOMER_GHI, "GHI_FUTURE", "10")
            helper.GROUP_HEALTH_PRODUCT_VIEW(CPE_GHI_FUTURE, CPED_1_GHI_FUTURE, "10")
        })
    })
    Scenario("As a YuLifer with GHI already started product i should be able to see prduct details and dependent", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_GHI_STARTED, AUTH_GHI_STARTED), async () => {
            helper.ONBOARDING_YUSCREEN("GHI_STARTED", "10")
            helper.YUSCREEN_V4(CUSTOMER_GHI_STARTED, "GHI_STARTED", "10")
            helper.GROUP_HEALTH_PRODUCT_VIEW(CPE_GHI_STARTED, CPED_1_GHI_STARTED, "10")
        })
    })
})