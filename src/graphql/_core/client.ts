import { getToken } from "@services/storage";
import { DATE_FORMAT_WITH_TZ } from "@services/utils";
import { defaultDataIdFromObject, InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from "apollo-client";
import { from, Operation, ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError, ErrorResponse } from "apollo-link-error";
import { createHttpLink } from "apollo-link-http";
import moment from "moment";
import AsyncStorage from "@react-native-community/async-storage";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import { store } from "@redux/_core/store";
import { apolloRequest, ApolloRequestPayload } from "@redux/app/app.actions";
import retryLink from "./retryLink";

const httpLink = () =>
  createHttpLink({
    uri: `${Config.API_URL}/graphql`,
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
      return `${object.__typename}-${object.steps}-${object.meditation}-${object.distance}`;
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
    case "LeaderboardItem":
      return `${object.__typename}-${object.id}-${object.avatar?.id}`;
    case "AvatarPart":
      return `${object.__typename}-${object.partId}-${object.order}`;
    case "AvatarColor":
      return `${object.__typename}-${object.colorSchemeId}-${object.displayOrder}`;
    case "YuliferProduct":
      return `${object.__typename}-${object.productId}-${object.active}`;
    default:
      return defaultDataIdFromObject(object);
  }
};

const cache = new InMemoryCache({
  dataIdFromObject,
});

persistCache({
  cache,
  storage: AsyncStorage,
});

const defaultHeaders = {
  app_version: DeviceInfo.getVersion(),
  device_id: DeviceInfo.getUniqueId(),
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
      date: moment().format(DATE_FORMAT_WITH_TZ),
    },
  };
});

const reduxLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    const requestInfo = mapResponse(operation, 0, null, data);
    store.dispatch(apolloRequest(requestInfo));
    return data;
  });
});

const errorAfterware = onError(({ networkError, response, operation }: ErrorResponse) => {
  // Logic for old reduxLink, removed started & complete booleans
  const operationContext = operation.getContext();
  const requestInfo = mapResponse(operation, operationContext.retries || 0, !!networkError, response);
  store.dispatch(apolloRequest(requestInfo));

  // might wanna do something else here
  // console.error("Error ... ", error);
});

const mapResponse = (
  operation: Operation,
  currentRequestCount: number,
  networkError?: boolean,
  result?: {}
): ApolloRequestPayload => ({
  // tslint:disable-line;
  operation,
  currentRequestCount,
  networkError,
  result,
});

let client: ApolloClient<NormalizedCacheObject>;

export default () => {
  if (!client) {
    client = new ApolloClient({
      cache,
      link: from([authMiddleware, reduxLink, retryLink, errorAfterware, httpLink()]),
    });
  }

  return client;
};
