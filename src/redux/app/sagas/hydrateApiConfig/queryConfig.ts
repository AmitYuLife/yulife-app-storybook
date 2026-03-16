import { ApolloQueryResult } from "@apollo/client";
import { GetPublicYuApiConfigQuery, GetPublicYuApiConfigWithThemeQuery, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import Logger from "@services/logging/logger";
import { getDeviceName, isAndroid } from "@utils";
import { getInstallReferrerAsync } from "expo-application";
import { Dimensions, Platform } from "react-native";
import Config from "react-native-config";

export default async function queryConfig({
  apolloClient,
  tempGameEnableAppTheme,
  token,
}: {
  apolloClient: ReturnType<typeof client>;
  tempGameEnableAppTheme: boolean;
  token: string;
}): Promise<ApolloQueryResult<GetPublicYuApiConfigQuery | GetPublicYuApiConfigWithThemeQuery>> {
  const shouldApplyThemeOnLogin = Config.HAS_THEME_ON_LOGIN === "true";

  if (!token && shouldApplyThemeOnLogin) {
    const screenDimensions = Dimensions.get("screen");
    const installationReferrerId = await getInstallationReferrerId();

    return await apolloClient.query({
      query: gql("GetPublicYuApiConfigWithFingerprintThemeDocument"),
      fetchPolicy: "no-cache",
      variables: {
        input: {
          deviceWidth: Math.ceil(screenDimensions.width),
          deviceHeight: Math.ceil(screenDimensions.height),
          osVersion: `${Platform.Version}`,
          deviceModel: getDeviceName(),
          installationReferrerId,
        },
      },
    });
  }

  if (tempGameEnableAppTheme) {
    return await apolloClient.query({
      query: gql("GetPublicYuApiConfigWithThemeDocument"),
      fetchPolicy: "no-cache",
    });
  }

  return await apolloClient.query({
    query: gql("GetPublicYuApiConfigDocument"),
    fetchPolicy: "no-cache",
  });
}

const getInstallationReferrerId = async (): Promise<string | undefined> => {
  const isAndroidPlatform = isAndroid();
  if (!isAndroidPlatform) {
    return undefined;
  }

  try {
    const installReferrer = await getInstallReferrerAsync();

    const source = installReferrer.match(/utm_source=([^&]*)/)?.[1];

    return source === "google-play" ? undefined : source;
  } catch (e) {
    Logger.error(e, { event: "getInstallationReferrerId", location: "useFingerprintTheme" });
  }
};
