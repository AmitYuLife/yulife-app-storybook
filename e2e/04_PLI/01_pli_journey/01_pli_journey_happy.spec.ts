import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as helper from "./_steps/helpers"
import { CUSTOMER_37, AUTH_37 } from "@data";

Feature("PLI HAPPY", async()=>{
    Scenario("As a completely healthy male user with Covea FIB enabled, I should be able to purchase PLI", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(true, CUSTOMER_37, AUTH_37), async()=>{
            Then("I should be on the yuscreen", then.onYuscreenV3(CUSTOMER_37))
            When("I create the default yumoji", when.createDefaultYumoji, async () => {
                When("I tap off the tooltip", when.tapText(`${CUSTOMER_37.data.firstName} ${CUSTOMER_37.data.lastName}`), async () => {
                    Then("I should be back on the YuScreen", then.onYuscreenV3(CUSTOMER_37))
                    When("I tap the chest", when.tapUnlockableItem("chest"), async () => {
                        helper.ONBOARDING();
                        helper.INTRO_START();
                        helper.INTRO_INFO();
                        helper.INTRO_HONESTY();
                        helper.UNDERWRITING_NAME();
                        helper.UNDERWRITING_DOB(30);
                        helper.UNDERWRITING_SALARY("25000")
                        helper.UNDERWRITING_CITIZEN("Yes")
                        helper.UNDERWRITING_EMPLOYMENT("No")
                        helper.UNDERWRITING_HEIGHT("160 cm")
                        helper.UNDERWRITING_WEIGHT("60 kg")
                        helper.UNDERWRITING_CIGARETTES("Never")
                        helper.UNDERWRITING_CIGARS("Never")
                        helper.UNDERWRITING_SMOKING_ALTERNATIVES("Never")
                        helper.UNDERWRITING_ALCOHOL("2 drinks")
                        helper.UNDERWRITING_CANNABIS("Never")
                        helper.UNDERWRITING_RECREATIONAL_DRUGS("Never")
                        helper.UNDERWRITING_COUNSELLING("No")
                        helper.UNDERWRITING_SEX("Male")
                        helper.UNDERWRITING_DIAGNOSED_WITH("No")
                        helper.UNDERWRITING_MANY_CONSULTATIONS("No")
                        helper.UNDERWRITING_AWAITING_TESTS("No")
                        helper.UNDERWRITING_SYMPTOMS("No")
                        helper.UNDERWRITING_COVID_HOSPITAL("No")
                        helper.UNDERWRITING_COVID_EXPOSURE("No")
                        helper.UNDERWRITING_OTHER_POLICIES("No")
                        helper.REVIEW_SCREEN()
                        helper.COVER_SELECTION("rare")
                        helper.CHECKOUT("rare", true)
                    })
                })
            })
        })
    }) 

    Scenario("As pregnant female with all conditions but under control, I should be able to purchase PLI", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(true, CUSTOMER_37, AUTH_37), async()=>{
            Then("I should be on the yuscreen", then.onYuscreenV3(CUSTOMER_37))
            When("I create the default yumoji", when.createDefaultYumoji, async () => {
                Then("I should be back on the YuScreen", then.onYuscreenV3(CUSTOMER_37))
                When("I tap off the tooltip", when.tapText(`${CUSTOMER_37.data.firstName} ${CUSTOMER_37.data.lastName}`), async () => {
                    Then("I should be back on the YuScreen", then.onYuscreenV3(CUSTOMER_37))
                    When("I tap the chest", when.tapUnlockableItem("chest"), async () => {
                        helper.ONBOARDING();
                        helper.INTRO_START();
                        helper.INTRO_INFO();
                        helper.INTRO_HONESTY();
                        helper.UNDERWRITING_NAME();
                        helper.UNDERWRITING_DOB(48);
                        helper.UNDERWRITING_SALARY("25000")
                        helper.UNDERWRITING_CITIZEN("Yes")
                        helper.UNDERWRITING_EMPLOYMENT("No")
                        helper.UNDERWRITING_HEIGHT("160 cm")
                        helper.UNDERWRITING_WEIGHT("60 kg")
                        helper.UNDERWRITING_CIGARETTES("Never")
                        helper.UNDERWRITING_CIGARS("Never")
                        helper.UNDERWRITING_SMOKING_ALTERNATIVES("Never")
                        helper.UNDERWRITING_ALCOHOL("2 drinks")
                        helper.UNDERWRITING_CANNABIS("Never")
                        helper.UNDERWRITING_RECREATIONAL_DRUGS("Never")
                        helper.UNDERWRITING_COUNSELLING("No")
                        helper.UNDERWRITING_SEX("Female")
                        helper.UNDERWRITING_DIAGNOSED_WITH("No")
                        helper.UNDERWRITING_MANY_CONSULTATIONS("Yes")
                        helper.UNDERWRITING_CONDITION_SELECTION(["High blood pressure", "High cholesterol", "Ears, nose, throat", "Digestive", "Kidneys & bladder", "Eye", "Minor injuries", "Lungs", "Muscles & joints", "Skin", "Pregnancy", "Other"])
                        helper.UNDERWRITING_BP("Yes", "None of the above")
                        helper.UNDERWRITING_CHOLESTEROL("Yes", "None of the above")
                        helper.UNDERWRITIING_EARS_NOSE_THROAT("Yes")
                        helper.UNDERWRITIING_DIGESTIVE("Yes")
                        helper.UNDERWRITIING_KIDNEYS_BLADDER("No")
                        helper.UNDERWRITING_MEDICAL_FOLLOW_UP(false)
                        helper.UNDERWRITIING_EYE("Yes")
                        helper.UNDERWRITIING_MINOR_INJURIES("Yes")
                        helper.UNDERWRITIING_LUNGS("Yes")
                        helper.UNDERWRITIING_MUSCLES_JOINTS("Yes")
                        helper.UNDERWRITIING_SKIN("Yes")
                        helper.UNDERWRITIING_OTHER("Yes")
                        helper.UNDERWRITING_AWAITING_TESTS("No")
                        helper.UNDERWRITING_SYMPTOMS("No")
                        helper.UNDERWRITING_COVID_HOSPITAL("No")
                        helper.UNDERWRITING_COVID_EXPOSURE("No")
                        helper.UNDERWRITING_OTHER_POLICIES("No")
                        helper.REVIEW_SCREEN()
                        helper.COVER_SELECTION("rare")
                        helper.CHECKOUT("rare", true)
                    })
                })
            })
        })
    })

    Scenario("As a healthy 33y/o, high earning male user that smokes in moderation and has existing <£20m PLI, I should be able to purchase PLI", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(true, CUSTOMER_37, AUTH_37), async()=>{
            Then("I should be on the yuscreen", then.onYuscreenV3(CUSTOMER_37))
            When("I create the default yumoji", when.createDefaultYumoji, async () => {
                Then("I should be back on the YuScreen", then.onYuscreenV3(CUSTOMER_37))
                When("I tap off the tooltip", when.tapText(`${CUSTOMER_37.data.firstName} ${CUSTOMER_37.data.lastName}`), async () => {
                    Then("I should be back on the YuScreen", then.onYuscreenV3(CUSTOMER_37))
                    When("I tap the chest", when.tapUnlockableItem("chest"), async () => {
                        helper.ONBOARDING();
                        helper.INTRO_START();
                        helper.INTRO_INFO();
                        helper.INTRO_HONESTY();
                        helper.UNDERWRITING_NAME();
                        helper.UNDERWRITING_DOB(33);
                        helper.UNDERWRITING_SALARY("150000")
                        helper.UNDERWRITING_CITIZEN("Yes")
                        helper.UNDERWRITING_EMPLOYMENT("No")
                        helper.UNDERWRITING_HEIGHT("160 cm")
                        helper.UNDERWRITING_WEIGHT("60 kg")
                        helper.UNDERWRITING_CIGARETTES("In the past month")
                        helper.UNDERWRITING_CIGARETTES_QUANTITY("1-9 per day")
                        helper.UNDERWRITING_CIGARS("In the past 12 months")
                        helper.UNDERWRITING_SMOKING_ALTERNATIVES("In the past 6 months")
                        helper.UNDERWRITING_ALCOHOL("2 drinks")
                        helper.UNDERWRITING_CANNABIS("Never")
                        helper.UNDERWRITING_RECREATIONAL_DRUGS("Never")
                        helper.UNDERWRITING_COUNSELLING("No")
                        helper.UNDERWRITING_SEX("Male")
                        helper.UNDERWRITING_DIAGNOSED_WITH("No")
                        helper.UNDERWRITING_MANY_CONSULTATIONS("No")
                        helper.UNDERWRITING_AWAITING_TESTS("No")
                        helper.UNDERWRITING_SYMPTOMS("No")
                        helper.UNDERWRITING_COVID_HOSPITAL("No")
                        helper.UNDERWRITING_COVID_EXPOSURE("No")
                        helper.UNDERWRITING_OTHER_POLICIES("Yes")
                        helper.UNDERWRITING_DO_POLICIES_EXCEED("No")
                        helper.REVIEW_SCREEN()
                        helper.COVER_SELECTION("epic")
                        helper.MAXIMUM_SUM_ASSURED()
                        helper.CHECKOUT("common", false)
                    })
                })
            })
        })
    })
})