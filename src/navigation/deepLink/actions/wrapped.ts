import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/yu-in-review?wrappedId=${id}
export const wrapped: DeepLinkHandler = {
  name: "yu-in-review",
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
