import type { DeepLinkHandler } from "../types";
import { openMyAccount } from "@redux/user/user.actions";
import { store } from "@redux/_core/store";

/**
 * Handles the deep link for the member portal.
 * @param customParams - The custom parameters from the deep link (redirectUrl).
 * Valid redirectUrl are determined by the API server (yulife-api-server/src/app/types/yuWebAppsUrls.ts):
 * - Default: Opens the my account screen.
 * @returns void
 * @example
 * yulifeapp://yulife/member
 * yulifeapp://yulife/member?redirectUrl=/member/my-account/edit/email
 */
export const memberPortal: DeepLinkHandler = {
  name: "member",
  action: ({ customParams }) => {
    store.dispatch(openMyAccount({ redirectUrl: customParams?.redirectUrl }));
    return;
  },
};
