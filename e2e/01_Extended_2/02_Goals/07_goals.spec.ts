import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as helper from "./_steps/helpers"
import { CUSTOMER_20, AUTH_20, CUSTOMER_19, AUTH_19, CUSTOMER_17, AUTH_17, CUSTOMER_16, CUSTOMER_34, AUTH_34 } from "@data";
import { COMMUNITY_GOAL_DROPDOWN, GOALS_BUTTON, NICKNAME_INPUT, GOAL_TOOLTIP_INFO, QUESTS_SCREEN, LEVEL_CHALLENGE_BUTTON, CHALLENGE_TILE, CHALLENGE_SET, GENERIC_SCREEN_CTA, CHALLENGE_PROGRESS_BAR, GENERIC_SCREEN_HEADING, FLAT_LIST_EVENTS, AD_BANNERS, NAV_BAR, RADIO_ICON_COLOUR, BACK_BUTTON, VIEW_TOP_RIGHT_COIN_COUNTER} from "@ids"

Feature("As an enabled user I am able to use the goals feature", async () => {
    //! Community goals data not pulling through
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
    Scenario("As a user can see the new goal event and the ad next to it, can complete the goal with team", scenario.start, async () => {
        Given("I login as a user with a goal invitation", given.logInAndGoToTab("yucoin", CUSTOMER_34, AUTH_34), async () => {
            helper.GOAL_JOIN_INFO("0 / 2", 200);
            helper.REFUSE_JOIN();
            helper.AD_VISIBILE("left");
            helper.AD_NOT_VISIBLE("right");
            helper.JOIN_GOAL("0 / 2")
            helper.COMPLETE_CHALLENGE(60 ,"1 / 2", 260, 1)
            helper.CLAIM_REWARD(560 ,"1 / 2", 760)
            helper.AD_VISIBILE("left");
            helper.LOGIN_ANOTHER_TEAM_MEMBER(CUSTOMER_20, AUTH_20, 200, 1)
            helper.JOIN_GOAL("1 / 2")
            helper.COMPLETE_CHALLENGE_SECOND_USER("1,560" , 1760) 
            helper.LOG_BACK_IN_FIRST_MEMBER(CUSTOMER_34, AUTH_34)
            helper.CLAIM_REWARD_COMPLETED_GOAL("1,560" , 1760)
        })
    })
})
