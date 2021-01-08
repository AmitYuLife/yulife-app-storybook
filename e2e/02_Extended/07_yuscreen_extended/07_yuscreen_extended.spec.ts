import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_23, AUTH_23 } from "@data";
import { FIB_SALARY_INPUT, PERSONAL_PRODUCT, FIB_SALARY_INPUT_VALUE, PACKAGE_SCREEN, FIB_BROWSE_SCREEN, YUSCREEN_AVATAR, YEAR_SCROLLER, MONTH_SCROLLER, HIGHLIGHTED_SCROLLER_VALUE, AVATAR_ITEM, YUSCREEN, FIB_INTRO_SCREEN } from "@ids";


FeatureSkip("I am able to use the yuscreens extended features", async () => {

    Scenario("As a user with the correct toggle, I am able to browse a package", scenario.start, async () => {
        Given("I go to the yuscreen as a user with the correct toggle", given.loginToYuScreen(true, CUSTOMER_23, AUTH_23), async () => {
            Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_23))
            Then("I should see my yumoji", then.idVisible(YUSCREEN_AVATAR))
            Then("I should see an active life insurance icon", then.idVisible(AVATAR_ITEM("chest", "unlockable")))
            When("I tap life insurance", when.tapID(AVATAR_ITEM("chest", "unlockable")), async () => {
                Then("I should see the unlock modal", then.multipleTextVisible(["Unlock", "not equipped"]))
                When("I tap Unlock", when.tapText("Unlock"), async()=>{
                    Then("I should be on the intro screen", then.idVisible(FIB_INTRO_SCREEN))
                    When("I dismiss this screen", when.dismissFibIntro, async()=>{
                            Then("I should see the salary input", then.idVisible(FIB_SALARY_INPUT))
                            When("I enter a salary", when.typeViaID(FIB_SALARY_INPUT, "40000"), async ()=>{
                                Then("I should see my salary has been input", then.idVisible(FIB_SALARY_INPUT_VALUE(40000)))
                                When("I tap done", when.tapText("Done"), async()=>{
                                    Then("I should be on the package screen for life insurance", then.onPackageScreen)
                                    Then("The common option should be selected", then.textVisible("Designed to cover the basics"))
                                    Then("the rest of the package screen should be visible", then.packageScreenCorrect(17.63))
                                })
                            })
                        })
                    })
                })
            })
        })

    Scenario("The payout calculator should work correctly", scenario.start, async()=>{
        Given("I go to the yuscreen as a user with the correct toggle", given.loginToYuScreen(true, CUSTOMER_23, AUTH_23), async () => {
            Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_23))
            When("I scroll to the bottom", when.scrollFromID(YUSCREEN, "up", "fast"), async () => {
            When("I tap life insurance", when.tapID(PERSONAL_PRODUCT("Life Insurance")), async () => {
                Then("I should be on the intro screen", then.idVisible(FIB_INTRO_SCREEN))
                When("I dismiss this screen", when.dismissFibIntro, async () => {
                    Then("I should see the salary input", then.idVisible(FIB_SALARY_INPUT))
                    When("I enter a salary", when.typeViaID(FIB_SALARY_INPUT, "40000"), async () => {
                        Then("I should see my salary has been input", then.idVisible(FIB_SALARY_INPUT_VALUE(40000)))
                        When("I tap done", when.tapText("Done"), async () => {
                            Then("I should be on the package screen for life insurance", then.onPackageScreen)
                            When("I scroll past the package screen", when.scrollFromID(PACKAGE_SCREEN, "up", "slow"), async()=>{
                                When("I scroll to the payout calculator", when.scrollUntilTextVisible(FIB_BROWSE_SCREEN, "How much would it pay out?", "down"), async()=>{
                                    Then("I should see the 'how much would it pay out?' drop down", then.textVisible("How much would it pay out?"))
                                    When("I tap 'how much would it pay out?'", when.tapText("How much would it pay out?"), async()=>{
                                            Then("I should see years set at 40", then.idVisible(HIGHLIGHTED_SCROLLER_VALUE(40)))
                                            Then("I should see months set at 0", then.idVisible(HIGHLIGHTED_SCROLLER_VALUE(0)))
                                            Then("I should see the default payment calculation", then.textVisible("£300,000"))
                                            When("I scroll the years scroller", when.scrollUntilIdVisible(YEAR_SCROLLER, HIGHLIGHTED_SCROLLER_VALUE(43), "right"), async()=>{
                                                Then("The years, months, and payout should be correct", then.yearsScrollCorrect)
                                            })
                                            When("I scroll the months scroller", when.scrollUntilIdVisible(MONTH_SCROLLER, HIGHLIGHTED_SCROLLER_VALUE(3), "right"), async () => {
                                                Then("The years, months, and payout should be correct", then.monthsScrollCorrect)
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })


    ScenarioSkip("I should be able to create customer cover", scenario.start, async()=>{
        Given("I login to the yuscreen", given.loginToYuScreen(true, CUSTOMER_23, AUTH_23), async()=>{
            When("I go to the life insurance screen", when.goToLifeInsurance, async()=>{
                Then("I should be on the package screen for life insurance", then.onPackageScreen)
                When("I scroll past the package screen", when.scrollFromID(PACKAGE_SCREEN, "up", "slow"), async () => {
                    When("I scroll to the custom cover cta", when.swipeToText(FIB_BROWSE_SCREEN, "Create custom cover", "up", 15), async () => {
                        Then("I should see the customer cover tab", then.textVisible("Create custom cover"))
                        When("I tap the custom cover tab", when.tapText("Create custom cover"), async()=>{
                            Then("I should be on the custom cover screen", then.onCustomCover)
                            Then("I should see the initial estimated cost", then.textVisible("£18.12"))
                            When("I change the percentage", when.scrollFromID(HIGHLIGHTED_SCROLLER_VALUE(25), "left", "fast"), async()=>{
                                Then("I should see the changed percentage value", then.idVisible(HIGHLIGHTED_SCROLLER_VALUE(35)))
                                Then("I should see the newly calculated estimated cost", then.tryCatchTextVisible(["£23.17", "£23.76"]))
                                When("I tap continue", when.tapText("Continue"), async()=>{
                                    Then("I should be on the next custom cover screen", then.onNextCustomCoverScreen)
                                    Then("I should see the newly calculated estimated cost", then.tryCatchTextVisible(["£23.17 per month","£23.76 per month" ]))
                                    When("I tap continue", when.tapText("Continue"), async()=>{
                                        Then("I should be on Let's get started screen", then.textVisible(`Let’s get personal, Mike`))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I am able to view the FAQs", scenario.start, async()=>{
        Given("I login to the yuscreen", given.loginToYuScreen(true, CUSTOMER_23, AUTH_23), async () => {
            When("I go to the life insurance screen", when.goToLifeInsurance, async () => {
                When("I enter my salary", when.typeViaID(FIB_SALARY_INPUT, "40000"), async()=>{
                    Then("I should see my salary has been input", then.idVisible(FIB_SALARY_INPUT_VALUE(40000)))
                    When("I tap done", when.tapText("Done"), async () => {
                    Then("I should be on the package screen for life insurance", then.onPackageScreen)
                    When("I scroll past the package screen", when.scrollFromID(PACKAGE_SCREEN, "up", "slow"), async () => {
                        When("I scroll to the FAQs", when.scrollUntilTextVisible(FIB_BROWSE_SCREEN, "FAQs", "down"), async () => {
                            Then("I should see the FAQs", then.textVisible("FAQs"))
                            When("I tap FAQs", when.tapText("FAQs"), async()=>{
                                When("I tap what is the lump sum", when.tapText("What is a lump sum?"), async()=>{
                                    Then("I should be on the lump sum FAQ screen", then.textVisible("What is a lump sum?"))
                                })
                                })
                            })
                        })
                    })
                })
            })
        })
    })


})
