import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework"
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_FIIT, CUSTOMER_FIIT, MEDIA_2, MEDIA_5, MEDIA_7, USER_FIIT } from "@data"
import { BACK_BUTTON, CHALLENGE_TILE, FIIT_MEDIA_PLAYER_CLOSE, LEVEL_CHALLENGE_BUTTON, QUESTS_SCREEN, TODAYS_EARNINGS } from "@ids"
import { fiitCardioMedia, fiitInfo, fiitRebalanceMedia, fiitStrengthMedia } from "./_resources/constants"

Feature("Fiit in app", async () => {
  Scenario("As a user with access to Fiit in-app challenges, I am able to complete a Fiit challenge ", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", CUSTOMER_FIIT, AUTH_FIIT), async () => {
      Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
      Then("I should see that level 5 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(5)))
    })
    When("I tap the level 5 button", when.tapID(LEVEL_CHALLENGE_BUTTON(5)), async () => {
      Then("I should see the 'fiit class' challenge tile", then.idVisible(CHALLENGE_TILE(fiitInfo.challengeName)))
    })
    When("I tap on the fiit class challenge tile", when.tapID(CHALLENGE_TILE(fiitInfo.challengeName)), async () => {
      Then("I should be able to see details about the challenge", then.canSeeFiitChallengeDetailsScreen(USER_FIIT))
    })
    When("I tap 'Take challenge'", when.tapTakeChallenge, async () => {
      Then("I should be on the Fiit 'Workout collections' screen", then.canSeeWorkoutCollectionsScreen)
    })
    When("I click on 'Rebalance'", when.tapFiitCategory("Rebalance"), async () => {
      Then("I should be on the 'Rebalance classes' screen and see the various media available", then.canSeeFiitMediaList(fiitRebalanceMedia, USER_FIIT))
    })
    When("I go back a screen", when.tapID(BACK_BUTTON), async () => {
      Then("I should be on the Fiit 'Workout collections' screen", then.canSeeWorkoutCollectionsScreen)
    })
    When("I click on 'Strength'", when.tapFiitCategory("Strength"), async () => {
      Then("I should be on the 'Strength classes' screen and see the various media available", then.canSeeFiitMediaList(fiitStrengthMedia, USER_FIIT))
    })
    When("I go back a screen", when.tapID(BACK_BUTTON), async () => {
      Then("I should be on the Fiit 'Workout collections' screen", then.canSeeWorkoutCollectionsScreen)
    })
    When("I click on 'Cardio'", when.tapFiitCategory("Cardio"), async () => {
      Then("I should be on the 'Cardio classes' screen and see the various media available", then.canSeeFiitMediaList(fiitCardioMedia, USER_FIIT))
    })
    When("I tap on one of the videos", when.tapFiitVideo(MEDIA_5), async () => {
      Then("I should see the video description screen", then.canSeeVideoDescription(MEDIA_5, USER_FIIT))
    })
    When("I tap to play the video (15 seconds only in detox)", when.playFiitVideo, async () => {
      When("I tap 'maybe later'", when.tapText("maybe later"), async () => {
        When("I pause the video", when.pauseVideo(true), async () => {
          Then("I can see the video is paused", then.isVideoPaused(true))
        })
      })
    })
    When("I wait", when.wait(3000), async () => {
      When("I unpause the video", when.pauseVideo(false), async () => {
        When("I wait for the video to finish", when.wait(20000), async () => {
          Then("I can see the challenge reward screen", then.canSeeFiitChallengeRewardScreen(USER_FIIT, MEDIA_5, 5))
        })
      })
    })
    When("I tap 'Collect'", when.tapText("Collect"), async () => {
      Then("I can see I've completed day one of a streak", then.completedTodayStreakCopyVisible(1))
    })
    When("I tap 'Done'", when.tapText("Done"), async () => {
      Then("I am taken to the Quests screen", then.idVisible(QUESTS_SCREEN(0)))
    })
    When("I go to the yucoin screen", when.navigateTo("yucoin"), async () => {
      Then("I should see 314 YuCoin today have been earnt today", then.canSeeYuCoinEarntToday(314))
    })
    When("I click on the YuCoin Icon to see the breakdown of my earnings", when.tapYuCoinIcon, async () => {
      Then("I'm on the 'Today's Earnings' screen", then.idVisible(TODAYS_EARNINGS))
      Then("I can see 1/1 challenges completed today", then.textVisible("Today's challenges (1/1)"))
      Then("I can see the fiit challenge completed today, with the correct duration", then.canSeeFiitCompleted(MEDIA_5))
    })
  })

  Scenario("As a user with access to Fiit in-app challenges, I am able to start watching and then cancel the challenge mid video", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", CUSTOMER_FIIT, AUTH_FIIT), async () => {
      Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
      Then("I should see that level 5 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(5)))
    })
    When("I tap the level 5 button", when.tapID(LEVEL_CHALLENGE_BUTTON(5)), async () => {
      Then("I should see the 'fiit class' challenge tile", then.idVisible(CHALLENGE_TILE(fiitInfo.challengeName)))
    })
    When("I tap on the fiit class challenge tile", when.tapID(CHALLENGE_TILE(fiitInfo.challengeName)), async () => {
      Then("I should be able to see details about the challenge", then.canSeeFiitChallengeDetailsScreen(USER_FIIT))
    })
    When("I tap 'Take challenge'", when.tapTakeChallenge, async () => {
      Then("I should be on the Fiit 'Workout collections' screen", then.canSeeWorkoutCollectionsScreen)
    })
    When("I click on 'Strength'", when.tapFiitCategory("Strength"), async () => {
      Then("I should be on the 'Strength classes' screen and see the various media available", then.canSeeFiitMediaList(fiitStrengthMedia, USER_FIIT))
    })
    When("I tap on one of the videos", when.tapFiitVideo(MEDIA_2), async () => {
      Then("I should see the video description screen", then.canSeeVideoDescription(MEDIA_2, USER_FIIT))
    })
    When("I tap to play the video (15 seconds only in detox)", when.playFiitVideo, async () => {
      When("I tap 'maybe later'", when.tapText("maybe later"), async () => {
        Then("The video is playing", then.isVideoPaused(false))
      })
    })
    When("I pause the video", when.pauseVideo(true), async () => {
      Then("I can see the video is paused", then.isVideoPaused(true))
    })
    When("I tap the close button to quit the challenge part way through", when.tapID(FIIT_MEDIA_PLAYER_CLOSE), async () => {
      Then("I should see the quit challenge confirmation sceen", then.isOnQuitChallengeScreen)
    })
    When("I return to the challenge", when.closeQuitChallengeScreen, async () => {
      When("I tap the close button again", when.tapID(FIIT_MEDIA_PLAYER_CLOSE), async () => {
        Then("I should see the quit challenge confirmation sceen", then.isOnQuitChallengeScreen)
      })
      When("I exit the challenge", when.exitChallenge, async () => {
        Then("I should be back on the 'Strength classes' screen", then.canSeeFiitMediaList(fiitStrengthMedia, USER_FIIT))
      })
    })
  })

  Scenario("As a user with access to Fiit in-app challenges, I am able to complete a Fiit challenge, close the app and open it again, and still be awarded YuCoin", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", CUSTOMER_FIIT, AUTH_FIIT), async () => {
      Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
      Then("I should see that level 5 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(5)))
    })
    When("I tap the level 5 button", when.tapID(LEVEL_CHALLENGE_BUTTON(5)), async () => {
      Then("I should see the 'fiit class' challenge tile", then.idVisible(CHALLENGE_TILE(fiitInfo.challengeName)))
    })
    When("I tap on the fiit class challenge tile", when.tapID(CHALLENGE_TILE(fiitInfo.challengeName)), async () => {
      Then("I should be able to see details about the challenge", then.canSeeFiitChallengeDetailsScreen(USER_FIIT))
    })
    When("I tap 'Take challenge'", when.tapTakeChallenge, async () => {
      Then("I should be on the Fiit 'Workout collections' screen", then.canSeeWorkoutCollectionsScreen)
    })
    When("I click on 'Cardio'", when.tapFiitCategory("Rebalance"), async () => {
      Then("I should be on the 'Cardio classes' screen and see the various media available", then.canSeeFiitMediaList(fiitRebalanceMedia, USER_FIIT))
    })
    When("I tap on one of the videos", when.tapFiitVideo(MEDIA_7), async () => {
      Then("I should see the video description screen", then.canSeeVideoDescription(MEDIA_7, USER_FIIT))
    })
    When("I tap to play the video (15 seconds only in detox)", when.playFiitVideo, async () => {
      When("I tap 'maybe later'", when.tapText("maybe later"), async () => {
        Then("The video is playing", then.isVideoPaused(false))
      })
    })
    When("I close and reopen the app", when.minimiseAndReopenApp, async () => {
      When("I tap 'Collect'", when.tapText("Collect"), async () => {
        Then("I can see I've completed day one of a streak", then.completedTodayStreakCopyVisible(1))
      })
    })
    When("I tap 'Done'", when.tapText("Done"), async () => {
      Then("I am taken to the Quests screen", then.idVisible(QUESTS_SCREEN(0)))
    })
    When("I go to the yucoin screen", when.navigateTo("yucoin"), async () => {
      Then("I should see 314 YuCoin today have been earnt today", then.canSeeYuCoinEarntToday(314))
    })
    When("I click on the YuCoin Icon to see the breakdown of my earnings", when.tapYuCoinIcon, async () => {
      Then("I'm on the 'Today's Earnings' screen", then.idVisible(TODAYS_EARNINGS))
      Then("I can see 1/1 challenges completed today", then.textVisible("Today's challenges (1/1)"))
      Then("I can see the fiit challenge completed today, with the correct duration", then.canSeeFiitCompleted(MEDIA_7))
    })
  })
})