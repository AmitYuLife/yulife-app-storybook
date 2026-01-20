import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (
  state: PersistedState &
    IReduxState & {
      levels: IReduxState["levels"] & { pathwaysChallengeAmountAvailable?: number };
    }
): PersistedState & IReduxState => {
  delete state.levels?.pathwaysChallengeAmountAvailable;
  return state;
};
