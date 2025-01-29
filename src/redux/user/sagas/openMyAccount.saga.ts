import { QueryResult } from "@apollo/client";
import { GetMagicLinkQuery } from "@graphql/__generated";
import getMagicLinkWithClient from "@graphql/user/getMagicLink.gql";
import { t } from "@locale";
import { handleOpenWebView } from "@navigation/utils";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import Logger from "@services/logging/logger";
import { call, spawn } from "redux-saga/effects";
import { getUserStart, openMyAccount } from "../user.actions";

export default function* openMyAccountSaga({ payload }: ReturnType<typeof openMyAccount>) {
  try {
    const { data }: QueryResult<GetMagicLinkQuery> = yield call(() =>
      getMagicLinkWithClient({ goToMyAccount: true, redirectUrl: payload?.redirectUrl })
    );

    if (!data?.getMagicLink) {
      // guard even w/ low chance of happening
      // if user was able to sign in to the app,
      // they should be able to get a magic link
      return;
    }

    yield call(handleOpenWebView, {
      uri: data.getMagicLink,
      title: t("labels.account"),
      onClose: (dispatch: Dispatch<AnyAction>) => dispatch(getUserStart()),
    });
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "openMyAccount" });
    });
  }
}
