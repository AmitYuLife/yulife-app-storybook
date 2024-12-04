import { gql } from "@graphql/__generated";
import { useState, useCallback } from "react";
import { useDebouncedQuery } from "./useDebouncedQuery";

export const useSocialGroupUserSearch = () => {
  const [isSearchTextEmpty, setSearchTextEmpty] = useState(true);
  const [searchSocialGroupUser, { data, loading }] = useDebouncedQuery(gql("SearchLeaderboardUserDocument"), {
    fetchPolicy: "network-only",
  });

  const handleChangeText = useCallback(
    (text: string) => {
      setSearchTextEmpty(text.length < 1);

      if (text.length < 1) {
        return;
      }

      searchSocialGroupUser({ name: text });
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
