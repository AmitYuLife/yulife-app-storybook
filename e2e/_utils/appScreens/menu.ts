import { MENU_ITEM } from "@ids";
import { navigateViaID } from "@navigation";

export const menuItemsVisible = async () => {
    const menuItems = ["statistics", "activity history", "member zone", "settings", "chat", "log out"]

    for (const i of menuItems) {
        await expect(element(by.id(MENU_ITEM(i)))).toBeVisible()
    };
}

export const tapMenuItem = (menuItem: string) => async () => {
    await navigateViaID(MENU_ITEM(menuItem))
}