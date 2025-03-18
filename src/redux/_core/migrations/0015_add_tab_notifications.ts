import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (
  state: PersistedState & IReduxState
): PersistedState & IReduxState & { user: IReduxState["user"] & { tabNotifications: string[] } } => ({
  ...state,
  user: {
    ...state.user,
    tabNotifications: [],
  },
});
