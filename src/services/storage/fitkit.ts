// TODO fix console.logs
// tslint:disable:no-console
import { AsyncStorage } from "react-native";

const FITKIT_KEY = "@Store:fitkit";

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
