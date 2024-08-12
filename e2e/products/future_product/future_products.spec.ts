import { Given, When, Then, Feature, Scenario, ScenarioOnly, WhenSkip } from "@yu-life/yulife-bdd-framework"
import * as scenario from "../_common/scenario"
import * as given from "../_common/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_FUTURE_PRODUCT, CPE_FUTURE_PRODUCT, CUSTOMER_FUTURE_PRODUCT } from "../_data"
import { ONBOARDING_SCREEN_V4, RIGHT_SIDE_IMAGE_SLOT, YUMOJI_DO_THIS_LATER, YUMOJI_ONBOARDING_BUTTON } from "@ids"
import { lifeInsuranceCompass } from "_utils/navigation/images/yuscreen_images"

Feature("I should be able to see my future product in the yuscreen", async () => {
    Scenario("As a user with a future product, I am able to see this ", scenario.start, () => {
        Given("I login", given.logInAndGoToTab("yu", CUSTOMER_FUTURE_PRODUCT, AUTH_FUTURE_PRODUCT), async () => {
            Then("I should be on the onboarding yuscreen v4", then.idVisible(ONBOARDING_SCREEN_V4))
        })
        When("I tap show me my power", when.tapID(YUMOJI_ONBOARDING_BUTTON), async () => {
            When("I tap 'I'll do this later'", when.tapID(YUMOJI_DO_THIS_LATER), async () => {
                Then("I should be on the yuscreen for this user", then.textVisible(`${CUSTOMER_FUTURE_PRODUCT.data.firstName} ${CUSTOMER_FUTURE_PRODUCT.data.lastName}`))
                Then("I should see the 10 yucoin power of my future product", then.textVisibleAtIndex('10', 0))
                Then("I should see the Life insurance product", then.textVisible('Life Insurance'))
            })
            // @flaky [fails to find the countdown id -- test passes locally]
            WhenSkip("I tap on the product", when.tapID(RIGHT_SIDE_IMAGE_SLOT(lifeInsuranceCompass)), async()=>{
                Then("I should be on the product page, and it should indicate my cover will start soon", then.onFutureProductScreen(CPE_FUTURE_PRODUCT))
            })
        })
    })
})