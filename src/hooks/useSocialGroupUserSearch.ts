import { gql, SocialGroupLeaderboardSearchType } from "@graphql/__generated";
import { useState, useCallback, useEffect } from "react";
import { useDebouncedQuery } from "./useDebouncedQuery";

interface IProps {
  searchType?: SocialGroupLeaderboardSearchType;
  allowUnfilteredSearch?: boolean;
}

export const useSocialGroupUserSearch = ({ searchType, allowUnfilteredSearch = false }: IProps) => {
  const [isFilteredSearch, setIsFilteredSearch] = useState(false);
  const [searchSocialGroupUser, { data, loading, networkStatus }] = useDebouncedQuery(
    gql("SearchLeaderboardUserDocument"),
    {
      fetchPolicy: "network-only",
    }
  );

  useEffect(() => {
    searchSocialGroupUser({ name: "", ...(searchType ? { searchType } : {}) });
  }, []);

  const handleChangeText = useCallback(
    (text: string) => {
      if (!allowUnfilteredSearch && text.length < 1) {
        return;
      }

      setIsFilteredSearch(text.length > 0);
      searchSocialGroupUser({ name: text, ...(searchType ? { searchType } : {}) });
    },
    [searchSocialGroupUser]
  );

  return {
    isFilteredSearch,
    data,
    loading,
    handleChangeText,
    networkStatus,
  };
};
