import { Box, FlatList } from "@atoms";
import { RewardOnPressArgs } from "@components/containers/member/rewards/rewards.types";
import { RewardSectionHeader } from "@components/molecules";
import { GetMobileRecentlyUsedRewardsListQuery } from "@graphql/__generated";
import { t } from "@locale";
import { RecentRewardCard } from "@organisms";
import { Style, StyleSheet } from "@styles";
import { isEmpty } from "lodash";
import { memo, useCallback } from "react";

interface IRewardRecentlyUsedSectionContainerProps {
  recentRewards?: GetMobileRecentlyUsedRewardsListQuery["data"];
  onItemPress?: (item: RewardOnPressArgs) => void;
}

const MAX_ITEM_WIDTH = 120;
const ITEM_WIDTH = Math.min(Style.DEVICE_WIDTH / 2.5, MAX_ITEM_WIDTH);

type RecentlyUsedReward = GetMobileRecentlyUsedRewardsListQuery["data"]["recentlyUsedRewards"][0];
const RewardRecentlyUsedSectionContainer = ({
  recentRewards,
  onItemPress,
}: IRewardRecentlyUsedSectionContainerProps) => {
  const onPress = useCallback(
    (item: RecentlyUsedReward) => {
      onItemPress?.({
        id: item.id,
        name: item.name,
        sduiStepId: item.sduiStepId,
      });
    },
    [onItemPress]
  );

  const renderItem = useCallback(
    ({ item }: { item: RecentlyUsedReward }) => {
      return (
        <RecentRewardCard
          mr={15}
          label={item.name}
          imageUrl={item.image.uri}
          width={ITEM_WIDTH}
          onPress={() => onPress(item)}
        />
      );
    },
    [onPress]
  );

  if (isEmpty(recentRewards?.recentlyUsedRewards)) {
    return null;
  }

  return (
    <Box pb={15}>
      <RewardSectionHeader>{t("screens.rewards.list.recently_used")}</RewardSectionHeader>
      <FlatList
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        data={recentRewards.recentlyUsedRewards}
        contentContainerStyle={styles.container}
        getItemLayout={getItemLayout}
      />
    </Box>
  );
};

export default memo(RewardRecentlyUsedSectionContainer);

const getItemLayout = (_: unknown, index: number) => ({
  length: ITEM_WIDTH,
  offset: ITEM_WIDTH * index,
  index,
});

const styles = StyleSheet.create({
  container: {
    paddingLeft: Style.adjust(20),
    paddingRight: Style.adjust(10),
  },
});
