import { logOutSuccess } from "../user/user.actions";
import { updateHintsSuccess as updateHintsSuccessAction, cycleHint as cycleHintAction } from "./hints.actions";
import { ICycleHintPayload, IGetHintsSuccessPayload, IHintsStore } from "./hints.types";
import { createReducer } from "@reduxjs/toolkit";

export const getInitialState = (): IHintsStore => ({
  hints: [],
  shownHints: [],
});

const hintsReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(logOutSuccess, getInitialState);
  builder.addCase(updateHintsSuccessAction, (state, action) => updateHintsSuccess(state, action.payload));
  builder.addCase(cycleHintAction, (state, action) => cycleHint(state, action.payload));
  builder.addDefaultCase((state) => state);
});

const updateHintsSuccess = (state: IHintsStore, payload: IGetHintsSuccessPayload) => ({
  ...state,
  hints: payload.hints,
});

const cycleHint = (state: IHintsStore, payload: ICycleHintPayload) => {
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
