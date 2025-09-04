import { IModalStore } from "@redux/modal/modal.types";
import { createReducer } from "@reduxjs/toolkit";

export const getInitialState = (): IModalStore => ({
  queue: [],
});

const modalReducer = createReducer(getInitialState(), (builder) => {
  builder.addDefaultCase((state) => state);
});

export default modalReducer;
