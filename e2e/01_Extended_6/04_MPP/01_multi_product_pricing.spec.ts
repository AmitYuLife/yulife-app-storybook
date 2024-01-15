import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as fixtures from "./_resources/fixtures"
import * as constants from "./_resources/constants"
import * as data from "@data"
import * as ids from "@ids";



Feature("The MPP changes are visible in the YuLife App", async () => {
    Scenario("Part 1: I can see the new deeper environment when a user has 5 products, with the new product slots, and the ordering set to the MPP ordering", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_123_MPP, data.AUTH_123), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I can see the slot for the YuLife Saas product as this is always first", then.correctYuScreenSlotVisible(fixtures.yulifeSaasProductSlot, true, false, 0, 0))
            Then("I can see the slot for the GCI", then.correctYuScreenSlotVisible(fixtures.gciProductSlot, true, true, 0, 0))
            Then("I can see the slot for the gHealth", then.correctYuScreenSlotVisible(fixtures.gHealthProductSlot, true, false, 0, 1))
            Then("I can see the slot for the RGL", then.correctYuScreenSlotVisible(fixtures.rglProductSlot, false, true, 0, 0))
            Then("I can't see the dental insurance", then.textNotVisible(fixtures.gDentProductSlot.name))
            Then("I can see an option to see all protection", then.idVisible(ids.SLOT_TITLE("See all protection")))
        })
        When("I click on the Saas product", when.tapText(fixtures.yulifeSaasProductSlot.name), async () => {
            Then("I stay on the YuScreen", then.textVisible(`${data.CUSTOMER_123_MPP.data.firstName} ${data.CUSTOMER_123_MPP.data.lastName}`))
        })
        When("I click to see all protection", when.tapID(ids.SLOT_TITLE("See all protection")), async () => {
            Then("I appear on the deeper environment page", then.deeperProductSlotEnviornmentVisible(10))
            Then("I can see the PLI product as by default I go to the Available page when an item is available", then.deeperEnvironmentSlotVisible(fixtures.pliDeeperEnvironmentSlot, false, true, 0, 20))
        })
        When("I tap to see the owned products", when.tapText(constants.ownedPill), async () => {
            Then("I can see the YuLife Saas product at the top as that's always first", then.deeperEnvironmentSlotVisible(fixtures.yulifeDeeperEnvironmentSlot, true, true, 0))
            Then("I can see the GCI product", then.deeperEnvironmentSlotVisible(fixtures.gciDeeperEnvironmentSlot, true, true, 0, 10))
            Then("I can see the GHealth product", then.deeperEnvironmentSlotVisible(fixtures.gHealthDeeperEnvironmentSlot, true, true, 0))
        })
        When("I tap YuLife", when.tapText(fixtures.yulifeDeeperEnvironmentSlot.name), async () => {
            Then("I am still on the page and still see the product", then.deeperEnvironmentSlotVisible(fixtures.yulifeDeeperEnvironmentSlot, true, true, 0))
        })
        When("I scroll to the bottom", when.scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, fixtures.gDentDeeperEnvironmentSlot.text, "down"), async () => {
            Then("I can see the RGL product", then.deeperEnvironmentSlotVisible(fixtures.rglDeeperEnvironmentSlot, true, false, 0, 20))
            Then("I can see the Dental product", then.deeperEnvironmentSlotVisible(fixtures.gDentDeeperEnvironmentSlot, true, true, 0))
        })
        
    })

    Scenario("Part 2: I can see the new deeper environment when a user has 5 products, with the new product slots, and the ordering set to the MPP ordering", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_124_MPP, data.AUTH_124), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I can see the slot for the YuLife Saas product as this is always first", then.correctYuScreenSlotVisible(fixtures.yulifeSaasProductSlot, true, false, 0, 0))
            Then("I can see the slot for the GCI", then.correctYuScreenSlotVisible(fixtures.gciProductSlot, true, true, 0, 0))
            Then("I can see the slot for the PLI now as it's taken up", then.correctYuScreenSlotVisible(fixtures.pliProductSlot, true, true, 0, 1))
            Then("I can see the slot for the gHealth", then.correctYuScreenSlotVisible(fixtures.gHealthProductSlot, true, false, 0, 1))
            Then("I can't see the dental insurance", then.textNotVisible(fixtures.gDentProductSlot.name))
            Then("I can see an option to see all protection", then.idVisible(ids.SLOT_TITLE("See all protection")))
        })
        // add in test for company toggle not showing product benefit
        When("I view the critical illness product", when.tapText("Critical Illness"), async () => {
            Then("I should not see the product benefit information due to the company toggle not being provided", then.textNotVisible(`9x ${constants.criticalIllnessBenefitHeader}`))
        })
        When("I close the product screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
            When("I click on the Saas product", when.tapText(fixtures.yulifeSaasProductSlot.name), async () => {
                Then("I stay on the YuScreen", then.textVisible(`${data.CUSTOMER_124_MPP.data.firstName} ${data.CUSTOMER_124_MPP.data.lastName}`))
            })
        })
        When("I click to see all protection", when.tapID(ids.SLOT_TITLE("See all protection")), async () => {
            Then("I appear on the deeper environment page", then.deeperProductSlotEnviornmentVisible(10))
            Then("I can see the YuLife Saas product at the top as that's always first", then.deeperEnvironmentSlotVisible(fixtures.yulifeDeeperEnvironmentSlot, true, true, 0))
            Then("I can see the GCI product", then.deeperEnvironmentSlotVisible(fixtures.gciDeeperEnvironmentSlot, true, true, 0, 10))
            Then("I can see the PLI product", then.deeperEnvironmentSlotVisible(fixtures.pliDeeperEnvironmentSlot, true, true, 1, 6))
        })
        When("I scroll to the bottom", when.scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, fixtures.gDentDeeperEnvironmentSlot.text, "down"), async () => {
            Then("I can see the GHealth product", then.deeperEnvironmentSlotVisible(fixtures.gHealthDeeperEnvironmentSlot, true, true, 0))
            Then("I can see the RGL product", then.deeperEnvironmentSlotVisible(fixtures.rglDeeperEnvironmentSlot, true, false, 0, 20))
            Then("I can see the Dental product", then.deeperEnvironmentSlotVisible(fixtures.gDentDeeperEnvironmentSlot, true, true, 0))
        })
        When("I scroll to the top", when.scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.deeperEnvironmentHeader, "up"), async () => {
            When("I tap to see the Available products", when.tapText(constants.availablePill), async () => {
                Then("I can see the no products page", then.noProductsDeeperEnvironmentVisible)
            })
        })
        
    })

})