import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";
import { ROUTES } from "@navigation/constants";

// yulifeapp://yulife/rewards/unlock?battlePassId=123
export const rewardsUnlock: DeepLinkHandler = {
  name: "rewards/unlock",
  action: ({ currentRoute, customParams }) => {
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.rewardsUnlock,
        name: ROUTES.rewardsUnlock,
        passProps: {
          battlePassId: customParams.battlePassId,
          passType: customParams.passType,
          showNavigation: true,
        },
      },
    });
  },
};
