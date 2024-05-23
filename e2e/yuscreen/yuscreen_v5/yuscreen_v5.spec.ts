import { Feature, Scenario, Given, When, Then, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import * as when from "./_steps/when"
import * as data from "../_data";
import * as constants from "./_resources/constants"
import * as ids from "@ids"
import { beamWellbeingItem, metLifeGPWellbeingItem, yuMatterWellbeingItem } from "./_resources/fixtures";

Feature("I am able to use the yuscreen v5", async () => {
    Scenario("User can log in, User should see everything on the V5 YuScreen as nothing has been toggled off", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_138, data.AUTH_138), async () => {
            Then(`I should be on YuScreen V4 and see wellbeing only`, then.onYuscreenV4(data.CUSTOMER_138, "wellbeing only", "10", false));
        })
        When("I tap to see V5 of the YuScreen", when.tapText("v5"), async () => {
            Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Big Daddy", "Yuniversal", "I"))
        })
        When("I tap on my yumoji", when.tapID(ids.YUMOJI_YUSCREEN_V5), async () => {
            Then("I should be on the edit Yumoji screen", then.textVisible("Pick a body type"))
        })
        When("I tap to close", when.tapID(ids.BUTTON_CLOSE_HEADER("yulife")), async () => {
            When("I swipe to see the perks", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_WELLBEING_SECTION_HEADER, "down"), async () => {
                Then("I can see the Wellbeing section is correct", then.yuScreenV5WellbeingSectionVisible([metLifeGPWellbeingItem, yuMatterWellbeingItem, beamWellbeingItem]))
            })
        })
        When("I tap the YuMatter tab", when.tapText(yuMatterWellbeingItem.title), async () => {
            Then("I should be on the YuMatter screen", then.textVisible("How does it work?"))
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap the Beam tab", when.tapText(beamWellbeingItem.title), async () => {
                Then("I should be on the Beam screen", then.textVisible("Donate to Beam"))
            })
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap to see all benefits", when.tapText("See all benefits"), async () => {
                When("I tap Confirm selection", when.tapText("Confirm selection"), async () => {
                    Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN, 2000))
                    Then("I should see items in the expected order", then.wellbeingHubCardsCorrectOrder([metLifeGPWellbeingItem, yuMatterWellbeingItem, beamWellbeingItem]))
                })
            })
        })
        When("I tap to go back to YuScreen", when.tapID(ids.BACK_BUTTON), async () => {
            When("I swipe until I'm at the bottom of the screen", when.swipeFromText("See all benefits", "up", "fast"), async () => {
                Then("I can't see the new header section as it's collapsed", then.yuScreenV5HeaderVisible(true, "Big Daddy", "Yuniversal", "I"))
                Then("I can see the feedback section", then.textVisible("Give us feedback"))
                Then("I can see the invite a friend section", then.inviteFriendSectionVisible)
            })
            When("I tap to invite a colleague", when.tapID(ids.REFERRAL_BUTTON(constants.inviteColleageButton)), async () => {
                Then("I am on the referral page", then.onInviteColleaguePage)
            })
        })
    })

})
