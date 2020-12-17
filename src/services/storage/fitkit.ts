import Logger from "@services/logging/logger";
import AsyncStorage from "@react-native-community/async-storage";

const FITKIT_KEY = "@Store:fitkit";

export async function setFitkitPermission(fitkitPermision: string): Promise<void> {
  try {
    await AsyncStorage.setItem(FITKIT_KEY, fitkitPermision);
  } catch (e) {
    Logger.error(e, { event: "setFitkitPermissions" });
  }
}

export async function getFitkitPermission(): Promise<string | null> {
  try {
    const fitkitPermision = await AsyncStorage.getItem(FITKIT_KEY);
    return fitkitPermision;
  } catch (e) {
    Logger.error(e, { event: "getFitkitPermissions" });
    return null;
  }
}
