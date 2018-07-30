import { loginUser_loginUser_user } from "../graphql/_core/schema";

export interface IUserFeaturesState {
    [id: string]: boolean;
}

export const EmptyFeatures: IUserFeaturesState = {};
