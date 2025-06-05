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

    const observableQueries = new Set(Array.from(apolloClient.getObservableQueries().values()).map((q) => q.queryName));
    const queriesToRefetch = data.refetchQueries.filter((q: string) => observableQueries.has(q));

    if (queriesToRefetch.length > 0) {
      yield call(() =>
        apolloClient.refetchQueries({
          include: queriesToRefetch,
        })
      );
    }
  } catch (e) {
    yield call(() =>
      Logger.error(e, {
        sdui: true,
        location: "sduiActionRefetchQueriesSaga",
      })
    );
  }
}
