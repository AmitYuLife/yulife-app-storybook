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
import { CUSTOMER_DENTAL_1, CUSTOMER_37, AUTH_37, AUTH_DENTAL_1, CORE_REWARDS_ORDO_REWARDS, PAYMENT_PLAN_DENTAL_1 } from "@data";
import * as helper_pli from "02_PLI_1/_resources/helpers";
import * as helper_V4 from "00_Smoke_4/01_yuscreen_v4/_resources/helpers";
import { BACK_BUTTON, BUTTON_CLOSE, NAV_BAR, REWARD_ITEM } from "@ids";

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
        When("I scroll to see the payment history text", when.swipeFromText("FAQs", "down", "fast"), async () => {
          helper.PAYMENT_HISTORY("£18.99", "Paid");
        })
      }
    );
  });

  Scenario("Ordo rewards are unlocked for personal dental after a second succesful payment", scenario.start, async () => {
    Given("I login as a user with Bupa Dental product approved", given.loginToYuScreen(false, CUSTOMER_DENTAL_1, AUTH_DENTAL_1), async () => {
      When("I tap rewards", when.tapID(NAV_BAR("rewards")), async () => {
        When("I confirm my location", when.tapText("Confirm selection", 2000), async () => {
          Then("I can't see the ordo reward as there's only been one payment", then.idNotVisible(REWARD_ITEM(CORE_REWARDS_ORDO_REWARDS.data._id)))
        })
      }) 
    });
    When("I sent an invoice to stripe for the second payment", when.sendStripeInvoice("123", PAYMENT_PLAN_DENTAL_1.data.providerSubscriptionId, 1999), async () => {
      When("I send a second payment to stripe", when.sendStripePayment("123", PAYMENT_PLAN_DENTAL_1.data.providerSubscriptionId, 1999), async () => {
        When("I navigate to the yu screen", when.tapID(NAV_BAR("yu")), async () => {
          When(`I tap Dental insurance`, when.tapText("Dental"), async () => {
            When("I tap View payment history text", when.tapText("View payment history", 1000, true), async () => {
              Then("I should see View payment history info for the second payment", then.paymentHistoryInfo("£19.99", "Paid"));
            })
          })
        })
      })
    })
    When("I close the payment history", when.tapID(BACK_BUTTON), async () => {
      When("I close the dental information", when.tapIDAtIndex(BUTTON_CLOSE, 2), async () => {
        When("I tap rewards", when.tapID(NAV_BAR("rewards")), async () => {
          Then("I can see the ordo reward as there's now two payments", then.idVisible(REWARD_ITEM(CORE_REWARDS_ORDO_REWARDS.data._id)))
        })
        
      })
    })
  });
});
