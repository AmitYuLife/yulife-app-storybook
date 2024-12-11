import { gql, SocialGroupLeaderboardSearchType } from "@graphql/__generated";
import { useState, useCallback, useEffect } from "react";
import { useDebouncedQuery } from "./useDebouncedQuery";

export const useSocialGroupUserSearch = (searchType?: SocialGroupLeaderboardSearchType) => {
  const [isSearchTextEmpty, setSearchTextEmpty] = useState(true);
  const [searchSocialGroupUser, { data, loading }] = useDebouncedQuery(gql("SearchLeaderboardUserDocument"), {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    searchSocialGroupUser({ name: "" });
  }, []);

  const handleChangeText = useCallback(
    (text: string) => {
      setSearchTextEmpty(text.length < 1);

      if (text.length < 1) {
        return;
      }

      searchSocialGroupUser({ name: text, ...(searchType ? { searchType } : {}) });
    },
    [searchSocialGroupUser]
  );

  return {
    isSearchTextEmpty,
    data,
    loading,
    handleChangeText,
  };
};
