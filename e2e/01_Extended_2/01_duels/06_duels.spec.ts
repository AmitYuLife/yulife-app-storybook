import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_20, AUTH_20, CUSTOMER_19, AUTH_19, CUSTOMER_17, AUTH_17, CUSTOMER_16, CUSTOMER_26, AUTH_26, CUSTOMER_27, AUTH_27 } from "@data";
import { DUELS_BUTTON, DUELS_HUB, DUELS_HUB_INVITATION, DUEL_OPTIONS_SCREEN, DUEL_RESPONSE, NAV_BAR, CHALLENGE_FRIEND_BUTTON, DUEL_ENTRY, DUEL_ICON, DUEL_DESCRIPTION, DUEL_AVATAR, STEPS_COUNT} from "@ids";


Feature("As an enabled user I am able to use the duels feature", async()=>{
    Scenario("As a user I am able to invite another user to a duel, and the opponent is able to accept the duel", scenario.start, async()=>{
    Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard",CUSTOMER_20, AUTH_20),async()=>{
            Then("I should see the duels icon", then.idVisible(DUELS_BUTTON))
            When("I tap duels icon", when.tapID(DUELS_BUTTON), async()=>{
                Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
            })
            When("I tap next", when.tapText("Next"), async()=>{
                Then("I should be on the second duels intro screen", then.multipleTextVisible(["Set the wager", "Next"]))
            })
            When("I tap next", when.tapText("Next"), async () => {
                Then("I should be on the third duels intro screen", then.multipleTextVisible(["Out-step your opponent", "Let's go"]))
            })
            When("I tap Let's go", when.tapText("Let's go"), async()=>{          
                Then("I should be on the empty duels hub", then.onEmptyDuelsHub)
            })
            When("I tap challenge a colleague", when.tapID(CHALLENGE_FRIEND_BUTTON), async()=>{
                Then("I should be on the Search for a friend screen", then.textVisible("Search for a friend:"))
                Then("I should see Angela Martin", then.textVisible("Angela Martin"))
            })
            When("I tap a Angela Martin", when.tapText("Angela Martin"), async()=>{
                Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel"]))
            })
            When("I tap the 'Set the duel' CTA", when.tapText("Set the duel"), async()=>{
                Then("I should be on the yucoin wager screen", then.idVisible(DUEL_OPTIONS_SCREEN))
                Then("I should see the select wager button", then.textVisible("Select a wager"))
            })
            When("I tap Select a wager", when.tapText("Select a wager"), async()=>{
                Then("I should see an native list modal with different yucoin amounts", then.wagerModalVisible)
            })
            When("I tap 25 yucoin", when.tapText("25 YuCoin"), async()=>{
                Then("I should be on the wager screen with my wager amount shown", then.multipleTextVisible(["Your wager", "25 YuCoin"]))
            })
            When("I tap send duel request", when.tapText("Send duel request"), async()=>{
                Then("I should see a confirmation modal", then.textVisible("Confirm invitation?"))
            })
            When("I tap confirm", when.tapText("Confirm"), async()=>{
                Then("I should be on the duels hub", then.idVisible(DUELS_HUB))
            })
            When("I reload the app (caching not showing duels invite on detox)", when.reloadAppToTab("leaderboard"), async()=>{
                When("I go to the duels hub", when.tapID(DUELS_BUTTON), async()=>{
                    Then("I should see the duel I just requested", then.idVisible(DUELS_HUB_INVITATION("Angela", "Martin", 25, "invited"), 5000))
                })
            })
            When("I restart and login as the invited user", when.restartToDuelsRequest(CUSTOMER_19, AUTH_19), async()=>{
                When("I close and reopen the app", when.reloadOnly, async()=>{  
                    Then("I should see the vs screen", then.textVisible("Oscar has invited you to a 1-day duel for 25 YuCoin!"))
                })
            })
            When("I accept the duel", when.tapText("Accept"), async()=>{
                Then("I should see the are you sure iOS modal", then.textVisible("Are you sure?"))
            })
            When("I tap confirm", when.tapText("Confirm"), async()=>{
                When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () =>{
                    Then("I should see the duels button", then.idVisible(DUELS_BUTTON))
                })
            })
            When("I tap the duels button", when.tapID(DUELS_BUTTON), async()=>{
                Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
                When("I tap complete the duels intro", when.completeOnboardingIntro, async () => {
                    Then("I should be on the duels hub", then.onDuelsHub)
                    Then("I should see my upcoming duel", then.idVisible(DUEL_ENTRY("Oscar", "Martinez", 25, "accepted"), 1500))
                })
            })
        })
    })
    
    Scenario("As a user who has accepted a duel, I am able to compete in it", scenario.start, async()=>{
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", CUSTOMER_17, AUTH_17), async () => {
            Then("I should see the duels icon", then.idVisible(DUELS_BUTTON))
            When("I tap the duels button", when.tapID(DUELS_BUTTON), async () => {
                Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
            })
            When("I tap complete the intro", when.completeOnboardingIntro, async () => {
                Then("I should be on the duels hub", then.idVisible(DUELS_HUB))
                Then("I should see my active duel", then.idVisible(DUEL_ENTRY("Stanley", "Hudson", 10, "accepted")))
            })
            When("I go back to the today screen", when.tapID(NAV_BAR("yucoin")), async()=>{
                When("I walk 200 steps", when.sendSteps(200), async()=>{
                    Then("I should see the updated step count", then.idVisible(STEPS_COUNT(200)))
                })
            })
            When("I go back to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async()=>{
                    Then("I should see the number of steps I just walked", then.textVisible("200 steps today"))
            })
        })
    })
    
    Scenario("I am able to view my won and lost duels", scenario.start, async()=>{
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", CUSTOMER_19, AUTH_19), async () => {
            Then("I should see the duels icon", then.idVisible(DUELS_BUTTON))
            When("I tap the duels button", when.tapID(DUELS_BUTTON), async () => {
                Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
            })
            When("I tap complete the intro", when.completeOnboardingIntro, async () => {
                Then("I should be on the duels hub", then.idVisible(DUELS_HUB))
            })
            When("I tap Completed", when.tapText("Completed"), async()=>{
                Then("I should see my past duel with Stanely Hudson", then.idVisible(DUEL_ENTRY("Stanley", "Hudson", 10, "finished")))
                Then("I should see I lost this duel", then.idVisible(DUEL_ICON("Stanley", "Hudson", false)))
                Then("I should see the steps for this duel", then.idVisible(DUEL_DESCRIPTION(500, 300)))
                Then("I should see my past duel with Oscar Martinez", then.idVisible(DUEL_ENTRY("Oscar", "Martinez", 10, "finished")))
                Then("I should see I won this duel", then.idVisible(DUEL_ICON("Oscar", "Martinez", true)))
                Then("I should see the steps for this duel", then.idVisible(DUEL_DESCRIPTION(400, 600)))
            })
        })
    })

    Scenario("I can view and challenge people I have dueled before", scenario.start, async () => {
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", CUSTOMER_27, AUTH_27), async () => {
            Then("I should see the duels icon", then.idVisible(DUELS_BUTTON))
            When("I tap duels icon", when.tapID(DUELS_BUTTON), async() => {
                Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
            })
            When("I tap complete the intro", when.completeOnboardingIntro, async () => {
                Then("I should be on the duels hub", then.idVisible(DUELS_HUB))
            })
            When("I tap Challenge a friend", when.tapID(CHALLENGE_FRIEND_BUTTON), async () => {
                Then("I should be on the search for a friend page", then.textVisible("Search for a friend:"))
            })
            When("I tap on Toby Flenderson", when.tapID(DUEL_AVATAR("Toby Flenderson")), async () => {
                Then("I should be on the matchup page", then.textVisible("The matchup:"))
                Then("I should see You", then.textVisible("You"))
                Then("I should see Toby Flenderson", then.textVisible("Toby Flenderson"))
            })
        })
    })
    
})