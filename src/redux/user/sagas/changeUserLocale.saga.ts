import { clearApolloCache } from "@graphql/_core/clearCache";
import changeUserLocaleWithClient from "@graphql/locale/changeUserLocale.gql";
import { call } from "redux-saga/effects";
import { setDeviceLocale } from "@redux/device/device.actions";
import Logger from "@services/logging/logger";

export default function* changeUserLocaleSaga({ payload }: ReturnType<typeof setDeviceLocale>) {
  try {
    if (payload.shouldMutateTheApi) {
      yield call(changeUserLocaleWithClient, { locale: payload.locale });
      yield call(clearApolloCache);
    }
  } catch (e) {
    Logger.error(e, { event: "changeUserLocale" });
  }
}
