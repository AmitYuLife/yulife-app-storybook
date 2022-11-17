import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when"
import * as then from "./then"
import { CUSTOMER_55, CUSTOMER_54, CUSTOMER_56, CUSTOMER_57, CUSTOMER_58, USER_54_LEADERBOARD, CUSTOMER_52 } from "@data";
import { INSPECT_SCREEN, BACK_BUTTON, LEADERBOARD_TITLE, BUTTON_CLOSE_HEADER, BUTTON_CLOSE, SCREEN_CLOSE, LEADERBOARD_SCROLL_LIST } from "@ids";


export const INSPECT_USER = (fullName: string, world: string, customer: typeof CUSTOMER_52) => async () => {
    When("I click on user's name", when.tapText(fullName), async () => {
        Then("I should be on the Inspect screen", then.idVisible(INSPECT_SCREEN))
        Then("I should see's name, level and world", then.personalDataVisible(fullName, world))
    })
    When("I scroll down to the challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 1), async () => {
        Then("I should see the Average mindfulness section", then.textVisible("Average mindfulness"))
    })
    When("I close inspect view", when.tapID(SCREEN_CLOSE), async () => {
        Then("I should be back on the leaderboard LB4", then.textVisibleAtIndex(customer.data.fullName, 0))
    })
}
