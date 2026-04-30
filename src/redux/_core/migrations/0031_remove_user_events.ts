import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (
  state: PersistedState &
    IReduxState & {
      user: IReduxState["user"] & { events?: unknown[] };
    }
): PersistedState & IReduxState => {
  delete state.user?.events;
  return state;
};
