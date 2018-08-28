import Config from "react-native-config";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import combinedReducers, { IReduxState } from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware({
    onError: (error) => {
        // bugsnag().notify(error);
        console.error(error); // tslint:disable-line
    }
});

const middlewares = [sagaMiddleware];

const composeEnhancers = Config.ENV === "dev" ? composeWithDevTools({ name: "YuLife Redux" }) : compose;

const configureStore = (preloadedState?: IReduxState): Store<IReduxState> => {
    const configuredStore = createStore(
        combinedReducers,
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    // Enable hot reloading for reducers.
    if (Config.ENV === "dev" && (module.hot && typeof module.hot.accept === "function")) {
        module.hot.accept(() => {
            configuredStore.replaceReducer(combinedReducers);
        });
    }

    sagaMiddleware.run(sagas);
    configuredStore.dispatch({ type: "INIT" });

    return configuredStore as Store<IReduxState>;
};

export const store = configureStore();
