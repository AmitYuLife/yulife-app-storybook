import { LOGOUT_SUCCESS } from "../user/user.actions";
import { SyncAction } from "@redux/_core/types";
import { CYCLE_HINT, UPDATE_HINTS_SUCCESS } from "./hints.actions";
import { IGetHintsSuccessPayload, IHint, IShownHint } from "./hints.types";

export interface IHintsStore {
  hints: IHint[];
  shownHints?: IShownHint[];
}

export const getInitialState = (): IHintsStore => ({
  hints: [],
  shownHints: [],
});

const hintsReducer = (state: IHintsStore = getInitialState(), action: SyncAction): IHintsStore => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return getInitialState();

    case UPDATE_HINTS_SUCCESS:
      return updateHintsSuccess(state, action.payload);

    case CYCLE_HINT: {
      return cycleHint(state, action.payload);
    }

    default:
      return state;
  }
};

const updateHintsSuccess = (state: IHintsStore, payload: IGetHintsSuccessPayload) => ({
  ...state,
  hints: payload.hints,
});

const cycleHint = (state: IHintsStore, payload: { shownHint: IHint }) => {
  if (!payload.shownHint) {
    return state;
  }

  const newShownHints = [...(state.shownHints ?? [])];
  const previouslyShownHint = newShownHints.findIndex((hint) => hint.id === payload.shownHint.id);
  const highestShowCount = newShownHints.reduce(
    (prev, current) => (prev > current.showCount ? prev : current.showCount),
    0
  );

  if (previouslyShownHint === -1) {
    newShownHints.push({
      id: payload.shownHint.id,
      showCount: highestShowCount + 1,
    });
  } else {
    newShownHints[previouslyShownHint].showCount = highestShowCount + 1;
  }

  return {
    ...state,
    shownHints: newShownHints,
  };
};

export default hintsReducer;
