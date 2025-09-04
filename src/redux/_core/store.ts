import AsyncStorage from "@react-native-async-storage/async-storage";
import Logger from "@services/logging/logger";
import { configureStore as toolkitConfigureStore, Store } from "@reduxjs/toolkit";
import { createMigrate, persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { migrations } from "./migrations";
import combinedReducers, { IReduxState } from "./reducers";
import sagas from "./sagas";

const persistConfig = {
  blacklist: ["app", "pedometer", "avatarCache", "notifications", "sdui", "fitkit", "detox"],
  key: "root",
  version: 30,
  storage: AsyncStorage,
  migrate: createMigrate(migrations, { debug: false }),
};

const sagaMiddleware = createSagaMiddleware({
  onError: (error, errorInfo) => {
    Logger.error(error, { where: errorInfo?.sagaStack, source: "saga" });
  },
});

const middlewares = [sagaMiddleware];

// TODO: Re-enable once flipper is re-added
// if (Config.ENV === "dev") {
//   const createDebugger = require("redux-flipper").default;
//   middlewares.push(createDebugger());
// }

const persistedReducer = persistReducer(persistConfig, combinedReducers);

let configuredStore: ReturnType<typeof toolkitConfigureStore>;

const configureStore = (preloadedState?: IReduxState): Store<IReduxState> => {
  configuredStore = toolkitConfigureStore({ reducer: persistedReducer, preloadedState, middleware: middlewares });

  // Enable hot reloading for reducers.
  // if (Config.ENV === "dev" && (module.hot && typeof module.hot.accept === "function")) {
  //     module.hot.accept(() => {
  //         configuredStore.replaceReducer(persistedReducer);
  //     });
  // }

  sagaMiddleware.run(sagas);
  configuredStore.dispatch({ type: "INIT" });

  return configuredStore as Store<IReduxState>;
};

export const store = configuredStore ? configuredStore : configureStore();
export const mockStore = toolkitConfigureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
