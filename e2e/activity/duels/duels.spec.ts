import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import moment from "moment";

Feature("As an enabled user I am able to use the duels feature", async () => {
  Scenario("As a user I am able to invite another user to a duel, and the opponent is able to accept the duel", scenario.start, async () => {
    Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_20, data.AUTH_20), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON));
      });
    });
    When("I tap duels icon", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
      Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]));
    });
    When("I tap next", when.tapID(ids.NEXT_BUTTON_DUEL_ONBOARDING, 2000), async () => {
      Then("I should be on the second duels intro screen", then.multipleTextVisible(["Set the wager", "Next"]));
    });
    When("I tap next", when.tapID(ids.NEXT_BUTTON_DUEL_ONBOARDING, 2000), async () => {
      Then("I should be on the third duels intro screen", then.multipleTextVisible(["Out-step your opponent", "Let's go"]));
    });
    When("I tap Let's go", when.tapID(ids.LETS_GO_BUTTON_DUEL_ONBOARDING, 2000), async () => {
      Then("I should be on the empty duels hub", then.onEmptyDuelsHub);
    });
    When("I tap challenge a colleague", when.tapID(ids.CHALLENGE_FRIEND_BUTTON, 2000), async () => {
      Then("I should see that my current YuCoin total is 220", then.textVisible("220"));
      Then("I should be on the Search for a friend screen", then.textVisible("Search for a friend:"));
      Then("I should see Angela Martin", then.textVisible("Angela Martin"));
    });
    When("I search for someone who doesn't exist", when.searchForDuelOpponent("Doesnt Exist"), async () => {
      Then("I should see the invite friend option", then.inviteFriendScreenVisible);
    });
    When("I tap on the Invite a Colleague", when.tapID(ids.CTA_INVITE_COLLEAGUE), async () => {
      Then("I should be on the referral screen", then.isOnInivteColleaguePage);
    });
    When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap duels icon", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
        Then("I should be on the empty duels hub", then.onEmptyDuelsHub);
      });
    });
    When("I tap challenge a colleague", when.tapID(ids.CHALLENGE_FRIEND_BUTTON, 2000), async () => {
      When("I search for angela", when.searchForDuelOpponent("Angela"), async () => {
        Then("I should see Angela Martin", then.textVisible("Angela Martin"));
      });
    });
    When("I tap a Angela Martin", when.tapText("Angela Martin"), async () => {
      Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel"]));
    });
    When("I tap the 'Set the duel' CTA", when.tapID(ids.SET_DUEL_BUTTON, 1500), async () => {
      Then("I should be on the yucoin wager screen", then.idVisible(ids.DUEL_OPTIONS_SCREEN));
      Then("I should see the select wager button", then.idVisible(ids.PICKER_AMOUNT_LABEL));
    });
    When("I tap Select a wager", when.tapID(ids.PICKER_AMOUNT_LABEL, 1500), async () => {
      Then("I should see an native list modal with different yucoin amounts", then.wagerModalVisible);
    });
    When("I tap 25 yucoin", when.tapID(ids.WAGER_OPTION(25), 1500), async () => {
      Then("I should be on the wager screen with my wager amount shown", then.multipleTextVisible(["Your wager", "25 YuCoin"]));
    });
    When("I tap send duel request", when.tapID(ids.SEND_DUEL_REQUEST_BUTTON, 1500), async () => {
      Then("I should see a confirmation modal", then.textVisible("Confirm invitation?"));
    });
    When("I tap confirm", when.tapText("Confirm"), async () => {
      Then("I should see the correct amount deducted from my YuCoin total from the top bar", then.textVisible("195"));
      Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB));
      Then("I should see the duel I just requested", then.idVisible(ids.DUELS_HUB_INVITATION("Angela Martin", 25, "invited"), 5000));
    });
    When("I restart and login as the invited user", when.restartToDuelsRequest(data.CUSTOMER_19, data.AUTH_19, true, 5000), async () => {
      When("I close and reopen the app", when.reloadOnly, async () => {
        When("I wait", when.wait(15000), async () => {
          Then("I should see the vs screen", then.textVisible("Oscar has invited you to a 1-day duel for 25 YuCoin!", 5000));
        });
      });
    });
    When("I accept the duel", when.tapID(ids.CTA_ACCEPT, 1500), async () => {
      Then("I should see the are you sure iOS modal", then.textVisible("Are you sure?"));
    });
    When("I tap confirm", when.tapText("Confirm", 2000, true), async () => {
      When("I to dismiss the referrals pop up", when.tapID(ids.DAILYSTEP_SCREEN_COIN, 2000), async () => {
        When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
          Then("I should see the duels button", then.idVisible(ids.DUELS_BUTTON, 2000));
        });
      });
    });
    When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
      Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]));
    });
    When("I tap complete the duels intro", when.completeOnboardingIntro(), async () => {
      Then("I should be on the duels hub", then.onDuelsHub);
      Then("I should see my upcoming duel", then.idVisible(ids.DUEL_ENTRY("Oscar Martinez", 25, "accepted"), 5000));
    });
  });

  Scenario("As a user who has accepted a duel, I am able to compete in it", scenario.start, async () => {
    Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_17, data.AUTH_17), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON));
      });
    });
    When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
      Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]));
    });
    When("I tap complete the intro", when.completeOnboardingIntro(), async () => {
      Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB));
      Then("I should see my active duel", then.idVisible(ids.DUEL_ENTRY("Stanley Hudson", 10, "accepted"), 5000));
    });
    When("I walk 200 steps", when.sendSteps(200), async () => {
      Then("I should see the number of steps I just walked", then.textVisible("200 steps today", 3000));
    });
    When("I go back", when.tapID(ids.BACK_BUTTON, 1500), async () => {
      When("I go the 'YuCoin' screen", when.tapID(ids.NAV_BAR("yucoin"), 1500), async () => {
        Then("I should see the updated today's step count", then.idVisible(ids.STEPS_COUNT(200), 2000));
      });
    });
  });

  Scenario("I should see a confirmation prompt when ending a duel to ensure step sync accuracy", scenario.withSearchToken(55), async () => {
    Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_17, data.AUTH_17), async () => {
      Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON));
    });
    When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 2500), async () => {
      Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]));
    });
    When("I tap complete the intro", when.completeOnboardingIntro(), async () => {
      Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB));
    });
    When("I tap on the 'Completed' duels tab", when.tapID(ids.COMPLETED_TAB, 2500), async () => {
      Then("I should see both duel Sync buttons", then.idVisibleAtIndex(ids.DUEL_SYNC, 1, 1500));
      Then("I should see both duel Confirm buttons", then.idVisibleAtIndex(ids.DUEL_CONFIRM, 1, 1500));
      Then("I should see the correct date of my second duel date", then.idVisible(ids.DUEL_DATE(moment().subtract(1, "days").format("DD/MM/YYYY")), 1500));
      Then("I should see my second duel pending and awaiting confirmation", then.idVisible(ids.DUEL_ENTRY("Angela Martin", 10, "pending_submission"), 3000));
    });
    When("I tap to 'Confirm' the steps for the second duel on the list", when.tapIDAtIndex(ids.DUEL_CONFIRM, 1, 2500), async () => {
      Then("I should see the correct steps of my second duel", then.idVisible(ids.DUEL_DESCRIPTION(100, 250), 2500));
      Then("I should see that I won this duel", then.textVisibleAtIndex("you won!", 0, 3000));
      Then("I should see that my first duel still awaits confirmation", then.idVisible(ids.DUEL_ENTRY("Michael Scott", 10, "pending_submission"), 3000));
      Then("I should still see the correct sync copy", then.textVisible("Sync your steps"));
    });
    When("I update the steps for the first duel", when.addStepsHistoricalData(3000, 2), async () => {
      When("I tap the 'Sync' button", when.tapID(ids.DUEL_SYNC, 3500), async () => {
        Then("I should see the duel state copy update successfully", then.textVisible("Confirm your steps", 2500));
        Then("I should see the updated duel steps after the sync", then.idVisible(ids.DUEL_STEPS("3000 steps"), 2500));
      });
    });
    When("I tap to 'Confirm' the steps for the first duel on the list", when.tapID(ids.DUEL_CONFIRM, 1500), async () => {
      Then("I should see that I lost this duel", then.idVisible(ids.DUEL_ICON("Michael Scott", false), 2000));
      Then("I should see the correct synced steps of my second duel", then.idVisible(ids.DUEL_DESCRIPTION(4000, 3000), 2500));
      Then("I should not see any sync buttons", then.idNotVisible(ids.DUEL_SYNC));
      Then("I should not see any confirm buttons", then.idNotVisible(ids.DUEL_CONFIRM));
    });
  });

  Scenario("I should see a pending duel state when the opponent has not yet confirmed their steps", scenario.start, async () => {
    Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_19, data.AUTH_17), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON));
      });
    });
    When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
      Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]));
    });
    When("I tap complete the intro", when.completeOnboardingIntro(), async () => {
      Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB));
    });
    When("I tap on the 'Completed' duels tab", when.tapID(ids.COMPLETED_TAB, 1500), async () => {
      When("I scroll at the bottom of the screen", when.scrollFromID(ids.DUELS_HUB, "up", "fast", 0.4), async () => {
        Then("Sync button should not be visible", then.idNotVisible(ids.DUEL_SYNC));
        Then("Confirm button should not be visible", then.idNotVisible(ids.DUEL_CONFIRM));
        Then("I should see that the duel pending confirmation copy is correct", then.textVisible("Waiting for user’s steps to sync", 2500));
        Then("I should see my duel with Ryan is still pending confirmation", then.idVisible(ids.DUEL_ENTRY("Ryan Howard", 10, "pending_submission"), 3000));
      });
    });
  });

  Scenario("I am able to view my won and lost duels", scenario.start, async () => {
    Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_19, data.AUTH_19), async () => {
      Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON));
    });
    When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
      Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]));
    });
    When("I tap complete the intro", when.completeOnboardingIntro(), async () => {
      Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB));
    });
    When("I tap Completed", when.tapID(ids.COMPLETED_TAB, 1500), async () => {
      Then("I should see my past duel with Stanely Hudson", then.idVisible(ids.DUEL_ENTRY("Stanley Hudson", 10, "finished")));
      Then("I should see I lost this duel", then.idVisible(ids.DUEL_ICON("Stanley Hudson", false)));
      Then("I should see the steps for this duel", then.idVisible(ids.DUEL_DESCRIPTION(500, 300)));
      Then("I should see my past duel with Oscar Martinez", then.idVisible(ids.DUEL_ENTRY("Oscar Martinez", 10, "finished")));
      Then("I should see I won this duel", then.idVisible(ids.DUEL_ICON("Oscar Martinez", true)));
      Then("I should see the steps for this duel", then.idVisible(ids.DUEL_DESCRIPTION(400, 600)));
    });
  });

  Scenario("I am able to view my past duels with deleted users", scenario.start, async () => {
    Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_84, data.AUTH_84), async () => {
      Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON));
    });
    When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
      Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]));
    });
    When("I tap complete the intro", when.completeOnboardingIntro(), async () => {
      Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB));
    });
    When("I tap Completed", when.tapID(ids.COMPLETED_TAB, 1500), async () => {
      Then("I should see my past duel with a deleted user", then.idVisible(ids.DUEL_ENTRY(null, 10, "finished")));
      Then("I should see I lost this duel", then.idVisible(ids.DUEL_ICON(null, false)));
      Then("I should see the steps for this duel", then.idVisible(ids.DUEL_DESCRIPTION(500, 300)));
    });
  });

  Scenario("I can view and challenge people I have dueled before", scenario.start, async () => {
    Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_27, data.AUTH_27), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON));
      });
    });
    When("I tap duels icon", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
      Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]));
    });
    When("I tap complete the intro", when.completeOnboardingIntro(), async () => {
      Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB, 1500));
    });
    When("I tap Challenge a friend", when.tapID(ids.CHALLENGE_FRIEND_BUTTON, 1500), async () => {
      Then("I should be on the search for a friend page", then.textVisible("Search for a friend:"));
    });
    When("I search for Toby", when.searchForDuelOpponent(data.CUSTOMER_28.data.firstName), async () => {
      Then("I should see Toby Flenderson", then.textVisible("Toby Flenderson", 2000));
    });
    When("I tap on Toby Flenderson", when.tapID(ids.DUEL_SEARCH_LIST_ITEM("Toby Flenderson"), 1500), async () => {
      Then("I should be on the matchup page", then.textVisible("The matchup:"));
      Then("I should see You", then.textVisible("You"));
      Then("I should see Toby Flenderson", then.textVisible("Toby Flenderson"));
    });
  });
});
