import { Scenario, Given, When, Then, Feature, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as helper from "./_resources/helpers";
import * as ids from "@ids";
import * as data from "@data";
import { DefaultStepsLeaderboard, DefaultYudokuLeaderboard, User16LeaderboardItem, User17LeaderboardItem, User18LeaderboardItem, User20LeaderboardItem, User39LeaderboardItem, User40LeaderboardItem, User44LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem } from "./_resources/fixtures";
import { getFullName } from "_utils/users";

Feature("As a user I can see my achievements on the leaderboard", async () => {
    // @bug - leaderboard not loading after join + refresh, RN warning: ""
    ScenarioSkip("I can consent to my company leaderboard", scenario.start, async () => {
        Given("I login", given.loginAsUser(data.CUSTOMER_16, data.AUTH_16), async () => {
            When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard screen without consent", then.onLeaderboardWithoutConsent)
            })
        })
        When("I tap the Yudoku tab", when.tapID(ids.LEADBOARD_TAB("Yudoku")), async () => {
            Then("I can see the emtpy yudoku leaderboard state", then.onLeaderboardWithoutConsent)
        })
        When('I tap the steps tab', when.tapID(ids.LEADBOARD_TAB("Steps")), async () => {
            When("I tap Join the leaderboard", when.tapJoinLeaderboard, async () => {
                Then('I can see the leaderboard list modal', then.canSeeLeaderboardListModal([DefaultStepsLeaderboard, DefaultYudokuLeaderboard], false))
            })
        })
        When("I tap the Steps switch", when.tapLeaderboardConsentSwitch(DefaultStepsLeaderboard, false), async () => {
            When("I tap the Yudoku switch", when.tapLeaderboardConsentSwitch(DefaultYudokuLeaderboard, false), async () => {
                When('I press continue', when.tapText("Continue"), async () => {
                    Then("I should see the leaderboard", then.leaderboardVisible([User16LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem]))
                })
            })
        })
        When("I swipe up if needed", when.swipeFromText("Steps", "down", "fast"), async () => {
            When("I tap 30 days", when.tapID(ids.LEADERBOARD_INFO_BUTTON), async () => {
                Then("I should be on the about leaderboard page", then.idVisible(ids.LEADERBOARD_INFO))
                When("I tap the back button", when.tapID(ids.BUTTON_CLOSE_HEADER("yulife")), async () => {
                    Then("I should be back on the leaderboard", then.leaderboardVisible([User16LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem]))
                })
            })
        })
    })

    // @bug leaderboard not turning off
    ScenarioSkip("I can change consent to a leaderboard I belong to", scenario.start, async () => {
        Given("I login", given.loginAsUser(data.CUSTOMER_17, data.AUTH_17), async () => {
            When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem]))
            })
            When("I swipe up if needed", when.swipeFromText("Steps", "down", "fast"), async () => {
                When("I tap on the leaderboard name", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
                    Then("I should see my active leaderboard", then.idVisible(ids.LEADERBOARD_COMMUNITY_LIST([data.SOCIAL_GROUP_C1.data.name])))
                })
            })
            When("I tap close", when.tapText("View Leaderboard"), async () => {
                When("I tap the menu", when.tapID(ids.BUTTON_TOP_LEFT_BAR), async () => {
                    When("I tap settings", when.tapMenuItem("Settings"), async () => {
                        When('I tap leaderboards', when.tapText("Leaderboards"), async () => {
                            Then("I can see the option for Steps leaderboards", then.idVisible(ids.SETTINGS_SWITCH(`${data.SOCIAL_GROUP_C1.data.name} Steps`, true)))
                        })
                    })
                })
            })
            When("I tap the ID to switch consent off", when.tapID(ids.SETTINGS_SWITCH(`${data.SOCIAL_GROUP_C1.data.name} Steps`, true)), async () => {
                When("I tap turn it off", when.tapText("Turn it off"), async () => {
                    Then("I can see the option for Yudoku leaderboards", then.idVisible(ids.SETTINGS_SWITCH(`${data.SOCIAL_GROUP_C1.data.name} Steps`, false)))
                })
            })
            When("I tap close", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
                Then("I can see the emtpy yudoku leaderboard state", then.onLeaderboardWithoutConsent)
            })
        })
    })

    // @flaky [fails to find leaderboard title -- test passes locally]
    ScenarioSkip("I can check other leaderboards", scenario.start, async () => {
        Given("I login", given.loginAsUser(data.CUSTOMER_19, data.AUTH_19), async () => {
            When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
                    When("I click leaderboard 2", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_C2.data.name)), async () => {
                        When("I tap view", when.tapText("View Leaderboard"), async () => {
                            Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE("LB2")))
                            Then("I should be on the second leaderboard", then.leaderboardVisible([User20LeaderboardItem, User40LeaderboardItem]))
                        })
                    })
                })
            })
        })
        When("I scroll to the top of the page", when.scrollUntilIdVisible(ids.LEADERBOARD_SCROLL_LIST, ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C2.data.name), "down"), async () => {
            When("I tap the leaderboard drop down", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
                Then("I should be on the leaderboard selection screen", then.idVisible(ids.LEADERBOARD_COMMUNITY_LIST([data.SOCIAL_GROUP_C2.data.name, data.SOCIAL_GROUP_C1.data.name])))
            })
        })
        When("I tap the first leaderboard, Lb1", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_C1.data.name)), async () => {
            When("I tap view", when.tapText("View Leaderboard"), async () => {
                Then("I should see the first leaderboard", then.leaderboardVisible([User18LeaderboardItem]))
            })
        })
    })

    // @flaky [fails to find leaderboard title -- test passes locally]
    ScenarioSkip("I can inspect other members and view their data and avatars from the leaderboard - seed data", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_47, data.AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500))
            Then("I should be on the onboarding yuscreen v4", then.idVisible(ids.ONBOARDING_SCREEN_V4))
        })
        helper.CREATE_AVATAR(data.CUSTOMER_47)();
        When("I wait", when.wait(6000), async () => {
            When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem]))
            })
        })
        When("I click on user Michael's name", when.clickUser(data.CUSTOMER_18), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("Michael's name is visible", then.idVisible(ids.TEXT_TEMPLATE(getFullName(data.CUSTOMER_18))))
            Then("Michael's world is visible", then.idVisible(ids.USER_WORLD("Forest")))
            Then("Michael's level is visible", then.idVisible(ids.USER_LEVEL(data.USER_GAME_STATE_18.data.currentLevel)))
            Then("Michael's empty yumoji is visible", then.idVisible(ids.YUMOJI))
            Then("I should see Michael's Duel stats", then.duelStatsVisible(2, 3))
        })
        When("I scroll down to the challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            Then("I should see the Challenge to duel button", then.challengeToDuelButtonVisible)
        })
        When("I scroll to the Challenge statistics section", when.scrollUntilTextVisible(ids.USER_INFO("Michael Scott 4"), "Activity", "down"), async () => {
            Then("I should see the Challenge stats", then.challengeDataVisible(0, 0))
            Then("I should see the Activity section heading", then.activitySectionHeadingVisible("Michael Scott 4"))
        })
        When("I scroll to the Activity data section", when.scrollFromID(ids.USER_INFO("Michael Scott 4"), "up", "slow", 0.3), async () => {
            Then("I should see the yumoji avatars and the comparative activity stats between me and Michael", then.comparativeUserSeedStatsVisible(26, 333))
        })
        When("I scroll down", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.6), async () => {
            Then("I should see the average cycling and mindfulness comparative data", then.comparativeUserCyclingMindfulnessStats(0.1, 1, 0, 3))
        })
        When("I close", when.tapID(ids.BUTTON_CLOSE_HEADER("yulife")), async () => {
            When("I click on my own name", when.tapLeaderboardUser(User47LeaderboardItem), async () => {
                Then("I should be on the Inspect screen", then.isOnInspectScreen)
                Then("My name is visible", then.idVisible(ids.TEXT_TEMPLATE(getFullName(data.CUSTOMER_47))))
                Then("My world is visible", then.idVisible(ids.USER_WORLD("Forest")))
                Then("My level is visible", then.idVisible(ids.USER_LEVEL(data.USER_GAME_STATE_47.data.currentLevel)))
                Then("My yumoji is", then.idVisible(ids.YUMOJI))
                Then("I should see my Duel stats", then.myDuelStatsVisible(2))
            })
        })
        When("I scroll down to the challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            Then("I should see the Challenge somebody to duel button", then.challengeSomebodyButtonVisible)
        })
        When("I scroll to the Challenge statistics section", when.scrollUntilIdVisible(ids.USER_INFO("Gill Stock 1"), ids.INSPECT_ACTIVITY("Longest streak"), "down"), async () => {
            Then("I should see the Challenge stats", then.myChallengeDataVisible(0))
            Then("I should see the Activity section heading", then.activitySectionHeadingVisible("Gill Stock 1"))
        })
        When("I scroll to the Activity data section", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.4), async () => {
            Then("I should see my yumoji avatar and my activity stats", then.mySeedStatsVisible)
        })
        When("I scroll down", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.3), async () => {
            Then("I should see the average mindfulness comparative data", then.myMindfulnessDataVisible)
        })
    })

    // @update can't find Gill Stock at given position on leaderboard, user is there
    ScenarioSkip("I can inspect other members and view their data and avatars from the leaderboard - seed data + loaded in historical data", scenario.start, async () => {
        When("I have done two days ago 15,000 steps", when.addStepsHistoricalData(15000, 2), async () => {
            When("I have done two days ago Biking 9 km", when.addCyclingHistoricalData(9000, 2), async () => {
                When("I have done two days ago 13:20 min Mindfulness", when.addMindfulnessHistoricalData(800, 2), async () => {
                    Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_47, data.AUTH_47), async () => {
                        Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500))
                        Then("I should be on the onboarding yuscreen v4", then.idVisible(ids.ONBOARDING_SCREEN_V4))
                    })
                })
            })
        })
        helper.CREATE_AVATAR(data.CUSTOMER_47)();
        When("I wait", when.wait(6000), async () => {
            When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem]))
            })
        })
        When("I click on user Michael's name", when.clickUser(data.CUSTOMER_18), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("Michael's name is visible", then.idVisible(ids.TEXT_TEMPLATE(getFullName(data.CUSTOMER_18))))
            Then("Michael's world is visible", then.idVisible(ids.USER_WORLD("Forest")))
            Then("Michael's level is visible", then.idVisible(ids.USER_LEVEL(data.USER_GAME_STATE_18.data.currentLevel)))
            Then("Michael's empty yumoji is visible", then.idVisible(ids.YUMOJI))
            Then("I should see Michael's Duel stats", then.duelStatsVisible(2, 3))
        })
        When("I scroll down to the challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            Then("I should see the Challenge to duel button", then.challengeToDuelButtonVisible)
        })
        When("I scroll to the Challenge statistics section", when.scrollUntilTextVisible(ids.USER_INFO("Michael Scott 4"), "Activity", "down"), async () => {
            Then("I should see the Challenge stats", then.challengeDataVisible(0, 0))
            Then("I should see the Activity section heading", then.activitySectionHeadingVisible("Michael Scott 4"))
        })
        When("I scroll to the Activity data section", when.scrollFromID(ids.USER_INFO("Michael Scott 4"), "up", "slow", 0.3), async () => {
            Then("I should see the yumoji avatars and the comparative walking activity stats between me and Michael", then.comparativeUserStatsVisible(26, 833))
        })
        When("I scroll down", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.6), async () => {
            Then("I should see the average cycling and mindfulness comparative data", then.comparativeUserCyclingMindfulnessStats(0.1, 1.3, 0, 3))
        })
    })

    Scenario("I can inspect myself and challenge a different user to a duel for the first time via inspect", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_47, data.AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500))
        })
        When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
            When("I click on my own name", when.tapHighlightedLeaderboardUser(User47LeaderboardItem), async () => {
                Then("I should be on the Inspect screen", then.isOnInspectScreen)
            })
        })
        When("I scroll down to the duels challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.2), async () => {
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
        When("I tap challenge a colleague", when.tapID(ids.CHALLENGE_FRIEND_BUTTON), async () => {
            Then("I should be on the Search for a friend screen", then.textVisible("Search for a friend:"))
            Then("I should see Angela Martin", then.textVisible("Angela Martin"))
        })
        When("I tap a Angela Martin", when.tapText("Angela Martin"), async () => {
            Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel"]))
        })
    })

    Scenario("I can inspect a player and challenge the user to a duel for the first time via inspect", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_47, data.AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500))
        })
        When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
            When("I click on user Michael's name", when.tapHighlightedLeaderboardUser(User18LeaderboardItem), async () => {
                Then("I should be on the Inspect screen", then.isOnInspectScreen)
            })
        })
        When("I scroll down to the duels challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.2), async () => {
            When("I click on the duels button", when.clickDuelButton, async () => {
                Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel", "You", "Michael Scott"]))
            })
        })
    })

    // @flaky - sometimes fails find users with leaderboardVisible on bitrise
    ScenarioSkip("Social groups / leaderboards based on 'rules' function as expected", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_39, data.AUTH_39), async () => {
            When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                Then("I am on the leaderboard", then.leaderboardVisible([User39LeaderboardItem, User44LeaderboardItem], 2500))
            })
        })
        When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
            When("I click the leaderboard with rules", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA5_RULE.data.name)), async () => {
                When("I tap view", when.tapText("View Leaderboard"), async () => {
                    Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_BA5_RULE.data.name)))
                    Then("I should be on the second leaderboard", then.leaderboardVisible([User39LeaderboardItem]))
                    Then("I cannot see the user who was archived due to having a different department", then.cannotSeeLeaderboardUser(User44LeaderboardItem))
                })
            })
        })
    })

    // @flaky - iPhone SE on Bitrise cannot find 'Steps' on the leaderboard
    ScenarioSkip("Leaderboard search functions as expected", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_39, data.AUTH_39), async () => {
            When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                Then("I am on the leaderboard", then.leaderboardVisible([User39LeaderboardItem, User44LeaderboardItem]))
            })
        })
        When("I tap search", when.tapID(ids.SEARCH_BUTTON), async () => {
            Then("I am on the search screen", then.textVisible("Search Leaderboards"))
        })
        When("I search for someone not in the leaderboard", when.searchLeaderboard("wrongstring") , async () => {
            Then("I cannot see anyone", then.canSeeEmptyLeaderboardSearch)
        })
        When("I search for Trump, who is in this leaderboard", when.searchLeaderboard(data.CUSTOMER_44.data.firstName) , async () => {
            Then("I can see that user in the list", then.idVisible(ids.LEADERBOARD_SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])))
        })
        When("I tap Donald Trumo", when.tapText(getFullName(data.CUSTOMER_44)), async () => {
            Then("I should be on the Inspect screen", then.isOnInspectScreen)
            Then("Donald's name is visible", then.idVisible(ids.TEXT_TEMPLATE(getFullName(data.CUSTOMER_44))))
        })
        When("I exit", when.tapID(ids.BUTTON_CLOSE_HEADER("yulife")), async () => {
            When("I tap search", when.tapID(ids.SEARCH_BUTTON), async () => {
                Then("I can see Donald Trumps name is under recent searches", then.idVisible(ids.LEADERBOARD_SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])))
            })
        })
        When("I exit", when.tapID(ids.LEADERBOARD_SEARCH_CLOSE), async () => {
            When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
                Then("I can see the list of leaderboards the user is in", then.idVisible(ids.LEADERBOARD_COMMUNITY_LIST([data.SOCIAL_GROUP_BA5_RULE.data.name, data.SOCIAL_GROUP_BA5_TAG.data.name, data.SOCIAL_GROUP_BA5.data.name])))
            })
        })
        When("I click the leaderboard with rules", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA5_RULE.data.name)), async () => {
            When("I tap view", when.tapText("View Leaderboard"), async () => {
                Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_BA5_RULE.data.name)))
            })
        })
        When("I tap search", when.tapID(ids.SEARCH_BUTTON), async () => {
            Then("I can see Donald Trumps name is under recent searches", then.idVisible(ids.LEADERBOARD_SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])))
        })
        When("I search for Trump, who isn't in this leaderboard", when.searchLeaderboard(data.CUSTOMER_44.data.firstName) , async () => {
            Then("I can still see that user in the list", then.idVisible(ids.LEADERBOARD_SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])))
        })
        When("I exit", when.tapID(ids.LEADERBOARD_SEARCH_CLOSE), async () => {
            When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
                When("I click the leaderboard with rules", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA5_TAG.data.name)), async () => {
                    When("I tap view", when.tapText("View Leaderboard"), async () => {
                        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_BA5_TAG.data.name)))
                    })
                })
            })
        })
        When("I tap search", when.tapID(ids.SEARCH_BUTTON), async () => {
            Then("I can see Donald Trumps name is under recent searches", then.idVisible(ids.LEADERBOARD_SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])))
        })
        When("I search for Trump, who isn't in this leaderboard", when.searchLeaderboard(data.CUSTOMER_44.data.firstName) , async () => {
            Then("I can still see that user in the list", then.idVisible(ids.LEADERBOARD_SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])))
        })
    })
    
    Scenario("I should see the 'Sit tight' copy when I go to the leaderboard as a user whose company does not have a leaderboard setup", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(data.CUSTOMER_89, data.AUTH_89), async () => {
            When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                Then("I should see the sit tight copy", then.textVisible("Sit tight, while we set up your leaderboard"))
            })
        })
    })


})

