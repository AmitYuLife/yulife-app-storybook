import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";

// legacy
export const getCopy = <Key extends keyof IReduxState["copy"]["screens"]>({ copy }: IReduxState, screen: Key) =>
  copy.screens[screen];

// main
type State = IReduxState["copy"];
const reducer = (state: IReduxState) => state.copy;

const versionSelector = (state: State) => state.version;
export const getCopyVersion = createSelector(reducer, versionSelector);

// screen specifics

type ScreensState = IReduxState["copy"]["screens"];
const screensReducer = (state: IReduxState) => state.copy.screens;

const settingsCopySelector = (state: ScreensState) => state.settingsInfo;
export const getSettingsCopy = createSelector(screensReducer, settingsCopySelector);

const loginCopySelector = (state: ScreensState) => state.login;
export const getLoginCopy = createSelector(screensReducer, loginCopySelector);

const leaderboardsCopySelector = (state: ScreensState) => state.leaderboards;
export const getLeaderboardsCopy = createSelector(screensReducer, leaderboardsCopySelector);

const pushNotificationsCopySelector = (state: ScreensState) => state.pushNotification;
export const getPushNotificationsCopy = createSelector(screensReducer, pushNotificationsCopySelector);

const purchasesCopySelector = (state: ScreensState) => state.purchases;
export const getPurchasesCopy = createSelector(screensReducer, purchasesCopySelector);

const notEnoughCoinsAlertCopySelector = (state: ScreensState) => state.rewardsDetails.notEnoughCoinsAlert;
export const getNotEnoughCoinsAlertCopy = createSelector(screensReducer, notEnoughCoinsAlertCopySelector);

const fitKitConnectCopySelector = (state: ScreensState) => state.fitkitConnect;
export const getFitKitConnectCopy = createSelector(screensReducer, fitKitConnectCopySelector);

// challenge specifics

type ChallengesScreensState = IReduxState["copy"]["screens"]["challenges"];
const challengesReducer = (state: IReduxState) => state.copy.screens.challenges;

const challengeExitCopySelector = (state: ChallengesScreensState) => state.exitChallenge;
export const getChallengeExitCopy = createSelector(challengesReducer, challengeExitCopySelector);
