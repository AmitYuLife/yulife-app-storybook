import { DETOX_ENABLED } from "@services/socket";
import { getToken } from "@services/storage";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { setContext } from "@apollo/client/link/context";
import { ApolloClient, NormalizedCacheObject, from, createHttpLink } from "@apollo/client";
import moment from "moment";
import { Platform, PixelRatio } from "react-native";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import { store } from "@redux/_core/store";
import getClient from "@services/bugsnag";
import { updateOfflineState } from "@redux/app/app.actions";
import createRetryLink from "./retryLink";
import { getCurrentLocale, region, REGION, REGION_LIST } from "@locale";

import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { gqlInMemoryCache } from "./cache";
import { gqlCachePersistor } from "./persistor";

const appJson = require("../../../package.json");

const buildRegionalGqlUri = (r?: REGION) => `${region.getRegionUri(r)}/graphql`;

const httpLink = (r?: REGION) =>
  createHttpLink({
    uri: buildRegionalGqlUri(r),
    fetch,
  });

// restore the persisted the cache
gqlCachePersistor().restore();

const getAppVersion = () => {
  const version = DeviceInfo.getVersion();

  if (DETOX_ENABLED || version === "1.0" || __DEV__) {
    return appJson.version;
  }

  return version;
};

if (__DEV__) {
  // Show raw Apollo errors in the console, instead of Apollo error URL
  loadDevMessages();
  loadErrorMessages();
}

const defaultHeaders = {
  app_version: getAppVersion(),
  device_id: DeviceInfo.getDeviceId(),
  apollo_client_name: `react_native_${Platform.OS}`,
  yu_device_pixel_ratio: PixelRatio.get(),
};

// apollo_client name allows us to easily idenfiy the source of the request
// device_id is present on front-end bugsnag reports in device.id, so we can match it up to back-end logs
const requestIdPrefix = `${defaultHeaders.apollo_client_name}_${defaultHeaders.device_id}`;

// use a request counter to ensure uniqueness for closely batched requests
let requestCount = 0;

const getUserId = () => ((store.getState() as any) || {})?.user?.id || "unknown";

const authMiddleware = (r?: REGION) =>
  setContext(async (op, { headers }) => {
    // get the authentication token from async storage if it exists
    const token = await getToken();

    // We want to append the prefix with the current milliseconds to make the request ID unique
    const requestId = `${requestIdPrefix}_${getUserId()}_${moment().milliseconds()}_${requestCount}`;

    getClient().leaveBreadcrumb("Apollo request", { name: op.operationName, requestId }, "request");

    requestCount++;

    // return the headers to the context so httpLink can read them
    return {
      uri: buildRegionalGqlUri(r),
      headers: {
        ...headers,
        ...defaultHeaders,
        authorization: token ? `Bearer ${token}` : "",
        date: moment().format(DATE_FORMAT_WITH_TZ),
        yu_client_token: Config.YU_CLIENT_TOKEN,
        yu_locale: getCurrentLocale(),
        [`x-request-id`]: requestId,
      },
    };
  });

const retryLink = createRetryLink(() => {
  store.dispatch(updateOfflineState({ isOffline: true }));
});

let defaultClient: ApolloClient<NormalizedCacheObject>;

export default () => {
  if (!defaultClient) {
    defaultClient = new ApolloClient({
      cache: gqlInMemoryCache(),
      link: from([authMiddleware(), retryLink, httpLink()]),
    });

    // TODO: Re-enable this when expo prebuild is finalised
    // if (Config.ENV === "dev") {
    //   apolloDevToolsInit(defaultClient);
    // }
  }

  return defaultClient;
};

export const regionalClients = REGION_LIST.map((r) => {
  const client = new ApolloClient({
    cache: gqlInMemoryCache(),
    link: from([authMiddleware(r), httpLink(r)]),
  }) as ApolloClientWithRegion;

  client.__REGION = r;

  return client;
});

type ApolloClientWithRegion = ApolloClient<NormalizedCacheObject> & { __REGION?: REGION };
