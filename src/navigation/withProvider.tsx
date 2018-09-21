import { ApolloClient } from "apollo-client";
import { Component, ComponentClass } from "react";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "../components/atoms/loading/loading";
import { persistor, store } from "../redux/_core/store";

const withProvider = (WrappedComponent: ComponentClass, client: ApolloClient<{}>) => {
    return class extends Component {
        public render() {
            return (
                <ApolloProvider client={client}>
                    <Provider store={store}>
                        <PersistGate loading={<Loading />} persistor={persistor}>
                            <WrappedComponent {...this.props} />
                        </PersistGate>
                    </Provider>
                </ApolloProvider>
            );
        }
    };
};

export default withProvider;
