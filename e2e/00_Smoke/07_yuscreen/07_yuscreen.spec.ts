import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_1, CUSTOMER_18, AUTH_18, CUSTOMER_17, AUTH_17, AUTH_19, CUSTOMER_19, USER_18_LEADERBOARD } from "@data";
import {
    GET_STARTED_BUTTON, MALE_BODY, SKIN_TONE, VIEW_TOP_RIGHT_COIN_COUNTER, NAV_BAR, PERSONAL_PRODUCT,
    CHECK_BOX_STATE, SURVEY_SCREEN, SURVEY_TEXT_BOX, FEMALE_BODY, AVATAR_BUILDER_LIST, NO_ITEM_SELECTED, 
    HEAD_TYPE, YUSCREEN_AVATAR, YUSCREEN, YUMOJI_PODIUM, LEADERBOARD_TITLE, YUCOIN_POWER, YUSCREEN_SCROLL_VIEW, AVATAR_ITEM,
} from "@ids";


Feature("I am able to use the yuscreen, create, and edit an Yumoji", async () => {

    Scenario("I can create an Yumoji on the yuscreen for the male body", scenario.start, async () => {
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
                            Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
                            When("I tap a body type", when.tapID(MALE_BODY), async () => {
                                When("I tap continue", when.tapText("Continue"), async () => {
                                    Then("I should be on the Yumoji builder", then.onAvatarBuilder)
                                    Then("The male body should be selected", then.idVisible(HEAD_TYPE("male_head_1")))
                                    Then("I should see a skin tone", then.idVisible(SKIN_TONE("#FFC89F")))
                                    When("I tap this skin tone", when.tapColour("#FFC89F"), async () => {
                                        When("I tap the 'Hair Style' tab", when.tapTab("Hair Style"), async () => {
                                            Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                                            When("I tap a style", when.tapItem("scruffy_sidepart"), async () => {
                                                Then("This hair style should be selected", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "", ""))
                                            })
                                            When("I tap hair colour", when.tapTab("Hair Colour"), async () => {
                                                Then("I should be on the Hair Colour tab", then.textVisible("Hair Colour"))
                                                When("I tap a hair colour", when.tapColour("#212121"), async () => {
                                                    When("I tap the Facial Hair tab", when.tapTab("Facial Hair"), async () => {
                                                        Then("I should be on the Facial Hair tab", then.textVisible("Facial Hair"))
                                                        When("I tap a facial hair style", when.tapItem("fat_lumberjack"), async () => {
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
                                                        When("I select an accessory", when.tapItem("glasses_5"), async () => {
                                                            Then("This accessory should be selected", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "fat_lumberjack", "glasses_5"))
                                                        })
                                                    })
                                                })
                                                When("I tap 'Done'", when.tapText("Done"), async () => {
                                                    Then("I should be on the 'All Set' screen", then.textVisible("All Set!"))
                                                    When("I tap 'yes'", when.tapText("Yes"), async () => {
                                                        Then("I should be on the Yumoji completion screen", then.onAvatarCompletionScreen)
                                                        When("I tap 'Done' ", when.tapText("Done"), async () => {
                                                            Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_18))
                                                            Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
                                                            Then("I should see my updated coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(620)))
                                                        })
                                                    })
                                                })
                                                When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                                    Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                                                    Then("I should see my Yumoji", then.idVisible(YUMOJI_PODIUM(0)))
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

    // skipped while new yuscreen in development
    ScenarioSkip("My earn rate and employer benefits should be correct", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(), async () => {
            Then("I should be on an empty yuscreen tab", then.onEmptyYuscreen(CUSTOMER_1))
            Then("I should see 1x Yucoin power", then.swipeToID(YUSCREEN, YUCOIN_POWER("1"), "up", 3))
            When("I scroll to the bottom", when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, "Compass of Life Insurance", "down"), async () => {
                Then("I should see my Employer benefits", then.multipleTextVisible(["Company Items", "Provided by your company"]))
                Then("I should see The Compass of Group Life Insurance ", then.textVisible("Compass of Life Insurance"))
                When("I go to the earn rate", when.scrollUntilIdVisible(YUSCREEN_SCROLL_VIEW, YUCOIN_POWER("1"), "up"), async () => {
                        When("I tap the earn rate", when.tapID(YUCOIN_POWER("1")), async () => {
                            Then("I should be on the 'Your YuCoin' screen", then.onYourYuCoin)
                        })
                        When("I tap Got it!", when.tapText("Got it!"), async()=>{
                            When("I scroll to the top", when.scrollFromID(YUSCREEN, "down", "fast"), async()=>{
                                Then("I should be back on the empty yuscreen", then.onEmptyYuscreen(CUSTOMER_1))
                            })
                        })
                    })
                })
            })
        })

    Scenario("I can view my Yumoji after I login, and edit it", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(true, CUSTOMER_17, AUTH_17), async () => {
            Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see my Yumoji", then.idVisible(YUMOJI_PODIUM(1)))
                Then("I should see my coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(560)))
                When("I go back to the yuscreen", when.tapID(NAV_BAR("yu")), async () => {
                    Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
                    When("I tap the edit Yumoji button", when.tapID(YUSCREEN_AVATAR), async () => {
                        Then("I should see the 'Edit your Yumoji' screen", then.textVisible("Edit your Yumoji"))
                        When("I tap 'yes please", when.tapText("Yes Please"), async () => {
                            Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
                            When("I tap a body type", when.tapID(MALE_BODY), async () => {
                                When("I tap continue", when.tapText("Continue"), async () => {
                                    Then("I should be on the Yumoji builder", then.onAvatarBuilder)
                                    Then("The male body should be selected", then.idVisible(HEAD_TYPE("male_head_1")))
                                    When("I go to the hair style tab", when.tapTab("Hair Style"), async () => {
                                        Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                                        When("I tap a hair style", when.tapItem("scruffy_sidepart"), async () => {
                                            Then("This hair style should be selected", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "", ""))
                                        })
                                        When("I go to the facial hair tab", when.tapTab("Facial Hair"), async () => {
                                            When("I tap no facial hair", when.tapItem("emptyElement"), async () => {
                                                Then("This no facial hair should be selected", then.avatarBodyVisible("eyes_1", "scruffy_sidepart", "emptyElement", ""))
                                            })
                                            When("I tap 'Done'", when.tapText("Done"), async () => {
                                                Then("I should be on the 'All Set' screen", then.textVisible("All Set!"))
                                                When("I tap 'keep editing'", when.tapText("Keep Editing"), async () => {
                                                    Then("I should be back on the Yumoji builder", then.onAvatarBuilder)
                                                    When("I tap 'Done' ", when.tapText("Done"), async () => {
                                                        Then("I should be on the 'All Set' screen", then.textVisible("All Set!"))
                                                        When("I tap 'yes'", when.tapText("Yes"), async () => {
                                                            When("I tap done", when.tapText("Done"), async()=>{ // TEMP - THIS SHOULD NOT SHOW AS USER HAS ALREADY MADE AVATAR
                                                                Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
                                                                Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
                                                                Then("I should see the same coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(660)))
                                                                When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                                                    Then("I should see my Yumoji", then.idVisible(YUMOJI_PODIUM(1)))
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
    })

    Scenario("I can complete a survey on the yuscreen", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(true, CUSTOMER_17, AUTH_17), async () => {
            Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
            When("I tap the locked boots", when.tapID(AVATAR_ITEM("boots", "locked")), async () => {
                Then("I should be on the survey screen", then.textVisible("What Would You Like To See?"))
            })
            When("I tap an option", when.tapText("Dental insurance"), async () => {
                Then("This option should be selected", then.idVisible(CHECK_BOX_STATE("Dental insurance", true)))
            })
            When("I tap another option", when.tapText("Bicycle insurance"), async () => {
                Then("This option should be selected", then.idVisible(CHECK_BOX_STATE("Bicycle insurance", true)))
                Then("This Dental insurance should still be selected", then.idVisible(CHECK_BOX_STATE("Dental insurance", true)))
                Then("Another option should not be selected", then.idNotVisible(CHECK_BOX_STATE("Car insurance pay for usage only", false)))
            })
            When("I scroll to the bottom", when.scrollFromID(SURVEY_SCREEN, "up", "fast"), async () => {
                Then("I should see a text box", then.idVisible(SURVEY_TEXT_BOX))
            })
            When("I type in the text box", when.typeViaID(SURVEY_TEXT_BOX, "new features!"), async () => {
                Then("I should see the text I just typed", then.textVisible("new features!"))
                Then("I should see a submit button", then.textVisible("Submit"))
            })
            When("I tap this submit button", when.tapText("Submit"), async () => {
                Then("I should see a Thank You screen", then.onSurveySubmitScreen)
            })
            When("I tap Close", when.tapText("Close"), async () => {
                Then("I should be on the yuscreen", then.idVisible(AVATAR_ITEM("boots", "locked")))
            })
        })
    })

                       

    Scenario("I can create an Yumoji using the female body type", scenario.start, async () => {
        Given("I login and go to the yuscreen", given.loginToYuScreen(true, CUSTOMER_19, AUTH_19), async () => {
            Then("I should be on the yuscreen tab", then.onEmptyYuscreen(CUSTOMER_19))
            Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(450)))
            When("I tap get started", when.tapID(GET_STARTED_BUTTON), async () => {
                Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
                When("I tap a body type", when.tapID(FEMALE_BODY), async () => {
                    When("I tap continue", when.tapText("Continue"), async () => {
                        Then("I should be on the Yumoji builder", then.onAvatarBuilder)
                        Then("The female body should be selected", then.idVisible(HEAD_TYPE("female_head_1")))
                        Then("I should see a skin tone", then.idVisible(SKIN_TONE("#FFC89F")))
                        When("I tap this skin tone", when.tapColour("#FFC89F"), async () => {

                            When("I tap the 'Hair Style' tab", when.tapTab("Hair Style"), async () => {
                                Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                                When("I scroll down the list", when.scrollFromID(AVATAR_BUILDER_LIST, "up", "fast"), async () => {
                                    When("I tap a style", when.tapItem("long_sides"), async () => {
                                        Then("This hair style should be selected", then.avatarBodyVisible("eyes_1", "long_sides", "", ""))
                                    })
                                })
                                When("I tap hair colour", when.tapTab("Hair Colour"), async () => {
                                    Then("I should be on the Hair Colour tab", then.textVisible("Hair Colour"))
                                    When("I tap a hair colour", when.tapColour("#212121"), async () => {
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
                                                        When("I select an accessory", when.tapItem("emptyElement"), async () => {
                                                            Then("No accessory should be selected", then.avatarBodyVisible("eyes_1", "long_sides", "", "emptyElement"))
                                                        })
                                                    })
                                                })
                                            })
                                            When("I tap 'Done'", when.tapText("Done"), async () => {
                                                Then("I should be on the 'All Set' screen", then.textVisible("All Set!"))
                                                When("I tap 'yes'", when.tapText("Yes"), async () => {
                                                    Then("I should be on the Yumoji completion screen", then.onAvatarCompletionScreen)
                                                    When("I tap 'Done' ", when.tapText("Done"), async () => {
                                                        Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_19))
                                                        Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
                                                        Then("I should see my updated coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(550)))
                                                    })
                                                })
                                            })
                                            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                                                Then("I should see my Yumoji", then.idVisible(YUMOJI_PODIUM(2)))
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
