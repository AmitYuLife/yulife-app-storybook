import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";

import * as given from "./_steps/given";
import * as scenario from "./_steps/scenario";
import { AUTH_SA_1, AUTH_SA_2 } from "../_data/mongo/auths";
import { CUSTOMER_SA_1, CUSTOMER_SA_2 } from "../_data";
import * as helper from "./_resources/helpers";
import * as fixture from "./_resources/fixture";


Feature("As a user I can get past the login screen and see all SA products", async () => {
  Scenario("I can login and see MeGL/GrFun/GIP/TmpGIP/LSDC product slot and details", scenario.start, async () => {
    Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_SA_1, AUTH_SA_1, true, "South Africa"),async () => {
          helper.ONBOARDING_YUSCREEN_SA("3 products MeGL/GrFun/GIP", "10");
          helper.YUSCREEN_SA(CUSTOMER_SA_1, "MeGL/GrFun/GIP/TmpGIP/LSDC", "10");
          helper.PRODUCT_CHECK(fixture.MeGL);
          helper.KEY_INFO(fixture.MeGLKeyInfo);
          helper.COVER_AMOUNTS_INFO(fixture.MeGLCoverAmounts)
          helper.BENEFECIARIES_INFO(fixture.Beneficiaries)
          helper.USEFUL_LINKS_INFO(fixture.UsefulLinks)
          helper.ADDITIONAL_INFO(fixture.ProductAdditionalInfo)
          helper.NAVIGATE_BUTTON(true,fixture.IncreaseCover)
          helper.NAVIGATE_BUTTON(false,fixture.IncreaseCover)
          helper.NAVIGATE_BUTTON(true,fixture.EditBeneficiariesInfo)
          helper.NAVIGATE_BUTTON(false,fixture.EditBeneficiariesInfo)
          helper.NAVIGATE_BUTTON(true,fixture.MakeClaimInfo)
          helper.NAVIGATE_BUTTON(false,fixture.MakeClaimInfo)
          helper.CLOSE_PRODUCT_WINDOW()
          helper.PRODUCT_CHECK(fixture.GrFun);
          helper.KEY_INFO(fixture.GrFunKeyInfo);
          helper.COVER_AMOUNTS_INFO(fixture.GrFunCoverAmounts)
          helper.BENEFECIARIES_INFO(fixture.Beneficiaries)
          helper.USEFUL_LINKS_INFO(fixture.UsefulLinks)
          helper.ADDITIONAL_INFO(fixture.ProductAdditionalInfo)
          helper.NAVIGATE_BUTTON(true,fixture.EditBeneficiariesInfo)
          helper.NAVIGATE_BUTTON(false,fixture.EditBeneficiariesInfo)
          helper.NAVIGATE_BUTTON(true,fixture.MakeClaimInfo)
          helper.NAVIGATE_BUTTON(false,fixture.MakeClaimInfo)
          helper.CLOSE_PRODUCT_WINDOW()
          helper.PRODUCT_CHECK(fixture.GIP);
          helper.KEY_INFO(fixture.GIPKeyInfo);
          helper.COVER_AMOUNTS_INFO(fixture.GIPCoverAmounts, fixture.usefulLinksText)
          helper.USEFUL_LINKS_INFO(fixture.UsefulLinksNoBeneficiaries)
          helper.ADDITIONAL_INFO(fixture.ProductAdditionalInfo)
          helper.NAVIGATE_BUTTON(true,fixture.IncreaseCoverToGIP)
          helper.NAVIGATE_BUTTON(false,fixture.IncreaseCoverToGIP)
          helper.NAVIGATE_BUTTON(true,fixture.MakeClaimInfo)
          helper.NAVIGATE_BUTTON(false,fixture.MakeClaimInfo)
          helper.CLOSE_PRODUCT_WINDOW()
          helper.PRODUCT_CHECK_LONG_NAME(fixture.TmpGIP);
          helper.KEY_INFO(fixture.TmpGIPKeyInfo);
          helper.COVER_AMOUNTS_INFO(fixture.TmpGIPCoverAmounts, fixture.usefulLinksText)
          helper.USEFUL_LINKS_INFO(fixture.UsefulLinksNoBeneficiaries)
          helper.ADDITIONAL_INFO(fixture.ProductAdditionalInfo)
          helper.NAVIGATE_BUTTON(true,fixture.IncreaseCoverToTempGIP)
          helper.NAVIGATE_BUTTON(false,fixture.IncreaseCoverToTempGIP)
          helper.NAVIGATE_BUTTON(true,fixture.MakeClaimInfo)
          helper.NAVIGATE_BUTTON(false,fixture.MakeClaimInfo)
          helper.CLOSE_PRODUCT_WINDOW()
          helper.PRODUCT_CHECK(fixture.LumpSum);
          helper.KEY_INFO(fixture.LMPSKeyInfo);
          helper.COVER_AMOUNTS_INFO(fixture.LMPSCoverAmounts, fixture.usefulLinksText)
          helper.USEFUL_LINKS_INFO(fixture.UsefulLinksNoBeneficiaries)
          helper.ADDITIONAL_INFO(fixture.ProductAdditionalInfo)
          helper.NAVIGATE_BUTTON(true,fixture.IncreaseCoverToTempLMSP)
          helper.NAVIGATE_BUTTON(false,fixture.IncreaseCoverToTempLMSP)
          helper.NAVIGATE_BUTTON(true,fixture.MakeClaimInfo)
          helper.NAVIGATE_BUTTON(false,fixture.MakeClaimInfo)
          helper.CLOSE_PRODUCT_WINDOW()
        }
      );
    });
    Scenario("I can login and see MeGL/SpGL/GrFun with dependents, product slot and details", scenario.start, async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_SA_2, AUTH_SA_2, true, "South Africa"),async () => {
          helper.ONBOARDING_YUSCREEN_SA("3 products MeGL/SpGL/GrFun", "1");
          helper.YUSCREEN_SA(CUSTOMER_SA_2, "MeGL/SpGL/GrFun", "1");
          helper.PRODUCT_CHECK(fixture.MeGL_2);
          helper.KEY_INFO(fixture.MeGLKeyInfo);
          helper.COVER_AMOUNTS_INFO(fixture.MeGL_2_CoverAmounts)
          helper.BENEFECIARIES_INFO(fixture.Beneficiaries_MeGL_2)
          helper.USEFUL_LINKS_INFO(fixture.UsefulLinks)
          helper.ADDITIONAL_INFO(fixture.ProductAdditionalInfo)
          helper.CLOSE_PRODUCT_WINDOW()
          helper.PRODUCT_CHECK(fixture.SpGL_1);
          helper.KEY_INFO(fixture.SpGLKeyInfo);
          helper.COVER_AMOUNTS_INFO(fixture.SpGL_2_CoverAmounts)
          helper.BENEFECIARIES_INFO(fixture.Beneficiaries_SpGL_2)
          helper.USEFUL_LINKS_INFO(fixture.UsefulLinks)
          helper.ADDITIONAL_INFO(fixture.ProductAdditionalInfo)
          helper.CLOSE_PRODUCT_WINDOW()
          helper.PRODUCT_CHECK(fixture.GrFun_2);
          helper.KEY_INFO(fixture.GrFunKeyInfo_2);
          helper.COVER_AMOUNTS_INFO(fixture.GrFunCoverAmounts)
          helper.BENEFECIARIES_INFO(fixture.Beneficiaries_GrFun_2)
          helper.USEFUL_LINKS_INFO(fixture.UsefulLinks)
          helper.ADDITIONAL_INFO(fixture.ProductAdditionalInfo)
          helper.CLOSE_PRODUCT_WINDOW() 
        })
      })
  });


