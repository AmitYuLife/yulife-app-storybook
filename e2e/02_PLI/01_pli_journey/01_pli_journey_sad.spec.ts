import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as helper from "./_steps/helpers"
import { CUSTOMER_37, AUTH_37, CUSTOMER_PLI_5, AUTH_PLI_5, CUSTOMER_PLI_6, AUTH_PLI_6, CUSTOMER_PLI_7, AUTH_PLI_7, CUSTOMER_PLI_9, AUTH_PLI_9, CUSTOMER_PLI_10, AUTH_PLI_10 } from "@data";
import {  POPOVER } from "@ids";
import * as helper_V4 from "00_Smoke_2/07_yuscreen_v4/_steps/helpers";


Feature("PLI SAD", async()=>{
    Scenario("As a user with High BMI, I cannot get PLI", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false, CUSTOMER_37, AUTH_37), async()=>{
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
                        helper.UNDERWRITING_DOB(22);
                        helper.UNDERWRITING_SALARY("30000")
                        helper.UNDERWRITING_CITIZEN("Yes")
                        helper.UNDERWRITING_EMPLOYMENT("No")
                        helper.UNDERWRITING_HEIGHT("152 cm")
                        helper.UNDERWRITING_WEIGHT("120 kg")
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
                        helper.REJECTED("Answers")
                    })
                })
            })
        })
    })

    Scenario("As a user with 36 BMI and high cholesterol, I cannot get PLI", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false, CUSTOMER_37, AUTH_37), async()=>{
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
                        helper.UNDERWRITING_DOB(45);
                        helper.UNDERWRITING_SALARY("30000")
                        helper.UNDERWRITING_CITIZEN("Yes")
                        helper.UNDERWRITING_EMPLOYMENT("No")
                        helper.UNDERWRITING_HEIGHT("160 cm")
                        helper.UNDERWRITING_WEIGHT("92 kg")
                        helper.UNDERWRITING_CIGARETTES("Never")
                        helper.UNDERWRITING_CIGARS("Never")
                        helper.UNDERWRITING_SMOKING_ALTERNATIVES("Never")
                        helper.UNDERWRITING_ALCOHOL("2 drinks")
                        helper.UNDERWRITING_CANNABIS("Never")
                        helper.UNDERWRITING_RECREATIONAL_DRUGS("Never")
                        helper.UNDERWRITING_COUNSELLING("No")
                        helper.UNDERWRITING_SEX("Male")
                        helper.UNDERWRITING_DIAGNOSED_WITH("No")
                        helper.UNDERWRITING_MANY_CONSULTATIONS("Yes")
                        helper.UNDERWRITING_CONDITION_SELECTION(["High cholesterol"])
                        helper.UNDERWRITING_CHOLESTEROL("Yes", "None of the above")
                        helper.UNDERWRITING_AWAITING_TESTS("No")
                        helper.UNDERWRITING_SYMPTOMS("No")
                        helper.UNDERWRITING_COVID_HOSPITAL("No")
                        helper.UNDERWRITING_COVID_EXPOSURE("No")
                        helper.UNDERWRITING_OTHER_POLICIES("No")
                        helper.REVIEW_SCREEN()
                        helper.REJECTED("Answers")
                    })
                })
            })
        })
    })

    Scenario("As a user <40 y/o and high blood pressure, I cannot get PLI", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false, CUSTOMER_37, AUTH_37), async()=>{
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
                        helper.UNDERWRITING_DOB(28);
                        helper.UNDERWRITING_SALARY("30000")
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
                        helper.UNDERWRITING_MANY_CONSULTATIONS("Yes")
                        helper.UNDERWRITING_CONDITION_SELECTION(["High blood pressure"])
                        helper.UNDERWRITING_BP("Yes", "None of the above")
                        helper.UNDERWRITING_AWAITING_TESTS("No")
                        helper.UNDERWRITING_SYMPTOMS("No")
                        helper.UNDERWRITING_COVID_HOSPITAL("No")
                        helper.UNDERWRITING_COVID_EXPOSURE("No")
                        helper.UNDERWRITING_OTHER_POLICIES("No")
                        helper.REVIEW_SCREEN()
                        helper.REJECTED("Answers")
                    })
                })
            })
        })
    })

    Scenario("As a user <=17 y/o, I cannot get PLI", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false, CUSTOMER_37, AUTH_37), async()=>{
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
                        helper.UNDERWRITING_DOB(12);
                        helper.UNDERWRITING_CONFIRM_DOB();
                        helper.REJECTED("Age")
                    })
                })
            })
        })
    })

    Scenario("As a user whose latest quote is 61 days old and whose application got rejected, then getting into the journey should show me that I am still rejected.", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false,  CUSTOMER_PLI_5, AUTH_PLI_5), async()=>{
            Then("I should be on the yuscreen", then.onYuscreenV3(CUSTOMER_PLI_5))
            When("I create the default yumoji", when.createDefaultYumoji, async () => {
                When("I tap off the tooltip", when.tapText(`${CUSTOMER_PLI_5.data.firstName} ${CUSTOMER_PLI_5.data.lastName}`), async () => {
                    Then("I should be back on the YuScreen", then.onYuscreenV3(CUSTOMER_PLI_5))
                })
                When("I tap the chest", when.tapID(POPOVER), async () => {
                    helper.REJECTED("Answers")
                })
            })
        })
    })

    Scenario("As a user with failed payment on PLI i should see payment overdue warning when want to buy Dental", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false,  CUSTOMER_PLI_6, AUTH_PLI_6), async() => {
            When("I tap check out my power", when.tapCheckOutMyPower, async () => {
                When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                    Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_PLI_6, "PliPermanentlyRejectedAndDentalInactive", "10" ))
                })
            })
        })
        helper_V4.CHECK_OTHER_PRODUCT_WHEN_HAVE_PAYMENT_FAILED("Fill the gap with Dental")    //slot text should be the same after navigate through it 
    })

    Scenario("As a user with age rejection for PLI, i still should see the product slot and be able to get Dental", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false,  CUSTOMER_PLI_7, AUTH_PLI_7), async()=>{
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_PLI_7, "PliPermanentlyRejectedAndDentalInactive", "10" ))
            helper_V4.REJECTION_SCREEN_INFO("Add Life insurance", "pliAgeRejected")
            helper_V4.CHECK_PRODUCT_BUTTON_LINK("Fill the gap with Dental", "Dental Insurance");
        })
    })

    Scenario("As a user with age rejection for Dental, i still should see the product slot and be able to get PLI", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false,  CUSTOMER_PLI_9, AUTH_PLI_9), async()=>{
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_PLI_9, "PliPermanentlyRejectedAndDentalInactive", "10" ))
            helper_V4.REJECTION_SCREEN_INFO("Fill the gap with Dental", "dentalAgeRejected")
            helper_V4.CHECK_PRODUCT_BUTTON_LINK("Add Life insurance", "Personal Life Insurance");
        })
    })

    Scenario("As a user with covid rejection for PLI, i still should see the product slot and be able to get Dental", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false,  CUSTOMER_PLI_10, AUTH_PLI_10), async()=>{
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_PLI_10, "PliPermanentlyRejectedAndDentalInactive", "10" ))
            helper_V4.REJECTION_SCREEN_INFO("Add Life insurance", "pliCovidRejected")
            helper_V4.CHECK_PRODUCT_BUTTON_LINK("Fill the gap with Dental", "Dental Insurance");
        })
    })
})