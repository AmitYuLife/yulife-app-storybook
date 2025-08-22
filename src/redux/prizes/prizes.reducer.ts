import { createReducer } from "@reduxjs/toolkit";
import {
  addPrizeHintToQueue as addPrizeHintToQueueAction,
  clearCurrentPrizeHint as clearCurrentPrizeHintAction,
  prizeTypeExplained,
} from "./prizes.actions";
import { IPrizesStore, AddPrizeHintToQueuePayload, IPrizeExplainedPayload } from "./prizes.types";
import { logOutSuccess } from "@redux/user/user.actions";
import { AUTHENTICATED } from "@redux/app/app.actions";

export const getInitialPrizesState = (): IPrizesStore => ({
  prizeHintQueue: [],
  currentPrizeHint: null,
  explainedPrizeTypeCounts: {},
});

const prizesReducer = createReducer(getInitialPrizesState(), (builder) => {
  builder.addCase(logOutSuccess, getInitialPrizesState);
  builder.addCase(AUTHENTICATED, (state) => resetPrizeHints(state));
  builder.addCase(prizeTypeExplained, (state, action) => setPrizeTypeExplained(state, action.payload));
  builder.addCase(addPrizeHintToQueueAction, (state, action) => addPrizeHintToQueue(state, action.payload));
  builder.addCase(clearCurrentPrizeHintAction, (state) => clearCurrentPrizeHint(state));
  builder.addDefaultCase((state) => state);
});

const resetPrizeHints = (state: IPrizesStore): IPrizesStore => ({
  ...state,
  currentPrizeHint: null,
  prizeHintQueue: [],
});

const setPrizeTypeExplained = (state: IPrizesStore, payload: IPrizeExplainedPayload) => ({
  ...state,
  explainedPrizeTypeCounts: {
    ...state.explainedPrizeTypeCounts,
    // Keep a track of how many times a prize type has been explained in case we want to hide it after a certain number of times in the future
    [payload.prizeType]: (state.explainedPrizeTypeCounts?.[payload.prizeType] || 0) + 1,
  },
});

// Add a hint to the queue if it doesn't have a route or if the current hint doesn't have a route
const addPrizeHintToQueue = (state: IPrizesStore, { hint }: AddPrizeHintToQueuePayload): IPrizesStore => {
  // Generate a key for the route IDs that this hint needs (eg [QUESTS,YUSCREEN])
  const routeKey = (hint.routeIds || []).join(",");
  const queue = state.prizeHintQueue || [];

  // Check if this exact key is already in the queue
  const queueHasRoute = queue.some((item) => (item.routeIds || []).join(",") === routeKey);
  // If there's a prize hint being shown, check if it has the same route key as we're trying to add
  const currentHasRoute = state.currentPrizeHint && (state.currentPrizeHint.routeIds || []).join(",") === routeKey;

  // Stop if it's a duplicate
  if (queueHasRoute || currentHasRoute) {
    return state;
  }

  // If there's a prize hint being shown, add it to the queue, otherwise just show it
  return state.currentPrizeHint ? { ...state, prizeHintQueue: [...queue, hint] } : { ...state, currentPrizeHint: hint };
};

const clearCurrentPrizeHint = (state: IPrizesStore): IPrizesStore => {
  if (!state.currentPrizeHint) {
    return state;
  }

  const queue = state.prizeHintQueue || [];
  const [nextHint, ...remainingQueue] = queue;

  return {
    ...state,
    currentPrizeHint: nextHint,
    prizeHintQueue: remainingQueue,
  };
};

export default prizesReducer;
