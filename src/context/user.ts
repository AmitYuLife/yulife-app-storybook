import { loginUser_loginUser_user } from "../graphql/_core/schema";

export type IUserState = Partial<loginUser_loginUser_user>;

export const EmptyUser: IUserState = {
    id: null,
    businessAccountId: null,
    membershipType: null,
    email: null,
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    smokerStatus: null,
    bmi: null,
};
