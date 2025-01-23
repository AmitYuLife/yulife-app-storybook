import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data"
import * as ids from "@ids"

Feature("As an enabled user I am able to use the duels feature", async () => {
    Scenario("As a user I am able to invite another user to a duel, and the opponent is able to accept the duel", scenario.start, async () => {
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard",data.CUSTOMER_20, data.AUTH_20), async () => {
            When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
                Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON))
            })
        })
        When("I tap duels icon", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
            Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
        })
        When("I tap next", when.tapID(ids.NEXT_BUTTON_DUEL_ONBOARDING, 2000),async () => {
            Then("I should be on the second duels intro screen", then.multipleTextVisible(["Set the wager", "Next"]))
        })
        When("I tap next", when.tapID(ids.NEXT_BUTTON_DUEL_ONBOARDING, 2000), async () => {
            Then("I should be on the third duels intro screen", then.multipleTextVisible(["Out-step your opponent", "Let's go"]))
        })
        When("I tap Let's go", when.tapID(ids.LETS_GO_BUTTON_DUEL_ONBOARDING, 2000), async () => {
            Then("I should be on the empty duels hub", then.onEmptyDuelsHub)
        })
        When("I tap challenge a colleague", when.tapID(ids.CHALLENGE_FRIEND_BUTTON, 2000), async () => {
            Then("I should see that my current YuCoin total is 220", then.textVisible("220"))
            Then("I should be on the Search for a friend screen", then.textVisible("Search for a friend:"))
            Then("I should see Angela Martin", then.textVisible("Angela Martin"))
        })
        When("I search for angela", when.searchForDuelOpponent("Angela"), async () => {
            Then("I should see Angela Martin", then.textVisible("Angela Martin"))
        })
        // @TODO solution for dynamic text - mocked data should be fine?
        When("I tap a Angela Martin", when.tapText("Angela Martin"), async () => {
            Then("I should be on the start duel screen", then.multipleTextVisible(["The matchup:", "Set the duel"]))
        })
        When("I tap the 'Set the duel' CTA", when.tapID(ids.SET_DUEL_BUTTON, 1500), async () => {
            Then("I should be on the yucoin wager screen", then.idVisible(ids.DUEL_OPTIONS_SCREEN))
            Then("I should see the select wager button", then.idVisible(ids.PICKER_AMOUNT_LABEL))
        })
        When("I tap Select a wager", when.tapID(ids.PICKER_AMOUNT_LABEL, 1500), async () => {
            Then("I should see an native list modal with different yucoin amounts", then.wagerModalVisible)
        })
        When("I tap 25 yucoin", when.tapID(ids.WAGER_OPTION(25), 1500), async () => {
            Then("I should be on the wager screen with my wager amount shown", then.multipleTextVisible(["Your wager", "25 YuCoin"]))
        })
        When("I tap send duel request", when.tapID(ids.SEND_DUEL_REQUEST_BUTTON, 1500), async () => {
            Then("I should see a confirmation modal", then.textVisible("Confirm invitation?"))
        })
        // @TODO solution for Alerts tapText - do not accept testID or translation key
        When("I tap confirm", when.tapText("Confirm"), async () => {
            Then("I should see the correct amount deducted from my YuCoin total from the top bar", then.textVisible("195"))
            Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB))
            Then("I should see the duel I just requested", then.idVisible(ids.DUELS_HUB_INVITATION("Angela", "Martin", 25, "invited"), 5000))
        })
        When("I restart and login as the invited user", when.restartToDuelsRequest(data.CUSTOMER_19, data.AUTH_19, true, 5000), async () => {
            When("I close and reopen the app", when.reloadOnly, async () => {
                When("I wait", when.wait(15000), async () => {
                    Then("I should see the vs screen", then.textVisible("Oscar has invited you to a 1-day duel for 25 YuCoin!", 5000))
                })
            })
        })
        When("I accept the duel", when.tapID(ids.CTA_ACCEPT, 1500), async () => {
            Then("I should see the are you sure iOS modal", then.textVisible("Are you sure?"))
        })
        // @TODO solution for Alerts tapText - do not accept testID or translation key
        When("I tap confirm", when.tapText("Confirm", 2000, true), async () => {
            When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
                Then("I should see the duels button", then.idVisible(ids.DUELS_BUTTON, 2000))
            })
        })
        When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
            Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
        })
        When("I tap complete the duels intro", when.completeOnboardingIntro, async () => {
            Then("I should be on the duels hub", then.onDuelsHub)
            Then("I should see my upcoming duel", then.idVisible(ids.DUEL_ENTRY("Oscar", "Martinez", 25, "accepted"), 5000))
        })
    })

    Scenario("As a user who has accepted a duel, I am able to compete in it", scenario.start, async () => {
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_17, data.AUTH_17), async () => {
            Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON))
        })
        When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
            Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
        })
        When("I tap complete the intro", when.completeOnboardingIntro, async () => {
            Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB))
            Then("I should see my active duel", then.idVisible(ids.DUEL_ENTRY("Stanley", "Hudson", 10, "accepted"), 3500))
        })
        When("I walk 200 steps", when.sendSteps(200), async () => {
            Then("I should see the number of steps I just walked", then.textVisible("200 steps today", 3000))
        })
        When("I go back", when.tapID(ids.BACK_BUTTON, 1500), async () => {
            When("I go the 'YuCoin' screen", when.tapID(ids.NAV_BAR("yucoin"), 1500), async () => {
                Then("I should see the updated today's step count", then.idVisible(ids.STEPS_COUNT(200), 2000))
            })
        })
    })

    Scenario("I am able to view my won and lost duels", scenario.start, async () => {
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_19, data.AUTH_19), async () => {
            Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON))
        })
        When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
            Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
        })
        When("I tap complete the intro", when.completeOnboardingIntro, async () => {
            Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB))
        })
        When("I tap Completed", when.tapID(ids.COMPLETED_TAB, 1500), async () => {
            Then("I should see my past duel with Stanely Hudson", then.idVisible(ids.DUEL_ENTRY("Stanley", "Hudson", 10, "finished")))
            Then("I should see I lost this duel", then.idVisible(ids.DUEL_ICON("Stanley", "Hudson", false)))
            Then("I should see the steps for this duel", then.idVisible(ids.DUEL_DESCRIPTION(500, 300)))
            Then("I should see my past duel with Oscar Martinez", then.idVisible(ids.DUEL_ENTRY("Oscar", "Martinez", 10, "finished")))
            Then("I should see I won this duel", then.idVisible(ids.DUEL_ICON("Oscar", "Martinez", true)))
            Then("I should see the steps for this duel", then.idVisible(ids.DUEL_DESCRIPTION(400, 600)))
        })
    })

    Scenario("I am able to view my past duels with deleted users", scenario.start, async () => {
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_84, data.AUTH_84), async () => {
            Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON))
        })
        When("I tap the duels button", when.tapID(ids.DUELS_BUTTON, 1500), async () => {
            Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
        })
        When("I tap complete the intro", when.completeOnboardingIntro, async () => {
            Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB))
        })
        When("I tap Completed", when.tapID(ids.COMPLETED_TAB, 1500), async () => {
            Then("I should see my past duel with a deleted user", then.idVisible(ids.DUEL_ENTRY("", "", 10, "finished")))
            Then("I should see I lost this duel", then.idVisible(ids.DUEL_ICON("", "", false)))
            Then("I should see the steps for this duel", then.idVisible(ids.DUEL_DESCRIPTION(500, 300)))
        })
    })

    Scenario("I can view and challenge people I have dueled before", scenario.start, async () => {
        Given("I login as a user with duels enabled and go to the duels hub", given.logInAndGoToTab("leaderboard", data.CUSTOMER_27, data.AUTH_27), async () => {
            When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
                Then("I should see the duels icon", then.idVisible(ids.DUELS_BUTTON))
            })
        })
        When("I tap duels icon", when.tapID(ids.DUELS_BUTTON, 1500), async() => {
            Then("I should be on the first duels intro screen", then.multipleTextVisible(["Challenge a friend!", "Next"]))
        })
        When("I tap complete the intro", when.completeOnboardingIntro, async () => {
            Then("I should be on the duels hub", then.idVisible(ids.DUELS_HUB))
        })
        When("I tap Challenge a friend", when.tapID(ids.CHALLENGE_FRIEND_BUTTON, 1500), async () => {
            Then("I should be on the search for a friend page", then.textVisible("Search for a friend:"))
        })
        When("I tap on Toby Flenderson", when.tapID(ids.DUEL_SEARCH_LIST_ITEM("Toby Flenderson"), 1500), async () => {
            Then("I should be on the matchup page", then.textVisible("The matchup:"))
            Then("I should see You", then.textVisible("You"))
            Then("I should see Toby Flenderson", then.textVisible("Toby Flenderson"))
        })
    })
})