import {
    Feature,
    Scenario,
    Given,
    FeatureOnly,
    ScenarioOnly,
  } from "@yu-life/yulife-bdd-framework";
  import * as scenario from "./_steps/scenario";
  import * as given from "./_steps/given";
  import { AUTH_USA_5, AUTH_USA_6 } from "../_data/mongo/auths";
  import { CUSTOMER_USA_5, CUSTOMER_USA_6 } from "../_data";
  import * as helper from "./_steps/helpers";
  
  Feature("I am able to see sponsored by text and logos ", async () => {
  Scenario("I can see sponsored by text and logos in yuscreen if contribution_type null or partial  ",scenario.start, async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_5, AUTH_USA_5, true, "United States"),async () => {
          helper.ONBOARDING_YUSCREEN_USA("GAP/VIS", "1");
          helper.YUSCREEN_USA(CUSTOMER_USA_5, "GAP/VIS", "1");
        }
      );
    }
  );
  Scenario("I should NOT see sponsored by text and logos if contribution_type is full ",scenario.start,async () => {
      Given("I login as a user",given.logInAndGoToTab("yu", CUSTOMER_USA_6, AUTH_USA_6, true, "United States"),async () => {
          helper.ONBOARDING_YUSCREEN("GAP", "1");
          helper.YUSCREEN_USA(CUSTOMER_USA_6, "GAP", "1");
        }
      );
    }
  );
})