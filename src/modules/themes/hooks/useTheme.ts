import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { getCurrentUserId, getUserFeatures } from "@redux/user/user.selectors";
import { useMemo } from "react";
import Config from "react-native-config";
import { useSelector } from "react-redux";
import { MobileGameTheme } from "../types";

export const useTheme = () => {
  const shouldApplyThemeOnLogin = Config.HAS_THEME_ON_LOGIN === "true";

  const currentUserId = useSelector(getCurrentUserId);
  const { tempGameEnableAppTheme } = useSelector(getUserFeatures);

  const skip = useMemo(() => {
    if (currentUserId) {
      return !tempGameEnableAppTheme;
    }

    return !shouldApplyThemeOnLogin;
  }, [shouldApplyThemeOnLogin, tempGameEnableAppTheme, currentUserId]);

  const query = useQuery(gql("GetMobileGameThemeDocument"), {
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-only",
    skip,
    errorPolicy: "ignore",
  });

  return {
    ...query,
    theme: query?.data?.getMobileGameTheme || defaultTheme,
  };
};

const defaultTheme: MobileGameTheme = {
  id: "yulife",
  name: "YuLife",
  colors: {
    primary: {
      p20: "#FFF5FA",
      p40: "#FCE7F1",
      p50: "#FCE5EF",
      p60: "#F7B7D6",
      p80: "#F186BA",
      p100: "#F9BDD9",
      p200: "#F791BF",
      p300: "#F664A4",
      p400: "#F43E8E",
      p500: "#F50D78",
      p600: "#E30D76",
      p600Shadow: "#900860",
    },
  },
  assets: {},
};
