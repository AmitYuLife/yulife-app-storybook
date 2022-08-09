import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_1,CUSTOMER_2, AUTH_2, CUSTOMER_18, AUTH_18, CUSTOMER_17, AUTH_17, AUTH_19, CUSTOMER_43, AUTH_43, CUSTOMER_44, AUTH_44, CUSTOMER_19, USER_18_LEADERBOARD, CUSTOMER_45, AUTH_45, CUSTOMER_46, AUTH_46 } from "@data";
import {
    GET_STARTED_BUTTON, MALE_BODY, COLOUR, VIEW_TOP_RIGHT_COIN_COUNTER, NAV_BAR, PERSONAL_PRODUCT,
    CHECK_BOX_STATE, SURVEY_SCREEN, SURVEY_TEXT_BOX, FEMALE_BODY, AVATAR_BUILDER_LIST, NO_ITEM_SELECTED, 
    BODY_TYPE, YUSCREEN_AVATAR, YUSCREEN, YUMOJI_PODIUM, LEADERBOARD_TITLE, YUCOIN_POWER, YUSCREEN_SCROLL_VIEW, AVATAR_ITEM, TEXT_TEMPLATE, YUCOIN, YUCOIN_POWER_INFO, YUMOJI_AVATAR_YUSCREEN_V4, YUSCREEN_V4, BUTTON_CLOSE
} from "@ids";
import * as helper from "./_steps/helpers"



Feature("I am able to use the yuscreen, create, and edit an Yumoji", async () => {
    
    Scenario("I can create an Yumoji on the yuscreen for the male body", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_18, AUTH_18), async () => {
            Then("I should be on the yuscreen tab", then.onEmptyYuscreen(CUSTOMER_18))
            Then("I should see my coin balance in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(520)))
            When("I tap get started", when.tapID(GET_STARTED_BUTTON), async () => {
                Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
                When("I tap a body type", when.tapID(MALE_BODY), async () => {
                    When("I tap continue", when.tapText("Continue"), async () => {
                        Then("I should be on the Yumoji builder", then.onAvatarBuilder("Skin Tone"))
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
                        Then("I should see the 'Edit your Yumoji' screen", then.textVisible("Edit your Yumoji"))
                        Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
                        When("I tap a body type", when.tapID(MALE_BODY), async () => {
                            When("I tap continue", when.tapText("Continue"), async () => {
                                Then("I should be on the Yumoji builder", then.onAvatarBuilder("Skin Tone"))
                                Then("The male body should be selected", then.idVisible(BODY_TYPE("male")))
                                When("I go to the hair style tab", when.tapTab("hairStyle"), async () => {
                                    Then("I should be on the Hair Style tab", then.textVisible("Hair Style"))
                                    When("I tap a hair style", when.tapItem("scruffy_sidepart"), async () => {
                                        When("I go to the facial hair tab", when.tapTab("facialHair"), async () => {
                                            When("I tap no facial hair", when.tapItem(""), async () => {
                                                When("I tap 'Save'", when.tapText("Save"), async () => {
                                                    Then("I should be on the 'Yu look great!' screen", then.textVisible("Yu look great!"))
                                                    When("I tap 'Back'", when.tapText("Back"), async () => {
                                                        Then("I should be back on the Yumoji builder", then.onAvatarBuilder("Facial Hair"))
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
                        Then("I should see my Yumoji", then.idVisible(YUMOJI_PODIUM(0)))
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
                    Then("I should see h2 header text YuCoin Power", then.idVisible(TEXT_TEMPLATE("YuCoin Power")))
                    Then("I should all the data from the table on YuCoin Power screen", then.multipleTextVisible(["2000 steps","1.6 km cycling","5 mindful mins","1 challenge","Chests","Streaks"]))
                })
                When("I tap Got it!", when.tapText("Got it!"), async()=>{
                    When("I scroll down slow on YU screen", when.scrollFromID(YUSCREEN, "down", "slow"), async () => {
                        Then("I should be back on the empty yuscreen", then.onEmptyYuscreen(CUSTOMER_2))
                    })
                })
            })
        })
    })       

    Scenario("I can view my Yumoji after I login, and edit it", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(false, CUSTOMER_17, AUTH_17), async () => {
            Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see my Yumoji", then.idVisible(YUMOJI_PODIUM(1)))
                Then("I should see my coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(560)))
                When("I go back to the yuscreen", when.tapID(NAV_BAR("yu")), async () => {
                    Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
                    Then("I should be on the yuscreen", then.onYuscreen(CUSTOMER_17))
                    Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
                    When("I tap the edit Yumoji button", when.tapID(YUSCREEN_AVATAR), async () => {
                        Then("I should see the 'Edit your Yumoji' screen", then.textVisible("Edit your Yumoji"))
                        When("I proceed to edit my Yumoji", when.editYumoji("#FFC89F", "scruffy_sidepart", "#212121", "fat_lumberjack", "#2B2B2B", "#3C9172", "glasses_5"), async () => {
                            Then("I should be awarded 100 yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(660)))
                            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                Then("I should see my Yumoji", then.idVisible(YUMOJI_PODIUM(1)))
                            })
                        })    
                    })
                })
            })
        })
    })
    // Skipping due to survey title needing to be changed
    ScenarioSkip("I can complete a survey on the yuscreen", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(true, CUSTOMER_17, AUTH_17), async () => {
            Then("I should see my Yumoji", then.idVisible(YUSCREEN_AVATAR))
            When("I tap the locked boots", when.tapAvatarItem("boots", "locked"), async () => {
                Then("I should be on the survey screen", then.textVisible("What Would You Like To See?"))
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
                        Then("I should be on the Yumoji builder", then.onAvatarBuilder("Skin Tone"))
                        Then("The male body should be selected", then.idVisible(BODY_TYPE("female")))
                        Then("I should see a skin tone", then.idVisible(COLOUR("#FFC89F")))
                    })
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

    Scenario("I can create my Yumoji on new Yuscreen V4 and see no product state", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_43, AUTH_43), async () => {
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_43, "wellbeing only", "10"))
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.YUCOIN_POWER(CUSTOMER_43, "10")
            helper.WELLBEING_PRODUCT_VIEW("Epic", "10")
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4 and navigate to products via slots and carousel", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_44, AUTH_44), async () => {
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_44, "dentalAndPli", "5"))
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.YUCOIN_POWER(CUSTOMER_44, "5")
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("0 product live")
            helper.CHECK_PRODUCT_BUTTON_LINK("Dental insurance", "Dental Insurance");
            helper.CHECK_PRODUCT_BUTTON_LINK("Life insurance", "Personal Life Insurance");
            helper.CHECK_CAROUSEL_BUTTON_LINK("right", "From £12.99 per month", "Dental Insurance");
            helper.CHECK_CAROUSEL_BUTTON_LINK("left", "Extend your life insurance", "Personal Life Insurance");
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4, and see the exclamation point near the product i have (payment failed)", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_45, AUTH_45), async () => {
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_45, "dentalActiveAndPliInactive", "6" ))
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.PAYMENT_FAILED()
            helper.CHECK_OTHER_PRODUCT_WHEN_HAVE_PAYMENT_FAILED("Life insurance")
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("dental only")
            helper.DENTAL_PRODUCT_VIEW("Epic", "0321")
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4, having rejected product PLI, should see the correct slots and carousel", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_46, AUTH_46), async () => {
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_46, "PliRejectedAndDentalInactive", "5" ))
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("0 product live")
            helper.REJECTED("Answers")
            helper.CHECK_PRODUCT_BUTTON_LINK("Dental insurance", "Dental Insurance");
        })
    })
})
