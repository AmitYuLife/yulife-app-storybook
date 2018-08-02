import { loginUser_loginUser_user } from "../graphql/_core/schema";

export type IUserState = Partial<loginUser_loginUser_user>;

export const EmptyUser: IUserState = {
    bmi: null,
    businessAccountId: null,
    dateOfBirth: null,
    email: null,
    firstName: null,
    id: null,
    lastName: null,
    membershipType: null,
    smokerStatus: null,
};
