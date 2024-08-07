import { createReducer } from "@reduxjs/toolkit";
import { addAdBanners } from "./ad-banners.actions";
import { IAdBannersStore } from "./ad-banners.types";

export const getInitialAdbannersState = (): IAdBannersStore => ({
  banners: [],
});

const adBannersReducer = createReducer(getInitialAdbannersState(), (builder) => {
  builder.addCase(addAdBanners, (state, action) => {
    state.banners = action.payload;
  });
  builder.addDefaultCase((state) => state);
});

export default adBannersReducer;
