import { ApolloQueryResult } from "@apollo/client";
import buildFingerprintDeviceInput from "@modules/themes/helpers/buildFingerprintDeviceThemeInput";
import { GetPublicYuApiConfigQuery, GetPublicYuApiConfigWithThemeQuery, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
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
    const fingerprintDeviceInput = await buildFingerprintDeviceInput();
    return await apolloClient.query({
      query: gql("GetPublicYuApiConfigWithFingerprintThemeDocument"),
      fetchPolicy: "no-cache",
      variables: {
        input: fingerprintDeviceInput,
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
