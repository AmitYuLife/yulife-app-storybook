import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (
  state: PersistedState & IReduxState & { user: IReduxState["user"] & { popupVisibility: unknown } }
): PersistedState & IReduxState => {
  delete state.user?.popupVisibility;
  return state;
};
