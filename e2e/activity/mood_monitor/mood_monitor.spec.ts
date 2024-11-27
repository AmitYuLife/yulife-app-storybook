import { Feature, Scenario, Given, When, Then, ScenarioOnly, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import { yuscreenImages } from "@images";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import moment from "moment";
import {
    moodMonitorContent,
    moodMonitorHappy,
    USER_8_MOOD_MONITOR_ANSWERS,
    dayQuestion, feelingQuestion,
    moodMonitorFinalScreen,
    moodMonitorIntro,
    restedQuestion,
    todaysCheckInsCopy
 } from "./_resources/constants";

Feature("Mood Monitor", async () => {
    Scenario("I complete the mood monitor", scenario.start, () => {
        Given("I login as a user with the mood monitor enabled ", given.logInAndGoToTab("yucoin", data.CUSTOMER_2, data.AUTH_2), async () => {
            When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
                Then("I see the correct yucoin earned today so far", then.textVisible("200 YuCoin"))
            })
        })
        When("I swipe down the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.3), async () => {
            Then("I should see 'Today's check-ins'", then.objCopyVisible(todaysCheckInsCopy))
        })
        When("I tap 'How am I feeling today?", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
            Then("I should be on the Mood Monitor intro screen", then.objCopyVisible(moodMonitorIntro))
        })
        When("I tap Let's Go", when.tapID(ids.BUTTON_BASE("Let's Go")), async () => {
            Then("I should be on the rested question screen", then.objCopyVisible(restedQuestion))
        })
        When("I tap 'Neutral'", when.tapID(ids.CHECK_BOX_STATE("3 - Neutral", false)), async () => {
            Then("The 'Neutral' value should be selected", then.idVisible("CHECK_BOX_STATE_3 - Neutral_true"))
        })
        When("I tap next", when.tapID(ids.BUTTON_BASE("Next")), async () => {
            Then("I should be on the How has your day been? screen", then.objCopyVisible(dayQuestion))
        })
        When("I tap good", when.tapID(ids.CHECK_BOX_STATE("4 - Good", false)), async () => {
            Then("The 'Good' value should be selected", then.idVisible("CHECK_BOX_STATE_4 - Good_true"))
        })
        When("I tap next", when.tapID(ids.BUTTON_BASE("Next")), async () => {
            Then("I should be on the How are you feeling? screen", then.objCopyVisible(feelingQuestion, "SDUI_BODY_SCROLL"))
        })
        When("I tap Happy", when.tapID(ids.RADIO_ITEM_SELECTED("Happy", false)), async () => {
            Then("I should see the selected answer", then.idVisible("RADIO_ITEM_SELECTED_Happy_true"))
        })
        When("I tap next", when.tapID(ids.BUTTON_BASE("Next")), async () => {
            Then("I should be on the final Mood Monitor Screen", then.objCopyVisible(moodMonitorFinalScreen, "SDUI_BODY_SCROLL"))
            Then("I should see the happy mood monitor image", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorHappy)))
        })
        When("I tap see my mood history", when.tapIDAtIndex(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 0), async () => {
            Then("I should see the happy mood monitor image", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorHappy)))
            Then("I should see today's date", then.textVisible(moment().format('Do MMM')))
        })
        When("I tap the back button", when.tapID(ids.BACK_BUTTON), async()=>{
            Then("I should be on the final Mood Monitor Screen", then.textVisible(moodMonitorFinalScreen.title))
            Then("I should see the happy mood monitor image", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorHappy)))
        })
        When("I click done", when.tapIDAtIndex(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 1), async () => {
            When("I swipe up the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "down", "fast", 0.3), async () => {
                Then("I should now have 400 yucoin", then.textVisible("400 YuCoin"))
            })
        })
        When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should see my yucoin balance update to 400", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(400)))
        })
    })

    // @update INTL-593 Maximise Yu being reworked (Component logic updates)
    Scenario("I can see my mood monitor history", scenario.start, () => {
        Given("I login as a user with the mood monitor enabled", given.logInAndGoToTab("yu", data.CUSTOMER_5, data.AUTH_5), async () => {
            Then("I should see my YuCoin balance of 200", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)))
            // Un-comment below when maximise yu is introduced back in
            // Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(200, 60))
        })
        WhenSkip("I swipe left on the challenge nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.calendarIcon), "left", "fast"), async()=>{
            Then("I should see the mood monitor nudge", then.moodMonitorNudgeVisible)
        })
        WhenSkip("I tap the mood monitor nudge", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.moodMonitorIcon)), async()=>{
            Then("I should be on the Mood Monitor intro screen", then.objCopyVisible(moodMonitorIntro))
        })
        WhenSkip("I close the mood monitor", when.tapID(ids.SCREEN_CLOSE), async()=>{
                Then("I should be back on yuscreen v5 and see the HQ nudge", then.moodMonitorNudgeVisible)
        })
        When("I go to the yucoin screen", when.tapID(ids.NAV_BAR("yucoin")), async()=>{
            When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
                Then("I see the 200 yucoin earned today so far", then.textVisible("200 YuCoin"))
            })
        })
        When("I swipe down the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.3), async () => {
            Then("I should see 'Today's check-ins'", then.objCopyVisible(todaysCheckInsCopy))
        })
        When("I tap 'How am I feeling today?", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
            Then("I should be on the Mood Monitor intro screen", then.objCopyVisible(moodMonitorIntro))
        })
        When("I tap let's go", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            When("I complete the mood monitor", when.completeMoodMonitor(USER_8_MOOD_MONITOR_ANSWERS), async () => {
                Then("I should be on the final Mood Monitor Screen", then.objCopyVisible(moodMonitorFinalScreen, "SDUI_BODY_SCROLL"))
                Then("I should see the bored mood monitor image", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorContent)))
            })
        })
        When("I tap see my mood history", when.tapIDAtIndex(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 0), async () => {
            Then("I should see the happy mood monitor image from two days ago", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorHappy)))
            Then("I should see the date from two days ago", then.textVisible(moment().subtract(2, 'days').format('Do MMM')))
            Then("I should see the bored mood monitor image from today", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorContent)))
            Then("I should see today's date", then.textVisible(moment().format('Do MMM')))
        })
        When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the final Mood Monitor Screen", then.textVisible(moodMonitorFinalScreen.title))
            Then("I should see the bored mood monitor image from today", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(moodMonitorContent)))
        })
        When("I click done", when.tapIDAtIndex(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 1), async () => {
            When("I swipe up the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "down", "fast", 0.3), async () => {
                Then("I should now have 300 yucoin", then.textVisible("300 YuCoin"))
            })
        })
        When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should see my yucoin balance update to 400", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(400)))
        })
        // Un-skip below when maximise yu is introduced back in
        WhenSkip("I back to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async()=>{
            Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(300, 60))
            Then("I should see the completed mood monitor nudge", then.completedMoodMonitorNudgeVisible)
        })
    })

    Scenario("I should be restricted from the mood monitor when business setting is not enabled", scenario.start, () => {
        Given("I login as a user with the mood monitor enabled ", given.logInAndGoToTab("yucoin", data.CUSTOMER_89, data.AUTH_89), async () => {
            When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
                Then("I see the correct yucoin earned today so far", then.textVisible("200 YuCoin"))
            })
        })
        When("I swipe down the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.3), async () => {
            Then("I should not see 'Today's check-ins title'", then.textNotVisible("Today's check-ins"))
        })
    })
})