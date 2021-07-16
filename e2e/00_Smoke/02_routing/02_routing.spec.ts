import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { YUCOIN, BUTTON_CLOSE, QUESTS_SCREEN, NAV_BAR, LEADERBOARD_SCREEN, REWARDS_SCREEN, MENU_ICON, STATS_SCREEN, ACTIVITY_HISTORY_SCREEN, SETTINGS_SCREEN, YUMATTER_SCREEN, LEVEL_CHALLENGE_BUTTON, CHALLENGE_SET, CHALLENGE_TILE, GENERIC_SCREEN_HEADING, GENERIC_SCREEN_CTA, CHALLENGE_PROGRESS_BAR, BUTTON_CLOSE_CHALLENGE, CHECK_REWARDS_BUTTON, LEADERBOARD_TOP_SCREEN, BUTTON_CLOSE_HEADER } from "@ids";
import { REWARDS_JOHN_LEWIS, REAWARDS_AVIOS, REWARDS_BLOOM_UNAVAILABLE, CUSTOMER_2, AUTH_2, CUSTOMER_8, AUTH_8, CUSTOMER_35, AUTH_35 } from "@data";
Feature("As a user I can navigate through member routes correctly", async () => {

    Scenario("I can view the core screens of the app", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(), async () => {
            Then("I should see the daily steps screen", then.onDailySteps())
            When("I tap the yucoin", when.tapID(YUCOIN), async () => {
                Then("I should be on the yucoin screen", then.onTodaysYucoin())
            })
            When("I close this screen", when.tapID(BUTTON_CLOSE), async () => {
                Then("I should see the daily steps screen", then.onDailySteps())
            })
            When("I tap quests in the tab", when.tapID(NAV_BAR("quests")), async () => {
                Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
            })
            When("I tap leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should be on the leaderboard", then.idVisible(LEADERBOARD_TOP_SCREEN))
            })
            When("I tap rewards", when.tapID(NAV_BAR("rewards")), async () => {
                Then("I should be on rewards", then.idVisible(REWARDS_SCREEN))
            })
        })
    })
    
    Scenario("I can view the menu screens in the app", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_2, AUTH_2), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
            When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 1500), async () => {
                Then("I should see the menu items", then.menuItemsVisible)
                When("I tap statistics", when.tapMenuItem("Statistics"), async () => {
                    Then("I should be on statistics", then.idVisible(STATS_SCREEN))
                    Then("I should see the correct stats elements and figures", then.statsCorrect)
                })
                When("I go back", when.tapID(BUTTON_CLOSE_HEADER("statistics")), async () => {
                    Then("I should be the yucoin tab", then.onDailySteps)
                    When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 500), async () => {
                        Then("I should see the menu items", then.menuItemsVisible)
                    })
                })
                When("I tap activity history", when.tapMenuItem("Activity History"), async () => {
                    Then("I should be on activity history", then.idVisible(ACTIVITY_HISTORY_SCREEN, 2500))
                    Then("I should see some activity", then.textVisible("309 steps"))
                })
                When("I go back", when.tapID(BUTTON_CLOSE_HEADER("activity history")), async () => {
                    Then("I should be the yucoin tab", then.onDailySteps)
                    When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 500), async () => {
                        Then("I should see the menu items", then.menuItemsVisible)
                    })
                })

                When("I tap settings", when.tapMenuItem("Settings"), async () => {
                    Then("I should be on the settings tab", then.idVisible(SETTINGS_SCREEN, 2500))
                })

                When("I go back", when.tapID(BUTTON_CLOSE_HEADER("Settings")), async () => {
                    Then("I should be the yucoin tab", then.onDailySteps)
                    When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 500), async () => {
                        Then("I should see the menu items", then.menuItemsVisible)
                    })
                })
            })
        })
    })

    Scenario("I can talk to yulife via intercom", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_2, AUTH_2), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
            When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 1500), async () => {
                Then("I should see the menu items", then.menuItemsVisible)
                When("I tap chat", when.tapMenuItem("Chat"), async () => {
                    Then("I should see the notification request, as I have not allowed this permission", then.idVisible(GENERIC_SCREEN_HEADING("notification")))
                    When("I tap skip", when.tapID(GENERIC_SCREEN_CTA("skip")), async () => {
                        Then("I should see intercom", then.textVisible("Start a conversation"))
                    })
                })
            })

        })
    })

    Scenario("I can view all the reward screens", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_8, AUTH_8), async () => {
            When("I go to rewards", when.tapID(NAV_BAR("rewards")), async () => {
                Then("I should be on the rewards screen", then.idVisible(REWARDS_SCREEN, 2000))
                Then("I should see a John Lewis reward", then.rewardVisible(REWARDS_JOHN_LEWIS))
                Then("I should see an Avois reward", then.specialRewardVisible(REAWARDS_AVIOS, "avios"))
                Then("I should see a locked reward", then.lockedRewardVisible(REWARDS_BLOOM_UNAVAILABLE))
                Then("I should see the purchased tab", then.textVisible("purchased", 1500))
                When("I tap the purchased tab", when.tapText("purchased"), async () => {
                    When("I wait", when.wait(2500), async()=>{
                        Then("the tab should be in an empty state, as I have not purchases anything", then.idVisible(CHECK_REWARDS_BUTTON, 1500))
                        When("I tap 'check rewards", when.tapID(CHECK_REWARDS_BUTTON), async () => {
                            Then("I should be back on the rewards tab", then.idVisible(REWARDS_SCREEN, 3500))
                        })
                    })
                })
                When("I tap on the Avois reward", when.tapRewardInList(REAWARDS_AVIOS), async () => {
                    Then("I should be on the avios reward screen", then.onSpecialRewardScreen(REAWARDS_AVIOS, "avios"))
                })
            })
        })
    })


    Scenario("I can view quest screens", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_8, AUTH_8), async () => {
            When("I go to quests", when.tapID(NAV_BAR("quests")), async () => {
                Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                When("I tap the locked level 4 button", when.tapID(LEVEL_CHALLENGE_BUTTON(4)), async () => {
                    Then("I should see a popup telling me I will unlock this at level 4", then.textVisible("unlock at level 4"))
                    When("I tap 'got it'", when.tapText("got it"), async () => {
                        Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                        When("I tap the unlocked level 3 button", when.tapID(LEVEL_CHALLENGE_BUTTON(3)), async () => {
                            Then("I should be on the level 3 quest screen", then.idVisible(CHALLENGE_SET))
                            Then("I should see an unlocked challenge", then.idVisible(CHALLENGE_TILE("meditation")))
                            Then("I should see locked challenges", then.multipleTextVisible(["level 4", "level 7"]))
                            When("I tap a locked challenge", when.tapText("level 7"), async () => {
                                Then("nothing should happen", then.idVisible(CHALLENGE_SET))
                                When("I tap the meditation challenge", when.tapID(CHALLENGE_TILE("meditation")), async () => {
                                    Then("I should see a screen with a take challenge option", then.multipleTextVisible(["meditation / 1 min", "Take challenge"]))
                                    When("I tap 'take challenge'", when.tapText("Take challenge"), async () => {
                                        Then("I should see a screen asking me to turn on notifications", then.idVisible(GENERIC_SCREEN_HEADING("don't miss out"), 2000))
                                        When("I dismiss this screen", when.tapID(GENERIC_SCREEN_CTA("maybe later")), async () => {
                                            When("I tap 'I'm using a different app'", when.tapText("I'm using a different app"), async () => {
                                                Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                                                When("I close this screen", when.tapID(BUTTON_CLOSE_CHALLENGE), async () => {
                                                    Then("I should see an exit challenge screen", then.multipleTextVisible(["exit challenge?", "no way!", "exit"]))
                                                    When("I tap no way", when.tapText("no way!"), async () => {
                                                        Then("I should be back on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                                                        When("I close this screen again and exit the challenge", [when.tapID(BUTTON_CLOSE_CHALLENGE), when.tapText("exit")], async () => {
                                                            Then("I should be back on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
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

    Scenario("I should see my yumoji and streak coins in activity history", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_35, AUTH_35), async () => {
            When("I tap the menu icon", when.tapID(MENU_ICON, 1500), async()=>{
                Then("I should see the menu items", then.menuItemsVisible)
            })
            When("I tap activity history", when.tapMenuItem("Activity History"), async()=>{
                Then("I should be on the activity history", then.idVisible(ACTIVITY_HISTORY_SCREEN, 2500))
                Then("I should see the yucoin for completing a streak", then.multipleTextVisible(["completing a streak", "2500"]))
                Then("I should see the yucoin for creating a yumoji", then.multipleTextVisible(["creating your Yumoji", "100"]))
            })
        })
    })
    

})
