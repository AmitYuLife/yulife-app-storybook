import { combineReducers } from "redux";
import dailyMeditationReducer, {
  IDailyMeditationStore,
  getInitialState as getInitialDailyMeditation,
} from "../daily-meditation/daily-meditation.reducer";

import appReducer, { IAppStore, getInitialState as getInitialAppState } from "../app/app.reducer";
import coinsReducer, { ICoinsStore, getInitialState as getInitialCoinsState } from "../coins/coins.reducer";
import copyReducer, { ICopyStore, getInitialState as getInitialCopyState } from "../copy/copy.reducer";
import dailyStepsReducer, {
  IDailyStepsStore,
  getInitialState as getInitialDailyStepsState,
} from "../daily-steps/daily-steps.reducer";
import deviceReducer, { IDeviceStore, getInitialState as getInitialDeviceState } from "../device/device.reducer";
import levelsReducer, { ILevelsStore, getInitialState as getInitialLevelsState } from "../levels/levels.reducer";
import onboardingReducer, {
  getInitialState as getInitialOnboardingState,
  IOnboardingStore,
} from "../onboarding/onboarding.reducer";
import pedometerReducer, {
  getInitialState as getInitialPedometerState,
  IPedometerStore,
} from "../pedometer/pedometer.reducer";
import streaksReducer, { getInitialState as getInitialStreaksState, IStreaksStore } from "../streaks/streaks.reducer";
import themeReducer, { getInitialState as getInitialThemeState, IThemeStore } from "../theme/theme.reducer";
import userReducer, { getInitialState as getInitialUserState, IUserStore } from "../user/user.reducer";
import sduiReducer, { getInitialState as getInitialSduiState, ISduiStore } from "../server-driven-ui/sdui.reducer";
import dailyCyclingReducer, {
  IDailyCyclingStore,
  getInitialState as getInitialDailyCycling,
} from "@redux/daily-cycling/daily-cycling.reducer";
import fitkitReducer, { getInitialState as getInitialFitkitState } from "../fitkit/fitkit.reducer";
import { IFitkitStore } from "@redux/fitkit/fitkit.reducer";
import adBannersReducer, { getInitialAdbannersState, IAdBannersStore } from "../ad-banners/ad-banners.reducer";
import questsReducer, { getInitialState as getInitialQuestState, IQuestStore } from "../quests/quests.reducer";

export interface IReduxState {
  app: IAppStore;
  coins: ICoinsStore;
  dailySteps: IDailyStepsStore;
  device: IDeviceStore;
  levels: ILevelsStore;
  onboarding: IOnboardingStore;
  pedometer: IPedometerStore;
  streaks: IStreaksStore;
  theme: IThemeStore;
  user: IUserStore;
  copy: ICopyStore;
  dailyMeditation: IDailyMeditationStore;
  dailyCycling: IDailyCyclingStore;
  sdui: ISduiStore;
  fitkit: IFitkitStore;
  adBanners: IAdBannersStore;
  quests: IQuestStore;
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
  theme: getInitialThemeState(),
  user: getInitialUserState(),
  copy: getInitialCopyState(),
  dailyMeditation: getInitialDailyMeditation(),
  dailyCycling: getInitialDailyCycling(),
  sdui: getInitialSduiState(),
  fitkit: getInitialFitkitState(),
  adBanners: getInitialAdbannersState(),
  quests: getInitialQuestState(),
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
  theme: themeReducer,
  user: userReducer,
  copy: copyReducer,
  dailyMeditation: dailyMeditationReducer,
  dailyCycling: dailyCyclingReducer,
  sdui: sduiReducer,
  fitkit: fitkitReducer,
  adBanners: adBannersReducer,
  quests: questsReducer,
});

export default combinedReducers;
