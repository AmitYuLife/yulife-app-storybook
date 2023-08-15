import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  user: {
    ...state.user,
    fullName: `${state.user.firstName} ${state.user.lastName}`,
  },
});
