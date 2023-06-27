import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when"
import * as then from "../_steps/then"
import { CUSTOMER_52 } from "@data";
import * as ids from "@ids";


export const INSPECT_USER = (fullName: string, world: string, customer: typeof CUSTOMER_52) => async () => {
    When("I click on user's name", when.tapText(fullName), async () => {
        Then("I should be on the Inspect screen", then.idVisible(ids.INSPECT_SCREEN))
        Then("I should see's name, level and world", then.personalDataVisible(fullName, world))
    })
    When("I scroll down to the challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 1), async () => {
        Then("I should see the Average mindfulness section", then.textVisible("Average mindfulness"))
    })
    When("I close inspect view", when.tapID(ids.SCREEN_CLOSE), async () => {
        Then("I should be back on the leaderboard LB4", then.textVisibleAtIndex(customer.data.fullName, 0))
    })
}
