import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";
import { UserProfileEventStatus } from "./user.types";

type State = IReduxState["user"];
const reducer = (state: IReduxState) => state.user;

const userSessionCountSelector = (state: State) => state.sessionCount;
export const getUserSessionCount = createSelector(reducer, userSessionCountSelector);

const isUserArchivedSelector = (state: State) => state.archived;
export const getIsUserArchived = createSelector(reducer, isUserArchivedSelector);

const userConnectionsSelector = (state: State) => state.connections;
export const getUserConnections = createSelector(reducer, userConnectionsSelector);

const userFeaturesSelector = (state: State) => state.features;

/** Please only use userFeatures for temp toggles
 * More info: https://yu-life.slack.com/archives/GV7RV3HGV/p1733924385177939
 */
export const getUserFeatures = createSelector(reducer, userFeaturesSelector);

const userNameSelector = (state: State) => state.fullName;
export const getUserName = createSelector(reducer, userNameSelector);

const userFirstNameSelector = (state: State) => state.fullName;
export const getUserFirstName = createSelector(reducer, userFirstNameSelector);

const currentUserIdSelector = (state: State) => state.id;
export const getCurrentUserId = createSelector(reducer, currentUserIdSelector);

const supportLevelSelector = (state: State) => state.supportConfig?.supportLevel;
export const getSupportLevel = createSelector(reducer, supportLevelSelector);

const userSurge = (state: State) => state.surge;
export const getUserSurge = createSelector(reducer, userSurge);

const userAvatar = (state: State) => state.avatar;
export const getUserAvatar = createSelector(reducer, userAvatar);

const userPassiveChallengesLastUpdate = (state: State) => state.passiveChallengesLastUpdate;
export const getUserPassiveChallengesLastUpdate = createSelector(reducer, userPassiveChallengesLastUpdate);

const userPassiveHourlyActivityLastUpdate = (state: State) => state.passiveHourlyActivityLastUpdate;
export const getUserPassiveHourlyActivityLastUpdate = createSelector(reducer, userPassiveHourlyActivityLastUpdate);

const userEndPointsVersion = (state: State) => state.endPointsVersion;
export const getUserEndPointsVersion = createSelector(reducer, userEndPointsVersion);

const userEarnRate = (state: State) => state.earnRate;
export const getUserEarnRate = createSelector(reducer, userEarnRate);

const userNotification = (state: State) => state.notification;
export const getUserNotification = createSelector(reducer, userNotification);

const blackListedNavBarTabs = (state: State) => state.blackListedNavBarTabs || [];
export const getBlackListedNavBarTabs = createSelector(reducer, blackListedNavBarTabs);

const userEvents = (state: State) => state.events || [];
export const getUserEvents = createSelector(reducer, userEvents);

const userHeroCards = (state: State) => state.heroCards || [];
export const getUserHeroCards = createSelector(reducer, userHeroCards);

export const sessionTimestamp = (state: State) => state.sessionTimestamp;

export const getUserActiveEvents = createSelector(getUserEvents, (events) =>
  events.filter((event) => event.status !== UserProfileEventStatus.Completed)
);

const userDataSaverModeEnabled = (state: State) => state.dataSaverModeEnabled;
export const getUserDataSaverModeEnabled = createSelector(reducer, userDataSaverModeEnabled);
