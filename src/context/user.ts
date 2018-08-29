import { LoginUser_loginUser_user } from "../graphql/_core/schema";

export type IUserState = Partial<LoginUser_loginUser_user>;

export const EmptyUser: IUserState = {
    businessAccountId: null,
    id: null
};
