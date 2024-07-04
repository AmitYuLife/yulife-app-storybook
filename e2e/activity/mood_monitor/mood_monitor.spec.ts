import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import { BACK_BUTTON, BUTTON_CLOSE, BUTTON_CLOSE_HEADER, CONTENT_MIDDLE_ITEM_IMAGE, NAV_BAR, NUDGE_ITEM_IMAGE, SCREEN_CLOSE, VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids";
import { moodMonitorContent, moodMonitorHappy, USER_8_MOOD_MONITOR_ANSWERS, dayQuestion, feelingQuestion, moodMonitorFinalScreen, moodMonitorIntro, restedQuestion, todaysCheckInsCopy } from "./_resources/constants";
import moment from "moment";
import { yuscreenImages } from "@images";

Feature("Mood Monitor", async () => {
    Scenario("I complete the mood monitor", scenario.start, () => {
        Given("I login as a user with the mood monitor enabled ", given.logInAndGoToTab("yucoin", data.CUSTOMER_2, data.AUTH_2), async () => {
            When("I go to the today's earnings screen", when.tapText("0 steps"), async () => {
                Then("I see the correct yucoin earned today so far", then.textVisible("200 YuCoin"))
            })
        })
        When("I swipe down the screen", when.swipeFromText("Daily core activities", "up", "fast"), async () => {
            Then("I should see 'Today's check-ins'", then.objCopyVisible(todaysCheckInsCopy))
        })
        When("I tap 'How am I feeling today?", when.tapText("How am I feeling today?"), async()=>{
            Then("I should be on the Mood Monitor intro screen", then.objCopyVisible(moodMonitorIntro))
        })
        When("I tap Let's Go", when.tapText(moodMonitorIntro.cta), async()=>{
            Then("I should be on the rested question screen", then.objCopyVisible(restedQuestion))
        })
        When("I tap 'Neutral'", when.tapText(restedQuestion.ansThree), async()=>{
            Then("The 'Neutral' value should be selected", then.idVisible("CHECK_BOX_STATE_3 - Neutral_true"))
        })
        When("I tap next", when.tapText("Next"), async()=>{
            Then("I should be on the How has your day been? screen", then.objCopyVisible(dayQuestion))
        })
        When("I tap good", when.tapText(dayQuestion.ansFour), async()=>{
            Then("The 'Good' value should be selected", then.idVisible("CHECK_BOX_STATE_4 - Good_true"))
        })
        When("I tap next", when.tapText("Next"), async () => {
            Then("I should be on the How are you feeling? screen", then.objCopyVisible(feelingQuestion, "SDUI_BODY_SCROLL"))
        })
        When("I tap Happy", when.tapText(feelingQuestion.happy), async()=>{
            Then("I should see the selected answer", then.idVisible("RADIO_ITEM_SELECTED_Happy_true"))
        })
        When("I tap next", when.tapText("Next"), async()=>{
            Then("I should be on the final Mood Monitor Screen", then.objCopyVisible(moodMonitorFinalScreen, "SDUI_BODY_SCROLL"))
            Then("I should see the happy mood monitor image", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorHappy)))
        })
        When("I tap see my mood history", when.tapText("See my mood history"), async()=>{
            Then("I should see the happy mood monitor image", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorHappy)))
            Then("I should see today's date", then.textVisible(moment().format('Do MMM')))
        })
        When("I tap the back button", when.tapID(BACK_BUTTON), async()=>{
            Then("I should be on the final Mood Monitor Screen", then.textVisible(moodMonitorFinalScreen.title))
            Then("I should see the happy mood monitor image", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorHappy)))
        })
        When("I click done", when.tapText("Done"), async()=>{
            Then("I should now have 400 yucoin", then.textVisible("400 YuCoin"))
        })
        When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
            Then("I should see my yucoin balance update to 400", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(400)))
        })
    })

    Scenario("I can see my mood monitor history", scenario.start, () => {
        Given("I login as a user with the mood monitor enabled", given.logInAndGoToTab("yu", data.CUSTOMER_5, data.AUTH_5), async () => {
            When("I go to yuscreen v5", when.tapText("v5"), async()=>{
                Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(200, 60))
            })
            When("I swipe left on the challenge nudge", when.scrollFromID(NUDGE_ITEM_IMAGE(yuscreenImages.calendarIcon), "left", "fast"), async()=>{
                Then("I should see the mood monitor nudge", then.moodMonitorNudgeVisible)
            })
            When("I tap the mood monitor nudge", when.tapID(NUDGE_ITEM_IMAGE(yuscreenImages.moodMonitorIcon)), async()=>{
                Then("I should be on the Mood Monitor intro screen", then.objCopyVisible(moodMonitorIntro))
            })
            When("I close the mood monitor", when.tapID(SCREEN_CLOSE), async()=>{ 
                    Then("I should be back on yuscreen v5 and see the HQ nudge", then.moodMonitorNudgeVisible)
            })
            When("I go to the yucoin screen", when.tapID(NAV_BAR("yucoin")), async()=>{
                When("I go to the today's earnings screen", when.tapText("0 steps"), async () => {
                    Then("I see the 200 yucoin earned today so far", then.textVisible("200 YuCoin"))
                })
            })
            When("I swipe down the screen", when.swipeFromText("Daily core activities", "up", "fast"), async () => {
                Then("I should see 'Today's check-ins'", then.objCopyVisible(todaysCheckInsCopy))
            })
            When("I tap 'How am I feeling today?", when.tapText("How am I feeling today?"), async () => {
                Then("I should be on the Mood Monitor intro screen", then.objCopyVisible(moodMonitorIntro))
            })
            When("I tap let's go", when.tapText("Let's Go"), async()=>{
                When("I complete the mood monitor", when.completeMoodMonitor(USER_8_MOOD_MONITOR_ANSWERS), async()=>{
                    Then("I should be on the final Mood Monitor Screen", then.objCopyVisible(moodMonitorFinalScreen, "SDUI_BODY_SCROLL"))
                    Then("I should see the bored mood monitor image", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorContent)))
                })
            })
            When("I tap see my mood history", when.tapText("See my mood history"), async()=>{
                Then("I should see the happy mood monitor image from two days ago", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorHappy)))
                Then("I should see the date from two days ago", then.textVisible(moment().subtract(2, 'days').format('Do MMM')))
                Then("I should see the bored mood monitor image from today", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorContent)))
                Then("I should see today's date", then.textVisible(moment().format('Do MMM')))
            })
            When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                Then("I should be on the final Mood Monitor Screen", then.textVisible(moodMonitorFinalScreen.title))
                Then("I should see the bored mood monitor image from today", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorContent)))
            })
            When("I click done", when.tapText("Done"), async () => {
                Then("I should now have 400 yucoin", then.textVisible("400 YuCoin"))
            })
            When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                Then("I should see my yucoin balance update to 400", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(400)))
            })
            When("I back to the yuscreen", when.tapID(NAV_BAR("yu")), async()=>{
                Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(400, 60))
                Then("I should see the completed mood monitor nudge", then.completedMoodMonitorNudgeVisible)
            })
        })
    })
})