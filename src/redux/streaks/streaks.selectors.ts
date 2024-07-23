import { createSelector } from "@reduxjs/toolkit";
import moment from "moment";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["streaks"];
const reducer = (state: IReduxState) => state.streaks;

const streakAwardIdSelector = (state: State) => state.streakAwardId;
export const getStreakAwardId = createSelector(reducer, streakAwardIdSelector);

const streaksSelector = (state: State) => ({
  currentStreak: state.streak,
  isAvailable: state.isAvailable,
  isDoneToday: moment().add(1, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss") <= state.nextStreakAvailableAt,
  maxStreak: state.maxStreak,
  nextStreakAvailableAt: state.nextStreakAvailableAt,
  reward: state.value,
  type: state.type,
  canUseStreakSaver: state.canUseStreakSaver,
  availableStreakSavers: state.availableStreakSavers,
});
export const getStreaks = createSelector(reducer, streaksSelector);
