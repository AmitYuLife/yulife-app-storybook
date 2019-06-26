import Logger from "@services/logging/logger";
import { defaultDataIdFromObject, InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from "apollo-client";
import { from } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { createHttpLink } from "apollo-link-http";
import moment from "moment";
import { AsyncStorage } from "react-native";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import { getToken } from "../../services/storage";

const httpLink = () =>
    createHttpLink({
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
            return `${object.__typename}-${object.id}-${object.logoWidth}-${object.logoHeight}`;
        case "RedeemSteps":
            return `${object.__typename}-${object.id || object.info}`;
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

const defaultHeaders = {
    app_version: DeviceInfo.getVersion(),
    device_id: DeviceInfo.getUniqueID()
};

const authMiddleware = setContext(async (_, { headers }) => {
    // get the authentication token from async storage if it exists
    const token = await getToken();

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            ...defaultHeaders,
            authorization: token ? `Bearer ${token}` : "",
            date: moment().format()
        }
    };
});

const errorAfterware = onError((e) => {
    Logger.logMixpanelError("graphqlErrorAfterware", {
        networkError: {
            message: e.networkError.message,
            name: e.networkError.name
        },
        graphqErrors: JSON.stringify(e.graphQLErrors),
        operationName: e.operation.operationName
    });
});

let client: ApolloClient<NormalizedCacheObject>;

export default () => {
    if (!client) {
        client = new ApolloClient({
            cache,
            link: from([authMiddleware, errorAfterware, httpLink()])
        });
    }
    return client;
};
