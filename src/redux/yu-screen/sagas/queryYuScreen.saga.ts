import { call, put, spawn } from "redux-saga/effects";
import { QueryResult } from "@apollo/client";
import { GetYuScreenV5Query, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import Logger from "@services/logging/logger";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { updateYuScreen } from "../yu-screen.actions";
import { YuScreenSection } from "../yu-screen.types";

export default function* queryYuScreenSaga() {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const { data }: QueryResult<GetYuScreenV5Query> = yield call(() =>
      client().query({ query: gql("GetYuScreenV5Document"), fetchPolicy: "no-cache" })
    );

    if (data?.getYuScreenV5) {
      yield put(
        updateYuScreen({
          yumojiPrompt: data.getYuScreenV5.yumojiPrompt,
          sections: data.getYuScreenV5.sections as YuScreenSection[],
        })
      );
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "queryYuScreenSaga" });
    });
  }
}
