import Logger from "@services/logging/logger";
import * as EncryptedStorage from "expo-secure-store";
import LegacyEncryptedStorage from "react-native-encrypted-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Keys used to store non sensitive data
 */
export enum StorageKey {
  region = "@yulife:region",
  leanplum = "@YuStore:leanplum",
  fitkitPermission = "@Store:fitkit",
  mobileAssets = "@YuStore:mobileAssets",
  fitKitAuthorised = "@RNFitKit:authorised",
  referralsPopover = "@YuStore:referralsPopover",
  mediaPlayerProgress = "@YuStore:mediaPlayerProgress",
  iosCyclingPermissionShown = "@RNFitKit:iosCyclingPermissionShown",
  debugFavourites = "@yulife:debugFavourites",
  debugTestJourney = "@yulife:debugTestJourney",
}

/**
 * Keys used to store sensitive data that should be encrypted
 */
export enum EncryptedStorageKey {
  token = "@Store:token",
}

/**
 * A wrapped version of the storage libraries
 * that allows for typesafe key/value storage.
 *
 * Note: `LegacyEncryptedStorage` will be purged in a future release
 */
export class Storage {
  public static async getItem(key: StorageKey): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }

  public static async setItem(key: StorageKey, value: string): Promise<void> {
    return AsyncStorage.setItem(key, value);
  }

  public static async removeItem(key: StorageKey): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  public static async getEncryptedItem(key: EncryptedStorageKey): Promise<string | null> {
    const value = await EncryptedStorage.getItemAsync(this.formatExpoStorageKey(key));

    // If the value is not found in the new storage library
    // but is found in the legacy storage library, migrate it
    if (!value) {
      return await this.migrateAndGetEncryptedLegacyValue(key);
    }

    return value;
  }

  public static async setEncryptedItem(key: EncryptedStorageKey, value: string): Promise<void> {
    return EncryptedStorage.setItemAsync(this.formatExpoStorageKey(key), value);
  }

  public static async removeEncryptedItem(key: EncryptedStorageKey): Promise<void> {
    await EncryptedStorage.deleteItemAsync(this.formatExpoStorageKey(key));

    try {
      // We need to check the item still exists before removing it
      // otherwise LegacyEncryptedStorage will throw an error
      const legacyValue = await LegacyEncryptedStorage.getItem(key);

      if (legacyValue) {
        await LegacyEncryptedStorage.removeItem(key);
      }
    } catch (error) {
      Logger.error(error, { file: "storage" });
    }
  }

  private static async migrateAndGetEncryptedLegacyValue(key: EncryptedStorageKey): Promise<string | null> {
    let legacyValue: string | null = null;

    try {
      legacyValue = await LegacyEncryptedStorage.getItem(key);

      if (legacyValue) {
        await this.setEncryptedItem(key, legacyValue);
      }
    } catch (error) {
      Logger.error(error, { file: "storage" });
    }

    return legacyValue;
  }

  /**
   * Unlike other storage libraries, `EncryptedStorage` does not
   * support keys with certain special characters. Therefore, we need
   * to convert the key to a string that is compatible with `EncryptedStorage`.
   */
  private static formatExpoStorageKey(key: EncryptedStorageKey): string {
    return key.replace(/[^a-zA-Z0-9]/g, "_");
  }
}
