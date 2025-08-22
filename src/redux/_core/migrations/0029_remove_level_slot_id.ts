import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (
  state: PersistedState &
    IReduxState & {
      levels: IReduxState["levels"] & { active: IReduxState["levels"]["active"] & { levelSlotId: string } };
    }
): PersistedState & IReduxState => {
  delete state.levels?.active?.levelSlotId;
  return state;
};
