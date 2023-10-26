import { Given, When, Then, Feature, Scenario, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework"
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_126, AUTH_LEAVER, CUSTOMER_126_LEAVER_WELLBEING, CUSTOMER_LEAVER } from "@data"   
import * as ids from "@ids"
import { leaverDentalProduct, leaverLifeInsuranceProduct } from "./_resources/fixtures"

Feature("As a business leaver I should still have app access", async () => {
    Scenario("As a business leaver with no persional products, I should still have app access", scenario.start, () => {
        Given("I trigger the free product worker", given.triggerFreeProduct, async()=>{
            When("I login", when.logInAndGoToTab("yu", CUSTOMER_LEAVER, AUTH_LEAVER), async () => {
                Then("I should be on the onboarding yuscreen v4", then.idVisible(ids.ONBOARDING_SCREEN_V4))
            })
            When("I tap show me my power", when.tapText('Check out my power'), async()=>{
                When("I'll do this later", when.tapText("I'll do this later"), async () => {
                    Then("I should be on the yuscreen for this user", then.textVisible(`${CUSTOMER_LEAVER.data.firstName} ${CUSTOMER_LEAVER.data.lastName}`))
                    Then("I should see the 1 yucoin power, instead of 10", then.textVisibleAtIndex('1', 0))
                    Then("I should see the Keepsake product", then.textVisible('Keepsake'))
                })
            })
            When("I go to the leaderboard", when.tapID(ids.NAV_BAR('leaderboard')), async()=>{
                Then("I should see the users name", then.idVisible(ids.LEADERBOARD_NAME('Bus Leaf', "0", 1)))
                Then("I should see this is the public leaderboard", then.idVisible(ids.LEADERBOARD_TITLE('Public')))
            })
        })
    })

    Scenario("As a business leaver with wellbeing, I should not see the wellbeing hub but can see the choice to buy dental and life insurance", scenario.start, () => {
        Given("I trigger the free product worker", given.triggerFreeProduct, async()=>{
            When("I login", when.logInAndGoToTab("yu", CUSTOMER_126_LEAVER_WELLBEING, AUTH_126, true, "United Kingdom", false), async () => {
                Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(10000)))
                Then("I cannot see the wellbeing hub as I am a leaver", then.wellbeingHubVisible(false))
                Then("I can see the personal life insurance is available", then.leaverProductSlotVisible(leaverLifeInsuranceProduct, 0))
                Then("I can see the personal dental insurance is available", then.leaverProductSlotVisible(leaverDentalProduct, 1))
            })
            
        })
    })
})