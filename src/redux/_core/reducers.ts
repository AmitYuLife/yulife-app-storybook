import { combineReducers } from "redux";
import dailyMeditationReducer, {
  getInitialState as getInitialDailyMeditation,
} from "../daily-meditation/daily-meditation.reducer";
import { IDailyMeditationStore } from "@redux/daily-meditation/daily-meditation.types";
import appReducer, { IAppStore, getInitialState as getInitialAppState } from "../app/app.reducer";
import coinsReducer, { ICoinsStore, getInitialState as getInitialCoinsState } from "../coins/coins.reducer";
import dailyStepsReducer, {
  IDailyStepsStore,
  getInitialState as getInitialDailyStepsState,
} from "../daily-steps/daily-steps.reducer";
import deviceReducer, { IDeviceStore, getInitialState as getInitialDeviceState } from "../device/device.reducer";
import levelsReducer, { getInitialState as getInitialLevelsState } from "../levels/levels.reducer";
import { ILevelsStore } from "@redux/levels/levels.types";
import onboardingReducer, {
  getInitialState as getInitialOnboardingState,
  IOnboardingStore,
} from "../onboarding/onboarding.reducer";
import pedometerReducer, {
  getInitialState as getInitialPedometerState,
  IPedometerStore,
} from "../pedometer/pedometer.reducer";
import streaksReducer, { getInitialState as getInitialStreaksState, IStreaksStore } from "../streaks/streaks.reducer";
import sudokuReducer, { getInitialState as getInitialSudokuState, ISudokuStore } from "../sudoku/sudoku.reducer";

import userReducer, { getInitialState as getInitialUserState, IUserStore } from "../user/user.reducer";
import sduiReducer, { getInitialState as getInitialSduiState, ISduiStore } from "../server-driven-ui/sdui.reducer";
import dailyCyclingReducer, {
  IDailyCyclingStore,
  getInitialState as getInitialDailyCycling,
} from "../daily-cycling/daily-cycling.reducer";
import fitkitReducer, { getInitialState as getInitialFitkitState, IFitkitStore } from "../fitkit/fitkit.reducer";
import adBannersReducer, { getInitialAdbannersState, IAdBannersStore } from "../ad-banners/ad-banners.reducer";
import dailyPensionReducer, { getInitialState as getInitialDailyPension } from "../daily-pension/daily-pension.reducer";
import { IDailyPensionStore } from "@redux/daily-pension/daily-pension.types";
import leaderboardReducer, {
  ILeaderboardsStore,
  getInitialState as getInitialLeaderboardState,
} from "../leaderboards/leaderboards.reducer";

import hintsReducer, { IHintsStore, getInitialState as getInitialHintsState } from "@redux/hints/hints.reducer";
import yuHealthReducer, { IYuHealthStore, getInitialYuHealthState } from "@redux/yu-health/yu-health.reducer";
import yuScreenReducer, {
  IYuScreenStore,
  getInitialState as getInitialYuScreenState,
} from "@redux/yu-screen/yu-screen.reducer";

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
  yuHealth: IYuHealthStore;
  yuScreen: IYuScreenStore;
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
  yuHealth: getInitialYuHealthState(),
  yuScreen: getInitialYuScreenState(),
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
  yuHealth: yuHealthReducer,
  yuScreen: yuScreenReducer,
});

export default combinedReducers;
