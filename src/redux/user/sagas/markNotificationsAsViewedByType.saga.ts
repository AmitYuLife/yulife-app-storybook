import { markNotificationsAsViewedByType } from "@graphql/notifications";
import { MobileTabs } from "@graphql/_core/schema/globalTypes";
import Logger from "@services/logging/logger";
import { call, spawn } from "redux-saga/effects";

type Params = {
  type: string;
  payload: {
    type: MobileTabs;
  };
};

export default function* markNotificationsAsViewedByTypeSaga({ payload: { type } }: Params) {
  try {
    yield call(markNotificationsAsViewedByType, { type });
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "markNotificationsAsViewedByTypeSaga" });
    });
  }
}
