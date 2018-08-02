// TODO fix console.logs
// tslint:disable:no-console
import { AsyncStorage } from "react-native";

const TOKEN_KEY = "@Store:token";

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
