import { call, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getServerPayload } from "../sdui.helpers";
import getMagicLinkWithClient from "@graphql/user/getMagicLink.gql";
import { parseJSON } from "@utils";
import { handleOpenWebView } from "@navigation/utils";
import { MagicLinkSite } from "@graphql/_core/schema/globalTypes";

type Payload = { redirectUrl: string; site: MagicLinkSite; title?: string };

export function* sduiActionOpenMagicLink({ payload }: SduiActionWithServerPayload) {
  try {
    const { data: payloadData, isValid } = parseJSON<Payload>(getServerPayload(payload), ["redirectUrl", "site"]);

    if (!isValid) {
      throw new Error("Invalid action payload!");
    }

    const { redirectUrl, site, title = null } = payloadData;

    const { data } = yield call(() => getMagicLinkWithClient({ redirectUrl, site }));

    if (!data?.getMagicLink) {
      return;
    }

    yield call(handleOpenWebView, { uri: data.getMagicLink, title });
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "sduiActionOpenMagicLink" });
    });
  }
}
