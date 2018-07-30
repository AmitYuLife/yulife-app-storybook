import { loginUser_loginUser_user_userStatus } from "../graphql/_core/schema";

export type IUserStatusState = Partial<loginUser_loginUser_user_userStatus>;

export const EmptyStatus: IUserStatusState = {
    totalCoins: null,
    challenges: null,
};
