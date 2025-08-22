import { QueryResult } from "@apollo/client";
import client from "@graphql/_core/client";
import { GetConnectionsQuery, gql } from "@graphql/__generated";
import { updateAppState } from "@redux/app/app.actions";
import Logger from "@services/logging/logger";
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
      // get only connections
      const { data }: QueryResult<GetConnectionsQuery> = yield call(() =>
        client().query({ query: gql("GetConnectionsDocument"), fetchPolicy: "network-only" })
      );

      if (data?.getCurrentUser?.connections) {
        const newConnections = data.getCurrentUser.connections;
        for (const connection of newConnections) {
          const hasConnected = loadingConnections.findIndex(({ name }) => name === connection.name);
          if (hasConnected !== -1) {
            yield put(updateConnectionSuccess(connection));
          }
        }
      }
    }
  } catch (e) {
    Logger.error(e, { event: "fetchConnectionsSaga" });
  }
}
