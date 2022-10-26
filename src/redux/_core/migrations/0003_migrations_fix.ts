import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => {
  const dailyStepsScreen =
    state.theme?.dailyStepsScreen ||
    ((state.theme as any)?.dailyStepsScreenProps as IReduxState["theme"]["dailyStepsScreen"]);

  const inAppMeditationLastUpdated =
    typeof state.dailyMeditation?.inAppMeditationLastUpdated === "string"
      ? state.dailyMeditation?.inAppMeditationLastUpdated
      : "";

  return {
    ...state,
    theme: {
      ...state?.theme,
      dailyStepsScreen,
    },
    dailyMeditation: {
      ...state?.dailyMeditation,
      inAppMeditationLastUpdated,
    },
  };
};
