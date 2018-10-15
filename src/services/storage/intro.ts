import { AsyncStorage } from "react-native";

const INTRO_KEY = "@Store:intro";

export async function setIntro(): Promise<void> {
    try {
        await AsyncStorage.setItem(INTRO_KEY, "yes");
    } catch (e) {
        return;
    }
}

export async function getIntro(): Promise<boolean | null> {
    try {
        const status = await AsyncStorage.getItem(INTRO_KEY);
        return status === "yes";
    } catch (e) {
        return false;
    }
}

export async function clearIntro(): Promise<void> {
    try {
        await AsyncStorage.removeItem(INTRO_KEY);
    } catch (e) {
        return;
    }
}
