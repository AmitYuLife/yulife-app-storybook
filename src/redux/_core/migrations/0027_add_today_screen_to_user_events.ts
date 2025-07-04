import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

type State = PersistedState & IReduxState;

export default (state: State): State => {
  // we decided not to store user.todayScreen in Redux and this change never reached production
  // so we can just return the same state
  return state;
};
