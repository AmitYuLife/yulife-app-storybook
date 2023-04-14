import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework"
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_34,  CUSTOMER_34} from "@data"
import { NOTIF_CENTRE, VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids"

Feature("Notification centre", async () => {
  Scenario("I can access the notification centre", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", CUSTOMER_34, AUTH_34), async () => {
        Then("I should see 220 YuCoin in the top right hand corner", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
        Then("I can see the notification centre icon is visible", then.idVisible(NOTIF_CENTRE))
    })
    When("I click on the notification centre", when.tapID(NOTIF_CENTRE), async () => {
        Then("I can see I am on the notification centre modal", then.amOnNotificationModal)
        Then("I can see the empty state for the modal", then.notifCentreEmptyStateVisible)
    })
  })
})