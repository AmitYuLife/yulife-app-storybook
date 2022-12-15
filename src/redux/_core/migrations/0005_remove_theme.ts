import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState & { theme: unknown }): PersistedState & IReduxState => {
  delete state?.theme;
  return state;
};
