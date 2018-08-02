import { AsyncStorage } from "react-native";
import { IUserFeaturesState } from "../../context/features";
import {
    loginUser_loginUser_user,
    loginUser_loginUser_user_userFeatures,
    loginUser_loginUser_user_userStatus,
} from "../../graphql/_core/schema";

const USER_KEY = "@Store:user";
const FEATURES_KEY = "@Store:features";
const STATUS_KEY = "@Store:status";

export async function setUserStatus(userStatus: Partial<loginUser_loginUser_user_userStatus>) {
    try {
        const currentStatusJSON = await AsyncStorage.getItem(STATUS_KEY);
        const currentStatus = currentStatusJSON ? JSON.parse(currentStatusJSON) : {};

        await AsyncStorage.setItem(USER_KEY, JSON.stringify({ ...currentStatus, ...userStatus }));
    } catch (e) {
        console.log(e);
    }
}

export async function setUserFeatures(features: loginUser_loginUser_user_userFeatures[]) {
    try {
        const currentFeaturesJSON = await AsyncStorage.getItem(FEATURES_KEY);
        const currentFeatures = currentFeaturesJSON ? JSON.parse(currentFeaturesJSON) : {};

        const userFeatures = features.reduce((accumulator: IUserFeaturesState, item) => {
            accumulator[item.name] = item.value;
            return accumulator;
        }, {});

        await AsyncStorage.setItem(USER_KEY, JSON.stringify({ ...currentFeatures, ...userFeatures }));
    } catch (e) {
        console.log(e);
    }
}

export async function setUser({
    __typename,
    userFeatures,
    userStatus,
    ...user
}: Partial<loginUser_loginUser_user>): Promise<void> {
    try {
        if (userStatus) {
            await setUserStatus(userStatus);
        }

        if (userFeatures) {
            await setUserFeatures(userFeatures);
        }

        const currentUserJSON = await AsyncStorage.getItem(USER_KEY);
        const currentUser = currentUserJSON ? JSON.parse(currentUserJSON) : {};

        await AsyncStorage.setItem(USER_KEY, JSON.stringify({ ...currentUser, ...user }));
    } catch (e) {
        console.log(e);
    }
}

export async function getUser(): Promise<Partial<loginUser_loginUser_user> | null> {
    try {
        const result = await AsyncStorage.getItem(USER_KEY);
        return result ? JSON.parse(result) : null;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getUserStatus(): Promise<Partial<loginUser_loginUser_user_userStatus> | null> {
    try {
        const result = await AsyncStorage.getItem(STATUS_KEY);
        return result ? JSON.parse(result) : null;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getUserFeatures(): Promise<IUserFeaturesState | null> {
    try {
        const result = await AsyncStorage.getItem(STATUS_KEY);
        return result ? JSON.parse(result) : null;
    } catch (e) {
        console.log(e);
        return null;
    }
}
