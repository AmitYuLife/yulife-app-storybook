import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import { tournamentEventDescription } from "./_resources/fixtures";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as ids from "@ids";
import * as data from "../_data";

Feature("As a user I can opt in and take an event", async () => {
  Scenario("I can take and complete a 3 star challenge event and hit all the event milestones, with the daily hero card toggle", scenario.start, async () => {
    Given("I login and go to yucoin page", given.logInAndGoToTab("yucoin", data.CUSTOMER_72, data.AUTH_72), async () => {
      Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
      Then("I should not see any cycling stats on the screen as I have cycled 0km so far today", then.idNotVisible(ids.CYCLING_COUNT("km")));
      Then("I should see the correct 3 star event for me to complete and the progress bar", then.threeStarEventToBeCompletedVisible(0, 0, "NEW"));
      Then("I should see I have done 0 steps today", then.textVisible("0 steps"));
      Then("I should see 200 yucoin earned today", then.yuCoinTodayEarned([200]));
      Then("I should see my yucoin total in the top of the page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(700)));
    });
    When("I click on the event challenge", when.tapID(ids.EVENT_HEADING("3 star challenges streak", "#464647")), async () => {
      When("I scroll", when.scrollUntilTextVisible(ids.EVENT_DIALOG_SCREEN_SCROLL, data.GOALS_4.data.descriptionTitle, "down"), async () => {
        Then("I should be on the event screen and see the correct earn rates for the challenges", then.eventScreenDetailsAreCorrect(data.GOALS_4));
        Then("I should see all milestones visible to take and their correct yucoin and stars", then.allMilestonesVisible);
      });
    });
    When("I tap the back button", when.tapID(ids.BACK_BUTTON, 3000), async () => {
      When("I tap take take a challenge", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON, 3000), async () => {
        Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible);
        Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6));
      });
    });
    // 1st challenge
    When("I complete a short stroll challenge", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
      Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(152, 40, 400));
    });
    When("I tap collect", when.tapID(ids.CTA_COLLECT, 2000), async () => {
      Then("I should see my yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(740)));
    });
    When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
      Then("I should see the longest number of steps I have done today", then.textVisible("400 steps"));
      Then("I should see I have earned 40 YuCoin today from the walk", then.yuCoinTodayEarned([240]));
      Then("I should see the yucoin page event bar showing the number of 3 star challenges completed and hit the correct milestone", then.yuCoinPageEventDataCorrect(1, 0.25));
    });
    When("I tap on the event challenge", when.tapChallenge(data.GOALS_4.data.title), async () => {
      Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(1, 0.25));
      Then("I should see Claim available for the first milestone", then.claimVisible(1));
    });
    When("I click Claim", when.tapID(ids.CLAIM_BUTTON, 2000), async () => {
      Then("I should see 'Claimed'", then.textVisible("Claimed"));
      Then("I should see 1/4 perfect challenges on the event screen", then.textVisible("1 / 4 perfect challenge(s)"));
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see my new total yucoin earned today with the 1st milestone completed", then.yuCoinTodayEarned([240], 100));
    });
    When("I tap take a challenge", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON), async () => {
      Then("I should see the yucoin total updated with the claimed milestone YuCoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1740)));
      Then("I should be on the challenges screen and see 5 challenges unlocked", then.allChallengesVisible);
      Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6));
    });
    // 2nd challenge
    When("I complete a brisk walk challenge", when.selectAndCompleteWalkingChallenge("Brisk Walk", 1200), async () => {
      Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(152, 60, 1200 + 400));
    });
    When("I tap collect", when.tapID(ids.CTA_COLLECT, 2000), async () => {
      Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1740 + 60)));
    });
    When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
      Then("I should see the longest number of steps I have done today", then.textVisible("1,200 steps"));
      Then("I should see I have earned YuCoin today from the walk", then.yuCoinTodayEarned([1300]));
      Then("I should see the yucoin page event bar showing the number of 3 star challenges completed and the correct milestone I am on", then.yuCoinPageEventDataCorrect(2, 0.5));
    });
    When("I tap on the event challenge", when.tapChallenge(data.GOALS_4.data.title), async () => {
      Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(2, 0.5));
      Then("I should see not see claim available for the second milestone", then.textNotVisible("Claim"));
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap take a challenge", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON), async () => {
        Then("I should see the yucoin total still at 1800 as I have not reached or claimed the next milestone", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1800)));
        Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible);
        Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6));
      });
    });
    // 3rd challenge
    When("I complete a long walk challenge", when.selectAndCompleteWalkingChallenge("Long Walk", 3000), async () => {
      Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(152, 80, 1600 + 3000));
    });
    When("I tap collect", when.tapID(ids.CTA_COLLECT, 2000), async () => {
      Then("I should see the yucoin total updated with the challenge yucoin and daily step milestone yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1890)));
    });
    When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
      Then("I should see the longest number of steps I have done today", then.textVisible("3,000 steps"));
      Then("I should see the yucoin page event bar showing the number of 3 star challenges completed and hit the correct milestone", then.yuCoinPageEventDataCorrect(3, 0.75));
      Then("I should see I have earned 80 and 40 YuCoin today from the walk", then.yuCoinTodayEarned([200, 1070, 40, 80]));
    });
    When("I tap on the event challenge", when.tapChallenge(data.GOALS_4.data.title), async () => {
      Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(3, 0.75));
      Then("I should see Claim available for the first milestone", then.claimVisible(2));
      Then("I should see 3 / 4 perfect challenges on the event screen", then.textVisible("3 / 4 perfect challenge(s)"));
    });
    When("I click Claim", when.tapID(ids.CLAIM_BUTTON, 2000), async () => {
      Then("I should see the first and second milestones complete and the final one incomplete", then.firstAndSecondChallengeClaimedVisible);
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see my new total yucoin earned today with the 2nd milestone completed", then.yuCoinTodayEarned([1270, 40, 80], 150));
    });
    When("I go back to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
      Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(3)));
      Then("I should see the yucoin total updated with the claimed milestone YuCoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(3390)));
    });
    When("I tap level 152 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
      Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible);
      Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6));
    });
    // 4th challenge
    When("I complete a meditation challenge at level 152", when.selectAndCompleteMeditationChallenge(600), async () => {
      Then("I am on the event completed page", then.onGreatJobCompletedEventPage(data.GOALS_4.data.title, "200"));
    });
    When("I click Claim", when.tapID(ids.COLLECT_EVENT_REWARD_BUTTON, 2000), async () => {
      When("I wait", when.wait(5000), async () => {
        Then("I should see the third milestone complete", then.milestoneComplete(0));
      });
    });
    When("I click Great! button", when.tapID(ids.COLLECT_EVENT_REWARD_BUTTON, 2000), async () => {
      When("I tap level 152", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
        Then("I can see all my challenges done and yucoin earned", then.challengesAndYuCoinsAwardedVisible);
      });
    });
    When("I tap the back button", when.tapID(ids.BACK_BUTTON, 3000), async () => {
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
        Then("I should see the longest number of steps I have done today", then.textVisible("3,000 steps"));
        Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"));
        Then("I should see all my total yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(5450)));
        Then("I should see I have earned 4,970 YuCoin today total from all milestones and challenges completed", then.yuCoinTodayEarned([450], 450));
      });
    });
  });

  Scenario("Passive data is correctly logged for an event that has backfill enabled, and the event panel should reflect the world I am on", scenario.start, async () => {
    Given("I login and go to yucoin page", given.logInAndGoToTab("yucoin", data.CUSTOMER_81, data.AUTH_81), async () => {
      Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
      Then("I should see I have done 0 steps today", then.textVisible("0 steps"));
      Then("I should see the event card has the correct desert colour", then.idVisible(ids.EVENT_CARD_COLOUR("#FFFCDE")));
      Then("I should see the event card title has the correct desert colour", then.idVisible(ids.EVENT_HEADING("Walk 10k this week", "#5A5A5C")));
      Then("I should see the event card description has the correct desert colour", then.idVisible(ids.EVENT_DESCRIPTION("0 / 10,000 steps", "#5A5A5C")));
    });
    When("I have done 75,001 steps yesterday", when.addStepsHistoricalData(4000), async () => {
      Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
    });
    When("I tap the menu icon", when.tapID(ids.MENU_ICON, 1500), async () => {
      Then("I should see the menu items", then.menuItemsVisible("basic"));
    });
    When("I tap activity history", when.tapMenuItem("Activity History"), async () => {
      Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 3000));
    });
    When("I refresh the activity history page", when.tapID(ids.LEFT_HEADING_BUTTON("Activity history"), 2000), async () => {
      Then("I should see the historical steps from yesterday loaded in meaning the refresh has worked", then.canSeeYesterdaysSteps);
    });
    When("I go back", when.tapID(ids.BUTTON_CLOSE_HEADER("Activity history")), async () => {
      When("I tap on the event challenge", when.tapID(ids.EVENT_HEADING("Walk 10k this week", "#5A5A5C")), async () => {
        When("I click confirm", when.tapID(ids.EVENT_DIALOG_BUTTON), async () => {
          Then("I should be on the event screen", then.onEventDetailsScreen(data.GOALS_5));
          Then("I should see 4,000 steps have been completed", then.textVisible("4,000 / 10,000 steps"));
        });
      });
    });
    When("I tap claim", when.tapID(ids.CLAIM_BUTTON, 2000), async () => {
      When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
        When("I go to level 800 and claim the chest", when.completeYuniversalAndClaim(800), async () => {
          Then("I should see the event card has the correct yuniverse colour", then.idVisible(ids.EVENT_CARD_COLOUR("#370888")));
          Then("I should see the event card title has the correct yuniverse colour", then.idVisible(ids.EVENT_HEADING("Walk 10k this week", "#FFFFFF")));
          Then("I should see the event card description has the correct yuniverse colour", then.idVisible(ids.EVENT_DESCRIPTION("4,000 / 10,000 steps", "#FFFFFF")));
        });
      });
    });
  });

  Scenario("I can view the active Team vs Team tournament with the remaining days and current team standings", scenario.start, async () => {
    Given("I login and go to yucoin page", given.logInAndGoToTab("yucoin", data.CUSTOMER_72, data.AUTH_72), async () => {
      Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
    });
    When("I swipe right on the event card", when.scrollFromID(ids.EVENT_HEADING(data.GOALS_4.data.title, "#464647"), "left", "fast"), async () => {
      Then("I should see the correct event title", then.idVisible(ids.EVENT_HEADING(data.GOALS_TOURNAMENT.data.title, "#464647")));
      Then("I should see the correct event description", then.idVisible(ids.EVENT_DESCRIPTION(tournamentEventDescription, "#464647")));
    });
    When("I tap on the event card", when.tapID(ids.EVENT_HEADING(data.GOALS_TOURNAMENT.data.title, "#464647")), async () => {
      Then("I should see the correct remaining days", then.textVisible("6 days left", 2000));
      Then("I should see the correct event info", then.onEventDetailsScreen(data.GOALS_TOURNAMENT));
      Then("I should see the current team standings and scores", then.assertTeamStandings(data.SOCIAL_GROUP_KNOCKOUT_TOURNAMENT_MATCH_UP));
    });
  });
});
