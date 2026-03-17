import { Feature, Scenario, Given, When, Then } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as data from "../_data";
import * as ids from "@ids";

Feature("Quest map screenshots", async () => {
     Scenario("I can power through worlds and verify all levels are positioned correctly", scenario.start, async () => {
        Given("I login", given.loginAsUser(data.CUSTOMER_73, data.AUTH_73), async () => {
            When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
                for(let i=1; i<=1000; i+=7) {
                    When("I trigger the Quest Progress worker", when.triggerSetUserQuestProgress(data.CUSTOMER_73.data.customerId, i), async () => {
                        When("I quit and reopen the app", when.quitAndReopenApp, async () => {
                            When("I navigate to the Quests screen", when.navigateTo("quests"), async () => {
                                Then("Every time I should see the correct level", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(i), 1500))
                            })
                        })
                    })
                }
            })
        })
    })
})
