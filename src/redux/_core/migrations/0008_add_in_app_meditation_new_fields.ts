import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

interface OldDailyMeditationTypes {
  dailyMeditation: IReduxState["dailyMeditation"] & {
    inAppMeditationLastUpdated: string;
    inAppDailyMeditation: number;
  };
}
export default (state: PersistedState & IReduxState & OldDailyMeditationTypes): PersistedState & IReduxState => ({
  ...state,
  dailyMeditation: {
    ...state.dailyMeditation,
    inAppMeditation: {
      lastUpdated: state.dailyMeditation?.inAppMeditationLastUpdated || "",
      duration: state.dailyMeditation?.inAppDailyMeditation || 0,
      createdAt: null,
      date: null,
    },
  },
});
