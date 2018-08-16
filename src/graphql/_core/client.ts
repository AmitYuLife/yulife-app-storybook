import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from "apollo-client";
import { from } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { createHttpLink } from "apollo-link-http";
import { AsyncStorage } from "react-native";
import Config from "react-native-config";
import { getToken } from "../../services/storage";

const httpLink = createHttpLink({
    uri: `${Config.API_URL}/graphql`,
    // uri: `http://localhost:5000/graphql`,
});

const cache = new InMemoryCache();

persistCache({
    cache,
    storage: AsyncStorage,
});

const authMiddleware = setContext(async (_, { headers }) => {
    // get the authentication token from async storage if it exists
    const token = await getToken();

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
            date: new Date().toISOString(),
        },
    };
});

const errorAfterware = onError(() => {
    // might wanna do something here
    // console.log("Error ... ", error);
});

const client = new ApolloClient({
    cache,
    link: from([authMiddleware, errorAfterware, httpLink]),
});

export default client;
