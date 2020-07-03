// TODO fix console.logs
// tslint:disable:no-console
import AsyncStorage from "@react-native-community/async-storage";

const TOKEN_KEY = "@Store:token";

export async function setToken(token: string): Promise<void> {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (e) {
    console.log(e);
  }
}

export async function getToken(): Promise<string | null> {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function clearToken(): Promise<void> {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    console.log(e);
    return;
  }
}

export async function migrateOldAppVersionToken(): Promise<void> {
  const OLD_KEY = "reduxPersist:user";
  const oldUserStore = await AsyncStorage.getItem(OLD_KEY);
  if (!oldUserStore) {
    return;
  }
  try {
    const token = JSON.parse(oldUserStore).token;
    if (token && !!token.length) {
      await setToken(token);
    } else if (token && token.token && !!token.token.length) {
      await setToken(token.token);
    }
  } catch (e) {
    console.log(e);
  }
  await AsyncStorage.removeItem(OLD_KEY);
}
