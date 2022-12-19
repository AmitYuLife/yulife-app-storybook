import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState & { copy: unknown }): PersistedState & IReduxState => {
  delete state?.copy;
  return state;
};
