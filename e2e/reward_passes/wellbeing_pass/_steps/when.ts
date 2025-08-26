import { navigation } from "@navigation";
export { quitAndReopenApp } from "@socket";

export const { navigateTo, tapID, tapText } = navigation.common;

export const { swipeFromText, scrollFromID, scrollFromText, scrollUntilIdVisible } =
  navigation.scrolling;
