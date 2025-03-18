import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (
  state: PersistedState & IReduxState & { user: IReduxState["user"] & { tabNotifications: string[] } }
): PersistedState & IReduxState => {
  delete state?.user?.tabNotifications;
  return state;
};
