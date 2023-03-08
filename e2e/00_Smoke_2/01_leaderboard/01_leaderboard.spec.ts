import { Scenario, Given, When, Then, FeatureOnly, Feature } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as helper from "./_steps/helpers";
import { NAV_BAR, LEADERBOARD_INFO, BACK_BUTTON, LEADERBOARD_SWITCH, LEADERBOARD_TITLE, MENU_ICON, INSPECT_SCREEN, RANK, CHALLENGE_FRIEND_BUTTON, LEADERBOARD_SCROLL_LIST, YUMOJI, USER_WORLD, USER_LEVEL, TEXT_TEMPLATE, ONBOARDING_SCREEN_V4 } from "@ids";
import { CUSTOMER_16, AUTH_16, CUSTOMER_17, AUTH_17, CUSTOMER_18, CUSTOMER_19, AUTH_19, CUSTOMER_20, USER_19_LEADERBOARD_B, CUSTOMER_47, AUTH_47, CUSTOMER_50, AUTH_50, COIN_LEDGER_47, COIN_LEDGER_18, LEADERBOARD_1 } from "@data";

Feature("As a user I can see my achievements on the leaderboard", async () => {
    Scenario("I can consent to my company leaderboard", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_16, AUTH_16), async () => {
            When("I go to the leaderboard screen", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard consent screen", then.onLeaderboardConsent)
                When("I tap 'Yes'", when.tapText("Yes"), async () => {
                    Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(LEADERBOARD_1.data.name)))
                    Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_50, CUSTOMER_47], ["10,000", "800"]))
                    When("I tap 30 days", when.tapText("30 day steps"), async () => {
                        Then("I should be on the about leaderboard page", then.idVisible(LEADERBOARD_INFO, 2000))
                        When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                            Then("I should be back on the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_50, CUSTOMER_47]))
                        })
                    })
                })
            })
        })
    })

    Scenario("I can change consent to a leaderboard I belong to", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_17, AUTH_17), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(LEADERBOARD_1.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47], ["10,000", "800"]))
                When("I tap on the leaderboard name", when.tapID(LEADERBOARD_TITLE(LEADERBOARD_1.data.name), 2000), async () => {
                    Then("I should see my active leaderboard", then.leaderboardStatus(LEADERBOARD_1.data.name, "active"))
                    When("I turn off this leaderboard", when.turnOffLeaderboard(LEADERBOARD_SWITCH(LEADERBOARD_1.data.name)), async () => {
                        Then("I should be back on the leaderboard selection page and this leaderboard should be off", then.leaderboardStatus(LEADERBOARD_1.data.name, "inactive"))
                        When("I close the leaderboard selection screen", when.tapID(BACK_BUTTON), async () => {
                            Then("I should be back on an empty leaderboard screen", then.onLeaderboardConsent)
                        })
                    })
                })          
            })
        })
    })

    Scenario("I can check other leaderboards", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_19, AUTH_19), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(LEADERBOARD_1.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_47, CUSTOMER_50], ["10,000", "800"]))
                When("I scroll to the top of the page", when.scrollUntilIdVisible(LEADERBOARD_SCROLL_LIST, LEADERBOARD_TITLE(LEADERBOARD_1.data.name), "down"), async () => {
                    When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(LEADERBOARD_1.data.name), 2000), async () => {
                        Then("I should be on the leaderboard selection screen", then.multipleTextVisible([LEADERBOARD_1.data.name, USER_19_LEADERBOARD_B.data.name]))
                        When("I tap the second leaderboard, Lb2", when.tapText(USER_19_LEADERBOARD_B.data.name), async () => {
                            Then("I should be on the second leaderboard", then.leaderboardVisible([CUSTOMER_20]))
                        })
                    })
                })
            })
        })
    })

    Scenario("I can inspect other members and view their data and avatars from the leaderboard - seed data", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_47, AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
            Then("I should be on the onboarding yuscreen v4", then.idVisible(ONBOARDING_SCREEN_V4))
        })  
        helper.CREATE_AVATAR(CUSTOMER_47)();
        When("I wait", when.wait(60000), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(LEADERBOARD_1.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47, CUSTOMER_50]))
            }) 
        })
        When("I click on user Michael's name", when.clickUser(CUSTOMER_18.data.fullName), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("Michael's name is visible", then.idVisible(TEXT_TEMPLATE(CUSTOMER_18.data.fullName))) 
            Then("Michael's world is visible", then.idVisible(USER_WORLD("Forest")))
            Then("Michael's level is visible", then.idVisible(USER_LEVEL(COIN_LEDGER_18.data.currentLevel)))
            Then("Michael's empty yumoji is visible", then.idVisible(YUMOJI))
            Then("I should see Michael's Duel stats", then.duelStatsVisible(2, 3))
        })
        When("I scroll down to the challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            Then("I should see the Challenge to duel button", then.challengeToDuelButtonVisible)
        })
        When("I scroll to the Challenge statistics section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the Challenge stats", then.challengeDataVisible(0, 0))
            Then("I should see the Activity section heading", then.activitySectionHeadingVisible)
        })
        When("I scroll to the Activity data section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the yumoji avatars and the comparative activity stats between me and Michael", then.comparativeUserSeedStatsVisible(26, 333))
        })
        When("I scroll down", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.6), async () => {
            Then("I should see the average cycling and mindfulness comparative data", then.comparativeUserCyclingMindfulnessStats(0.1, 1, 0, 3))
        })
    })

    Scenario("I can inspect other members and view their data and avatars from the leaderboard - seed data + loaded in historical data", scenario.start, async () => {
        When("I have done two days ago 15,000 steps", when.addStepsHistoricalData(15000, 2), async () => {
            When("I have done two days ago Biking 9 km", when.addCyclingHistoricalData(9000, 2), async () => {
                When("I have done two days ago 13:20 min Mindfulness", when.addMindfulnessHistoricalData(800, 2), async () => {
                    Given("I login as a user", given.loginAsUser(CUSTOMER_47, AUTH_47), async () => {
                        Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
                        Then("I should be on the onboarding yuscreen v4", then.idVisible(ONBOARDING_SCREEN_V4))
                    })
                })
            })
        })
        helper.CREATE_AVATAR(CUSTOMER_47)();
        When("I wait", when.wait(60000), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(LEADERBOARD_1.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47, CUSTOMER_50]))
            }) 
        })
        When("I click on user Michael's name", when.clickUser(CUSTOMER_18.data.fullName), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("Michael's name is visible", then.idVisible(TEXT_TEMPLATE(CUSTOMER_18.data.fullName))) 
            Then("Michael's world is visible", then.idVisible(USER_WORLD("Forest")))
            Then("Michael's level is visible", then.idVisible(USER_LEVEL(COIN_LEDGER_18.data.currentLevel)))
            Then("Michael's empty yumoji is visible", then.idVisible(YUMOJI))
            Then("I should see Michael's Duel stats", then.duelStatsVisible(2, 3))
        })
        When("I scroll down to the challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            Then("I should see the Challenge to duel button", then.challengeToDuelButtonVisible)
        })
        When("I scroll to the Challenge statistics section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the Challenge stats", then.challengeDataVisible(0, 0))
            Then("I should see the Activity section heading", then.activitySectionHeadingVisible)
        })
        When("I scroll to the Activity data section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the yumoji avatars and the comparative walking activity stats between me and Michael", then.comparativeUserStatsVisible(26, 833))
        })
        When("I scroll down", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.6), async () => {
            Then("I should see the average cycling and mindfulness comparative data", then.comparativeUserCyclingMindfulnessStats(0.1, 1.3, 0, 3))
        })
    })

    Scenario("I can inspect myself and view my data and avatar from the leaderboard - seed data", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_47, AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
            Then("I should be on the onboarding yuscreen v4", then.idVisible(ONBOARDING_SCREEN_V4))

        })  
        helper.CREATE_AVATAR(CUSTOMER_47)();
        When("I wait", when.wait(60000), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard"), 2000), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(LEADERBOARD_1.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible(([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47, CUSTOMER_50])))
            }) 
        })
        When("I click on my own name", when.tapID(RANK(CUSTOMER_47.data.fullName)), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("My name is visible", then.idVisible(TEXT_TEMPLATE(CUSTOMER_47.data.fullName))) 
            Then("My world is visible", then.idVisible(USER_WORLD("Forest")))
            Then("My level is visible", then.idVisible(USER_LEVEL(COIN_LEDGER_47.data.currentLevel)))
            Then("My yumoji is", then.idVisible(YUMOJI))
            Then("I should see my Duel stats", then.myDuelStatsVisible(2))
        })
        When("I scroll down to the challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            Then("I should see the Challenge somebody to duel button", then.challengeSomebodyButtonVisible)
        })
        When("I scroll to the Challenge statistics section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the Challenge stats", then.myChallengeDataVisible(0))
            Then("I should see the Activity section heading", then.activitySectionHeadingVisible)
        })
        When("I scroll to the Activity data section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.4), async () => {
            Then("I should see my yumoji avatar and my activity stats", then.mySeedStatsVisible)
        })
        When("I scroll down", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the average mindfulness comparative data", then.myMindfulnessDataVisible)
        })
    })

    Scenario("I can inspect myself and challenge a different user to a duel for the first time via inspect", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_47, AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
        })  
        When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard"), 2000), async () => {
            When("I click on my own name", when.tapID(RANK(CUSTOMER_47.data.fullName)), async () => {
                Then("I should be on the Inspect screen", then.isOnInspectScreen)
            })
        })
        When("I scroll down to the duels challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            When("I click on the duels button", when.clickChallengeSomebodyButton, async () => {
                Then("I should be on the Challenge a friend screen", then.onChallengeAFriend)
            })
        })
        When("I click next", when.clickNext, async () => {
            Then("I should be on the set the wager screen", then.isOnSetWagerScreen)
        })
        When("I click next", when.clickNext, async () => {
            Then("I should be on the out-step your opponent screen", then.isOnOutStepOpponentScreen)
        })
        When("I click let's go", when.clickLetsGo, async () => {
            Then("I should see Challenge a friend button", then.challengeFriendButtonVisible)
            Then("I should be on the empty duels hub", then.onEmptyDuelsHub)
        })
        When("I tap challenge a colleague", when.tapID(CHALLENGE_FRIEND_BUTTON), async()=>{
            Then("I should be on the Search for a friend screen", then.textVisible("Search for a friend:"))
            Then("I should see Angela Martin", then.textVisible("Angela Martin"))
        })
        When("I tap a Angela Martin", when.tapText("Angela Martin"), async()=>{
            Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel"]))
        })
    })

    Scenario("I can inspect a player and challenge the user to a duel for the first time via inspect", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_47, AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
        })  
        When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard"), 2000), async () => {
            When("I click on user Michael's name", when.clickUser("Michael Scott"), async () => {
                Then("I should be on the Inspect screen", then.isOnInspectScreen)
            })
        })
        When("I scroll down to the duels challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            When("I click on the duels button", when.clickDuelButton, async () => {
                Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel", "You", "Michael Scott"]))
            })
        })
    })

    Scenario("I can inspect other members and view their data and avatars from the leaderboard and I can see a draw state and win streak - seed data", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_50, AUTH_50), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
            Then("I should be on the onboarding yuscreen v4", then.idVisible(ONBOARDING_SCREEN_V4))

        })  
        helper.CREATE_AVATAR(CUSTOMER_50)();
        When("I wait", when.wait(60000), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(LEADERBOARD_1.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_50, CUSTOMER_47]))
            }) 
        })
        When("I click on user Michael's name", when.clickUser(CUSTOMER_18.data.fullName), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("Michael's name is visible", then.idVisible(TEXT_TEMPLATE(CUSTOMER_18.data.fullName))) 
            Then("Michael's world is visible", then.idVisible(USER_WORLD("Forest")))
            Then("Michael's level is visible", then.idVisible(USER_LEVEL(COIN_LEDGER_18.data.currentLevel)))
            Then("Michael's empty yumoji is visible", then.idVisible(YUMOJI))
            Then("I should see the win streak stats", then.winStreakVisible(2))
        })
        When("I scroll down to the challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            When("I scroll to the Challenge statistics section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
                When("I scroll to the Activity data section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.5), async () => {
                    Then("I should see the draw state cycling results", then.cyclingComparativeDrawResults(0.1, 0.1))
                })
            })
        })
        When("I scroll down the Activity data section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.4), async () => {
            Then("I should see the draw state mindfulness results", then.minsComparativeDrawResults(0, 0))
        })
    })
})

