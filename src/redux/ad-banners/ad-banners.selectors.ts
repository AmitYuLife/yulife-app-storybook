import { IReduxState } from "@redux/_core/reducers";
import { createSelector } from "@reduxjs/toolkit";

type State = IReduxState["adBanners"];

const reducer = (state: IReduxState) => state.adBanners;
export const adBanners = (state: State) => state?.banners || [];
export const getAdBanners = createSelector(reducer, adBanners);
