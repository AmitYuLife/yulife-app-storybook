import { ApolloClient } from "apollo-client";
import { ComponentClass } from "react";
import React from "react";
import { ApolloProvider } from "react-apollo";

const withProvider = (WrappedComponent: ComponentClass, client: ApolloClient<{}>) => (props: any) => (
    <ApolloProvider client={client}>
        <WrappedComponent {...props} />
    </ApolloProvider>
);

export default withProvider;
