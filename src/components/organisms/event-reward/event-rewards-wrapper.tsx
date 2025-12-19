import { View, ViewStyle } from "react-native";
import React, { memo, useCallback, useMemo } from "react";

import { Style, StyleSheet } from "@styles";
import EventReward, { IReward } from "./event-reward";
import { FlatList } from "@atoms";

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
  const { width, marginHorizontal, paddingHorizontal } = getRewardStyles(rewards?.length);

  const renderReward = useCallback(
    ({ item }: { item: IReward }) => (
      <EventReward
        reward={item}
        width={width}
        eventTitle={eventTitle}
        onClaimReward={onClaimReward}
        marginHorizontal={marginHorizontal}
        isClaimRewardEnabled={isClaimRewardEnabled}
      />
    ),
    [width, eventTitle, onClaimReward, isClaimRewardEnabled, marginHorizontal]
  );

  const contentContainerStyles = useMemo((): ViewStyle => {
    if (rewards?.length === 1) {
      return {
        width: "100%",
        justifyContent: "center",
      };
    }

    return {
      paddingHorizontal,
    };
  }, [paddingHorizontal, rewards?.length]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={rewards}
        horizontal={true}
        pagingEnabled={false}
        decelerationRate={0.9}
        renderItem={renderReward}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={contentContainerStyles}
        getItemLayout={getItemLayout}
      />
    </View>
  );
};

const getItemLayout = (_: unknown, index: number) => ({
  length: ESTIMATED_ITEM_SIZE,
  offset: ESTIMATED_ITEM_SIZE * index,
  index,
});

const keyExtractor = (reward: IReward) => reward.id;

const getRewardStyles = (rewardsSize: number) => {
  switch (rewardsSize) {
    case 1:
      return { width: Style.DEVICE_WIDTH - 48, marginHorizontal: Style.adjust(8), paddingHorizontal: 0 };
    case 2:
      return { width: (Style.DEVICE_WIDTH - 56) / 2, marginHorizontal: Style.adjust(8), paddingHorizontal: 0 };
    default:
      return { width: Style.adjust(136), marginHorizontal: Style.adjust(4), paddingHorizontal: Style.adjust(16) };
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
});

export default memo(EventRewardWrapper);
