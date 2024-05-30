import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  user: {
    ...state.user,
    heroCards: state.user.heroCards ?? [],
  },
});
