import { store } from "@redux/_core/store";
import { DeepLinkHandler } from "../types";
import { logOutStart } from "@redux/user/user.actions";

export const logout: DeepLinkHandler = {
  name: "logout",
  action: () => {
    store.dispatch(logOutStart());
  },
};
