import { createSelector } from "reselect";
import moment from "moment";
import { IReduxState } from "../_core/reducers";

export interface IStreaks {
  currentStreak: number;
  isAvailable: boolean;
  isDoneToday: boolean;
  maxStreak: number;
  nextStreakAvailableAt: string;
  reward: string;
  type: string;
}

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
