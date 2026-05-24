import { configureStore } from "@reduxjs/toolkit";
import type { IReduxState } from "../src/redux/_core/reducers";
import appReducer, { getInitialState as getInitialAppState } from "../src/redux/app/app.reducer";
import coinsReducer, { getInitialState as getInitialCoinsState } from "../src/redux/coins/coins.reducer";
import levelsReducer, { getInitialState as getInitialLevelsState } from "../src/redux/levels/levels.reducer";
import onboardingReducer, {
  getInitialState as getInitialOnboardingState,
} from "../src/redux/onboarding/onboarding.reducer";
import questMapReducer, { getInitialState as getInitialQuestMapState } from "../src/redux/quest-map/quest-map.reducer";
import {
  reducer as rewardsTabReducer,
  getInitialState as getInitialRewardsTabState,
} from "../src/redux/rewards-tab/rewards-tab.reducer";
import streaksReducer, { getInitialState as getInitialStreaksState } from "../src/redux/streaks/streaks.reducer";
import userReducer, { getInitialState as getInitialUserState } from "../src/redux/user/user.reducer";
import yuScreenReducer, { getInitialState as getInitialYuScreenState } from "../src/redux/yu-screen/yu-screen.reducer";
import dailyStepsReducer, {
  getInitialState as getInitialDailyStepsState,
} from "../src/redux/daily-steps/daily-steps.reducer";
import dailyCyclingReducer, {
  getInitialState as getInitialDailyCyclingState,
} from "../src/redux/daily-cycling/daily-cycling.reducer";
import dailyMeditationReducer, {
  getInitialState as getInitialDailyMeditationState,
} from "../src/redux/daily-meditation/daily-meditation.reducer";
import dailyPensionReducer, {
  getInitialState as getInitialDailyPensionState,
} from "../src/redux/daily-pension/daily-pension.reducer";
import fitkitReducer, { getInitialState as getInitialFitkitState } from "../src/redux/fitkit/fitkit.reducer";

/** Feature flags to enable in all screen stories so components render correctly on web. */
export const DEFAULT_STORY_FEATURES: Record<string, boolean> = {
  tempGameEnableReleaseYuHealthV4: true,
  showNotificationCentre: true,
  showWeeklies: true,
  showDuels: true,
  showLeaderboardSearch: true,
  tempGameEnableAvatarFrames: true,
  showReferrals: true,
  tempGameNewRewardsScreen: true,
  tempGameShowAchievements: true,
};

const storyReducer = {
  app: appReducer,
  user: userReducer,
  onboarding: onboardingReducer,
  coins: coinsReducer,
  levels: levelsReducer,
  questMap: questMapReducer,
  rewardsTab: rewardsTabReducer,
  streaks: streaksReducer,
  yuScreen: yuScreenReducer,
  dailySteps: dailyStepsReducer,
  dailyCycling: dailyCyclingReducer,
  dailyMeditation: dailyMeditationReducer,
  dailyPension: dailyPensionReducer,
  fitkit: fitkitReducer,
};

const storyMiddleware = (getDefaultMiddleware: Parameters<Parameters<typeof configureStore>[0]["middleware"]>[0]) =>
  getDefaultMiddleware({ serializableCheck: false, immutableCheck: false });

type StoryReducerKey = keyof typeof storyReducer;
type StoryPreloadedState = Partial<Pick<IReduxState, StoryReducerKey>>;

/** Create a fresh Redux store for a single story, optionally overriding specific slices. */
export const createStoryStore = (overrides: StoryPreloadedState = {}) =>
  configureStore({
    reducer: storyReducer,
    preloadedState: {
      app: getInitialAppState(),
      user: { ...getInitialUserState(), features: DEFAULT_STORY_FEATURES },
      onboarding: getInitialOnboardingState(),
      coins: getInitialCoinsState(),
      levels: getInitialLevelsState(),
      questMap: getInitialQuestMapState(),
      rewardsTab: getInitialRewardsTabState(),
      streaks: getInitialStreaksState(),
      yuScreen: getInitialYuScreenState(),
      dailySteps: getInitialDailyStepsState(),
      dailyCycling: getInitialDailyCyclingState(),
      dailyMeditation: getInitialDailyMeditationState(),
      dailyPension: getInitialDailyPensionState(),
      fitkit: {
        ...getInitialFitkitState(),
        loading: false,
        initialized: true,
        authorised: true,
      },
      ...overrides,
    },
    middleware: storyMiddleware,
  });

/** Minimal Redux store for screen stories — avoids sagas, persistence, and heavy reducer side-effects. */
export const storyStore = createStoryStore();

const preloadedStoryStores = new Map<string, ReturnType<typeof createStoryStore>>();

/** Return a stable store instance per story id — avoids remount loops in screen previews. */
export const getOrCreateStoryStore = (storyKey: string, preloadedState?: StoryPreloadedState) => {
  if (!preloadedState) {
    return storyStore;
  }

  if (!preloadedStoryStores.has(storyKey)) {
    preloadedStoryStores.set(storyKey, createStoryStore(preloadedState));
  }

  return preloadedStoryStores.get(storyKey)!;
};
