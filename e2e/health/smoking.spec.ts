import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as given from "./_steps/given"
import * as data from "./_data";
import { smoking_questions } from "./_fixtures/smoking_fixtures";

const locale = process.env.TARGET_LOCALE || "en-GB"

Feature("I can view and use the smoking cessation feature", async () => {
    Scenario("I can begin my smoking cessation journey, fill out the questionnaire, and track view the smoking hub", scenario.start, async () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_FRY, data.AUTH_FRY), async () => {
            Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Phillip Fry", "Ocean", "81", true))
        })
        When("I scroll down", when.scrollFromID(ids.MAXIMISE_TODAYS_EARNINGS(200, 120), "up", "fast"), async()=>{
            Then("I should see the initial smoking tile", then.smokingTileVisible("Looking to quit smoking?"))
        })
        When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async()=>{
            Then("I should be on the smoking cessation intro screen", then.idVisible(ids.SMOKING_INTRO_TITLE))
        })
        When("I tap start my journey", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
            Then("2 I should be on the tobacco product question", then.objCopyVisible(smoking_questions[locale].type_of_smoking))
            Then("I should see smoking_cessation_question_type_choice_cigarettes", then.idVisible(ids.SMOKING_ANSWER_CIG))
            Then("I should see smoking_cessation_question_type_choice_roll_ups", then.idVisible(ids.SMOKING_ANSWER_ROLL))
            Then("I should see smoking_cessation_question_type_choice_both", then.idVisible(ids.SMOKING_ANSWER_BOTH))
        })
        When("I tap cigarettes", when.tapID(ids.SMOKING_ANSWER_CIG), async()=>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
                Then("I should be on the amount question", then.idVisible(ids.SMOKING_ANSWER_TEXT_FIELD))
                Then("I should be on the quantity question", then.objCopyVisible(smoking_questions[locale].amount_used_per_day))
            })
        })
        When("I enter an amount", when.typeViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "8"), async()=>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
                Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.description))
                Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading))
            })
        })
        When("I enter an amount", when.typeViaID(ids.SMOKING_SPEND_INPUT, "40"), async()=>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
                Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations))
            })
        })
        When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY), async()=>{
            When("i tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY), async()=>{
                When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
                    Then("I should be on the worried question", then.objCopyVisible(smoking_questions[locale].worried))
                })
            })
        })
        When("I tap quite", when.tapID(ids.SMOKING_ANSWER_QUITE), async() =>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
                Then("I Should be on the when is your first smoke question", then.objCopyVisible(smoking_questions[locale].when_first))
            })
        })
        When("I tap an hour or two", when.tapID(ids.SMOKING_ANSWER_AN_HOUR), async()=>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
                Then("I should be on the triggers question", then.objCopyVisible(smoking_questions[locale].triggers))
            })
        })
        When("I tap drinking", when.tapID(ids.SMOKING_ANSWER_DRINKING), async()=>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
                Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].confident))
            })
        })
        When("I tap very", when.tapID(ids.SMOKING_ANSWER_VERY_CONFIDENT), async()=>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
                Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].replacement))
            })
        })
        When("I Tap no", when.tapID(ids.SMOKING_ANSWER_NO), async()=>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
                Then("I should be on the replacement consideration screen", then.objCopyVisible(smoking_questions[locale].replacement_consider))
            })
        })
        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
            Then("I should be on the commitment screen", then.objCopyVisible(smoking_questions[locale].commitment_1))
        })
        When("I tap I'm commited", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
            Then("I should be on the pledge screen", then.textVisible(smoking_questions[locale].commitment_2.description_1))
            Then("I should see the fingerprint button", then.idVisible(ids.GESTURE_WRAPPER))
        })
        When("I tap the finger print", when.tapID(ids.GESTURE_WRAPPER), async()=>{
            Then("I should see the take your first steps button", then.textVisible("Take your first steps"))
        })
        When("I tap this button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async()=>{
            Then("I should be back on the yuscreen and see the 0 days smoke free tile", then.idVisible(ids.YUSCREEN_SMOKING_TILE_TITLE("0 days smoke-free")))
        })
        When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async()=>{
            Then("I should be on the smoking cessation screen", then.onFirstTimeSmokingCessationScreen)
        })
    })
})