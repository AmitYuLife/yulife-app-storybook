import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as helper from "./_steps/helpers"
import { CUSTOMER_37, AUTH_37 } from "@data";

Feature("PLI SAD", async()=>{
    Scenario("As a user with High BMI, I cannot get PLI", scenario.start, async()=>{
        Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(true, CUSTOMER_37, AUTH_37), async()=>{
            Then("I should be on the yuscreen", then.onYuscreenV3(CUSTOMER_37))
            When("I create the default yumoji", when.createDefaultYumoji, async () => {
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