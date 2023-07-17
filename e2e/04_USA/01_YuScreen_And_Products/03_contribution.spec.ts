import {
    Feature,
    Scenario,
    Given,
    ScenarioOnly,
  } from "@yu-life/yulife-bdd-framework";
  import * as scenario from "./_steps/scenario";
  import * as given from "./_steps/given";
  import { AUTH_USA_10, AUTH_USA_5, AUTH_USA_6, AUTH_USA_7, AUTH_USA_8, AUTH_USA_9 } from "../_data/mongo/auths";
  import { BPEEW_USA_10_VIS, CUSTOMER_USA_10, CUSTOMER_USA_5, CUSTOMER_USA_6, CUSTOMER_USA_7, CUSTOMER_USA_8, CUSTOMER_USA_9 } from "../_data";
  import * as helper from "./_steps/helpers";
  import * as fixture from "./_steps/fixture";
  
  Feature("I am able to see sponsored by text/logos and box option types", async () => {
  Scenario("I can see sponsored by text and logos in yuscreen if contribution_type none",scenario.start, async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_5, AUTH_USA_5, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.GapInEnrolVisOutEnrol);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_5)
        helper.SLOT_VISSIBLE(fixture.GapInEnrolVisOutEnrol)
        helper.YUSCREEN_USA(CUSTOMER_USA_5);
        helper.SPONSORED_LOGO_VISSIBLE()
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBox)
        helper.BOX_OPTION_VISIBLE(fixture.ExploreInsureanceBox)
      });
    });
  Scenario("I should NOT see sponsored by text and logos if contribution_type is full ",scenario.start,async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_6, AUTH_USA_6, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.GapInsurance);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_6)
        helper.SLOT_VISSIBLE(fixture.GapInsurance)
        helper.YUSCREEN_USA(CUSTOMER_USA_6);
        helper.SPONSORED_LOGO_NOT_VISSIBLE()
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBox)
        helper.BOX_OPTION_NOT_VISIBLE(fixture.ExploreInsureanceBox)
      });
    });
  Scenario("I can see sponsored by text and logos in yuscreen if contribution_type partial",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_7, AUTH_USA_7, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.VisInsurance);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_7)
        helper.SLOT_VISSIBLE(fixture.VisInsurance)
        helper.YUSCREEN_USA(CUSTOMER_USA_7);
        helper.SPONSORED_LOGO_VISSIBLE()
        helper.BOX_OPTION_VISIBLE(fixture.ExploreInsureanceBox)
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBox)
    });
  });
  Scenario("I should NOT  see sponsored by text and logos in yuscreen if contribution_type partial but no logos are selected for that business",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_8, AUTH_USA_8, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.GapInsurance);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_8)
        helper.SLOT_VISSIBLE(fixture.GapInsurance)
        helper.YUSCREEN_USA(CUSTOMER_USA_8);
        helper.SPONSORED_LOGO_NOT_VISSIBLE()
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBox)
        helper.BOX_OPTION_VISIBLE(fixture.ExploreInsureanceBox)
    });
  });
  Scenario("If no products are assigned to the user, then the component is hidden. “Explore your insurance”",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_9, AUTH_USA_9, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.NoProduct);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_9)
        helper.YUSCREEN_USA(CUSTOMER_USA_9);
        helper.SPONSORED_LOGO_NOT_VISSIBLE()
        helper.BOX_OPTION_NOT_VISIBLE(fixture.ExploreInsureanceBox)
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBox)
    });
  });

  Scenario("If user in enrol window should see right countdown and slots with products can be enrol",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_10, AUTH_USA_10, true, "United States"),async () => {
        helper.ONBOARDING_YUSCREEN_USA(fixture.GapVisInsuranceInEnrolment);
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_10)
        helper.SLOT_VISSIBLE(fixture.GapVisInsuranceInEnrolment)
        helper.YUSCREEN_USA(CUSTOMER_USA_10);
        helper.SPONSORED_LOGO_NOT_VISSIBLE()
        helper.BOX_OPTION_NOT_VISIBLE(fixture.ExploreInsureanceBox)
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBox)
        helper.ENROLMENT_ENDS_IN(BPEEW_USA_10_VIS)
        helper.CHECK_WELLBEING_HUB(CUSTOMER_USA_10, fixture.MyWellbeingHubBox)
    });
  });
})