import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  dailyMeditation: {
    ...state.dailyMeditation,
    inAppMeditationLastUpdated: state.dailyMeditation.inAppMeditationLastUpdated || "",
  },
});
