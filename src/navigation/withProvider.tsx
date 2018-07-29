import * as React from "react";
import { ApolloProvider } from "react-apollo";

const withProvider = (Component: any, client: any) => {
    return class extends React.Component {

        public render() {
            return (
                <ApolloProvider client={client}>
                    <Component {...this.props} />
                </ApolloProvider>
            );
        }
    };
};

export default withProvider;
