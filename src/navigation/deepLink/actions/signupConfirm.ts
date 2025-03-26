import { region, REGION } from "@locale";
import { store } from "@redux/_core/store";
import { setRegionConfig } from "@redux/app/app.actions";
import { setUnauthenticatedRoot } from "../../root";
import { DeepLinkHandler } from "../types";

export const signUpConfirm: DeepLinkHandler = {
  name: "signup/confirm",
  unauthorisedOnly: true,
  action: ({ customParams }) => {
    // TODO: handle log in user in a saga
    if (customParams?.region) {
      const valid = region.OPTIONS.find((o) => o.key === customParams.region);

      if (valid) {
        region.setRegion(customParams.region as REGION);
        store.dispatch(setRegionConfig({ shouldFetchConfig: true }));
      }
    }

    if (customParams?.redirectUrl === "/member") {
      setUnauthenticatedRoot({
        region: customParams.region as REGION,
        ...customParams,
      });
    }
  },
};
