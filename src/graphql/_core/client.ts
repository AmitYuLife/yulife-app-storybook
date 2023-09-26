import { DETOX_ENABLED } from "@services/socket";
import { getToken } from "@services/storage";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { setContext } from "@apollo/client/link/context";
import { ApolloClient, NormalizedCacheObject, from, createHttpLink } from "@apollo/client";
import moment from "moment";
import { Platform } from "react-native";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import { store } from "@redux/_core/store";
import getClient from "@services/bugsnag";
import { updateOfflineState } from "@redux/app/app.actions";
import createRetryLink from "./retryLink";
import { REGION, REGION_LIST, getCurrentLocale, region as regionService } from "@locale";

import { gqlInMemoryCache } from "./cache";
import { gqlCachePersistor } from "./persistor";

const appJson = require("../../../package.json");

const httpLink = () => createHttpLink({ fetch });

// restore the persisted the cache
gqlCachePersistor().restore();

const getAppVersion = () => {
  const version = DeviceInfo.getVersion();

  // means is local
  if (DETOX_ENABLED || version === "1.0") {
    return appJson.version;
  }

  return version;
};

const defaultHeaders = {
  app_version: getAppVersion(),
  device_id: DeviceInfo.getDeviceId(),
  apollo_client_name: `react_native_${Platform.OS}`,
};

// apollo_client name allows us to easily idenfiy the source of the request
// device_id is present on front-end bugsnag reports in device.id, so we can match it up to back-end logs
const requestIdPrefix = `${defaultHeaders.apollo_client_name}_${defaultHeaders.device_id}`;

// use a request counter to ensure uniqueness for closely batched requests
let requestCount = 0;

const getUserId = () => ((store.getState() as any) || {})?.user?.id || "unknown";

const authMiddleware = (region?: REGION) =>
  setContext(async (op, { headers }) => {
    // get the authentication token from async storage if it exists
    const token = await getToken();

    getClient().leaveBreadcrumb("Apollo request", { name: op.operationName }, "request");

    // We want to append the prefix with the current milliseconds to make the request ID unique
    const requestId = `${requestIdPrefix}_${getUserId()}_${moment().milliseconds()}_${requestCount}`;

    requestCount++;

    // if a region is specified, use that URI
    const uri = `${regionService.getRegionUri(region)}/graphql`;

    // return the headers to the context so httpLink can read them
    return {
      uri,
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
  store.dispatch(updateOfflineState(true));
});

// hashmap of all clients for every region
export const clients = {} as Record<REGION | "AUTO", ApolloClient<NormalizedCacheObject>>;

const makeClient = (r: REGION | "AUTO" = regionService.getPreferredRegion()) => {
  if (!clients[r]) {
    clients[r] = new ApolloClient({
      cache: gqlInMemoryCache(),
      link: from([authMiddleware(r === "AUTO" ? undefined : r), retryLink, httpLink()]),
    });
  }

  return clients[r];
};

// make a client for every region
REGION_LIST.forEach((r) => makeClient(r));

export default makeClient;
