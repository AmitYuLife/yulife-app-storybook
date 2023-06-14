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
import * as helper from "./_steps/helpers";
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
import { POPOVER } from "@ids";
import * as helper_dental from "03_Dental/01_dental_journey/_steps/helpers";
import * as helper_V4 from "00_Smoke_3/03_yuscreen_v4/_steps/helpers";

Feature("PLI HAPPY", async () => {
  Scenario(
    "As a completely healthy male user with Covea FIB enabled, I should be able to purchase PLI and Dental, Only allow previously used card for purchase of new product",
    scenario.start,
    async () => {
      Given(
        "I login as a user with Covea FIB enabled",
        given.loginToYuScreen(false, CUSTOMER_37, AUTH_37),
        async () => {
          helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "10");
          helper_V4.YUSCREEN_V4(CUSTOMER_37, "dentalAndPli", "10");
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
          helper.CHECKOUT(true, "Rare");
          helper.REVIEW_YUSCREEN();
          helper.GET_PRODUCT("Dental", "Dental Insurance");
          helper_dental.ONBOARDING();
          helper_dental.CHOOSE_PLAN_AND_CHECKOUT();
        }
      );
    }
  );

  Scenario(
    "As pregnant female with all conditions but under control, I should be able to purchase PLI",
    scenario.start,
    async () => {
      Given("I login as a user with Covea FIB enabled", given.logInAndGoToTab("yu", CUSTOMER_44, AUTH_44), async () => {
        helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "1");
        helper_V4.YUSCREEN_V4(CUSTOMER_44, "dentalAndPli", "1");
        helper_V4.CREATE_DEFAULT_YUMOJI(520);
        helper_V4.CORRECT_PRODUCT_SLOT_BACKGROUND("0 product live");
        helper.GET_PRODUCT("Life Insurance", "Personal Life Insurance");
        helper.ONBOARDING();
        helper.INTRO_START(CUSTOMER_44);
        helper.INTRO_INFO();
        helper.INTRO_HONESTY(CUSTOMER_44);
        helper.UNDERWRITING_NAME();
        helper.UNDERWRITING_DOB(48);
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
        helper.UNDERWRITING_SEX("Female");
        helper.UNDERWRITING_DIAGNOSED_WITH("No");
        helper.UNDERWRITING_MANY_CONSULTATIONS("Yes");
        helper.UNDERWRITING_CONDITION_SELECTION([
          "High blood pressure",
          "High cholesterol",
          "Ears, nose, throat",
          "Digestive",
          "Kidneys & bladder",
          "Eye",
          "Minor injuries",
          "Lungs",
          "Muscles & joints",
          "Skin",
          "Pregnancy",
          "Other",
        ]);
        helper.UNDERWRITING_BP("Yes", "None of the above");
        helper.UNDERWRITING_CHOLESTEROL("Yes", "None of the above");
        helper.UNDERWRITIING_EARS_NOSE_THROAT("Yes");
        helper.UNDERWRITIING_DIGESTIVE("Yes");
        helper.UNDERWRITIING_KIDNEYS_BLADDER("No");
        helper.UNDERWRITING_MEDICAL_FOLLOW_UP(false);
        helper.UNDERWRITIING_EYE("Yes");
        helper.UNDERWRITIING_MINOR_INJURIES("Yes");
        helper.UNDERWRITIING_LUNGS("Yes");
        helper.UNDERWRITIING_MUSCLES_JOINTS("Yes");
        helper.UNDERWRITIING_SKIN("Yes");
        helper.UNDERWRITIING_OTHER("Yes");
        helper.UNDERWRITING_AWAITING_TESTS("No");
        helper.UNDERWRITING_SYMPTOMS("No");
        helper.UNDERWRITING_COVID_HOSPITAL("No");
        helper.UNDERWRITING_COVID_EXPOSURE("No");
        helper.UNDERWRITING_OTHER_POLICIES("No");
        helper.REVIEW_SCREEN();
        helper.COVER_SELECT_PERCENTAGE("50%");
        helper.COVER_STYLE_SELECTION("rare", "50%", "£12.59", "£1,041.67");
        helper.CHECKOUT(true, "Rare");
        helper.REVIEW_V4_YUSCREEN(1300, "10");
      });
    }
  );

  Scenario(
    "As a healthy 33y/o, high earning male user that smokes in moderation and has existing <£20m PLI, I should be able to purchase PLI",
    scenario.start,
    async () => {
      Given(
        "I login as a user with Covea FIB enabled",
        given.loginToYuScreen(false, CUSTOMER_37, AUTH_37),
        async () => {
          helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "10");
          helper_V4.YUSCREEN_V4(CUSTOMER_37, "dentalAndPli", "10");
          helper.GET_PRODUCT("Life Insurance", "Personal Life Insurance");
          helper.ONBOARDING();
          helper.INTRO_START();
          helper.INTRO_INFO();
          helper.INTRO_HONESTY();
          helper.UNDERWRITING_NAME();
          helper.UNDERWRITING_DOB(33);
          helper.UNDERWRITING_SALARY("150000");
          helper.UNDERWRITING_CITIZEN("Yes");
          helper.UNDERWRITING_EMPLOYMENT("No");
          helper.UNDERWRITING_HEIGHT("160 cm");
          helper.UNDERWRITING_WEIGHT("60 kg");
          helper.UNDERWRITING_CIGARETTES("In the past month");
          helper.UNDERWRITING_CIGARETTES_QUANTITY("1-9 per day");
          helper.UNDERWRITING_CIGARS("In the past 12 months");
          helper.UNDERWRITING_SMOKING_ALTERNATIVES("In the past 6 months");
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
          helper.UNDERWRITING_OTHER_POLICIES("Yes");
          helper.UNDERWRITING_DO_POLICIES_EXCEED("No");
          helper.REVIEW_SCREEN();
          helper.COVER_SELECT_PERCENTAGE("75%");
          helper.MAXIMUM_SUM_ASSURED("common", "£57.68", "£3,875");
          helper.CHECKOUT(false, "");
        }
      );
    }
  );

  Scenario(
    "As a user who started a journey and reached the point of receiving a quote, when 60 days have passed since the last quote was generated, when I resume my journey, then I should start from the beginning.",
    scenario.start,
    async () => {
      Given(
        "I login as a user with Covea FIB enabled",
        given.loginToYuScreen(false, CUSTOMER_PLI_2, AUTH_PLI_2),
        async () => {
          helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "1");
          helper_V4.YUSCREEN_V4(CUSTOMER_PLI_2, "dentalAndPli", "1");
          helper.GET_PRODUCT("Life Insurance", "Personal Life Insurance");
          helper.ONBOARDING();
        }
      );
    }
  );

  Scenario(
    "As a user who had a birthday after I started my journey, when I resume my journey, then I should start from the beginning.",
    scenario.start,
    async () => {
      Given(
        "I login as a user with Covea FIB enabled",
        given.loginToYuScreen(false, CUSTOMER_PLI_3, AUTH_PLI_3),
        async () => {
          helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "1");
          helper_V4.YUSCREEN_V4(CUSTOMER_PLI_3, "dentalAndPli", "1");
          helper.GET_PRODUCT("Life Insurance", "Personal Life Insurance");
          helper.ONBOARDING();
        }
      );
    }
  );

  Scenario(
    "As a user who started the journey but has not reached the point of being given a quote, when I resume my journey after 30 days, then I should start from the beginning.",
    scenario.start,
    async () => {
      Given(
        "I login as a user with Covea FIB enabled",
        given.loginToYuScreen(false, CUSTOMER_PLI_4, AUTH_PLI_4),
        async () => {
          helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "1");
          helper_V4.YUSCREEN_V4(CUSTOMER_PLI_4, "dentalAndPli", "1");
          helper.GET_PRODUCT("Life Insurance", "Personal Life Insurance");
          helper.ONBOARDING();
        }
      );
    }
  );
  Scenario("I can buy PLI with locale set to US and should see price in £ but not in $", scenario.startUS, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_37, AUTH_37 ), async () => {
          helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "10");
          helper_V4.YUSCREEN_V4(CUSTOMER_37, "dentalAndPli", "10");
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
          helper.LOCALE_US_CURRENCY_REVIEW_SCREEN()
      })
    })
});
