import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import * as when from "./_steps/when"
import * as data from "../_data";
import * as constants from "./_resources/constants"
import * as ids from "@ids"
import { beamWellbeingItem, metLifeGPWellbeingItem, yuMatterWellbeingItem } from "./_resources/fixtures";
import { yuscreenImages } from "@images";

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
                Then("I can see the See all benefits button, as my location has not been set yet", then.textVisible("See all benefits"))
                Then("I should not see the MetLife GP24 perk, as I need to set my location first", then.textNotVisible("MetLife GP24"))
                Then("I should not see the YuMatter perk, as I need to set my location first", then.textNotVisible("YuMatter"))
            })
        })
        When("I tap See all benefits", when.tapText("See all benefits"), async()=>{
            Then("I should be on the wellbeing hub, and see the location welcome modal", then.wellbeingHubLocationModalVisible)
        })
        When("I tap confirm selection", when.tapText("Confirm selection"), async()=>{
            Then("I should see YuMatter", then.textVisible("YuMatter"))
        })
        When("I go back", when.tapID(ids.BACK_BUTTON), async()=>{
            Then("I can see the Wellbeing section is correct", then.yuScreenV5WellbeingSectionVisible([metLifeGPWellbeingItem, yuMatterWellbeingItem, beamWellbeingItem], 4000))
        })
        When("I tap the YuMatter tab", when.tapText(yuMatterWellbeingItem.title), async () => {
            Then("I should be on the YuMatter screen", then.textVisible("How does it work?"))
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap the Beam tab", when.tapText(beamWellbeingItem.title), async () => {
                Then("I should be on the Beam screen", then.textVisible("Donate to Beam"))
            })
        })
        When("I tap to go back to Wellbeing Hub section of the yuscreen", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap to see all benefits", when.tapText("See all benefits"), async () => {
                Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN, 2000))
                Then("I should see items in the expected order", then.wellbeingHubCardsCorrectOrder([metLifeGPWellbeingItem, yuMatterWellbeingItem, beamWellbeingItem]))
            })
        })
        When("I tap to go back to YuScreen", when.tapID(ids.BACK_BUTTON), async () => {
            When("I swipe until I'm at the bottom of the screen", when.swipeFromText("See all benefits", "up", "fast"), async () => {
                Then("I can see the new header section in its semi collapsed state", then.yuScreenV5HeaderVisible(true, "Big Daddy", "Yuniversal", "I"))
                Then("I can see the feedback section", then.textVisible("Give us feedback"))
                Then("I can see the invite a friend section", then.inviteFriendSectionVisible)
            })
            When("I tap to invite a colleague", when.tapID(ids.REFERRAL_BUTTON(constants.inviteColleageButton)), async () => {
                Then("I am on the referral page", then.onInviteColleaguePage)
            })
        })
    })
    
    Scenario("I can see and complete maximise yu nudges", scenario.start, async()=>{
        Given("I login as a user", given.loginToYuscreenV5(data.CUSTOMER_MAXIMISE_YU, data.AUTH_MAXIMISE_YU), async () => {
            Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Maxi Mise", "Desert", "124"))
            Then("I should see the challenge nudge", then.challengeNudgeVisible(1, 180))
            Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(130, 180))
        })
        When("I click on the YuCoin I have earned today", when.tapID(ids.MAXIMISE_TODAYS_EARNINGS(130, 180)), async()=>{
            Then("I should be on the Today's earnings screen", then.textVisible("Today’s Earnings"))
            Then("I should see the 70 YuCoin I have earned today", then.textVisible("130 YuCoin"))
        })
        When("I go back", when.tapID(ids.BACK_BUTTON), async()=>{
            Then("I should be on yuscreen v5", then.yuScreenV5HeaderVisible(false, "Maxi Mise", "Desert", "124"))
            Then("I should see the challenge nudge", then.challengeNudgeVisible(1, 180))
            Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(130, 180))
        })
        When("I tap the challenge nudge image", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.calendarIcon)), async()=>{
            Then("I should be on the quest map", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(124)))
        })
        When("I tap on level 124", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(123)), async()=>{
            When("I complete a short stroll challenge", when.completeShortStroll(310, 40000), async()=>{
                When("I tap collect", when.tapText("Collect"), async()=>{
                    When("I tap done", when.tapText("Done"), async()=>{
                        When("I go back the yuscreen", when.tapID(ids.NAV_BAR("yu")), async()=>{
                        Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Maxi Mise", "Desert", "124"))
                        Then("I should see the updated YuCoin earned of 140", then.maximiseYucoinVisible(140, 180))
                        Then("I should see the walking nudge", then.walkingNudgeVisible("12,000", 60))
                        })
                    })
                })
            })
        })
        When("I send 4000 steps and reload the yuscreen tab", when.sendPassiveStepsAndReloadToTab(15000), async()=>{
            Then("I should see the meditation nudge", then.meditationNudeVisible())
            Then("I should see the updated YuCoin earned of 190/180", then.maximiseYucoinVisible(190, 180))
        })
        When("I send 45 mindful minutes and reload the yuscreen tab", when.sendPassiveMindulnessAndReloadToTab(2700), async()=>{
            Then("I should see the cycling nudge", then.cyclingNudgeVisible())
            Then("I should see the updated YuCoin earned of 250/180", then.maximiseYucoinVisible(250, 180))
        })
        When("I send 10km of cycling and reload the yuscreen tab", when.sendPassiveCyclingAndReloadToTab(10000), async()=>{
            Then("I should see the completed challenge nudge icon", then.completedChallengeNudgeVisible(3, 180))
            Then("I should see the updated YuCoin earned of 310/180", then.maximiseYucoinVisible(310, 180))
        })
        When("I swipe left on the completed challenge nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.calendarIcon), "left", "fast"), async()=>{
            Then("I should see the done steps nudge icon", then.completedWalkingNudgeVisible())
        })
        When("I swipe left on the completed steps nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.stepIcon), "left", "fast"), async()=>{
            Then("I should see the done meditation nudge icon", then.completedMeditationNudeVisible())
        })
        When("I swipe left on the completed meditation nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.lotusIcon), "left", "fast"), async()=>{
            Then("I should see the done cycling nudge icon", then.completedCyclingNudgeVisible())
        })
    })
})
