import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "../../node_modules/apollo-client";
import ContextProvider from "../context";

const withProvider = (Component: React.ComponentClass, client: ApolloClient<{}>) => {
    return class extends React.Component {
        public render() {
            return (
                <ApolloProvider client={client}>
                    <ContextProvider>
                        <Component {...this.props} />
                    </ContextProvider>
                </ApolloProvider>
            );
        }
    };
};

export default withProvider;
