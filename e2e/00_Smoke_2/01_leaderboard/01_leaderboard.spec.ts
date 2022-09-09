import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as helper from "./_steps/helpers"
import { NAV_BAR, LEADERBOARD_INFO_BUTTON, LEADERBOARD_INFO, BACK_BUTTON, PLUS_BUTTON, LEADERBOARD_EMAIL_INPUT, GROUP_NAME_INPUT, LEADERBOARD_SWITCH, LEADERBOARD_TITLE, MENU_ICON, INSPECT_SCREEN, RANK, CHALLENGE_FRIEND_BUTTON, DAILY_STEPS_SCREEN, LEADERBOARD_TOP_SCREEN, LEADERBOARD_SCROLL_LIST } from "@ids";
import { CUSTOMER_16, AUTH_16, USER_16_LEADERBOARD, CUSTOMER_17, AUTH_17, CUSTOMER_18, USER_18_LEADERBOARD, CUSTOMER_19, AUTH_19, CUSTOMER_20, CUSTOMER_21, USER_19_LEADERBOARD_B, CUSTOMER_47, AUTH_47, AUTH_21, USER_20_LEADERBOARD, AUTH_20, AUTH_48, CUSTOMER_48, CUSTOMER_50, AUTH_50 } from "@data";

Feature("As a user I can see my achievements on the leaderboard", async () => {
    Scenario("I can consent to my company leaderboard", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_16, AUTH_16), async () => {
            When("I go to the leaderboard screen", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard consent screen", then.onLeaderboardConsent)
                When("I tap 'Yes'", when.tapText("Yes"), async () => {
                    Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                    Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47], ["10,000", "800"]))
                    When("I tap 30 days", when.tapText("30 day steps"), async () => {
                        Then("I should be on the about leaderboard page", then.idVisible(LEADERBOARD_INFO, 2000))
                        When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                            Then("I should be back on the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47]))
                        })
                    })
                })
            })
        })
    })
    
    Scenario("I can create a custom leaderboard, invite a user, and turn it on and off", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_17, AUTH_17), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_16_LEADERBOARD.data.name)))
            })
            When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(USER_16_LEADERBOARD.data.name)), async () => {
                Then("I should see create", then.idVisible(PLUS_BUTTON))
            })
            When("I tap create", when.tapID(PLUS_BUTTON), async () => {
                Then("I should be on the create a leaderboard screen", then.textVisible("create a leaderboard"))
                Then("I should see the leaderboard name and email inputs", then.multipleIDVisible([LEADERBOARD_EMAIL_INPUT, GROUP_NAME_INPUT]))
            })
            When("I enter a group name", when.replaceTextByID(GROUP_NAME_INPUT, "Group 1"), async () => {
                Then("I should see the group name entered", then.textVisible("Group 1"))
            })
            When("I enter an email", when.replaceTextByID(LEADERBOARD_EMAIL_INPUT, CUSTOMER_16.data.email), async () => {
                Then("I should see the email entered", then.textVisible(CUSTOMER_16.data.email))
            })
            When("I tap add", when.tapText("add"), async () => {
                Then("I should see the email I just entered", then.textVisible(CUSTOMER_16.data.email))
            })
            When("I tap create", when.tapText("create"), async () => {
                Then("I should be back on the leaderboards list page", then.idVisible(PLUS_BUTTON))
                Then("I should see the group I just created", then.textVisible("Group 1"))
                Then("The status of the group should be online", then.leaderboardStatus("Group 1", "active"))
            })
            When("I try to switch off the leaderboard", when.tapID(LEADERBOARD_SWITCH("Group 1")), async () => {
                Then("I should be on the Turn it off screen", then.textVisible("Turn it off?"))
            })
            When("I tap Keep it on!", when.tapText("Keep it on!"), async () => {
                Then("I should be back on the settings screen the group still visible", then.textVisible("Group 1"))
                Then("The status of the group should be online", then.leaderboardStatus("Group 1", "active"))
            })
            When("I switch off the leaderboard", when.tapID(LEADERBOARD_SWITCH("Group 1")), async () => {
                Then("I should be on the Turn it off screen", then.textVisible("Turn it off?"))
            })
            When("I tap Turn it off", when.tapText("Turn it off"), async () => {
                Then("I should be on the leaderboard selection page with the leaderboard turned off", then.leaderboardStatus("Group 1", "inactive"))
            })
            When("I try to switch on the leaderboard", when.tapID(LEADERBOARD_SWITCH("Group 1")), async () => {
                Then("I should be on the Join the Leaderboard screen", then.textVisible("Join the Leaderboard?"))
            })
            When("I tap 'no thanks'", when.tapText("No thanks"), async () => {
                Then("I should be back on the leaderboard selection page and the leaderboard should be inactive", then.leaderboardStatus("Group 1", "inactive"))
            })       
            When("I switch on the leaderboard", when.tapID(LEADERBOARD_SWITCH("Group 1")), async () => {
                Then("I should be on the Join the Leaderboard screen", then.textVisible("Join the Leaderboard?"))
            })
            When("I tap Yes", when.tapText("Yes"), async () => {
                Then("I should be back on the leaderboard selection page and the leaderboard should be active", then.leaderboardStatus("Group 1", "active"))
            })
        })
    })

    Scenario("I can change consent to a leaderboard I belong to", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_17, AUTH_17), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47], ["10,000", "800"]))
                When("I tap on the leaderboard name", when.tapID(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name), 2000), async () => {
                    Then("I should see my active leaderboard", then.leaderboardStatus(USER_18_LEADERBOARD.data.name, "active"))
                    When("I turn off this leaderboard", when.turnOffLeaderboard(LEADERBOARD_SWITCH(USER_18_LEADERBOARD.data.name)), async () => {
                        Then("I should be back on the leaderboard selection page and this leaderboard should be off", then.leaderboardStatus(USER_18_LEADERBOARD.data.name, "inactive"))
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
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47], ["10,000", "800"]))
                When("I scroll to the top of the page", when.scrollUntilIdVisible(LEADERBOARD_SCROLL_LIST, LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name), "down"), async () => {
                    When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name), 2000), async () => {
                        Then("I should be on the leaderboard selection screen", then.multipleTextVisible([USER_18_LEADERBOARD.data.name, USER_19_LEADERBOARD_B.data.name]))
                        When("I tap the second leaderboard, Lb2", when.tapText(USER_19_LEADERBOARD_B.data.name), async () => {
                            Then("I should be on the second leaderboard", then.leaderboardVisible([CUSTOMER_20]))
                        })
                    })
                })
            })
        })
    })

    // TODO: Fix issue where invite popup shows twice if fitkit is enabled:
    // https://yulife.atlassian.net/browse/ENG-1877?atlOrigin=eyJpIjoiZWViMTE5ZGIwZjVmNDZiNWIwOGMxYjc5NTVjMmFiMzMiLCJwIjoiaiJ9
    Scenario("I can join a new leaderboard", scenario.start, async () => {
        Given("I login", given.loginOnly(CUSTOMER_21, AUTH_21, false), async () => {
            Then("I should see a leaderboard invite screen", then.textVisible("join Angela's leaderboard", 2500))
            When("I accept", when.tapText("accept invite"), async () => {
                When("I skip fitkit", when.tapText("Skip this step"), async()=>{
                    Then("I should see the signup bonus screen", then.textVisible("Sign-up bounty\nunlocked!"))
                    When("I continue the login process", when.continueLogin, async () => {
                        Then("I should be on the yuscreen", then.idVisible(DAILY_STEPS_SCREEN))
                        When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                            Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_19_LEADERBOARD_B.data.name)))
                            Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_19, CUSTOMER_20], [50]))
                            When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(USER_19_LEADERBOARD_B.data.name)), async () => {
                                Then("I should see both Lb1 and the new leaderboard I just joined", then.multipleTextVisible([USER_18_LEADERBOARD.data.name, USER_19_LEADERBOARD_B.data.name]))
                                When("I tap Lb1", when.tapText(USER_18_LEADERBOARD.data.name), async () => {
                                    Then("I should be on the Lb1 leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47], [800, 250, "10,000"]))
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    // TODO: Fix issue where invite popup shows twice if fitkit is enabled: 
    // https://yulife.atlassian.net/browse/ENG-1877?atlOrigin=eyJpIjoiZWViMTE5ZGIwZjVmNDZiNWIwOGMxYjc5NTVjMmFiMzMiLCJwIjoiaiJ9
    Scenario("I can invite a user, and they can accept", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_20, AUTH_20), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_20_LEADERBOARD.data.name)))
            })
            When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(USER_20_LEADERBOARD.data.name)), async () => {
                Then("I should see create", then.idVisible(PLUS_BUTTON))
            })
            When("I tap create", when.tapID(PLUS_BUTTON), async () => {
                Then("I should be on the create a leaderboard screen", then.textVisible("create a leaderboard"))
                Then("I should see the leaderboard name and email inputs", then.multipleIDVisible([LEADERBOARD_EMAIL_INPUT, GROUP_NAME_INPUT]))
            })
            When("I enter a group name", when.replaceTextByID(GROUP_NAME_INPUT, "Lb3"), async () => {
                Then("I should see the group name entered", then.textVisible("Lb3"))
            })
            When("I enter an email", when.replaceTextByID(LEADERBOARD_EMAIL_INPUT, CUSTOMER_19.data.email), async () => {
                Then("I should see the email entered", then.textVisible(CUSTOMER_19.data.email))
            })
            When("I tap add", when.tapText("add"), async () => {
                Then("I should see the email I just entered", then.textVisible(CUSTOMER_19.data.email))
            })
            When("I tap create", when.tapText("create"), async () => {
                Then("I should see the group I just created", then.textVisible("Lb3"))
                Then("The status of the group should be online", then.leaderboardStatus("Lb3", "active"))
            })
            When("I restart the app", when.restartWithData, async () => {
                When("I login as the invited user", when.loginOnly(CUSTOMER_19, AUTH_19, false), async () => {
                    Then("I should see a leaderboard invite screen", then.textVisible("join Oscar's leaderboard", 2500))
                })
            })
            When("I accept", when.tapText("accept invite"), async () => {
                When("I skip fitkit", when.tapText("Skip this step"), async () => {
                    Then("I should see the signup bonus screen", then.textVisible("Sign-up bounty\nunlocked!"))
                })
            })
            When("I continue the login process", when.continueLogin, async () => {
                Then("I should be on the yuscreen", then.idVisible(DAILY_STEPS_SCREEN))
            })
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE("Lb3")))
                Then("I should be on the default leaderboard", then.leaderboardVisible([CUSTOMER_20]))
            })
            When("I tap the leaderboard title", when.tapID(LEADERBOARD_TITLE("Lb3")), async () => {
                Then("I should see both Lb1 and the new leaderboard I just joined", then.multipleTextVisible([USER_18_LEADERBOARD.data.name, "Lb3"]))
            })
            When("I tap Lb1", when.tapText("LB1"), async () => {
                Then("I should see the leaderboard name Lb1", then.idVisible(LEADERBOARD_TITLE("LB1")))
                Then("I should not see any of the other leaderboards", then.textNotVisible(USER_19_LEADERBOARD_B.data.name))
                Then("I should be on the Lb1 leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_47], [800, 250, "10,000"]))
            })
        })
    })


    Scenario("I can inspect other members and view their data and avatars from the leaderboard - seed data", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_47, AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
        })  
        helper.CREATE_AVATAR(CUSTOMER_47)();
        When("I wait", when.wait(60000), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_19, CUSTOMER_47]))
            }) 
        })
        When("I click on user Michael's name", when.clickUser("Michael Scott"), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("I should see Michael's avatar, world and name", then.personalDataVisible("Michael Scott", "Level 1", "Forest"))
            Then("I should see the Duel stats", then.duelStatsVisible(2, 3))
        })
        When("I scroll down to the challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            Then("I should see the Challenge to duel button", then.challengeToDuelButtonVisible)
        })
        When("I scroll to the Challenge statistics section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the Challenge stats", then.challengeDataVisible(0, 0))
            Then("I should see the Activity section heading", then.activitySectionHeadingVisible)
        })
        When("I scroll to the Activity data section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the yumoji avatars and the comparative activity stats between me and Michael", then.comparativeUserSeedStatsVisible(400, 322))
        })
        When("I scroll down", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.6), async () => {
            Then("I should see the average cycling and mindfulness comparative data", then.comparativeUserCyclingMindfulnessStats(4, 0.1, 16, 0))

        })
    })

    Scenario("I can inspect other members and view their data and avatars from the leaderboard - seed data + loaded in historical data", scenario.start, async () => {
        When("I have done two days ago 15,000 steps", when.addStepsHistoricalData(15000, 2), async () => {
            When("I have done two days ago Biking 9 km", when.addCyclingHistoricalData(9000, 2), async () => {
                When("I have done two days ago 13:20 min Mindfulness", when.addMindfulnessHistoricalData(800, 2), async () => {
                    Given("I login as a user", given.loginAsUser(CUSTOMER_47, AUTH_47), async () => {
                        Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
                    })
                })
            })
        })
        helper.CREATE_AVATAR(CUSTOMER_47)();
        When("I wait", when.wait(60000), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_19, CUSTOMER_47]))
            }) 
        })
        When("I click on user Michael's name", when.clickUser("Michael Scott"), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("I should see Michael's avatar, world and name", then.personalDataVisible("Michael Scott", "Level 1", "Forest"))
            Then("I should see the Duel stats", then.duelStatsVisible(2, 3))
        })
        When("I scroll down to the challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            Then("I should see the Challenge to duel button", then.challengeToDuelButtonVisible)
        })
        When("I scroll to the Challenge statistics section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the Challenge stats", then.challengeDataVisible(0, 0))
            Then("I should see the Activity section heading", then.activitySectionHeadingVisible)
        })
        When("I scroll to the Activity data section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the yumoji avatars and the comparative walking activity stats between me and Michael", then.comparativeUserStatsVisible(400, 806))
        })
        When("I scroll down", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.6), async () => {
            Then("I should see the average cycling and mindfulness comparative data", then.comparativeUserCyclingMindfulnessStats(4, 0.4, 16, 1))
        })
    })

    Scenario("I can inspect myself and view my data and avatar from the leaderboard - seed data", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_47, AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
        })  
        helper.CREATE_AVATAR(CUSTOMER_47)();
        When("I wait", when.wait(60000), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard"), 2000), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible(([CUSTOMER_18, CUSTOMER_17, CUSTOMER_19, CUSTOMER_47])))
            }) 
        })
        When("I click on my own name", when.tapID(RANK(CUSTOMER_47.data.fullName)), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("I should see my avatar, world and name", then.personalDataVisible("Gill Stock", "Level 1", "Forest"))
            Then("I should see the Duel stats", then.myDuelStatsVisible(2))
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
                Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel", "You", "Michael", "Scott"]))
            })
        })
    })

    Scenario("I can inspect other members and view their data and avatars from the leaderboard and I can see a draw state and win streak - seed data", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_50, AUTH_50), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(MENU_ICON, 1500))
        })  
        helper.CREATE_AVATAR(CUSTOMER_50)();
        When("I wait", when.wait(60000), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_50, CUSTOMER_47]))
            }) 
        })
        When("I click on user Michael's name", when.clickUser("Michael Scott"), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("I should see Michael's avatar, world and name", then.personalDataVisible("Michael Scott", "Level 1", "Forest"))
            Then("I should see the win streak stats", then.winStreakVisible(2))
        })
        When("I scroll down to the challenge button", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            When("I scroll to the Challenge statistics section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
                When("I scroll to the Activity data section", when.scrollFromID(INSPECT_SCREEN, "up", "slow", 0.3), async () => {
                    Then("I should see the draw state step results", then.stepsComparativeDrawResults(400, 400))
                })
            })
        })
    })
})

