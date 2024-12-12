import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/wrapped?wrappedId=${id}
export const wrapped: DeepLinkHandler = {
  name: "wrapped",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.wrapped,
        name: ROUTES.wrapped,
        passProps: {
          wrappedId: customParams.wrappedId,
        },
      },
    }),
};
