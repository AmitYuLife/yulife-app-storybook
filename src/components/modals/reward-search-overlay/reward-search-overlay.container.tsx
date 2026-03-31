import React, { memo, useCallback, useEffect, useState } from "react";
import RewardSearchOverlayScreen from "./reward-search-overlay.screen";
import { useBackHandler, useDebouncedQuery } from "@hooks";
import { RewardOnPressArgs } from "@components/containers/member/rewards/rewards.types";
import { gql, MobileRewardTag } from "@graphql/__generated";
import { Keyboard } from "react-native";

interface IRewardSearchOverlayProps {
  onClose: () => void;
  onItemPress?: (item: RewardOnPressArgs) => void;
  onPressWallet?: () => void;
  tags: string[];
}

const TRANSITION_DURATION = 350;
const MIN_SEARCH_LENGTH = 1;

const RewardSearchOverlayContainer = ({ onClose, onItemPress, onPressWallet, tags }: IRewardSearchOverlayProps) => {
  const [selectedTag, setSelectedTag] = useState<string>(MobileRewardTag.All);
  const [searchTerm, setSearchTerm] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchRewards, { data, loading }] = useDebouncedQuery(gql("GetMobileRewardsListItemsDocument"), {
    fetchPolicy: "no-cache",
    variables: { searchTerm, tag: selectedTag },
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
      setSelectedTag(MobileRewardTag.All);
      if (!term || !passedMinLength) {
        return;
      }

      setIsLoading(true);
      searchRewards({ searchTerm: term });
    },
    [searchRewards, passedMinLength]
  );

  const handleTagSelected = (tag: string) => {
    setSelectedTag(tag);
    setSearchTerm("");
    searchRewards({ tag, searchTerm: "" });
  };

  const handleItemPress = useCallback(
    (item: RewardOnPressArgs) => {
      Keyboard.dismiss();
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
      searchTerm={searchTerm}
      tags={tags}
      setSearchTerm={onSearch}
      setSelectedTag={handleTagSelected}
      selectedTag={selectedTag}
      isLoading={isLoading}
      isClosing={isClosing}
      onPressWallet={onPressWallet}
      onItemPress={handleItemPress}
      onClose={onClosed}
      showResults={passedMinLength || selectedTag !== MobileRewardTag.All}
      items={data?.data?.list}
    />
  );
};

export default memo(RewardSearchOverlayContainer);
