import { DETOX_ENABLED } from "@services/socket";
import { getToken } from "@services/storage";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { defaultDataIdFromObject, InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from "apollo-client";
import { from } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { createHttpLink } from "apollo-link-http";
import moment from "moment";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import { store } from "@redux/_core/store";
import region from "@services/region";
import { updateOfflineState } from "@redux/app/app.actions";
import createRetryLink from "./retryLink";
import { getLocale } from "@locale";

const appJson = require("../../../package.json");

const buildRegionalGqlUri = () => `${region.getPreferredRegionUri()}/graphql`;

const httpLink = () =>
  createHttpLink({
    uri: buildRegionalGqlUri(),
    fetch,
  });

const defaultYuLifeIdFromObject = (object: any) => `${object.__typename}-${object.id}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataIdFromObject = (object: any) => {
  switch (object.__typename) {
    case "UserPayload":
      return `${object.__typename}-${object.expiresAt}`;
    case "Level":
    case "CommunityGoal":
    case "Duel":
    case "LevelSlot":
    case "LevelSlotMilestone":
    case "User":
      return defaultYuLifeIdFromObject(object);
    case "CommunityGoalParticipant":
      return `${object.__typename}-${object.userId}-${object.stats.value}`;
    case "CommunityGoalParticipantStats":
      return `${object.__typename}-${object.value}`;
    case "DuelOpponent":
      return `${object.__typename}-${object.duelId}-${object.userId}-${object.score}`;
    case "DuelSearchResult":
      return `${object.__typename}-${object.customerId}`;
    case "MilestoneTarget":
      return `${object.__typename}-${object.steps}-${object.meditation}-${object.distance}`;
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
    case "SduiStyle":
      return `${object.__typename}-${object.property}-${object.value}`;
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

const authMiddleware = setContext(async (_, { headers }) => {
  // get the authentication token from async storage if it exists
  const token = await getToken();

  // return the headers to the context so httpLink can read them
  return {
    uri: buildRegionalGqlUri(),
    headers: {
      ...headers,
      ...defaultHeaders,
      authorization: token ? `Bearer ${token}` : "",
      date: moment().format(DATE_FORMAT_WITH_TZ),
      yu_client_token: Config.YU_CLIENT_TOKEN,
      yu_locale: getLocale(),
    },
  };
});

const errorAfterware = onError(() => {
  // might wanna do something here
  // console.error("Error ... ", error);
});

const retryLink = createRetryLink(() => {
  store.dispatch(updateOfflineState(true));
});

let client: ApolloClient<NormalizedCacheObject>;

export default () => {
  if (!client) {
    client = new ApolloClient({
      cache,
      link: from([authMiddleware, retryLink, errorAfterware, httpLink()]),
    });
  }

  return client;
};
