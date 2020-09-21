import { Feature, Scenario, Given, When, Then, FeatureOnly } from "@bdd";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import {
    CUSTOMER_3, AUTH_3, CUSTOMER_5, AUTH_5, CUSTOMER_6, AUTH_6, CUSTOMER_10, AUTH_10, CUSTOMER_12,
    AUTH_12, CUSTOMER_13, AUTH_13, CUSTOMER_18, AUTH_18, CUSTOMER_20, AUTH_20, CUSTOMER_22, AUTH_23,
    CUSTOMER_23, AUTH_22, CUSTOMER_ALPHA, AUTH_ALPHA
} from "_utils/data/stubs";
import { MENU_ICON, MENU_ITEM, YUMATTER_SCREEN, SMART_HEALTH_SCREEN } from "@ids";


Feature("Member services should be restricted for certain users", async () => {

    Scenario("I can view the member services screen as a yulife user", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_3, AUTH_3), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should see member services", then.idVisible(MENU_ITEM("member services")))
                When("I tap member services", when.tapID(MENU_ITEM("member services")), async () => {
                    Then("I should be on the yumatter screen", then.idVisible(YUMATTER_SCREEN))
                    When("I tap the smart health tab", when.tapText("SmartHealth"), async () => {
                        Then("I should be on the smart health tab", then.idVisible(SMART_HEALTH_SCREEN))
                    })
                })
            })
        })
    })

    Scenario("I can view the member services screen as a grouplife user", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_5, AUTH_5), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should see member services", then.idVisible(MENU_ITEM("member services")))
                When("I tap member services", when.tapID(MENU_ITEM("member services")), async () => {
                    Then("I should be on the yumatter screen", then.idVisible(YUMATTER_SCREEN))
                    When("I tap the smart health tab", when.tapText("SmartHealth"), async () => {
                        Then("I should be on the smart health tab", then.idVisible(SMART_HEALTH_SCREEN))
                    })
                })
            })
        })
    })

    Scenario("I can't view the member services screen as an alpha user", scenario.start, async () => {
        Given("I login as a alpha user", given.loginAsUser(CUSTOMER_ALPHA, AUTH_ALPHA), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should not see member services", then.idNotVisible(MENU_ITEM("member services")))
            })
        })
    })

    Scenario("I cannot view member services as a group life user if the toggle is off", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_10, AUTH_10), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should not see member services", then.idNotVisible(MENU_ITEM("member services")))

            })
        })
    })

    Scenario("I cannot view member services as a yulife user if the toggle is off", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_12, AUTH_12), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should not see member services", then.idNotVisible(MENU_ITEM("member services")))
            })
        })
    })

    Scenario("I can only view the yumatter sceen on member services if toggled as such", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_13, AUTH_13), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should see member services", then.idVisible(MENU_ITEM("member services")))
                When("I tap member services", when.tapID(MENU_ITEM("member services")), async () => {
                    Then("I should be on the yumatter screen", then.idVisible(YUMATTER_SCREEN))
                    Then("I should not see the smart health tab", then.textNotVisible("SmartHealth"))
                })
            })
        })
    })

    Scenario("I can only view the SmartHealth sceen on member services if toggled as such", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_18, AUTH_18), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should see member services", then.idVisible(MENU_ITEM("member services")))
                When("I tap member services", when.tapID(MENU_ITEM("member services")), async () => {
                    Then("I should be on the yumatter screen", then.idVisible(SMART_HEALTH_SCREEN))
                    Then("I should not see the smart health tab", then.textNotVisible("YuMatter"))
                })
            })
        })
    })



    Scenario("I cannot view member services as a Wellbeing Access user if the toggle is off", scenario.start, async () => {
        Given("I login as a Wellbeing Access user", given.loginAsUser(CUSTOMER_20, AUTH_20), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should not see member services", then.idNotVisible(MENU_ITEM("member services")))
            })
        })
    })

    Scenario("I can only view the yumatter sceen on member services if toggled as such as a Wellbeing Access user", scenario.start, async () => {
        Given("I login as a Wellbeing Access user", given.loginAsUser(CUSTOMER_22, AUTH_22), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should see member services", then.idVisible(MENU_ITEM("member services")))
                When("I tap member services", when.tapID(MENU_ITEM("member services")), async () => {
                    Then("I should be on the yumatter screen", then.idVisible(YUMATTER_SCREEN))
                    Then("I should not see the smart health tab", then.textNotVisible("SmartHealth"))
                })
            })
        })
    })

    Scenario("I can only view the SmartHealth sceen on member services if toggled as such as a Wellbeing Access user", scenario.start, async () => {
        Given("I login as a Wellbeing Access user", given.loginAsUser(CUSTOMER_23, AUTH_23), async () => {
            When("I go to settings", when.tapID(MENU_ICON), async () => {
                Then("I should see member services", then.idVisible(MENU_ITEM("member services")))
                When("I tap member services", when.tapID(MENU_ITEM("member services")), async () => {
                    Then("I should be on the yumatter screen", then.idVisible(SMART_HEALTH_SCREEN))
                    Then("I should not see the smart health tab", then.textNotVisible("YuMatter"))
                })
            })
        })
    })




})
