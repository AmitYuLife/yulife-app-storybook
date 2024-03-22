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
import { CUSTOMER_DENTAL_1, CUSTOMER_37, AUTH_37, AUTH_DENTAL_1, CORE_REWARDS_ORDO_REWARDS, PAYMENT_PLAN_DENTAL_1, CUSTOMER_DENTAL_RENEW, AUTH_DENTAL_RENEW, CUSTOMER_DENTAL_RENEW_2, AUTH_DENTAL_RENEW_2 } from "@data";
import * as helper_pli from "02_PLI_1/01_PLI/_resources/helpers";
import * as helper_V4 from "00_Smoke_4/01_yuscreen_v4/_resources/helpers";
import { BACK_BUTTON, BOX_OPTION_TITLE, BUTTON_CLOSE, CONTENT_MIDDLE_ITEM_IMAGE, NAV_BAR, REWARD_ITEM, SLOT_TITLE } from "@ids";
import { ordoAvailableImage, ordoNotAvailableImage } from "./_resources/constants";
import moment from "moment";

Feature("DENTAL HAPPY", async () => {

  // @update [Dental has been removed]
  ScenarioSkip("Dental product view", scenario.start, async () => {
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
    When("I navigate to the yu screen", when.tapID(NAV_BAR("yu")), async () => {
      When(`I tap Dental insurance`, when.tapText("Dental"), async () => {
        When("I swipe to the bottom", when.swipeFromText("Billing info", "up", "fast"), async () => {
          Then("I see an image saying I cannot order an ordo toothbrush yet", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(ordoNotAvailableImage)))
        })
      })
    })
    When("I swipe to the top", when.swipeFromText("FAQs", "down", "fast"), async () => {
      When("I sent an invoice to stripe for the second payment", when.sendStripeInvoice("123", PAYMENT_PLAN_DENTAL_1.data.providerSubscriptionId, 1999), async () => {
        When("I send a second payment to stripe", when.sendStripePayment("123", PAYMENT_PLAN_DENTAL_1.data.providerSubscriptionId, 1999), async () => {
          When("I tap View payment history text", when.tapText("View payment history", 1000, true), async () => {
            Then("I should see View payment history info for the second payment", then.paymentHistoryInfo("£19.99", "Paid"));
          })
        })
      })
    })
    When("I close the payment history", when.tapID(BACK_BUTTON), async () => {
      When("I close the dental information", when.tapIDAtIndex(BUTTON_CLOSE, 2), async () => {
        When(`I tap Dental insurance`, when.tapText("Dental"), async () => {
          When("I swipe to the bottom", when.swipeFromText("Billing info", "up", "fast"), async () => {
            Then("I see an image saying I cann order an ordo toothbrush", then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(ordoAvailableImage)))
          })
        })
      })
    })
    When("I close the dental information", when.tapIDAtIndex(BUTTON_CLOSE, 2), async () => {
      When("I tap rewards", when.tapID(NAV_BAR("rewards")), async () => {
        Then("I can see the ordo reward as there's now two payments", then.idVisible(REWARD_ITEM(CORE_REWARDS_ORDO_REWARDS.data._id)))    
      })
    })
  });

  //this test will stop working when we reach 2025 as all possible renewal dates will have been covered then
  Scenario("Existing customers see a warning their personal dental is ending when they are 30 days from renewal", scenario.start, async () => {
    Given("I login as a user with Bupa Dental product approved", when.loginToYuScreen(false, CUSTOMER_DENTAL_RENEW, AUTH_DENTAL_RENEW), async () => {
      When(`I tap Dental insurance`, when.tapText("Dental"), async () => {
        Then("I see the warning message about my personal dental being cancelled", then.personalDentalCancelledModalVisible(false, moment().add(30, "days").format("DD/MM/YYYY")))
      })
    })
  });

  //this test will stop working when we reach 2025 as all possible renewal dates will have been covered then
  // on Feb 1st 2024 these dates and the dates for the products will need to change to be today to keep working
  Scenario("Once customers dental has been cancelled they can still see the product on the YuScreen", scenario.start, async () => {
    Given("I run the sunset worker", given.sunsetPersonalDentalWorker("2024-02-01"), async () => {
      Given("I run the cancel worker", given.cancelPersonalDentalWorker("2024-02-01"), async () => {
        When("I login as a user with Bupa Dental product approved", when.loginToYuScreen(false, CUSTOMER_DENTAL_RENEW_2, AUTH_DENTAL_RENEW_2), async () => {
          When("I click to see all protection", when.tapID(SLOT_TITLE("See all protection")), async () => {
            Then("I appear on the deeper environment page", then.deeperProductSlotEnviornmentVisible(40))
        })
      })
    })
  })
  When("I tap available", when.tapText("Available"), async () => {
    Then("I can see the now available products page", then.noProductsDeeperEnvironmentVisible)
  })
  When("I click Owned", when.tapText("Owned"), async () => {
    When("I scroll to the bottom", when.swipeFromText("Owned", "up", "fast"), async () => {
      Then("I can see personal dental at the bottom", then.idVisible(BOX_OPTION_TITLE("Bupa Dental Plan for YuLife")))
      Then("I can see the pill showing the product is expired", then.policyEndedPillVisible)
    })
  })
  When(`I tap Dental insurance`, when.tapText("Bupa Dental Plan for YuLife"), async () => {
    Then("I see the warning message about my personal dental having been cancelled", then.personalDentalCancelledModalVisible(true, moment().format("DD/MM/YYYY")))
  })
  });

});
