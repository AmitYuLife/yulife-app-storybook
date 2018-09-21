import { AsyncStorage } from "react-native";
import Config from "react-native-config";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import combinedReducers, { IReduxState } from "./reducers";
import sagas from "./sagas";

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const sagaMiddleware = createSagaMiddleware({
    onError: (error) => {
        // bugsnag().notify(error);
        console.error(error); // tslint:disable-line
    }
});

const middlewares = [sagaMiddleware];

const composeEnhancers = Config.ENV === "dev" ? composeWithDevTools({ name: "YuLife Redux" }) : compose;
const persistedReducer = persistReducer(persistConfig, combinedReducers);

const configureStore = (preloadedState?: IReduxState): Store<IReduxState> => {
    const configuredStore = createStore(
        persistedReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    // Enable hot reloading for reducers.
    if (Config.ENV === "dev" && (module.hot && typeof module.hot.accept === "function")) {
        module.hot.accept(() => {
            configuredStore.replaceReducer(persistedReducer);
        });
    }

    sagaMiddleware.run(sagas);
    configuredStore.dispatch({ type: "INIT" });

    return configuredStore as Store<IReduxState>;
};

export const store = configureStore();
export const persistor = persistStore(store);
