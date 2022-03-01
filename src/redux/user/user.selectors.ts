import { createSelector } from "reselect";
import {
  GetCurrentUser_getCurrentUser_connections,
  GetCurrentUser_getCurrentUser_leaderboards,
} from "@graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type Connection = GetCurrentUser_getCurrentUser_connections;
export type Leaderboard = GetCurrentUser_getCurrentUser_leaderboards;

type State = IReduxState["user"];
const reducer = (state: IReduxState) => state.user;

const userSessionCountSelector = (state: State) => state.sessionCount;
export const getUserSessionCount = createSelector(reducer, userSessionCountSelector);

const isUserArchivedSelector = (state: State) => state.archived;
export const getIsUserArchived = createSelector(reducer, isUserArchivedSelector);

const userConnectionsSelector = (state: State) => state.connections;
export const getUserConnections = createSelector(reducer, userConnectionsSelector);

const userConsentSelector = (state: State) => state.consent;
export const getUserConsent = createSelector(reducer, userConsentSelector);

const userFeaturesSelector = (state: State) => state.features;
export const getUserFeatures = createSelector(reducer, userFeaturesSelector);

const allLeaderboardsSelector = (state: State) => state.leaderboards;
export const getAllLeaderboards = createSelector(reducer, allLeaderboardsSelector);

const visiblePopupsSelector = (state: State) => state.popupVisibility;
export const getVisiblePopups = createSelector(reducer, visiblePopupsSelector);

const surgeIntroSelector = (state: State) => state.surgeIntro;
export const getSurgeIntro = createSelector(reducer, surgeIntroSelector);

const userBusinessSelector = (state: State) => state.business;
export const getUserBusiness = createSelector(reducer, userBusinessSelector);

const userFirstNameSelector = (state: State) => state.firstName;
export const getUserFirstName = createSelector(reducer, userFirstNameSelector);

const userLastNameSelector = (state: State) => state.lastName;
export const getUserLastName = createSelector(reducer, userLastNameSelector);

const userNameSelector = (state: State) => state.firstName + " " + state.lastName;
export const getUserName = createSelector(reducer, userNameSelector);

const userDateOfBirthSelector = (state: State) => state.dateOfBirth;
export const getUserDateOfBirth = createSelector(reducer, userDateOfBirthSelector);

const userMembershipTypeSelector = (state: State) => state.membershipType;
export const getUserMembershipType = createSelector(reducer, userMembershipTypeSelector);

const acceptedLeaderboardsSelector = (state: State) => state.leaderboards.filter((l) => l.hasAccepted);
export const getAcceptedLeaderboards = createSelector(reducer, acceptedLeaderboardsSelector);

const activeLeaderboardIdSelector = (state: State) => state.activeLeaderboardId;
export const getActiveLeaderboardId = createSelector(reducer, activeLeaderboardIdSelector);

const activeLeaderboardSelector = (state: State) =>
  state.leaderboards.find((leaderboard) => leaderboard.leaderboardId === state.activeLeaderboardId);
export const getActiveLeaderboard = createSelector(reducer, activeLeaderboardSelector);

const currentUserIdSelector = (state: State) => state.id;
export const getCurrentUserId = createSelector(reducer, currentUserIdSelector);

const businessLeaderboardConsentSelector = (state: State) => !!state.leaderboards.find(checkIsCompanyLeaderbaord);
export const hasBusinessLeaderboardConsent = createSelector(reducer, businessLeaderboardConsentSelector);

const userSurge = (state: State) => state.surge;
export const getUserSurge = createSelector(reducer, userSurge);

const userAvatar = (state: State) => state.avatar;
export const getUserAvatar = createSelector(reducer, userAvatar);

const userPassiveChallengesLastUpdate = (state: State) => state.passiveChallengesLastUpdate;
export const getUserPassiveChallengesLastUpdate = createSelector(reducer, userPassiveChallengesLastUpdate);

const userEndPointsVersion = (state: State) => state.endPointsVersion;
export const getUserEndPointsVersion = createSelector(reducer, userEndPointsVersion);

const userEarnRate = (state: State) => state.earnRate;
export const getUserEarnRate = createSelector(reducer, userEarnRate);

const userNotification = (state: State) => state.notification;
export const getUserNotification = createSelector(reducer, userNotification);

const consentedLeaderboardsSelector = (state: State) =>
  state.leaderboards.reduce((prev: Leaderboard[], curr) => {
    if (checkIsCompanyLeaderbaord(curr)) {
      return [curr, ...prev];
    }

    if (curr.consent) {
      return [...prev, curr];
    }

    return prev;
  }, []);
export const getConsentedLeaderboards = createSelector(reducer, consentedLeaderboardsSelector);

// helpers
const checkIsCompanyLeaderbaord = (board: GetCurrentUser_getCurrentUser_leaderboards) =>
  // company leaderboard has 32 chars (and it should be first), custom leaderboards have 38
  !!(board.leaderboardId && board.leaderboardId.length === 32 && board.consent);
