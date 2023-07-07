import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";
import moment from "moment";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  coins: {
    ...state.coins,
    dailyPensionEarned: 0,
  },
  dailyPension: {
    active: false,
    yuCoinAwarded: 0,
    contribution: "",
    lastUpdated: moment().startOf("day").format(),
  },
});
