// Web stub for react-native-encrypted-storage (legacy storage)
// Uses localStorage as a fallback

const PREFIX = "__encrypted_storage__";

export default class EncryptedStorage {
  static AFTER_FIRST_UNLOCK = "afterFirstUnlock";

  static async setItem(key, value) {
    try { localStorage.setItem(PREFIX + key, value); } catch {}
  }

  static async getItem(key) {
    try { return localStorage.getItem(PREFIX + key) || null; } catch { return null; }
  }

  static async removeItem(key) {
    try { localStorage.removeItem(PREFIX + key); } catch {}
  }

  static async clear() {
    try {
      Object.keys(localStorage)
        .filter(k => k.startsWith(PREFIX))
        .forEach(k => localStorage.removeItem(k));
    } catch {}
  }
}

export const StorageErrorCallback = () => {};
export const StorageValueCallback = () => {};
