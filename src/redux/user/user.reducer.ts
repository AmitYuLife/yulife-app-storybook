import { MobileConsentInput } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";
// import { LOGIN_USER_SUCCESS, UPDATE_USER_CONSENT } from "./user.actions";

export interface IUserStore {
    consent: MobileConsentInput;
}

export const initialState: IUserStore = {
    consent: {}
};

const userReducer = (state: IUserStore = initialState, action: SyncAction): IUserStore => {
    switch (action.type) {

        // case LOGIN_USER_SUCCESS:
        //     return loginUserSuccess(state, action.payload);

        // case UPDATE_USER_CONSENT:
        //     return updateUserConsent(state, action.payload);

        default:
            return state;
    }
};

export default userReducer;

// const loginUserSuccess = (state: IUserStore, { loginUser }: LoginUser): IUserStore => ({
//     ...state,
//     consent: {
//         ...loginUser
//     }
// });

// const updateUserConsent = (state: IUserStore, { upsertMobileConsent }: UpdateMemberConsent): IUserStore => ({
//     ...state,
//     consent: {
//         ...upsertMobileConsent
//     }
// });
