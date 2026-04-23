import { clearApolloCache } from "@graphql/_core/clearCache";
import { call } from "redux-saga/effects";
import { setDeviceLocale } from "@redux/device/device.actions";
import Logger from "@services/logger/logger";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

export default function* changeUserLocaleSaga({ payload }: ReturnType<typeof setDeviceLocale>) {
  try {
    if (payload.shouldMutateTheApi) {
      yield call(() =>
        client().mutate({ mutation: gql("ChangeUserLocaleDocument"), variables: { locale: payload.locale } })
      );
    }

    yield call(clearApolloCache);
  } catch (e) {
    Logger.notify(e, { event: "changeUserLocale" });
  }
}
