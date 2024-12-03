import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario"
import * as given from "../_common/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as data from "../_data"
import * as ids from "@ids"
import * as fixture from "./_resources/fixtures"
import { nextClaimDate } from "./_resources/constants";


Feature("Wellbeing Hub should be restricted for certain users", async () => {
    Scenario("I can view the Wellbeing Hub screen as a yulife user", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(data.CUSTOMER_3, data.AUTH_3), async () => {
            Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(42200)))
        })
        When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
            When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN))
                Then("I should see all Wellbeing Hub services", then.wellbeingServiceVisible)
            })
        })
        When("I scroll back up to the top", then.swipeFromText("Beam", "down", "slow"), async () => {
            When("I tap the smart health tab", when.tapID(ids.TEXT_TEMPLATE("Smart Health")), async () => {
                Then("I should be on the smart health tab", then.textVisible("What is Smart Health?"))
            })
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN, 2000))
        })
        When("I scroll to the YuMatter tab", when.scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE("YuMatter"), "down"), async () => {
            When("I tap the YuMatter tab", when.tapID(ids.TEXT_TEMPLATE("YuMatter")), async () => {
                Then("I should be on the YuMatter screen", then.textVisible("How does it work?"))
            })
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN, 2000))
        })
        When("I scroll to the Beam tab", when.scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE("Beam"), "down"), async () => {
            When("I tap the Beam tab", when.tapID(ids.TEXT_TEMPLATE("Beam")), async () => {
                Then("I should be on the Beam screen", then.textVisible("Donate to Beam"))
            })
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN, 2000))
        })
        When("I scroll to the Hibob tab", when.scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE("HiBob"), "down"), async () => {
            When("I tap the HiBob tab", when.tapID(ids.TEXT_TEMPLATE("HiBob")), async () => {
                Then("I should be on the HiBob screen", then.textVisible("Access HiBob"))
            })
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN, 2000))
        })
        When("I scroll to the More Happi tab", when.scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE("More Happi"), "down"), async () => {
            When("I tap the More Happi tab", when.tapID(ids.TEXT_TEMPLATE("More Happi")), async () => {
                Then("I should be on the More Happi screen", then.textVisible("Access More Happi"))
            })
        })
        When("I tap to go back to Wellbeing Hub", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN, 2000))
        })
    })

    Scenario("I can view the Fiit screen as a yulife user and should get Membership already active and Membership claimed when Active account. Also a user can still claim a perk if their customer_perk_claim is marked as archived", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(data.CUSTOMER_34, data.AUTH_34), async () => {
            Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)))
        })
        When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
            When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN))
                Then("I should see Fiit on the screen", then.textVisible("Fiit"))
            })
        })
        When("I tap the Fiit tab", when.tapID(ids.TEXT_TEMPLATE("Fiit")), async () => {
            Then("I should see Welcome to Fiit", then.textVisible("Welcome to Fiit"))
        })
        When("I tap Activate your Fiit account", when.navigateViaButton("Activate your Fiit account"), async () => {
            Then("I should be on the PERK_SCREEN screen", then.idVisible(ids.PERK_SCREEN, 2000))
            Then("I should see email filled in the screen", then.textVisible(data.CUSTOMER_34.data.email))
            Then("I should see Activate your Fiit account", then.textVisible("Activate your Fiit account"))
        })
        When("I clear the Email field", when.clearFieldByID(ids.INPUT_AVIOS_FORM_FIELD("Email")), async () => {
            When("I tap to dismiss the keyboard", when.tapID(ids.PERK_SCREEN, 2000), async () => {
                Then("I should see the email field error", then.canSeeFiitFormValidationError)
            })
        })
        When("I enter my Email again", when.typeViaID(ids.INPUT_AVIOS_FORM_FIELD("Email"), data.CUSTOMER_34.data.email), async () => {
            When("I tap to dismiss the keyboard", when.tapID(ids.PERK_SCREEN, 2000), async () => {
                When("I tap Activate your Fiit account", when.tapID(ids.CONTENT_FORM_SUBMIT, 2000), async () => {
                    Then("I should see Membership claimed", then.textVisible("Membership claimed", 2500))
                    Then("I should see that membership is ready", then.canSeeFiitReadyMessage)
                })
            })
        })
        When("I close the modal", when.tapID(ids.GENERIC_SCREEN_CTA("Close")), async () => {
            When("I tap Activate your Fiit account", when.tapID(ids.CONTENT_FORM_SUBMIT), async () => {
                Then("I should see Membership already active", then.textVisible("Membership already active", 2500))
                Then("I should see You have already claimed this perk.", then.textVisible(`You have already claimed this perk. You will need to wait until ${nextClaimDate} to claim again.`))
            })
        })
    })

    Scenario("I should see Membership limit reached on the Fiit screen as trying to active account when no avalaible seat for it", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(data.CUSTOMER_31, data.AUTH_31), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                    When("I tap the Fiit tab", when.tapID(ids.TEXT_TEMPLATE("Fiit")), async () => {
                        When("I tap Activate your Fiit account", when.navigateViaButton("Activate your Fiit account"), async () => {
                            Then("I should see Membership limit reached", then.textVisible("Membership limit reached"))
                            Then("I should see all membership was purchased text", then.canSeeFiitLimitReached)
                        })
                    })
                })
            })
        })
    })

    // @update [Fiit benefit visible on screen]
    ScenarioSkip("I should NOT see the Fiit screen as a yulife user who does not have the product assigned to it", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(data.CUSTOMER_37, data.AUTH_37), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                    Then("I should NOT see Fiit on the screen", then.textNotVisible("Fiit"))
                })
            })
        })
    })

    Scenario("I should not be able to see entries with a country code that the User is not a part of", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(data.CUSTOMER_34, data.AUTH_34), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                    Then("I should see Fiit on the screen", then.textVisible(data.WELLBEING_HUB_ITEM_1.data.title))
                    Then("I should see Fiit assigned to UK on the screen", then.textVisible(data.WELLBEING_HUB_ITEM_4.data.title))
                    Then("I should not be able to see the item that is assigned to the US", then.textNotVisible(data.WELLBEING_HUB_ITEM_3.data.title))
                })
            })
        })
    })

    Scenario("If a customers country is not set, they cannot see country specific entries", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(data.CUSTOMER_94, data.AUTH_94), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                    Then("I should see Fiit that is assigned to the UK on the screen", then.textNotVisible(data.WELLBEING_HUB_ITEM_4.data.title))
                    Then("I should not be able to see the item that is assigned to the US", then.textNotVisible(data.WELLBEING_HUB_ITEM_3.data.title))
                })
            })
        })
    })

    // @update - stubs need to be updated to include all bupa wellbeing hub products for category to show
    ScenarioSkip("I can see the Bupa wellbeing products in their own tab if assigned to the user", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(data.CUSTOMER_116_GHI_REWARDS, data.AUTH_116), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                    When("I click to see the Health Insurance options", when.tapText("Health Insurance"), async () => {
                        Then("I should see all the Bupa products", then.bupaWellbeingItemsVisible)
                    })
                })
            })
        })
        When("I scroll up", when.scrollFromID(ids.WELLBEING_HUB_SCROLL_VIEW, "down", "slow", 0.3), async () => {
            When("I click to see Blua Health", when.tapID(ids.TEXT_TEMPLATE(fixture.bluaHealthItem.title)), async () => {
                Then("I am on the Blua Health page", then.onCorrectWellbeingItemPage(fixture.bluaHealthItem))
            })
        })
        When("I click to go back", when.tapID(ids.BACK_BUTTON), async () => {
            When("I click to see Anytime Helpline", when.tapID(ids.TEXT_TEMPLATE(fixture.anytimeHelplineItem.title)), async () => {
                Then("I am on the Anytime Helpline page", then.onCorrectWellbeingItemPage(fixture.anytimeHelplineItem))
            })
        })
        When("I click to go back", when.tapID(ids.BACK_BUTTON), async () => {
            When("I click to see Family Mental Healthline", when.tapID(ids.TEXT_TEMPLATE(fixture.familyMentalHealthLineItem.title)), async () => {
                Then("I am on the Family Mental Healthline page", then.onCorrectWellbeingItemPage(fixture.familyMentalHealthLineItem))
            })
        })
        When("I click to go back", when.tapID(ids.BACK_BUTTON), async () => {
            When("I click to see Menopause Healthline", when.tapID(ids.TEXT_TEMPLATE(fixture.menopauseHealthLineItem.title)), async () => {
                Then("I am on the Menopause Healthline page", then.onCorrectWellbeingItemPage(fixture.menopauseHealthLineItem))
            })
        })
        When("I click to go back", when.tapID(ids.BACK_BUTTON), async () => {
            When("I scroll down", when.scrollFromID(ids.WELLBEING_HUB_SCROLL_VIEW, "up", "slow", 0.4), async () => {
                When("I click to see Direct Access", when.tapID(ids.TEXT_TEMPLATE(fixture.directAccessItem.title)), async () => {
                    Then("I am on the Direct Access page", then.onCorrectWellbeingItemPage(fixture.directAccessItem))
                })
            })
        })
    })

    Scenario("I can see a restricted wellbeing hub item when I fulfil the eligibility criteria", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_128_WELLBEING_ELIGIBILITY, data.AUTH_128), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                    When("I scroll to the Restricted tab", when.scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE("Restricted"), "down"), async () => {
                        Then("I should see the Restricted product on the screen", then.textVisible(data.WELLBEING_HUB_ITEM_10.data.title))
                    })
                })
            })
        })
    })

    Scenario("I cannot see a restricted wellbeing hub item when I fulfil only some of the eligibility criteria", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_129_WELLBEING_ELIGIBILITY, data.AUTH_129), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                    Then("I shouldn't see the restricted product on the screen", then.textNotVisible(data.WELLBEING_HUB_ITEM_10.data.title))
                })
            })
        })
    })

    // @update - stubs need to be updated to include all bupa wellbeing hub products for category to show
    ScenarioSkip("I can still see a category even if I do not qualify for one entry within the category", scenario.start, async () => {
        Given("I login as a grouplife user", given.loginAsUser(data.CUSTOMER_117_GHI_REWARDS, data.AUTH_117), async () => {
            When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
                When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
                    When("I click to see the Health Insurance options", when.tapText("Health Insurance"), async () => {
                        When("I scroll to the bottom", when.swipeFromText("Health Insurance", "up", "fast"), async () => {
                            Then("I should not see direct access as the employee hasn't worked there long enough", then.idNotVisible(ids.TEXT_TEMPLATE(fixture.directAccessItem.title)))
                            Then("I should not see the description for direct access either", then.textNotVisible(fixture.directAccessItem.buttonDesc))
                        })
                    })
                })
            })
        })
    })
})
