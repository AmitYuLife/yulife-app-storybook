import { dataManager } from '../data/dataManager';
import { NAV_BAR } from '@ids';
import detoxExport = require('detox');

export const restart = async () => {
    await device.terminateApp();
    await dataManager.reseed();
    await device.launchApp({ delete: true, });
}

export const start = async () => {
    await device.terminateApp();
    await device.launchApp({
        delete: true,
        permissions: {},
    });
}

export const startWithoutLaunch = async () => {
    await dataManager.reseed();
    await restart();
}

export const reloadAppToTab = (tab: "yucoin" | "quests" | "leaderboard" | "rewards") => async () => {
    await device.reloadReactNative();
    await navigateViaID(NAV_BAR(tab))
}

export const wait = (timeout = 5000) => async () => new Promise((resolve) => setTimeout(resolve, timeout));

export const navigateViaID = async (id: string) => {
    await (waitFor(element(by.id(id)))).toBeVisible();
    await element(by.id(id)).tap();
}

export const navigateViaLabel = async (label: string) => {
    await (waitFor(element(by.label(label)))).toBeVisible();
    await element(by.label(label)).tap();
}

export const navigateViaText = async (text: string) => {
    await (waitFor(element(by.text(text)))).toBeVisible();
    await element(by.text(text)).tap();
}


export const expectIsVisibleViaID = async (id: string, waitTime = 0) => {
    const target = element(by.id(id));
    await waitFor(target).toExist().withTimeout(waitTime);
    await expect(target).toBeVisible();
    return target;
};

export const expectIsVisibleViaText = async (label: string, waitTime = 0) => {
    const target = element(by.text(label));
    await waitFor(target).toExist().withTimeout(waitTime);
    await expect(target).toBeVisible();
    return target;
};

export const expectDoesNotExistViaText = async (id: string, waitTime = 0) => {
    const target = element(by.text(id));
    await waitFor(target).toNotExist().withTimeout(waitTime);
    await expect(target).toNotExist();
    return target;
};

export const tapText = (text: string, waitTime = 0) => async () => {
    const target = element(by.text(text))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await target.tap()
}

export const textVisible = (text: string, waitTime = 0) => async () => {
    const target = element(by.text(text))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await expect(target).toBeVisible()
}

export const textNotVisible = (text: string, waitTime = 0) => async () => {
    const target = element(by.text(text))
    await waitFor(target).toBeNotVisible().withTimeout(waitTime)
    await expect(target).toBeNotVisible()
}


export const tapID = (id: string, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await target.tap()
}

export const tapIDAtPoint = (id: string, x: number, y: number, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await target.tapAtPoint({ x, y })
}

export const idVisible = (id: string, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await waitFor(target).toBeVisible().withTimeout(waitTime)
    await expect(target).toBeVisible()
}

export const idNotVisible = (id: string, waitTime = 0) => async () => {
    const target = element(by.id(id))
    await waitFor(target).toBeNotVisible().withTimeout(waitTime)
    await expect(target).toBeNotVisible()
}


export const typeViaID = (id: string, text: string) => async () => {
    const target = element(by.id(id))
    await expect(target).toBeVisible()
    await target.typeText(text)
}

export const multipleTextVisible = (textArr: string[]) => async () => {
    for (const i of textArr) {
        await expect(element(by.text(i))).toBeVisible()
    }
}


export const booleanTextVisible = async (text) => {
    try {
        await expect(element(by.text(text))).toBeVisible()
        return true
    } catch (e) {
        return false
    }
}

export const booleanIdVisible = async (id) => {
    try {
        await expect(element(by.id(id))).toBeVisible()
        return true
    } catch (e) {
        return false
    }
}
