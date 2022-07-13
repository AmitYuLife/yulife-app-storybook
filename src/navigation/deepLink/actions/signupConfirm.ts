import { setUnauthenticatedRoot } from "../../root";
import { DeepLinkHandler } from "../types";

export const signUpConfirm: DeepLinkHandler = {
  name: "signup/confirm",
  unauthorisedOnly: true,
  action: ({ customParams }) => {
    if (customParams.redirectUrl === "/member") {
      setUnauthenticatedRoot(customParams);
    }
  },
};
