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
import { CUSTOMER_DENTAL_1, CUSTOMER_37, AUTH_37, AUTH_DENTAL_1 } from "@data";
import * as helper_pli from "02_PLI_1/_steps/helpers";
import * as helper_V4 from "00_Smoke_4/01_yuscreen_v4/_steps/helpers";

Feature("DENTAL HAPPY", async () => {
  Scenario("I can buy Dental and PLI ,only allow previously used card for purchase of new product", scenario.start, async () => {
      Given("I login as a user with Bupa Dental enabled", given.loginToYuScreen(false, CUSTOMER_37, AUTH_37), async () => {
          helper_V4.ONBOARDING_YUSCREEN("dentalAndPli", "10");
          helper_V4.YUSCREEN_V4(CUSTOMER_37, "dentalAndPli", "10");
          helper_pli.GET_PRODUCT("Dental", "Dental Insurance");
          helper.ONBOARDING();
          helper.INFORMATION();
          helper.PLANS();
          helper.PACKAGE_DETAILS("Epic");
          helper.ADD_EDIT_PAYMENT_DETAILS();
          helper.CHECKOUT();
          helper_pli.GET_PRODUCT("Life Insurance", "Personal Life Insurance");
          helper_pli.ONBOARDING();
          helper_pli.FAST_INTRO_START();
          helper_pli.UNDERWRITING_NAME();
          helper_pli.UNDERWRITING_DOB(30);
          helper_pli.UNDERWRITING_SALARY("25000");
          helper_pli.UNDERWRITING_CITIZEN("Yes");
          helper_pli.UNDERWRITING_EMPLOYMENT("No");
          helper_pli.UNDERWRITING_HEIGHT("160 cm");
          helper_pli.UNDERWRITING_WEIGHT("60 kg");
          helper_pli.UNDERWRITING_CIGARETTES("Never");
          helper_pli.UNDERWRITING_CIGARS("Never");
          helper_pli.UNDERWRITING_SMOKING_ALTERNATIVES("Never");
          helper_pli.UNDERWRITING_ALCOHOL("2 drinks");
          helper_pli.UNDERWRITING_CANNABIS("Never");
          helper_pli.UNDERWRITING_RECREATIONAL_DRUGS("Never");
          helper_pli.UNDERWRITING_COUNSELLING("No");
          helper_pli.UNDERWRITING_SEX("Male");
          helper_pli.UNDERWRITING_DIAGNOSED_WITH("No");
          helper_pli.UNDERWRITING_MANY_CONSULTATIONS("No");
          helper_pli.UNDERWRITING_AWAITING_TESTS("No");
          helper_pli.UNDERWRITING_SYMPTOMS("No");
          helper_pli.UNDERWRITING_COVID_HOSPITAL("No");
          helper_pli.UNDERWRITING_COVID_EXPOSURE("No");
          helper_pli.UNDERWRITING_OTHER_POLICIES("No");
          helper_pli.FAST_REVIEW_SCREEN();
          helper_pli.FAST_CHECKOUT(true, "Common");
        }
      );
    }
  );

  Scenario("Dental product view", scenario.start, async () => {
    Given("I login as a user with Bupa Dental product approved", given.loginToYuScreen(false, CUSTOMER_DENTAL_1, AUTH_DENTAL_1), async () => {
        helper_V4.DENTAL_PRODUCT_VIEW("Epic", "0123");
        helper.PACKAGE_COVERING("Epic");
        helper.BUPA_CLAIM();
        helper.FAQ();
        helper.PAYMENT_HISTORY("£18.99", "Paid");
      }
    );
  });
});
