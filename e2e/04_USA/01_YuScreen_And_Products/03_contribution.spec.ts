import {
    Feature,
    Scenario,
    Given,
    ScenarioOnly,
    When,
    Then,
    ScenarioSkip,
  } from "@yu-life/yulife-bdd-framework";
  import * as then from "./_steps/then";
  import * as when from "./_steps/when";
  import * as scenario from "./_steps/scenario";
  import * as given from "./_steps/given";
  import { AUTH_USA_10, AUTH_USA_11, AUTH_USA_15, AUTH_USA_5, AUTH_USA_6, AUTH_USA_7, AUTH_USA_8, AUTH_USA_9 } from "../_data/mongo/auths";
  import { BPEEW_USA_10_VIS, CUSTOMER_USA_10, CUSTOMER_USA_11, CUSTOMER_USA_15, CUSTOMER_USA_5, CUSTOMER_USA_6, CUSTOMER_USA_7, CUSTOMER_USA_8, CUSTOMER_USA_9 } from "../_data";
  import * as helper from "./_resources/helpers";
  import * as fixture from "./_resources/fixture";
  import * as id from "@ids";
  
  Feature("I am able to see sponsored by text/logos and box option types", async () => {
    // @update added to YUSCREEN_USA
  Scenario("I can see sponsored by text and logos in yuscreen if contribution_type none and can view the explore my insurance page",scenario.start, async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_5, AUTH_USA_5, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.GapInEnrolVisOutEnrol);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_5)
        helper.SLOT_VISIBLE(fixture.GapInEnrolVisOutEnrol)
        helper.YUSCREEN_USA(CUSTOMER_USA_5);
        helper.SPONSORED_LOGO_VISIBLE()
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
        helper.BOX_OPTION_VISIBLE(fixture.ExploreInsureanceBox)
        helper.CHECK_EXPLORE_INSURANCE(fixture.VisionInsuranceBox)
      });
    });
  Scenario("I should see sponsored by text and logos if contribution_type is full ",scenario.start,async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_6, AUTH_USA_6, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.GapInsurance);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_6)
        helper.SLOT_VISIBLE(fixture.GapInsurance)
        helper.YUSCREEN_USA(CUSTOMER_USA_6);
        helper.SPONSORED_LOGO_VISIBLE()
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
        helper.BOX_OPTION_NOT_VISIBLE(fixture.ExploreInsureanceBox)
      });
    });
  Scenario("I can see sponsored by text and logos in yuscreen if contribution_type partial",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_7, AUTH_USA_7, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.VisInsurance);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_7)
        helper.SLOT_VISIBLE(fixture.VisInsurance)
        helper.YUSCREEN_USA(CUSTOMER_USA_7);
        helper.SPONSORED_LOGO_VISIBLE()
        helper.BOX_OPTION_VISIBLE(fixture.ExploreInsureanceBox)
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
    });
  });
    
  // @update - iPhone SE can't find expore insurance box (need to fix scroll)
  ScenarioSkip("I should NOT see sponsored by text and logos in yuscreen if contribution_type partial but no logos are selected for that business",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_8, AUTH_USA_8, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.GapInsurance);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_8)
        helper.SLOT_VISIBLE(fixture.GapInsurance)
        helper.YUSCREEN_USA(CUSTOMER_USA_8);
        helper.SPONSORED_LOGO_NOT_VISIBLE()
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
        helper.BOX_OPTION_VISIBLE(fixture.ExploreInsureanceBox)
    });
  });
  Scenario("If no products are assigned to the user, then the component is hidden. “Explore your insurance”",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_9, AUTH_USA_9, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.NoProduct);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_9)
        helper.YUSCREEN_USA(CUSTOMER_USA_9);
        helper.SPONSORED_LOGO_VISIBLE()
        helper.BOX_OPTION_NOT_VISIBLE(fixture.ExploreInsureanceBox)
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
    });
  });

  Scenario("If user in enrol window should see right countdown and slots with products can be enrol",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_10, AUTH_USA_10, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.GapVisInsuranceInEnrolment);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_10)
        helper.SLOT_VISIBLE(fixture.GapVisInsuranceInEnrolment)
        helper.YUSCREEN_USA(CUSTOMER_USA_10);
        helper.SPONSORED_LOGO_NOT_VISIBLE()
        helper.BOX_OPTION_NOT_VISIBLE(fixture.ExploreInsureanceBox)
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
        helper.ENROLMENT_VISIBLE(BPEEW_USA_10_VIS, "active")
        helper.CHECK_WELLBEING_HUB(CUSTOMER_USA_10, fixture.MyWellbeingHubBoxUS)
    });
  });

  // @update - can't find expore insurance box (need to fix scroll)
  ScenarioSkip("If user is assigned to two products, one full contribution and one not, they can only see the not option in the PCP list",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_11, AUTH_USA_11, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.AccCanInsuranceInEnrolment);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_11)
        helper.SLOT_VISIBLE(fixture.AccCanInsuranceInEnrolment)
        helper.YUSCREEN_USA(CUSTOMER_USA_11);
        helper.SPONSORED_LOGO_VISIBLE()
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
        helper.BOX_OPTION_VISIBLE(fixture.ExploreInsureanceBox)
        // checks that cancer options appear in the explore insurance page
        helper.CHECK_EXPLORE_INSURANCE(fixture.CancerInsuranceBox)
        When("I tap to go back to Yu Screen", when.tapID(id.BACK_BUTTON), async () => {
          Then("I should not see Vision Insurance ", then.idNotVisible(id.TEXT_TEMPLATE("Vision Insurance")))
      })
        // checks that accident cover is not on the explore insurance page
        When(`I scroll down to ${fixture.ExploreInsureanceBox.description}`, when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.ExploreInsureanceBox.description, "down"), async () => {
          When(`I tap ${fixture.ExploreInsureanceBox.description}`, when.tapText(fixture.ExploreInsureanceBox.description), async () => {
              Then(`I should NOT see ${fixture.AccidentInsuranceBox.imageUrl} text`, then.idNotVisible(id.RIGHT_SIDE_IMAGE_BOX_OPTION(fixture.AccidentInsuranceBox.imageUrl)))
              Then(`I should NOT see ${fixture.AccidentInsuranceBox.title} text`, then.idNotVisible(id.BOX_OPTION_TITLE(fixture.AccidentInsuranceBox.title)))
              Then(`I should NOT see ${fixture.AccidentInsuranceBox.description} text`, then.idNotVisible(id.BOX_OPTION_DESCRIPTION(fixture.AccidentInsuranceBox.description)))
          })
        })
    });
  });

  Scenario("I should see sponsored by text and logos but not the product if contribution_type is null",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_15, AUTH_USA_15, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.BlankProductEnrollmentScreen);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_15)
        When("I wait 1 seconds", when.wait(1000), async () => {
          Then(`I should NOT see the title for CRI insurance`, then.textNotVisible(fixture.CriInsurance.SlotProductTitle))
      })
        helper.YUSCREEN_USA(CUSTOMER_USA_15);
        helper.SPONSORED_LOGO_VISIBLE()
    });
  });
  
})