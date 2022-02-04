import React, { memo, useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Style } from "@styles";
import EventReward, { IReward } from "./event-reward";

interface IEventRewardWrapperProps {
  rewards: IReward[];
}

const EventRewardWrapper = ({ rewards }: IEventRewardWrapperProps) => {
  const { width: rewardWidth, marginHorizontal } = getRewardWidthAndMargin(rewards?.length);
  const renderReward = useCallback(({ item }) => {
    return <EventReward reward={item} width={rewardWidth} />;
  }, []);

  return (
    <View style={styles.wrapper}>
      {rewards?.length > 2 ? (
        <FlatList
          data={rewards}
          horizontal={true}
          pagingEnabled={false}
          decelerationRate={0.9}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(reward) => reward.id}
          renderItem={renderReward}
          contentContainerStyle={styles.contentContainer}
        />
      ) : (
        rewards.map((reward) => (
          <EventReward key={reward.id} width={rewardWidth} marginHorizontal={marginHorizontal} reward={reward} />
        ))
      )}
    </View>
  );
};

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
  contentContainer: {
    paddingHorizontal: Style.adjust(16),
  },
});

export default memo(EventRewardWrapper);
