import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as data from "../_data";
import * as constants from "./_resources/constants";
import * as ids from "@ids";
import {
  beamWellbeingItem,
  metLifeGPWellbeingItem,
  yuMatterWellbeingItem,
  bupaDentalProductItem,
  bupaHealthInsuranceProductItem,
  incomeProtectionProductItem,
  lifeInsuranceProductItem,
  criticalIllnessProductItem,
  pensionUnlinkedProductItem,
  certificateDetailsGLAUMAnya,
  certificateDetailsGIPUMAnya,
  metLyfeGPWellbeingItem,
  yuniversityWellbeingItem,
  fiitWellbeingItem,
} from "./_resources/fixtures";
import { yuscreenImages } from "@images";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";

Feature("I am able to use the yuscreen v5", async () => {
  Scenario("User can log in, User should see everything on the V5 YuScreen as nothing has been toggled off", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_138, data.AUTH_138), async () => {
      Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Big Daddy", "Yuniversal", "I"));
    });
    When("I tap on my yumoji", when.tapID(ids.YUMOJI_YUSCREEN_V5), async () => {
      Then("I should be on the edit Yumoji screen", then.textVisible("Pick a body type"));
    });
    When("I tap to close", when.tapID(ids.BUTTON_CLOSE_HEADER("yulife")), async () => {
      When("I scroll down on the YuScreen", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "slow", 0.2), async () => {
        Then("I can see the See all benefits button, as my location has not been set yet", then.textVisible("See all benefits"));
        Then("I should not see the MetLife GP24 perk, as I need to set my location first", then.textNotVisible("MetLife GP24"));
        Then("I should not see the YuMatter perk, as I need to set my location first", then.textNotVisible("YuMatter"));
      });
    });
    When("I scroll to the bottom", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "fast"), async () => {
      When("I tap See all benefits", when.tapTextAtIndex("See all benefits", 0), async () => {
        Then("I should be on the wellbeing hub, and see the location welcome modal", then.wellbeingHubLocationModalVisible);
      });
    });
    When("I tap confirm selection", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
      When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
        When("I scroll to the bottom of the YuScreen", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "fast"), async () => {
          When("I swipe down to see the perks", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.BOX_OPTION_TITLE("MetLife GP24"), "up"), async () => {
            Then("I can see the Wellbeing section is correct", then.yuScreenV5WellbeingSectionVisible([metLifeGPWellbeingItem, metLyfeGPWellbeingItem, yuniversityWellbeingItem], 4000, 0));
          });
        });
      });
    });
    When("I tap the MetLife tab", when.tapTextAtIndex(metLifeGPWellbeingItem.title, 0), async () => {
      Then("I should be on the MetLife screen", then.textVisible("Test Item MetLife"));
    });
    When("I tap to go back to Wellbeing Hub", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap the MetLyfe tab", when.tapTextAtIndex(metLyfeGPWellbeingItem.title, 0), async () => {
        Then("I should be on the MetLyfe screen", then.textVisible("Test Item MetLyfe"));
      });
    });
    When("I tap to go back to Wellbeing Hub section of the yuscreen", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap to see all benefits", when.tapTextAtIndex("See all benefits", 0), async () => {
        Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN, 2000));
      });
    });
    When("I change to the wellbeing hub of my second employment", when.changeWellbeingHubSelectedBusiness(data.BUSINESS_ACCOUNT_4.data.business_account_name), async () => {
      Then("I should see items in the expected order", then.wellbeingHubCardsCorrectOrder([metLifeGPWellbeingItem, metLyfeGPWellbeingItem, yuMatterWellbeingItem]));
    });
    When("I tap to go back to YuScreen", when.tapID(ids.BACK_BUTTON), async () => {
      When("I scroll to the bottom of the YuScreen", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "fast"), async () => {
        Then("I can see the invite a friend section", then.inviteFriendSectionVisible);
      });
    });
    When("I tap to invite a colleague", when.tapID(ids.REFERRAL_BUTTON(constants.inviteColleageButton)), async () => {
      Then("I am on the referral page", then.onInviteColleaguePage);
    });
  });

  Scenario("I can see and complete maximise yu nudges", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_MAXIMISE_YU, data.AUTH_MAXIMISE_YU), async () => {
      Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Maxi Mise", "Desert", "124"));
      Then("I should see the challenge nudge", then.challengeNudgeVisible(1, 80));
      Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(130, 400));
    });
    When("I click on the YuCoin I have earned today", when.tapID(ids.MAXIMISE_TODAYS_EARNINGS(130, 400)), async () => {
      Then("I should be on the Today's earnings screen", then.textVisible("Today’s Earnings"));
      Then("I should see the 130 YuCoin I have earned today", then.textVisible("130 YuCoin"));
    });
    When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be on yuscreen v5", then.yuScreenV5HeaderVisible(false, "Maxi Mise", "Desert", "124"));
      Then("I should see the challenge nudge", then.challengeNudgeVisible(1, 80));
      Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(130, 400));
    });
    When("I tap the challenge nudge image", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.calendarIcon)), async () => {
      Then("I should be on the quest map", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(124)));
    });
    When("I tap on level 124", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(123)), async () => {
      When("I complete a short stroll challenge", when.completeShortStroll(310, 40000), async () => {
        When("I tap collect", when.tapText("Collect"), async () => {
          When("I tap done", when.tapText("Done"), async () => {
            When("I go back the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
              Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Maxi Mise", "Desert", "124"));
              Then("I should see the updated YuCoin earned of 170", then.maximiseYucoinVisible(170, 400));
              Then("I should see the walking nudge", then.walkingNudgeVisible("9,498", 50));
            });
          });
        });
      });
    });
    When("I send 12000 steps and reload the yuscreen tab", when.sendPassiveStepsAndReloadToTab(12000), async () => {
      Then("I should see the meditation nudge", then.meditationNudeVisible());
      Then("I should see the updated YuCoin earned of 190/560", then.maximiseYucoinVisible(220, 400));
    });
    When("I send 45 mindful minutes and reload the yuscreen tab", when.sendPassiveMindulnessAndReloadToTab(2700), async () => {
      Then("I should see the cycling nudge", then.cyclingNudgeVisible());
      Then("I should see the updated YuCoin earned of 250/560", then.maximiseYucoinVisible(260, 400));
    });
    When("I send 10km of cycling and reload the yuscreen tab", when.sendPassiveCyclingAndReloadToTab(10000), async () => {
      Then("I should see the completed challenge nudge icon", then.completedChallengeNudgeVisible(3, 240));
      Then("I should see the updated YuCoin earned of 320/400", then.maximiseYucoinVisible(320, 400));
    });
    When("I swipe left on the completed challenge nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.calendarIcon), "left", "fast"), async () => {
      Then("I should see the done steps nudge icon", then.completedWalkingNudgeVisible());
    });
    When("I swipe left on the completed steps nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.stepIcon), "left", "fast"), async () => {
      Then("I should see the done meditation nudge icon", then.completedMeditationNudeVisible());
    });
    When("I swipe left on the completed meditation nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.lotusIcon), "left", "fast"), async () => {
      Then("I should see the done cycling nudge icon", then.completedCyclingNudgeVisible());
    });
  });

  Scenario("The Yumoji Builder works in the V5 YuScreen as expected", scenario.start, () => {
    Given("I trigger the worker to give missing yumoji items", given.triggerGiveMissingYumojiItems([data.CUSTOMER_139.data.customerId]), async () => {
      When("I login as a user on level 800", when.logInAndGoToTab("quests", data.CUSTOMER_139, data.AUTH_139), async () => {
        Then("I should see the level 800 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(800)));
      });
    });
    When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
      Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Small Daddy", "Mountain", "800"));
    });
    When("I start the yumoji builder", when.startYumojiBuilderV5(ids.FEMALE_BODY), async () => {
      Then("I should be on the Yumoji edit screen", then.textVisible("Edit your Yumoji"));
      Then("I should see migrated yumoji items I have previously unlocked", then.unlockedYumojiItemsVisible("female", "rare", "ocean"));
    });
    When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap the male yumoji", when.tapID(ids.MALE_BODY), async () => {
        When("I tap continue", when.tapText("Continue"), async () => {
          Then("I should see migrated yumoji items I have previously unlocked", then.unlockedYumojiItemsVisible("male", "common", "desert"));
        });
      });
    });
    When("I save the yumoji", when.saveYumoji(false), async () => {
      When("I tap the text", when.tapText("Done"), async () => {
        Then("I should be back on the yuscreen", then.textVisible("Small Daddy"));
        Then("I should see the yumoji", then.idVisible(ids.YUMOJI_EQUIPMENT));
      });
    });
    When("I go the quests screen", when.tapID(ids.NAV_BAR("quests")), async () => {
      When("I tap level 800 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(800)), async () => {
        Then("I should see that I have achieved Yunity Mountain", then.yunityCorrect("Mountain"));
        Then("I should see the Yunity Rewards", then.yunityRewardsVisible(["6 Levels\nBoost", "Mountain\nOutfit", "The Yuniversal\nReflection"]));
      });
    });
    When("I tap the levels boost", when.tapID(ids.YUNITY_CARD("6 Levels\nBoost")), async () => {
      Then("I should see 'Boosted YuCoin'", then.textVisible("Boosted YuCoin"));
      Then("I should see the Boosted YuCoin description", then.textVisible("During this time, the challenges you complete will reward you with additional YuCoin."));
    });
    When("I tap got it", when.tapText("Got it"), async () => {
      When("I tap Mountain Outfit", when.tapID(ids.YUNITY_CARD("Mountain\nOutfit")), async () => {
        Then("I should see New customisation", then.textVisible("New customisation"));
        Then("I should see the description", then.textVisible("You've unlocked new items for your Yumoji! Visit the Yumoji editor to try them on."));
      });
    });
    When("I tap got it", when.tapText("Got it"), async () => {
      When("I tap Mountain Outfit", when.tapID(ids.YUNITY_CARD("The Yuniversal\nReflection")), async () => {
        Then("I should see The Yuniversal Reflection", then.textVisible("The Yuniversal Reflection"));
        Then("I should see the description", then.textVisible("You've achieved Yunity. Now take your time, breathe and reflect with these special quests."));
      });
    });
    When("I tap Got it", when.tapText("Got it"), async () => {
      Then("I should see Claim rewards", then.textVisible("Claim rewards"));
    });
    When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
      When("I go the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
        When("I tap on my yumoji", when.tapID(ids.YUMOJI_YUSCREEN_V5), async () => {
          When("I tap continue", when.tapText("Continue"), async () => {
            Then("I should see the yumoji items I just unlocked", then.unlockedYumojiItemsVisible("male", "epic", "mountain"));
          });
        });
      });
    });
    When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap the female yumoji", when.tapID(ids.FEMALE_BODY), async () => {
        When("I tap continue", when.tapText("Continue"), async () => {
          Then("I should see migrated yumoji items I have previously unlocked", then.unlockedYumojiItemsVisible("female", "epic", "mountain"));
        });
      });
    });
    When("I save the yumoji", when.saveYumoji(false), async () => {
      Then("I should be back on the yuscreen", then.textVisible("Small Daddy"));
      Then("I should see the yumoji", then.idVisible(ids.YUMOJI_EQUIPMENT));
    });
  });

  Scenario("I can create a yumoji from scratch on yuscreen V5 ", scenario.start, () => {
    Given("I trigger the worker to give missing yumoji items", given.logInAndGoToTab("yu", data.CUSTOMER_140, data.AUTH_140), async () => {
      Then("I should see the top right balance update", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
      Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Sean Spencer", "Mountain", "800", true));
      Then("I should see the yumoji create copy", then.yuscreenV5CreateYumojiVisible);
      Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(200, 480));
    });
    When("I tap the yumoji creator", when.tapID(ids.YUMOJI_PROMPT_CTA), async () => {
      Then("I should be on the Yumoji create screen", then.textVisible("Create your Yumoji to step into the Yuniverse"));
    });
    When("I tap the female yumoji", when.tapID(ids.FEMALE_BODY), async () => {
      When("I tap continue", when.tapID(ids.LABELS_CTA_CONTINUE), async () => {
        When("I edit my yumoji", when.unlockedYumojiItemsVisible("female", "base", "forest"), async () => {
          When("I save", when.saveYumoji(true), async () => {
            Then("I should see the yumoji on the yuscreen", then.idVisible(ids.YUMOJI_YUSCREEN_V5, 2500));
            Then("I should see the updated yucoin value from creating my yumoji", then.maximiseYucoinVisible(300, 480));
            Then("I should see the top right balance update", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17800)));
          });
        });
      });
    });
  });

  Scenario("I can see 'Powerful Protection' and the product cards in the correct order", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_139, data.AUTH_139), async () => {
      Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Small Daddy", "Mountain", "800"));
    });
    When("I scroll down to the Powerful protection section on YuScreen", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "slow", 0.2), async () => {
      Then("I should see Powerful protection title", then.idVisible(ids.YUSCREEN_V5_PROTECTION_TITLE, 2000));
      Then("I should see Bupa Health Insurance", then.productCardVisible(bupaHealthInsuranceProductItem));
      Then("I should see Bupa Dental Insurance", then.productCardVisible(bupaDentalProductItem));
      Then("I should see Income protection", then.productCardVisible(incomeProtectionProductItem));
    });
    When("I swipe to see rest of the different products", when.scrollFromID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Income protection"), "left", "fast"), async () => {
      When("I wait 3 second", when.wait(3000), async () => {
        Then("I should see Life insurance", then.productCardVisible(lifeInsuranceProductItem));
        Then("I should see Critical illness insurance", then.productCardVisible(criticalIllnessProductItem));
        Then("I should see Pension", then.productCardVisible(pensionUnlinkedProductItem));
        Then("I should not see the reward pass product", then.textNotVisible("Reward Pass Product"));
      });
    });
    When("I swipe back to the first product", when.scrollFromID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Life insurance"), "right", "fast"), async () => {
      Then("I should see the correct body and copy", then.idVisible(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_BODY_DESC("Online GP, open referrals, and more.")));
    });
    When("I tap Bupa health insurance", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Health insurance")), async () => {
      Then("I should see the details on the Bupa Health Insurance", then.idVisible(ids.TEXT_TEMPLATE("Health Insurance", "undefined")));
    });
    When("I close to go back to the YuScreen", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
      When("I tap Bupa dental insurance", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Dental insurance")), async () => {
        Then("I should see the details on the Bupa dental insurance", then.idVisible(ids.TEXT_TEMPLATE("Bupa Dental Choice", "undefined")));
      });
    });
    When("I close to go back to the YuScreen", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
      When("I tap Income protection", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Income protection")), async () => {
        Then("I should see the income protect has yet to be active", then.idExist(ids.PRODUCT_DETAILS_HOLDING_TITLE));
      });
    });
    When("I close to go back to the YuScreen", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
      When("I swipe to see rest of the different products", when.scrollFromID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Income protection"), "left", "fast"), async () => {
        When("I tap Life insurance", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Life insurance")), async () => {
          Then("I should see the details on the Life insurance", then.idVisible(ids.TEXT_TEMPLATE("Life Insurance", "undefined")));
        });
      });
    });
    When("I close to go back to the YuScreen", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
      When("I tap Critical illness insurance", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Critical illness insurance")), async () => {
        Then("I should see details on the Critical illness insurance", then.idVisible(ids.TEXT_TEMPLATE("Critical Illness", "undefined")));
      });
    });
    When("I close to go back to the YuScreen", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
      When("I tap Pension", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Pension")), async () => {
        Then("I should see details on the Pension", then.idVisible(ids.TEXT_TEMPLATE("We’ve partnered with Smart Pension, connect your account today:", "b2")));
      });
    });
  });

  Scenario("I can click on a product and see all the information such as the digital certificate", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_141, data.AUTH_141), async () => {
      Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Anya Forgar", "Mountain", "800"));
    });
    When("I scroll down to the Powerful protection section on YuScreen", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_WELLBEING_SECTION_BUTTON, "down"), async () => {
      Then("I should see Powerful protection title", then.idVisible(ids.YUSCREEN_V5_PROTECTION_TITLE));
    });
    When("I tap Life insurance", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Life Insurance")), async () => {
      Then("I should see the details on the Life Insurance", then.idVisible(ids.TEXT_TEMPLATE("Life Insurance", "undefined")));
      Then("I should see the policy details button", then.idVisible(ids.CONTENT_ITEM_BUTTON_IMAGE(constants.certificateImageURI)));
    });
    When("I tap Policy details button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE(constants.certificateImageURI)), async () => {
      Then("I should see the digital cerficate", then.canSeeProductCertificate(certificateDetailsGLAUMAnya));
      Then("I should not see policy number", then.idNotVisible(ids.CERTIFICATE_KEY_VALUES("Policy number", certificateDetailsGLAUMAnya.policyNumber)));
    });
    When("I tap X to close the certficate", when.tapID(ids.SCREEN_CLOSE), async () => {
      When("I close to go back to the YuScreen", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
        When("I tap Income protection", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Income Protection")), async () => {
          Then("I should see the details on the Life insurance", then.idVisible(ids.TEXT_TEMPLATE("Income Protection")));
          Then("I should see the key info button", then.idVisible(ids.TERTIARY_BUTTON("How does this work?")));
        });
      });
    });
    When("I sroll down the screen", when.scrollFromID(ids.TERTIARY_BUTTON("How does this work?"), "up", "fast", 0.3), async () => {
      Then("I should see the legal disclaimer", then.idVisible(ids.FOOTER_LABEL_TEXT));
    });
  });

  Scenario("As a user with concurrent employments, I should see all of my companies' wellbeing hub benefits on my YuScreen", scenario.startWithoutWBHItems, async () => {
    Given("I login to my YuScreen", given.logInAndGoToTab("yu", data.CUSTOMER_138, data.AUTH_138), async () => {
      Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Big Daddy", "Yuniversal", "I"));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "fast"), async () => {
      When("I tap See all benefits", when.tapTextAtIndex("See all benefits", 0), async () => {
        When("I tap confirm selection", when.tapText("Confirm selection"), async () => {
          When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
            When("I scroll to the bottom", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "fast"), async () => {
              When("I swipe down until the other employment's perks are visible", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.BOX_OPTION_TITLE("MetLife GP24"), "up"), async () => {
                Then("I can see one instance of the MetLife benefit, even though it's made available from multiple employments", then.yuScreenV5WellbeingItemVisible(metLifeGPWellbeingItem, 2000));
                Then("I can see the MetLyfe benefit from my employment at 'Justice League'", then.yuScreenV5WellbeingItemVisible(metLyfeGPWellbeingItem));
                Then("I can see the Yuniversity benefit from my employment at 'Miele Onboarding'", then.yuScreenV5WellbeingItemVisible(yuniversityWellbeingItem));
                Then("I can not see the Fiit benefit, as I've reached the cap of 3 visible promoted items on the YuScreen'", then.idNotVisible(ids.TEXT_TEMPLATE(fiitWellbeingItem.title)));
              });
            });
          });
        });
      });
    });
    When("I go back to the Wellbeing Hub", when.goToWellbeingHub, async () => {
      Then("I should now be on the Wellbeing Hub screen of my first employment", then.idVisible(ids.WELLBEING_HUB_BUSINESS_ACCOUNT_NAME(data.BUSINESS_ACCOUNT_7.data.business_account_name)));
      Then("I should see that I do not have any wellbeing hub items", then.idVisible(ids.WELLBEING_SERVICE_EMPTY_LIST));
    });
    When("I change to the wellbeing hub of my second employment", when.changeWellbeingHubSelectedBusiness(data.BUSINESS_ACCOUNT_4.data.business_account_name), async () => {
      Then("I should be on the Wellbeing Hub screen of my second employment", then.idVisible(ids.WELLBEING_HUB_BUSINESS_ACCOUNT_NAME(data.BUSINESS_ACCOUNT_4.data.business_account_name)));
      Then("I should see the 'MetLyfe GP25' item", then.idVisible(ids.TEXT_TEMPLATE(metLyfeGPWellbeingItem.title)));
      Then("I should see the 'MetLife GP24' item, as it's available from multiple employments", then.idVisible(ids.TEXT_TEMPLATE(metLifeGPWellbeingItem.title)));
    });
    When("I change to the wellbeing hub of my third employment", when.changeWellbeingHubSelectedBusiness(data.BUSINESS_ACCOUNT_6.data.business_account_name), async () => {
      Then("I should now be on the Wellbeing Hub screen of my third employment", then.idVisible(ids.WELLBEING_HUB_BUSINESS_ACCOUNT_NAME(data.BUSINESS_ACCOUNT_6.data.business_account_name)));
      Then("I should see the 'MetLife GP24' item again, as it's available from multiple employments", then.idVisible(ids.TEXT_TEMPLATE(metLifeGPWellbeingItem.title)));
      Then("I should see the 'Yuniversity' item", then.idVisible(ids.TEXT_TEMPLATE(yuniversityWellbeingItem.title)));
      Then("I should see the 'Fiit' item", then.idVisible(ids.TEXT_TEMPLATE(fiitWellbeingItem.title)));
      Then("I should not see the 'MetLyfe GP25' item", then.idNotVisible(ids.TEXT_TEMPLATE(metLyfeGPWellbeingItem.title)));
    });
  });

  Scenario("As a user with displayScrollItems: false and displayProgress: true, the Maximise yu nudge should not be visible to me", scenario.start, async () => {
    Given("I login to my YuScreen", given.logInAndGoToTab("yu", data.CUSTOMER_142.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see the progress bar is visible but the nudge is not visible", then.idVisible(ids.MAXIMISE_YU(true, false)));
    });
  });

  Scenario("As a user with displayScrollItems: true and displayProgress: false, The Maximise yu progress bar should not be visible to me", scenario.start, async () => {
    Given("I login to my YuScreen", given.logInAndGoToTab("yu", data.CUSTOMER_143.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see the progress is not visible but the nudge is visible", then.idVisible(ids.MAXIMISE_YU(false, true)));
    });
  });

  Scenario("As a user with displayScrollItems: false and displayProgress: false, I should not see the Maximise yu nudge or the progress bar", scenario.start, async () => {
    Given("I login to my YuScreen", given.logInAndGoToTab("yu", data.CUSTOMER_144.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see the progress bar and the nudge is not visible", then.idNotVisible(ids.MAXIMISE_YU_COMPONENT));
    });
  });

  Scenario("I am able to see and select all the yumoji builder facial hair options", scenario.start, async () => {
    Given("I login to my YuScreen", given.logInAndGoToTab("yu", data.CUSTOMER_144.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I can see the create yumoji card with the earnable reward as I have yet not made one", then.idVisible(ids.YUMOJI_PROMPT_COPY("Earn 100 ![](https://yulife-develop.imgix.net/referral/YuCoin.png?ixlib=js-3.2.1&s=127f8080324e842a2d943842f26e51c7)\nwhen you create\nyour Yumoji.")));
    });
    When("I click on the Create Yumoji button", when.tapID(ids.YUMOJI_PROMPT_CTA), async () => {
      When("I click on the male body", when.tapID(ids.MALE_BODY), async () => {
        When("I click the continue button", when.tapID(ids.CTA_CONTINUE), async () => {
          Then("I should be on the Facial Hair tab", then.idVisible(ids.CATEGORY_TYPE("facialHair")));
        });
      });
    });
    When("I click on the facial hair tab", when.tapID(ids.CATEGORY_TYPE("facialHair")), async () => {
      Then("I can cycle through all the facial hair items", then.cycleThroughFacialHairOptions);
    });
    When("I save the yumoji", when.saveYumoji(false), async () => {
      When("I tap to collect yucoin reward", when.tapID(ids.COLLECT_REWARD_CTA), async () => {
        Then("I should see the yumoji", then.idVisible(ids.YUMOJI_EQUIPMENT));
      });
    });
  });
});
