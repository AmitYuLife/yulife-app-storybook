export const navigateViaText = async (text: string) => {
    const target = element(by.text(text));
    await waitFor(target).toBeVisible().withTimeout(5000);
    await target.tap();
    return target;
};

export const navigateViaID = async (id: string) => {
    const target = element(by.id(id));
    await waitFor(target).toBeVisible().withTimeout(5000);
    await target.tap();
    return target;
};

export const navigateViaLabel = async (label: string) => {
    const target = element(by.label(label));
    await waitFor(target).toBeVisible().withTimeout(5000);
    await target.tap();
    return target;
};

export const expectIsVisibleViaID = async (id: string) => {
    const target = element(by.id(id));
    await waitFor(target).toExist().withTimeout(5000);
    await expect(target).toBeVisible();
    return target;
};

export const expectIsVisibleViaText = async (label: string) => {
    const target = element(by.text(label));
    await waitFor(target).toExist().withTimeout(5000);
    await expect(target).toBeVisible();
    return target;
};

export const reset = async () => {
    await device.terminateApp();
    await device.launchApp({ delete: true });
};

export const reload = async () => await device.reloadReactNative();

export const wait = (timeout = 5000) => async () => new Promise((resolve) => setTimeout(resolve, timeout));
