import AsyncStorage from "@react-native-community/async-storage";
import EncryptedStorage from "react-native-encrypted-storage";
import Logger from "@services/logging/logger";
import { AppState, Platform } from "react-native";

class TokenService {
  private TOKEN_KEY = "@Store:token";
  private tempToken: string | null = null;
  // iOS cannot access the encrypted storage while the app is on background
  // only log errors for ios on active state and android in any state
  private shouldLogError = () => Platform.select({ android: true, ios: AppState.currentState === "active" });
  public setToken = async (token: string) => {
    try {
      await EncryptedStorage.setItem(this.TOKEN_KEY, token);
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

      const securedToken = await EncryptedStorage.getItem(this.TOKEN_KEY);

      if (!securedToken?.length) {
        const token = await AsyncStorage.getItem(this.TOKEN_KEY);
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
      await AsyncStorage.removeItem(this.TOKEN_KEY);
      await EncryptedStorage.removeItem(this.TOKEN_KEY);
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
