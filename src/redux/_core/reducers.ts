import { combineReducers } from "redux";
import dailyMeditationReducer, {
  IDailyMeditationStore,
  getInitialState as getInitialDailyMeditation,
} from "../daily-meditation/daily-meditation.reducer";

import appReducer, { IAppStore, getInitialState as getInitialAppState } from "../app/app.reducer";
import coinsReducer, { ICoinsStore, getInitialState as getInitialCoinsState } from "../coins/coins.reducer";
import avatarReducer, { IAvatarStore, getInitialMaleState } from "../avatar/avatar.reducer";
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
import productReducer, { getInitialState as getInitialProductState, IProductStore } from "../product/product.reducer";
import sduiReducer, { getInitialState as getInitialSduiState, ISduiStore } from "../server-driven-ui/sdui.reducer";

export interface IReduxState {
  app: IAppStore;
  coins: ICoinsStore;
  dailySteps: IDailyStepsStore;
  device: IDeviceStore;
  levels: ILevelsStore;
  onboarding: IOnboardingStore;
  product: IProductStore;
  pedometer: IPedometerStore;
  streaks: IStreaksStore;
  theme: IThemeStore;
  user: IUserStore;
  copy: ICopyStore;
  dailyMeditation: IDailyMeditationStore;
  avatar: IAvatarStore;
  sdui: ISduiStore;
}

export const initialState: IReduxState = {
  app: getInitialAppState(),
  coins: getInitialCoinsState(),
  dailySteps: getInitialDailyStepsState(),
  device: getInitialDeviceState(),
  levels: getInitialLevelsState(),
  onboarding: getInitialOnboardingState(),
  product: getInitialProductState(),
  pedometer: getInitialPedometerState(),
  streaks: getInitialStreaksState(),
  theme: getInitialThemeState(),
  user: getInitialUserState(),
  copy: getInitialCopyState(),
  dailyMeditation: getInitialDailyMeditation(),
  avatar: getInitialMaleState(),
  sdui: getInitialSduiState(),
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
  product: productReducer,
  pedometer: pedometerReducer,
  streaks: streaksReducer,
  theme: themeReducer,
  user: userReducer,
  copy: copyReducer,
  dailyMeditation: dailyMeditationReducer,
  avatar: avatarReducer,
  sdui: sduiReducer,
});

export default combinedReducers;
