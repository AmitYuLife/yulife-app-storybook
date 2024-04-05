import {
    Feature,
    Scenario,
    Given,
    ScenarioOnly,
    When,
    Then,
    FeatureOnly,
    ScenarioSkip,
    FeatureSkip,
  } from "@yu-life/yulife-bdd-framework";
  import * as then from "./_steps/then";
  import * as when from "./_steps/when";
  import * as scenario from "./_steps/scenario";
  import * as given from "./_steps/given";
  import { AUTH_USA_12, AUTH_USA_13, AUTH_USA_14 } from "../_data/mongo/auths";
  import { BPEEW_USA_12_CAN_PRE, BPEEW_USA_13_CRI, CUSTOMER_USA_12, CUSTOMER_USA_13, CUSTOMER_USA_14 } from "../_data";
  import * as fixture from "./_resources/fixture";
  import * as id from "@ids";

  // @skip - skipping as currently not offering any of these products
FeatureSkip("I am able to see the correct enrollment windows on the US YuScreen", async () => {
  // @flaky - can't find box options on bitrise
  Scenario("I can see the correct US pre-enrollment YuScreen",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_12, AUTH_USA_12, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.CanInsurance))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_12.data.firstName} ${CUSTOMER_USA_12.data.lastName}`))
          Then("I can see the correct product slots", then.USAProdSlotVisible(fixture.CanInsurance))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_12))
          Then("I can see the sponsored logos", then.sponsoredByVisible(false))
        })
      })
    })
    // might need to comment out the below due to above flaky reasons
    When("I scroll to see the wellbeing hub", when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.SurveyText, "down"), async () => {
    // Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
    Then("I can't see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, false))
    })
    When("I scoll to see the enrollment component", when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.createYumujiCTA, "up"), async () => {
      Then("I see the correct enrollment component", then.enrollmentComponentVisible(BPEEW_USA_12_CAN_PRE, "pre"))
    })
    When(`I tap the button`, when.tapText(fixture.preEnrollmentButtonMessage), async () => {
      Then("I'm on the pcp page", then.onPCPPage())
      Then("I cannot see the info panel", then.infoPanelVisible(false))
      Then("I can see the option for the cancer insurance", then.pcpProductVisible(fixture.CancerInsuranceBox, true))
      Then("I see the arrow button to go deeper into the product info", then.idVisible(id.ARROW_BUTTON))
    })
    When(`I tap the product`, when.tapID(id.BOX_OPTION_TITLE(fixture.CancerInsuranceBox.title)), async () => {
      Then("I'm on the product page for that product", then.onMoreProtectionProductsCard(fixture.Guardian_CAN))
    })
    When(`I tap on the legal information`, when.tapText(fixture.Legal_Information), async () => {
      Then(`I should see correct legal stuff of cancer insurance`, then.onLegalStuffPage(fixture.Guardian_CAN))
    })

  });

  // @flaky - can't find box options on bitrise
  Scenario("I can see the correct US active enrollment YuScreen",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_13, AUTH_USA_13, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.CriInsurance))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_13.data.firstName} ${CUSTOMER_USA_13.data.lastName}`))
          Then("I can see the correct product slots", then.USAProdSlotVisible(fixture.CriInsurance))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_13))
          Then("I can see the sponsored logos", then.sponsoredByVisible(false))
        })
      })
    })
    // might need to comment out the below due to above flaky reasons
    When("I scroll to see the wellbeing hub", when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.SurveyText, "down"), async () => {
      // Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
      Then("I can't see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, false))
    })
    When("I scoll to see the enrollment component", when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.createYumujiCTA, "up"), async () => {
      Then("I see the correct enrollment component", then.enrollmentComponentVisible(BPEEW_USA_13_CRI, "active"))
    })
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
  // @flaky - can't find box options on bitrise
  Scenario("I can see the correct US post enrollment YuScreen",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_14, AUTH_USA_14, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.VstdInsurance))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_14.data.firstName} ${CUSTOMER_USA_14.data.lastName}`))
          Then(`I should NOT see ${fixture.Guardian_VSTD.slotAbreviation} text`, then.textNotVisible(fixture.Guardian_VSTD.slotAbreviation))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_14))
          Then("I can see the sponsored logos", then.sponsoredByVisible(true))
        })
      })
    })
    // might need to comment out the below due to above flaky reasons
    When("I swipe to the bottom of the screen", when.swipeFromText(`${CUSTOMER_USA_14.data.firstName} ${CUSTOMER_USA_14.data.lastName}`, "up", "fast"), async () => {
      // Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
      Then("I can see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, true))
    })
    When(`I swipe down the page`, when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.SurveyLabel, "down"), async () => {
      Then(`I should NOT see the enrollment section`, then.idNotVisible(id.COUNTDOWN_COMPONENT))
    })
    When(`I tap explore insurance`, when.tapText(fixture.ExploreInsureanceBox.description), async () => {
      When("I wait", when.wait(2000), async () => {
          Then("I'm on the pcp page", then.onPCPPage())
          Then("I can see the info panel", then.infoPanelVisible(true))
          Then("I can see the vision insurance box", then.boxOptionVisible(fixture.ShortTermDisibilityInsurance, true))
          Then("I can NOT see the arrow button to go deeper into the product info", then.idNotVisible(id.ARROW_BUTTON))
      })
    })
      
  })
})
    
