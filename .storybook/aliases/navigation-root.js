/* eslint-disable @typescript-eslint/no-empty-function */

const noop = () => undefined;

const label = (id, name) => ({ id, name, onPress: noop });

/** Minimal navigation root stub for Storybook — avoids circular imports from deep-link actions. */
export const labels = [
  label("yulife.member.DailySteps", "dailySteps"),
  label("yulife.member.Quests", "quests"),
  label("yulife.member.Yuscreen", "yuScreen"),
  label("yulife.member.Leaderboards", "leaderboard"),
  label("yulife.member.Rewards", "rewards"),
];

export const TAB_ROUTES = labels.map(({ id }) => id);

export const getMenuSide = () => "left";

export const generateOnLeftMenuPress = () => noop;

export const setAuthenticatedRoot = async () => undefined;

export const setUnauthenticatedRoot = async () => undefined;

export const showYuModal = async () => undefined;

export const pushToScreen = noop;

export const pushScreenFromActiveRoute = noop;

export const showAppReviewModal = async () => undefined;

export const showUpdateAppModal = async () => undefined;

export const setForceUpdateRoot = async () => undefined;

export const setNoAccessRoot = async () => undefined;

export const setOfflineRoot = async () => undefined;

export const setDuelsScreen = async () => undefined;

export const expireSession = async () => undefined;
