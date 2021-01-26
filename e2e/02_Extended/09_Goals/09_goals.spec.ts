import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_20, AUTH_20, CUSTOMER_19, AUTH_19, CUSTOMER_17, AUTH_17, CUSTOMER_16 } from "@data";
import { COMMUNITY_GOAL_DROPDOWN, GOALS_BUTTON, NICKNAME_INPUT } from "@ids";

Feature("As an enabled user I am able to use the goals feature", async () => {

    Scenario("As a user I am able to view my community goals", scenario.start, async () => {
        Given("I login as a user with goals enabled", given.logInAndGoToTab("leaderboard", CUSTOMER_20, AUTH_20), async () => {
            Then("I should see the goals icon", then.idVisible(GOALS_BUTTON))
            When("I tap the goals button", when.tapID(GOALS_BUTTON), async()=>{
                Then("I should see the first intro screen", then.textVisible("Work together to aim higher"))
            })
            When("I tap next", when.tapText("Next"), async()=>{
                Then("I should see the second intro screen", then.textVisible("Earn big YuCoin bounties!"))
            })
            When("I tap next", when.tapText("Next"), async()=>{
                Then("I should see the choose a nickname screen", then.textVisible("Choose a nickname"))
                Then("I should see the nickname input", then.idVisible(NICKNAME_INPUT))
                When("I type a nickname", when.typeViaID(NICKNAME_INPUT, "Oscar"), async()=>{
                    Then("I should see my nickname", then.textVisible("Oscar"))
                })
            })
            When("I tap to dismiss the keyboard", when.tapText("Choose a nickname"), async()=>{
                When("I tap let's go", when.tapText("Let's go"), async()=>{
                    Then("I should be the community goals screen", then.textVisible("Community Goals"))
                    Then("I should see the community goal I am part of", then.multipleTextVisible(["Reach 250,000 steps", "these boots are made for walking", "2 / 100 have joined"]))
                })
            })
            When("I tap the + icon", when.tapID(COMMUNITY_GOAL_DROPDOWN), async()=>{
                Then("I should see people who have joined this goal", then.textVisible("Oscar"))
                Then("I should see the number of steps walked", then.multipleTextVisible(["2,571", "2,134", "437"]))
            })
        })
    })

    Scenario("As a user I can join a community goal", scenario.start, async () => {
        Given("I login as a user with goals enabled", given.logInAndGoToTab("leaderboard", CUSTOMER_17, AUTH_17), async () => {
            Then("I should see the goals icon", then.idVisible(GOALS_BUTTON))
            When("I tap the goals button", when.tapID(GOALS_BUTTON), async () => {
                Then("I should see the first intro screen", then.textVisible("Work together to aim higher"))
            })
            When("I complete the intro", when.completeOnboardingIntro, async () => {
                Then("I should be the community goals screen", then.textVisible("Community Goals"))
                Then("I should see the Join the challenge button", then.textVisible("Join the challenge!"))
                Then("I should see the number of people currently doing this challenge", then.textVisible("2 / 100 have joined"))
            })
            When("I tap the + icon", when.tapID(COMMUNITY_GOAL_DROPDOWN), async () => {
                Then("I should see people who have joined this goal", then.multipleTextVisible(["Oscar", "Angela"]))
                Then("I should see the number of steps walked", then.multipleTextVisible(["2,571", "2,134", "437"]))
            })
            When("I tap the join challenge button", when.tapText("Join the challenge!"), async () => {
                Then("I should see the Ready to join? modal", then.textVisible("Ready to join?"))
            })
                When("I tap Confirm", when.tapText("Confirm"), async()=>{
                Then("I should not see the join the challenge button", then.textNotVisible("Join the challenge!"))
                Then("I should see the upated number of people doing this challenge", then.textVisible("3 / 100 have joined"))
                Then("I should see the number of steps walked", then.multipleTextVisible(["2,571", "2,134", "437", "0"]))
            })
        })
    })


})
