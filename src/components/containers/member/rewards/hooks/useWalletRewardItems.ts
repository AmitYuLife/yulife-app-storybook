import { useQuery } from "@apollo/client/react/hooks";
import { gql } from "@graphql/__generated";
import { last } from "lodash";
import { useCallback, useState } from "react";

interface IUseWalletRewardItemsParams {
  rewardId: string;
  type?: string;
  markedAsUsed?: boolean;
  expired?: boolean;
}

export const useWalletRewardItems = ({ rewardId, type, markedAsUsed, expired }: IUseWalletRewardItemsParams) => {
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const { data, loading, refetch, fetchMore } = useQuery(gql(`GetMobileGameUserWalletRewardItemsDocument`), {
    variables: {
      rewardId,
      type,
      markedAsUsed,
      expired,
    },
    fetchPolicy: "no-cache",
  });

  const handleFetchMore = useCallback(() => {
    const sections = data?.getMobileGameUserWalletRewardItems?.sections || [];
    const lastSection = last(sections);

    if (!lastSection?.hasMore) {
      return;
    }

    const lastSectionIndex = sections.length - 1;
    setLoadingMore(true);
    fetchMore({
      variables: {
        rewardId,
        markedAsUsed,
        expired,
        type: lastSection.type,
        offset: lastSection.items.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const newSection = fetchMoreResult?.getMobileGameUserWalletRewardItems?.sections?.[0];
        if (!newSection) {
          return prev;
        }

        return {
          ...prev,
          getMobileGameUserWalletRewardItems: {
            ...prev.getMobileGameUserWalletRewardItems,
            sections: prev.getMobileGameUserWalletRewardItems.sections.map((section, index) => {
              if (index === lastSectionIndex) {
                return {
                  ...section,
                  items: [...section.items, ...newSection.items],
                  hasMore: newSection.hasMore,
                };
              }

              return section;
            }),
          },
        };
      },
    }).finally(() => {
      setLoadingMore(false);
    });
  }, [data?.getMobileGameUserWalletRewardItems?.sections, fetchMore, rewardId, markedAsUsed, expired]);

  return {
    data,
    loading,
    loadingMore,
    handleFetchMore,
    refetch,
  };
};
