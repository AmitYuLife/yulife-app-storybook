import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "./_data";
import * as ids from "@ids";
import * as constants from "./_resources/constants";
import * as fixtures from "./_resources/fixtures";
import { getLocalisedString as t } from "@i18n";
import moment from "moment";
import * as helpers from "./_resources/helpers";

Feature("I am able to see GHI Rewards in App", async () => {
  Scenario("Users can not still see vouchers they didn't use after they have left a company with the game active", scenario.start, async () => {
    Given("I deactivated the cbp for the expired product", given.archiveAndCreateNextSeason(moment().format("YYYY-MM-DD")), async () => {
      When("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_130_GHI_LEAVER, data.AUTH_130), async () => {
        When("I go to rewards", when.tapID(ids.NAV_BAR("rewards")), async () => {
          Then("I can't see the rewards screen", then.textVisible("Rewards closed for now!"));
          Then("I can't see rewards, including those from the game", then.multipleRewardsNotVisible(constants.ghiRewardIds));
        });
      });
    });
  });

  Scenario("Reward notifications don't show on transition levels and they don't level me in the game", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("quests", data.CUSTOMER_131_GHI_REWARDS, data.AUTH_131), async () => {
      Then("I am on the quest screen", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
      Then("I should see level 50", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(50)));
      Then("I should not see the reward icon on the next level as it's a transition", then.idNotVisible(ids.GHI_REWARD_ICON("50")));
    });
    When("I tap level 50", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(50)), async () => {
      When("I navigate the yunity journey", when.navigateYunityForestJourneyCorrect, async () => {
        Then("I should see level 51", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51)));
        Then("I should see the reward icon but for level 52", then.idVisible(ids.GHI_REWARD_ICON("52")));
      });
    });
    When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
      When(`I tap the product`, when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Health insurance")), async () => {
        Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
      });
    });
    When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up", 0.5, 0.5, 2500), async () => {
      Then("I can see all the headings related to the GHI rewards (1/6)", then.GHIRewardsHeadingsVisible("1/6"));
    });
    When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down", 0.5, 0.5, 2500), async () => {
      Then("I can see all the progress bars related to the GHI rewards, which haven't levelled from the transition", then.GHIRewardsProgressBarsVisible(8));
    });
    When("I close the screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
      When("I go to the quest screen", when.tapID(ids.NAV_BAR("quests")), async () => {
        When("I tap level 51", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(51)), async () => {
          When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
            When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
              Then("I should see the well done screen", then.onChallengeComplete(3050, 51));
            });
          });
        });
      });
    });
    When("I tap collect on the well done screen", when.tapID(ids.CTA_COLLECT), async () => {
      When("I wait 10 seconds", when.wait(10000), async () => {
        Then("I should see the first day streak screen", then.textVisible("First day done!"));
      });
    });
    When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
      Then("I should see the reward icon but for level 52 despite the clock being there", then.idVisible(ids.GHI_REWARD_ICON("52")));
    });
  });

  // @update - spoke with Alessio, bug confirmed, will return and fix later

  ScenarioSkip("Half modals display the correct tease for games starting in the future, and the learn more page shows the correct pre-start details", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("quests", data.CUSTOMER_133_GHI_FUTURE, data.AUTH_133), async () => {
      Then("I am on the quest screen", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
      Then("I should see level 22", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(22)));
    });
    When("I tap level 23", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(23)), async () => {
      Then("I see the half modal for level 23 being locked as this user has the toggle switched on", then.lockedLevelHalfModalVisible(23, false, false));
      // Then("I see the tease for the rewards game starting soon", then.ghiRewardsTeaseVisible)
    });
    When("I tap to close the modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1), async () => {
      When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
        When("I confirm my selection", when.tapText("Confirm selection"), async () => {
          Then("I see the tease for the rewards game starting soon as I am over level 5", then.ghiRewardsTeaseVisible);
        });
      });
    });
    // When("I click to learn more, as the user is above level 5 in the game", when.tapText(constants.learnMoreButton), async () => {
    //     Then("I should be on the GHI rewards learn more page", then.onGHIRewardsLearnMorePage("pre", "0", data.GOAL_PARTICIPATION_14.data.startDateTime))
    // })
    // When("I click to go back", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
    //     When("I go to the quest tab", when.tapID(ids.NAV_BAR("quests")), async () => {
    //         When("I tap level 22", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(22)), async () => {
    //             When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
    //                 When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
    //                     Then("I should see the well done screen", then.onChallengeComplete(3050, 22))
    //                 })
    //             })
    //         })
    //     })
    // })
    // When("I tap collect on the well done screen", when.tapID(ids.CTA_COLLECT), async () => {
    //     When("I wait 10 seconds", when.wait(10000), async () => {
    //         Then("I should see the first day streak screen", then.textVisible("First day done!"))
    //         Then("I see the tease for the rewards game starting soon on the streak screen", then.ghiRewardsTeaseVisible)
    //     })
    // })
  });

  // @flaky - Passes if run alone, seemingly fails when above scenario is run before
  // gonna run and see how it does
  Scenario("A user signed up to two games can only play in one", scenario.start, async () => {
    Given("I run the worker to assign game participation", given.synchroniseProductGoalParticipants("YUG1010113"), async () => {
      When("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_134_GHI_REWARDS, data.AUTH_134), async () => {
        Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
      });
    });
    When("I click on the first health insurance project", when.tapIDAtIndex(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Health insurance"), 1), async () => {
      When("I swipe to the bottom", when.swipeFromText("Key Info", "up", "fast"), async () => {
        Then("I can see the rewards game hasn't started as I am in another game already", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.rewardsGameOnTheWayImg)));
      });
    });
    When("I swipe to the top", when.swipeFromText("FAQs", "down", "fast"), async () => {
      When("I close the screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
        When("I click on the second health insurance project", when.tapIDAtIndex(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Health insurance"), 0), async () => {
          When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(4));
          });
        });
      });
    });
  });

  // @update skipping for same bug mentioned above

  ScenarioSkip("The learn more tease does not show for users in the reward store before the game starts if they are below level 6", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("rewards", data.CUSTOMER_135_GHI_FUTURE, data.AUTH_135), async () => {
      When("I confirm my selection", when.tapText("Confirm selection"), async () => {
        Then("I am on the rewards screen", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1000)));
        Then("I can't see the tease for the rewards game starting soon as I'm under level 6", then.textNotVisible(constants.rewardsTeaseText));
      });
    });
    When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see level 5", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5)));
    });
    When("I tap level 6", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(6)), async () => {
      Then("I see the half modal for level 5 being locked as this user has the toggle switched on", then.lockedLevelHalfModalVisible(6, false, false));
      Then("I see the tease for the rewards game starting soon", then.ghiRewardsTeaseVisible);
    });
    When("I tap to close the modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1), async () => {
      When("I tap level 5", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
        When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
          When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
            Then("I should see the well done screen", then.onChallengeComplete(3050, 5));
          });
        });
      });
    });
    When("I tap collect on the well done screen", when.tapID(ids.CTA_COLLECT), async () => {
      When("I wait 10 seconds", when.wait(10000), async () => {
        Then("I should see the first day streak screen", then.textVisible("First day done!"));
      });
    });
    When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
      When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
        When("I wait", when.wait(3000), async () => {
          Then("I see the tease for the rewards game starting soon as I'm now level 6", then.ghiRewardsTeaseVisible);
        });
      });
    });
  });

  Scenario("Users see the correct streak modal when mid-way to earning a gift", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("quests", data.CUSTOMER_136_GHI_REWARDS, data.AUTH_136), async () => {
      Then("I should see level 15", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(15)));
    });
    When("I tap level 15", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(15)), async () => {
      When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
        When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
          Then("I should see the well done screen", then.onChallengeComplete(3050, 15));
        });
      });
    });
    When("I tap collect on the well done screen", when.tapID(ids.CTA_COLLECT), async () => {
      When("I wait 10 seconds", when.wait(10000), async () => {
        Then("I should see the first day streak screen", then.textVisible("First day done!"));
        Then("I should see the reward modal on the streak screen", then.rewardGameStreakModalVisible(false, "3 x Urban Massage Vouchers", "9 / 10"));
      });
    });
  });

  Scenario("Users don't continue seeing game info on streaks after finishing the game", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("quests", data.CUSTOMER_139_GHI_REWARDS, data.AUTH_139), async () => {
      Then("I should see level 2", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(2)));
    });
    When("I tap level 3", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(3)), async () => {
      Then("I should not see anything telling me about rewards in the game", then.genericLevelHalfModalVisible(true, 3, "200 / 200"));
    });
    When("I tap to close the modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1), async () => {
      When("I tap level 2", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(2)), async () => {
        When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
          When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
            Then("I should see the well done screen", then.onChallengeComplete(3050, 2));
          });
        });
      });
    });
    When("I tap collect on the well done screen", when.tapID(ids.CTA_COLLECT), async () => {
      When("I wait 10 seconds", when.wait(10000), async () => {
        Then("I should see the first day streak screen", then.textVisible("First day done!"));
        Then("I shouldn't see any about the rewards game", then.textNotVisible("200 / 200 Levels completed"));
      });
    });
  });

  Scenario("Users with correct toggles on an active GHI game should not see the interstitial modal", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("quests", data.CUSTOMER_140_GHI_REWARDS, data.AUTH_140), async () => {
      Then("I should see level 197", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(197)));
    });
    When("I tap level 197", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(197)), async () => {
      Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
    });
    When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see level 197", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(197)));
    });
    When("I tap level 198 (locked level)", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(198)), async () => {
      Then("I see the half modal for level 198 but cannot see the game active progress", then.lockedLevelHalfModalVisible(198, false, false));
    });
    When("I tap 'got it'", when.tapText(t("Got it")), async () => {
      When("I tap level 199 (locked level)", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(199)), async () => {
        Then("I should NOT see the interstitial modal and see the progress of the game", then.lockedLevelHalfModalVisible(199, true, false));
      });
    });
  });

  Scenario("As a user who had their GHI product removed, I should not see any features of the GH game", scenario.start, async () => {
    Given("I run the archive product and create next season worker product", given.archiveAndCreateNextSeason(moment().format("YYYY-MM-DD")), async () => {
      When("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_GH_REMOVED, data.AUTH_GH_REMOVED), async () => {
        Then("I should not see the Health Insurance product", then.textNotVisible("Health Insurance"));
      });
    });
    When("I go to the quest map", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see the normal quest map FTUE title", then.textVisible("Earn more YuCoin!"));
      Then("I should not see the GH quest map FTUE title", then.textNotVisible("Level up for rewards!"));
    });
    When("I tap the bubble for level 5", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
      Then("I should not see the exclusice discounts GH teaser", then.textNotVisible("Exclusive Discounts"));
      Then("I should not see the more rewards ahead modal", then.moreRewardsAheadNotVisible(true));
      Then("I should not see the more rewards ahead modal with the alternate title", then.moreRewardsAheadNotVisible(false));
      Then("I should not see the GH game tease", then.ghiRewardsTeaseNotVisible);
    });
    When("I tap 'got it'", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
      When("I go to rewards", when.tapID(ids.NAV_BAR("rewards")), async () => {
        When("I confirm my location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 1500), async () => {
          Then("I should not see the GH game progress component", then.idNotVisible(ids.REWARDS_STORE_GAME_PROGRESS));
          Then("I should not see any group health rewards", then.groupHealthRewardsNotVisible());
        });
      });
    });
    When("I scroll down the rewards page", when.scrollFromID(ids.REWARDS_LIST_SCREEN_SCROLL, "up", "fast"), async () => {
      Then("I should not see any group health rewards", then.groupHealthRewardsNotVisible());
    });
  });
});
