import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_3, AUTH_3 } from "@data";
import { MENU_ICON, MENU_ITEM, WELLBEING_HUB_SCREEN, BACK_BUTTON, TEXT_TEMPLATE, MORE_INFO_BUTTON } from "@ids";


Feature("Wellbeing Hub should be restricted for certain users", async () => {
    Scenario("I can view the Wellbeing Hub screen as a yulife user", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_3, AUTH_3), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should see Wellbeing Hub", then.idVisible(MENU_ITEM("Wellbeing Hub")))
                When("I tap Wellbeing Hub", when.tapID(MENU_ITEM("Wellbeing Hub")), async () => {
                    Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
                    Then("I should see all Wellbeing Hub services", then.wellbeingServiceVisible)
                    When("I tap the smart health tab", when.tapID(TEXT_TEMPLATE("Smart Health")), async () => {
                        Then("I should be on the smart health tab", then.textVisible("What is Smart Health?"))
                        When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
                            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
                            When("I tap the YuMatter tab", when.tapID(TEXT_TEMPLATE("YuMatter")), async () => {
                                Then("I should be on the YuMatter screen", then.textVisible("How does it work?"))
                                When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
                                    Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
                                    When("I tap the Beam tab", when.tapID(TEXT_TEMPLATE("Beam")), async () => {
                                        Then("I should be on the Beam screen", then.idVisible(MORE_INFO_BUTTON("Donate to Beam")))
                                        When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
                                            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
                                            When("I tap the HiBob tab", when.tapID(TEXT_TEMPLATE("HiBob")), async () => {
                                                Then("I should be on the HiBob screen", then.idVisible(MORE_INFO_BUTTON("Access HiBob")))
                                                When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
                                                    Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
                                                    When("I tap the More Happi tab", when.tapID(TEXT_TEMPLATE("More Happi")), async () => {
                                                        Then("I should be on the More Happi screen", then.idVisible(MORE_INFO_BUTTON("Access More Happi")))
                                                        When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
                                                            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
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
            })
        })
    })
})
