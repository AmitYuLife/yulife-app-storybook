import { AsyncStorage } from "react-native";

const TOKEN_KEY = "@Store:token";
const FITKIT_KEY = "@Store:fitkit";

export async function setToken(token: string): Promise<void> {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (e) {
        console.log(e);
    }
}

export async function getToken(): Promise<string | null> {
    try {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        return token;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function setFitkitPermission(fitkitPermision: string): Promise<void> {
    try {
        await AsyncStorage.setItem(FITKIT_KEY, fitkitPermision);
    } catch (e) {
        console.log(e);
    }
}

export async function getFitkitPermission(): Promise<string | null> {
    try {
        const fitkitPermision = await AsyncStorage.getItem(FITKIT_KEY);
        return fitkitPermision;
    } catch (e) {
        console.log(e);
        return null;
    }
}
