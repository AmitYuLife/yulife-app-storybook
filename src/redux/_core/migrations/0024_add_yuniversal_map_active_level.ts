import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

type State = PersistedState &
  IReduxState & {
    levels: IReduxState["levels"] & { active: IReduxState["levels"]["active"] & { levelSlotId: string } };
  };

export default (state: State): State => ({
  ...state,
  levels: {
    ...state.levels,
    active: {
      ...(state.levels?.active || ({} as IReduxState["levels"]["active"] & { levelSlotId: string })),
      yuniversalMap: state.levels?.active?.levelSlotId ? state.levels?.yuniversalMap : null,
    },
  },
});
