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
  import * as fixture from "./_resources/fixture";
  import * as id from "@ids";
  
Feature("I am able to see sponsored by text/logos and box option types", async () => {
// @update added to YUSCREEN_USA
// @flaky - testing one on nightly - can't find box options on bitrise - locally failing with image cut off
  Scenario("I can see sponsored by text and logos in yuscreen if contribution_type none and can view the explore my insurance page",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_5, AUTH_USA_5, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.GapInEnrolVisOutEnrol))
    });
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_5.data.firstName} ${CUSTOMER_USA_5.data.lastName}`))
          Then("I can see the correct product slots", then.USAProdSlotVisible(fixture.GapInEnrolVisOutEnrol))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_5))
          Then("I can see the sponsored logos", then.sponsoredByVisible(true))
        })
      })
    })
    When("I swipe to the bottom of the screen", when.swipeFromText(`${CUSTOMER_USA_5.data.firstName} ${CUSTOMER_USA_5.data.lastName}`, "up", "fast"), async () => {
      Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
      Then("I can see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, true))
    })
    When(`I tap explore insurance`, when.tapText(fixture.ExploreInsureanceBox.description), async () => {
      When("I wait", when.wait(2000), async () => {
          // Then("I'm on the pcp page", then.onPCPPage()) @bug [vbus-179]
          Then("I can see the info panel", then.infoPanelVisible(true))
          Then("I can see the vision insurance box", then.boxOptionVisible(fixture.VisionInsuranceBox, true))
          Then("I can NOT see the arrow button to go deeper into the product info", then.idNotVisible(id.ARROW_BUTTON))
      })
    })
      
  });

  // @flaky - can't find box options on bitrise
  Scenario("I should see sponsored by text and logos if contribution_type is full ",scenario.start,async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_6, AUTH_USA_6, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.GapInsurance))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_6.data.firstName} ${CUSTOMER_USA_6.data.lastName}`))
          Then("I can see the correct product slots", then.USAProdSlotVisible(fixture.GapInsurance))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_6))
          Then("I can see the sponsored logos", then.sponsoredByVisible(true))
        })
      })
    })
    // might need to comment out the below due to above flaky reasons
    When("I swipe to the bottom of the screen", when.swipeFromText(`${CUSTOMER_USA_6.data.firstName} ${CUSTOMER_USA_6.data.lastName}`, "up", "fast"), async () => {
      Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
      Then("I can't see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, false))
    })
  });
  
    // @flaky - can't find box options on bitrise
  Scenario("I can see sponsored by text and logos in yuscreen if contribution_type partial",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_7, AUTH_USA_7, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.VisInsurance))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_7.data.firstName} ${CUSTOMER_USA_7.data.lastName}`))
          Then("I can see the correct product slots", then.USAProdSlotVisible(fixture.VisInsurance))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_7))
          Then("I can see the sponsored logos", then.sponsoredByVisible(true))
        })
      })
    })
    // might need to comment out the below due to above flaky reasons
    When("I swipe to the bottom of the screen", when.swipeFromText(`${CUSTOMER_USA_7.data.firstName} ${CUSTOMER_USA_7.data.lastName}`, "up", "fast"), async () => {
      Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
      Then("I can see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, true))
    })

  });
    
  // @flaky - can't find box options on bitrise
  Scenario("I should NOT see sponsored by text and logos in yuscreen if contribution_type partial but no logos are selected for that business",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_8, AUTH_USA_8, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.GapInsurance))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_8.data.firstName} ${CUSTOMER_USA_8.data.lastName}`))
          Then("I can see the correct product slots", then.USAProdSlotVisible(fixture.GapInsurance))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_8))
          Then("I can see the sponsored logos", then.sponsoredByVisible(false))
        })
      })
    })
    // might need to comment out the below due to above flaky reasons
    When("I swipe to the bottom of the screen", when.swipeFromText(`${CUSTOMER_USA_8.data.firstName} ${CUSTOMER_USA_8.data.lastName}`, "up", "fast"), async () => {
      Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
      Then("I can see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, true))
    })

  });

  // @flaky - can't find box options on bitrise
  Scenario("If no products are assigned to the user, then the component is hidden. “Explore your insurance”",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_9, AUTH_USA_9, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.NoProduct))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_9.data.firstName} ${CUSTOMER_USA_9.data.lastName}`))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_9))
          Then("I can see the sponsored logos", then.sponsoredByVisible(true))
        })
      })
    })
    // might need to comment out the below due to above flaky reasons
    When("I swipe to the bottom of the screen", when.swipeFromText(`${CUSTOMER_USA_9.data.firstName} ${CUSTOMER_USA_9.data.lastName}`, "up", "fast"), async () => {
      Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
      Then("I can't see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, false))
    })

  });

  // @flaky - can't find box options on bitrise
  Scenario("If user in enrol window should see right countdown and slots with products can be enrol",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_10, AUTH_USA_10, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.GapVisInsuranceInEnrolment))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_10.data.firstName} ${CUSTOMER_USA_10.data.lastName}`))
          Then("I can see the correct product slots", then.USAProdSlotVisible(fixture.GapVisInsuranceInEnrolment))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_10))
          Then("I can see the sponsored logos", then.sponsoredByVisible(false))
        })
      })
    })
    // might need to comment out the below due to above flaky reasons
    When("I scroll to see the wellbeing hub", when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.SurveyText, "down"), async () => {
      Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
      Then("I can't see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, false))
    })
    When("I click on the wellbeing hub", when.tapText(fixture.MyWellbeingHubBoxUS.description), async () => {
      Then("I see the wellbeing hub", then.wellbeingHubScreenVisible(CUSTOMER_USA_10))
    })
    When("I tap to go back to Yu Screen", when.tapID(id.BACK_BUTTON), async () => {
      When("I scoll to see the enrollment component", when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.createYumujiCTA, "up"), async () => {
        Then("I see the correct enrollment component", then.enrollmentComponentVisible(BPEEW_USA_10_VIS, "active"))
      })
    })

  });
  
  // @flaky - can't find box options on bitrise
  Scenario("If user is assigned to two products, one full contribution and one not, they can only see the not option in the PCP list",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_11, AUTH_USA_11, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.AccCanInsuranceInEnrolment))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_11.data.firstName} ${CUSTOMER_USA_11.data.lastName}`))
          Then("I can see the correct product slots", then.USAProdSlotVisible(fixture.AccCanInsuranceInEnrolment))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_11))
          Then("I can see the sponsored logos", then.sponsoredByVisible(true))
        })
      })
    })
    // might need to comment out the below due to above flaky reasons
    When("I swipe to the bottom of the screen", when.swipeFromText(`${CUSTOMER_USA_11.data.firstName} ${CUSTOMER_USA_11.data.lastName}`, "up", "fast"), async () => {
      Then("I can see the wellbeing hub box", then.boxOptionVisible(fixture.MyWellbeingHubBoxUS, true))
      Then("I can see the explore insurance box", then.boxOptionVisible(fixture.ExploreInsureanceBox, true))
    })
    When(`I tap explore insurance`, when.tapText(fixture.ExploreInsureanceBox.description), async () => {
      When("I wait", when.wait(2000), async () => {
          // Then("I'm on the pcp page", then.onPCPPage()) @bug [vbus-179] [GS-863]
          Then("I can see the info panel", then.infoPanelVisible(true))
          Then("I can see the vision insurance box", then.boxOptionVisible(fixture.CancerInsuranceBox, true))
          Then("I can NOT see the arrow button to go deeper into the product info", then.idNotVisible(id.ARROW_BUTTON))
      })
    })
    When("I tap to go back to Yu Screen", when.tapID(id.BACK_BUTTON), async () => {
      Then("I should not see Vision Insurance ", then.idNotVisible(id.TEXT_TEMPLATE("Vision Insurance")))
    })
    When(`I scroll down to ${fixture.ExploreInsureanceBox.description}`, when.scrollUntilTextVisible(id.YUSCREEN_SCROLL_VIEW, fixture.ExploreInsureanceBox.description, "down"), async () => {
      When(`I tap ${fixture.ExploreInsureanceBox.description}`, when.tapText(fixture.ExploreInsureanceBox.description), async () => {
          Then(`I should NOT see ${fixture.AccidentInsuranceBox.imageUrl} text`, then.idNotVisible(id.RIGHT_SIDE_IMAGE_BOX_OPTION(fixture.AccidentInsuranceBox.imageUrl)))
          Then(`I should NOT see ${fixture.AccidentInsuranceBox.title} text`, then.idNotVisible(id.BOX_OPTION_TITLE(fixture.AccidentInsuranceBox.title)))
          Then(`I should NOT see ${fixture.AccidentInsuranceBox.description} text`, then.idNotVisible(id.BOX_OPTION_DESCRIPTION(fixture.AccidentInsuranceBox.description)))
      })
    })
  });

  Scenario("I should see sponsored by text and logos but not the product if contribution_type is null",scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_15, AUTH_USA_15, true, "United States"),async () => {
      Then("I see the correct onboarding screen info", then.correctUSAOnboardingScreenVisible(fixture.BlankProductEnrollmentScreen))
    })
    When(`When I swipe from ${fixture.protectionPowered}`, when.swipeFromText(fixture.protectionPowered, "up", "slow"), async () => {
      Then(`I should see ${fixture.buttonText} text`, then.textVisible(fixture.buttonText))
    })
    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
      When("I swipe down the screen", when.swipeFromText(fixture.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
          Then(`I should see the users name`, then.textVisible(`${CUSTOMER_USA_15.data.firstName} ${CUSTOMER_USA_15.data.lastName}`))
          Then(`I should NOT see the title for CRI insurance`, then.textNotVisible(fixture.CriInsurance.SlotProductTitle))
          Then("I am on the correct US YuScreen", then.onYuScreenUSA(CUSTOMER_USA_15))
          Then("I can see the sponsored logos", then.sponsoredByVisible(true))
        })
      })
    })

  });
  
})