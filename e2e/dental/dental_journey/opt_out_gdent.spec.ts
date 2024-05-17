import { Feature, Scenario, Given } from "@yu-life/yulife-bdd-framework";
import * as commonFixture from "yuscreen/yuscreen_v4/_resources/fixture";
import * as commonHelper from "yuscreen/yuscreen_v4/_resources/helpers"
import * as seedData from "./_resources/fixture";
import * as scenario from "./_steps/scenario";
import * as helper from "./_steps/helpers";
import * as given from "./_steps/given";
import * as data from "../_data";
import moment from "moment";

Feature("GDent product when enrolment window is ended Keepsake product should auto assign", async () => {
    Scenario("I can see right product slot if opted out and enrol window is closed", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_108, data.AUTH_108), async () => {
            helper.ONBOARDING_YUSCREEN("GDent", "5");
            helper.YUSCREEN(data.CUSTOMER_108, "GDent", "5")
            commonHelper.PRODUCT_VIEW(commonFixture.GdentAvailableSoonProduct)
        })
    })
})
