import { createSelector } from "@reduxjs/toolkit";
import { IModalQueueItem, IModalStore } from "./modal.types";
import { IReduxState } from "@redux/_core/reducers";

const reducer = (state: IReduxState): IModalStore => state.modal;

const modalsQueueSelector = (state: IModalStore): IModalQueueItem[] => state.queue;
export const getModalsQueue = createSelector(reducer, modalsQueueSelector);
