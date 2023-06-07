import { StyleSheet, View } from "react-native";
import React, { memo, useCallback } from "react";

import { Style } from "@styles";
import EventReward, { IReward } from "./event-reward";
import { FlashList, ListRenderItem } from "@shopify/flash-list";

interface IEventRewardWrapperProps {
  rewards: IReward[];
  eventTitle: string;
  isClaimRewardEnabled?: boolean;
  onClaimReward?: (reward: IReward) => Promise<void>;
}

const ESTIMATED_ITEM_SIZE = 141;

const EventRewardWrapper = ({
  rewards,
  eventTitle,
  onClaimReward,
  isClaimRewardEnabled = true,
}: IEventRewardWrapperProps) => {
  const { width: rewardWidth, marginHorizontal } = getRewardWidthAndMargin(rewards?.length);
  const renderReward = useCallback<ListRenderItem<IReward>>(
    ({ item }) => (
      <EventReward
        reward={item}
        width={rewardWidth}
        eventTitle={eventTitle}
        onClaimReward={onClaimReward}
        isClaimRewardEnabled={isClaimRewardEnabled}
      />
    ),
    [rewardWidth]
  );

  return (
    <View style={styles.wrapper}>
      {rewards?.length > 2 ? (
        <FlashList
          data={rewards}
          horizontal={true}
          pagingEnabled={false}
          decelerationRate={0.9}
          renderItem={renderReward}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={ESTIMATED_ITEM_SIZE}
          contentContainerStyle={styles.eventRewardsContainer}
        />
      ) : (
        rewards?.map((reward) => (
          <EventReward
            key={reward.id}
            reward={reward}
            width={rewardWidth}
            eventTitle={eventTitle}
            marginHorizontal={marginHorizontal}
            isClaimRewardEnabled={isClaimRewardEnabled}
          />
        ))
      )}
    </View>
  );
};

const keyExtractor = (reward: IReward) => reward.id;

const getRewardWidthAndMargin = (rewardsSize: number) => {
  switch (rewardsSize) {
    case 1:
      return { width: Style.DEVICE_WIDTH - 48, marginHorizontal: Style.adjust(8) };
    case 2:
      return { width: (Style.DEVICE_WIDTH - 56) / 2, marginHorizontal: Style.adjust(8) };
    default:
      return { width: Style.adjust(136), marginHorizontal: Style.adjust(4) };
  }
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Style.adjust(16),
  },
  eventRewardsContainer: {
    paddingHorizontal: Style.adjust(16),
  },
});

export default memo(EventRewardWrapper);
