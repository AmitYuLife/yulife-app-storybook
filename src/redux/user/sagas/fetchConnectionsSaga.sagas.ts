import { getCurrentUserConnectionsWithClient } from "@graphql/connections";
import { updateAppState } from "@redux/app/app.actions";
import Logger from "@services/logging/logger";
import { call, put, select } from "redux-saga/effects";
import { getActiveLevel } from "../../levels/levels.selectors";
import { updateConnectionSuccess } from "../user.actions";
import { Connection, getUserConnections } from "../user.selectors";

interface IConnectionWithLoading extends Connection {
  isLoading?: boolean;
}

export default function* fetchConnectionsSaga({ payload }: ReturnType<typeof updateAppState>) {
  try {
    const active = yield select(getActiveLevel);
    const connections = yield select(getUserConnections);
    const loadingConnections: IConnectionWithLoading[] = connections.filter(
      (connection: IConnectionWithLoading) => connection.isLoading
    );
    // fetchUserOnAppState is called on appState is active && there is no active level
    // case is for the opposite & that there is a connection that is loading
    if (payload === "active" && !!active.levelSlotId && loadingConnections && loadingConnections.length) {
      // get only connections
      const { data } = yield call(getCurrentUserConnectionsWithClient);
      if (data && data.getCurrentUser && data.getCurrentUser.connections) {
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
