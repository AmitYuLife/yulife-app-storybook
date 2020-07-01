import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly } from "@bdd";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_1, CUSTOMER_18, AUTH_18, CUSTOMER_17, AUTH_17, USER_17, AUTH_19, CUSTOMER_19 } from "_utils/data/stubs";
import {
    GET_STARTED_BUTTON, MALE_BODY, SKIN_TONE, VIEW_TOP_RIGHT_COIN_COUNTER, NAV_BAR, PERSONAL_PRODUCT,
    CHECK_BOX_STATE, SURVEY_SCREEN, SURVEY_TEXT_BOX, FEMALE_BODY, AVATAR_BUILDER_LIST, NO_ITEM_SELECTED, HEAD_TYPE, YUSCREEN_AVATAR, EARN_RATE_BUTTON
} from "@ids";


Feature("I am able to use the yuscreen, create, and edit an avatar", async () => {


    Scenario("I can create an avatar on the yuscreen for the male body", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_18, AUTH_18), async () => {
            Then("I should see the intro screen", then.textVisible("Design your own Yumoji"))
            When("I tap next", when.tapText("Next"), async () => {
                Then("I should see the stay protected screen", then.textVisible("Stay protected"))
                When("I tap next", when.tapText("Next"), async () => {
                    Then("I should see the Power up screen", then.textVisible("Power up your YuCoin"))
                    When("I tap Let's go", when.tapText("Let's go"), async () => {
                        Then("I should be on the yuscreen tab", then.onEmptyYuscreen(CUSTOMER_18))
                        Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(520)))
                        When("I tap get started", when.tapID(GET_STARTED_BUTTON), async () => {
                            Then("I should be on the create avatar screen", then.onCreateAvatarScreen)
                            When("I tap a body type", when.tapID(MALE_BODY), async () => {
                                When("I tap continue", when.tapText("Continue"), async () => {
                                    Then("I should be on the avatar builder", then.onAvatarBuilder)
                                    Then("The male body should be selected", then.idVisible(HEAD_TYPE("male_head_1")))
                                    Then("I should see a skin tone", then.idVisible(SKIN_TONE("#f4cca7")))
                                    When("I tap this skin tone", when.tapColour("#f4cca7"), async () => {
                                        When("I tap the 'Hair Style' tab", when.tapTab("Hair Style"), async () => {
                                            Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                                            When("I tap a style", when.tapItem(5), async () => {
                                                Then("This hair style should be selected", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "", ""))
                                            })
                                            When("I tap hair colour", when.tapTab("Hair Colour"), async () => {
                                                Then("I should be on the Hair Colour tab", then.textVisible("Hair Colour"))
                                                When("I tap a hair colour", when.tapColour("#212121"), async () => {
                                                    When("I tap the Facial Hair tab", when.tapTab("Facial Hair"), async () => {
                                                        Then("I should be on the Facial Hair tab", then.textVisible("Facial Hair"))
                                                        When("I tap a facial hair style", when.tapItem(5), async () => {
                                                            Then("This facial hair style should be selected", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "fat_lumberjack", ""))
                                                        })
                                                        When("I tap Facial Hair Colour", when.tapTab("Facial Hair Colour"), async () => {
                                                            Then("I should be on the Facial Hair Colour tab", then.textVisible("Facial Hair Colour"))
                                                            When("I tap a colour", when.tapColour("#2B2B2B"), async () => {
                                                            })
                                                        })
                                                    })
                                                    When("I tap eye colour", when.tapTab("Eye Colour"), async () => {
                                                        Then("I should be on the Eye Colour tab", then.textVisible("Eye Colour"))
                                                        When("I select a colour", when.tapColour("#3C9172"), async () => {
                                                        })
                                                    })
                                                    When("I tap the accessories tab", when.tapTab("Accessories"), async () => {
                                                        Then("I should be on the Accessories tab", then.textVisible("Accessories"))
                                                        When("I select an accessory", when.tapItem(3), async () => {
                                                            Then("This accessory should be selected", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "fat_lumberjack", "glasses_5"))
                                                        })
                                                    })
                                                })
                                                When("I tap 'Done'", when.tapText("Done"), async () => {
                                                    Then("I should be on the 'All Set' screen", then.textVisible("All Set!"))
                                                    When("I tap 'yes'", when.tapText("Yes"), async () => {
                                                        Then("I should be on the avatar completion screen", then.onAvatarCompletionScreen)
                                                        When("I tap 'Done' ", when.tapText("Done"), async () => {
                                                            Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_18))
                                                            Then("I should see my avatar", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "fat_lumberjack", "glasses_5"))
                                                            Then("I should see my updated coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(620)))
                                                        })
                                                    })
                                                })
                                                When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                                    Then("I should be on the leaderboard", then.textVisible("Lb1"))
                                                    Then("I should see my avatar", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "fat_lumberjack", "glasses_5"))
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

    Scenario("My earn rate and employer benefits should be correct", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(), async () => {
            Then("I should be on an empty yuscreen tab", then.onEmptyYuscreen(CUSTOMER_1))
            Then("I should see 10x Earn Rate", then.idVisible(EARN_RATE_BUTTON(10)))
            When("I scroll to the bottom", when.scrollFromText("Personal Protection", "up", "fast"), async () => {
                Then("I should see my Employer benefits", then.textVisible("Employer Benefits"))
                Then("I should see Life Insurance", then.textVisible("Life Insurance"))
                When("I tap the earn rate", when.tapID(EARN_RATE_BUTTON(10)), async () => {
                    Then("I should be on the 'Your YuCoin' screen", then.onYourYuCoin)
                })
            })
        })
    })

    Scenario("I can view my avatar after I login, and edit it", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(true, CUSTOMER_17, AUTH_17), async () => {
            Then("I should see my avatar", then.avatarBodyVisibleWithUser(USER_17))
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see my avatar", then.avatarBodyVisibleWithUser(USER_17))
                Then("I should see my coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(460)))
                When("I go back to the yuscreen", when.tapID(NAV_BAR("yu")), async () => {
                    Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
                    When("I tap the edit avatar button", when.tapID(YUSCREEN_AVATAR), async () => {
                        Then("I should see the 'Edit your avatar' screen", then.textVisible("Edit your avatar"))
                        When("I tap 'yes please", when.tapText("Yes Please"), async () => {
                            Then("I should be on the create avatar screen", then.onCreateAvatarScreen)
                            When("I tap a body type", when.tapID(MALE_BODY), async () => {
                                When("I tap continue", when.tapText("Continue"), async () => {
                                    Then("I should be on the avatar builder", then.onAvatarBuilder)
                                    Then("The male body should be selected", then.idVisible(HEAD_TYPE("male_head_1")))
                                    When("I go to the hair style tab", when.tapTab("Hair Style"), async () => {
                                        Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                                        When("I tap a hair style", when.tapItem(5), async () => {
                                            Then("This hair style should be selected", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "cowboy_moustache", ""))
                                        })
                                        When("I go to the facial hair tab", when.tapTab("Facial Hair"), async () => {
                                            When("I tap no facial hair", when.tapItem(0), async () => {
                                                Then("This no facial hair should be selected", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "emptyElement", ""))
                                            })
                                            When("I tap 'Done'", when.tapText("Done"), async () => {
                                                Then("I should be on the 'All Set' screen", then.textVisible("All Set!"))
                                                When("I tap 'keep editing'", when.tapText("Keep Editing"), async () => {
                                                    Then("I should be back on the avatar builder", then.onAvatarBuilder)
                                                    When("I tap 'Done' ", when.tapText("Done"), async () => {
                                                        Then("I should be on the 'All Set' screen", then.textVisible("All Set!"))
                                                        When("I tap 'yes'", when.tapText("Yes"), async () => {
                                                            Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
                                                            Then("I should see my avatar", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "emptyElement", ""))
                                                            Then("I should see the same coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(460)))
                                                            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                                                Then("I should see my avatar", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "", ""))
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

    Scenario("I can complete a survey on the yuscreen", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(true, CUSTOMER_17, AUTH_17), async () => {
            Then("I should see my avatar", then.avatarBodyVisibleWithUser(USER_17))
            Then("I should see a list of 'Coming Soon' options", then.personalProductsVisible)
            When("I tap the gloves", when.tapID(PERSONAL_PRODUCT("LifeInsurance")), async () => {
                Then("I should be on the survey screen", then.onSurveyScreen)
                Then("I should a dental insurance option, and it should not be selected", then.idVisible(CHECK_BOX_STATE("Dental insurance", false)))
                When("I tap an option", when.tapText("Dental insurance"), async () => {
                    Then("This option should be selected", then.idVisible(CHECK_BOX_STATE("Dental insurance", true)))
                    When("I tap another option", when.tapText("Bicycle insurance"), async () => {
                        Then("This option should be selected", then.idVisible(CHECK_BOX_STATE("Bicycle insurance", true)))
                        Then("This Dental insurance should still be selected", then.idVisible(CHECK_BOX_STATE("Dental insurance", true)))
                        Then("Another option should not be selected", then.idNotVisible(CHECK_BOX_STATE("Car insurance (pay for usage only", false)))
                    })
                    When("I scroll to the bottom", when.scrollFromID(SURVEY_SCREEN, "up", "fast"), async () => {
                        Then("I should see a text box", then.idVisible(SURVEY_TEXT_BOX))
                        When("I type in the text box", when.typeViaID(SURVEY_TEXT_BOX, "new features!"), async () => {
                            Then("I should see the text I just typed", then.textVisible("new features!"))
                        })
                        Then("I should see a submit button", then.textVisible("Submit"))
                        When("I tap this submit button", when.tapText("Submit"), async () => {
                            Then("I should see a Thank You screen", then.onSurveySubmitScreen)
                            When("I tap Close", when.tapText("Close"), async () => {
                                Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
                                Then("I should see my avatar", then.avatarBodyVisibleWithUser(USER_17))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can create an avatar using the female body type", scenario.start, async () => {
        Given("I login and go to the yuscreen", given.loginToYuScreen(true, CUSTOMER_19, AUTH_19), async () => {
            Then("I should be on the yuscreen tab", then.onEmptyYuscreen(CUSTOMER_19))
            Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
            When("I tap get started", when.tapID(GET_STARTED_BUTTON), async () => {
                Then("I should be on the create avatar screen", then.onCreateAvatarScreen)
                When("I tap a body type", when.tapID(FEMALE_BODY), async () => {
                    When("I tap continue", when.tapText("Continue"), async () => {
                        Then("I should be on the avatar builder", then.onAvatarBuilder)
                        Then("The female body should be selected", then.idVisible(HEAD_TYPE("female_head_1")))
                        Then("I should see a skin tone", then.idVisible(SKIN_TONE("#f4cca7")))
                        When("I tap this skin tone", when.tapColour("#f4cca7"), async () => {

                            When("I tap the 'Hair Style' tab", when.tapTab("Hair Style"), async () => {
                                Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                                When("I scroll down the list", when.scrollFromID(AVATAR_BUILDER_LIST, "up", "fast"), async () => {
                                    When("I tap a style", when.tapItem(50), async () => {
                                        Then("This hair style should be selected", then.avatarBodyVisible("eyes_1", "long_sides", "", ""))
                                    })
                                })
                                When("I tap hair colour", when.tapTab("Hair Colour"), async () => {
                                    Then("I should be on the Hair Colour tab", then.textVisible("Hair Colour"))
                                    When("I tap a hair colour", when.tapColour("#F5C383"), async () => {
                                        When("I tap the Facial Hair tab", when.tapTab("Facial Hair"), async () => {
                                            Then("I should be on the Facial Hair tab", then.textVisible("Facial Hair"))
                                            When("I tap Facial Hair Colour", when.tapTab("Facial Hair Colour"), async () => {
                                                Then("I should be on the Facial Hair Colour tab", then.textVisible("Facial Hair Colour"))
                                                Then("I should see the correct copy as I have not chosen facial hair", then.idVisible(NO_ITEM_SELECTED))
                                                Then("No facial hair should be selected", then.avatarBodyVisible("eyes_1", "long_sides", "", ""))
                                            })
                                            When("I tap eye colour", when.tapTab("Eye Colour"), async () => {
                                                Then("I should be on the Eye Colour tab", then.textVisible("Eye Colour"))
                                                When("I select a colour", when.tapColour("#2273AF"), async () => {
                                                    When("I tap the accessories tab", when.tapTab("Accessories"), async () => {
                                                        Then("I should be on the Accessories tab", then.textVisible("Accessories"))
                                                        When("I select an accessory", when.tapItem(0), async () => {
                                                            Then("No accessory should be selected", then.avatarBodyVisible("eyes_1", "long_sides", "", "emptyElement"))
                                                        })
                                                    })
                                                })
                                            })
                                            When("I tap 'Done'", when.tapText("Done"), async () => {
                                                Then("I should be on the 'All Set' screen", then.textVisible("All Set!"))
                                                When("I tap 'yes'", when.tapText("Yes"), async () => {
                                                    Then("I should be on the avatar completion screen", then.onAvatarCompletionScreen)
                                                    When("I tap 'Done' ", when.tapText("Done"), async () => {
                                                        Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_19))
                                                        Then("I should see my avatar", then.avatarBodyVisible("eyes_1", "long_sides", "", "emptyElement"))
                                                        Then("I should see my updated coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(300)))
                                                    })
                                                })
                                            })
                                            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                                Then("I should be on the leaderboard", then.textVisible("Lb1"))
                                                Then("I should see my avatar", then.avatarBodyVisible("eyes_1", "long_sides", "", ""))
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
