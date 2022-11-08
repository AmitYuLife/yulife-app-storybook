import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (
  state: PersistedState & IReduxState & { user: IReduxState["user"] & { business: unknown } }
): PersistedState & IReduxState & { user: IReduxState["user"] } => {
  delete state.user?.business;
  return state;
};
