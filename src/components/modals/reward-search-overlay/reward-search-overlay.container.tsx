import React, { memo, useCallback, useEffect, useState } from "react";
import RewardSearchOverlayScreen from "./reward-search-overlay.screen";
import { useBackHandler, useDebouncedQuery } from "@hooks";
import { RewardOnPressArgs } from "@components/containers/member/rewards/rewards.types";
import { gql } from "@graphql/__generated";

interface IRewardSearchOverlayProps {
  onClose: () => void;
  onItemPress?: (item: RewardOnPressArgs) => void;
  onPressWallet?: () => void;
}

const TRANSITION_DURATION = 350;
const MIN_SEARCH_LENGTH = 1;

const RewardSearchOverlayContainer = ({ onClose, onItemPress, onPressWallet }: IRewardSearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchRewards, { data, loading }] = useDebouncedQuery(gql("GetMobileRewardsListItemsDocument"), {
    fetchPolicy: "no-cache",
    variables: { searchTerm },
  });

  const onClosed = useCallback(() => {
    setIsClosing(true);
    setSearchTerm("");
    setTimeout(() => {
      onClose();
    }, TRANSITION_DURATION);
  }, [onClose]);

  const passedMinLength = searchTerm.length >= MIN_SEARCH_LENGTH;
  const onSearch = useCallback(
    (term: string) => {
      setSearchTerm(term);
      if (!term || !passedMinLength) {
        return;
      }

      setIsLoading(true);
      searchRewards({ searchTerm: term });
    },
    [searchRewards, passedMinLength]
  );

  const handleItemPress = useCallback(
    (item: RewardOnPressArgs) => {
      onItemPress?.(item);
    },
    [onItemPress]
  );

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useBackHandler(() => {
    onClosed();
    return true;
  });

  return (
    <RewardSearchOverlayScreen
      transitionDuration={TRANSITION_DURATION}
      searchTerm={searchTerm}
      setSearchTerm={onSearch}
      isLoading={isLoading}
      isClosing={isClosing}
      onPressWallet={onPressWallet}
      onItemPress={handleItemPress}
      onClose={onClosed}
      showResults={passedMinLength}
      items={data?.data?.list}
    />
  );
};

export default memo(RewardSearchOverlayContainer);
