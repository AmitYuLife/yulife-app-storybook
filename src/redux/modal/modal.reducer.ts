import { IModalStore } from "@redux/modal/modal.types";
import { createReducer } from "@reduxjs/toolkit";
import { IModalQueueItem } from "./modal.types";
import {
  addModalToQueue as addModalToQueueAction,
  removeModalFromQueue as removeModalFromQueueAction,
} from "./modal.actions";
import { MODALS } from "@navigation/constants";

export const MODALS_PRIORITIES = {
  [MODALS.chest]: 1,
  [MODALS.streaks]: 2,
};

export const getInitialState = (): IModalStore => ({
  queue: [],
});

const modalReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(addModalToQueueAction, (state, action) => addModalToQueue(state, action.payload));
  builder.addCase(removeModalFromQueueAction, (state, action) => removeModalFromQueue(state, action.payload));

  builder.addDefaultCase((state) => state);
});

const addModalToQueue = (state: IModalStore, payload: IModalQueueItem[]): IModalStore => {
  const newQueue = state.queue.concat(payload).sort((a, b) => b.priority - a.priority);
  return {
    ...state,
    queue: newQueue,
  };
};

const removeModalFromQueue = (state: IModalStore, { id }: { id: string }): IModalStore => {
  const newQueue = state.queue.filter((modal) => modal.id !== id);

  return {
    ...state,
    queue: newQueue,
  };
};

export default modalReducer;
