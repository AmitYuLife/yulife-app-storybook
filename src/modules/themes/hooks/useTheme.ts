import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { getCurrentUserId, getUserFeatures } from "@redux/user/user.selectors";
import { useMemo } from "react";
import Config from "react-native-config";
import { useSelector } from "react-redux";
import { DEFAULT_YULIFE_THEME } from "../helpers";

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

  const theme = query?.data?.getMobileGameTheme || DEFAULT_YULIFE_THEME;

  return {
    ...query,
    theme,
  };
};
