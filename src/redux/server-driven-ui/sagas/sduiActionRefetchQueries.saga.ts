import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { call } from "redux-saga/effects";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getServerPayload } from "../sdui.helpers";
import client from "@graphql/_core/client";

export function* sduiActionRefetchQueriesSaga(action: SduiActionWithServerPayload) {
  try {
    const { data, isValid } = parseJSON(getServerPayload(action.payload));
    const apolloClient = client();

    if (!isValid) {
      throw new Error("Invalid action payload!");
    }

    yield call(() =>
      apolloClient.refetchQueries({
        include: data.refetchQueries,
      })
    );
  } catch (e) {
    const errorMessage = e?.message;
    yield call(() =>
      Logger.logMixpanelEvent("app_debug", {
        sdui: true,
        location: "sduiActionRefetchQueriesSaga",
        error: errorMessage,
      })
    );
  }
}
