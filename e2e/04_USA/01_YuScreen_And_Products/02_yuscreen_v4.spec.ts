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
import { BACK_BUTTON, YUSCREEN_SCROLL_VIEW } from "@ids";
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
  Legal_Information,
  yuMojiBuilder,
} from "./_resources/fixture";

// @skip - skipping as currently not offering any of these products
FeatureSkip("I am able to see Product Details in US YU Screen ", async () => {
  Scenario("I can see all product details Wellbeing/DENPPO/DENHMO/DENCHOI/TLIF/VIS", scenario.start, async () => {
    Given("I login with earn rate 0 from WellbeingProduct", given.logInAndGoToTab("yu", CUSTOMER_USA_1, AUTH_USA_1, true, "United States"), async () => {
        When("I wait", when.wait(2500), async()=>{
          Then(`I should see the onboarding Yuscreen and see Wellbeing/DENPPO/DENCHOI`, then.onboardingUsYuscreenV4("Wellbeing/DENPPO/DENCHOI", "10"))
      })
    });
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      Then(`I should see ${yuMojiBuilder}`, then.textVisible(yuMojiBuilder))
    })
    When("I swipe down the screen", when.swipeFromText(yuMojiBuilder, "up", "slow"), async () => {
      When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I'm on YuScreen V4 and see the correct products`, then.onUSAYuscreenV4(CUSTOMER_USA_1, "Wellbeing/DENPPO/DENCHOI/TLIF/VIS", "10"))
      })
    })
    When("I tap More protection", when.tapText("More protection"), async () => {
      Then(`I should see Available to you`, then.textVisibleAtIndex("Available to you", 0))
    })
    When(`I tap the product card for Dental insurance`, when.tapTextAtIndex(Guardian_DENPPO.boxDescription, 0), async () => {
      Then(`I should see product card for Dental insurance`, then.onMoreProtectionProductsCard(Guardian_DENPPO))
    })
    When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
      Then(`I should see correct legal stuff of Dental insurance`, then.onLegalStuffPage(Guardian_DENPPO))
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When(`I tap the product card for Dental Choice Plan`, when.tapTextAtIndex(Guardian_DENCHOI.boxDescription, 0), async () => {
          Then(`I should see product card for Dental Choice Plan`, then.onMoreProtectionProductsCard(Guardian_DENCHOI))
        })
        When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
          Then(`I should see correct legal stuff of Dental Choice Plan`, then.onLegalStuffPage(Guardian_DENCHOI))
        })
      })
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When(`I tap the product card for Managed Care plan`, when.tapTextAtIndex(Guardian_DENHMO.boxDescription, 0), async () => {
          Then(`I should see product card for Managed Care plan`, then.onMoreProtectionProductsCard(Guardian_DENHMO))
        })
        When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
          Then(`I should see correct legal stuff of Managed Care plan`, then.onLegalStuffPage(Guardian_DENHMO))
        })
      })
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When(`I tap the product card for Vision insurance`, when.tapTextAtIndex(Guardian_VIS.boxDescription, 0), async () => {
          Then(`I should see product card for Vision insurance`, then.onMoreProtectionProductsCard(Guardian_VIS))
        })
        When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
          Then(`I should see correct legal stuff of Vision insurance`, then.onLegalStuffPage(Guardian_VIS))
        })
      })
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When(`I tap the product card for Term Life insurance`, when.tapTextAtIndex(Guardian_TLIF.boxDescription, 0), async () => {
          Then(`I should see product card for Term Life insurance`, then.onMoreProtectionProductsCard(Guardian_TLIF))
        })
        When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
          Then(`I should see correct legal stuff of Term Life insurance`, then.onLegalStuffPage(Guardian_TLIF))
        })
      })
    })

  });

  Scenario("I can see all product details ADD/STD/LTD/VADD/HI", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_USA_2, AUTH_USA_2, true, "United States"), async () => {
      When("I wait", when.wait(2500), async()=>{
        Then(`I should see the onboarding Yuscreen and see LTD/STD/VADD/HI`, then.onboardingUsYuscreenV4("LTD/STD/VADD/HI", "1"))
      })
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      Then(`I should see ${yuMojiBuilder}`, then.textVisible(yuMojiBuilder))
    })
    When("I swipe down the screen", when.swipeFromText(yuMojiBuilder, "up", "slow"), async () => {
      When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I'm on YuScreen V4 and see the correct products`, then.onUSAYuscreenV4(CUSTOMER_USA_2, "ADD/STD/LTD/VADD/HI", "1"))
      })
    })
    When(`I swipe up the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, `${CUSTOMER_USA_2.data.firstName} ${CUSTOMER_USA_2.data.lastName}`, "up"), async () => {
      Then(`I should see the top text`, then.textVisible(`${CUSTOMER_USA_2.data.firstName} ${CUSTOMER_USA_2.data.lastName}`))
    })
    When("I wait", when.wait(2000), async () => {
      When(`I tap on slot for AD&D insurance`, when.attemptToTapSlot(Guardian_ADD), async () => {
          Then(`I should see product card for AD&D insurance`, then.onMoreProtectionProductsCard(Guardian_ADD))
      })
    })
    When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
      Then(`I should see correct legal stuff of AD&D insurance`, then.onLegalStuffPage(Guardian_ADD))
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When("I wait", when.wait(2000), async () => {
          When(`I tap on slot for Long term disability insurance`, when.attemptToTapSlot(Guardian_LTD), async () => {
              Then(`I should see product card for Long term disability insurance`, then.onMoreProtectionProductsCard(Guardian_LTD))
          })
        })
      })
    })
    When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
      Then(`I should see correct legal stuff of Long term disability insurance`, then.onLegalStuffPage(Guardian_LTD))
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When("I wait", when.wait(2000), async () => {
          When(`I tap on slot for Short term disability insurance`, when.attemptToTapSlot(Guardian_STD), async () => {
              Then(`I should see product card for Short term disability insurance`, then.onMoreProtectionProductsCard(Guardian_STD))
          })
        })
      })
    })
    When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
      Then(`I should see correct legal stuff of Short term disability insurance`, then.onLegalStuffPage(Guardian_STD))
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When("I wait", when.wait(2000), async () => {
          When(`I tap on slot for Voluntary AD&D insurance`, when.attemptToTapSlot(Guardian_VADD), async () => {
              Then(`I should see product card for Voluntary AD&D insurance`, then.onMoreProtectionProductsCard(Guardian_VADD))
          })
        })
      })
    })
    When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
      Then(`I should see correct legal stuff of Voluntary AD&D insurance`, then.onLegalStuffPage(Guardian_VADD))
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When("I wait", when.wait(2000), async () => {
          When(`I tap on slot for Hospital Indemnity insurance`, when.attemptToTapSlot(Guardian_HI), async () => {
              Then(`I should see product card for Hospital Indemnity insurance`, then.onMoreProtectionProductsCard(Guardian_HI))
          })
        })
      })
    })
    When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
      Then(`I should see correct legal stuff of Hospital Indemnity insurance`, then.onLegalStuffPage(Guardian_HI))
    })

  });

  Scenario("I can see all product details VLTD/SPDIS/ACC/CRI/VSTD", scenario.start, async () => {
    Given( "I login as a user", given.logInAndGoToTab("yu", CUSTOMER_USA_3, AUTH_USA_3, true, "United States"), async () => {
        When("I wait", when.wait(2500), async()=>{
          Then(`I should see the onboarding Yuscreen and see CRI/SPDIS/ACC`, then.onboardingUsYuscreenV4("CRI/SPDIS/ACC", "1"))
        })
      });
      When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
        Then(`I should see ${yuMojiBuilder}`, then.textVisible(yuMojiBuilder))
      })
      When("I swipe down the screen", when.swipeFromText(yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
            Then(`I'm on YuScreen V4 and see the correct products`, then.onUSAYuscreenV4(CUSTOMER_USA_3, "VLTD/SPDIS/ACC/CRI/VSTD", "1"))
        })
      })
      When(`I swipe up the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, `${CUSTOMER_USA_3.data.firstName} ${CUSTOMER_USA_3.data.lastName}`, "up"), async () => {
        Then(`I should see the top text`, then.textVisible(`${CUSTOMER_USA_3.data.firstName} ${CUSTOMER_USA_3.data.lastName}`))
      })
      When("I wait", when.wait(2000), async () => {
        When(`I tap on slot for Guardian VSTD`, when.attemptToTapSlot(Guardian_VSTD), async () => {
            Then(`I should see product card for Guardian VSTD`, then.onMoreProtectionProductsCard(Guardian_VSTD))
        })
      })
      When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
        Then(`I should see correct legal stuff of Guardian VSTD`, then.onLegalStuffPage(Guardian_VSTD))
      })
      When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
        When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
          When("I wait", when.wait(2000), async () => {
            When(`I tap on slot for Accident insurance`, when.attemptToTapSlot(Guardian_ACC), async () => {
                Then(`I should see product card for Accident insurance`, then.onMoreProtectionProductsCard(Guardian_ACC))
            })
          })
        })
      })
      When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
        Then(`I should see correct legal stuff of Accident insurance`, then.onLegalStuffPage(Guardian_ACC))
      })
      When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
        When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
          When("I wait", when.wait(2000), async () => {
            When(`I tap on slot for Guardian VLTD`, when.attemptToTapSlot(Guardian_VLTD), async () => {
                Then(`I should see product card for Guardian VLTD`, then.onMoreProtectionProductsCard(Guardian_VLTD))
            })
          })
        })
      })
      When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
        Then(`I should see correct legal stuff of Guardian VLTD`, then.onLegalStuffPage(Guardian_VLTD))
      })
      When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
        When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
          When("I wait", when.wait(2000), async () => {
            When(`I tap on slot for Specified Disease insurance`, when.attemptToTapSlot(Guardian_SPDIS), async () => {
                Then(`I should see product card for Specified Disease insurance`, then.onMoreProtectionProductsCard(Guardian_SPDIS))
            })
          })
        })
      })
      When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
        Then(`I should see correct legal stuff of Specified Disease insurance`, then.onLegalStuffPage(Guardian_SPDIS))
      })
      When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
        When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
          When("I wait", when.wait(2000), async () => {
            When(`I tap on slot for Critical Illness insurance`, when.attemptToTapSlot(Guardian_CRI), async () => {
                Then(`I should see product card for Critical Illness insurance`, then.onMoreProtectionProductsCard(Guardian_CRI))
            })
          })
        })
      })
      When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
        Then(`I should see correct legal stuff of Critical Illness insurance`, then.onLegalStuffPage(Guardian_CRI))
      })

  });
  
  Scenario("I can see all product details ACCSICK/CAN/VLIF and not having enrolment window", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_USA_4, AUTH_USA_4, true, "United States"), async () => {
      When("I wait", when.wait(2500), async()=>{
        Then(`I should see the onboarding Yuscreen and see ACCSICK/CAN/VLIF`, then.onboardingUsYuscreenV4("ACCSICK/CAN/VLIF", "1"))
      })
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      Then(`I should see ${yuMojiBuilder}`, then.textVisible(yuMojiBuilder))
    })
    When("I swipe down the screen", when.swipeFromText(yuMojiBuilder, "up", "slow"), async () => {
      When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I'm on YuScreen V4 and see the correct products`, then.onUSAYuscreenV4(CUSTOMER_USA_4, "ACCSICK/CAN/VLIF", "1"))
      })
    })
    When(`I swipe up the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, `${CUSTOMER_USA_4.data.firstName} ${CUSTOMER_USA_4.data.lastName}`, "up"), async () => {
      Then(`I should see the top text`, then.textVisible(`${CUSTOMER_USA_4.data.firstName} ${CUSTOMER_USA_4.data.lastName}`))
    })
    When("I wait", when.wait(2000), async () => {
      When(`I tap on slot for cancer insurance`, when.attemptToTapSlot(Guardian_CAN), async () => {
          Then(`I should see product card for cancer insurance`, then.onMoreProtectionProductsCard(Guardian_CAN))
      })
    })
    When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
      Then(`I should see correct legal stuff of cancer insurance`, then.onLegalStuffPage(Guardian_CAN))
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When("I wait", when.wait(2000), async () => {
          When(`I tap on slot for Accident and Sickness`, when.attemptToTapSlot(Guardian_ACCSICK), async () => {
            Then(`I should see product card for Accident and Sickness`, then.onMoreProtectionProductsCard(Guardian_ACCSICK))
          })
        })
      })
    })
    When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
      Then(`I should see correct legal stuff of Accident and Sickness`, then.onLegalStuffPage(Guardian_ACCSICK))
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
      When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
        When("I wait", when.wait(2000), async () => {
          When(`I tap on slot for Voluntary life insurance`, when.attemptToTapSlot(Guardian_VLIF), async () => {
            Then(`I should see product card for Voluntary life insurance`, then.onMoreProtectionProductsCard(Guardian_VLIF))
          })
        })
      })
    })
    When(`I tap on the legal information`, when.tapText(Legal_Information), async () => {
      Then(`I should see correct legal stuff of Voluntary life insurance`, then.onLegalStuffPage(Guardian_VLIF))
    })

  });

});
