import { call, put, take, takeLatest } from "redux-saga/effects";
import { AsyncAction, SyncAction } from "../_core/types";
import { detoxReduxChannel } from "./detox.channels";
import { tokenService } from "@services/storage/token";
import { setAuthenticated } from "@redux/app/app.actions";
import { refreshUserSession } from "@redux/app/sagas/setMainRoot.saga";
import { ApolloQueryResult } from "@apollo/client";
import { region } from "@locale";
import { REGION } from "@locale";

// eslint-disable-next-line no-restricted-imports
import { regionalClients } from "@graphql/_core/client";
// eslint-disable-next-line no-restricted-imports
import { gql, LoginMethod, LoginUserMutation } from "@graphql/__generated";

function* listenToReduxActions() {
  console.log("Redux saga channel started, listening for actions");
  const reduxChannel: ReturnType<typeof detoxReduxChannel> = yield call(detoxReduxChannel);

  while (true) {
    const action: SyncAction | AsyncAction = yield take(reduxChannel);

    if (action.type === "DETOX_LOGIN_WITH_CREDS") {
      const selectedRegion = action.payload.region || ("UK" as REGION);
      region.setRegion(selectedRegion);

      const response: ApolloQueryResult<LoginUserMutation> = yield call(() =>
        regionalClients
          .find((r) => r.__REGION === selectedRegion)
          .mutate({
            mutation: gql("LoginUserDocument"),
            fetchPolicy: "no-cache",
            variables: {
              email: action.payload.email,
              password: action.payload.password,
              method: LoginMethod.Password,
            },
          })
      );

      yield call(tokenService.setToken, response.data.loginUser.token);

      yield call(refreshUserSession, { coldStart: true });

      yield put(setAuthenticated());
    } else {
      yield put(action);
    }
  }
}

export default [takeLatest("INIT", listenToReduxActions)];
