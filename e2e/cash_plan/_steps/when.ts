import { navigation } from "@utils";
import * as ids from "@ids";

export const { tapText, tapID } = navigation.common;

export const { scrollFromID, scrollUntilIdVisible, scrollUntilTextVisible } = navigation.scrolling;

export const goToRewardsTab = async () => {
  await tapID(ids.NAV_BAR("rewards"), 5000)();
};
