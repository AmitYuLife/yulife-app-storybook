import Logger from "@services/logger/logger";
import { Storage, StorageKey } from "@utils/storage";

export const REQUESTED = "REQUESTED";

export async function setFitkitPermission(fitkitPermision: string): Promise<void> {
  try {
    await Storage.setItem(StorageKey.fitkitPermission, fitkitPermision);
  } catch (e) {
    Logger.error(e, { event: "setFitkitPermissions" });
  }
}

export async function getFitkitPermission(): Promise<string | null> {
  try {
    const fitkitPermision = await Storage.getItem(StorageKey.fitkitPermission);
    return fitkitPermision;
  } catch (e) {
    Logger.error(e, { event: "getFitkitPermissions" });
    return null;
  }
}
