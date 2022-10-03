import AsyncStorage from "@react-native-community/async-storage";
import EncryptedStorage from "react-native-encrypted-storage";
import Logger from "@services/logging/logger";
import { AppState, Platform } from "react-native";

const TOKEN_KEY = "@Store:token";

export async function setToken(token: string): Promise<void> {
  try {
    await EncryptedStorage.setItem(TOKEN_KEY, token);
  } catch (e) {
    if (shouldLogError()) {
      Logger.error(e, { event: "EncryptedStorage:setToken" });
    }
  }
}

export async function getToken(): Promise<string | null> {
  try {
    const securedToken = await EncryptedStorage.getItem(TOKEN_KEY);

    if (!securedToken?.length) {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      return token;
    }

    return securedToken;
  } catch (e) {
    if (shouldLogError()) {
      Logger.error(e, { event: "EncryptedStorage:getToken" });
    }

    return null;
  }
}

export async function clearToken(): Promise<void> {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
    await EncryptedStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    if (shouldLogError()) {
      Logger.error(e, { event: "EncryptedStorage:clearToken" });
    }

    return;
  }
}

// iOS cannot access the encrypted storage while the app is on background
// only log errors for ios on active state and android in any state
const shouldLogError = () => Platform.select({ android: true, ios: AppState.currentState === "active" });
