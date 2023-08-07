import EncryptedStorage from "react-native-encrypted-storage";
import Logger from "@services/logging/logger";
import { AppState, Platform } from "react-native";
import { Storage, StorageKey } from "@utils/storage";

class TokenService {
  private tempToken: string | null = null;
  // iOS cannot access the encrypted storage while the app is on background
  // only log errors for ios on active state and android in any state
  private shouldLogError = () => Platform.select({ android: true, ios: AppState.currentState === "active" });
  public setToken = async (token: string) => {
    try {
      await EncryptedStorage.setItem(StorageKey.token, token);
      this.tempToken = token;
    } catch (e) {
      if (this.shouldLogError()) {
        Logger.error(e, { event: "EncryptedStorage:setToken" });
      }
    }
  };

  public getToken = async () => {
    try {
      if (this.tempToken) {
        return this.tempToken;
      }

      const securedToken = await EncryptedStorage.getItem(StorageKey.token);

      if (!securedToken?.length) {
        const token = await Storage.getItem(StorageKey.token);
        this.tempToken = token;
        return token;
      }

      this.tempToken = securedToken;
      return securedToken;
    } catch (e) {
      if (this.shouldLogError()) {
        Logger.error(e, { event: "EncryptedStorage:getToken" });
      }

      return null;
    }
  };

  public clearToken = async () => {
    try {
      this.tempToken = null;
      await Storage.removeItem(StorageKey.token);
      await EncryptedStorage.removeItem(StorageKey.token);
    } catch (e) {
      if (this.shouldLogError()) {
        Logger.error(e, { event: "EncryptedStorage:clearToken" });
      }

      return;
    }
  };
}

export const tokenService = new TokenService();

export const getToken = tokenService.getToken;
export const setToken = tokenService.setToken;
export const clearToken = tokenService.clearToken;
