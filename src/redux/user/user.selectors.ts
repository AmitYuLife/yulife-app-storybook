import { IReduxState } from "../_core/reducers";

export const userConsentSelector = (state: IReduxState) => state.user.consent;
export const userFeaturesSelector = (state: IReduxState) => state.user.features;
