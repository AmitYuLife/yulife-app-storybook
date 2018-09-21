import { IReduxState } from "../_core/reducers";

export const userConsentSelector = (state: IReduxState) => state.user.consent;
