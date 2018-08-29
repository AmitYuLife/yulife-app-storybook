import { LoginUser_loginUser_user_userStatus } from "../graphql/_core/schema";

export type IUserStatusState = Partial<LoginUser_loginUser_user_userStatus>;

export const EmptyStatus: IUserStatusState = {
    challenges: null,
    totalCoins: null
};
