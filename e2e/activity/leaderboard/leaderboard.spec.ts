import { Scenario, Given, When, Then, Feature, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as helper from "./_resources/helpers";
import * as ids from "@ids";
import * as data from "../_data";
import {
  DefaultStepsLeaderboard,
  DefaultYudokuLeaderboard,
  User143ImpactPassLeaderboardItem,
  User16LeaderboardItem,
  User17LeaderboardItem,
  User18ImpactPassLeaderboardItem,
  User18LeaderboardItem,
  User20LeaderboardItem,
  User39LeaderboardItem,
  User40LeaderboardItem,
  User44LeaderboardItem,
  User47LeaderboardItem,
  User50LeaderboardItem,
  User73LeaderboardItem,
} from "./_resources/fixtures";
import { getFullName } from "_utils/users";

Feature("As a user I can see my achievements on the leaderboard", async () => {
  Scenario("I can consent to my company leaderboard, and view referrals from the leaderboard", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_16, data.AUTH_16), async () => {
      Then("I should see the menu icon on the top left", then.idVisible(ids.MENU_ICON, 4000));
    });
    When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard"), 7000), async () => {
      Then("I should see the leaderboard screen without consent", then.onLeaderboardWithoutConsent());
    });
    When("I tap the Yudoku tab", when.tapID(ids.LEADBOARD_TAB("Yudoku"), 3000), async () => {
      Then("I can see the emtpy yudoku leaderboard state", then.onLeaderboardWithoutConsent());
    });
    When("I tap the steps tab", when.tapID(ids.LEADBOARD_TAB("Steps"), 3000), async () => {
      When("I tap Join the leaderboard", when.tapJoinLeaderboard, async () => {
        Then("I can see the leaderboard list modal", then.canSeeLeaderboardListModal([DefaultStepsLeaderboard, DefaultYudokuLeaderboard], false));
      });
    });
    When("I tap the Steps switch", when.tapLeaderboardConsentSwitch(DefaultStepsLeaderboard, false), async () => {
      When("I tap the Yudoku switch", when.tapLeaderboardConsentSwitch(DefaultYudokuLeaderboard, false), async () => {
        When("I press continue", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
          Then("I should see the leaderboard", then.leaderboardVisible([User50LeaderboardItem, User47LeaderboardItem], 3000));
        });
      });
    });
    When("I tap 30 days", when.tapID(ids.LEADERBOARD_INFO_BUTTON, 3000), async () => {
      Then("I should be on the about leaderboard page", then.idVisible(ids.LEADERBOARD_INFO));
    });
    When("I tap the back button", when.tapID(ids.SCREEN_CLOSE, 2000), async () => {
      Then("I should be back on the leaderboard", then.leaderboardVisible([User18LeaderboardItem, User16LeaderboardItem], 2000));
    });
  });

  Scenario("I can change consent to a leaderboard I belong to", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_17, data.AUTH_17), async () => {
      When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 3000), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name), 2000));
        Then("I should see the leaderboard", then.leaderboardVisible([User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem], 2000));
      });
      When("I swipe up if needed", when.swipeFromText("Steps", "down", "fast"), async () => {
        When("I tap on the leaderboard name", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
          Then("I should see my active leaderboard", then.idVisible(ids.LEADERBOARD_COMMUNITY_LIST([data.SOCIAL_GROUP_C1.data.name])));
        });
      });
      When("I tap close", when.tapID(ids.FLOATING_CONTINUE_BUTTON, 1500), async () => {
        When("I tap the menu", when.tapID(ids.BUTTON_TOP_LEFT_BAR, 1500), async () => {
          When("I tap settings", when.tapMenuItem("Settings"), async () => {
            When("I tap leaderboards", when.tapText("Leaderboards", 1500), async () => {
              Then("I can see the option for Steps leaderboards", then.idVisible(ids.SETTINGS_SWITCH("Steps", true)));
            });
          });
        });
      });
      When("I tap the ID to switch consent off", when.tapID(ids.SETTINGS_SWITCH("Steps", true), 2000), async () => {
        When("I tap turn it off", when.tapID(ids.GENERIC_SCREEN_CTA("Turn it off"), 2000), async () => {
          Then("I can see the option for Yudoku leaderboards", then.idVisible(ids.SETTINGS_SWITCH("Steps", false), 3_000));
        });
      });
      When("I tap close", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0, 3_000), async () => {
        Then("I can see the emtpy yudoku leaderboard state", then.onLeaderboardWithoutConsent());
      });
      When("I go to my YuScreen", when.tapID(ids.NAV_BAR("yu"), 2000), async () => {
        When("I am not consented to any leaderboards and I tap 'Show your friends that you appreciate them' card", when.tapID(ids.HERO_CARD_SECTION, 3_000), async () => {
          Then("I should see 'Join the Leaderboard to send gifts to your friends!' pop up", then.textVisible("Join the Leaderboard to send gifts to your friends!", 5_000));
        });
      });
      When("I tap cancel", when.tapText("Cancel", 3_000), async () => {
        Then("The pop up should close and I should be back on the YuScreen", then.yuScreenV5HeaderVisible(false, "Ryan Howard", "Forest", "2", false));
      });
      When("I tap 'Show your friends that you appreciate them' card again", when.tapID(ids.HERO_CARD_SECTION, 3000), async () => {
        When("I tap Join the Leaderboard", when.tapText("Join Leaderboard", 4_000), async () => {
          Then("I should see the leaderboard screen ", then.onLeaderboardWithoutConsent());
        });
      });
    });
  });

  Scenario("I can check other leaderboards", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_19, data.AUTH_19), async () => {
      When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
        Then("I should see the union leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_U1.data.name)));
        Then("On the union leaderboard, I should see members from other companies as well", then.idVisible(ids.LEADERBOARD_EMPLOYEE_NAME("Eugeniu Grosu")));
      });
    });
    When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
      When("I click leaderboard 2", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_C2.data.name)), async () => {
        When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
          Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE("LB2")));
          Then("I should be on the second leaderboard", then.leaderboardVisible([User20LeaderboardItem, User40LeaderboardItem], 2000));
        });
      });
    });
    When("I scroll to the top of the page", when.scrollUntilIdVisible(ids.LEADERBOARD_SCROLL_LIST, ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C2.data.name), "down"), async () => {
      When("I tap the leaderboard drop down", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
        Then("I should be on the leaderboard selection screen", then.idVisible(ids.LEADERBOARD_COMMUNITY_LIST([data.SOCIAL_GROUP_U1.data.name, data.SOCIAL_GROUP_C2.data.name, data.SOCIAL_GROUP_C1.data.name])));
      });
    });
    When("I tap the first leaderboard, Lb1", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_C1.data.name)), async () => {
      When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
        Then("I should see the first leaderboard", then.leaderboardVisible([User18LeaderboardItem], 2000));
      });
    });
  });

  Scenario("I can inspect other members and view their data and avatars from the leaderboard - seed data", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_47, data.AUTH_47), async () => {
      Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500));
      Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Gill Stock", "Forest", "1", true));
    });
    helper.CREATE_AVATAR(data.CUSTOMER_47)();
    When("I wait", when.wait(6000), async () => {
      When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)));
        Then("I should see the leaderboard", then.leaderboardVisible([User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem], 2000));
      });
    });
    When("I click on user Michael's name", when.clickUser(data.CUSTOMER_18), async () => {
      Then("I should be on the Inspect screen", then.isOnInspectScreen);
      Then("Michael's name is visible", then.idVisible(ids.YUSCREEN_V5_USERNAME(getFullName(data.CUSTOMER_18))));
      Then("Michael's world and level is visible", then.idVisible(ids.YUSCREEN_V5_WORLD_AND_LEVEL("Forest", data.USER_GAME_STATE_18.data.currentLevel)));
      Then("Michael's empty yumoji is visible", then.idVisible(ids.YUMOJI));
    });
    When("I scroll down to the challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.2, 3000), async () => {
      Then("I should see Michael's Duel stats", then.duelStatsVisible(2, 3));
      Then("I should see the Challenge to duel button", then.challengeToDuelButtonVisible);
    });
    When("I scroll to the Challenge statistics section", when.scrollUntilTextVisible(ids.USER_INFO("Michael Scott 4"), "Activity", "down"), async () => {
      Then("I should see the Challenge stats", then.challengeDataVisible(0, 0));
      Then("I should see the Activity section heading", then.activitySectionHeadingVisible("Michael Scott 4"));
    });
    When("I scroll down", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.6), async () => {
      Then("I should see the yumoji avatars and the comparative activity stats between me and Michael", then.comparativeUserSeedStatsVisible(26, 333));
      Then("I should see the average cycling and mindfulness comparative data", then.comparativeUserCyclingMindfulnessStats(0.1, 1, 0, 3));
    });
    When("I tap to go back", when.tapID(ids.LEFT_HEADING_BUTTON(null), 3000), async () => {
      When("I click on my own name", when.tapLeaderboardUser(User47LeaderboardItem), async () => {
        Then("I should be on the Inspect screen", then.isOnInspectScreen);
        Then("My name is visible", then.idVisible(ids.YUSCREEN_V5_USERNAME(getFullName(data.CUSTOMER_47))));
        Then("My world and level is visible", then.idVisible(ids.YUSCREEN_V5_WORLD_AND_LEVEL("Forest", data.USER_GAME_STATE_47.data.currentLevel)));
        Then("My yumoji is", then.idVisible(ids.YUMOJI));
        Then("I should see my Duel stats", then.myDuelStatsVisible(2));
      });
    });
    When("I scroll down to the challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.2), async () => {
      Then("I should see the Challenge somebody to duel button", then.challengeSomebodyButtonVisible);
    });
    When("I scroll to the Challenge statistics section", when.scrollUntilIdVisible(ids.USER_INFO("Gill Stock 1"), ids.INSPECT_ACTIVITY("Longest streak"), "down"), async () => {
      Then("I should see the Challenge stats", then.myChallengeDataVisible(0));
      Then("I should see the Activity section heading", then.activitySectionHeadingVisible("Gill Stock 1"));
    });
    When("I scroll to the Activity data section", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.4), async () => {
      Then("I should see my yumoji avatar and my activity stats", then.mySeedStatsVisible);
    });
    When("I scroll down", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.3), async () => {
      Then("I should see the average mindfulness comparative data", then.myMindfulnessDataVisible);
    });
  });

  Scenario("I can inspect other members and view their data and avatars from the leaderboard - seed data + loaded in historical data", scenario.start, async () => {
    When("I have done two days ago 15,000 steps", when.addStepsHistoricalData(15000, 2), async () => {
      When("I have done two days ago Biking 9 km", when.addCyclingHistoricalData(9000, 2), async () => {
        When("I have done two days ago 13:20 min Mindfulness", when.addMindfulnessHistoricalData(800, 2), async () => {
          Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_47, data.AUTH_47), async () => {
            Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500));
            Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Gill Stock", "Forest", "1", true));
          });
        });
      });
    });
    helper.CREATE_AVATAR(data.CUSTOMER_47)();
    When("I wait", when.wait(6000), async () => {
      When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)));
        Then("I should see the leaderboard", then.leaderboardVisible([User17LeaderboardItem], 2000));
      });
    });
    When("I click on user Michael's name", when.clickUser(data.CUSTOMER_18), async () => {
      Then("I should be on the Inspect screen", then.isOnInspectScreen);
      Then("Michael's name is visible", then.idVisible(ids.YUSCREEN_V5_USERNAME(getFullName(data.CUSTOMER_18))));
      Then("Michael's world and level is visible", then.idVisible(ids.YUSCREEN_V5_WORLD_AND_LEVEL("Forest", data.USER_GAME_STATE_18.data.currentLevel)));
      Then("Michael's empty yumoji is visible", then.idVisible(ids.YUMOJI));
    });
    When("I scroll down to the challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.1), async () => {
      Then("I should see Michael's Duel stats", then.duelStatsVisible(2, 3));
    });
    When("I scroll down to the challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.2), async () => {
      Then("I should see the Challenge to duel button", then.challengeToDuelButtonVisible);
    });
    When("I scroll to the Challenge statistics section", when.scrollFromID(ids.USER_INFO("Michael Scott 4"), "down", "fast"), async () => {
      Then("I should see the Challenge stats", then.challengeDataVisible(0, 0));
      Then("I should see the Activity section heading", then.activitySectionHeadingVisible("Michael Scott 4"));
    });
    When("I scroll to the Activity data section", when.scrollFromID(ids.USER_INFO("Michael Scott 4"), "up", "slow", 0.4), async () => {
      Then("I should see the yumoji avatars and the comparative walking activity stats between me and Michael", then.comparativeUserStatsVisible(26, 833));
    });
    When("I scroll down", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.6), async () => {
      Then("I should see the average cycling and mindfulness comparative data", then.comparativeUserCyclingMindfulnessStats(0.1, 1.3, 0, 3));
    });
  });

  Scenario("I can inspect myself and challenge a different user to a duel for the first time via inspect", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_47, data.AUTH_47), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500));
      });
    });
    When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
      When("I click on my own name", when.tapHighlightedLeaderboardUser(User47LeaderboardItem), async () => {
        Then("I should be on the Inspect screen", then.isOnInspectScreen);
      });
    });
    When("I scroll down to the duels challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.3, 3000), async () => {
      When("I tap on the duels button", when.tapID(ids.CHALLENGE_DUEL_BUTTON, 2000), async () => {
        Then("I should be on the Challenge a friend screen", then.onChallengeAFriend);
      });
    });
    When("I tap next", when.tapID(ids.NEXT_BUTTON_DUEL_ONBOARDING), async () => {
      Then("I should be on the set the wager screen", then.isOnSetWagerScreen);
    });
    When("I tap next", when.tapID(ids.NEXT_BUTTON_DUEL_ONBOARDING), async () => {
      Then("I should be on the out-step your opponent screen", then.isOnOutStepOpponentScreen);
    });
    When("I tap let's go", when.tapID(ids.LETS_GO_BUTTON_DUEL_ONBOARDING), async () => {
      Then("I should see Challenge a friend button", then.challengeFriendButtonVisible);
      Then("I should be on the empty duels hub", then.onEmptyDuelsHub);
    });
    When("I tap challenge a colleague", when.tapID(ids.CHALLENGE_FRIEND_BUTTON), async () => {
      Then("I should be on the Search for a friend screen", then.textVisible("Search for a friend:", 2000));
    });
    When("I search for Angela", when.typeViaID(ids.SEARCH_INPUT, data.CUSTOMER_19.data.firstName), async () => {
      Then("I should see Angela Martin", then.textVisible("Angela Martin"));
    });
    When("I tap on Angela Martin", when.tapID(ids.DUEL_SEARCH_LIST_ITEM("Angela Martin"), 1500), async () => {
      Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel"]));
    });
  });

  Scenario("I can inspect a player and challenge the user to a duel for the first time via inspect", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_47, data.AUTH_47), async () => {
      Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500));
    });
    When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
      When("I click on user Michael's name", when.tapHighlightedLeaderboardUser(User18LeaderboardItem), async () => {
        Then("I should be on the Inspect screen", then.isOnInspectScreen);
      });
    });
    When("I scroll down to the duels challenge button", when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 0.2), async () => {
      When("I tap duels button", when.tapID(ids.CHALLENGE_DUEL_BUTTON, 2000), async () => {
        Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel", "You", "Michael Scott"]));
      });
    });
  });

  Scenario("Unlocked achievements modal should not appear when inspecting another user", scenario.start, async () => {
    Given("I login as a user with an unlocked and equipped achievement badge", given.loginAsUser(data.CUSTOMER_39, data.AUTH_39), async () => {
      Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500));
    });
    When("I navigate to the YuScreen", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
      Then("I should see the achievement slot already filled", then.idVisible(ids.ACHIEVEMENT_SLOT(1), 2500));
    });
    When("I navigate to the Leaderboards", when.tapID(ids.NAV_BAR("leaderboard"), 3000), async () => {
      When("I tap the dropdown to open the community list", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1, 3000), async () => {
        When("I select the BA3 leaderboard", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA3.data.name)), async () => {
          When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON, 3000), async () => {
            Then("I should see Tywin Lannister on the leaderboard list", then.idVisible(ids.LEADERBOARD_EMPLOYEE_NAME("Tywin Lannister"), 3000));
          });
        });
      });
      When("I tap on Tywin Lannister", when.tapID(ids.LEADERBOARD_EMPLOYEE_NAME("Tywin Lannister"), 3000), async () => {
        Then("I should be on the Inspect screen", then.isOnInspectScreen);
        Then("Tywin's name is visible", then.idVisible(ids.YUSCREEN_V5_USERNAME(getFullName(data.CUSTOMER_73))));
        Then("The new achievement unlocked modal should NOT be visible", then.textNotVisible("New achievement unlocked!", 3000));
      });
    });
  });

  Scenario("Social groups / leaderboards based on 'rules' function as expected", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("leaderboard", data.CUSTOMER_39, data.AUTH_39), async () => {
      When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1, 3000), async () => {
        When("I click the leaderboard SG5", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA5.data.name)), async () => {
          When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
            When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
              Then("I am on the leaderboard", then.leaderboardVisible([User39LeaderboardItem, User44LeaderboardItem], 2500));
            });
          });
        });
      });
    });
    When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
      When("I click the leaderboard with rules", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA5_RULE.data.name)), async () => {
        When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
          Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_BA5_RULE.data.name)));
          Then("I should be on the second leaderboard", then.leaderboardVisible([User39LeaderboardItem], 2000));
          Then("I cannot see the user who was archived due to having a different department", then.cannotSeeLeaderboardUser(User44LeaderboardItem));
        });
      });
    });
  });

  Scenario("As a user with concurrent employments, I should see all available leaderboards", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("leaderboard", data.CUSTOMER_39, data.AUTH_39), async () => {
      When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1, 3000), async () => {
        When("I tap on first company leaderboard", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA5.data.name)), async () => {
          When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
            When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
              Then("I am on the first company leaderboard", then.leaderboardVisible([User39LeaderboardItem, User44LeaderboardItem], 2500));
            });
          });
        });
      });
    });
    When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
      When("I tap on the second company leaderboard", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA3.data.name)), async () => {
        When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
          Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_BA3.data.name)));
          Then("I should be on the second company leaderboard", then.leaderboardVisible([User39LeaderboardItem, User73LeaderboardItem], 2000));
          Then("I should not see the user who belongs to the other business in this leaderboard", then.cannotSeeLeaderboardUser(User44LeaderboardItem));
        });
      });
    });
  });

  Scenario("Leaderboard search functions as expected", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_39, data.AUTH_39), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(50), async () => {
        When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard"), 5000), async () => {
          When("I switch leaderboard", when.switchLeaderboard(data.SOCIAL_GROUP_BA5.data.name), async () => {
            Then("I am on the leaderboard", then.leaderboardVisible([User39LeaderboardItem, User44LeaderboardItem], 3000));
          });
        });
      });
    });
    When("I tap search", when.tapID(ids.SEARCH_BUTTON, 3000), async () => {
      Then("I am on the search screen", then.textVisible("Search Leaderboards"));
      Then("I should see the search referral", then.searchReferralVisible);
    });
    When("I tap on the Invite a Colleague", when.tapID(ids.CTA_INVITE_COLLEAGUE, 3000), async () => {
      Then("I should be on the referral screen", then.isOnInivteColleaguePage);
    });
    When("I go back", when.tapID(ids.BACK_BUTTON, 3000), async () => {
      Then("I am on the leaderboard", then.leaderboardVisible([User39LeaderboardItem, User44LeaderboardItem], 3000));
    });
    When("I tap search", when.tapID(ids.SEARCH_BUTTON, 3000), async () => {
      When("I search for someone not in the leaderboard", when.searchLeaderboard("wrongstring"), async () => {
        Then("I cannot see anyone", then.searchReferralVisible);
      });
    });
    When("I search for Trump, who is in this leaderboard", when.searchLeaderboard(data.CUSTOMER_44.data.firstName), async () => {
      Then("I can see that user in the list", then.idVisible(ids.SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])));
    });
    When("I tap on Donald Trump", when.tapID(ids.LEADERBOARD_EMPLOYEE_NAME(`${data.CUSTOMER_44.data.firstName} ${data.CUSTOMER_44.data.lastName}`), 3000), async () => {
      Then("I should be on the Inspect screen", then.isOnInspectScreen);
      Then("Donald's name is visible", then.idVisible(ids.YUSCREEN_V5_USERNAME(getFullName(data.CUSTOMER_44))));
    });
    When("I exit", when.tapID(ids.LEFT_HEADING_BUTTON(null), 3000), async () => {
      Then("I can see Donald Trumps name is under recent searches", then.idVisible(ids.SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])));
    });
    When("I exit", when.tapID(ids.SEARCH_CLOSE, 3000), async () => {
      When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
        Then("I can see the list of leaderboards the user is in", then.idVisible(ids.LEADERBOARD_COMMUNITY_LIST([data.SOCIAL_GROUP_BA5_RULE.data.name, data.SOCIAL_GROUP_U1.data.name, data.SOCIAL_GROUP_BA5_TAG.data.name, data.SOCIAL_GROUP_BA5.data.name, data.SOCIAL_GROUP_BA3.data.name])));
      });
    });
    When("I click the leaderboard with rules", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA5_RULE.data.name), 3000), async () => {
      When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_BA5_RULE.data.name)));
      });
    });
    When("I tap search", when.tapID(ids.SEARCH_BUTTON, 3000), async () => {
      Then("I can see Donald Trumps name is under recent searches", then.idVisible(ids.SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])));
    });
    When("I search for Trump, who isn't in this leaderboard", when.searchLeaderboard(data.CUSTOMER_44.data.firstName), async () => {
      Then("I can still see that user in the list", then.idVisible(ids.SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])));
    });
    When("I exit", when.tapID(ids.SEARCH_CLOSE, 3000), async () => {
      When("I tap the dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
        When("I click the leaderboard with rules", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_BA5_TAG.data.name)), async () => {
          When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
            Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_BA5_TAG.data.name)));
          });
        });
      });
    });
    When("I tap search", when.tapID(ids.SEARCH_BUTTON, 3000), async () => {
      Then("I can see Donald Trumps name is under recent searches", then.idVisible(ids.SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])));
    });
    When("I search for Trump, who isn't in this leaderboard", when.searchLeaderboard(data.CUSTOMER_44.data.firstName), async () => {
      Then("I can still see that user in the list", then.idVisible(ids.SEARCH_RESULTS([getFullName(data.CUSTOMER_44)])));
    });
  });

  Scenario("I should see the 'Sit tight' copy when I go to the leaderboard as a user whose company does not have a leaderboard setup", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_89, data.AUTH_89), async () => {
      When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
        Then("I should see the sit tight copy", then.checkCopyNoLeaderboard);
      });
    });
  });

  // @update -- Temp skip due to steps count not tapering correctly
  ScenarioSkip("A users leaderboard updates accurately when creating a new step document after not having one due to a long absence & a user who has locked steps over 30 days ago starts to see their steps tapering off each day", scenario.start, async () => {
    Given("I login as a user with no leaderboard score document", given.loginAsUser(data.CUSTOMER_138, data.AUTH_138), async () => {
      When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
        When("I tap the leaderboard dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 0), async () => {
          Then("I can see the active leaderboard", then.idVisible(ids.COMMUNITY_LIST_ITEM("active")));
          Then("I can see the locked leaderboard", then.idVisible(ids.COMMUNITY_LIST_ITEM("locked")));
          Then("I can see the consent leaderboard", then.idVisible(ids.COMMUNITY_LIST_ITEM("consent")));
          Then("I can not see the archived leaderboard", then.idNotVisible(ids.COMMUNITY_LIST_ITEM("archived")));
        });
      });
    });
    When("I tap to see the active leaderboard", when.tapID(ids.COMMUNITY_LIST_ITEM("active")), async () => {
      When("I select to view that leaderboard", when.tapText("View Leaderboard"), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_ACTIVE.data.name)));
        // below users steps should be 260,000 despite being seeded with 300,000 due to tapering off as user hasn't
        // been active over the last 5 days (so drops 10,000 at the end of each day)
        Then("I can see another user with their updated steps", then.idVisibleAtIndex(ids.LEADERBOARD_NAME("Inac Tive", "260,000", 1, "leaderboard"), 0, 2000));
      });
    });
    When("I tap the leaderboard dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 0), async () => {
      When("I tap to see the consent leaderboard", when.tapID(ids.COMMUNITY_LIST_ITEM("consent")), async () => {
        When("I select to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
          Then("I see I am on a leaderboard which I have not consented to join", then.onLeaderboardWithoutConsent(true, false));
        });
      });
    });
    When("I go back to the today screen", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      When("I walk 200 steps", when.sendSteps(200), async () => {
        Then("I should see the updated step count", then.idVisible(ids.STEPS_COUNT(200)));
      });
    });
    When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
      Then("I see I still have not consented to join the leaderboard I was on despite adding steps", then.onLeaderboardWithoutConsent(true, false));
    });
    // checking changing consent to true updates active leaderboards in the score document
    When("I tap Join the leaderboard", when.tapID(ids.LEADEADRBOARD_JOIN_BUTTON), async () => {
      Then("I can see the leaderboard list modal", then.canSeeLeaderboardListModal([DefaultStepsLeaderboard], false));
    });
    When("I tap the Steps switch", when.tapLeaderboardConsentSwitch(DefaultStepsLeaderboard, false), async () => {
      When("I press continue", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_CONSENT.data.name)));
        Then("I can see another user with their steps", then.idVisibleAtIndex(ids.LEADERBOARD_NAME("Inac Tive", "260,000", 1, "leaderboard"), 0));
        Then("I can see my user and their steps are at 200", then.idVisibleAtIndex(ids.LEADERBOARD_NAME("Lead Erboard", "200", 2, "leaderboard"), 0));
      });
    });
    // checking active leaderboard is updated with new score document
    When("I tap the leaderboard dropdown", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 0), async () => {
      Then("I can not see the archived leaderboard despite creating a new score document", then.idNotVisible(ids.COMMUNITY_LIST_ITEM("archived")));
    });
    When("I tap to see the active leaderboard", when.tapID(ids.COMMUNITY_LIST_ITEM("active")), async () => {
      When("I select to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
        Then("I can see my user with their updated steps", then.idVisibleAtIndex(ids.LEADERBOARD_NAME("Lead Erboard", "200", 2, "leaderboard"), 0));
        Then("I can see another user with their steps that have still tapered out", then.idVisibleAtIndex(ids.LEADERBOARD_NAME("Inac Tive", "260,000", 1, "leaderboard"), 0, 1500));
      });
    });
  });

  Scenario("I should not be able to search for, or send a gift to a user who has opted-out of all leaderboards, but has donated and is visible on the ESG leaderboard.", scenario.start, async () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason([data.BUSINESS_ACCOUNT_2.data.business_account_id]), async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        Given("I login", given.logInAndGoToTab("rewards", data.CUSTOMER_18, data.AUTH_18), async () => {
          Then("I should be on the rewards screen", then.idVisible(ids.REWARDS_SCREEN, 1500));
          Then("I should see my coin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(520)));
        });
      });
    });
    When("I tap on the 'Reward Pass' teaser", when.tapID(ids.REWARD_PASS("Impact Pass"), 3000), async () => {
      Then("I should be on the battle pass screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
      Then("I should 2 avatar on the 'Plant trees' donations list", then.idVisibleAtIndex(ids.DONATION_LIST_AVATARS(2), 0, 2000));
    });
    When("I tap the 'Plant trees' donation list item", when.tapID(ids.IMPACT_DONATION_TITLE("Plant trees"), 1500), async () => {
      Then("I should see Monkey D Luffy in 1st position for the 'trees' leaderboard", then.impactPassLeaderboardVisible([User143ImpactPassLeaderboardItem], 2000));
      Then("I should see myself Michael Scott in 2nd position for the 'trees' leaderboard", then.impactPassLeaderboardVisible([User18ImpactPassLeaderboardItem], 2000));
    });
    When("I tap to go back", when.tapID(ids.BUTTON_TOP_LEFT_BAR, 2000), async () => {
      When("I to go back again", when.tapID(ids.BACK_BUTTON, 3000), async () => {
        Then("I should be on the rewards screen", then.idVisible(ids.REWARDS_SCREEN, 1500));
      });
    });
    When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
      Then("I should be back on the leaderboard", then.leaderboardVisible([User18LeaderboardItem], 2000));
      Then("I should not see Monkey D Luffy listed on the 'steps' leaderboard as he has opted out", then.idNotVisible(ids.LEADERBOARD_EMPLOYEE_NAME("Monkey D Luffy")));
    });
    When("I tap on the search icon", when.tapID(ids.SEARCH_BUTTON, 2000), async () => {
      When("I search for Monkey D Luffy who hasn't consented to the leaderboard", when.typeViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_143)), async () => {
        Then("I should not see any user", then.searchReferralVisible);
      });
    });
  });

  Scenario("I can eligible to view OR-grouped leaderboards as a user satisfying either operand of the OR-query", scenario.start, async () => {
    // Trigger the workers to update the leaderboard enrolments for the two relevant users
    Given("I trigger the leaderboard enrolments worker for the first relevant user", given.triggerSyncAllLeaderboardEnrolmentsForUser([data.CUSTOMER_17.data.customerId, data.CUSTOMER_18.data.customerId]), async () => {
      // First login as a user who satisfies the first criteria of the OR-group leaderboard
      When("I login", given.loginAsUser(data.CUSTOMER_17, data.AUTH_17), async () => {
        When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 3000), async () => {
          When("I tap the dropdown to select a different leaderboard", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
            When("I click the option for the OR-type rule-based leaderboard", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_DEPARTMENT_OR_CONTRACT_TYPE.data.name)), async () => {
              When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
                Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE("Test OR Group Department x Contract Type")));
                Then("I should see that I'm eligible to join this leaderboard", then.onLeaderboardWithoutConsent(true, false));
              });
            });
          });
        });
      });
    });
    // Now logout and login as a user who satisfies the second criteria of the OR-group leaderboard
    When("I login as the second user", when.fullRestartAndLogin(data.CUSTOMER_18, data.AUTH_18), async () => {
      When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 3000), async () => {
        When("I tap the dropdown to select a different leaderboard", when.tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1), async () => {
          When("I click the option for the OR-type rule-based leaderboard", when.tapID(ids.COMMUNITY_LIST_ITEM(data.SOCIAL_GROUP_DEPARTMENT_OR_CONTRACT_TYPE.data.name)), async () => {
            When("I tap to view that leaderboard", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
              Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE("Test OR Group Department x Contract Type")));
              Then("I should see that I'm also eligible to join this leaderboard", then.onLeaderboardWithoutConsent(true, false));
            });
          });
        });
      });
    });
  });
});
