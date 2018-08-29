import { IReduxState } from "../_core/reducers";

export const getUserConsent = (state: IReduxState) => state.user.consent;
