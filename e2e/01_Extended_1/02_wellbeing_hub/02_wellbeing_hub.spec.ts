import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_3, AUTH_3, CUSTOMER_31, AUTH_31, CUSTOMER_34, AUTH_34, CUSTOMER_37, AUTH_37, WELLBEING_HUB_ITEM_3, CUSTOMER_94, AUTH_94, WELLBEING_HUB_ITEM_4, WELLBEING_HUB_ITEM_1 } from "@data";
import { MENU_ICON, MENU_ITEM, WELLBEING_HUB_SCREEN, BACK_BUTTON, TEXT_TEMPLATE, MORE_INFO_BUTTON, PERK_SCREEN, INPUT_AVIOS_FORM_FIELD, WELLBEING_HUB_SCROLL_VIEW, VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids";
import { getLocalisedString as t } from "@i18n"
import { nextClaimDate } from "./_resources/constants";


Feature("Wellbeing Hub should be restricted for certain users", async () => {
    Scenario("I can view the Wellbeing Hub screen as a yulife user", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_3, AUTH_3), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
            Then("I should NOT see Fiit on the screen", then.textNotVisible("Fiit"))
            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
            Then("I should see all Wellbeing Hub services", then.wellbeingServiceVisible)
        })

        When("I scroll back up to the top", then.swipeFromText("Beam", "down", "slow"), async () => {
            When("I tap the smart health tab", when.tapID(TEXT_TEMPLATE("Smart Health")), async () => {
                Then("I should be on the smart health tab", then.textVisible("What is Smart Health?"))
            })
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
        })
        When("I tap the YuMatter tab", when.tapID(TEXT_TEMPLATE("YuMatter")), async () => {
            Then("I should be on the YuMatter screen", then.textVisible("How does it work?"))
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
        })
        When("I tap the Beam tab", when.tapID(TEXT_TEMPLATE("Beam")), async () => {
            Then("I should be on the Beam screen", then.idVisible(MORE_INFO_BUTTON("Donate to Beam")))
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
        })
        When("I scroll to the Hibob tab", when.scrollUntilIdVisible(WELLBEING_HUB_SCROLL_VIEW, TEXT_TEMPLATE("HiBob"), "down"), async () => {
            When("I tap the HiBob tab", when.tapID(TEXT_TEMPLATE("HiBob")), async () => {
                Then("I should be on the HiBob screen", then.idVisible(MORE_INFO_BUTTON("Access HiBob")))
            })
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
        })
        When("I scroll to the More Happi tab", when.scrollUntilIdVisible(WELLBEING_HUB_SCROLL_VIEW, TEXT_TEMPLATE("More Happi"), "down"), async () => {
            When("I tap the More Happi tab", when.tapID(TEXT_TEMPLATE("More Happi")), async () => {
                Then("I should be on the More Happi screen", then.idVisible(MORE_INFO_BUTTON("Access More Happi")))
            })
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
        })
    })

    Scenario("I can view the Fiit screen as a yulife user and should get Membership already active and Membership claimed when Active account ", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_34, AUTH_34), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
        })
        When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
            Then("I should see Fiit on the screen", then.textVisible("Fiit"))
        })
        When("I tap the Fiit tab", when.tapID(TEXT_TEMPLATE("Fiit")), async () => {
            Then("I should see Welcome to Fiit", then.textVisible("Welcome to Fiit"))
        })
        When("I tap Activate your Fiit account", when.navigateViaButton("Activate your Fiit account"), async () => {
            Then("I should be on the PERK_SCREEN screen", then.idVisible(PERK_SCREEN))
            Then("I should see Tim in the screen", then.textVisible(CUSTOMER_34.data.firstName))
            Then("I should see Drake in the screen", then.textVisible(CUSTOMER_34.data.lastName))
            Then("I should see email filled in the screen", then.textVisible(CUSTOMER_34.data.email))
            Then("I should see Activate your Fiit account", then.textVisible("Activate your Fiit account"))
        })
        When("I clear First Name field", when.clearFieldByID(INPUT_AVIOS_FORM_FIELD(t("First Name"))), async () => {
            When("I tap to dismiss the keyboard", when.tapText("Activate your Fiit account"), async()=>{
                When("I clear Last Name field", when.clearFieldByID(INPUT_AVIOS_FORM_FIELD(t("Last Name"))), async () => {
                    When("I tap to dismiss the keyboard", when.tapText("Activate your Fiit account"), async()=>{
                        When("I clear First Email field", when.clearFieldByID(INPUT_AVIOS_FORM_FIELD(t("Email"))), async () => {
                            When("I tap to dismiss the keyboard", when.tapText("Activate your Fiit account"), async()=>{
                                Then("I should see all of these fields errors", then.canSeeFiitFormValidationErrors)
                            })
                        })   
                    })
                })
            })
        })
        When("I replace the first name", when.typeViaID(INPUT_AVIOS_FORM_FIELD(t("First Name")), CUSTOMER_37.data.firstName), async () => {
            When("I tap to dismiss the keyboard", when.tapText("Activate your Fiit account"), async()=>{
                When("I replace the last name", when.typeViaID(INPUT_AVIOS_FORM_FIELD(t("Last Name")), CUSTOMER_37.data.lastName), async () => { 
                    When("I tap to dismiss the keyboard", when.tapText("Activate your Fiit account"), async()=>{
                        When("I replace the email", when.typeViaID(INPUT_AVIOS_FORM_FIELD(t("Email")), CUSTOMER_37.data.email), async () => {
                            When("I tap to dismiss the keyboard", when.tapText("Activate your Fiit account"), async()=>{
                                Then("I should see all of these fields", then.multipleTextVisible([CUSTOMER_37.data.firstName, CUSTOMER_37.data.lastName,CUSTOMER_37.data.email]))
                            })
                        })
                    })
                })
            })
        })
        When("I tap Activate your Fiit account", when.navigateViaButton(t("Activate account")), async () => {
            Then("I should see Membership claimed", then.textVisible("Membership claimed"))
            Then("I should see that membership is ready", then.canSeeFiitReadyMessage)
        })
        When("I tap Close", when.navigateViaButton(t("Close")), async () => {
            When("I tap Activate your Fiit account", when.navigateViaButton(t("Activate account")), async () => {
                Then("I should see Membership already active", then.textVisible("Membership already active"))
                Then("I should see You have already claimed this perk.", then.textVisible(`You have already claimed this perk. You will need to wait until ${nextClaimDate} to claim again.`))
            })
        })
    })

    Scenario("I should see Membership limit reached on the Fiit screen as trying to active account when no avalaible seat for it", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_31, AUTH_31), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                When("I tap the Fiit tab", when.tapID(TEXT_TEMPLATE("Fiit")), async () => {
                    When("I tap Activate your Fiit account", when.navigateViaButton("Activate your Fiit account"), async () => {
                        Then("I should see Membership limit reached", then.textVisible("Membership limit reached"))
                        Then("I should see all membership was purchased text", then.canSeeFiitLimitReached)
                    })
                })
            })
        })
    })
    Scenario("I should NOT see the Fiit screen as a yulife user who does not have the product assigned to it", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_37, AUTH_37), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                Then("I should NOT see Fiit on the screen", then.textNotVisible("Fiit"))
            })
        })
    })

    Scenario("I should not be able to see entries with a country code that the User is not a part of", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_34, AUTH_34), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                Then("I should see Fiit on the screen", then.textVisible(WELLBEING_HUB_ITEM_1.data.title))
                Then("I should see Fiit assigned to UK on the screen", then.textVisible(WELLBEING_HUB_ITEM_4.data.title))
                Then("I should not be able to see the item that is assigned to the US", then.textNotVisible(WELLBEING_HUB_ITEM_3.data.title))
            })
        })
    })

    Scenario("If a customers country is not set, they cannot see country specific entries", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(CUSTOMER_94, AUTH_94), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                Then("I should see Fiit that is assigned to the UK on the screen", then.textNotVisible(WELLBEING_HUB_ITEM_4.data.title))
                Then("I should not be able to see the item that is assigned to the US", then.textNotVisible(WELLBEING_HUB_ITEM_3.data.title))
            })
        })
    })
})
