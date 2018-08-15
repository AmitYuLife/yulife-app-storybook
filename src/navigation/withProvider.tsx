import { ApolloClient } from "apollo-client";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { store } from "../redux/_core/store";

const withProvider = (WrappedComponent: React.ComponentClass, client: ApolloClient<{}>) => {
    return class extends React.Component {
        public render() {
            return (
                <ApolloProvider client={client}>
                    <Provider store={store}>
                        <WrappedComponent {...this.props} />
                    </Provider>
                </ApolloProvider>
            );
        }
    };
};

export default withProvider;
