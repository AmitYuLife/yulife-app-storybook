export const navigateViaText = async (text: string) => {
    await (waitFor(element(by.text(text)))).toBeVisible();
    await element(by.text(text)).tap();
};

export const navigateViaID = async (id: string) => {
    await (waitFor(element(by.id(id)))).toBeVisible();
    await element(by.id(id)).tap();
};

export const navigateViaLabel = async (label: string) => {
    await (waitFor(element(by.label(label)))).toBeVisible();
    await element(by.label(label)).tap();
};

export const reset = async () => {
    await device.terminateApp();
    await device.launchApp({ delete: true });
};

export const reload = async () => await device.reloadReactNative();

export const wait = (timeout = 5000) => async () => new Promise((resolve) => setTimeout(resolve, timeout));
