import { combineReducers } from "redux";
import dailyMeditationReducer, {
  IDailyMeditationStore,
  initialState as initialDailyMeditation,
} from "../daily-meditation/daily-meditation.reducer";

import appReducer, { IAppStore, initialState as initialAppState } from "../app/app.reducer";
import coinsReducer, { ICoinsStore, initialState as initialCoinsState } from "../coins/coins.reducer";
import avatarReducer, { IAvatarStore, initialMaleState as initialStateAvatar } from "../avatar/avatar.reducer";
import copyReducer, { ICopyStore, initialState as initialCopyState } from "../copy/copy.reducer";
import dailyStepsReducer, {
  IDailyStepsStore,
  initialState as initialDailyStepsState,
} from "../daily-steps/daily-steps.reducer";
import deviceReducer, { IDeviceStore, initialState as initialDeviceState } from "../device/device.reducer";
import levelsReducer, { ILevelsStore, initialState as initialLevelsState } from "../levels/levels.reducer";
import notificationsReducer, {
  initialState as initialNotificationsState,
  INotificationsStore,
} from "../notifications/notifications.reducer";
import onboardingReducer, {
  initialState as initialOnboardingState,
  IOnboardingStore,
} from "../onboarding/onboarding.reducer";
import pedometerReducer, {
  initialState as initialPedometerState,
  IPedometerStore,
} from "../pedometer/pedometer.reducer";
import streaksReducer, { initialState as initialStreaksState, IStreaksStore } from "../streaks/streaks.reducer";
import themeReducer, { initialState as initialThemeState, IThemeStore } from "../theme/theme.reducer";
import userReducer, { initialState as initialUserState, IUserStore } from "../user/user.reducer";
import productReducer, { initialState as initialProductState, IProductStore } from "../product/product.reducer";
import avatarCacheReducer, {
  initialState as initialAvatarCacheState,
  IAvatarCacheStore,
} from "../avatar-cache/avatar-cache.reducer";

export interface IReduxState {
  app: IAppStore;
  coins: ICoinsStore;
  dailySteps: IDailyStepsStore;
  device: IDeviceStore;
  levels: ILevelsStore;
  notifications: INotificationsStore;
  onboarding: IOnboardingStore;
  product: IProductStore;
  pedometer: IPedometerStore;
  streaks: IStreaksStore;
  theme: IThemeStore;
  user: IUserStore;
  copy: ICopyStore;
  dailyMeditation: IDailyMeditationStore;
  avatar: IAvatarStore;
  avatarCache: IAvatarCacheStore;
}

export const initialState: IReduxState = {
  app: initialAppState,
  coins: initialCoinsState,
  dailySteps: initialDailyStepsState,
  device: initialDeviceState,
  levels: initialLevelsState,
  notifications: initialNotificationsState,
  onboarding: initialOnboardingState,
  product: initialProductState,
  pedometer: initialPedometerState,
  streaks: initialStreaksState,
  theme: initialThemeState,
  user: initialUserState,
  copy: initialCopyState,
  dailyMeditation: initialDailyMeditation,
  avatar: initialStateAvatar,
  avatarCache: initialAvatarCacheState,
};

// this alias is created for testing purposes
export const testInitialState = initialState;

const combinedReducers = combineReducers({
  app: appReducer,
  coins: coinsReducer,
  dailySteps: dailyStepsReducer,
  device: deviceReducer,
  levels: levelsReducer,
  notifications: notificationsReducer,
  onboarding: onboardingReducer,
  product: productReducer,
  pedometer: pedometerReducer,
  streaks: streaksReducer,
  theme: themeReducer,
  user: userReducer,
  copy: copyReducer,
  dailyMeditation: dailyMeditationReducer,
  avatar: avatarReducer,
  avatarCache: avatarCacheReducer,
});

export default combinedReducers;
