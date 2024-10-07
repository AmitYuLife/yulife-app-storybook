import { Feature, Scenario, Given, When, Then, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as consts from "./_resources/consts";
import * as ids from "@ids";
import { getLocalisedString as t } from "@i18n";
import { translations } from "@app/locale/translations";

Feature("As a user I can navigate through member routes correctly", async () => {
    Scenario("I can view the core screens of the app", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(), async () => {
            Then("I should see the daily steps screen", then.onDailySteps())
            When("I tap quests in the tab", when.tapID(ids.NAV_BAR("quests")), async () => {
                Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)))
            })
            When("I tap leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
                Then("I should see that a leaderboard has not been set yet", then.checkCopyNoLeaderboard)
            })
            When("I tap rewards", when.tapID(ids.NAV_BAR("rewards")), async () => {
                When("I confirm my location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 1500), async() => {
                    Then("I should be on rewards", then.idVisible(ids.REWARDS_SCREEN, 1500))
                })
            })
        })
    })

    Scenario("I can view the menu screens in the app", scenario.start, async () => {
        When("I have done yesterday 309 steps", given.addStepsHistoricalData(309), async () => {
            When("I have done yesterday Biking 11.3 km", given.addCyclingHistoricalData(11345), async () => {
                When("I have done yesterday 13:20 min Mindfulness", given.addMindfulnessHistoricalData(800), async () => {
                    Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1), async () => {
                        Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500))
                    })
                })
            })
        })
        When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 3000), async () => {
            Then("I should see the menu items", then.menuItemsVisible("enhanced"))
        })
        When("I tap activity history", when.tapMenuItem(t("Activity History")), async () => {
            Then("I should be on activity history", then.textVisible("Activity history"))
            Then("I should see 309 steps", then.idVisible(ids.ACTIVITY_HISTORY_CHALLENGE_VALUE("309 Steps")))
            Then("I should see 309 phone steps", then.idVisible(ids.ACTIVITY_HISTORY_CHALLENGE_VALUE("Phone: 309 Steps")))
            Then("I should see 13:20 mindful mins", then.idVisible(ids.ACTIVITY_HISTORY_CHALLENGE_VALUE("11.3 km Cycling")))
            Then("I should see 11.3 km cycled", then.idVisible(ids.ACTIVITY_HISTORY_CHALLENGE_VALUE("13 Mindful mins")))
        })
        When("I go back", when.tapID(ids.BUTTON_CLOSE_HEADER("Activity history")), async () => {
            Then("I should be the yucoin tab", then.onDailySteps())
        })
        When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible("enhanced"))
        })
        When("I tap settings", when.tapMenuItem(t("Settings")), async () => {
            Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500))
        })
        When("I scroll down", when.scrollFromID(ids.SETTINGS_SCREEN, "up", "fast"), async () => {
            Then("I should see Activity permissions", then.idVisible(ids.TEXT_TEMPLATE("Activity permissions")))
            Then("I should see 'Status and management of account and system level permissions.'", then.idVisible(ids.TEXT_TEMPLATE("Status and management of account and system level permissions.")))
        })
        When("I tap permissions settings", when.tapIDAtIndex(ids.ARROW_BUTTON, 1), async () => {
            Then("I should be on permission page", then.onPermissionsPage("not_determined"))
        })
        When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
            When("I scroll up", when.scrollFromID(ids.TEXT_TEMPLATE(t("Activity permissions")), "down", "fast"), async () => {
                Then("I should see Challenge completion", then.idVisible(ids.SETTINGS_NAME("Challenge completion")))
                Then("I should see 'Notify me when I have completed a challenge'", then.idVisible(ids.SETTINGS_DESC("Notify me when I have completed a challenge.")))
            })
        })
        When("I tap on the Challenge completion switch", when.tapID(ids.SETTINGS_SWITCH(t("Challenge completion"), true)), async () => {
            Then("the switch should be off", then.idVisible(ids.SETTINGS_SWITCH("Challenge completion", false)))
        })
        When("I tap on the Challenge completion switch", when.tapID(ids.SETTINGS_SWITCH(t("Challenge completion"), false)), async () => {
            Then("the switch should be on", then.idVisible(ids.SETTINGS_SWITCH("Challenge completion", true)))
            Then("I should see Duels", then.idVisible(ids.SETTINGS_NAME("Duels")))
            Then("I should see 'Notify me when someone challenges me to a Duel, and when the results are in'", then.idVisible(ids.SETTINGS_DESC("Notify me when someone challenges me to a Duel, and when the results are in.")))
        })
        When("I tap on the Duels switch", when.tapID(ids.SETTINGS_SWITCH(t("Duels"), true)), async () => {
            Then("the switch should be off", then.idVisible(ids.SETTINGS_SWITCH("Duels", false)))
        })
        When("I tap on the Duels switch", when.tapID(ids.SETTINGS_SWITCH(t("Duels"), false)), async () => {
            Then("the switch should be on", then.idVisible(ids.SETTINGS_SWITCH("Duels", true)))
            Then("I should see Surges", then.idVisible(ids.SETTINGS_NAME("Surges")))
            Then("I should see 'Notify me when there is a YuCoin surge'", then.idVisible(ids.SETTINGS_DESC("Notify me when there is a YuCoin surge.")))
        })
        When("I tap on the Surges switch", when.tapID(ids.SETTINGS_SWITCH(t("Surges"), true)), async () => {
            Then("the switch should be off", then.idVisible(ids.SETTINGS_SWITCH("Surges", false)))
        })
        When("I tap on the Surges switch", when.tapID(ids.SETTINGS_SWITCH(t("Surges"), false)), async () => {
            Then("the switch should be on", then.idVisible(ids.SETTINGS_SWITCH("Surges", true)))
            Then("I should see Marketing updates", then.idVisible(ids.SETTINGS_NAME("Marketing updates")))
            Then("I should see 'Notify me about general YuLife marketing campaigns'", then.idVisible(ids.SETTINGS_DESC("Notify me about general YuLife marketing campaigns.")))
        })
        When("I tap on the Marketing updates switch", when.tapID(ids.SETTINGS_SWITCH(t("Marketing updates"), true)), async () => {
            Then("the switch should be off", then.idVisible(ids.SETTINGS_SWITCH("Marketing updates", false)))
        })
        When("I tap on the Marketing updates switch", when.tapID(ids.SETTINGS_SWITCH(t("Marketing updates"), false)), async () => {
            Then("the switch should be on", then.idVisible(ids.SETTINGS_SWITCH("Marketing updates", true)))
        })
        When("I go back", when.tapID(ids.BUTTON_CLOSE_HEADER(t("Settings"))), async () => {
            Then("I should be the yucoin tab", then.onDailySteps())
        })
        When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible("enhanced"))
        })
    })

    Scenario("I can talk to yulife via intercom", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500))
            When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 1500), async () => {
                Then("I should see the menu items", then.menuItemsVisible("enhanced"))
                When("I tap chat", when.tapMenuItem(t("Chat")), async () => {
                    Then("I should see the notification request, as I have not allowed this permission", then.idVisible(ids.GENERIC_SCREEN_HEADING("notification")))
                    When("I tap skip", when.tapID(ids.GENERIC_SCREEN_CTA(t("skip"))), async () => {
                        Then("I should see intercom", then.textVisible("Send us a message"))
                    })
                })
            })

        })
    })

    Scenario("I can open a support request if my supportLevel is basic", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_13, data.AUTH_13), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500))
            When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 1500), async () => {
                Then("I should see the menu items", then.menuItemsVisible("basic"))
                When("I tap chat", when.tapMenuItem(t("Support")), async () => {
                    Then("I should see the notification request, as I have not allowed this permission", then.idVisible(ids.GENERIC_SCREEN_HEADING("notification")))
                    When("I tap skip", when.tapID(ids.GENERIC_SCREEN_CTA(t("skip"))), async () => {
                        Then("I should see the support request form", then.buttonVisible("Send message"))
                    })
                })
            })

        })
    })

    Scenario("I can view all the reward screens", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_4, data.AUTH_4), async () => {
            When("I go to rewards", when.tapID(ids.NAV_BAR("rewards")), async () => {
                Then("I should see the modal to select store location", then.rewardsLocationModalVisible)
            })
        })
        When("I confirm my location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 1500), async() => {
            Then("I should see a John Lewis reward", then.rewardVisible(data.CORE_REWARDS_JOHN_LEWIS))
            Then("I should see a locked reward", then.lockedRewardVisible(data.CORE_REWARDS_BLOOM_UNAVAILABLE))
            Then("I should see the Purchased tab", then.idVisible(ids.PURCHASED_TAB_BUTTON, 1500))
        })
        When("I tap the Purchased tab", when.tapID(ids.PURCHASED_TAB_BUTTON, 1000), async () => {
            When("I wait", when.wait(2500), async () => {
                Then("the tab should be in an empty state, as I have not purchases anything", then.idVisible(ids.CHECK_REWARDS_BUTTON, 1500))
            })
        })
        When("I tap 'check rewards", when.tapID(ids.CHECK_REWARDS_BUTTON), async () => {
            Then("I should be back on the rewards tab", then.idVisible(ids.REWARDS_SCREEN))
        })
    })


    Scenario("I can view quest screens", scenario.start, async () => {
        Given("I login", given.loginAsUser(data.CUSTOMER_4, data.AUTH_4), async () => {
            When("I go to quests", when.tapID(ids.NAV_BAR("quests")), async () => {
                Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(0)))
            })
        })
        When("I tap the locked level 4 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(4)), async () => {
            Then("I should see a popup telling me I will unlock this at level 4", then.textVisible("Unlock at level 4"))
        })
        When("I tap 'got it'", when.tapText(t("Got it")), async () => {
            Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(0)))
        })
        When("I tap the unlocked level 3 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(3)), async () => {
            Then("I should be on the level 3 quest screen", then.idVisible(ids.CHALLENGE_SET))
            Then("I should see an unlocked challenge", then.idVisible(ids.CHALLENGE_TILE("Meditation")))
        })
        When("I tap the meditation challenge", when.tapID(ids.CHALLENGE_TILE(t("Meditation"))), async () => {
            Then("I should see a screen with a take challenge option", then.textVisible("Take challenge"))
        })
        When("I tap 'take challenge'", when.tapText(t("Take challenge")), async () => {
            When("I click Use Meditopia app", when.tapText(t('Use Meditopia app')), async () => {
                When("I dismiss this screen", when.dismissNotificationScreenIfVisible, async () => {
                    Then("I should be on the challenge screen", then.idVisible(ids.CHALLENGE_PROGRESS_BAR))
                })
            })
        })
        When("I close this screen", when.tapID(ids.BUTTON_CLOSE_CHALLENGE), async () => {
            Then("I should see an exit challenge screen", then.multipleTextVisible(["Call it quits?", "Cancel", "Exit challenge"]))
        })
        When("I tap Cancel", when.tapText(t("Cancel")), async () => {
            Then("I should be back on the challenge screen", then.idVisible(ids.CHALLENGE_PROGRESS_BAR))
        })
        When("I close this screen again and exit the challenge", [when.tapID(ids.BUTTON_CLOSE_CHALLENGE), when.tapText("Exit challenge")], async () => {
            Then("I should be back on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)))
        })
    })

    Scenario("I should see my yumoji and streak coins in activity history", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_5, data.AUTH_5), async () => {
            When("I tap the menu icon", when.tapID(ids.MENU_ICON, 1500), async () => {
                Then("I should see the menu items", then.menuItemsVisible("enhanced"))
            })
            When("I tap activity history", when.tapMenuItem(t("Activity History")), async () => {
                Then("I should be on the activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500))
                Then("I should see the yucoin for completing a streak", then.multipleTextVisible(["Completing a streak", "400"]))
                Then("I should see the yucoin for creating a yumoji", then.multipleTextVisible(["Creating your Yumoji", "100"]))
            })
        })
    })

    Scenario("I can see Status Permissions not_determined if have not done any activity", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1, true), async () => {
            When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 1500), async () => {
                When("I tap settings", when.tapMenuItem(t("Settings")), async () => {
                    Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500))
                })
            })
            When("I scroll down", when.scrollUntilTextVisible(ids.SETTINGS_SCREEN_SCROLL, t("Fitness trackers"), "down"), async () => {
                Then("I should see the right settings details", then.permissionsActivityRightVisible)
            })
            When("I tap permissions settings", when.tapIDAtIndex(ids.ARROW_BUTTON, 1), async () => {
                Then("I should be on permission page", then.onPermissionsPage("not_determined"))
            })
        })
    })

    Scenario("I can see Apple Health permission case authorised when have activity done ", scenario.start, async () => {
        When("I have done yesterday 309 steps", given.addStepsHistoricalData(309), async () => {
            When("I have done yesterday Biking 11.3 km", given.addCyclingHistoricalData(11345), async () => {
                When("I have done yesterday 13:20 min Mindfulness", given.addMindfulnessHistoricalData(800), async () => {
                    When("I have done yesterday 2 Pilates", given.addPilatesHistoricalData(2), async () => {
                        Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1), async () => {
                            Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500))
                            When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 1500), async () => {
                                Then("I should see the menu items", then.menuItemsVisible("enhanced"))
                            })
                        })
                    })
                })
            })
        })
        When("I tap settings", when.tapMenuItem(t("Settings")), async () => {
            Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500))
        })
        When("I scroll down", when.scrollUntilTextVisible(ids.SETTINGS_SCREEN_SCROLL, t("Fitness trackers"), "down"), async () => {
            Then("I should see the right settings details", then.permissionsActivityRightVisible)
        })
        When("I tap permissions settings", when.tapIDAtIndex(ids.ARROW_BUTTON, 1), async () => {
            Then("I should correct detail and icons when authorised", then.onPermissionsPage("authorised"))
        })
    })

    Scenario("I can successfully change client language to differ from server langauge", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1, true), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500))
        })
        When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible("enhanced"))
        })
        When("I tap settings",when.tapMenuItem(t("Settings")), async () => {
            Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500))
        })
        When("I scroll down", when.scrollFromID(ids.SETTINGS_SCREEN_SCROLL, "up", "slow", 0.4), async () => {
            Then("I should see the pre-selected server language is en-GB", then.languageSettingVisible("en-GB"))
        })
        When("I tap the language options", when.tapText(t("Language"), 2000, true), async () => {
            Then("I should be on the langauge selector screen", then.languageSelectorVisible)
            Then("I should see all the available languages listed", then.allLanguagesVsible)
        })
        When("I tap to select Spanish option", when.tapText(t(`${translations["es-US"].flag} ${translations["es-US"].name}`), 2000, true), async () => {
            Then("I should see the menu icon on the top left", then.idVisible(ids.MENU_ICON, 1500))
            Then("I should see that the client language has successfully changed in Spanish", then.textVisible("200 YuCoin hoy"))
        })
    })

    Scenario("I can successfully deep link when app is minimised", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1, true), async () => {
            Then("I should see the menu icon on the top left", then.idVisible(ids.MENU_ICON, 1500))
        })
        When("I minimise the app pressing the home button", when.minimiseApp, async () => {
            When("I follow the deep link", when.goToQuestsScreen, async () => {
                Then("I should successfully be on the quest screen", then.idVisible(ids.QUESTS_SCREEN(0)))
            })
        })
    })

    Scenario("I can successfully deep link from a cold start when app is closed", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1, true), async () => {
            Then("I should see the menu icon on the top left", then.idVisible(ids.MENU_ICON, 1500))
        })
        When("I terminated the app", when.terminateApp, async () => {
            When("I follow the deep link", when.goToleaderboardScreen, async () => {
                Then("I should successfully be on the leaderboard", then.idVisible(ids.LEADERBOARD_SCROLL_LIST, 3000))
            })
        })
    })
})
