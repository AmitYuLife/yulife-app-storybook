import {
    Feature,
    Scenario,
    Given,
    ScenarioOnly,
    When,
    Then,
    FeatureOnly,
    ScenarioSkip,
  } from "@yu-life/yulife-bdd-framework";
  import * as then from "./_steps/then";
  import * as when from "./_steps/when";
  import * as scenario from "./_steps/scenario";
  import * as given from "./_steps/given";
  import { AUTH_USA_12, AUTH_USA_13, AUTH_USA_14 } from "../_data/mongo/auths";
  import { BPEEW_USA_12_CAN_PRE, BPEEW_USA_13_CRI, CUSTOMER_USA_12, CUSTOMER_USA_13, CUSTOMER_USA_14 } from "../_data";
  import * as helper from "./_resources/helpers";
  import * as fixture from "./_resources/fixture";
  import * as id from "@ids";

  Feature("I am able to see the correct enrollment windows on the US YuScreen", async () => {
    // @flaky - can't find box options on bitrise
    ScenarioSkip("I can see the correct US pre-enrollment YuScreen",scenario.start, async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_12, AUTH_USA_12, true, "United States"),async () => {
        //checks the correct products and yucoin power show on the onboarding screen
        helper.ONBOARDING_YUSCREEN_USA(fixture.CanInsurance);
        // skips the creation of a YuMoji
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_12)
        // confirms the right products are visible on the right side of the YuScreen
        helper.SLOT_VISIBLE(fixture.CanInsurance)
        // checks all the components of the YuScreen are correct e.g. name/create YuMoji/ YuCoin power/ the survey at the bottom of the screen
        helper.YUSCREEN_USA(CUSTOMER_USA_12)
        // checks the logos are not visible as we are in pre-enrollment
        helper.SPONSORED_LOGO_NOT_VISIBLE()
        // checks that the My Wellbeing box is visible as is expected
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
        // checks explore insurance option is not there as it is pre-enrollment
        helper.BOX_OPTION_NOT_VISIBLE(fixture.ExploreInsureanceBox)
        // checks the countdown timer is visible in the correct format and shows the correct information
        helper.ENROLMENT_VISIBLE(BPEEW_USA_12_CAN_PRE, "pre")
        // checks the pcp page when clicking to view options from the pre or active enrollment states
        helper.CHECK_ENROLLMENT_OPTIONS_PRE_ACTIVE(fixture.CancerInsuranceBox)
        // clicks into the product information and checks page contents
        helper.CHECK_PCP_PRODUCT(fixture.CancerInsuranceBox, fixture.Guardian_CAN)
        When(`I tap on the legal information`, when.tapText(fixture.Legal_Information), async () => {
          Then(`I should see correct legal stuff of cancer insurance`, then.onLegalStuffPage(fixture.Guardian_CAN))
        })

      });
    });

    // @flaky - can't find box options on bitrise
    ScenarioSkip("I can see the correct US active enrollment YuScreen",scenario.start, async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_13, AUTH_USA_13, true, "United States"),async () => {
        //checks the correct products and yucoin power show on the onboarding screen  
        helper.ONBOARDING_YUSCREEN_USA(fixture.CriInsurance);
        // skips the creation of a YuMoji
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_13)
         // confirms the right products are visible on the right side of the YuScreen
        helper.SLOT_VISIBLE(fixture.CriInsurance)
        // checks all the components of the YuScreen are correct e.g. name/create YuMoji/ YuCoin power/ the survey at the bottom of the screen
        helper.YUSCREEN_USA(CUSTOMER_USA_13)
        // checks the logos are not visible as we are in active enrollment
        helper.SPONSORED_LOGO_NOT_VISIBLE()
        // checks that the My Wellbeing box is visible as is expected
        When("I scroll to the bottom", when.swipeFromText(fixture.createYumujiCTA, "up", "fast"), async () => {
          helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
          // checks explore insurance option is not there as it is active-enrollment
          helper.BOX_OPTION_NOT_VISIBLE(fixture.ExploreInsureanceBox)
          // checks the countdown timer is visible in the correct format and shows the correct information
          helper.ENROLMENT_VISIBLE(BPEEW_USA_13_CRI, "active")
        })
        // swiping up page as button doesn't work for automated testing
        When(`I swipe up the page`, when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, `${CUSTOMER_USA_13.data.firstName} ${CUSTOMER_USA_13.data.lastName}`, "up"), async () => {
          Then(`I should see the top text`, then.textVisible(`${CUSTOMER_USA_13.data.firstName} ${CUSTOMER_USA_13.data.lastName}`))
        })
        When("I wait", when.wait(2000), async () => {
          When(`I tap on slot critical illness`, when.attemptToTapSlot(fixture.Guardian_CRI), async () => {
              Then(`I should see product card with description critical illness`, then.onMoreProtectionProductsCard(fixture.Guardian_CRI))
          })
      })
      When(`I tap on the legal information`, when.tapText(fixture.Legal_Information), async () => {
        Then(`I should see correct legal stuff of critical illness`, then.onLegalStuffPage(fixture.Guardian_CRI))
      })

    });
    });

    // @flaky - can't find box options on bitrise
    ScenarioSkip("I can see the correct US post enrollment YuScreen",scenario.start, async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_14, AUTH_USA_14, true, "United States"),async () => {
        //checks the correct products and yucoin power show on the onboarding screen (in this case no products should show) 
        helper.ONBOARDING_YUSCREEN_USA(fixture.VstdInsurance);
        // skips the creation of a YuMoji
        helper.SKIP_YUMOJI_CREATION(CUSTOMER_USA_14)
         // confirms no products are visible on the right side of the YuScreen as none are set to taken up = true
         When("I wait 1 seconds", when.wait(1000), async () => {
          Then(`I should NOT see ${fixture.Guardian_VSTD.slotAbreviation} text`, then.textNotVisible(fixture.Guardian_VSTD.slotAbreviation))  
        })
        // checks all the components of the YuScreen are correct e.g. name/create YuMoji/ YuCoin power/ the survey at the bottom of the screen
        helper.YUSCREEN_USA(CUSTOMER_USA_14)
        // checks that the sponsored logos appear now we're in post enrollment
        helper.SPONSORED_LOGO_VISIBLE()
        // checks that the My Wellbeing box is visible as is expected
        helper.BOX_OPTION_VISIBLE(fixture.MyWellbeingHubBoxUS)
        // checks explore insurance option is there as it is post-enrollment
        helper.BOX_OPTION_VISIBLE(fixture.ExploreInsureanceBox)
        // checks the countdown timer is not visible as we are in post-enrollment
        When(`I swipe down the page`, when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.SurveyLabel, "down"), async () => {
          Then(`I should NOT see the enrollment section`, then.idNotVisible(id.COUNTDOWN_COMPONENT))
        })
        helper.CHECK_EXPLORE_INSURANCE(fixture.ShortTermDisibilityInsurance)

      });
    });
    
  })