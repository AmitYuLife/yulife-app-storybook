import { combineReducers } from "redux";
import dailyMeditationReducer, {
  getInitialState as getInitialDailyMeditation,
} from "../daily-meditation/daily-meditation.reducer";
import { IDailyMeditationStore } from "@redux/daily-meditation/daily-meditation.types";
import coinsReducer, { getInitialState as getInitialCoinsState } from "../coins/coins.reducer";
import { ICoinsStore } from "../coins/coins.types";
import appReducer, { getInitialState as getInitialAppState } from "../app/app.reducer";
import { IAppStore } from "@redux/app/app.types";
import deviceReducer, { getInitialState as getInitialDeviceState } from "../device/device.reducer";
import { IDeviceStore } from "@redux/device/device.types";
import dailyStepsReducer, { getInitialState as getInitialDailyStepsState } from "../daily-steps/daily-steps.reducer";
import { IDailyStepsStore } from "@redux/daily-steps/daily-steps.types";
import levelsReducer, { getInitialState as getInitialLevelsState } from "../levels/levels.reducer";
import { ILevelsStore } from "@redux/levels/levels.types";
import onboardingReducer, { getInitialState as getInitialOnboardingState } from "../onboarding/onboarding.reducer";

import { IOnboardingStore } from "../onboarding/onboarding.types";
import pedometerReducer, { getInitialState as getInitialPedometerState } from "../pedometer/pedometer.reducer";
import { IPedometerStore } from "../pedometer/pedometer.types";
import streaksReducer, { getInitialState as getInitialStreaksState } from "../streaks/streaks.reducer";
import { IStreaksStore } from "../streaks/streaks.types";
import sudokuReducer, { getInitialState as getInitialSudokuState } from "../sudoku/sudoku.reducer";
import { ISudokuStore } from "../sudoku/sudoku.types";

import userReducer, { getInitialState as getInitialUserState } from "../user/user.reducer";
import { IUserStore } from "../user/user.types";
import sduiReducer, { getInitialState as getInitialSduiState } from "../server-driven-ui/sdui.reducer";
import { ISduiStore } from "../server-driven-ui/sdui.types";
import questMapReducer, { getInitialState as getInitialQuestMapState } from "../quest-map/quest-map.reducer";
import { IQuestMapStore } from "../quest-map/quest-map.types";
import dailyCyclingReducer, {
  IDailyCyclingStore,
  getInitialState as getInitialDailyCycling,
} from "../daily-cycling/daily-cycling.reducer";
import fitkitReducer, { getInitialState as getInitialFitkitState } from "../fitkit/fitkit.reducer";
import { IFitkitStore } from "../fitkit/fitkit.types";
import adBannersReducer, { getInitialAdbannersState } from "../ad-banners/ad-banners.reducer";
import { IAdBannersStore } from "../ad-banners/ad-banners.types";
import dailyPensionReducer, { getInitialState as getInitialDailyPension } from "../daily-pension/daily-pension.reducer";
import { IDailyPensionStore } from "@redux/daily-pension/daily-pension.types";
import leaderboardReducer, {
  getInitialState as getInitialLeaderboardState,
} from "../leaderboards/leaderboards.reducer";
import { ILeaderboardsStore } from "../leaderboards/leaderboards.types";

import hintsReducer, { getInitialState as getInitialHintsState } from "@redux/hints/hints.reducer";
import { IHintsStore } from "@redux/hints/hints.types";
import yuHealthReducer, { IYuHealthStore, getInitialYuHealthState } from "@redux/yu-health/yu-health.reducer";
import yuScreenReducer, { getInitialState as getInitialYuScreenState } from "@redux/yu-screen/yu-screen.reducer";
import { IYuScreenStore } from "@redux/yu-screen/yu-screen.types";

import healthSmokingReducer, {
  IHealthSmokingStore,
  getInitialState as getInitialHealthSmokingState,
} from "@redux/health-smoking/health-smoking.reducer";
import detoxReducer, { getInitialState as getInitialDetoxState } from "@redux/detox/detox.reducer";
import { IDetoxStore } from "@redux/detox/detox.types";
import * as rewardsTab from "../rewards-tab/rewards-tab.reducer";
import { IRewardsTabStore } from "../rewards-tab/rewards-tab.types";
import game2048Reducer, {
  IGame2048Store,
  getInitialState as getInitialGame2048State,
} from "@redux/game-2048/game-2048.reducer";
import prizesReducer, { getInitialPrizesState } from "@redux/prizes/prizes.reducer";
import { IPrizesStore } from "@redux/prizes/prizes.types";

export interface IReduxState {
  app: IAppStore;
  coins: ICoinsStore;
  dailySteps: IDailyStepsStore;
  device: IDeviceStore;
  levels: ILevelsStore;
  onboarding: IOnboardingStore;
  pedometer: IPedometerStore;
  streaks: IStreaksStore;
  user: IUserStore;
  dailyMeditation: IDailyMeditationStore;
  dailyCycling: IDailyCyclingStore;
  dailyPension: IDailyPensionStore;
  sdui: ISduiStore;
  fitkit: IFitkitStore;
  adBanners: IAdBannersStore;
  sudoku: ISudokuStore;
  hints: IHintsStore;
  leaderboard: ILeaderboardsStore;
  questMap: IQuestMapStore;
  yuHealth: IYuHealthStore;
  yuScreen: IYuScreenStore;
  healthSmoking: IHealthSmokingStore;
  detox: IDetoxStore;
  rewardsTab: IRewardsTabStore;
  game2048: IGame2048Store;
  prizes: IPrizesStore;
}

export const initialState: IReduxState = {
  app: getInitialAppState(),
  coins: getInitialCoinsState(),
  dailySteps: getInitialDailyStepsState(),
  device: getInitialDeviceState(),
  levels: getInitialLevelsState(),
  onboarding: getInitialOnboardingState(),
  pedometer: getInitialPedometerState(),
  streaks: getInitialStreaksState(),
  user: getInitialUserState(),
  dailyMeditation: getInitialDailyMeditation(),
  dailyCycling: getInitialDailyCycling(),
  dailyPension: getInitialDailyPension(),
  hints: getInitialHintsState(),
  sdui: getInitialSduiState(),
  fitkit: getInitialFitkitState(),
  adBanners: getInitialAdbannersState(),
  sudoku: getInitialSudokuState(),
  leaderboard: getInitialLeaderboardState(),
  questMap: getInitialQuestMapState(),
  yuHealth: getInitialYuHealthState(),
  yuScreen: getInitialYuScreenState(),
  healthSmoking: getInitialHealthSmokingState(),
  detox: getInitialDetoxState(),
  rewardsTab: rewardsTab.getInitialState(),
  game2048: getInitialGame2048State(),
  prizes: getInitialPrizesState(),
};

// this alias is created for testing purposes
export const testInitialState = initialState;

const combinedReducers = combineReducers({
  app: appReducer,
  coins: coinsReducer,
  dailySteps: dailyStepsReducer,
  device: deviceReducer,
  levels: levelsReducer,
  onboarding: onboardingReducer,
  pedometer: pedometerReducer,
  streaks: streaksReducer,
  user: userReducer,
  dailyMeditation: dailyMeditationReducer,
  dailyCycling: dailyCyclingReducer,
  dailyPension: dailyPensionReducer,
  sdui: sduiReducer,
  fitkit: fitkitReducer,
  adBanners: adBannersReducer,
  sudoku: sudokuReducer,
  hints: hintsReducer,
  leaderboard: leaderboardReducer,
  questMap: questMapReducer,
  yuHealth: yuHealthReducer,
  yuScreen: yuScreenReducer,
  healthSmoking: healthSmokingReducer,
  detox: detoxReducer,
  rewardsTab: rewardsTab.reducer,
  game2048: game2048Reducer,
  prizes: prizesReducer,
});

export default combinedReducers;
