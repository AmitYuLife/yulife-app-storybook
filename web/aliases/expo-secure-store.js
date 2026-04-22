// Web implementation of expo-secure-store using localStorage
// Not actually secure on web, but functional for dev/testing

const PREFIX = "__secure_store__";

export const AFTER_FIRST_UNLOCK = "afterFirstUnlock";
export const ALWAYS = "always";
export const WHEN_UNLOCKED = "whenUnlocked";

export async function getItemAsync(key, options) {
  try {
    return localStorage.getItem(PREFIX + key) || null;
  } catch {
    return null;
  }
}

export async function setItemAsync(key, value, options) {
  try {
    localStorage.setItem(PREFIX + key, value);
  } catch {}
}

export async function deleteItemAsync(key, options) {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {}
}

export function isAvailableAsync() {
  return Promise.resolve(true);
}
