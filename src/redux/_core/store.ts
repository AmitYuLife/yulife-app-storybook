import AsyncStorage from "@react-native-community/async-storage";
import Logger from "@services/logging/logger";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { createMigrate, persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { migrations } from "./migrations";
import combinedReducers, { IReduxState } from "./reducers";
import sagas from "./sagas";

const persistConfig = {
  blacklist: ["app", "pedometer", "avatarCache", "notifications", "sdui", "fitkit"],
  key: "root",
  version: 14,
  storage: AsyncStorage,
  migrate: createMigrate(migrations, { debug: false }),
};

const sagaMiddleware = createSagaMiddleware({
  onError: (error, errorInfo) => {
    Logger.error(error, { where: errorInfo?.sagaStack, source: "saga" });
  },
});

const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
}

const persistedReducer = persistReducer(persistConfig, combinedReducers);

let configuredStore: ReturnType<typeof createStore>;

const configureStore = (preloadedState?: IReduxState): Store<IReduxState> => {
  configuredStore = createStore(persistedReducer, preloadedState, compose(applyMiddleware(...middlewares)));

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
export const mockStore = createStore(persistedReducer);
export const persistor = persistStore(store);
