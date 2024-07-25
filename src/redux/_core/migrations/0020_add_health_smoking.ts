import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  healthSmoking: {
    ...state.healthSmoking,
    smokingState: null,
  },
});
