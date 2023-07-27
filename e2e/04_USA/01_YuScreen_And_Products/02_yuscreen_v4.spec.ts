import {
  Feature,
  Scenario,
  Given,
  When,
  Then,
  FeatureOnly,
  ScenarioOnly,
  ScenarioSkip,
  FeatureSkip,
} from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import { AUTH_USA_1, AUTH_USA_2, AUTH_USA_3, AUTH_USA_4 } from "../_data/mongo/auths";
import { CUSTOMER_USA_1, CUSTOMER_USA_2, CUSTOMER_USA_3, CUSTOMER_USA_4 } from "../_data";
import {
  AVATAR_ITEM,
  RIGHT_STATUS_ICON,
  BACKGROUND_COLOUR_PRODUCT,
  ONBOARDING_SCREEN,
  YUCOIN_POWER,
  TEXT_TEMPLATE,
  YUSCREEN_AVATAR,
  SURVEY_SCREEN,
  SURVEY_TEXT_BOX,
  CHECK_BOX_STATE,
  BACK_BUTTON,
  YUSCREEN_SCROLL_VIEW,
} from "@ids";

import * as helper from "./_resources/helpers";
import {
  Guardian_DENPPO,
  Guardian_DENHMO,
  Guardian_DENCHOI,
  Guardian_TLIF,
  Guardian_VIS,
  Guardian_WLIF,
  Guardian_ADD,
  Guardian_ULIF,
  Guardian_LTD,
  Guardian_STD,
  Guardian_VADD,
  Guardian_VLTD,
  Guardian_VSTD,
  Guardian_ACC,
  Guardian_HI,
  Guardian_CRI,
  Guardian_SPDIS,
  Guardian_CAN,
  Guardian_ACCSICK,
  Guardian_VLIF,
} from "./_resources/fixture";

Feature("I am able to see Product Details in US YU Screen ", async () => {
  Scenario("I can see all product details Wellbeing/DENPPO/DENHMO/DENCHOI/TLIF/VIS", scenario.start, async () => {
    Given(
      "I login as a user with earn rate 0 from WellbeingProduct",
      given.logInAndGoToTab("yu", CUSTOMER_USA_1, AUTH_USA_1, true, "United States"),
      async () => {
        helper.ONBOARDING_YUSCREEN("Wellbeing/TLIF/DENCHOI", "10");
        helper.YUSCREEN_USA_V4(CUSTOMER_USA_1, "Wellbeing/DENPPO/DENCHOI/TLIF/VIS", "10");
        helper.MORE_PROTECTION()
        When("I scroll to the bottom of the page", when.swipeFromText("Available to you", "up", "fast"), async () => {
          helper.MORE_PRODUCTS_PRODUCT_CHECK(Guardian_DENPPO);
          helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_DENPPO);
          helper.MORE_PRODUCTS_PRODUCT_CHECK(Guardian_DENCHOI, );
          helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_DENCHOI);
          helper.MORE_PRODUCTS_PRODUCT_CHECK(Guardian_DENHMO);
          helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_DENHMO);
          helper.MORE_PRODUCTS_PRODUCT_CHECK(Guardian_VIS);
          helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_VIS);
          helper.MORE_PRODUCTS_PRODUCT_CHECK(Guardian_TLIF);
          helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_TLIF);
        })

      }
    );
  });

  Scenario("I can see all product details ADD/STD/LTD/VADD/HI", scenario.start, async () => {
    Given(
      "I login as a user",
      given.logInAndGoToTab("yu", CUSTOMER_USA_2, AUTH_USA_2, true, "United States"),
      async () => {
        helper.ONBOARDING_YUSCREEN("LTD/STD/VADD/HI", "1");
        helper.YUSCREEN_USA_V4(CUSTOMER_USA_2, "ADD/STD/LTD/VADD/HI", "1");
        When(`I swipe up the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, `${CUSTOMER_USA_2.data.firstName} ${CUSTOMER_USA_2.data.lastName}`, "up"), async () => {
          Then(`I should see the top text`, then.textVisible(`${CUSTOMER_USA_2.data.firstName} ${CUSTOMER_USA_2.data.lastName}`))
        })
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_ADD);
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_ADD, "Yu Screen");
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_LTD);
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_LTD, "Yu Screen");
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_STD, );
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_STD, "Yu Screen");
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_VADD);
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_VADD, "Yu Screen");
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_HI);
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_HI, "Yu Screen");
      }
    );
  });

  Scenario("I can see all product details VLTD/SPDIS/ACC/CRI/VSTD", scenario.start, async () => {
    Given(
      "I login as a user",
      given.logInAndGoToTab("yu", CUSTOMER_USA_3, AUTH_USA_3, true, "United States"),
      async () => {
        helper.ONBOARDING_YUSCREEN("CRI/SPDIS/ACC", "1");
        helper.YUSCREEN_USA_V4(CUSTOMER_USA_3, "VLTD/SPDIS/ACC/CRI/VSTD", "1");
        When(`I swipe up the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, `${CUSTOMER_USA_3.data.firstName} ${CUSTOMER_USA_3.data.lastName}`, "up"), async () => {
          Then(`I should see the top text`, then.textVisible(`${CUSTOMER_USA_3.data.firstName} ${CUSTOMER_USA_3.data.lastName}`))
        })
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_VSTD);
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_VSTD, "Yu Screen");
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_ACC);
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_ACC, "Yu Screen");
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_VLTD);
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_VLTD, "Yu Screen");
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_CRI);
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_CRI, "Yu Screen");
        helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_SPDIS);
        helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_SPDIS, "Yu Screen");
      }
    );
  });

  Scenario(
    "I can see all product details ACCSICK/CAN/VLIF and not having enrolment window",
    scenario.start,
    async () => {
      Given(
        "I login as a user",
        given.logInAndGoToTab("yu", CUSTOMER_USA_4, AUTH_USA_4, true, "United States"),
        async () => {
          helper.ONBOARDING_YUSCREEN("ACCSICK/CAN/VLIF", "1");
          helper.YUSCREEN_USA_V4(CUSTOMER_USA_4, "ACCSICK/CAN/VLIF", "1");
          When(`I swipe up the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, `${CUSTOMER_USA_4.data.firstName} ${CUSTOMER_USA_4.data.lastName}`, "up"), async () => {
            Then(`I should see the top text`, then.textVisible(`${CUSTOMER_USA_4.data.firstName} ${CUSTOMER_USA_4.data.lastName}`))
          })
          helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_CAN);
          helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_CAN, "Yu Screen");
          helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_ACCSICK);
          helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_ACCSICK, "Yu Screen");
          helper.SLOT_YU_SCREEN_PRODUCT_CHECK(Guardian_VLIF);
          helper.LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION(Guardian_VLIF, "Yu Screen");
        }
      );
    }
  );
});
