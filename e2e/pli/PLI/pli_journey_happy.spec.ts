import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import { BACK_BUTTON, DATE_PICKER, EDIT_BUTTON, GENERIC_SCREEN_HEADING, HORIZONTAL_SCROLLER, PACKAGE_INFO, PRODUCT_STEP_BODY_SCROLL_VIEW, SCROLL_NUMBER_PICKER, SCROLL_PICKER_ACTIVE_ITEM } from "@ids";
import { CUSTOMER_37, AUTH_37, CUSTOMER_PLI_2, AUTH_PLI_2, CUSTOMER_PLI_3, AUTH_PLI_3 } from "../_data";
import { PLICommonPlan, PLIEpicPlan, PLIRarePlan } from "./_resources/fixtures";
import { viewAccDeathPolicy } from "./_resources/constants";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";

Feature("PLI HAPPY", async () => {
  // @update [ test may be redundant due to recent enrolment/personal product changes ]
  ScenarioSkip("A user with a quote within the last 60 days can still see and finish their PLI journey", scenario.start,async () => {
      Given("I login as a user with Covea FIB enabled and a quote from 59 days ago",given.loginToYuScreen(false, CUSTOMER_37, AUTH_37), async () => {
        When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
          When("I swipe down the screen", when.swipeFromText("Create your Yumoji to step into the Yuniverse", "up", "slow"), async () => {
            When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
              Then(`I should be on YuScreen V4 and see PLI only`, then.onYuscreenV4(CUSTOMER_37, "PliOnly", "10"));
            });
          });
        });
      });
      When("I swipe up the screen", when.swipeFromText("Share your thoughts", "down", "fast"), async () => {
        When("I swipe up the screen again", when.swipeFromText("Browse more protection", "down", "fast"), async () => {
          When("I click on the life insurance product", when.tapText("Life Insurance"), async () => {
            When("I wait", when.wait(5000), async () => {
              When("I tap on 25% Common cover", when.tapText("25%"), async () => {
                Then("I should see corect Common plan", then.packageVisible(PLICommonPlan));
              });
            })
          })
        })
      })
      When("I tap on 75% Epic cover", when.tapText("75%"), async () => {
        Then("I should see corect Epic plan", then.packageVisible(PLIEpicPlan));
      });
      When("I tap on 50% Rare cover", when.tapText("50%"), async () => {
        Then("I should see corect Rare plan", then.packageVisible(PLIRarePlan));
      });
      When("I Edit this screen", when.tapID(EDIT_BUTTON), async () => {
        Then(`I should have selected 60`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM("60")));
      });
      When(`I choose 35`, when.swipeOnPicker(DATE_PICKER, SCROLL_PICKER_ACTIVE_ITEM("35"), "left"), async () => {
        Then(`I should have selected "35"`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM("35")));
        Then(`I should see corect Price changed according when i am  "35" years`, then.multiFactorPriceChange(22, "£7.05", "£2,083.33", 35));
      });
      When(`I choose 61`, when.swipeOnPicker(DATE_PICKER, SCROLL_PICKER_ACTIVE_ITEM("61"), "right", 200), async () => {
          Then(`I should have selected 61`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM("61")));
          Then(`I should see corect Price changed according when I am 62`, then.multiFactorPriceChange(22, "£18.53", "£2,083.33", 61));
        });
      When("I tap on percentage choose", when.tapText("Or, choose a custom percentage"), async () => {
        Then(`I should see selected 50 % by default`, then.idVisible(SCROLL_NUMBER_PICKER(50), 4000));
      });
      When(`I choose 62%`, when.swipeOnPicker(HORIZONTAL_SCROLLER, SCROLL_NUMBER_PICKER(64), "right"), async () => {
        Then(`I should have selected 62`, then.idVisible(SCROLL_PICKER_ACTIVE_ITEM("62")));
        Then("I should see correct price package appearing", then.multiFactorPriceChange(22, "£23.14", "£2,583.33", 61));
      })
      When("I scroll and tap on Documents", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Documents", "down"), async () => {
          Then("I shoul be on Documents page", then.isOnDocumentsScreen);
      });
      When("I tap to go back to Summary screen", when.tapID(BACK_BUTTON), async () => {
        Then("I should see again Documnets Button", then.textVisible("Documents"));
      });
      When("I scroll to the bottom and tap Continue", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down"), async () => {
        Then("I should be on the next page", then.textNotVisible("Select your cover"));
      });
      When("I scroll to the left", when.scrollFromID(PACKAGE_INFO, "left", "slow", 0.4), async () => {
        Then(`I should see Ocean Explorer`, then.textVisible("Ocean Explorer"));
      });
      When("I scroll to the left", when.scrollFromID(PACKAGE_INFO, "left", "slow", 0.4), async () => {
        Then(`I should see Desert Trailblazer`, then.textVisible("Desert Trailblazer"));
      });
      When("I scroll to the left", when.scrollFromID(PACKAGE_INFO, "left", "slow", 0.4), async () => {
        Then(`I should see Mountain Adventurer`, then.textVisible("Mountain Adventurer"));
      });
      When("I scroll to the right", when.scrollFromID(PACKAGE_INFO, "right", "fast", 1.0), async () => {
        When("I scroll to the right", when.scrollFromID(PACKAGE_INFO, "right", "fast", 1.0), async () => {
          Then(`I should see Forest Pathfinder`, then.textVisible("Forest Pathfinder"));
          Then(`I should see the style header`, then.textVisible("Almost there, choose a style for your Rare chest"));
          Then(`I should see the style subheader`, then.textVisible("from any of our worlds: Forest, Ocean, Desert or Mountain!"));
        });
      });
      When("I tap Continue", when.tapText("Continue"), async () => {
        Then("I should be on the next page", then.textNotVisible("Almost there, choose a style for your Rare chest"));
        Then("I should see Summary page", then.textVisible("Summary"));
        // this defaults to the one in the old quote, expected behaviour
        Then("I should see correct package selected for the original quote, not what I just selected", then.packageSummaryVisible("rare", "£30.13", "£3,125"));
      });
      When("I scroll and tap on Documents", when.scrollToAndTapText(PRODUCT_STEP_BODY_SCROLL_VIEW, "Documents", "down"), async () => {
          Then("I shoul be on Documents page", then.isOnDocumentsScreen);
        });
      When("I tap to go back to Summary screen", when.tapID(BACK_BUTTON), async () => {
        Then("I should see again Documents Button", then.textVisible("Documents"));
      });
      // rest of the test not able to be done due to @bug stripe warning on checkout GS-864
      //helper.CHECKOUT(true, "Rare");
      //helper.REVIEW_YUSCREEN();
    });

  Scenario("A user who had a quote started over 60 days ago can no longer see and finish their journey", scenario.start, async () => {
      Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false, CUSTOMER_PLI_2, AUTH_PLI_2), async () => {
        When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
          When("I swipe down the screen", when.swipeFromText("Create your Yumoji to step into the Yuniverse", "up", "slow"), async () => {
            When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
              Then(`I should be on YuScreen V4 and see no PLI`, then.onYuscreenV4(CUSTOMER_PLI_2, "noPLI", "1"));
            });
          });
        });
      });
    });

  // @update [ test may be redundant due to recent enrolment/personal product changes ]
  ScenarioSkip("A user who had a medical holding can see and finish their journey", scenario.start, async () => {
    Given("I login as a user with Covea FIB enabled", given.loginToYuScreen(false, CUSTOMER_PLI_3, AUTH_PLI_3), async () => {
      When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
        When("I swipe down the screen", when.swipeFromText("Create your Yumoji to step into the Yuniverse", "up", "slow"), async () => {
          When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
            Then(`I should be on YuScreen V4 and see PLI in the holding state`, then.onYuscreenV4(CUSTOMER_PLI_3, "holdingPLI", "1"));
          })
        })
      })
    })
    When("I click on the life insurance product", when.tapText("Life Insurance"), async () => {
      Then("I should see the medical holding page", then.pliHoldingPageVisible)
    })
    When("I click to see the acc death policy", when.tapText(viewAccDeathPolicy), async () => {
      Then("I am on the policy page", then.idVisible(GENERIC_SCREEN_HEADING("Accidental Death Benefit")))
    })
  })
})
