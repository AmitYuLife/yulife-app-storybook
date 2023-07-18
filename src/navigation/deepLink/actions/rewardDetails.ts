import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/reward-details?dynamicId=${dynamicId}
export const rewardDetails: DeepLinkHandler = {
  name: "reward-details",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.rewardDetailsSdui,
        name: ROUTES.rewardDetailsSdui,
        passProps: {
          dynamicId: customParams.dynamicId,
          stepId: customParams.stepId || "reward_details",
        },
      },
    }),
};
