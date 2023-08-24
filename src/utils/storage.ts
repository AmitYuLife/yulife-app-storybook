import AsyncStorage from "@react-native-community/async-storage";

export enum StorageKey {
  token = "@Store:token",
  region = "@yulife:region",
  leanplum = "@YuStore:leanplum",
  fitkitPermission = "@Store:fitkit",
  mobileAssets = "@YuStore:mobileAssets",
  fitKitAuthorised = "@RNFitKit:authorised",
  referralsPopover = "@YuStore:referralsPopover",
  mediaPlayerProgress = "@YuStore:mediaPlayerProgress",
  iosCyclingPermissionShown = "@RNFitKit:iosCyclingPermissionShown",
}

/**
 * A wrapped version of AsyncStorage that
 * allows for typesafe key/value storage.
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
}
