import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";
import { GIFTING_PAGE } from "../../../components/containers/member/gifting/context";

// yulifeapp://yulife/gifting?userId=2
export const gifting: DeepLinkHandler = {
  name: "gifting",
  action: ({ currentRoute, customParams }) => {
    const requiredProps = ["userId"];
    const hasAllProps = requiredProps.every((prop) => !!customParams[prop]);
    if (!hasAllProps) {
      return;
    }

    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.gifting,
        name: ROUTES.gifting,
        passProps: {
          preselectedUserIds: [customParams.userId],
          startingPage: GIFTING_PAGE.SELECT_MESSAGE,
        },
      },
    });
  },
};
