import { Feature, Scenario, Given, When, Then } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import * as when from "./_steps/when"
import * as data from "../_data";
import * as constants from "./_resources/constants"
import * as ids from "@ids"

Feature("I am able to use the yuscreen v5", async () => {
    Scenario("With the user toggle, I can change between YuScreen v4 and v5", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_138, data.AUTH_138), async () => {
            Then(`I should be on YuScreen V4 and see wellbeing only`, then.onYuscreenV4(data.CUSTOMER_138, "wellbeing only", "10", false));
        })
        When("I tap to see V5 of the YuScreen", when.tapText("v5"), async () => {
            Then("I shouldn't see the wellbeing product anymore", then.textNotVisible("Wellbeing Access"))
        })
        When("I swipe until I'm at the bottom of the screen", when.swipeFromText(constants.yuScreenBenefitsHeader, "up", "fast"), async () => {
            Then("I can see the feedback section", then.textVisible("Give us feedback"))
            Then("I can see the invite a friend section", then.inviteFriendSectionVisible)
        })
        When("I tap to invite a colleague", when.tapID(ids.REFERRAL_BUTTON(constants.inviteColleageButton)), async () => {
            Then("I am on the referral page", then.onInviteColleaguePage)
        })
    })
})
