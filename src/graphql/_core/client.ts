import { defaultDataIdFromObject, InMemoryCache } from "apollo-cache-inmemory";
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
    uri: `${Config.API_URL}/graphql`
});

const dataIdFromObject = (object: any) => {
    switch (object.__typename) {
        case "UserPayload":
            return `${object.__typename}-${object.expiresAt}`;
        case "Level":
            return `${object.__typename}-${object.id}`;
        case "LevelSlot":
            return `${object.__typename}-${object.id}`;
        case "LevelSlotMilestone":
            return `${object.__typename}-${object.id}`;
        case "MilestoneTarget":
            return `${object.__typename}-${object.steps}-${object.meditation}`;
        case "User":
            return `${object.__typename}-${object.id}`;
        case "Reward":
            return `${object.__typename}-${object.code}`;
        case "RewardUiSettings":
            return `${object.__typename}-${object.logoWidth}-${object.logoHeight}`;
        case "RedeemSteps":
            return `${object.__typename}-${object.info}`;
        case "Denomination":
            return `${object.__typename}-${object.yuCoin}-${object.value}`;
        default:
            return defaultDataIdFromObject(object);
    }
};

const cache = new InMemoryCache({
    dataIdFromObject
});

persistCache({
    cache,
    storage: AsyncStorage
});

const authMiddleware = setContext(async (_, { headers }) => {
    // get the authentication token from async storage if it exists
    const token = await getToken();

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
            date: new Date().toISOString()
        }
    };
});

const errorAfterware = onError(() => {
    // might wanna do something here
    // console.log("Error ... ", error);
});

const client = new ApolloClient({
    cache,
    link: from([authMiddleware, errorAfterware, httpLink])
});

export default client;
