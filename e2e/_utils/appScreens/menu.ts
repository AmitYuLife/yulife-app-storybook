import { MENU_ITEM } from "@ids";
import { navigateViaID } from "@navigation";
import { waitFor } from "detox";

export const menuItemsVisible = (supportLevel: "basic" | "enhanced") => async () => {
  const menuItems = [
    "Activity History",
    "My Account",
    "Wellbeing Hub",
    "Settings",
    supportLevel === "basic" ? "Support" : "Chat",
    "Log out",
  ];

  for (const i of menuItems) {
    await waitFor(element(by.id(MENU_ITEM(i))))
      .toBeVisible()
      .withTimeout(3000);
  }
};

export const tapMenuItem = (menuItem: string) => async () => {
  await navigateViaID(MENU_ITEM(menuItem), 5000)();

  if (process.env.SKIP_ASSERTIONS) {
    // this is needed to wait for the following screen to open since Then won't wait for it
    await new Promise((resolve) => setTimeout(resolve, 2500));
  }
};
