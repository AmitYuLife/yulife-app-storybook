import { LoginUser, MobileConsentInput } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";

export const FITKIT_CONSENT_AUTHORISED = "FITKIT_CONSENT_AUTHORISED";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const UPDATE_USER_CONSENT = "UPDATE_USER_CONSENT";

export const fitKitConsentAuthorised = (): SyncAction => ({
    type: FITKIT_CONSENT_AUTHORISED
});

export type LoginUserSuccessAction = SyncAction<LoginUser>;
export const loginUserSuccess = (payload: LoginUser): LoginUserSuccessAction => ({
    payload,
    type: LOGIN_USER_SUCCESS
});

export type MobileConsentAction = SyncAction<MobileConsentInput>;
export const updateUserConsent = (payload: MobileConsentInput): MobileConsentAction => ({
    payload,
    type: UPDATE_USER_CONSENT
});
