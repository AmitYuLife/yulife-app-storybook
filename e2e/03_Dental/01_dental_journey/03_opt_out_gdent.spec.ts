import {
    Feature,
    Scenario,
    Given,
    ScenarioOnly,
  } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as data from "@data";
import * as helper from "./_steps/helpers";
import moment from "moment";
import * as seedData from "./_resources/fixture";
import * as commonHelper from "00_Smoke_4/01_yuscreen_v4/_resources/helpers"
import * as commonFixture from "00_Smoke_4/01_yuscreen_v4/_resources/fixture";



  
  Feature("GDent product when enrolment window is ended Keepsake product should auto assign", async () => {
    Scenario("I can see right product slot if opted out and enrol window is closed", scenario.start, async () => {
      Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_108, data.AUTH_108), async () => {
        helper.ONBOARDING_YUSCREEN("GDent", "5");
        helper.YUSCREEN(data.CUSTOMER_108, "GDent", "5")
        commonHelper.PRODUCT_VIEW(commonFixture.GdentAvailableSoonProduct)
      })
    })
    Scenario("I should get Keepsake product once enrol window closed and i opted out", scenario.start, async () => {
      Given("I trigger the the GDentWorker", given.deactivateGDentWorker(true, moment().subtract(1,"day").format("YYYY-MM-DD")), async() => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_108, data.AUTH_108), async () => {
          helper.ONBOARDING_YUSCREEN("KeepSake", "1");
          helper.YUSCREEN(data.CUSTOMER_108, "Keepsake", "1")
          helper.PRODUCT_CHECK(seedData.KeepSake)
        })
      })
    })
  })
