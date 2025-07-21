import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";

import * as given from "./_steps/given";
import * as scenario from "./_steps/scenario";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import { AUTH_SA_1, AUTH_SA_2, AUTH_SA_3, AUTH_SA_4 } from "../_data/mongo/auths";
import { CUSTOMER_SA_1, CUSTOMER_SA_2, CUSTOMER_SA_3, CUSTOMER_SA_4 } from "../_data";
import * as fixture from "./_resources/fixture";
import * as constant from "./_resources/constants";
import * as ids from "@ids";

Feature("As a user I can get past the login screen and see all SA products", async () => {
  Scenario("I can login and see MeGL/GrFun/GIP/TmpGIP/LSDC product slot and details", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_SA_1, AUTH_SA_1, true, "SA"), async () => {
      Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "SA Customer", "Mountain", "400", true));
      Then("I should see the button to create a YuMoji", then.idVisible(ids.YUMOJI_PROMPT_CTA));
      Then("I should see the gifting section", then.idVisible(ids.HERO_CARD_SECTION));
    });
    When("I swipe to see all of the product cards", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_WELLBEING_SECTION_BUTTON, "down"), async () => {
      Then("I can see the life cover product", then.productCardVisible(fixture.lifeCoverTallCard));
      Then("I can see the funeral cover product", then.productCardVisible(fixture.funeralCoverSquareCard));
      Then("I can see the income protection product", then.productCardVisible(fixture.incomeProtectionSquareCard));
    });
    When("I swipe to see more cards", when.swipeFromText(fixture.funeralCoverSquareCard.title, "left", "fast"), async () => {
      Then("I can see the lump sum disability product", then.productCardVisible(fixture.lumpSumDisabilitySquareCard));
      Then("I can see the temporary income protection product", then.productCardVisible(fixture.tempIncomeProtectionSquareCard, 1));
      Then("I should see the button for the wellbeing section", then.idVisible(ids.YUSCREEN_V5_WELLBEING_SECTION_BUTTON_TEXT_VIEW));
    });
    When("I swipe to back to the first cards", when.swipeFromText(fixture.funeralCoverSquareCard.title, "right", "fast"), async () => {
      When("I tap life cover card", when.tapText(fixture.MeGL.productName), async () => {
        Then("I'm on the product page for life cover", then.productCheck(fixture.MeGL, fixture.MeGLKeyInfo, true, fixture.MeGLCoverAmounts));
      });
    });
    When("I scroll to the top", when.swipeFromText(constant.usefulLinksText, "down", "fast"), async () => {
      When("I close the page", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
        Then("I can see the life cover product card as I'm back on the YuScreen", then.productCardVisible(fixture.lifeCoverTallCard));
      });
    });
    When("I tap funeral cover card", when.tapText(fixture.funeralCoverSquareCard.name), async () => {
      Then("I'm on the product page for funeral cover", then.productCheck(fixture.GrFun, fixture.GrFunKeyInfo, true, fixture.GrFunCoverAmounts));
    });
    When("I scroll to the top", when.swipeFromText(constant.usefulLinksText, "down", "fast"), async () => {
      When("I close the page", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
        Then("I can see the life cover product card as I'm back on the YuScreen", then.productCardVisible(fixture.lifeCoverTallCard));
      });
    });
    When("I tap GIP card", when.tapText(fixture.incomeProtectionSquareCard.name), async () => {
      Then("I'm on the product page for GIP", then.productCheck(fixture.GIP, fixture.GIPKeyInfo, false));
    });
    When("I scroll to the top", when.swipeFromText(constant.usefulLinksText, "down", "fast"), async () => {
      When("I close the page", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
        Then("I can see the life cover product card as I'm back on the YuScreen", then.productCardVisible(fixture.lifeCoverTallCard));
      });
    });
    When("I swipe to see more cards", when.swipeFromText(fixture.funeralCoverSquareCard.title, "left", "fast"), async () => {
      When("I tap lump sum disability card", when.tapText(fixture.lumpSumDisabilitySquareCard.name), async () => {
        Then("I'm on the product page for lump sum disability", then.productCheck(fixture.LumpSum, fixture.LMPSKeyInfo, false));
      });
    });
    When("I scroll to the top", when.swipeFromText(constant.usefulLinksText, "down", "fast"), async () => {
      When("I close the page", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
        Then("I can see the lump sum disability product card as I'm back on the YuScreen", then.productCardVisible(fixture.lumpSumDisabilitySquareCard));
      });
    });
    When("I tap temp income protection card", when.tapText(fixture.tempIncomeProtectionSquareCard.name), async () => {
      Then("I'm on the product page for temp income protection", then.productCheck(fixture.TmpGIP, fixture.TmpGIPKeyInfo, false));
    });
  });

  Scenario("I can login and see MeGL/SpGL/GrFun with dependents, product slot and details", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_SA_2, AUTH_SA_2, true, "SA"), async () => {
      Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Rei Buldo", "Mountain", "400", true));
      Then("I should see the button to create a YuMoji", then.idVisible(ids.YUMOJI_PROMPT_CTA));
      Then("I should see the gifting section", then.idVisible(ids.HERO_CARD_SECTION));
    });
    When("I swipe to see all of the product cards", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_WELLBEING_SECTION_BUTTON, "down"), async () => {
      When("I tap life cover card", when.tapTextAtIndex(fixture.lifeCoverTallCard.name, 1), async () => {
        Then("I'm on the product page for life cover", then.productCheck(fixture.MeGL_2, fixture.MeGLKeyInfo, true, fixture.MeGLCoverAmounts, fixture.Beneficiaries_MeGL_2));
      });
    });
    When("I scroll to the top", when.swipeFromText(constant.usefulLinksText, "down", "fast"), async () => {
      When("I close the page", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
        When("I tap the spousal cover card", when.tapTextAtIndex(fixture.lifeCoverTallCard.name, 0), async () => {
          Then("I'm on the product page for spousal cover", then.productCheck(fixture.SpGL_1, fixture.SpGLKeyInfo, false));
        });
      });
    });
    When("I scroll to the top", when.swipeFromText(constant.usefulLinksText, "down", "fast"), async () => {
      When("I close the page", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
        When("I tap the funeral cover card", when.tapTextAtIndex(fixture.funeralCoverSquareCard.name, 0), async () => {
          Then("I'm on the product page for funeral cover", then.productCheck(fixture.GrFun_2, fixture.GrFunKeyInfo_2, true, fixture.GrFunCoverAmounts, fixture.Beneficiaries_GrFun_2));
        });
      });
    });
  });

  Scenario("I can login and see the GCI product in the SA app", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_SA_3, AUTH_SA_3, true, "SA"), async () => {
      When("I swipe to see all of the product cards", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_WELLBEING_SECTION_BUTTON, "down"), async () => {
        Then("I should be on the users YuScreen", then.textVisible(`${CUSTOMER_SA_3.data.firstName} ${CUSTOMER_SA_3.data.lastName}`));
        Then("I can see the GCI product", then.productCardVisible(fixture.gciWideCard));
      });
    });
    When("I tap the GCI card", when.tapText(fixture.gciWideCard.name), async () => {
      Then("I'm on the product page for funeral cover", then.productCheck(fixture.gciProduct1, fixture.gciKeyInfo, false));
    });
  });

  Scenario("I can see the correct default country in the region selector for the SA app", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_SA_3, AUTH_SA_3, true, "SA"), async () => {
      Then("I should be on the users YuScreen", then.textVisible(`${CUSTOMER_SA_3.data.firstName} ${CUSTOMER_SA_3.data.lastName}`));
    });
    When("I navigate to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
      Then("I should see the modal to select store location", then.rewardsLocationModalVisible());
      Then("I should see that SA is selected by default", then.textVisible("South Africa"));
    });
  });

  Scenario("I can see Old Mutual products and see the correct hero section", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_SA_4, AUTH_SA_4, true, "SA"), async () => {
      Then("I should be on the users YuScreen", then.textVisible(`${CUSTOMER_SA_4.data.firstName} ${CUSTOMER_SA_4.data.lastName}`));
    });
    When("I swipe to see all of the product cards", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_WELLBEING_SECTION_BUTTON, "down"), async () => {
      Then("I can see the life assurace product", then.productCardVisible(fixture.groupLifeAssuranceOMWideCard));
    });
    When("I tap life assurance card", when.tapText(fixture.groupLifeAssuranceOMWideCard.name), async () => {
      Then("I'm on the product page for life cover", then.productCheck(fixture.MeGL_OM, fixture.MeGL_OMKeyInfo, true, fixture.MeGL_2_CoverAmounts, undefined, true));
    });
  });
});
