import { sendReduxEvent } from "@socket";
import { snakeCase } from "lodash";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const switchLanguage = async (locale: string, timeout = 100) => {
    sendReduxEvent({ type: "UPDATE_IS_SWITCHING_LOCALE", payload: true });
    sendReduxEvent({ type: "SET_DEVICE_LOCALE", payload: { locale } });
    await delay(100);
    sendReduxEvent({ type: "UPDATE_IS_SWITCHING_LOCALE", payload: false });
    await delay(timeout);
};

export const takeLocalisedScreenshots = async (locales: string[]) => {
    for (const locale of locales) {
        await switchLanguage(locale, 1000);
        await device.takeScreenshot(snakeCase(locale + "_" + globalThis.__assertionName));
    }

    await switchLanguage("en-GB");
}