import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  levels: {
    ...state.levels,
    active: {
      ...(state.levels?.active || ({} as IReduxState["levels"]["active"])),
      yuniversalMap: state.levels?.active?.levelSlotId ? state.levels?.yuniversalMap : null,
    },
  },
});
