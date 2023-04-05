import { ROUTES, bottomTabs } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/reward-item?id=${id}
export const rewardItem: DeepLinkHandler = {
  name: "reward-item",
  action: ({ currentRoute, customParams }) => {
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.rewardDetails,
        name: ROUTES.rewardDetails,
        passProps: {
          rewardId: customParams.id,
          popTo: currentRoute,
        },
        options: { bottomTabs },
      },
    });
  },
};
