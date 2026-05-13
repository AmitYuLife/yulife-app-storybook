import { call, delay, put, spawn } from "redux-saga/effects";
import { QueryResult } from "@apollo/client";
import { GetYuScreenV5Query, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import Logger from "@services/logger/logger";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { updateYuScreen } from "../yu-screen.actions";
import { YumojiPrompt, YuScreenSection } from "../yu-screen.types";
import { AUTHENTICATED } from "@redux/app/app.actions";
import { random } from "lodash";

export default function* queryYuScreenSaga(action: { type: string }) {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  if (action.type === AUTHENTICATED) {
    yield delay(random(5000, 12000));
  }

  try {
    const { data }: QueryResult<GetYuScreenV5Query> = yield call(() =>
      client().query({ query: gql("GetYuScreenV5Document"), fetchPolicy: "no-cache" })
    );

    if (data?.getYuScreenV5) {
      yield put(
        updateYuScreen({
          yumojiPrompt: data.getYuScreenV5.yumojiPrompt as YumojiPrompt | undefined,
          sections: data.getYuScreenV5.sections as YuScreenSection[],
        })
      );
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "queryYuScreenSaga" });
    });
  }
}
