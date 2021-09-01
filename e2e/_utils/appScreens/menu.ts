import { MENU_ITEM } from "@ids";
import { navigateViaID } from "@navigation";

export const menuItemsVisible = async () => {
    const menuItems = ["Statistics", "Activity History", "My Account", "Wellbeing Hub", "Settings", "Chat", "Log out"]

    for (const i of menuItems) {
        await expect(element(by.id(MENU_ITEM(i)))).toBeVisible()
    };
}

export const tapMenuItem = (menuItem: string) => async () => {
    await navigateViaID(MENU_ITEM(menuItem))
}