import { createStore, applyMiddleware, Store, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Config from "react-native-config";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import combinedReducers, { IReduxState } from "./reducers";

const sagaMiddleware = createSagaMiddleware({
    onError: (error) => {
        // bugsnag().notify(error);
        console.error(error); // tslint:disable-line
    },
});

const middlewares = [sagaMiddleware];

const composeEnhancers = Config.ENV === "dev" ? composeWithDevTools({ name: "YuLife Redux" }) : compose;

const configureStore = (preloadedState?: IReduxState): Store<IReduxState> => {
    const configuredStore = createStore(
        combinedReducers,
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares)),
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
