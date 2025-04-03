import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (
  state: PersistedState &
    IReduxState & {
      user: IReduxState["user"] & { notification: IReduxState["user"]["notification"] & { hasAddBanner: boolean } };
    }
): PersistedState & IReduxState => {
  delete state.user?.notification?.hasAddBanner;
  return state;
};
