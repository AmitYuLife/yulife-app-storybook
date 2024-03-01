import {
  Feature,
  Scenario,
  Given,
  When,
  Then,
  ScenarioOnly,
  FeatureOnly,
  ScenarioSkip,
  FeatureSkip,
} from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as helper from "./_resources/helpers";
import {
  CUSTOMER_37,
  AUTH_37,
  CUSTOMER_PLI_2,
  AUTH_PLI_2,
  CUSTOMER_PLI_3,
  AUTH_PLI_3,
  CUSTOMER_PLI_4,
  AUTH_PLI_4,
  CUSTOMER_44,
  AUTH_44,
} from "@data";
import * as helper_V4 from "00_Smoke_4/01_yuscreen_v4/_resources/helpers";

Feature("PLI HAPPY", async () => {
  // @update [PLI removed - keeping here for the time being to salvage some of the functionality for the new tests]
  ScenarioSkip(
    "As a completely healthy male user with Covea FIB enabled, I should be able to purchase PLI, Only allow previously used card for purchase of new product",
    scenario.start,
    async () => {
      Given(
        "I login as a user with Covea FIB enabled",
        given.loginToYuScreen(false, CUSTOMER_37, AUTH_37),
        async () => {
          helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "10");
          helper_V4.YUSCREEN_V4(CUSTOMER_37, "LifeInsurance", "10");
          helper.GET_PRODUCT("Life Insurance", "Personal Life Insurance");
          helper.ONBOARDING();
          helper.INTRO_START();
          helper.INTRO_INFO();
          helper.INTRO_HONESTY();
          helper.UNDERWRITING_NAME();
          helper.UNDERWRITING_DOB(30);
          helper.UNDERWRITING_SALARY("25000");
          helper.UNDERWRITING_CITIZEN("Yes");
          helper.UNDERWRITING_EMPLOYMENT("No");
          helper.UNDERWRITING_HEIGHT("160 cm");
          helper.UNDERWRITING_WEIGHT("60 kg");
          helper.UNDERWRITING_CIGARETTES("Never");
          helper.UNDERWRITING_CIGARS("Never");
          helper.UNDERWRITING_SMOKING_ALTERNATIVES("Never");
          helper.UNDERWRITING_ALCOHOL("2 drinks");
          helper.UNDERWRITING_CANNABIS("Never");
          helper.UNDERWRITING_RECREATIONAL_DRUGS("Never");
          helper.UNDERWRITING_COUNSELLING("No");
          helper.UNDERWRITING_SEX("Male");
          helper.UNDERWRITING_DIAGNOSED_WITH("No");
          helper.UNDERWRITING_MANY_CONSULTATIONS("No");
          helper.UNDERWRITING_AWAITING_TESTS("No");
          helper.UNDERWRITING_SYMPTOMS("No");
          helper.UNDERWRITING_COVID_HOSPITAL("No");
          helper.UNDERWRITING_COVID_EXPOSURE("No");
          helper.UNDERWRITING_OTHER_POLICIES("No");
          helper.REVIEW_SCREEN();
          helper.COVER_PRICE_CHECK("70");
          helper.COVER_STYLE_SELECTION("rare", "62%", "£20.94", "£1,291.67");
          // @bug stripe warning on checkout GS-864
          // helper.CHECKOUT(true, "Rare");
          // helper.REVIEW_YUSCREEN();
        }
      );
    }
  );

  // @update [Test may become redundant with the new quote/expiring flows -- Revisit during updates - Rogers will rework this as part of his ticket]
  ScenarioSkip(
    "As a user who started a journey and reached the point of receiving a quote, when 60 days have passed since the last quote was generated, when I resume my journey, then I should start from the beginning.",
    scenario.start,
    async () => {
      Given(
        "I login as a user with Covea FIB enabled",
        given.loginToYuScreen(false, CUSTOMER_PLI_2, AUTH_PLI_2),
        async () => {
          helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "1");
          helper_V4.YUSCREEN_V4(CUSTOMER_PLI_2, "LifeInsurance", "1");
          helper.GET_PRODUCT("Life Insurance", "Personal Life Insurance");
          helper.ONBOARDING();
        });
    });
  
  
});
