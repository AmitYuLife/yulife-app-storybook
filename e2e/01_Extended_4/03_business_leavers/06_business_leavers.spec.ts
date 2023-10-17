import { Given, When, Then, Feature, Scenario, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework"
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_LEAVER, CUSTOMER_LEAVER } from "@data"
import { LEADERBOARD_NAME, NAV_BAR, ONBOARDING_SCREEN_V4 } from "@ids"
import { LEADERBOARD_TITLE } from "@ids"

Feature("As a business leaver I should still have app access", async () => {
    Scenario("As a business leaver with no persional products, I should still have app access", scenario.start, () => {
        Given("I trigger the free product worker", given.triggerFreeProduct, async()=>{
            When("I login", when.logInAndGoToTab("yu", CUSTOMER_LEAVER, AUTH_LEAVER), async () => {
                Then("I should be on the onboarding yuscreen v4", then.idVisible(ONBOARDING_SCREEN_V4))
            })
            When("I tap show me my power", when.tapText('Check out my power'), async()=>{
                When("I'll do this later", when.tapText("I'll do this later"), async () => {
                    Then("I should be on the yuscreen for this user", then.textVisible(`${CUSTOMER_LEAVER.data.firstName} ${CUSTOMER_LEAVER.data.lastName}`))
                    Then("I should see the 1 yucoin power, instead of 10", then.textVisibleAtIndex('1', 0))
                    Then("I should see the Keepsake product", then.textVisible('Keepsake'))
                })
            })
            When("I go to the leaderboard", when.tapID(NAV_BAR('leaderboard')), async()=>{
                Then("I should see the users name", then.idVisible(LEADERBOARD_NAME('Bus Leaf', "0", 1)))
                Then("I should see this is the public leaderboard", then.idVisible(LEADERBOARD_TITLE('Public')))
            })
        })
    })
})