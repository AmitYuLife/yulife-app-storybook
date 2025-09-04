import { IModalQueueItem, RemoveModalFromQueuePayload } from "@redux/modal/modal.types";
import { createAction } from "@reduxjs/toolkit";

export const ADD_MODAL_TO_QUEUE = "ADD_MODAL_TO_QUEUE";
export const REMOVE_MODAL_FROM_QUEUE = "REMOVE_MODAL_FROM_QUEUE";

export const addModalToQueue = createAction<IModalQueueItem, typeof ADD_MODAL_TO_QUEUE>(ADD_MODAL_TO_QUEUE);

export const removeModalFromQueue = createAction<RemoveModalFromQueuePayload, typeof REMOVE_MODAL_FROM_QUEUE>(
  REMOVE_MODAL_FROM_QUEUE
);
