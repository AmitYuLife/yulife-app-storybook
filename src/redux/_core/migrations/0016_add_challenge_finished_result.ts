import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  levels: {
    ...state.levels,
    challengeFinishedResult: !state.levels.active.status
      ? null
      : {
          unit: state.levels.active.unit,
          level: state.levels.active.level,
          score: state.levels.active.score,
          coins: state.levels.active.coins,
          rating: state.levels.active.rating,
          status: state.levels.active.status,
        },
  },
});
