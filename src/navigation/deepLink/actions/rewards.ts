import { updateRewardsTab } from "@redux/rewards-tab/rewards-tab.actions";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { labels } from "../../root";
import { DeepLinkHandler } from "../types";
import { store } from "@redux/_core/store";

export const rewards: DeepLinkHandler = {
  name: labels[4].name,
  action: ({ customParams }) => {
    if (customParams?.tab) {
      store.dispatch(updateRewardsTab({ tab: customParams.tab as RewardsSection, shouldCheckForAvailability: true }));
    }

    labels[4].onPress();
  },
};
