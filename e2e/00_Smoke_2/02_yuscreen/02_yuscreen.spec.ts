import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_2, AUTH_2, CUSTOMER_18, AUTH_18, CUSTOMER_17, AUTH_17, AUTH_19, CUSTOMER_19, USER_18_LEADERBOARD } from "@data";
import {
    GET_STARTED_BUTTON, MALE_BODY, COLOUR, VIEW_TOP_RIGHT_COIN_COUNTER, NAV_BAR,
    CHECK_BOX_STATE, SURVEY_SCREEN, SURVEY_TEXT_BOX, FEMALE_BODY,
    BODY_TYPE, YUSCREEN_AVATAR, YUSCREEN, YUMOJI_PODIUM, LEADERBOARD_TITLE, YUCOIN_POWER, TEXT_TEMPLATE, YUCOIN_TITLE, LIST_YUMOJI
} from "@ids";



Feature("I am able to use the yuscreen, create, and edit an Yumoji", async () => {
    
    Scenario("I can create an Yumoji on the yuscreen for the male body", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_18, AUTH_18), async () => {
            Then("I should be on the yuscreen tab", then.onEmptyYuscreen(CUSTOMER_18))
            Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(520)))
            When("I tap get started", when.tapID(GET_STARTED_BUTTON), async () => {
                Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
                When("I tap a body type", when.tapID(MALE_BODY), async () => {
                    When("I tap continue", when.tapText("Continue"), async () => {
                        Then("I should be on the Yumoji builder", then.onSkinToneScreen("Skin Tone"))
                        Then("The male body should be selected", then.idVisible(BODY_TYPE("male")))
                        Then("I should see a skin tone", then.idVisible(COLOUR("#FFC89F")))
                    })
                    When("I tap this skin tone", when.tapColour("#FFC89F"), async () => {
                        When("I tap the 'Hair Style' tab", when.tapTab("hairStyle"), async () => {
                            Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                            When("I tap a style", when.tapItem("scruffy_sidepart"), async () => {
                                When("I tap hair colour", when.tapTab("hairColour"), async () => {
                                    Then("I should be on the Hair Colour tab", then.textVisible("Hair Colour"))
                                    When("I tap a hair colour", when.tapColour("#212121"), async () => {
                                        When("I tap the Facial Hair tab", when.tapTab("facialHair"), async () => {
                                            Then("I should be on the Facial Hair tab", then.textVisible("Facial Hair"))
                                            When("I tap a facial hair style", when.tapItem("fat_lumberjack"), async () => {
                                                When("I tap Facial Hair Colour", when.tapTab("facialHairColour"), async () => {
                                                    Then("I should be on the Facial Hair Colour tab", then.textVisible("Facial Hair Colour"))
                                                    When("I tap a colour", when.tapColour("#2B2B2B"), async () => {
                                                        When("I tap eye colour", when.tapTab("eyeColour"), async () => {
                                                            Then("I should be on the Eye Colour tab", then.textVisible("Eye Colour"))
                                                            When("I select a colour", when.tapColour("#3C9172"), async () => {
                                                                When("I tap the accessories tab", when.tapTab("glasses"), async () => {
                                                                    Then("I should be on the Accessories tab", then.textVisible("Accessories"))
                                                                    When("I select an accessory", when.tapItem("glasses_5"), async () => {
                                                                        When("I tap 'Save'", when.tapText("Save"), async () => {
                                                                            Then("I should be on the 'Yu look great!' screen", then.textVisible("Yu look great!"))
                                                                            When("I tap 'yes'", when.tapText("Save changes"), async () => {
                                                                                Then("I should be on the Yumoji completion screen", then.onAvatarCompletionScreen)
                                                                                When("I tap 'Done' ", when.tapText("Done"), async () => {
                                                                                    Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_18))
                                                                                    Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
                                                                                    Then("I should be awarded 100 yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(620)))
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
                    // edit yumoji and should not be awarded 100 / coin balance is the same
                    When("I tap the edit Yumoji button", when.tapID(YUSCREEN_AVATAR), async () => {
                        Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
                        When("I tap a body type", when.tapID(MALE_BODY), async () => {
                            When("I tap continue", when.tapText("Continue"), async () => {
                                Then("I should be on the skin selector page builder", then.onSkinToneScreen("Skin Tone"))
                                Then("The male body should be selected", then.idVisible(BODY_TYPE("male")))
                                When("I go to the hair style tab", when.tapTab("hairStyle"), async () => {
                                    Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                                    When("I tap a hair style", when.tapItem("scruffy_sidepart"), async () => {
                                        When("I go to the facial hair tab", when.tapTab("facialHair"), async () => {
                                            When("I tap no facial hair", when.tapItem(""), async () => {
                                                When("I tap 'Save'", when.tapText("Save"), async () => {
                                                    Then("I should be on the 'Yu look great!' screen", then.textVisible("Yu look great!"))
                                                    When("I tap 'Back'", when.tapText("Back"), async () => {
                                                        Then("I should be back on the Yumoji builder", then.onFacialHairScreen("Facial Hair"))
                                                        When("I tap 'Save' ", when.tapText("Save"), async () => {
                                                            Then("I should be on the 'Yu look great!' screen", then.textVisible("Yu look great!"))
                                                            When("I tap 'Save changes'", when.tapText("Save changes"), async () => {
                                                                Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_18))
                                                                Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
                                                                Then("I should be not awarded 100 yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(620)))
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
                    When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                        Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                        Then("I should see my Yumoji", then.idVisible(YUMOJI_PODIUM(2)))
                    })
                })
            })
        })
    })



    Scenario("My earn rate and employer benefits should be correct when i have showCycling toggle on YuCoin Power screen", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(false, CUSTOMER_2, AUTH_2), async () => {
            Then("I should be on an empty yuscreen tab", then.onEmptyYuscreen(CUSTOMER_2))
            When("I scroll up slow on YU screen", when.scrollFromID(YUSCREEN, "up", "slow"), async () => {
                When("I tap the earn rate", when.tapID(YUCOIN_POWER("20")), async () => {
                    Then("I should see the correct yucoin power information", then.yuCoinPowerInfo("20", 20))
                    Then("I should all the data from the table on YuCoin Power screen", then.multipleTextVisible(["2000 steps", "1.6km cycling", "5 mindful minutes", "complete 1 challenge", "open 1 chest", "complete 1 streak"]))
                })
                When("I scroll down", when.scrollFromID(YUCOIN_TITLE, "up", "fast"), async () => {
                    When("I tap Got it!", when.tapText("Got it!"), async()=>{
                        When("I scroll down slow on YU screen", when.scrollFromID(YUSCREEN, "down", "slow"), async () => {
                            Then("I should be back on the empty yuscreen", then.onEmptyYuscreen(CUSTOMER_2))
                        })
                    })
                })
            })
        })
    })       

    Scenario("I can view my Yumoji after I login, and edit it", scenario.start, async () => {
        Given("I have done yesterday 309 steps", given.addStepsHistoricalData(10000), async () => {
            Given("I login", given.loginToYuScreen(false, CUSTOMER_17, AUTH_17), async () => {
                Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
                When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                    Then("I should see myself in the podium", then.idVisible(YUMOJI_PODIUM(1)))
                    Then("I should see my yumoji in the leaderboard at the correct rank", then.idVisible(LIST_YUMOJI(1)))
                    Then("I should see my coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(560)))
                    When("I go back to the yuscreen", when.tapID(NAV_BAR("yu")), async () => {
                        Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
                        Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
                        When("I tap tzhe edit Yumoji button", when.tapID(YUSCREEN_AVATAR), async () => {
                            Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
                            When("I proceed to edit my Yumoji", when.editYumoji("#FFC89F", "scruffy_sidepart", "#212121", "fat_lumberjack", "#2B2B2B", "#3C9172", "glasses_5"), async () => {
                                Then("I should be awarded 100 yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(660)))
                                When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                    Then("I should see myself in the podium", then.idVisible(YUMOJI_PODIUM(1)))
                                    Then("I should see my yumoji in the leaderboard at the correct rank", then.idVisible(LIST_YUMOJI(1)))                                
                                })
                            })    
                        })
                    })
                })
            })
        })
    })
    Scenario("I can complete a survey on the yuscreen", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(false, CUSTOMER_17, AUTH_17), async () => {
            Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
            When("I tap the locked boots", when.tapAvatarItem("boots", "locked"), async () => {
                Then("I should be on the survey screen", then.idVisible(SURVEY_SCREEN))
                Then("I should see the survey screen body copy", then.textVisible("We’d love to take your feedback onboard. Out of the following, which would you like to see covered?"))
            })
            When("I tap an option", when.tapText("Dental insurance"), async () => {
                Then("This option should be selected", then.idVisible(CHECK_BOX_STATE("Dental insurance", true)))
            })
            When("I tap another option", when.tapText("Bicycle insurance"), async () => {
                Then("This option should be selected", then.idVisible(CHECK_BOX_STATE("Bicycle insurance", true)))
                Then("This Dental insurance should still be selected", then.idVisible(CHECK_BOX_STATE("Dental insurance", true)))
                Then("Another option should not be selected", then.idNotVisible(CHECK_BOX_STATE("Car insurance pay for usa", false)))
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
                Then("I should be on the yuscreen", then.avatarItemVisible("boots", "locked"))
            })
        })
    })

                       

    Scenario("I can create an Yumoji using the female body type", scenario.start, async () => {
        Given("I login and go to the yuscreen", given.loginToYuScreen(false, CUSTOMER_19, AUTH_19), async () => {
            Then("I should be on the yuscreen tab", then.onEmptyYuscreen(CUSTOMER_19))
            Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(450)))
            When("I tap get started", when.tapID(GET_STARTED_BUTTON), async () => {
                Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
                When("I tap a body type", when.tapID(FEMALE_BODY), async () => {
                    When("I tap continue", when.tapText("Continue"), async () => {
                        Then("I should be on the skin tone screen", then.onSkinToneScreen("Skin Tone"))
                        Then("The male body should be selected", then.idVisible(BODY_TYPE("female")))
                        Then("I should see a skin tone", then.idVisible(COLOUR("#FFC89F")))
                        When("I tap this skin tone", when.tapColour("#FFC89F"), async () => {
                            When("I tap the 'Hair Style' tab", when.tapTab("hairStyle"), async () => {
                                Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                                When("I tap a style", when.tapItem("long_sides"), async () => {
                                    When("I tap hair colour", when.tapTab("hairColour"), async () => {
                                        Then("I should be on the Hair Colour tab", then.textVisible("Hair Colour"))
                                        When("I tap a hair colour", when.tapColour("#212121"), async () => {
                                            When("I tap the Facial Hair tab", when.tapTab("facialHair"), async () => {
                                                Then("I should be on the Facial Hair tab", then.textVisible("Facial Hair"))
                                                When("I tap a facial hair style", when.tapItem(""), async () => {
                                                    When("I tap Facial Hair Colour", when.tapTab("facialHairColour"), async () => {
                                                        Then("I should see the empty tab", then.textVisible("No need to select facial hair colour if you haven’t selected any facial hair."))
                                                        When("I tap eye colour", when.tapTab("eyeColour"), async () => {
                                                            Then("I should be on the Eye Colour tab", then.textVisible("Eye Colour"))
                                                            When("I select a colour", when.tapColour("#3C9172"), async () => {
                                                                When("I tap the accessories tab", when.tapTab("glasses"), async () => {
                                                                    Then("I should be on the Accessories tab", then.textVisible("Accessories"))
                                                                    When("I select an accessory", when.tapItem("glasses_3"), async () => {
                                                                        When("I tap 'Save'", when.tapText("Save"), async () => {
                                                                            Then("I should be on the 'Yu look great!' screen", then.textVisible("Yu look great!"))
                                                                            When("I tap 'yes'", when.tapText("Save changes"), async () => {
                                                                                Then("I should be on the Yumoji completion screen", then.onAvatarCompletionScreen)
                                                                                When("I tap 'Done' ", when.tapText("Done"), async () => {
                                                                                    Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_19))
                                                                                    Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
                                                                                    Then("I should be awarded 100 yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(550)))
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
                })
            })
        })
    })
})
