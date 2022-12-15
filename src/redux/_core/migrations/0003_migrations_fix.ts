import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => {
  const inAppMeditationLastUpdated =
    typeof state.dailyMeditation?.inAppMeditationLastUpdated === "string"
      ? state.dailyMeditation?.inAppMeditationLastUpdated
      : "";

  return {
    ...state,
    dailyMeditation: {
      ...state?.dailyMeditation,
      inAppMeditationLastUpdated,
    },
  };
};
