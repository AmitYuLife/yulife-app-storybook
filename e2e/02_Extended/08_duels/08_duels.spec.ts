import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_20, AUTH_20, CUSTOMER_19, AUTH_19, CUSTOMER_17, AUTH_17, CUSTOMER_16 } from "@data";
import { DUELS_BUTTON, DUELS_HUB, DUEL_OPTIONS_SCREEN, DUEL_RESPONSE, EMPTY_DUELS_HUB, LEADERBOARD_TOP_SCREEN, NAV_BAR, SEARCH_INPUT } from "@ids";
import moment = require("moment");

Feature("As an enabled user I am able to use the duels feature", async()=>{

    Scenario("As a user I am able to invite another user to a duel, and the opponent is able to accept the duel", scenario.start, async()=>{
    Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard",CUSTOMER_20, AUTH_20),async()=>{
            Then("I should see the duels icon", then.idVisible(DUELS_BUTTON))
            When("I tap duels icon", when.tapID(DUELS_BUTTON), async()=>{
                Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Skip", "Next"]))
            })
            When("I tap next", when.tapText("Next"), async()=>{
                Then("I should be on the second duels intro screen", then.multipleTextVisible(["Set the wager", "Skip", "Next"]))
            })
            When("I tap next", when.tapText("Next"), async () => {
                Then("I should be on the third duels intro screen", then.multipleTextVisible(["Out-step your opponent", "Let's go"]))
            })
            When("I tap Let's go", when.tapText("Let's go"), async()=>{          
                Then("I should be on the duels hub", then.onEmptyDuelsHub)
                Then("The duels hub should be in an empty state", then.idVisible(EMPTY_DUELS_HUB))
            })
            When("I tap challenge a colleague", when.tapText("Challenge a colleague"), async()=>{
                Then("I should be on the Search for a friend screen", then.textVisible("Search for a friend:"))
                Then("I should see Angela Martin", then.textVisible("Angela Martin"))
            })
            When("I tap a Duel >", when.tapText("Duel >"), async()=>{
                When("I tap a Duel >", when.tapText("Duel >"), async () => { // quick detox fix for bug - remove when bret fixes double tap bug
                Then("I should be on the start duel screen", then.multipleTextVisible(["It’s time to duel!", "Set the duel"]))
                })
            })
            When("I tap the 'Set the duel' CTA", when.tapText("Set the duel"), async()=>{
                Then("I should be on the yucoin wager screen", then.idVisible(DUEL_OPTIONS_SCREEN))
                Then("The default wager amount should be at 0 yucoin", then.textVisible("0 YuCoin (pride)"))
            })
            When("I tap the wager drop down", when.tapText("0 YuCoin (pride)"), async()=>{
                Then("I should see an native list modal with different yucoin amounts", then.wagerModalVisible)
            })
            When("I tap 25 yucoin", when.tapText("25 YuCoin"), async()=>{
                Then("I should be on the wager screen with my wager amount shown", then.multipleTextVisible(["How much YuCoin to wager?", "25 YuCoin"]))
            })
            When("I tap send duel request", when.tapText("Send duel request"), async()=>{
                Then("I should see a confirmation modal", then.textVisible("Confirm duel request"))
            })
            When("I tap confirm", when.tapText("Confirm"), async()=>{
                Then("I should be on the duels hub", then.idVisible(DUELS_HUB))
                Then("I should see the duel I just requested", then.multipleTextVisible(["vs. Angela Martin", "25 YuCoin", "Pending"]))
            })
            When("I restart and login as the invited user", when.restartAndLoginToTab("leaderboard", CUSTOMER_19, AUTH_19), async()=>{
                Then("I should see the duels button", then.idVisible(DUELS_BUTTON))
            })
            When("I tap the duels button", when.tapID(DUELS_BUTTON), async()=>{
                Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Skip", "Next"]))
            })
            When("I tap skip", when.tapText("Skip"), async()=>{
                Then("I should be on the duels hub", then.onDuelsHub)
                Then("I should see the duel I was just invited to", then.multipleTextVisible(["vs. Oscar Martinez", "25 YuCoin", "Accept?"]))
            })
            When("I tap accept", when.tapText("Accept?"), async()=>{
                Then("I should see the vs screen", then.textVisible("Oscar has invited you to duel!"))
            })
            When("I tap see the details", when.tapText("See the details"), async()=>{
                Then("I should see the duels details", then.idVisible(DUEL_RESPONSE("Oscar")))
            })
            When("I accept the duel", when.tapText("Accept the duel"), async()=>{
                Then("I should see the are you sure iOS modal", then.textVisible("Are you sure?"))
            })
            When("I tap confirm", when.tapText("Confirm"), async()=>{
                Then("I should see my upcoming duel", then.upcomingDuelVisible(CUSTOMER_20, 25, moment().add(1,"day")))
            })
        })
    })

    Scenario("As a user who has accepted a duel, I am able to compete in it", scenario.start, async()=>{
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", CUSTOMER_17, AUTH_17), async () => {
            Then("I should see the duels icon", then.idVisible(DUELS_BUTTON))
            When("I tap the duels button", when.tapID(DUELS_BUTTON), async () => {
                Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Skip", "Next"]))
            })
            When("I tap skip", when.tapText("Skip"), async () => {
                Then("I should be on the duels hub", then.idVisible(DUELS_HUB))
                Then("I should see my active duel", then.multipleTextVisible(["vs. Stanley Hudson", "10 YuCoin"]))
                Then("I should see the amount I'm wagering", then.textVisible("You’re wagering 10 YuCoin"))
            })
            When("I go back to the today screen", when.tapID(NAV_BAR("yucoin")), async()=>{
                When("I walk 200 steps", when.sendSteps(200), async()=>{
                    Then("I should see the updated step count", then.textVisible("200 steps"))
                })
            })
            When("I go back to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async()=>{
                    Then("I should see the number of steps I just walked", then.textVisible("You’ve walked 200 steps today"))
            })
        })
    })

    Scenario("I am able to view my won and lost duels", scenario.start, async()=>{
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", CUSTOMER_19, AUTH_19), async () => {
            Then("I should see the duels icon", then.idVisible(DUELS_BUTTON))
            When("I tap the duels button", when.tapID(DUELS_BUTTON), async () => {
                Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Skip", "Next"]))
            })
            When("I tap skip", when.tapText("Skip"), async () => {
                Then("I should be on the duels hub", then.idVisible(DUELS_HUB))
            })
            When("I tap Past Duels", when.tapText("Past Duels"), async()=>{
                Then("I should see my past duel with Stanely Hudson", then.pastDuelVisible(CUSTOMER_16, 10, moment().subtract(8, "days"), "lose"))
                Then("I should see my past duel with Oscar Martinez", then.pastDuelVisible(CUSTOMER_20, 10, moment().subtract(5, "days"), "win"))
            })
        })
    })

})