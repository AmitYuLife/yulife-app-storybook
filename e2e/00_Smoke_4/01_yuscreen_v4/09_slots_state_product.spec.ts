import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as data from "@data"
import * as helper from "./_resources/helpers"
import { GdentAvailableFrom, GdentAvailableSoon, GdentEnrolNow, GdentInForce, GdentProductHolding, GdentStartsSoon } from "./_resources/fixture";



Feature("Slots updates Enrolment - Opt In Opt out", async () => {
    Scenario("Future start date No enrolment window user with category opt in", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_107, data.AUTH_107), async () => {
            helper.ONBOARD_YU_SCREEN(GdentAvailableSoon)
            helper.ON_YU_SCREEN(data.CUSTOMER_107,GdentAvailableSoon);
        })
    })
    Scenario("1-Start date not hit and enrolment window not open yet", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_95, data.AUTH_95), async () => {
            helper.ONBOARD_YU_SCREEN(GdentAvailableFrom);
            helper.ON_YU_SCREEN(data.CUSTOMER_95, GdentAvailableFrom);
        })
    })
    Scenario("2-Start date not hit and enrolment window open", scenario.start, async () => {
        Given("I login as a user",  given.logInAndGoToTab("yu", data.CUSTOMER_97, data.AUTH_97), async () => {
            helper.ONBOARD_YU_SCREEN(GdentEnrolNow)
            helper.ON_YU_SCREEN(data.CUSTOMER_97, GdentEnrolNow);
        })
    })
    Scenario("3-Start date not hit and enrolment window open. Choice has been made (opting in) i still can edit", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_98, data.AUTH_98), async () => {
            helper.ONBOARD_YU_SCREEN(GdentProductHolding)
            helper.ON_YU_SCREEN(data.CUSTOMER_98, GdentProductHolding);
        })
    })
    Scenario("4-Start date not hit and enrolment window has closed, choice was not made to opt-in - Hide slot", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_99, data.AUTH_99), async () => {
            helper.ONBOARD_YU_SCREEN_HIDDEN_SLOT(GdentStartsSoon)
        })
    })
    Scenario("5 Start date not hit and enrolment window has closed, choice was made to opt-in", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_100, data.AUTH_100), async () => {
            helper.ONBOARD_YU_SCREEN(GdentStartsSoon)
            helper.ON_YU_SCREEN(data.CUSTOMER_100, GdentStartsSoon);

        })
    })
    Scenario("6-Start date hit product in force", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_96, data.AUTH_96), async () => {
            helper.ONBOARD_YU_SCREEN(GdentInForce)
            helper.ON_YU_SCREEN(data.CUSTOMER_96, GdentInForce);
        })
    })

//"Slots updates Enrolment - Opt Out"
    Scenario("Future start date No enrolment window user with category opt in", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_93, data.AUTH_93), async () => {
            helper.ONBOARD_YU_SCREEN(GdentAvailableSoon)
            helper.ON_YU_SCREEN(data.CUSTOMER_93,GdentAvailableSoon);
        })
    })
    Scenario("1-Start date not hit and enrolment window not open yet", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_101, data.AUTH_101), async () => {
            helper.ONBOARD_YU_SCREEN(GdentAvailableFrom);
            helper.ON_YU_SCREEN(data.CUSTOMER_101, GdentAvailableFrom);
        })
    })
    Scenario("2-Start date not hit and enrolment window open", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_102, data.AUTH_102), async () => {
            helper.ONBOARD_YU_SCREEN(GdentEnrolNow)
            helper.ON_YU_SCREEN(data.CUSTOMER_102, GdentEnrolNow);
        })
    })
    Scenario("3-Start date not hit and enrolment window open. Choice has been made (opting in) i still can edit", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_103, data.AUTH_103), async () => {
            helper.ONBOARD_YU_SCREEN(GdentProductHolding)
            helper.ON_YU_SCREEN(data.CUSTOMER_103, GdentProductHolding);
        })
    })
    Scenario("4-Start date not hit and enrolment window has closed, choice was made to opt out - Hide slot", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_104, data.AUTH_104), async () => {
            helper.ONBOARD_YU_SCREEN_HIDDEN_SLOT(GdentStartsSoon)
        })
    })
    Scenario("5 Start date not hit and enrolment window has closed, choice was made to opt-in", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_105, data.AUTH_105), async () => {
            helper.ONBOARD_YU_SCREEN(GdentStartsSoon)
            helper.ON_YU_SCREEN(data.CUSTOMER_105, GdentStartsSoon);

        })
    })
    Scenario("6-Start date hit product in force", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_106, data.AUTH_106), async () => {
            helper.ONBOARD_YU_SCREEN(GdentInForce)
            helper.ON_YU_SCREEN(data.CUSTOMER_106, GdentInForce);
        })
    })
})