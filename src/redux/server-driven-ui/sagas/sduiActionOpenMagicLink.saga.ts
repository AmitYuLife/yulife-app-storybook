import { call, spawn } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getServerPayload } from "../sdui.helpers";
import getMagicLinkWithClient from "@graphql/user/getMagicLink.gql";
import { parseJSON } from "@utils";
import { handleOpenWebView } from "@navigation/utils";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import client from "@graphql/_core/client";
import { QueryResult } from "@apollo/client";
import { GetMagicLinkQuery, MagicLinkSite } from "@graphql/__generated";

type Payload = {
  redirectUrl: string;
  site: MagicLinkSite;
  title?: string;
  dispatchActions?: Array<{ type: string }>;
  refetchQueries?: Array<string>;
};

export function* sduiActionOpenMagicLink({ payload }: SduiActionWithServerPayload) {
  try {
    const {
      data: { dispatchActions = [], refetchQueries = [], ...payloadData },
      isValid,
    } = parseJSON<Payload>(getServerPayload(payload), ["redirectUrl", "site"]);

    if (!isValid) {
      throw new Error("Invalid action payload!");
    }

    const { redirectUrl, site, title = null } = payloadData;

    const { data }: QueryResult<GetMagicLinkQuery> = yield call(() => getMagicLinkWithClient({ redirectUrl, site }));

    if (!data?.getMagicLink) {
      return;
    }

    const onClose = async (dispatch: Dispatch<AnyAction>) => {
      try {
        if (dispatchActions?.length > 0) {
          dispatchActions.map((action) => dispatch(action));
        }

        if (refetchQueries?.length > 0) {
          await client().refetchQueries({ include: refetchQueries });
        }
      } catch (e) {
        Logger.notify(e, {
          location: "web-view-on-close",
          actions: JSON.stringify(dispatchActions),
          queries: JSON.stringify(refetchQueries),
        });
      }
    };

    yield call(handleOpenWebView, { uri: data.getMagicLink, title, onClose });
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "sduiActionOpenMagicLink" });
    });
  }
}
