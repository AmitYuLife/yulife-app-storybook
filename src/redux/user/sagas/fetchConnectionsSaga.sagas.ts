import { QueryResult } from "@apollo/client";
import client from "@graphql/_core/client";
import { GetUserConnectionsQuery, gql } from "@graphql/__generated";
import { updateAppState } from "@redux/app/app.actions";
import Logger from "@services/logger/logger";
import { call, put, select } from "redux-saga/effects";
import { getActiveLevel } from "../../levels/levels.selectors";
import { updateConnectionSuccess } from "../user.actions";
import { getUserConnections } from "../user.selectors";
import { UserConnection } from "../user.types";

export default function* fetchConnectionsSaga({ payload }: ReturnType<typeof updateAppState>) {
  try {
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
    const connections: ReturnType<typeof getUserConnections> = yield select(getUserConnections);
    const loadingConnections: UserConnection[] = connections.filter(
      (connection: UserConnection) => connection.isLoading
    );

    // fetchUserOnAppState is called on appState is active && there is no active level
    // case is for the opposite & that there is a connection that is loading

    if (payload.appState === "active" && !!active.id && loadingConnections && loadingConnections.length) {
      const { data }: QueryResult<GetUserConnectionsQuery> = yield call(() =>
        client().query({ query: gql("GetUserConnectionsDocument"), fetchPolicy: "network-only" })
      );

      if (data?.getUserConnections) {
        for (const connection of data.getUserConnections) {
          if (!connection) {
            continue;
          }

          const hasConnected = loadingConnections.findIndex(({ name }) => name === connection.name);
          if (hasConnected !== -1) {
            yield put(updateConnectionSuccess(connection));
          }
        }
      }
    }
  } catch (e) {
    Logger.notify(e, { event: "fetchConnectionsSaga" });
  }
}
