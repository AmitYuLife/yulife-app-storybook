import { GetCurrentUser, LoginUser, MobileConsentInput } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";
import {
    GET_USER_SUCCESS,
    LOGIN_USER_SUCCESS
    // UPDATE_USER_CONSENT
} from "./user.actions";

export interface IUserStore {
    consent: MobileConsentInput;
}

export const initialState: IUserStore = {
    consent: {}
};

const userReducer = (state: IUserStore = initialState, action: SyncAction): IUserStore => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);

        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);

        // case UPDATE_USER_CONSENT:
        //     return updateUserConsent(state, action.payload);

        default:
            return state;
    }
};

export default userReducer;

const getUserSuccess = (state: IUserStore, { getCurrentUser: { mobileConsent } }: GetCurrentUser): IUserStore => ({
    ...state,
    consent: {
        ...mobileConsent
    }
});

const loginUserSuccess = (
    state: IUserStore,
    {
        loginUser: {
            user: { mobileConsent }
        }
    }: LoginUser
): IUserStore => ({
    ...state,
    consent: {
        ...mobileConsent
    }
});

// const updateUserConsent = (state: IUserStore, { upsertMobileConsent }: UpdateMemberConsent): IUserStore => ({
//     ...state,
//     consent: {
//         ...upsertMobileConsent
//     }
// });
