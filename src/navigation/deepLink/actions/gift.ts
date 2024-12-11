import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/gift?giftId=6748e85cafd61661794ebe31
export const gift: DeepLinkHandler = {
  name: "gift",
  action: ({ currentRoute, customParams }) => {
    if (customParams.giftId) {
      pushToScreen(currentRoute, {
        component: {
          id: ROUTES.giftView,
          name: ROUTES.giftView,
          passProps: {
            giftId: customParams.giftId,
          },
        },
      });
    }
  },
};
