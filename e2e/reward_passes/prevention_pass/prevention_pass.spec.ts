import { Feature, Scenario, Given, When, Then, FeatureSkip, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as commonWhen from "../_common/when";
import * as commonThen from "../_common/then";
import * as commonGiven from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import moment from "moment";
import * as textConstants from "./constants.text";
import { GENERIC_AUTH_PASSWORD } from "../../_utils/users/auth";

const MILESTTONE_DETAILS_ASSERTIONS = [
  {
    position: 1,
    titleAssertion: "Up to 30% off Bupa health assessments",
    descriptionAssertions: ["Get a comprehensive picture of your current health and future risks.", "Assessments include various tests, such as blood tests, cholesterol checks, and lifestyle evaluations, tailored to your needs."],
  },
  {
    position: 2,
    titleAssertion: "Up to 15% off private medical scans with Scan.com",
    descriptionAssertions: ["Get simplified access to medical imaging services like MRI, CT, and ultrasound scans.", "Quick bookings, transparent pricing, and fast results on their easy-to-use platform."],
  },
  {
    position: 3,
    titleAssertion: "12 months Meditopia premium subscription",
    descriptionAssertions: ["Improve your sleep and focus, reduce stress, and enhance overall mental wellbeing.", "Get a wide range of guided meditations, sleep stories, and mindfulness practices."],
  },
  {
    position: 4,
    titleAssertion: "15% off BetterHelp for a year",
    descriptionAssertions: ["Take control of your stress, anxiety, relationships, or other struggles with therapy from the comfort of your own home.", "Talk to a range of licensed therapists through video, phone, or live chat."],
  },
  {
    position: 5,
    titleAssertion: "x1 skin cancer screening on the Skinvision app",
    descriptionAssertions: ["Detect potential signs of skin cancer early with your one-time scan.", "Scan moles or skin spots with your phone's camera and receive an instant risk assessment."],
  },
  {
    position: 6,
    titleAssertion: "12 months Sleep Cycle premium subscription",
    descriptionAssertions: ["Smart alarm clock app designed to improve your sleep quality and help you wake up feeling refreshed.", "Enjoy features like sleep statistics, soundscapes, and personalised insights."],
  },
  {
    position: 7,
    titleAssertion: "Free Withings Body Smart scale",
    descriptionAssertions: ["Track your body composition metrics such as body fat, muscle mass, water percentage, and BMI.", "With the Withings Health Mate app, get personalised insights and progress tracking on your phone."],
  },
  {
    position: 8,
    titleAssertion: "Free Pocdoc at-home heart check",
    descriptionAssertions: ["Perform an at-home Healthy Heart check for cardiovascular risk.", "The app offers instant, accurate results and provides personalised advice based on your health data."],
  },
  {
    position: 9,
    titleAssertion: "12 months Lifesum premium subscription",
    descriptionAssertions: ["Achieve your fitness and nutrition goals by tracking your food intake, exercise, and overall lifestyle habits.", "Personalise your meal plans, track your calories, and get nutritional advice tailored to your specific needs."],
  },
  {
    position: 10,
    titleAssertion: "12 months Fiit premium subscription",
    descriptionAssertions: ["Meet your fitness goals with personalised training plans, progress tracking, and community challenges.", "Unlimited access to on-demand classes, including strength training, yoga, HIIT, and pilates."],
  },
  {
    position: 11,
    titleAssertion: "Free New Balance 880 running shoes",
    descriptionAssertions: ["A high-performance running shoe designed for comfort and support on long-distance runs.", "Whether you're an avid runner or just starting out, the New Balance 880 is perfect for your running journey."],
  },
];

const CLAIM_MILESTONE_ASSERTIONS = [
  {
    levelIncValue: 1,
    position: 1,
    rewardDetailsTextAssertions: [
      "Bupa Health Assessments",
      "It's time to take a proactive step towards your wellbeing. These comprehensive health checks are packed with medical and non-invasive tests, including a diabetes test, a thorough cholesterol profile, a mobility and flexibility review, plus many more!",
    ],
  },
  {
    levelIncValue: 4,
    position: 2,
    rewardDetailsTextAssertions: ["Scan.com", "Digital scan images"],
  },
  {
    levelIncValue: 20,
    position: 3,
    rewardDetailsTextAssertions: ["Meditopia", "Meditopia premium includes unlimited access to thousands of daily meditations and resources to find peace and improve your wellbeing."],
  },
  {
    levelIncValue: 50,
    position: 4,
    rewardDetailsTextAssertions: ["BetterHelp", "You deserve to be happy."],
  },
  {
    levelIncValue: 50,
    position: 5,
    rewardDetailsTextAssertions: ["SkinVision", "Is that mole looking a little too suspicious?"],
  },
  {
    levelIncValue: 50,
    position: 6,
    rewardDetailsTextAssertions: ["Sleep Cycle", "Smart Alarm - wakes you up in light sleep"],
  },
  {
    levelIncValue: 50,
    position: 7,
    rewardDetailsTextAssertions: ["Withings", "Our bodies are complex, but Withings makes things simple."],
  },
  {
    levelIncValue: 50,
    position: 8,
    rewardDetailsTextAssertions: ["PocDoc", "A little love for your heart today can prevent you from missing a beat tomorrow."],
  },
  {
    levelIncValue: 50,
    position: 9,
    rewardDetailsTextAssertions: ["Lifesum", "Lifesum is a health app that makes it easy to eat better, stay active, and reach your health goals. It provides personalised meal plans, nutrition advice, and healthy recipes that are easy to whip up."],
  },
  {
    levelIncValue: 50,
    position: 10,
    rewardDetailsTextAssertions: ["Fiit", "You've unlocked a 12-month Fiit premium subscription!"],
  },
  {
    levelIncValue: 125,
    position: 11,
    rewardDetailsTextAssertions: ["New Balance", "If life is a marathon, at least with New Balance you'll get to run with style."],
  },
];

const BUSINESS_ACCOUNT_ID = data.BUSINESS_PREVENTION_PASS.business.data.businessAccountId;
const BATTLE_PASS_START_LOCAL_DATE = moment().subtract(1, "year").format("YYYY-MM-DD");
const BATTLE_PASS_END_LOCAL_DATE = moment().subtract(1, "year").add(24, "months").subtract(1, "day");
const BATTLE_PASS_REWARD_PASS_ID = "metlife-gip-uk";

Feature("Prevention pass", async () => {
  Scenario("I can freshly join the Prevention Pass and check the FAQ", scenario.start, async () => {
    Given("A 'business_product_created' event was emitted", commonGiven.triggerProductCreated(BUSINESS_ACCOUNT_ID, BUSINESS_ACCOUNT_ID, BATTLE_PASS_REWARD_PASS_ID, BATTLE_PASS_START_LOCAL_DATE), async () => {
      Given("I login", commonGiven.loginAsUser(data.CUSTOMER_PREVENTION_PASS_01.customer, GENERIC_AUTH_PASSWORD), async () => {
        When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards"), 3000), async () => {
          Then("I can see the Prevention Pass", then.idVisible(ids.REWARD_PASS("Prevention Pass"), 30000));
        });
      });
    });

    When("I go to the reward pass screen", when.tapID(ids.REWARD_PASS("Prevention Pass"), 3000), async () => {
      Then("I should see the next reward progress bar", then.textVisible("0 / 1 levels", 500));
      Then("I should see how many levels I have to complete in total", then.textVisible("Complete 500 levels", 500));
      Then("I should see how many days I have left", then.textVisible(`${BATTLE_PASS_END_LOCAL_DATE.diff(moment(), "days")} days left`, 500));
      Then("I should see the rewards unlock screen", then.idVisible(ids.REWARDS_UNLOCK_SCROLL));
    });

    When("I scroll to the FAQ section", when.scrollWithLimitedAttemptsUntilIdVisible(ids.REWARDS_UNLOCK_SCROLL, ids.TEXT_TEMPLATE("How do I level up?", "b2b"), "up"), async () => {
      Then("I should see the first FAQ", then.idVisible(ids.TEXT_TEMPLATE("How do I level up?", "b2b")));
    });

    When("I click on the first FAQ", when.tapID(ids.TEXT_TEMPLATE("How do I level up?", "b2b")), async () => {
      Then("I am on the FAQ page for the first FAQ", commonThen.assertMultipleTextsVisible(textConstants.LEARN_MORE_FAQ_PAGE1));
      Then("I can press the back button", then.idVisible(ids.BACK_BUTTON));
    });

    When("I click to go back", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be able to scroll", then.idVisible(ids.REWARDS_UNLOCK_SCROLL));
    });

    When("I scroll to the second FAQ", when.scrollWithLimitedAttemptsUntilIdVisible(ids.REWARDS_UNLOCK_SCROLL, ids.TEXT_TEMPLATE("How do I claim my rewards?", "b2b"), "up"), async () => {
      Then("I should see the second FAQ", then.idVisible(ids.TEXT_TEMPLATE("How do I claim my rewards?", "b2b")));
    });

    When("I click on the second FAQ", when.tapID(ids.TEXT_TEMPLATE("How do I claim my rewards?", "b2b")), async () => {
      Then("I am on the FAQ page for the second FAQ", commonThen.assertMultipleTextsVisible(textConstants.LEARN_MORE_FAQ_PAGE2));
      Then("I can press the back button", then.idVisible(ids.BACK_BUTTON));
    });

    When("I click to go back", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be able to scroll", then.idVisible(ids.REWARDS_UNLOCK_SCROLL));
    });

    When("I scroll to the third FAQ", when.scrollWithLimitedAttemptsUntilIdVisible(ids.REWARDS_UNLOCK_SCROLL, ids.TEXT_TEMPLATE("What happens when the time runs out?", "b2b"), "up"), async () => {
      Then("I should see the third FAQ", then.idVisible(ids.TEXT_TEMPLATE("What happens when the time runs out?", "b2b")));
    });

    When("I click on the third FAQ", when.tapID(ids.TEXT_TEMPLATE("What happens when the time runs out?", "b2b")), async () => {
      Then("I am on the FAQ page for the third FAQ", commonThen.assertMultipleTextsVisible(textConstants.LEARN_MORE_FAQ_PAGE3));
    });
  });

  Scenario("I can check all the milestone details", scenario.start, async () => {
    Given("A 'business_product_created' event was emitted", commonGiven.triggerProductCreated(BUSINESS_ACCOUNT_ID, BUSINESS_ACCOUNT_ID, "metlife-gip-uk", BATTLE_PASS_START_LOCAL_DATE), async () => {
      Given("I login", commonGiven.loginAsUser(data.CUSTOMER_PREVENTION_PASS_01.customer, GENERIC_AUTH_PASSWORD), async () => {
        When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards"), 3000), async () => {
          Then("I can see the Prevention Pass", then.idVisible(ids.REWARD_PASS("Prevention Pass"), 30000));
        });
      });
    });

    When("I go to the reward pass screen", when.tapText("Prevention Pass", 4000), async () => {
      Then("I should see the rewards unlock screen", then.idVisible(ids.BATTLE_PASS_LIST));
      for (const { position, titleAssertion, descriptionAssertions } of MILESTTONE_DETAILS_ASSERTIONS) {
        When(`I swipe left to scroll right until milestone position ${position}`, when.scrollWithLimitedAttemptsUntilIdVisible(ids.BATTLE_PASS_LIST, ids.BATTLE_PASS_LIST_ITEM(position), "left"), async () => {
          Then(`I should see the milestone position ${position}`, then.idVisible(ids.BATTLE_PASS_LIST_ITEM(position)));
          When(`I press on the milestone position ${position}`, when.tapID(ids.BATTLE_PASS_LIST_ITEM(position)), async () => {
            Then(`I can see the reward title of milestone position ${position}`, then.idVisible(ids.ITEM_DETAILS_HALF_MODAL_TITLE(titleAssertion)));

            When("I scroll to the bottom of the page", when.scrollFromID(ids.ITEM_DETAILS_HALF_MODAL_TITLE(titleAssertion), "up", "fast"), async () => {
              Then(`I can see the reward descriptions of milestone position ${position}`, commonThen.assertMultipleTextsVisible(descriptionAssertions));

              When("I press the got it button", when.tapID(ids.HALF_MODAL_CTA), async () => {
                Then("I'm back at the reward pass screen", then.textVisible("Prevention pass"));
              });
            });
          });
        });
      }
    });
  });

  Scenario("I can claim all the milestones", scenario.start, async () => {
    Given("A 'business_product_created' event was emitted", commonGiven.triggerProductCreated(BUSINESS_ACCOUNT_ID, BUSINESS_ACCOUNT_ID, "metlife-gip-uk", BATTLE_PASS_START_LOCAL_DATE), async () => {
      Given("I login", commonGiven.loginAsUser(data.CUSTOMER_PREVENTION_PASS_02.customer, GENERIC_AUTH_PASSWORD), async () => {
        When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards"), 3000), async () => {
          let level = 0;

          // skips the last milestone because the check is a bit different - no progress bar and no swipping needed
          for (let i = 0; i < CLAIM_MILESTONE_ASSERTIONS.length - 1; i += 1) {
            const { levelIncValue, position, rewardDetailsTextAssertions } = CLAIM_MILESTONE_ASSERTIONS[i];
            level += levelIncValue;

            const nextLevelIncValue = CLAIM_MILESTONE_ASSERTIONS[i + 1]?.levelIncValue || 0;

            When(`I reach game level ${level}`, commonWhen.levelUpForBattlePasses(data.CUSTOMER_PREVENTION_PASS_02.customer.data.customerId, levelIncValue), async () => {
              When(`I go to the reward pass screen (index: ${position}; level ${level})`, when.tapText("Prevention Pass", 4000), async () => {
                Then(`I can see the next reward progress bar (index: ${position}; level ${level})`, then.textVisible(`0 / ${nextLevelIncValue} levels`, 500));

                When(`I press Claim for ${rewardDetailsTextAssertions[0]} (index: ${position}; level ${level})`, when.tapID(ids.COMPLETED_BATTLE_PASS_LIST_ITEM("Got it", position)), async () => {
                  When(`I scroll to the left of the milestone list (index: ${position}; level ${level})`, when.scrollWithLimitedAttemptsUntilIdVisible(ids.BATTLE_PASS_LIST, ids.CLAIMED_BATTLE_PASS_LIST_ITEM(position), "right"), async () => {
                    Then(`I can see the milestone is claimed (index: ${position}; level ${level})`, then.idVisible(ids.CLAIMED_BATTLE_PASS_LIST_ITEM(position)));
                    When(`I press on the claimed milestone (index: ${position}; level ${level})`, when.tapID(ids.BATTLE_PASS_LIST_ITEM(position)), async () => {
                      Then("I can see the reward details", commonThen.assertMultipleTextsVisible(rewardDetailsTextAssertions));
                      When(`I can go back to the unlocked rewards screen (index: ${position}; level ${level})`, when.tapID(ids.BACK_BUTTON), async () => {
                        When(`I can go back to the rewards screen (index: ${position}; level ${level})`, when.tapID(ids.BACK_BUTTON), async () => {
                          Then(`I can see the reward store front (index: ${position}; level ${level})`, then.textVisible("Prevention Pass"));
                        });
                      });
                    });
                  });
                });
              });
            });
          }

          // assert the last milestone outside the loop
          const { levelIncValue, position, rewardDetailsTextAssertions } = CLAIM_MILESTONE_ASSERTIONS[CLAIM_MILESTONE_ASSERTIONS.length - 1];

          When(`I reach game level 500`, commonWhen.levelUpForBattlePasses(data.CUSTOMER_PREVENTION_PASS_02.customer.data.customerId, levelIncValue), async () => {
            When(`I go to the reward pass screen (index: ${position}; level 500)`, when.tapText("Prevention Pass"), async () => {
              When(`I press Claim for New Balance 880 (index: ${position}; level 500)`, when.tapID(ids.COMPLETED_BATTLE_PASS_LIST_ITEM("Got it", position)), async () => {
                Then(`I can see the milestone is claimed (index: ${position}; level 500)`, then.idVisible(ids.CLAIMED_BATTLE_PASS_LIST_ITEM(position)));
                When(`I press on the claimed milestone (index: ${position}; level 500)`, when.tapID(ids.BATTLE_PASS_LIST_ITEM(position)), async () => {
                  Then("I can see the reward details", commonThen.assertMultipleTextsVisible(rewardDetailsTextAssertions));
                });
              });
            });
          });
        });
      });
    });
  });
});
