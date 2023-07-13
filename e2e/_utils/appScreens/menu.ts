import { MENU_ITEM } from "@ids";
import { navigateViaID } from "@navigation";

export const menuItemsVisible = async () => {
    const menuItems = ["Activity History", "My Account", "Wellbeing Hub", "Settings", "Chat", "Log out"]

    for (const i of menuItems) {
        await expect(element(by.id(MENU_ITEM(i)))).toBeVisible()
    };
}

export const tapMenuItem = (menuItem: string) => async () => {
    await navigateViaID(MENU_ITEM(menuItem))

    if (process.env.SKIP_ASSERTIONS) {
        // this is needed to wait for the following screen to open since Then won't wait for it
        await new Promise(resolve => setTimeout(resolve, 2500));
    }
}