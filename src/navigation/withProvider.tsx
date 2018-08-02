import { ApolloClient } from "apollo-client";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import ContextProvider from "../context";

const withProvider = (WrappedComponent: React.ComponentClass, client: ApolloClient<{}>) => {
    return class extends React.Component {
        public render() {
            return (
                <ApolloProvider client={client}>
                    <ContextProvider>
                        <WrappedComponent {...this.props} />
                    </ContextProvider>
                </ApolloProvider>
            );
        }
    };
};

export default withProvider;
