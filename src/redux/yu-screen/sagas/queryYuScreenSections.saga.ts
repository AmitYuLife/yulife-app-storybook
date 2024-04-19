import { call, put, spawn } from "redux-saga/effects";
import { QueryResult } from "@apollo/client";
import { GetYuScreenV5SectionsQuery, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import Logger from "@services/logging/logger";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { updateYuScreenSections } from "../yu-screen.actions";

interface Params {
  payload?: string[];
}

export default function* queryYuScreenSectionsSaga({ payload: ids }: Params = {}) {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const { data }: QueryResult<GetYuScreenV5SectionsQuery> = yield call(() =>
      client().query({ query: gql("GetYuScreenV5SectionsDocument"), variables: { ids }, fetchPolicy: "no-cache" })
    );
    if (data?.getYuScreenV5Sections) {
      yield put(updateYuScreenSections(data));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "queryYuScreenSectionsSaga" });
    });
  }
}
