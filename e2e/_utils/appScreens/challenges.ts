import {
  navigateViaText, navigateViaID, CHALLENGE_TILE, idVisible, CHALLENGE_PROGRESS_BAR, wait, LEVEL_CHALLENGE_BUTTON, expectIsVisibleViaID, textVisible, CALM_BUTTON, HEADSPACE_BUTTON, MEDITATION_STAR_REWARD, MEDITATION_YUCOIN_REWARD,
  MEDITOPIA_CHALLENGE_LOAD_SCREEN, USE_OTHER_APP_BUTTON, MEDITOPIA_BUTTON, VIEW_TOP_RIGHT_COIN_COUNTER, VIDEO_PLAYER_TIMER, VIDEO_PROGRESS_BAR, VIDEO_PLAY_PAUSE_BUTTON, textNotVisible, MEDITOPIA_TIMER_MINUTES, MEDITOPIA_TIMER_SECS, idNotVisible, GENERIC_SCREEN_CTA,
  GENERIC_SCREEN_HEADING, SCREEN_CLOSE, CHOOSE_MEDITOPIA_SCREEN, LOADING_BAR, idVisibleAtIndex, CHALLENGE_DETAILS_SCREEN, TAKE_CHALLENGE_BUTTON, SET_UP_BUTTON, REWARD_AMOUNT, CHALLENGE_TYPE, TARGET, TODAYS_MEDITATION_SCREEN, TODAYS_MEDITATION_HEADER, TODAYS_MEDITATION_DESCRIPTION,
  VIDEO_PLAYER, VIDEO_LOGO, MEDITATION_PARTNER_LOGO
} from "@navigation"
import { sendSteps } from "@socket";

export const onChallengeComplete = (stepCount: number, level = 1) => async () => {
  const steps = `${stepCount} steps`
  const challengeLevel = `Level ${level}`

  const screenCopy = ["Well done!", "Collect", steps, challengeLevel]

  await wait(3000)()
  for (const i of screenCopy) {
    await waitFor(element(by.text(i))).toBeVisible().withTimeout(10000)
    await expect(element(by.text(i))).toBeVisible()
  };
}

export const onMeditationChallengeComplete = (minutes: number, level: number) => async () => {
  wait(3000)()
  const challengeLevel = `Level ${level}`

  let timeSpent = `${minutes} minute`
  if (minutes > 1) {
    timeSpent = `${minutes} minutes`
  }

  const screenCopy = ["Well done!", "Collect", timeSpent, challengeLevel]

  for (const i of screenCopy) {
    await waitFor(element(by.text(i))).toBeVisible().withTimeout(10000)
    await expect(element(by.text(i))).toBeVisible()
  };

}

export const meditationAppModalVisible = () => async () => {
  await textVisible("Choose an app to start")
  await idVisible(CALM_BUTTON)
  await idVisible(HEADSPACE_BUTTON)
}

export const startChallenge = (challengeTile: string,) => async () => {
  await navigateViaID(CHALLENGE_TILE(challengeTile))
  await navigateViaText("Take challenge")
  try {
    await navigateViaText("maybe later")
  } catch (e) {
    await idVisible(CHALLENGE_PROGRESS_BAR)()
  }
}

export const startChallengeFromQuests = (levelButton: number, challengeName: string) => async () => {
  await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelButton))
  await navigateViaID(CHALLENGE_TILE(challengeName))
  await navigateViaText("Take challenge")

  if (challengeName === "meditation") {
    await wait(5000)()
  }

  try {
    await navigateViaText("maybe later")
  } catch (e) {
    await idVisible(CHALLENGE_PROGRESS_BAR)()
  }
}

export const startMeditationChallengeFromQuests = (levelButton: number) => async () => {
  await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelButton))
  await navigateViaID(CHALLENGE_TILE("meditation"))
  await navigateViaText("Take challenge")
  await navigateViaText("Use a different app")
  await navigateViaText("maybe later")
}

export const completeShortStroll = (steps: number, waitTime: number) => async () => {
  await navigateViaID(CHALLENGE_TILE("short stroll"))
  await navigateViaText("Take challenge")
  await navigateViaText("maybe later")
  await sendSteps(steps, waitTime)()
}

export const meditationAppsButtonsVisible = (appName: string) => async () => {
  const buttonText = element(by.text(`Use ${appName} app`))
  await expect(buttonText).toBeVisible()
}

export const buttonVisible = (text: string) => async () => {
  const buttonText = element(by.text(text))
  await expect(buttonText).toBeVisible()
}

export const openOtherAppButtonVisible = async () => {
  const buttonText = element(by.text("Use a different app"))
  await expect(buttonText).toBeVisible()
  await expectIsVisibleViaID(USE_OTHER_APP_BUTTON)
}

export const meditopiaContentCardVisible = (mins: string, yuCoin: string) => async () => {
  await textVisible(`${mins} mins • Earn ${yuCoin}`)()
}

export const isOnChallengeLoadScreen = async () => {
  await expectIsVisibleViaID(MEDITOPIA_CHALLENGE_LOAD_SCREEN);
};

export const selectMeditopiaChallengeFromQuests = (levelButton: number, challengeName: string) => async () => {
  await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelButton))
  await navigateViaID(CHALLENGE_TILE(challengeName))
}

export const onChallengeDetailsScreen = (yuCoin: string) => async () => {
  await idVisible(CHALLENGE_DETAILS_SCREEN)()
  await idVisible(CHALLENGE_TYPE("meditation"))()
  await idVisible(TARGET("1 min"))()
  await idVisible(REWARD_AMOUNT(60))()
  await textVisible(yuCoin)()
  await idVisible(TAKE_CHALLENGE_BUTTON("Take challenge"))()
  await idVisible(SET_UP_BUTTON("Set up tutorial"))()
  await buttonVisible("Take challenge")()
  await buttonVisible("Set up tutorial")()
}

export const on3ChallengesDetailsScreen = async () => {
  await idVisible(CHALLENGE_DETAILS_SCREEN)()
  await idVisible(CHALLENGE_TYPE("meditation"))()
  await idVisible(TARGET("1 min"))()
  await idVisible(TARGET("3 mins"))()
  await idVisible(TARGET("6 mins"))()
  await idVisible(REWARD_AMOUNT(10))()
  await idVisible(REWARD_AMOUNT(20))()
  await idVisible(REWARD_AMOUNT(30))()
  await idVisible(TAKE_CHALLENGE_BUTTON("Take challenge"))()
  await idVisible(SET_UP_BUTTON("Set up tutorial"))()
  await buttonVisible("Take challenge")()
  await buttonVisible("Set up tutorial")()
}

export const tapTakeChallenge = async () => {
  await navigateViaText("Take challenge")
}

export const onMeditationContentIntroScreen =
  (contentName: "Awareness" | "Explore your breath" | "Counting breaths" | "Body scan" | "Relaxing the body" | "Rediscovering senses" |
    "Grounding" | "Deep relaxation" | "Being aware of the present moment" | "Slowing down" | "Improving attention and focus" | "Compassion" |
    "Gratitude" | "Acceptance" | "Expand", duration: number, stars: number, yuCoinReward: number, yuCoinTotal: number) => async () => {

      const challengeStats = `Meditation • ${duration} sec`
      await wait(5000)()
      let label = ""
      let subheading = ""

      switch (contentName) {
        case "Awareness":
          label = "Awareness"
          subheading = "Deep Mindfulness - You'll experience the building blocks of meditation more deeply, allowing your practice to take root."
          break
        case "Explore your breath":
          label = "Explore your breath"
          subheading = "Breath - Getting to know your breath in one of the fundamental steps of meditation. By noticing the natural flow of your breath, you will see that you can easily step into peace, relaxation and balance."
          break
        case "Counting breaths":
          label = "Counting breaths"
          subheading = "Breath - Getting to know your breath in one of the fundamental steps of meditation. By noticing the natural flow of your breath, you will see that you can easily step into peace, relaxation and balance."
          break
        case "Body scan":
          label = "Body scan"
          subheading = "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day."
          break
        case "Relaxing the body":
          label = "Relaxing the body"
          subheading = "Body - Noticing the sensations in your body and observing their changes leads to deeper relaxation, better focus, and more impactful brain waves."
          break
        case "Rediscovering senses":
          label = "Rediscovering senses"
          subheading = "Body - Noticing the sensations in your body and observing their changes leads to deeper relaxation, better focus, and more impactful brain waves."
          break
        case "Grounding":
          label = "Grounding"
          subheading = "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day."
          break
        case "Deep relaxation":
          label = "Deep relaxation"
          subheading = "Body - Noticing the sensations in your body and observing their changes leads to deeper relaxation, better focus, and more impactful brain waves."
          break
        case "Being aware of the present moment":
          label = "Being aware of the present moment"
          subheading = "Being Present - Your mind constantly swings between the past and the future. During meditation, aim to focus on the moment, and fully experience all the gifts that come from being fully present."
          break
        case "Slowing down":
          label = "Slowing down"
          subheading = "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day."
          break
        case "Improving attention and focus":
          label = "Improving attention and focus"
          subheading = "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day."
          break
        case "Compassion":
          label = "Compassion"
          subheading = "Compassion - You will try to understand any feelings that arise, and show both yourself and others compassion, kindness and welcome."
          break
        case "Gratitude":
          label = "Gratitude"
          subheading = "Gratitude - Gratitude is a powerful healing emotion. If you look carefully, you'll see that there are many things that you can be thankful for."
          break
        case "Acceptance":
          label = "Acceptance"
          subheading = "Acceptance - You will learn to let events happen on their own, and to soften your resistance to reality."
          break
        case "Expand":
          label = "Expand"
          subheading = "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day."
          break
      }

      try {
        await wait(10000)()
        await textVisible(label)()
        await textVisible(challengeStats, 3000)()
        await textVisible(subheading)()
        await idVisible((MEDITATION_STAR_REWARD(stars)))
        await idVisible((MEDITATION_YUCOIN_REWARD(yuCoinReward)))
        await idVisible((VIEW_TOP_RIGHT_COIN_COUNTER(yuCoinTotal)))
        await buttonVisible("Start session")()
      } catch (e) {
        await textVisible(label, 3000)()
        await buttonVisible("Start session")()
      }
    }

export const tapStartSession = async () => {
  await navigateViaText("Start session")
}

export const completeMeditopiaContentSession = async () => {
  try {
    await navigateViaText("maybe later")
  } catch (e) {
    await idVisible(VIDEO_PLAYER)()
    await idVisible(VIDEO_LOGO)()
    await idVisible(VIDEO_PLAYER_TIMER)()
    await idVisible(VIDEO_PROGRESS_BAR)()
    await idVisible(VIDEO_PLAY_PAUSE_BUTTON(false))()
  }
  await idVisible(VIDEO_PLAYER)()
  await idVisible(VIDEO_LOGO)()
  await idVisible(VIDEO_PLAYER_TIMER)()
  await idVisible(VIDEO_PROGRESS_BAR)()
  await idVisible(VIDEO_PLAY_PAUSE_BUTTON(false))()
  await wait(20000)()
}

export const onMeditopiaChallengeComplete = (minutes: number, level: number, yuCoin: string) => async () => {
  const challengeLevel = `Level ${level}`

  let timeSpent = `${minutes} minute`
  if (minutes > 1) {
    timeSpent = `${minutes} minutes`
  }

  const screenCopy = ["Well done!", "Collect", timeSpent, challengeLevel, yuCoin]

  for (const i of screenCopy) {
    await waitFor(element(by.text(i))).toBeVisible().withTimeout(10000)
    await expect(element(by.text(i))).toBeVisible()
  };
}

export const pauseMeditopiaChallenge = async () => {
  await navigateViaText("maybe later")
  await wait(3000)()
  await navigateViaID(VIDEO_PLAY_PAUSE_BUTTON(false))
}

export const pauseChallengeTimeVisible = async () => {
  await textNotVisible("00:00")()
  await idVisible(VIDEO_PLAY_PAUSE_BUTTON(true))()
  await idNotVisible(MEDITOPIA_TIMER_SECS(":00"))()
  await idVisibleAtIndex((MEDITOPIA_TIMER_MINUTES("00")), 0)()
}

export const playAndFinishMeditopiaChallenge = async () => {
  await navigateViaID(VIDEO_PLAY_PAUSE_BUTTON(true))
  await wait(15000)()
}

export const startAndQuitMeditopiaChallenge = async () => {
  await navigateViaText("maybe later")
  await navigateViaID(SCREEN_CLOSE)
}

export const quitMeditopiaChallenge = async () => {
  await navigateViaID(SCREEN_CLOSE)
}

export const isOnQuitChallengeScreen = async () => {
  await idVisible(GENERIC_SCREEN_HEADING("Call it quits?"))()
  await textVisible("Call it quits?")()
  await textVisible("Your current progress will be lost but you can retry any time")()
  await buttonVisible("Exit challenge")()
  await buttonVisible("Cancel")()
  await idVisible(GENERIC_SCREEN_CTA("Exit challenge"))()
  await idVisible(GENERIC_SCREEN_CTA("Cancel"))()
}

export const closeQuitChallengeScreen = async () => {
  await navigateViaID(GENERIC_SCREEN_CTA("Cancel"))
}

export const exitMeditopiaChallenge = async () => {
  await navigateViaID(GENERIC_SCREEN_CTA("Exit challenge"))
}

export const onChooseMeditopiaContentScreen = async () => {
  await textVisible("Meditate inside the YuLife app with Meditopia")()
  await idVisible(CHOOSE_MEDITOPIA_SCREEN)()
}

export const startMeditopiaChallenge = async () => {
  await navigateViaText("Start session")
  await navigateViaText("maybe later")
}

export const clickScrubber = async () => {
  await navigateViaID(VIDEO_PROGRESS_BAR)
}

export const onScreenButtonsNotVisible = async () => {
  await idNotVisible(SCREEN_CLOSE)()
  await idNotVisible(VIDEO_PLAY_PAUSE_BUTTON(true))()
  await idNotVisible(LOADING_BAR)()
}

export const isOnTodaysMeditationScreen = (mins1: string, yuCoin1: string) => async () => {
  await wait(2000)()
  await idVisible(TODAYS_MEDITATION_SCREEN)()
  await idVisible(TODAYS_MEDITATION_HEADER("Today’s Meditations"))()
  await idVisible(TODAYS_MEDITATION_DESCRIPTION("Free sessions powered by"))()
  await idVisible(MEDITATION_PARTNER_LOGO)()
  await textVisible("Today’s Meditations")()
  await textVisible("Free sessions powered by")()
  await meditopiaContentCardVisible(mins1, yuCoin1)()
  await textVisible("Or use an app")()
  await meditationAppsButtonsVisible("Meditopia")()
  await meditationAppsButtonsVisible("Calm")()
  await meditationAppsButtonsVisible("Headspace")()
  await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${0}`)
  await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${1}`)
  await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${2}`)
  await openOtherAppButtonVisible()
}

export const isOnTodaysMeditationScreen2Challenges = (mins1: string, yuCoin1: string, mins2: string, yuCoin2: string) => async () => {
  await idVisible(TODAYS_MEDITATION_SCREEN)()
  await idVisible(TODAYS_MEDITATION_HEADER("Today’s Meditations"))()
  await idVisible(TODAYS_MEDITATION_DESCRIPTION("Free sessions powered by"))()
  await idVisible(MEDITATION_PARTNER_LOGO)()
  await textVisible("Today’s Meditations")()
  await textVisible("Free sessions powered by")()
  await meditopiaContentCardVisible(mins1, yuCoin1)()
  await meditopiaContentCardVisible(mins2, yuCoin2)()
  await textVisible("Or use an app")()
  await meditationAppsButtonsVisible("Meditopia")()
  await meditationAppsButtonsVisible("Calm")()
  await meditationAppsButtonsVisible("Headspace")()
  await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${0}`)
  await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${1}`)
  await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${2}`)
  await openOtherAppButtonVisible()
}

export const tapAwarenessContentCard = (mins1: string, yuCoin1: string) => async () => {
  await navigateViaText(`${mins1} mins • Earn ${yuCoin1}`)
}

export const exitChallenge = async () => {
  await navigateViaID(GENERIC_SCREEN_CTA("Exit challenge"))
}