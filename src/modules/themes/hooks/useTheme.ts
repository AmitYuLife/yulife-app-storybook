import { useQuery } from "@apollo/client";
import { gql, MobileGameTheme } from "@graphql/__generated";

export const useTheme = () => {
  const query = useQuery(gql("GetMobileGameThemeDocument"), {
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-only",
    errorPolicy: "ignore",
  });

  return {
    ...query,
    theme: query?.data?.getMobileGameTheme || defaultTheme,
  };
};

const defaultTheme: MobileGameTheme = {
  id: "default",
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
