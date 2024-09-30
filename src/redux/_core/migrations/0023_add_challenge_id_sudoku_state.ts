import { PersistedState } from "redux-persist";
import { IReduxState } from "../reducers";

export default (state: PersistedState & IReduxState): PersistedState & IReduxState => ({
  ...state,
  sudoku: {
    ...state.sudoku,
    challengeId: state?.levels?.active?.levelSlotTemplateId === "SUDOKU_001" ? state?.levels?.active?.id || "" : "",
  },
});
