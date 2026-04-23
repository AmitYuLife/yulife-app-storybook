import Logger from "@services/logger/logger";
import { AppState, Platform } from "react-native";
import { Storage, EncryptedStorageKey } from "@utils/storage";

class TokenService {
  private tempToken: string | null = null;

  public setToken = async (token: string): Promise<void> => {
    try {
      await Storage.setEncryptedItem(EncryptedStorageKey.token, token);
      this.tempToken = token;
    } catch (e) {
      if (this.shouldLogError()) {
        Logger.notify(e, { event: "EncryptedStorage:setToken" });
      }
    }
  };

  public getToken = async (): Promise<string> => {
    try {
      if (this.tempToken) {
        return this.tempToken;
      }

      const securedToken = await Storage.getEncryptedItem(EncryptedStorageKey.token);

      this.tempToken = securedToken;
      return securedToken;
    } catch (e) {
      if (this.shouldLogError()) {
        Logger.notify(e, { event: "EncryptedStorage:getToken" });
      }

      return null;
    }
  };

  public clearToken = async (): Promise<void> => {
    try {
      this.tempToken = null;
      await Storage.removeEncryptedItem(EncryptedStorageKey.token);
    } catch (e) {
      if (this.shouldLogError()) {
        Logger.notify(e, { event: "EncryptedStorage:clearToken" });
      }

      return;
    }
  };

  /**
   * iOS cannot access the encrypted storage while the app is on background
   * only log errors for ios on active state and android in any state
   */
  private shouldLogError = (): boolean => {
    return Platform.select({ android: true, ios: AppState.currentState === "active" });
  };
}

export const tokenService = new TokenService();

export const getToken = tokenService.getToken;
export const setToken = tokenService.setToken;
export const clearToken = tokenService.clearToken;
