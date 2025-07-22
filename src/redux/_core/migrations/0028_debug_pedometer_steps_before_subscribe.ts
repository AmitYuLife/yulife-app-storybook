import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  debugReducer: {
    ...state.debugReducer,
    historySteps: state.debugReducer.pedometerHistorySteps.map((step) => ({
      steps: step,
      stepsBeforeSubscribe: -1,
    })),
  },
});
