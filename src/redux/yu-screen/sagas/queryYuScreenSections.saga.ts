import { all, call, put, select, spawn } from "redux-saga/effects";
import { QueryResult } from "@apollo/client";
import { GetYuScreenV5SectionsQuery, SduiAction, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import Logger from "@services/logging/logger";
import { getToken } from "@services/storage";
import { Unpacked, parseJSON } from "@utils";
import { updateYuScreenSections } from "../yu-screen.actions";
import { getYuScreenSections } from "../yu-screen.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { YuScreenSection } from "../yu-screen.types";
import { getServerPayload } from "@redux/server-driven-ui/sdui.helpers";
import { SduiSagaAction } from "@redux/server-driven-ui/sdui.types";

interface IParsedJson {
  ids: string[];
  dispatchActions?: SduiAction[];
}

export default function* queryYuScreenSectionsSaga(action: SduiSagaAction) {
  const {
    isValid,
    data: { ids, dispatchActions = [] },
  } = parseJSON<IParsedJson>(getServerPayload(action.payload), ["ids"]);

  if (!isValid) {
    return;
  }

  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    if (!features.enableYuScreenV5) {
      return;
    }

    const sections: ReturnType<typeof getYuScreenSections> = yield select(getYuScreenSections);
    const sectionIds = new Set(sections.map((section) => section.id));
    const relevantIds = ids.filter((id) => sectionIds.has(id));

    const { data }: QueryResult<GetYuScreenV5SectionsQuery> = yield call(() =>
      client().query({
        query: gql("GetYuScreenV5SectionsDocument"),
        variables: { ids: relevantIds },
        fetchPolicy: "no-cache",
      })
    );
    if (data?.getYuScreenV5Sections) {
      yield put(updateYuScreenSections(data.getYuScreenV5Sections as YuScreenSection[]));
    }

    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: SduiAction) => put(dispatchAction)));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "queryYuScreenSectionsSaga" });
    });
  }
}
